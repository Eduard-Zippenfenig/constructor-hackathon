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
  if (heroTags) {
    heroTags.innerHTML = "";
    tags.forEach((tag) => heroTags.appendChild(createTag(tag)));
  }
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
        ${media.guideTitle ? `<p class="media-label">${media.guideTitle}</p>` : ""}
        ${media.guideIntro ? `<p><strong>${media.guideIntro}</strong></p>` : ""}
        <p class="muted-small">${media.guideIntro || ""}</p>
        ${problems ? `<ul>${problems}</ul>` : ""}
      </div>
    `;
  }
  if (type === "graph" && (media.graphPrompt || media.readerPrompt)) {
    const isVisual = (customLabel || "").toLowerCase().includes("visual");
    const isPodcast = (customLabel || "").toLowerCase().includes("podcast");
    const isGenZ = (customLabel || "").toLowerCase().includes("gen z");
    const isReader = (customLabel || "").toLowerCase().includes("reader");
    const promptText = isReader && media.readerPrompt ? media.readerPrompt : media.graphPrompt || "";
    const promptHtml = promptText ? promptText.replace(/\n/g, "<br>") : "";
    return `
      <div class="media-tile graph">
        <p class="media-label">${customLabel || "Visual Prompt"}</p>
        <p>${promptHtml}</p>
        ${
          isVisual && media.videoSrc
            ? `<video controls style="width:100%;margin-top:0.5rem;border-radius:12px;" src="${media.videoSrc}"></video>`
            : ""
        }
        ${
          isGenZ && media.genzVideoSrc
            ? `<video controls style="width:100%;margin-top:0.5rem;border-radius:12px;" src="${media.genzVideoSrc}"></video>`
            : ""
        }
        ${
          isPodcast && media.podcastSrc
            ? `<audio controls style="width:100%; margin-top:0.5rem;"><source src="${media.podcastSrc}" type="audio/mpeg" />Your browser does not support the audio element.</audio>`
            : ""
        }
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

  const adjustNotebookLayout = () => {
    const body = notebookPanel.querySelector(".notebook-body");
    if (!body) return;
    const header = notebookPanel.querySelector(".notebook-header");
    const toggle = notebookPanel.querySelector(".notebook-mode-toggle");
    const chrome =
      (header?.offsetHeight || 0) + (toggle?.offsetHeight || 0) + (notebookResize ? notebookResize.offsetHeight : 0) + 32;
    const available = notebookPanel.clientHeight - chrome;
    body.style.height = available > 160 ? `${available}px` : "auto";
    const textSection = notebookPanel.querySelector(".notebook-text");
    const textArea = document.getElementById("notebook-textarea");
    if (textSection && textArea) {
      const styles = getComputedStyle(textSection);
      const padY = parseFloat(styles.paddingTop || "0") + parseFloat(styles.paddingBottom || "0");
      const labelHeight = textSection.querySelector("label")?.offsetHeight || 0;
      const usable = (textSection.clientHeight || available) - padY - labelHeight - 12;
      textArea.style.height = `${Math.max(120, usable)}px`;
    }
    resizeCanvas();
  };

  const resizeCanvas = () => {
    const container = notebookCanvas.closest(".notebook-canvas");
    if (!container) return;
    const toolbar = container.querySelector(".canvas-toolbar");
    const styles = getComputedStyle(container);
    const padX = parseFloat(styles.paddingLeft || "0") + parseFloat(styles.paddingRight || "0");
    const padY = parseFloat(styles.paddingTop || "0") + parseFloat(styles.paddingBottom || "0");
    const usableWidth = Math.max(1, container.clientWidth - padX);
    const usableHeight = Math.max(120, container.clientHeight - padY - (toolbar?.offsetHeight || 0));
    const data = notebookCanvas.toDataURL();
    notebookCanvas.style.width = `${usableWidth}px`;
    notebookCanvas.style.height = `${usableHeight}px`;
    notebookCanvas.width = Math.floor(usableWidth);
    notebookCanvas.height = Math.floor(usableHeight);
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0, notebookCanvas.width, notebookCanvas.height);
    img.src = data;
  };

  const setMode = (mode) => {
    currentMode = mode;
    const textSection = notebookPanel.querySelector(".notebook-text");
    const drawSection = notebookPanel.querySelector(".notebook-canvas");
    textSection?.classList.toggle("hidden", mode !== "text");
    drawSection?.classList.toggle("hidden", mode !== "draw");
    notebookModeButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === mode));
    if (mode === "draw") {
      adjustNotebookLayout();
      resizeCanvas();
    }
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
      adjustNotebookLayout();
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
  window.addEventListener("resize", adjustNotebookLayout);
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(() => adjustNotebookLayout());
    observer.observe(notebookPanel);
  }
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
      adjustNotebookLayout();
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

const setupSounds = () => {
  const attachSoundResume = () => {
    const pendingFlag = localStorage.getItem("pp-sound-pending");
    if (pendingFlag === "1" && !pendingSound) {
      const saved = localStorage.getItem("pp-sounds");
      if (saved === "lofi" || saved === "white") {
        pendingSound = saved;
      }
      localStorage.removeItem("pp-sound-pending");
    }
    if (!pendingSound) return;
    const handler = () => {
      const val = pendingSound;
      pendingSound = null;
      document.removeEventListener("pointerdown", handler);
      playSound(val);
    };
    document.addEventListener("pointerdown", handler);
  };

  const stopSound = () => {
    if (activeSound) {
      activeSound.pause();
      activeSound = null;
    }
  };

  const playSound = (val) => {
    stopSound();
    let sources = [];
    if (val === "lofi") sources = ["/static/lofi.mp3"];
    if (val === "white") sources = ["/static/rain.mp3", "/static/rain.wav"];
    if (!sources.length) return;
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.35;
    const tryNext = () => {
      const src = sources.shift();
      if (!src) {
        pendingSound = val;
        attachSoundResume();
        return;
      }
      audio.src = src;
      audio.play().then(() => {
        activeSound = audio;
        pendingSound = null;
      }).catch(() => tryNext());
    };
    tryNext();
  };

  let saved = null;
  try {
    saved = localStorage.getItem("pp-sounds");
    if (saved && settingsSounds) settingsSounds.value = saved;
  } catch (error) {
    saved = null;
  }
  if (saved === "lofi" || saved === "white") {
    playSound(saved);
  }
  settingsSounds?.addEventListener("change", (e) => {
    const val = e.target.value;
    playSound(val);
    try {
      localStorage.setItem("pp-sounds", val);
    } catch (error) {
      /* ignore */
    }
  });
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
let activeSound = null;

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

// Ensure the biology Chapter 1 (cell) module exposes the podcast source in workspace view.
if (moduleUnits.length) {
  const first = moduleUnits[0];
  const title = (first.title || "").toLowerCase();
  if (title.includes("cell")) {
    first.media = first.media || {};
    first.media.podcastSrc = first.media.podcastSrc || "/static/Biology1.mp3";
    first.media.videoSrc = first.media.videoSrc || "/static/Biology11.mov";
    first.media.genzVideoSrc = first.media.genzVideoSrc || "/static/bio1.mp4";
    first.media.readerPrompt =
      first.media.readerPrompt ||
      "Chapter 1: The Cell\nCell theory is the foundational principle of biology and states that all living organisms, from the simplest bacteria to the most complex animals, are composed of cells. These cells serve as the basic structural and functional units of life. According to this theory, cells are responsible for carrying out all essential processes that define living systems, including growth, metabolism, and reproduction. Another central idea is that all cells arise from pre-existing cells rather than forming spontaneously. This insight helped scientists understand how tissues heal, how organisms grow, and how hereditary traits are passed from one generation to the next. Examples: A cut on the skin heals because nearby cells divide to replace those that were damaged, and bacterial populations increase through the simple division of one cell into two identical descendants.\nCells exist in two major categories: prokaryotic and eukaryotic. Prokaryotic cells are the simpler of the two and lack internal membrane-bound organelles. Their DNA is not enclosed within a nucleus but is instead located in a region called the nucleoid. Despite their simplicity, they are incredibly adaptable and can survive in extreme environments such as hot springs, deep ocean vents, and frozen soil. Examples: Common bacteria like E. coli inhabit the human digestive system, cyanobacteria carry out photosynthesis in aquatic ecosystems, and archaea thrive in highly acidic or extremely hot environments. Eukaryotic cells, on the other hand, contain a nucleus and various organelles with specialized functions. These cells are larger, more complex, and form organisms such as plants, animals, fungi, and protists. Examples: Yeast used in baking is eukaryotic, plant cells contain chloroplasts for photosynthesis, and animal cells form tissues such as muscles and nerves.\nAlthough cells vary widely in form, they share certain essential components. Every cell possesses a cell membrane composed of a phospholipid bilayer that controls the movement of substances in and out of the cell. This membrane also contains receptors and channels that allow communication with the environment. Examples: Insulin binds to receptors on muscle cells and triggers glucose uptake, and nerve cells transmit electrical signals using ion channels in their membranes. Inside the membrane lies the cytoplasm, a gel-like fluid filled with enzymes and nutrients essential for metabolic reactions. Ribosomes, present in all cells, assemble proteins by translating genetic instructions. Examples: Pancreatic cells rely on ribosomes to produce digestive enzymes, while muscle cells produce large quantities of actin and myosin. At the core of cellular function is genetic material, primarily DNA, which stores the organism’s blueprint. RNA serves as the messenger and helper molecule during protein synthesis.\nCells in multicellular organisms are often highly specialized. Their structures are adapted to the specific tasks they perform. Examples: Nerve cells have long extensions that allow them to transmit impulses across long distances, red blood cells are concave discs optimized for oxygen transport, muscle cells contain abundant mitochondria to power contractions, and plant root hair cells have elongated projections that enhance water and nutrient absorption.";
    first.media.graphPrompt = first.media.graphPrompt || "Listen to the cell walkthrough while you annotate.";
  }
}

// Ensure biology Chapter 2 carries its podcast.
if (moduleUnits[1]) {
  const t = (moduleUnits[1].title || "").toLowerCase();
  if (t.includes("mitochondrion") || t.includes("mitochondria")) {
    moduleUnits[1].media = moduleUnits[1].media || {};
    moduleUnits[1].media.podcastSrc = moduleUnits[1].media.podcastSrc || "/static/Biology2.mp3";
    moduleUnits[1].media.readerPrompt =
      moduleUnits[1].media.readerPrompt ||
      "Chapter 2: The Mitochondrion\nMitochondria are double-membraned organelles often called the “powerhouses of the cell” because they produce most of the ATP that fuels cellular activities. The outer membrane acts as a protective boundary, while the inner membrane folds into cristae that greatly increase surface area for energy-generating reactions. Inside the inner membrane is the matrix, which contains enzymes for metabolic pathways, ribosomes, and mitochondrial DNA. These characteristics allow mitochondria to produce some of their own proteins, granting them a degree of independence within the cell. Examples: Heart muscle cells contain many mitochondria because they require continuous energy, and endurance athletes often develop high mitochondrial density in their muscles.\nThe primary function of mitochondria is ATP production via cellular respiration. This begins with the Krebs cycle in the matrix, where nutrient molecules are broken down to release electrons. These electrons flow through the electron transport chain located in the inner membrane. Their movement establishes a proton gradient that powers ATP synthase, the enzyme responsible for producing ATP. Examples: Neurons require ATP to maintain electrical gradients that allow them to generate nerve impulses, and muscle cells need a constant supply of ATP for contraction during physical activity.\nMitochondria also carry out additional vital roles. They help regulate apoptosis, a form of programmed cell death that eliminates damaged or unnecessary cells in a controlled manner. Examples: Immune cells self-destruct after eliminating an infection, and cells with severely damaged DNA undergo apoptosis to prevent cancer formation. In specialized tissues such as brown fat, mitochondria generate heat through non-shivering thermogenesis. Examples: Infants rely on brown fat to maintain body temperature. Mitochondria also regulate calcium levels within cells, which is essential for signaling and muscle contraction.";
    moduleUnits[1].media.genzVideoSrc = moduleUnits[1].media.genzVideoSrc || "/static/bio2.mp4";
  }
}

// Ensure biology Chapter 3 carries its podcast.
if (moduleUnits[2]) {
  const t = (moduleUnits[2].title || "").toLowerCase();
  if (t.includes("golgi")) {
    moduleUnits[2].media = moduleUnits[2].media || {};
    moduleUnits[2].media.podcastSrc = moduleUnits[2].media.podcastSrc || "/static/Biology3.mp3";
    moduleUnits[2].media.readerPrompt =
      moduleUnits[2].media.readerPrompt ||
      "Chapter 3: The Golgi Apparatus\nThe Golgi apparatus functions as the cell’s processing, modifying, and packaging center. It consists of flattened membrane-bound sacs called cisternae arranged in a stack. The cis face receives newly synthesized proteins and lipids from the endoplasmic reticulum (ER). As molecules move from the cis to the medial to the trans region, they undergo highly organized modifications. The trans face sorts and packages them for secretion or for delivery to specific cellular locations.\nThe Golgi apparatus performs chemical modifications such as glycosylation and phosphorylation, which determine molecular function and final destination. Processed molecules are packaged into vesicles that either fuse with the cell membrane, become part of lysosomes, or transport materials elsewhere within the cell. Examples: Intestinal cells rely on the Golgi to secrete mucus, and immune cells use it to package antibodies before releasing them into the bloodstream.\nProteins travel from the rough ER to the Golgi apparatus in transport vesicles. As they move through the Golgi’s layers, they are refined into fully functional molecules. Examples: Pancreatic cells manufacture digestive enzymes in the rough ER, process them in the Golgi, and ship them to lysosomes. Insulin is also processed in the Golgi before being released from the pancreas into the bloodstream.";
    // Attach Golgi model if missing.
    if (!findModelResource(moduleUnits[2].resources)) {
      moduleUnits[2].resources = moduleUnits[2].resources || [];
      moduleUnits[2].resources.push({
        label: "Golgi Model",
        href: "/static/Golgi%20Aparatus%20Texture.glb",
      });
    }
  }
}

// Ensure biology Chapter 4 carries its podcast.
if (moduleUnits[3]) {
  const t = (moduleUnits[3].title || "").toLowerCase();
  if (t.includes("endoplasmic") || t.includes("er")) {
    moduleUnits[3].media = moduleUnits[3].media || {};
    moduleUnits[3].media.podcastSrc = moduleUnits[3].media.podcastSrc || "/static/Biology4.mp3";
    moduleUnits[3].media.readerPrompt =
      moduleUnits[3].media.readerPrompt ||
      "Chapter 4: The Endoplasmic Reticulum (ER)\nThe endoplasmic reticulum (ER) is a vast network of membranes connected to the nuclear envelope. It functions as the cell’s primary manufacturing and transportation system. The rough ER is studded with ribosomes and specializes in protein synthesis and folding. Examples: Liver and immune cells rely on the rough ER to produce high volumes of enzymes and antibodies.\nThe smooth ER, which lacks ribosomes, is responsible for lipid synthesis, detoxification, and calcium storage. Examples: Liver cells use the smooth ER to break down toxins such as alcohol, and muscle cells rely on its calcium-storing form, the sarcoplasmic reticulum, for contraction.\nWhen the ER malfunctions, serious diseases may occur. Misfolded proteins can accumulate and cause stress within the ER. Examples: In cystic fibrosis, a misfolded CFTR protein is destroyed in the ER instead of reaching the cell membrane, and disturbances in lipid regulation may result in fatty liver disease.";
  }
}

// Ensure probability Chapter 2 includes the podcast asset.
if (moduleUnits[1]) {
  const t = (moduleUnits[1].title || "").toLowerCase();
  if (t.includes("conditional") || t.includes("bayes")) {
    moduleUnits[1].media = moduleUnits[1].media || {};
    moduleUnits[1].media.podcastSrc = moduleUnits[1].media.podcastSrc || "/static/Probability2.mp3";
    moduleUnits[1].media.graphPrompt =
      moduleUnits[1].media.graphPrompt ||
      "Listen to the conditional probability walkthrough while following the steps.";
    moduleUnits[1].media.readerPrompt =
      moduleUnits[1].media.readerPrompt ||
      "Chapter 2: Conditional Probability and Bayes’ Theorem\nConditional probability measures the likelihood of an event occurring given that another event has already taken place. Example: The probability of having the flu increases if we know the person has a fever. If two events are independent, knowing that one occurred does not change the probability of the other. Example: Knowing someone rolled a three on a die has no effect on your coin flip outcome.\nThe total probability theorem is useful when an event may occur under several different scenarios. Example: Determining the probability of high blood pressure may require weighing age groups by their proportion in the population. Bayes’ theorem helps us reverse conditional probabilities, combining new information with prior knowledge. Examples: It is widely used in medical testing to determine the chance of a disease given a positive result, and in spam filtering to classify emails.";
  }
}

// Ensure probability Chapter 1 includes its podcast asset.
if (moduleUnits[0]) {
  const t = (moduleUnits[0].title || "").toLowerCase();
  if (t.includes("foundation") || t.includes("foundations")) {
    moduleUnits[0].media = moduleUnits[0].media || {};
    moduleUnits[0].media.podcastSrc = moduleUnits[0].media.podcastSrc || "/static/Probability1.mp3";
    moduleUnits[0].media.videoSrc = moduleUnits[0].media.videoSrc || "/static/Probability11.mov";
    moduleUnits[0].media.readerPrompt =
      moduleUnits[0].media.readerPrompt ||
      "Chapter 1: Foundations of Probability\nProbability begins with the idea of an experiment, which is any process that produces outcomes that cannot be predicted with certainty. Everyday examples include flipping a coin, rolling dice, or measuring daily rainfall. The sample space is the complete set of all outcomes, while an event is any subset of outcomes of interest. Examples: For a coin flip, the sample space includes heads and tails, and in weather prediction, it may include rain or sunshine.\nProbability can be understood in several ways. Classical probability applies when outcomes are equally likely. Example: The chance of drawing a heart from a standard deck is thirteen out of fifty-two. Empirical probability is based on observation and repeated trials. Example: If it rained ninety days last year, the empirical probability of rain on a given day is ninety out of three hundred sixty-five. Axiomatic probability is a rigorous mathematical system built on rules: probabilities are non-negative, the probability of the full sample space is one, and probabilities of disjoint events add together.\nImportant rules include the complement rule, which states that the chance of an event not happening is one minus the chance of it happening. Example: If the probability of rain is 0.3, then the probability of no rain is 0.7. Independence occurs when the outcome of one event does not influence another. Examples: Two separate coin flips are independent, and two machines on different production lines do not affect each other’s failure probabilities.";
  }
}

// Ensure probability Chapter 3 includes its podcast asset.
if (moduleUnits[2]) {
  const t = (moduleUnits[2].title || "").toLowerCase();
  if (t.includes("random") || t.includes("distribution")) {
    moduleUnits[2].media = moduleUnits[2].media || {};
    moduleUnits[2].media.podcastSrc = moduleUnits[2].media.podcastSrc || "/static/Probability3.mp3";
    moduleUnits[2].media.readerPrompt =
      moduleUnits[2].media.readerPrompt ||
      "Chapter 3: Random Variables and Distributions\nA random variable assigns numerical values to outcomes of a random process. Discrete random variables take countable values, such as the number of cars passing an intersection. Continuous random variables take any value within an interval, such as the time needed to walk a kilometer.\nDiscrete distributions include the Bernoulli, binomial, and Poisson distributions. Examples: A Bernoulli trial models success or failure in sending a data packet, a binomial distribution models the number of correct guesses on a quiz, and a Poisson distribution models the number of customers arriving per hour.\nContinuous distributions include the uniform, exponential, and normal distributions. Examples: Computer-generated random numbers follow a uniform distribution, the time between phone calls in a call center tends to follow an exponential distribution, and human heights typically follow a normal distribution.\nExpectation represents the long-term average of a random variable, while variance measures how spread out the outcomes are. Examples: The expected number of heads in ten flips of a fair coin is five, and the variance of bus waiting times indicates how predictable the schedule is. Moment generating functions summarize all moments of a distribution and simplify the analysis of sums of random variables.";
  }
}

// Ensure probability Chapter 4 includes its podcast asset.
if (moduleUnits[3]) {
  const t = (moduleUnits[3].title || "").toLowerCase();
  if (t.includes("joint") || t.includes("limit")) {
    moduleUnits[3].media = moduleUnits[3].media || {};
    moduleUnits[3].media.podcastSrc = moduleUnits[3].media.podcastSrc || "/static/Probability4.mp3";
    moduleUnits[3].media.readerPrompt =
      moduleUnits[3].media.readerPrompt ||
      "Chapter 4: Joint Distributions and Limit Theorems\nJoint distributions describe two or more random variables at once. Examples: Temperature and electricity usage are jointly distributed, as are study hours and exam scores.\nCovariance and correlation describe relationships between variables. Height and weight typically show positive correlation, while fuel efficiency and vehicle weight often show negative correlation.\nThe law of large numbers states that the average outcome of many trials will approach the true expected value. Example: Repeated coin flips tend to stabilize around fifty percent heads. The central limit theorem states that averages of many independent variables tend to be normally distributed. Examples: Manufacturing quality control relies on this principle, as do opinion polls and surveys.\nThese theoretical tools form the basis of modern statistics, enabling scientists, engineers, and analysts to draw reliable conclusions from sample data.";
  }
}

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
  setupSounds();
  await ensureModelViewer();
  wireModelViewers(document);
  const progressLoaded = await loadProgress();
  if (!progressLoaded) return;
  rebuildPracticeUnits();
  setupNav();
};

initWorkspace();
