const DEFAULT_WORKSPACE = {
  level: "launch",
  mathFocus: "text",
  survey: {
    audio: "lofi",
    structure: "3",
    grit: "coach",
  },
  mathModules: [
    {
      title: "Unit 1 · Foundations",
      description: "Sample spaces, events, and complements.",
      lessons: [
        "Lesson 1 — Identify outcomes and events",
        "Lesson 2 — Complements and unions/intersections",
        "Lesson 3 — Quick mixed practice",
      ],
    },
    {
      title: "Unit 2 · Counting Basics",
      description: "Multiplication rule, permutations, combinations.",
      lessons: [
        "Lesson 1 — Tree sketches",
        "Lesson 2 — Permutations vs combinations",
        "Lesson 3 — Story-driven counting practice",
      ],
    },
  ],
  englishModules: [
    {
      title: "Unit 1 · Probability Narratives",
      description: "Write the experiment, outcomes, and events in plain language.",
      lessons: [
        "Lesson 1 — Story-before-symbol practice",
        "Lesson 2 — Rename events clearly",
        "Lesson 3 — Micro writeups for 3 problems",
      ],
    },
    {
      title: "Unit 2 · Visual Proofs",
      description: "Use trees, Venns, and tables to justify results.",
      lessons: [
        "Lesson 1 — Tree + table pairing",
        "Lesson 2 — Venn overlap practice",
        "Lesson 3 — Explain your diagram",
      ],
    },
  ],
  workspaceModules: {
    math: [
      {
        title: "Probability Foundations",
        description:
          "Name the experiment, outcomes, and events; compute simple probabilities with complements.",
        media: {
          guideTitle: "Guided Exercise · Events & Complements",
          guideIntro:
            "For each situation, list the sample space, define two events, and find a complement.",
          guideProblems: [
            "1) Roll a fair die. Let A be 'even', B be 'prime'. List S, A, B, and P(A), P(B), P(A ∪ B).",
            "2) Draw a card from a standard deck. Define an event and its complement; compute both probabilities.",
            "3) Flip two coins. Define event 'exactly one head' and compute its probability.",
            "4) Two events A and B in a class survey: P(A)=0.4, P(B)=0.5, P(A∩B)=0.2. Compute P(A∪B).",
          ],
          graphPrompt:
            "Sketch a simple Venn diagram for problem 1 showing A, B, and the overlap.",
          notesPrompt:
            "Write a one-line rule for when to use complements to speed up a problem.",
        },
        tasks: [
          "State the experiment and sample space before writing symbols.",
          "Compute at least one probability using a complement shortcut.",
          "Write a 3-sentence summary of how you distinguish events vs. outcomes.",
        ],
      },
      {
        title: "Counting Basics",
        description: "Multiplication rule, permutations, and combinations with short stories.",
        media: {
          guideTitle: "Guided Exercise · Count It",
          guideIntro:
            "Decide whether order matters, then compute using a sketch, permutation, or combination.",
          guideProblems: [
            "1) You create a 3-character password using A–D without repeats. How many passwords?",
            "2) Choose 3 students from 10 for a committee (order doesn’t matter). How many ways?",
            "3) Order 2 toppings from 5 on a pizza where order doesn’t matter. How many combinations?",
            "4) Five runners finish a race; how many possible finishing orders?",
          ],
          graphPrompt:
            "Draw a tiny tree for problem 1 to verify the multiplication rule.",
          notesPrompt:
            "List two cues that tell you to use nPr vs. nCr.",
        },
        tasks: [
          "Annotate each problem with 'order matters?' before solving.",
          "Check one answer with a quick tree or table to confirm.",
          "Write a short rule-of-thumb card for permutations vs. combinations.",
        ],
      },
      {
        title: "Conditional Sense",
        description:
          "Use two-way tables and trees to compute conditional probabilities and test independence.",
        media: {
          guideTitle: "Guided Exercise · Table & Tree",
          guideIntro:
            "Fill the missing cells, compute P(A|B), and decide whether A and B look independent.",
          guideProblems: [
            "1) A class of 40 has 18 who like math, 25 who like science, and 12 who like both. Build the table and compute P(math | science).",
            "2) A bag has 3 red and 2 blue marbles. Draw one without replacement, then another. Use a tree to find P(second is blue).",
            "3) A survey shows 60% stream music; 30% stream podcasts; 20% do both. Are streaming music and podcasts independent?",
            "4) Given P(A)=0.5, P(B)=0.4, P(A|B)=0.6, compute P(A∩B) and check independence.",
          ],
          graphPrompt:
            "Sketch the two-way table for problem 1 and highlight the conditional region.",
          notesPrompt:
            "Write how you check independence using either P(A)P(B) or comparing conditionals.",
        },
        tasks: [
          "Compute two conditional probabilities from your table/tree.",
          "State in words whether the events look independent and why.",
          "Record a 45-second explanation of P(A|B) for a friend.",
        ],
      },
    ],
    english: [
      {
        title: "Probability Narratives",
        description: "Write clear stories for experiments, outcomes, and events before using symbols.",
        media: {
          guideTitle: "Guided Exercise · Story First",
          guideIntro:
            "Rewrite each scenario in your own words, then define events with short labels.",
          guideProblems: [
            "1) Coin + die experiment. Describe it and name a clear event.",
            "2) Card draw with replacement. Describe what replacement means in words.",
            "3) Bag of marbles with no replacement. Explain how the pool changes.",
            "4) Medical test story: define events for disease, positive test, and explain sensitivity/specificity.",
          ],
          graphPrompt:
            "Create a small annotation of the sample space for one problem (e.g., pairs (coin, die)).",
          notesPrompt:
            "Draft two sentence starters for defining events (e.g., 'Let A be the event that…').",
        },
        tasks: [
          "Rewrite three prompts in plain language before computing anything.",
          "Label events with short names and keep a legend beside your work.",
          "Write one reflection on how the story clarifies the math.",
        ],
      },
      {
        title: "Visual Proofs",
        description: "Use trees, Venns, and tables to justify probability answers.",
        media: {
          guideTitle: "Guided Exercise · Draw & Justify",
          guideIntro:
            "For each problem, pick a visual (tree, Venn, or table) and annotate it.",
          guideProblems: [
            "1) Two-coin flip: draw a tree and mark each probability.",
            "2) Overlapping events: sketch a Venn with A, B, and A∩B shaded.",
            "3) Two-way table with row/column totals: fill and verify sums.",
            "4) Bayes diagnostic example: tree with prior, sensitivity, and specificity.",
          ],
          graphPrompt:
            "Pick your favorite representation from above and color-code its parts.",
          notesPrompt:
            "Write a mini checklist for choosing a representation: tree vs. Venn vs. table.",
        },
        tasks: [
          "Draw one visual per problem and label probabilities or counts.",
          "Write one sentence explaining why your visual proves the result.",
          "Save your best visual as a template for future problems.",
        ],
      },
      {
        title: "Assumptions Check",
        description: "State independence, replacement, and model-fit assumptions explicitly.",
        media: {
          guideTitle: "Guided Exercise · Call the Assumptions",
          guideIntro:
            "Identify which assumptions are needed and whether they hold in each prompt.",
          guideProblems: [
            "1) Coin flips: independent? Why?",
            "2) Drawing cards without replacement: independent? Why not?",
            "3) Binomial claim with small sample: which assumptions might fail?",
            "4) Are test results independent when sampling without replacement from a small group?",
          ],
          graphPrompt:
            "Create a two-column note: 'Assumption' and 'Evidence/Counterexample' for one scenario.",
          notesPrompt:
            "Write two stems: 'We assume ____ so that ____' and 'This assumption might fail because ____'.",
        },
        tasks: [
          "List assumptions before solving each problem.",
          "Mark any assumption that feels shaky and why.",
          "Record a short note on how assumptions change answers.",
        ],
      },
    ],
  },
};

const defaultQuestionBank = [
  {
    prompt: "Roll a fair die. What is P(rolling an even number)?",
    theory: "Sample space S = {1,2,3,4,5,6}. Event Even = {2,4,6}. Probability = |Even| / |S|.",
    options: ["1/2", "1/3", "2/3", "1/6"],
    correct: 0,
    explain: "Even outcomes are {2,4,6} so 3 of 6 outcomes → 1/2.",
  },
  {
    prompt: "Flip two coins. What is P(exactly one head)?",
    theory: "List outcomes: HH, HT, TH, TT. Exactly one head means 'HT' or 'TH'.",
    options: ["1/4", "1/2", "3/4", "1/8"],
    correct: 1,
    explain: "Exactly one head appears in 2 of 4 outcomes → 1/2.",
  },
  {
    prompt: "Choose 2 students from 5. How many unordered pairs?",
    theory: "Order does not matter, so use combinations: nCk = n! / (k!(n-k)!).",
    options: ["5", "10", "20", "15"],
    correct: 1,
    explain: "5 choose 2 = 10.",
  },
  {
    prompt: "Bag has 3 red, 2 blue marbles. Draw 1 without replacement, then 1 more. P(second is blue)?",
    theory: "Use a tree: first draw affects counts. Compute P(B on second) = P(R then B) + P(B then B).",
    options: ["2/5", "1/2", "3/10", "7/10"],
    correct: 0,
    explain: "P(R then B)= (3/5)*(2/4)=6/20; P(B then B)=(2/5)*(1/4)=2/20; total 8/20=2/5.",
  },
  {
    prompt: "Bernoulli(p=0.4) run 3 times. P(exactly 2 successes)?",
    theory: "Binomial with n=3, k=2: C(3,2) p^2 (1-p).",
    options: ["0.144", "0.288", "0.432", "0.6"],
    correct: 1,
    explain: "C(3,2)*0.4^2*0.6 = 3*0.16*0.6 = 0.288.",
  },
  {
    prompt: "Normal(0,1): Which z captures middle 68% of the mass (approximately)?",
    theory: "Empirical rule: 68% of mass lies within 1 standard deviation.",
    options: ["|z| < 0.5", "|z| < 1", "|z| < 2", "|z| < 3"],
    correct: 1,
    explain: "About 68% lies between -1 and 1.",
  },
];

const heroTitle = document.getElementById("workspace-title");
const heroSubtitle = document.getElementById("workspace-subtitle");
const heroTags = document.getElementById("workspace-tags");
const tagDropdown = document.getElementById("workspace-tag-dropdown");
const tagDropdownToggle = document.getElementById("tag-dropdown-toggle");
const tagDropdownMenu = document.getElementById("tag-dropdown-menu");

const audioLabels = {
  "white noise": "White noise",
  silence: "Silence",
  lofi: "Lo-fi music",
  classical: "Classical music",
  genz: "Gen Z learning playlist",
};

const gritLabels = {
  solo: "Independent starter",
  hint: "Light hint support",
  coach: "Coaching prompts",
};

const loadWorkspace = () => {
  try {
    const data = localStorage.getItem("satCourseWorkspace");
    if (!data) {
      return DEFAULT_WORKSPACE;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error("Unable to parse workspace payload", error);
    return DEFAULT_WORKSPACE;
  }
};

const workspace = loadWorkspace();
const courseQuestionBank =
  Array.isArray(workspace.questionBank) && workspace.questionBank.length
    ? workspace.questionBank
    : defaultQuestionBank;
const courseName = workspace.courseName || "Probability";
const courseCode = workspace.courseCode || "34567";
const trackLabels = workspace.trackLabels || { math: "Math", english: "English" };
const cleanTitle = (title) => {
  if (!title) return "";
  return title.replace(/^(Launch|Boost|Excel)\s+(Lab|Studio)\s*·\s*/i, "").trim();
};

const withQuestions = (units) =>
  units.map((unit) => ({
    ...unit,
    title: cleanTitle(unit.title),
    questions: unit.questions && unit.questions.length ? unit.questions : courseQuestionBank,
  }));

const practiceStorageKey = "practiceMoreQueue";
const loadPracticeQueue = () => {
  try {
    const data = localStorage.getItem(practiceStorageKey);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

const savePracticeQueue = (queue) => {
  try {
    localStorage.setItem(practiceStorageKey, JSON.stringify(queue));
  } catch (error) {
    console.error("Unable to save practice queue", error);
  }
};

const addToPractice = (question) => {
  const queue = loadPracticeQueue();
  const exists = queue.find((item) => item.prompt === question.prompt);
  if (!exists) {
    queue.push(question);
    savePracticeQueue(queue);
    rebuildPracticeUnits();
  }
};

const removeFromPractice = (question) => {
  const queue = loadPracticeQueue().filter((item) => item.prompt !== question.prompt);
  savePracticeQueue(queue);
  rebuildPracticeUnits();
};

const rebuildPracticeUnits = () => {
  const queue = loadPracticeQueue();
  practiceUnits = queue.map((q, idx) => ({
    title: `Practice More · ${q.prompt.substring(0, 42)}${q.prompt.length > 42 ? "…" : ""}`,
    description: "Auto-generated from your recent misses.",
    media: {
      guideTitle: "Redo this concept",
      guideIntro: q.theory || "Review the setup, then try again.",
      guideProblems: q.options.map((opt, i) => `${i + 1}) ${opt}`),
      notesPrompt: q.explain || "",
    },
    questions: [q],
  }));
  renderNav(navPracticeList, practiceUnits, "practice");
};

const createTag = (label) => {
  const pill = document.createElement("span");
  pill.className = "pill";
  pill.textContent = label;
  return pill;
};

const hydrateHero = () => {
  const missionLevel = (workspace.level || "course").toString().toUpperCase();
  const mathFocusLabel = (workspace.mathFocus || "text")
    .replace("explain", "More Explanations")
    .replace("graph", "Graph View")
    .replace("text", "More Text")
    .replace("formula", "Formula Pulse");
  heroTitle.textContent =
    workspace.heroTitle || `${courseCode}, your ${missionLevel} mission is ready`;
  heroSubtitle.textContent =
    workspace.heroSubtitle ||
    `Focus: ${mathFocusLabel}. Goal: ${workspace.account?.goal || "Climb your next score band"}.`;
  heroTags.innerHTML = "";
  const defaultTags = [
    audioLabels[workspace?.survey?.audio] || "Lo-fi music",
    `Structure score: ${workspace?.survey?.structure || "3"}`,
    gritLabels[workspace?.survey?.grit] || "Coaching prompts",
  ];
  if (workspace.account?.fullName) {
    defaultTags.push(workspace.account.goal || "Score jump");
  }
  const tags = Array.isArray(workspace.heroTags) && workspace.heroTags.length
    ? workspace.heroTags
    : defaultTags;
  heroTags.innerHTML = "";
  tags.forEach((tag) => heroTags.appendChild(createTag(tag)));
  renderTagDropdown(tags);
};

const renderTagDropdown = (tags = []) => {
  if (!tagDropdownMenu || !tagDropdownToggle || !tagDropdown) return;
  tagDropdownMenu.innerHTML = "";
  const label = tags[0] || "Focus areas";
  tagDropdownToggle.childNodes[0].nodeValue = `${label} `;
  tags.forEach((tag) => {
    const li = document.createElement("li");
    li.textContent = tag;
    tagDropdownMenu.appendChild(li);
  });
};

const setupTagDropdown = () => {
  if (!tagDropdown || !tagDropdownToggle || !tagDropdownMenu) return;
  tagDropdownToggle.addEventListener("click", () => {
    tagDropdown.classList.toggle("open");
  });
  document.addEventListener("click", (event) => {
    if (!tagDropdown.contains(event.target)) {
      tagDropdown.classList.remove("open");
    }
  });
};

const renderMediaTile = (type, media) => {
  if (!media) return "";
  if (type === "video") {
    const problems = (media.guideProblems || [])
      .map((problem) => `<li>${problem}</li>`)
      .join("");
    return `
      <div class="media-tile video">
        <p class="media-label">Guided Exercise</p>
        <p><strong>${media.guideTitle || "Guided practice"}</strong></p>
        <p class="muted-small">${media.guideIntro || ""}</p>
        ${problems ? `<ul>${problems}</ul>` : ""}
      </div>
    `;
  }
  if (type === "graph" && media.graphPrompt) {
    return `
      <div class="media-tile graph">
        <p class="media-label">Visual Prompt</p>
        <p>${media.graphPrompt}</p>
      </div>
    `;
  }
  if (media.notesPrompt) {
    return `
      <div class="media-tile notes">
        <p class="media-label">Reflection</p>
        <p>${media.notesPrompt}</p>
      </div>
    `;
  }
  return "";
};

const renderQuestions = (unit) => {
  if (!unit.questions || !unit.questions.length) return "";
  const items = unit.questions
    .map(
      (q, idx) => `
      <article class="question-card" data-index="${idx}">
        <header>
          <p class="media-label">Single choice</p>
          <h4>${q.prompt}</h4>
        </header>
        ${q.theory ? `<p class="muted theory-block">${q.theory}</p>` : ""}
        <div class="question-options">
          ${q.options
            .map(
              (opt, optIdx) => `
                <label class="option-row">
                  <input type="radio" name="q-${idx}" value="${optIdx}" />
                  <span>${opt}</span>
                </label>
              `
            )
            .join("")}
        </div>
        <div class="question-actions">
          <button type="button" class="ghost small check-answer" data-question="${idx}">Check answer</button>
          <span class="answer-feedback muted"></span>
        </div>
      </article>
    `
    )
    .join("");
  return `
    <section class="question-set">
      <div class="actions-header">
        <h4>Quick checks</h4>
        <p class="muted">Choose one option and verify instantly.</p>
      </div>
      <div class="question-grid">
        ${items}
      </div>
    </section>
  `;
};

const buildModuleMarkup = (unit, track) => {
  const tasks = (unit.tasks || []).map((task) => `<li>${task}</li>`).join("");
  const resources = (unit.resources || [])
    .map((res) => `<li><a href="${res.href}" target="_blank">${res.label}</a></li>`)
    .join("");
  return `
    <div class="module-card">
      <header class="module-header">
        <div class="module-icon">📘</div>
        <div>
          <p class="module-eyebrow">Practice set</p>
          <h3>${unit.title}</h3>
          <p>${unit.description}</p>
        </div>
      </header>
      <div class="module-media">
        ${renderMediaTile("video", unit.media)}
        ${renderMediaTile("graph", unit.media)}
        ${renderMediaTile("notes", unit.media)}
      </div>
      ${resources ? `<div class="module-resources"><h4>Resources</h4><ul>${resources}</ul></div>` : ""}
      <section class="module-actions">
        <div class="actions-header">
          <h4>Practice moves</h4>
          <div class="action-buttons">
            <button type="button" class="ghost small">Start set</button>
            <button type="button" class="primary small mark-complete" data-track="${track}">
              Mark completed
            </button>
          </div>
        </div>
        <ul class="task-list">${tasks}</ul>
      </section>
      ${renderQuestions(unit)}
    </div>
  `;
};

const tracks = {
  modules: {
    math: withQuestions((workspace.workspaceModules || DEFAULT_WORKSPACE.workspaceModules).math || []),
    english: withQuestions((workspace.workspaceModules || DEFAULT_WORKSPACE.workspaceModules).english || []),
  },
  exercises: {
    math: withQuestions((workspace.workspaceModules || DEFAULT_WORKSPACE.workspaceModules).math || []),
    english: withQuestions((workspace.workspaceModules || DEFAULT_WORKSPACE.workspaceModules).english || []),
  },
};

const navModuleList = document.getElementById("module-nav");
const navExerciseList = document.getElementById("exercise-nav");
const navPracticeList = document.getElementById("practice-nav");
const contentStage = document.getElementById("content-stage");

// Hide any stray "Course catalog" links that may linger from previous layouts.
const hideRogueCatalogLinks = () => {
  document.querySelectorAll("a, button").forEach((el) => {
    const label = (el.textContent || "").trim().toLowerCase();
    if (label === "course catalog" && !el.classList.contains("back-button")) {
      el.style.display = "none";
    }
  });
};

const flattenUnits = (track) =>
  track.math.concat(track.english).map((unit, idx) => ({
    ...unit,
    track: idx < track.math.length ? trackLabels.math : trackLabels.english,
  }));

const moduleUnits = flattenUnits(tracks.modules);
const exerciseUnits = flattenUnits(tracks.exercises);
let practiceUnits = [];

let progressState = {
  modules: [],
  exercises: [],
  practice: [],
};
let currentSelection = { track: "modules", index: 0 };

const ensureStatusLength = (track, length) => {
  const list = progressState[track];
  while (list.length < length) {
    list.push("not-started");
  }
};

const statusForIndex = (track, index) => {
  ensureStatusLength(track, index + 1);
  return progressState[track][index];
};

const renderNav = (listEl, units, track) => {
  listEl.innerHTML = "";
  units.forEach((unit, index) => {
    const item = document.createElement("li");
    item.className = "nav-item";
    item.dataset.track = track;
    item.dataset.index = index;
    const status = statusForIndex(track, index);
    const kind =
      track === "modules" ? "Module" : track === "exercises" ? "Exercise" : "Adaptive practice";
    item.innerHTML = `
      <span class="status ${status}"></span>
      <div>
        <div class="nav-item-title">${unit.title}</div>
        <div class="nav-item-subtitle">${unit.track || courseName} · ${kind}</div>
      </div>
    `;
    listEl.appendChild(item);
  });
};

const setProgressStatus = async (track, index, status) => {
  ensureStatusLength(track, index + 1);
  progressState[track][index] = status;
  const statusEl = document.querySelector(
    `.nav-item[data-track="${track}"][data-index="${index}"] .status`
  );
  if (statusEl) {
    statusEl.className = `status ${status}`;
  }
  if (track === "practice") return;
  try {
    const response = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ track, index, status }),
    });
    if (response.status === 401) {
      window.location.href = "/";
    }
  } catch (error) {
    console.error("Unable to save progress", error);
  }
};

const attachQuestionHandlers = (unit, track, index) => {
  const cards = document.querySelectorAll(".question-card");
  if (!cards.length) return;
  const checkCompletion = () => {
    const allCorrect = Array.from(cards).every((card) => card.dataset.solved === "true");
    if (allCorrect) {
      setProgressStatus(track, index, "completed");
    } else {
      setProgressStatus(track, index, "progress");
    }
  };
  cards.forEach((card) => {
    const btn = card.querySelector(".check-answer");
    const feedback = card.querySelector(".answer-feedback");
    const qIdx = Number(card.dataset.index);
    btn?.addEventListener("click", () => {
      const selected = card.querySelector(`input[name="q-${qIdx}"]:checked`);
      if (!selected) {
        feedback.textContent = "Choose an option first.";
        feedback.classList.remove("correct");
        feedback.classList.add("error");
        return;
      }
      const correct = Number(selected.value) === unit.questions[qIdx].correct;
      card.dataset.solved = correct ? "true" : "false";
      card.classList.remove("correct-burst");
      feedback.textContent = correct
        ? unit.questions[qIdx].explain || "Correct!"
        : unit.questions[qIdx].explainWrong || "Not yet. Try again.";
      feedback.classList.remove("error");
      if (correct) {
        feedback.classList.add("correct");
        void card.offsetWidth;
        card.classList.add("correct-burst");
        removeFromPractice(unit.questions[qIdx]);
      } else {
        feedback.classList.remove("correct");
        feedback.classList.add("error");
        addToPractice(unit.questions[qIdx]);
      }
      checkCompletion();
    });
  });
};

const loadSection = (track, index) => {
  const units =
    track === "modules" ? moduleUnits : track === "exercises" ? exerciseUnits : practiceUnits;
  const unit = units[index] || units[0];
  if (!unit) return;
  currentSelection = { track, index };
  contentStage.innerHTML = buildModuleMarkup(unit, track);
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
  document
    .querySelector(`.nav-item[data-track="${track}"][data-index="${index}"]`)
    ?.classList.add("active");
  if (statusForIndex(track, index) !== "completed") {
    setProgressStatus(track, index, "progress");
  }
  const completeBtn = document.querySelector(".mark-complete");
  completeBtn?.addEventListener("click", () => setProgressStatus(track, index, "completed"));
  attachQuestionHandlers(unit, track, index);
};

const setupNav = () => {
  renderNav(navModuleList, moduleUnits, "modules");
  renderNav(navExerciseList, exerciseUnits, "exercises");
  renderNav(navPracticeList, practiceUnits, "practice");
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      loadSection(item.dataset.track, Number(item.dataset.index));
    });
  });
  loadSection(currentSelection.track, currentSelection.index);
};

const loadProgress = async () => {
  try {
    const response = await fetch("/api/progress");
    if (response.status === 401) {
      window.location.href = "/";
      return false;
    }
    const data = await response.json();
    progressState.modules = data.modules || [];
    progressState.exercises = data.exercises || [];
    return true;
  } catch (error) {
    console.error("Unable to load progress", error);
    return false;
  }
};

const initWorkspace = async () => {
  hideRogueCatalogLinks();
  hydrateHero();
  setupTagDropdown();
  const progressLoaded = await loadProgress();
  if (!progressLoaded) return;
  rebuildPracticeUnits();
  setupNav();
};

initWorkspace();
