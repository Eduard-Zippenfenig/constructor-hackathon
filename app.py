import json
import os
import re
import smtplib
import sqlite3
from email.message import EmailMessage
from typing import Optional
import secrets

from flask import (
    Flask,
    jsonify,
    redirect,
    render_template,
    request,
    send_from_directory,
    session,
    url_for,
)
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__, instance_relative_config=True)
os.makedirs(app.instance_path, exist_ok=True)
app.secret_key = os.environ.get("SECRET_KEY", "dev-secret-key")

DATABASE = os.path.join(app.instance_path, "pulseprep.db")
PROBABILITY_BASE = os.path.abspath("/Users/eduard-zippenfenig/Desktop/probability")
EMAIL_REGEX = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    conn.executescript(
        """
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password_hash TEXT,
            goal TEXT,
            provider TEXT DEFAULT 'password',
            survey_json TEXT,
            email_confirmed INTEGER DEFAULT 0,
            confirmation_token TEXT
        );

        CREATE TABLE IF NOT EXISTS progress (
            user_id INTEGER PRIMARY KEY,
            data TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
        """
    )
    conn.commit()
    conn.close()

def ensure_schema():
    conn = get_db()
    cols = {row["name"] for row in conn.execute("PRAGMA table_info(users)")}
    if "email_confirmed" not in cols:
        conn.execute("ALTER TABLE users ADD COLUMN email_confirmed INTEGER DEFAULT 0")
    if "confirmation_token" not in cols:
        conn.execute("ALTER TABLE users ADD COLUMN confirmation_token TEXT")
    conn.execute("UPDATE users SET email_confirmed = 1 WHERE email_confirmed IS NULL")
    conn.commit()
    conn.close()


def current_user():
    user_id = session.get("user_id")
    if not user_id:
        return None
    conn = get_db()
    row = conn.execute(
        "SELECT id, full_name, email, goal, survey_json FROM users WHERE id = ?",
        (user_id,),
    ).fetchone()
    conn.close()
    return row


def ensure_progress(user_id):
    conn = get_db()
    row = conn.execute("SELECT data FROM progress WHERE user_id = ?", (user_id,)).fetchone()
    if row is None:
        conn.execute(
            "INSERT INTO progress (user_id, data) VALUES (?, ?)",
            (user_id, json.dumps({"modules": [], "exercises": []})),
        )
        conn.commit()
        progress = {"modules": [], "exercises": []}
    else:
        progress = json.loads(row["data"])
    conn.close()
    return progress


def save_progress(user_id, data):
    conn = get_db()
    conn.execute(
        "INSERT INTO progress (user_id, data) VALUES (?, ?) "
        "ON CONFLICT(user_id) DO UPDATE SET data=excluded.data",
        (user_id, json.dumps(data)),
    )
    conn.commit()
    conn.close()


init_db()
ensure_schema()


def list_materials():
    """Return dict of slides/homeworks/solutions file names if available."""
    materials = {}
    catalog = {
        "slides": os.path.join(PROBABILITY_BASE, "slides"),
        "homeworks": os.path.join(PROBABILITY_BASE, "homeworks"),
        "solutions": os.path.join(PROBABILITY_BASE, "homework-solutions"),
    }
    for key, folder in catalog.items():
        if os.path.isdir(folder):
            try:
                files = sorted(
                    f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder, f))
                )
            except OSError:
                files = []
        else:
            files = []
        materials[key] = files
    return materials


def send_confirmation_email(recipient: str, full_name: str, token: str):
    host = os.environ.get("SMTP_HOST")
    if not host:
        app.logger.info("SMTP_HOST not configured; skipping confirmation email.")
        return
    port = int(os.environ.get("SMTP_PORT", "587"))
    username = os.environ.get("SMTP_USERNAME") or os.environ.get("SMTP_USER")
    password = os.environ.get("SMTP_PASSWORD")
    sender = os.environ.get("SMTP_SENDER") or username or "PulsePrep <no-reply@pulseprep>"
    use_tls = os.environ.get("SMTP_USE_TLS", "true").lower() in {"1", "true", "yes"}

    message = EmailMessage()
    message["Subject"] = "Confirm your PulsePrep signup"
    message["From"] = sender
    message["To"] = recipient
    greeting = full_name or "there"
    confirm_link = url_for("confirm_email", token=token, _external=True)
    message.set_content(
        f"Hi {greeting},\n\n"
        "Welcome to PulsePrep! Please confirm your email address to activate your account.\n\n"
        f"Confirm here: {confirm_link}\n\n"
        "If this wasn't you, you can ignore this message.\n\n"
        "Stay focused,\nPulsePrep Team"
    )

    try:
        with smtplib.SMTP(host, port, timeout=10) as server:
            if use_tls:
                server.starttls()
            if username and password:
                server.login(username, password)
            server.send_message(message)
            app.logger.info("Confirmation email sent to %s", recipient)
    except Exception as exc:  # pragma: no cover - best effort
        app.logger.warning("Failed to send confirmation email: %s", exc)

def register_user(full_name: str, email: str, password: Optional[str], goal: str, provider: str = "password"):
    full_name = (full_name or "").strip()
    email = (email or "").strip().lower()
    goal = (goal or "").strip()
    if not full_name:
        raise ValueError("Name is required")
    if not validate_email(email):
        raise ValueError("Valid email is required")
    conn = get_db()
    # Use a hashing method compatible with this environment's hashlib
    # (some macOS/Python builds may not expose newer algorithms like scrypt)
    password_hash = generate_password_hash(password, method="pbkdf2:sha256") if password else None
    try:
        token = secrets.token_urlsafe(32)
        conn.execute(
            "INSERT INTO users (full_name, email, password_hash, goal, provider, email_confirmed, confirmation_token) VALUES (?, ?, ?, ?, ?, ?, ?)",
            (full_name, email, password_hash, goal, provider, 0, token),
        )
        user_id = conn.execute("SELECT last_insert_rowid()").fetchone()[0]
        conn.execute(
            "INSERT INTO progress (user_id, data) VALUES (?, ?)",
            (user_id, json.dumps({"modules": [], "exercises": []})),
        )
        conn.commit()
        conn.close()
        send_confirmation_email(email, full_name, token)
        return user_id
    except sqlite3.IntegrityError as exc:
        conn.close()
        raise ValueError("Email already registered") from exc


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/course")
def course():
    return render_template("course.html")


@app.route("/survey")
def survey():
    user = current_user()
    if not user:
        return redirect("/")
    return render_template("survey.html")

@app.route("/catalog")
def catalog():
    user = current_user()
    return render_template("catalog.html", user=user)


@app.get("/api/materials")
def api_materials():
    return jsonify(list_materials())


@app.get("/materials/<category>/<path:filename>")
def download_material(category, filename):
    allowed = {
        "slides": os.path.join(PROBABILITY_BASE, "slides"),
        "homeworks": os.path.join(PROBABILITY_BASE, "homeworks"),
        "solutions": os.path.join(PROBABILITY_BASE, "homework-solutions"),
    }
    folder = allowed.get(category)
    if not folder or not os.path.isfile(os.path.join(folder, filename)):
        return jsonify({"error": "Not found"}), 404
    return send_from_directory(folder, filename, as_attachment=True)

@app.route("/auth", methods=["GET", "POST"])
def auth_form():
    message = None
    error = None
    form = {"full_name": "", "email": "", "goal": ""}
    if request.method == "POST":
        form["full_name"] = request.form.get("full_name", "")
        form["email"] = request.form.get("email", "")
        form["goal"] = request.form.get("goal", "")
        password = request.form.get("password", "")
        try:
            if len(password) < 6:
                raise ValueError("Password must be at least 6 characters")
            user_id = register_user(form["full_name"], form["email"], password, form["goal"])
            message = "Account created. Check your email to confirm before logging in."
        except ValueError as exc:
            error = str(exc)
    return render_template("auth.html", error=error, message=message, form=form)


@app.get("/api/session")
def api_session():
    user = current_user()
    if not user:
        return jsonify({"authenticated": False})
    # ensure email confirmed; if not, clear session
    conn = get_db()
    confirmed = conn.execute("SELECT email_confirmed FROM users WHERE id = ?", (user["id"],)).fetchone()
    conn.close()
    if not confirmed or not confirmed["email_confirmed"]:
        session.clear()
        return jsonify({"authenticated": False, "error": "Email not confirmed"})
    progress = ensure_progress(user["id"])
    survey = json.loads(user["survey_json"]) if user["survey_json"] else None
    return jsonify(
        {
            "authenticated": True,
            "user": {
                "id": user["id"],
                "fullName": user["full_name"],
                "email": user["email"],
                "goal": user["goal"],
            },
            "survey": survey,
            "progress": progress,
        }
    )


def validate_email(email):
    return bool(email and EMAIL_REGEX.match(email))


@app.route("/confirm/<token>")
def confirm_email(token):
    conn = get_db()
    row = conn.execute(
        "SELECT id FROM users WHERE confirmation_token = ?", (token,)
    ).fetchone()
    if not row:
        conn.close()
        return "Invalid or expired confirmation link.", 400
    user_id = row["id"]
    conn.execute(
        "UPDATE users SET email_confirmed = 1, confirmation_token = NULL WHERE id = ?",
        (user_id,),
    )
    conn.commit()
    conn.close()
    session["user_id"] = user_id
    return redirect("/catalog")


@app.post("/api/signup")
def api_signup():
    data = request.get_json() or {}
    full_name = (data.get("fullName") or "").strip()
    email = (data.get("email") or "").strip().lower()
    password = data.get("password") or ""
    goal = (data.get("goal") or "").strip()
    if not full_name:
        return jsonify({"error": "Name is required"}), 400
    if not validate_email(email):
        return jsonify({"error": "Valid email is required"}), 400
    if len(password) < 6:
        return jsonify({"error": "Password must be at least 6 characters"}), 400
    try:
        user_id = register_user(full_name, email, password, goal)
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400
    return jsonify({"confirmationSent": True})


@app.post("/api/login")
def api_login():
    data = request.get_json() or {}
    email = (data.get("email") or "").strip().lower()
    password = data.get("password") or ""
    if not validate_email(email):
        return jsonify({"error": "Valid email is required"}), 400
    conn = get_db()
    row = conn.execute(
        "SELECT id, password_hash, survey_json, email_confirmed FROM users WHERE email = ?", (email,)
    ).fetchone()
    conn.close()
    if not row or not row["password_hash"] or not check_password_hash(row["password_hash"], password):
        return jsonify({"error": "Invalid credentials"}), 400
    if not row["email_confirmed"]:
        return jsonify({"error": "Please confirm your email before logging in."}), 403
    session["user_id"] = row["id"]
    needs_survey = row["survey_json"] is None
    return jsonify({"authenticated": True, "needsSurvey": needs_survey})


@app.post("/api/google-login")
def api_google_login():
    data = request.get_json() or {}
    email = (data.get("email") or "").strip().lower()
    full_name = (data.get("fullName") or "Google Learner").strip()
    if not validate_email(email):
        return jsonify({"error": "Valid Google email required"}), 400
    conn = get_db()
    row = conn.execute("SELECT id, survey_json, email_confirmed FROM users WHERE email = ?", (email,)).fetchone()
    if row:
        user_id = row["id"]
        needs_survey = row["survey_json"] is None
        if not row["email_confirmed"]:
            conn.execute(
                "UPDATE users SET email_confirmed = 1, confirmation_token = NULL WHERE id = ?",
                (user_id,),
            )
            conn.commit()
    else:
        conn.execute(
            "INSERT INTO users (full_name, email, provider, email_confirmed) VALUES (?, ?, 'google', 1)",
            (full_name, email),
        )
        user_id = conn.execute("SELECT last_insert_rowid()").fetchone()[0]
        conn.execute(
            "INSERT INTO progress (user_id, data) VALUES (?, ?)",
            (user_id, json.dumps({"modules": [], "exercises": []})),
        )
        conn.commit()
        send_confirmation_email(email, full_name)
        needs_survey = True
    conn.close()
    session["user_id"] = user_id
    return jsonify({"authenticated": True, "needsSurvey": needs_survey})


@app.post("/api/logout")
def api_logout():
    session.clear()
    return jsonify({"success": True})


@app.post("/api/survey")
def api_survey():
    user = current_user()
    if not user:
        return jsonify({"error": "Unauthorized"}), 401
    data = request.get_json() or {}
    required_fields = ("audio", "structure", "mathStyle", "grit")
    if not all(data.get(field) for field in required_fields):
        return jsonify({"error": "Survey is incomplete"}), 400
    conn = get_db()
    conn.execute(
        "UPDATE users SET survey_json = ? WHERE id = ?",
        (json.dumps(data), user["id"]),
    )
    conn.commit()
    conn.close()
    return jsonify({"saved": True})


@app.get("/api/progress")
def api_get_progress():
    user = current_user()
    if not user:
        return jsonify({"error": "Unauthorized"}), 401
    progress = ensure_progress(user["id"])
    return jsonify(progress)


@app.post("/api/progress")
def api_update_progress():
    user = current_user()
    if not user:
        return jsonify({"error": "Unauthorized"}), 401
    data = request.get_json() or {}
    track = data.get("track")
    index = data.get("index")
    status = data.get("status")
    if track not in {"modules", "exercises"} or not isinstance(index, int):
        return jsonify({"error": "Invalid payload"}), 400
    if status not in {"not-started", "progress", "completed"}:
        return jsonify({"error": "Invalid status"}), 400
    progress = ensure_progress(user["id"])
    track_list = progress.get(track, [])
    while len(track_list) <= index:
        track_list.append("not-started")
    track_list[index] = status
    progress[track] = track_list
    save_progress(user["id"], progress)
    return jsonify({"saved": True})


@app.get("/api/health")
def health():
    return {"status": "ok"}


if __name__ == "__main__":
    app.run(debug=True)
