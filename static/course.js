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

// Graded exam banks
const GRADED_EXAM_BANK = {
  biology: [
    { prompt: "Which feature explains the high adaptability of prokaryotes in extreme environments?", options: ["Complex internal membranes", "Their simplified cellular organization", "Numerous organelles", "Large genomic size"], correct: 1, difficulty: "easy" },
    { prompt: "A nerve cell relies on membrane ion channels primarily to:", options: ["Synthesize ATP", "Transmit electrical impulses", "Carry out phagocytosis", "Release digestive enzymes"], correct: 1, difficulty: "easy" },
    { prompt: "Eukaryotic muscle cells have abundant mitochondria mainly because:", options: ["They replicate DNA rapidly", "They require continuous ATP for contraction", "They lack cytoplasm", "They perform photosynthesis"], correct: 1, difficulty: "easy" },
    { prompt: "Which statement best describes the role of the Golgi apparatus in secretory cells?", options: ["It translates mRNA into proteins", "It modifies, sorts, and packages proteins for secretion", "It stores nuclear DNA", "It performs oxidative phosphorylation"], correct: 1, difficulty: "medium" },
    { prompt: "Misfolded proteins accumulating in the ER trigger:", options: ["Enhanced ATP synthesis", "ER stress that may lead to cell dysfunction", "Immediate apoptosis in all cases", "DNA condensation"], correct: 1, difficulty: "hard" },
    { prompt: "The Krebs cycle occurs in which mitochondrial compartment?", options: ["Intermembrane space", "Matrix", "Outer membrane", "Ribosomal lumen"], correct: 1, difficulty: "easy" },
    { prompt: "A defect in vesicle fusion at the trans-Golgi would directly impair:", options: ["DNA transcription", "Packaging of proteins for final destinations", "Assembly of ribosomal subunits", "Glycolysis"], correct: 1, difficulty: "medium" },
    { prompt: "The structural connection between the nuclear envelope and rough ER facilitates:", options: ["Rapid ribosome replication", "Immediate entry of nascent polypeptides into the ER", "Formation of Golgi cisternae", "Direct ATP production"], correct: 1, difficulty: "medium" },
    { prompt: "A red blood cell lacks mitochondria. Which consequence follows?", options: ["It cannot undergo apoptosis", "It produces ATP only through glycolysis", "It cannot transport oxygen", "It synthesizes proteins efficiently"], correct: 1, difficulty: "easy" },
    { prompt: "Which mitochondrial feature supports the endosymbiotic theory?", options: ["Absence of membranes", "Presence of circular DNA and prokaryotic-type ribosomes", "Lack of enzymes", "Ability to survive outside cells"], correct: 1, difficulty: "medium" },
    { prompt: "The proton gradient used by ATP synthase is created by:", options: ["Electron transport chain pumping protons across the inner membrane", "Glycolysis in the cytosol", "Passive diffusion of ions", "Protein folding in the ER"], correct: 0, difficulty: "hard" },
    { prompt: "Brown adipose tissue generates heat by:", options: ["Increasing DNA replication", "Uncoupling oxidative phosphorylation", "Decreasing cellular respiration", "Enhancing Golgi vesicle formation"], correct: 1, difficulty: "hard" },
    { prompt: "A cell with defective smooth ER in the liver would struggle most with:", options: ["Oxygen binding", "Detoxifying harmful compounds", "Producing ribosomes", "Conducting electrical impulses"], correct: 1, difficulty: "medium" },
    { prompt: "In pancreatic cells, a failure in Golgi processing primarily affects:", options: ["Hormone secretion such as insulin", "ATP synthesis", "Ion channel function", "DNA repair"], correct: 0, difficulty: "medium" },
    { prompt: "Why are root hair cells elongated?", options: ["To aid photosynthesis", "To increase absorption surface area", "To minimize ATP use", "To resist osmotic pressure"], correct: 1, difficulty: "easy" },
    { prompt: "Which organelle is most responsible for calcium storage in muscle contraction?", options: ["Mitochondrion", "Sarcoplasmic reticulum", "Golgi", "Nucleus"], correct: 1, difficulty: "medium" },
    { prompt: "In apoptosis, mitochondria release factors that:", options: ["Block transcription", "Initiate controlled cell death pathways", "Destroy ribosomes", "Stabilize cell membranes"], correct: 1, difficulty: "hard" },
    { prompt: "If ribosomes detach from the ER, the cell will lose capacity to produce:", options: ["Cytosolic enzymes", "Membrane and secreted proteins", "Mitochondrial DNA", "Glycogen"], correct: 1, difficulty: "hard" },
    { prompt: "What is the functional significance of Golgi cisternae?", options: ["They regulate ion channels", "They allow sequential protein modification", "They degrade damaged proteins", "They synthesize ribosomes"], correct: 1, difficulty: "hard" },
    { prompt: "Which structure is shared by all cells?", options: ["Mitochondria", "Ribosomes", "Nucleus", "ER"], correct: 1, difficulty: "easy" },
  ],
  probability: [
    { prompt: "Axiomatic probability requires that for any event A:", options: ["P(A) <0", "P(A) ≥0", "P(A) >1", "P(A) = 0.5"], correct: 1, difficulty: "easy" },
    { prompt: "In a fair six-sided die, the probability of rolling an even number is:", options: ["1/6", "2/6", "3/6", "4/6"], correct: 2, difficulty: "easy" },
    { prompt: "Two events are independent if:", options: ["P(A∩B) = 0", "P(A|B) = P(A)", "They cannot occur together", "Their probabilities sum to 1"], correct: 1, difficulty: "easy" },
    { prompt: "Empirical probability is based on:", options: ["Theory alone", "Repeated observations", "Simulation only", "Intuition"], correct: 1, difficulty: "easy" },
    { prompt: "If A and B are disjoint, then:", options: ["P(A∪B) = P(A) + P(B)", "P(A∩B) = P(A)P(B)", "P(A∪B) = 1", "P(A|B) = 1"], correct: 0, difficulty: "easy" },
    { prompt: "Conditional probability P(A|B) is defined only if:", options: ["P(A) = 1", "P(B) >0", "A and B are disjoint", "A= B"], correct: 1, difficulty: "easy" },
    { prompt: "Bayes’ Theorem allows computing:", options: ["P(A) from no information", "P(A|B) using P(B |A) and priors", "The size of the sample space", "Deterministic predictions"], correct: 1, difficulty: "medium" },
    { prompt: "A binomial random variable counts:", options: ["Failures only", "Successes in independent trials", "Time between events", "Values on a continuous interval"], correct: 1, difficulty: "medium" },
    { prompt: "A Poisson distribution is appropriate when:", options: ["Time is continuous", "Events occur rarely and independently", "Outcomes are always equally likely", "There are only two outcomes"], correct: 1, difficulty: "medium" },
    { prompt: "The expected value of a random variable is best interpreted as:", options: ["Always the most common value", "The long-run average outcome", "Its maximum possible value", "The probability of success"], correct: 1, difficulty: "easy" },
    { prompt: "A continuous random variable can take:", options: ["Only integer values", "A finite set of values", "Any value in an interval", "No real values"], correct: 2, difficulty: "easy" },
    { prompt: "The variance of a distribution quantifies:", options: ["Central tendency", "Spread around the mean", "Number of outcomes", "Mode frequency"], correct: 1, difficulty: "medium" },
    { prompt: "The law of large numbers states that sample averages:", options: ["Always equal the true mean", "Approach the true mean as sample size increases", "Are unaffected by sample size", "Become less stable with more trials"], correct: 1, difficulty: "medium" },
    { prompt: "The central limit theorem implies that:", options: ["All variables are normally distributed", "Sums/averages tend toward normality for large samples", "Small samples are always adequate", "Distributions cannot be skewed"], correct: 1, difficulty: "hard" },
    { prompt: "Correlation between two variables measures:", options: ["Causation", "Linear association", "Probability of events", "Marginal frequencies"], correct: 1, difficulty: "medium" },
    { prompt: "If covariance between X and Y is zero, then:", options: ["They must be independent", "There is no linear relationship", "They are identical", "X causes Y"], correct: 1, difficulty: "hard" },
    { prompt: "A joint distribution describes:", options: ["Only one variable", "How two or more random variables behave together", "Deterministic relationships", "Independent outcomes only"], correct: 1, difficulty: "medium" },
    { prompt: "In many polling situations, the sampling distribution of the mean is approximately normal because of:", options: ["The Poisson process", "The central limit theorem", "Bayes’ rule", "Independence of the sample space"], correct: 1, difficulty: "medium" },
    { prompt: "For a Bernoulli trial, the probability of success is denoted by:", options: ["n", "λ", "p", "σ"], correct: 2, difficulty: "easy" },
    { prompt: "A uniform distribution on [0,1] is appropriate for:", options: ["Random number generators", "Human heights", "Poisson events", "Test scores"], correct: 0, difficulty: "easy" },
  ],
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

const renderMediaTile = (type, media, labelOverride) => {
  if (!media) return "";
  const label = labelOverride || "Visual Prompt";
  if (type === "graph" && media.graphPrompt) {
    return `
      <div class="media-tile graph">
        <p class="media-label">${label}</p>
        <p>${media.graphPrompt}</p>
        ${
          media.videoSrc
            ? `<video src="${media.videoSrc}" controls style="width:100%;border-radius:12px;margin-top:0.5rem;" playsinline></video>`
            : ""
        }
      </div>
    `;
  }
  if (type === "reader" && media.readerPrompt) {
    return `
      <div class="media-tile graph">
        <p class="media-label">${label}</p>
        <p>${media.readerPrompt.replace(/\\n/g, "<br>")}</p>
      </div>
    `;
  }
  if (type === "podcast" && media.podcastSrc) {
    return `
      <div class="media-tile graph">
        <p class="media-label">${label}</p>
        <audio controls style="width:100%;">
          <source src="${media.podcastSrc}" />
          Your browser does not support audio playback.
        </audio>
      </div>
    `;
  }
  if (type === "genz" && (media.genzVideoSrc || media.videoSrc)) {
    const src = media.genzVideoSrc || media.videoSrc;
    return `
      <div class="media-tile graph">
        <p class="media-label">${label}</p>
        <video src="${src}" controls style="width:100%;border-radius:12px;" playsinline></video>
      </div>
    `;
  }
  return "";
};

const renderVisualTiles = (media = {}) => {
  const tiles = [
    renderMediaTile("graph", media, "Visual learner"),
    renderMediaTile("reader", media, "Reader learner"),
    renderMediaTile("podcast", media, "Podcast"),
    renderMediaTile("genz", media, "Gen Z"),
  ].filter(Boolean);
  return tiles.join("");
};

// Build graded exam unit
const buildGradedUnits = () => {
  const isBio = courseName.toLowerCase().includes("bio");
  const questions = isBio ? GRADED_EXAM_BANK.biology : GRADED_EXAM_BANK.probability;
  return [
    {
      title: "Graded Exercises",
      description: "Final graded, adaptive 10-question session with results at the end.",
      questions,
    },
  ];
};

const applyVisualFilter = () => {
  let choice = "visual";
  try {
    const saved = localStorage.getItem("pp-visuality");
    if (saved) choice = saved.toLowerCase();
  } catch (error) {
    /* ignore */
  }
  if (settingsVisuality && settingsVisuality.value) {
    choice = settingsVisuality.value.toLowerCase();
  }
  const labelMap = {
    genz: "gen z",
    "gen z": "gen z",
    visual: "visual learner",
    reader: "reader learner",
    podcast: "podcast",
  };
  const target = (labelMap[choice] || labelMap.visual).toLowerCase();
  document.querySelectorAll(".media-tile.graph").forEach((tile) => {
    const label = (tile.querySelector(".media-label")?.textContent || "").trim().toLowerCase();
    tile.style.display = label === target ? "" : "none";
  });
};

const renderQuestionCard = (q, idx, withCheck = true) => {
  const level = (q.difficulty || "easy").toLowerCase();
  return `
  <article class="question-card" data-index="${idx}">
    <header>
      <p class="media-label">Single choice · <span class="difficulty-badge ${level}">${level}</span></p>
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
      ${
        withCheck
          ? `<div class="question-actions">
      <button type="button" class="ghost small check-answer" data-question="${idx}">Check answer</button>
      <span class="answer-feedback muted"></span>
    </div>`
        : ""
    }
  </article>
`;
};

const renderQuestions = (unit, track = "modules") => {
  if (!unit.questions || !unit.questions.length) return "";
  if (track === "exercises") {
    return `
    <section class="question-set exercises-mode">
      <div class="actions-header">
        <h4>Quick checks</h4>
        <p class="muted">Answer each question; submit to move to the next. Results at the end.</p>
      </div>
      <div class="question-view"></div>
      <div class="question-nav">
        <span class="question-counter"></span>
        <div class="question-actions">
          <button type="button" class="primary small submit-exercise">Submit answer</button>
          <button type="button" class="ghost small next-question" disabled>Next</button>
        </div>
      </div>
      <div class="answer-feedback muted"></div>
    </section>
  `;
  }
  if (track === "graded") {
    return `
    <section class="question-set exercises-mode graded-mode">
      <div class="actions-header">
        <h4>Graded Exercises</h4>
        <p class="muted">Answer all, then submit to see your score.</p>
      </div>
      <div class="question-view"></div>
      <div class="question-nav">
        <button type="button" class="ghost small question-prev">Previous</button>
        <span class="question-counter"></span>
        <button type="button" class="primary small question-next">Next</button>
      </div>
      <div class="question-actions module-complete">
        <button type="button" class="primary small submit-all">Submit all</button>
      </div>
    </section>
  `;
  }
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
  // Fallback: ensure Biology Chapter 1 has its podcast wired.
  const titleLower = (unit.title || "").toLowerCase();
  if (courseName.toLowerCase().includes("bio") && titleLower.includes("cell")) {
    unit.media = unit.media || {};
    if (!unit.media.podcastSrc) {
      unit.media.podcastSrc = "/static/Biology1.mp3";
    }
  }
  const presentation = findPresentationLink(unit.resources);
  const modelRes = findModelResource(unit.resources || unit.media?.resources || []);
  return `
    <div class="module-card">
      <header class="module-header">
        <div class="module-icon">📘</div>
        <div>
          <p class="module-eyebrow">Practice set</p>
          <h3>${unit.title}</h3>
          <p>${unit.description}</p>
          ${
            presentation
              ? `<div class="module-presentation"><a class="ghost small" target="_blank" href="${presentation.href}">Open presentation</a></div>`
              : ""
          }
        </div>
      </header>
      <div class="module-media">
        ${renderVisualTiles(unit.media)}
        ${renderPresentationBlock(presentation)}
        ${renderModelBlock(modelRes)}
      </div>
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
const gradedUnits = buildGradedUnits();

// Ensure key podcast assets are present on modules.
const ensurePodcast = (index, src) => {
  if (!moduleUnits[index]) return;
  moduleUnits[index].media = moduleUnits[index].media || {};
  if (!moduleUnits[index].media.podcastSrc) {
    moduleUnits[index].media.podcastSrc = src;
  }
};

// Ensure key videos for visual/genz modes.
const ensureVideo = (index, src, key = "videoSrc") => {
  if (!moduleUnits[index]) return;
  moduleUnits[index].media = moduleUnits[index].media || {};
  if (!moduleUnits[index].media[key]) {
    moduleUnits[index].media[key] = src;
  }
};

// Biology podcasts
moduleUnits.forEach((unit, idx) => {
  const title = (unit.title || "").toLowerCase();
  if (title.includes("cell")) ensurePodcast(idx, "/static/Biology1.mp3");
  if (title.includes("mitochond")) ensurePodcast(idx, "/static/Biology2.mp3");
  if (title.includes("golgi")) ensurePodcast(idx, "/static/Biology3.mp3");
  if (title.includes("endoplasmic") || title.includes("er")) ensurePodcast(idx, "/static/Biology4.mp3");
});

// Biology Chapter 1 Gen Z video
moduleUnits.forEach((unit, idx) => {
  const title = (unit.title || "").toLowerCase();
  if (title.includes("cell")) ensureVideo(idx, "/static/bio1.mp4", "genzVideoSrc");
  if (title.includes("mitochond")) ensureVideo(idx, "/static/bio2.mp4", "genzVideoSrc");
  if (title.includes("golgi")) ensureVideo(idx, "/static/bio3.mp4", "genzVideoSrc");
  if (title.includes("endoplasmic") || title.includes("er")) ensureVideo(idx, "/static/bio4.mp4", "genzVideoSrc");
});

// Probability chapter 2 podcast
moduleUnits.forEach((unit, idx) => {
  const title = (unit.title || "").toLowerCase();
  if (title.includes("foundations")) ensurePodcast(idx, "/static/Probability1.mp3");
  if (title.includes("conditional") || title.includes("bayes")) ensurePodcast(idx, "/static/Probability2.mp3");
  if (title.includes("random variables") || title.includes("random")) ensurePodcast(idx, "/static/Probability3.mp3");
  if (title.includes("joint") || title.includes("limit")) ensurePodcast(idx, "/static/Probability4.mp3");
  if (title.includes("foundations")) ensureVideo(idx, "/static/pro1.mp4", "genzVideoSrc");
  if (title.includes("conditional") || title.includes("bayes")) ensureVideo(idx, "/static/pro2.mp4", "genzVideoSrc");
  if (title.includes("random variables") || title.includes("random")) ensureVideo(idx, "/static/pro3.mp4", "genzVideoSrc");
  if (title.includes("joint") || title.includes("limit")) ensureVideo(idx, "/static/pro4.mp4", "genzVideoSrc");
});

let progressState = {
  modules: [],
  exercises: [],
  practice: [],
  graded: [],
};
let currentSelection = { track: "modules", index: 0 };

const ensureStatusLength = (track, length) => {
  if (!progressState[track]) {
    progressState[track] = [];
  }
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
  if (!listEl) return;
  listEl.innerHTML = "";
  units.forEach((unit, index) => {
    const item = document.createElement("li");
    item.className = track === "modules" ? "nav-item accordion-item" : "nav-item";
    item.dataset.track = track;
    item.dataset.index = index;
    const status = statusForIndex(track, index);
    const kind =
      track === "modules" ? "Module" : track === "exercises" ? "Exercise" : "Adaptive practice";
    item.innerHTML = `
      <button class="accordion-toggle">
        <span class="status ${status}"></span>
        <div>
          <div class="nav-item-title">${unit.title}</div>
          <div class="nav-item-subtitle">${unit.track || courseName} · ${kind}</div>
        </div>
      </button>
    `;
    listEl.appendChild(item);
  });

  if (track === "modules") {
    // Append standalone graded item
    const gradedStatus = statusForIndex("graded", 0);
    const gradedItem = document.createElement("li");
    gradedItem.className = "nav-item accordion-item";
    gradedItem.dataset.track = "graded";
    gradedItem.dataset.index = "0";
    gradedItem.innerHTML = `
      <button class="accordion-toggle">
        <span class="status ${gradedStatus}"></span>
        <div>
          <div class="nav-item-title">Graded Exercises</div>
          <div class="nav-item-subtitle">${courseName} · Final exam</div>
        </div>
      </button>
    `;
    listEl.appendChild(gradedItem);
  }
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
  if (track === "practice" || track === "graded") return;
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
  const submitAllBtn = container?.querySelector(".submit-all");
  const submitExerciseBtn = container?.querySelector(".submit-exercise");
  const nextAdaptiveBtn = container?.querySelector(".next-question");
  const feedback = container?.querySelector(".answer-feedback");
  const isExerciseMode = container?.classList.contains("exercises-mode");
  const isAdaptiveExercises = track === "exercises" && isExerciseMode;
  if (!container || !view || !unit.questions?.length) return;
  const total = unit.questions.length;
  const solved = Array.from({ length: total }, () => false);
  const selections = Array.from({ length: total }, () => null);
  let current = 0;

  // Adaptive one-by-one flow for ungraded exercises
  if (isAdaptiveExercises) {
    const buckets = { easy: [], medium: [], hard: [] };
    unit.questions.forEach((q) => {
      const level = (q.difficulty || "easy").toLowerCase();
      if (!buckets[level]) buckets[level] = [];
      buckets[level].push(q);
    });
    const bucketIdx = { easy: 0, medium: 0, hard: 0 };
    const history = [];
    const maxQuestions = 10;
    let currentDifficulty = "easy";
    let currentQuestion = null;

    const pickQuestion = (diff) => {
      const list = buckets[diff] || [];
      if (!list.length) return null;
      const idx = bucketIdx[diff] % list.length;
      bucketIdx[diff] += 1;
      return list[idx];
    };

    const renderAdaptive = () => {
      currentQuestion =
        pickQuestion(currentDifficulty) ||
        pickQuestion("easy") ||
        pickQuestion("medium") ||
        pickQuestion("hard");
      if (!currentQuestion) return;
      view.innerHTML = renderQuestionCard(currentQuestion, history.length, false);
      if (counter)
        counter.textContent = `Question ${history.length + 1} of ${maxQuestions} · ${currentDifficulty}`;
      if (feedback) {
        feedback.textContent = "";
        feedback.className = "answer-feedback muted";
      }
      if (submitExerciseBtn) submitExerciseBtn.disabled = false;
      if (nextAdaptiveBtn) nextAdaptiveBtn.disabled = true;
    };

    const showResults = () => {
      const correctCount = history.filter((h) => h.isCorrect).length;
      const trajectory = history.map((h) => h.difficulty).join(" → ");
      const answersHtml = history
        .map(
          (h, idx) => `
            <li class="${h.isCorrect ? "correct" : "wrong"}">
              <strong>Q${idx + 1} (${h.difficulty}):</strong> ${h.prompt}<br>
              Your answer: ${h.userAnswerText || "None"}${h.isCorrect ? " ✅" : " ❌"}<br>
              Correct answer: ${h.correctAnswerText}
            </li>
          `
        )
        .join("");
      container.innerHTML = `
        <div class="question-set results-panel">
          <div class="actions-header">
            <h4>Results</h4>
            <p class="muted">Exercises · Session complete.</p>
          </div>
          <p><strong>Total score:</strong> ${correctCount} / ${history.length}</p>
          <p><strong>Difficulty path:</strong> ${trajectory}</p>
          <ul class="outline-list">${answersHtml}</ul>
        </div>
      `;
      setProgressStatus("exercises", index, correctCount === history.length ? "completed" : "progress");
    };

    submitExerciseBtn?.addEventListener("click", () => {
      const selected = view.querySelector("input[type=radio]:checked");
      if (!selected) {
        if (feedback) {
          feedback.textContent = "Choose an option first.";
          feedback.classList.remove("muted");
          feedback.classList.add("error");
        }
        return;
      }
      const chosen = Number(selected.value);
      const isCorrect = chosen === currentQuestion.correct;
      history.push({
        prompt: currentQuestion.prompt,
        userAnswerText: currentQuestion.options[chosen],
        correctAnswerText: currentQuestion.options[currentQuestion.correct],
        isCorrect,
        difficulty: currentDifficulty,
      });
      if (isCorrect) {
        if (currentDifficulty === "easy") currentDifficulty = "medium";
        else currentDifficulty = "hard";
      } else {
        if (currentDifficulty === "hard") currentDifficulty = "medium";
        else currentDifficulty = "easy";
      }
      if (feedback) {
        feedback.textContent = "Answer recorded. Click Next.";
        feedback.classList.remove("error");
        feedback.classList.add("muted");
      }
      if (submitExerciseBtn) submitExerciseBtn.disabled = true;
      if (nextAdaptiveBtn) nextAdaptiveBtn.disabled = false;
      if (history.length >= maxQuestions) {
        showResults();
      }
    });

    nextAdaptiveBtn?.addEventListener("click", () => {
      if (history.length >= maxQuestions) return;
      renderAdaptive();
    });

    renderAdaptive();
    return;
  }

  const updateNav = () => {
    if (counter) counter.textContent = `Question ${current + 1} of ${total}`;
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === total - 1;
  };

  const checkCompletion = () => {
    const allCorrect = solved.every(Boolean);
    setProgressStatus(track, index, allCorrect ? "completed" : "progress");
  };

  const markOptionRows = (cardEl, correctIndex, chosenIndex, isCorrect) => {
    const rows = cardEl.querySelectorAll(".option-row");
    rows.forEach((row, idx) => {
      row.classList.remove("correct-ans", "wrong-ans");
      const input = row.querySelector("input[type=radio]");
      if (!input) return;
      if (idx === correctIndex) {
        row.classList.add("correct-ans");
      }
      if (idx === chosenIndex && !isCorrect) {
        row.classList.add("wrong-ans");
      }
    });
  };

  const bindQuestion = () => {
    const card = view.querySelector(".question-card");
    if (!card) return;
    const btn = card.querySelector(".check-answer");
    const feedback = card.querySelector(".answer-feedback");
    const qIdx = current;
    card.querySelectorAll(`input[name="q-${qIdx}"]`).forEach((input) => {
      input.addEventListener("change", () => {
        selections[qIdx] = Number(input.value);
      });
    });
    if (!btn || !feedback || isExerciseMode) return;
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
      markOptionRows(card, unit.questions[qIdx].correct, Number(selected.value), correct);
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
    view.innerHTML = renderQuestionCard(unit.questions[current], current, !isExerciseMode);
    if (selections[current] !== null) {
      const preset = view.querySelector(`input[name="q-${current}"][value="${selections[current]}"]`);
      if (preset) preset.checked = true;
    }
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

  submitAllBtn?.addEventListener("click", () => {
    if (selections.some((val) => val === null)) {
      alert("Please answer all questions before submitting.");
      return;
    }
    let correctCount = 0;
    const rows = unit.questions.map((q, idx) => {
      const isCorrect = selections[idx] === q.correct;
      if (isCorrect) correctCount += 1;
      return `<li class="answer-row ${isCorrect ? "correct" : "wrong"}"><strong>Q${idx + 1}:</strong> ${
        q.prompt
      }<br><span class="user-answer">Your answer: ${q.options[selections[idx]]}${
        isCorrect ? " ✅" : " ❌"
      }</span><br><span class="correct-answer">Correct: ${q.options[q.correct]}</span></li>`;
    });
    const scorePct = Math.round((correctCount / total) * 100);
    if (track === "graded") {
      const key = courseName.toLowerCase().includes("bio")
        ? "biology"
        : courseName.toLowerCase().includes("probability")
        ? "probability"
        : "general";
      try {
        localStorage.setItem(`pp-graded-score-${key}`, String(scorePct));
      } catch (e) {
        /* ignore */
      }
    }
    container.innerHTML = `
      <div class="question-set results-panel">
        <div class="actions-header">
          <h4>Results</h4>
          <p class="muted">Exercises · Score: ${correctCount}/${total} (${scorePct}%)</p>
        </div>
        <ul class="outline-list">${rows.join("")}</ul>
      </div>
    `;
    setProgressStatus(track, index, scorePct === 100 ? "completed" : "progress");
  });

  renderCurrent();
};

const buildQuizOnlyMarkup = (unit) => {
  const limitedUnit = { ...unit, questions: (unit.questions || []).slice(0, 10) };
  return `
    <div class="module-card">
      <header class="module-header">
        <div class="module-icon">🧠</div>
        <div>
          <p class="module-eyebrow">Exercises</p>
          <h3>${unit.title}</h3>
          <p>${unit.description || "Work through the questions, then submit."}</p>
        </div>
      </header>
      ${renderQuestions(limitedUnit, "graded")}
    </div>
  `;
};

const loadSection = (track, index) => {
  const units =
    track === "modules"
      ? moduleUnits
      : track === "exercises"
      ? exerciseUnits
      : track === "graded"
      ? gradedUnits
      : practiceUnits;
  const unit = units[index] || units[0];
  if (!unit) return;
  currentSelection = { track, index };
  const markup =
    track === "graded"
      ? buildQuizOnlyMarkup(unit)
      : track === "exercises"
      ? buildQuizOnlyMarkup(unit)
      : buildModuleMarkup(unit, track);
  contentStage.innerHTML = markup;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active", "open"));
  const activeItem = document.querySelector(`.nav-item[data-track="${track}"][data-index="${index}"]`);
  activeItem?.classList.add("active", "open");
  if (statusForIndex(track, index) !== "completed") {
    setProgressStatus(track, index, "progress");
  }
  applyVisualFilter();
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
  try {
    const savedVis = localStorage.getItem("pp-visuality");
    if (savedVis && settingsVisuality) settingsVisuality.value = savedVis;
  } catch (error) {
    /* ignore */
  }
  settingsVisuality?.addEventListener("change", (e) => {
    try {
      localStorage.setItem("pp-visuality", e.target.value);
    } catch (error) {
      /* ignore */
    }
    applyVisualFilter();
  });
  setupSounds();
  await ensureModelViewer();
  wireModelViewers(document);
  const progressLoaded = await loadProgress();
  if (!progressLoaded) return;
  rebuildPracticeUnits();
  setupNav();
  applyVisualFilter();
};

initWorkspace();
