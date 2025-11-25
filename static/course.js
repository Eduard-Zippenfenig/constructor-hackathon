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
const notebookToggle = document.getElementById("notebook-toggle");
const notebookPanel = document.getElementById("notebook-panel");
const notebookClose = document.getElementById("notebook-close");
const notebookCanvas = document.getElementById("notebook-canvas");
const notebookTextarea = document.getElementById("notebook-textarea");
const notebookModeButtons = document.querySelectorAll(".notebook-mode-toggle .tool-btn");
const notebookResize = document.getElementById("notebook-resize");
const modelViewerModuleSrc = "/static/model-viewer.min.js";
const modelViewerLegacySrc = "/static/model-viewer-legacy.js";

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
    const parsed = JSON.parse(data);
    if (!parsed || !parsed.workspaceModules || !parsed.workspaceModules.math || !parsed.workspaceModules.english) {
      return DEFAULT_WORKSPACE;
    }
    return parsed;
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

// Ensure the <model-viewer> custom element is registered even if the page script load order fails.
const ensureModelViewer = async () => {
  if (window.customElements?.get("model-viewer")) return;
  try {
    await import(modelViewerModuleSrc);
  } catch (error) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = modelViewerLegacySrc;
      script.onload = () => resolve();
      script.onerror = () => resolve(); // continue even if legacy fails; fallback copy still available
      document.head.appendChild(script);
    });
  }
};

const wireModelViewers = (root = document) => {
  const elements = root.querySelectorAll("model-viewer");
  elements.forEach((viewer) => {
    const fallback = viewer.querySelector(".model-fallback");
    const hideFallback = () => {
      if (fallback) fallback.style.display = "none";
    };
    const showFallback = () => {
      if (fallback) fallback.style.display = "";
    };
    viewer.addEventListener("load", hideFallback);
    viewer.addEventListener("model-visibility", hideFallback);
    viewer.addEventListener("error", showFallback);
    if (viewer.modelIsVisible || viewer.loaded) {
      hideFallback();
    }
  });
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
        ${media.modelSrc ? `<model-viewer src="${media.modelSrc}" camera-controls auto-rotate style="width:100%;height:280px;border-radius:16px;background:#0f172a10;"></model-viewer>` : ""}
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

const renderQuestionCard = (q, idx) => `
  <article class="question-card" data-index="${idx}">
    <header>
      <p class="media-label">Single choice</p>
      <h4>${q.prompt}</h4>
    </header>
    ${q.theory ? `<p class="muted theory-block">${q.theory}</p>` : ""}
    <div class="question-options">
      ${(q.options || [])
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
`;

const renderQuestions = (unit) => {
  if (!unit.questions || !unit.questions.length) return "";
  return `
    <section class="question-set">
      <div class="actions-header">
        <h4>Quick checks</h4>
        <p class="muted">Work one question at a time.</p>
      </div>
      <div class="question-view"></div>
      <div class="question-nav">
        <button type="button" class="ghost small question-prev">Previous</button>
        <span class="question-counter"></span>
        <button type="button" class="primary small question-next">Next</button>
      </div>
    </section>
  `;
};

const setupNotebook = () => {
  if (!notebookToggle || !notebookPanel || !notebookCanvas) return;
  const ctx = notebookCanvas.getContext("2d");
  const tools = Array.from(document.querySelectorAll(".tool-btn"));
  let drawing = false;
  let lastX = 0;
  let lastY = 0;
  let currentTool = "pen";
  let currentColor = "#0f172a";
  let currentMode = "text";
  let dragOffset = { x: 0, y: 0 };
  let dragging = false;
  let dragPointerId = null;
  let resizing = false;
  let resizePointerId = null;
  let resizeStart = { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0 };

  const resizeCanvas = () => {
    const { width, height } = notebookCanvas.getBoundingClientRect();
    const data = notebookCanvas.toDataURL();
    notebookCanvas.width = Math.floor(width);
    notebookCanvas.height = Math.floor(height);
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0);
    img.src = data;
  };

  const setMode = (mode) => {
    currentMode = mode;
    const textSection = notebookPanel.querySelector(".notebook-text");
    const drawSection = notebookPanel.querySelector(".notebook-canvas");
    textSection?.classList.toggle("hidden", mode !== "text");
    drawSection?.classList.toggle("hidden", mode !== "draw");
    notebookModeButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === mode));
    if (mode === "draw") resizeCanvas();
  };

  const setActiveTool = (tool, color) => {
    currentTool = tool;
    if (color) currentColor = color;
    tools.forEach((btn) => {
      const isActive =
        btn.dataset.tool === tool && (!color || btn.dataset.color === color || tool === "eraser" || tool === "clear");
      btn.classList.toggle("active", isActive);
    });
  };

  const startDraw = (x, y) => {
    drawing = true;
    [lastX, lastY] = [x, y];
  };

  const stopDraw = () => {
    drawing = false;
    ctx.beginPath();
  };

  const draw = (x, y) => {
    if (!drawing) return;
    ctx.lineWidth = currentTool === "highlighter" ? 12 : currentTool === "eraser" ? 16 : 4;
    ctx.lineCap = "round";
    if (currentTool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = "rgba(0,0,0,1)";
    } else if (currentTool === "highlighter") {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = currentColor;
      ctx.globalAlpha = 0.35;
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = currentColor;
      ctx.globalAlpha = 1;
    }
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    [lastX, lastY] = [x, y];
  };

  const handlePointer = (event) => {
    const rect = notebookCanvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (event.type === "pointerdown") {
      notebookCanvas.setPointerCapture(event.pointerId);
      startDraw(x, y);
    } else if (event.type === "pointermove") {
      draw(x, y);
    } else if (event.type === "pointerup" || event.type === "pointercancel") {
      notebookCanvas.releasePointerCapture(event.pointerId);
      stopDraw();
    }
  };

  tools.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tool = btn.dataset.tool;
      if (tool === "clear") {
        ctx.clearRect(0, 0, notebookCanvas.width, notebookCanvas.height);
        setActiveTool(currentTool, currentColor);
        return;
      }
      setActiveTool(tool, btn.dataset.color);
    });
  });

  notebookCanvas.addEventListener("pointerdown", handlePointer);
  notebookCanvas.addEventListener("pointermove", handlePointer);
  notebookCanvas.addEventListener("pointerup", handlePointer);
  notebookCanvas.addEventListener("pointercancel", handlePointer);

  notebookToggle.addEventListener("click", () => {
    notebookPanel.classList.toggle("hidden");
    if (!notebookPanel.classList.contains("hidden")) {
      setMode(currentMode);
      resizeCanvas();
      // Ensure inline dimensions exist for resizing math
      const rect = notebookPanel.getBoundingClientRect();
      notebookPanel.style.width = `${rect.width}px`;
      notebookPanel.style.height = `${rect.height}px`;
    }
  });

  notebookClose?.addEventListener("click", () => {
    notebookPanel.classList.add("hidden");
  });

  window.addEventListener("resize", resizeCanvas);
  setActiveTool("pen", currentColor);
  resizeCanvas();
  if (notebookModeButtons.length) {
    notebookModeButtons.forEach((btn) => {
      btn.addEventListener("click", () => setMode(btn.dataset.mode));
    });
    setMode("text");
  }

  const handleDrag = (event) => {
    if (event.type === "pointerdown") {
      dragging = true;
      dragPointerId = event.pointerId;
      const rect = notebookPanel.getBoundingClientRect();
      dragOffset = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      window.addEventListener("pointermove", handleDrag);
      window.addEventListener("pointerup", handleDrag);
      window.addEventListener("pointercancel", handleDrag);
    } else if (event.type === "pointermove" && dragging && event.pointerId === dragPointerId) {
      const left = event.clientX - dragOffset.x;
      const top = event.clientY - dragOffset.y;
      notebookPanel.style.left = `${Math.max(0, left)}px`;
      notebookPanel.style.top = `${Math.max(0, top)}px`;
      notebookPanel.style.right = "auto";
      notebookPanel.style.bottom = "auto";
    } else if (event.type === "pointerup" || event.type === "pointercancel") {
      if (event.pointerId !== dragPointerId) return;
      dragging = false;
      dragPointerId = null;
      window.removeEventListener("pointermove", handleDrag);
      window.removeEventListener("pointerup", handleDrag);
      window.removeEventListener("pointercancel", handleDrag);
    }
  };

  const handleResize = (event) => {
    if (event.type === "pointerdown") {
      resizing = true;
      resizePointerId = event.pointerId;
      const rect = notebookPanel.getBoundingClientRect();
      resizeStart = {
        x: event.clientX,
        y: event.clientY,
        width: rect.width,
        height: rect.height,
        left: rect.left,
        top: rect.top,
      };
      window.addEventListener("pointermove", handleResize);
      window.addEventListener("pointerup", handleResize);
      window.addEventListener("pointercancel", handleResize);
    } else if (event.type === "pointermove" && resizing && event.pointerId === resizePointerId) {
      const deltaX = event.clientX - resizeStart.x;
      const deltaY = event.clientY - resizeStart.y;
      const newWidth = Math.max(320, resizeStart.width + deltaX);
      const newHeight = Math.max(260, resizeStart.height + deltaY);
      const maxWidth = window.innerWidth - resizeStart.left - 12;
      const maxHeight = window.innerHeight - resizeStart.top - 12;
      notebookPanel.style.width = `${Math.min(newWidth, maxWidth)}px`;
      notebookPanel.style.height = `${Math.min(newHeight, maxHeight)}px`;
      resizeCanvas();
    } else if (event.type === "pointerup" || event.type === "pointercancel") {
      if (event.pointerId !== resizePointerId) return;
      resizing = false;
      resizePointerId = null;
      window.removeEventListener("pointermove", handleResize);
      window.removeEventListener("pointerup", handleResize);
      window.removeEventListener("pointercancel", handleResize);
    }
  };

  notebookPanel.querySelector(".notebook-header")?.addEventListener("pointerdown", handleDrag);
  notebookPanel.querySelector(".notebook-header")?.addEventListener("pointermove", handleDrag);
  notebookPanel.querySelector(".notebook-header")?.addEventListener("pointerup", handleDrag);
  notebookPanel.querySelector(".notebook-header")?.addEventListener("pointercancel", handleDrag);

  if (notebookResize) {
    notebookResize.addEventListener("pointerdown", handleResize);
    notebookResize.addEventListener("pointermove", handleResize);
    notebookResize.addEventListener("pointerup", handleResize);
    notebookResize.addEventListener("pointercancel", handleResize);
  }
};

const setupSettingsDrawer = () => {
  if (!settingsToggle || !settingsDrawer) return;
  const open = () => settingsDrawer.classList.remove("hidden");
  const close = () => settingsDrawer.classList.add("hidden");
  settingsToggle.addEventListener("click", open);
  settingsClose?.addEventListener("click", close);
  settingsOverlay?.addEventListener("click", close);
};

const applyTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }
  if (settingsTheme) settingsTheme.value = theme;
  try {
    localStorage.setItem("pp-theme", theme);
  } catch (error) {
    /* ignore */
  }
};

const setupTheme = () => {
  let saved = null;
  try {
    saved = localStorage.getItem("pp-theme");
  } catch (error) {
    saved = null;
  }
  const initial = saved === "dark" ? "dark" : "light";
  applyTheme(initial);
  settingsTheme?.addEventListener("change", (e) => applyTheme(e.target.value));
};

const findPresentationLink = (resources = []) => {
  return (resources || []).find((res = {}) => {
    const label = (res.label || "").toLowerCase();
    return label.includes("slide") || label.includes("presentation") || label.includes("deck");
  });
};

const renderPresentationBlock = (presentation) => {
  if (!presentation) return "";
  return `
    <div class="slide-viewer">
      <div class="slide-viewer-header">
        <p class="media-label">Presentation</p>
        <div class="slide-viewer-actions">
          <a class="ghost small" target="_blank" href="${presentation.href}">Open in new tab</a>
        </div>
      </div>
      <div class="slide-frame-wrap">
        <object data="${presentation.href}#toolbar=0&navpanes=0" type="application/pdf" class="slide-frame">
          <p>Slide preview unavailable. <a href="${presentation.href}" target="_blank">Open the PDF</a>.</p>
        </object>
      </div>
    </div>
  `;
};

const findModelResource = (resources = []) => {
  return (resources || []).find((res = {}) => {
    const href = res.href || "";
    const label = (res.label || "").toLowerCase();
    return href.endsWith(".glb") || label.includes("model");
  });
};

const renderModelBlock = (modelRes) => {
  if (!modelRes) return "";
  return `
    <div class="model-viewer-card">
      <div class="model-viewer-header">
        <p class="media-label">3D Model</p>
        <p class="muted-small">Interact with the cell model directly in this lecture.</p>
      </div>
      <model-viewer
        src="${modelRes.href}"
        alt="${modelRes.label || "3D model"}"
        camera-controls
        auto-rotate
        auto-rotate-delay="1500"
        shadow-intensity="0.8"
        ar
        ar-modes="webxr scene-viewer quick-look"
        class="module-model-viewer"
      >
        <div class="slide-frame-wrap model-fallback">
          <p>Unable to load the 3D model in this browser. Please enable WebGL or switch browsers.</p>
        </div>
      </model-viewer>
    </div>
  `;
};

const buildModuleMarkup = (unit, track) => {
  const tasks = (unit.tasks || []).map((task) => `<li>${task}</li>`).join("");
  const resources = (unit.resources || [])
    .map((res) => `<li><a href="${res.href}" target="_blank">${res.label}</a></li>`)
    .join("");
  const presentation = findPresentationLink(unit.resources);
  const modelRes = findModelResource(unit.resources);
  const presentationCta = presentation
    ? `<div class="module-presentation"><a class="ghost small" target="_blank" href="${presentation.href}">Open presentation</a></div>`
    : "";
  return `
    <div class="module-card">
      <header class="module-header">
        <div class="module-icon">📘</div>
        <div>
          <p class="module-eyebrow">Practice set</p>
          <h3>${unit.title}</h3>
          <p>${unit.description}</p>
          ${presentationCta}
        </div>
      </header>
      <div class="module-media">
        ${renderMediaTile("video", unit.media)}
        ${renderMediaTile("graph", unit.media)}
        ${renderMediaTile("notes", unit.media)}
        ${renderPresentationBlock(presentation)}
        ${renderModelBlock(modelRes)}
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
const settingsToggle = document.getElementById("settings-toggle");
const settingsDrawer = document.getElementById("settings-drawer");
const settingsOverlay = document.getElementById("settings-overlay");
const settingsClose = document.getElementById("settings-close");
const settingsTheme = document.getElementById("settings-theme");
const settingsSounds = document.getElementById("settings-sounds");
const settingsVisuality = document.getElementById("settings-visuality");

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

const dedupeByTitle = (units) => {
  const seen = new Set();
  return units.filter((unit) => {
    const key = (unit.title || "").toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const moduleUnits = dedupeByTitle(flattenUnits(tracks.modules));
const exerciseUnits = dedupeByTitle(flattenUnits(tracks.exercises));
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
  const container = document.querySelector(".question-set");
  const view = container?.querySelector(".question-view");
  const prevBtn = container?.querySelector(".question-prev");
  const nextBtn = container?.querySelector(".question-next");
  const counter = container?.querySelector(".question-counter");
  if (!container || !view || !unit.questions?.length) return;
  const total = unit.questions.length;
  const solved = Array.from({ length: total }, () => false);
  let current = 0;

  const updateNav = () => {
    if (counter) counter.textContent = `Question ${current + 1} of ${total}`;
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === total - 1;
  };

  const checkCompletion = () => {
    const allCorrect = solved.every(Boolean);
    setProgressStatus(track, index, allCorrect ? "completed" : "progress");
  };

  const bindQuestion = () => {
    const card = view.querySelector(".question-card");
    const btn = card?.querySelector(".check-answer");
    const feedback = card?.querySelector(".answer-feedback");
    if (!btn || !feedback) return;
    const qIdx = current;
    btn.addEventListener("click", () => {
      const selected = card.querySelector(`input[name="q-${qIdx}"]:checked`);
      if (!selected) {
        feedback.textContent = "Choose an option first.";
        feedback.classList.remove("correct");
        feedback.classList.add("error");
        card.classList.remove("correct", "error");
        return;
      }
      const correct = Number(selected.value) === unit.questions[qIdx].correct;
      solved[qIdx] = correct;
      card.classList.remove("correct-burst");
      feedback.textContent = correct
        ? unit.questions[qIdx].explain || "Correct!"
        : unit.questions[qIdx].explainWrong || "Not yet. Try again.";
      feedback.classList.remove("error");
      if (correct) {
        feedback.classList.add("correct");
        card.classList.remove("error");
        card.classList.add("correct");
        void card.offsetWidth;
        card.classList.add("correct-burst");
        removeFromPractice(unit.questions[qIdx]);
      } else {
        feedback.classList.remove("correct");
        feedback.classList.add("error");
        card.classList.remove("correct");
        card.classList.add("error");
        addToPractice(unit.questions[qIdx]);
      }
      checkCompletion();
    });
  };

  const renderCurrent = () => {
    view.innerHTML = renderQuestionCard(unit.questions[current], current);
    bindQuestion();
    updateNav();
  };

  prevBtn?.addEventListener("click", () => {
    if (current === 0) return;
    current -= 1;
    renderCurrent();
  });
  nextBtn?.addEventListener("click", () => {
    if (current >= total - 1) return;
    current += 1;
    renderCurrent();
  });

  renderCurrent();
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
  completeBtn?.addEventListener("click", () => {
    setProgressStatus(track, index, "completed");
    const toast = document.createElement("div");
    toast.className = "toast-notice";
    toast.textContent = "Marked as completed";
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("visible"));
    setTimeout(() => {
      toast.classList.remove("visible");
      setTimeout(() => toast.remove(), 300);
    }, 1800);
  });
  attachQuestionHandlers(unit, track, index);
  wireModelViewers(contentStage);
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
      // If not authenticated, continue rendering with default progress so workspace content still shows.
      progressState.modules = [];
      progressState.exercises = [];
      return true;
    }
    const data = await response.json();
    progressState.modules = data.modules || [];
    progressState.exercises = data.exercises || [];
    return true;
  } catch (error) {
    console.error("Unable to load progress", error);
    // Continue rendering with defaults on error so the workspace stays usable.
    progressState.modules = [];
    progressState.exercises = [];
    return true;
  }
};

const initWorkspace = async () => {
  hideRogueCatalogLinks();
  hydrateHero();
  setupTagDropdown();
  setupNotebook();
  setupSettingsDrawer();
  setupTheme();
  await ensureModelViewer();
  wireModelViewers(document);
  const progressLoaded = await loadProgress();
  if (!progressLoaded) return;
  rebuildPracticeUnits();
  setupNav();
};

initWorkspace();
