const accountSection = document.getElementById("account-section");
const accountForm = document.getElementById("account-form");
const loginForm = document.getElementById("login-form");
const authTabs = document.querySelectorAll(".auth-tab");
const googleButton = document.getElementById("google-signup");
const googleEmailInput = document.getElementById("google-email");
const googleNameInput = document.getElementById("google-name");
const authError = document.getElementById("auth-error");
const courseSection = document.getElementById("course-section");
const curriculumSection = document.getElementById("curriculum-section");
const courseLibrarySection = document.getElementById("course-library");
const profileSummary = document.getElementById("profile-summary");
const audioPills = document.getElementById("audio-pills");
const mathToggle = document.getElementById("math-toggle");
const mathPanel = document.getElementById("math-panel");
const mathModulesContainer = document.getElementById("math-modules");
const englishModulesContainer = document.getElementById("english-modules");
const blueprintEssentials = document.getElementById("blueprint-essentials");
const mathLibrary = document.getElementById("math-library");
const englishLibrary = document.getElementById("english-library");
const materialsList = document.getElementById("materials-list");
const openCourseButton = document.getElementById("open-course");
const logoutButton = document.getElementById("logout-btn");
const stepNodes = {
  account: document.getElementById("step-account"),
  survey: document.getElementById("step-survey"),
  course: document.getElementById("step-course"),
};

const requestJson = async (url, options = {}) => {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  let body = null;
  try {
    body = await response.json();
  } catch (error) {
    body = null;
  }
  if (!response.ok) {
    const message = body?.error || `Error ${response.status}: ${response.statusText}`;
    const err = new Error(message);
    err.status = response.status;
    throw err;
  }
  return body;
};

const state = {
  account: null,
  survey: null,
  coursePayload: null,
};

const renderMaterials = (materials) => {
  if (!materialsList) return;
  materialsList.innerHTML = "";
  const categories = [
    { key: "slides", label: "Slides" },
    { key: "homeworks", label: "Homeworks" },
    { key: "solutions", label: "Homework solutions" },
  ];
  categories.forEach(({ key, label }) => {
    const files = materials?.[key] || [];
    const section = document.createElement("div");
    section.className = "material-section";
    const heading = document.createElement("h4");
    heading.textContent = label;
    section.appendChild(heading);
    if (!files.length) {
      const p = document.createElement("p");
      p.className = "muted";
      p.textContent = "No files found.";
      section.appendChild(p);
    } else {
      const list = document.createElement("ul");
      files.forEach((file) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `/materials/${key}/${encodeURIComponent(file)}`;
        link.textContent = file;
        link.target = "_blank";
        li.appendChild(link);
        list.appendChild(li);
      });
      section.appendChild(list);
    }
    materialsList.appendChild(section);
  });
};

const loadMaterials = async () => {
  if (!materialsList) return;
  try {
    const data = await requestJson("/api/materials");
    renderMaterials(data);
  } catch (error) {
    materialsList.innerHTML = `<p class="form-error">${error.message || "Unable to load materials."}</p>`;
  }
};

const hideCourseSections = () => {
  courseSection?.classList.add("hidden");
  curriculumSection?.classList.add("hidden");
  courseLibrarySection?.classList.add("hidden");
};

const showCourseSections = () => {
  courseSection?.classList.remove("hidden");
  curriculumSection?.classList.remove("hidden");
  courseLibrarySection?.classList.remove("hidden");
};

const setAuthView = (mode) => {
  if (!accountForm || !loginForm) return;
  if (mode === "login") {
    accountForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  } else {
    accountForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  }
  authTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.auth === mode);
  });
  if (authError) {
    authError.classList.add("hidden");
    authError.textContent = "";
  }
};

const showAuthError = (message) => {
  if (!authError) return;
  authError.textContent = message;
  authError.classList.remove("hidden");
};

const setStepState = (currentStep) => {
  const order = ["account", "survey", "course"];
  const currentIndex = order.indexOf(currentStep);
  order.forEach((key, index) => {
    const node = stepNodes[key];
    if (!node) return;
    node.classList.remove("current", "completed");
    if (index === currentIndex) {
      node.classList.add("current");
    } else if (currentIndex > index) {
      node.classList.add("completed");
    }
  });
};

const redirectAfterAuth = (nextUrl) => {
  window.location.href = nextUrl || "/catalog";
};

const ensureCourseReady = () => {
  if (!state.survey) return;
  loadMaterials();
  buildCourse();
};

const loadSession = async () => {
  try {
    const data = await requestJson("/api/session");
    if (!data.authenticated) {
      setStepState("account");
      state.account = null;
      state.survey = null;
      if (accountSection) {
        accountSection.classList.remove("hidden");
      }
      hideCourseSections();
      logoutButton?.classList.add("hidden");
      return;
    }
    state.account = data.user;
    state.survey = data.survey;
    setStepState(state.survey ? "course" : "survey");
    logoutButton?.classList.remove("hidden");
    if (accountSection) {
      accountSection.classList.add("hidden");
    }
    if (state.survey) {
      ensureCourseReady();
    } else {
      hideCourseSections();
    }
  } catch (error) {
    console.error("Unable to load session", error);
    showAuthError(error.message || "Session error");
    setStepState("account");
  }
};

const audioOptions = [
  { id: "white noise", label: "White noise" },
  { id: "silence", label: "Silence" },
  { id: "lofi", label: "Lo-fi music" },
  { id: "classical", label: "Classical music" },
  { id: "genz", label: "Gen Z learning vibe" },
];

const mathViews = {
  text: {
    label: "Story-first",
    content:
      "Translate randomness into plain language: narrate the experiment, name the outcomes, and describe events before writing symbols.",
  },
  formula: {
    label: "Rule cards",
    content:
      "Keep the additive and multiplicative rules, conditional probability, and Bayes updates visible as you solve. Each lesson starts with a rule card and a short substitution demo.",
  },
  graph: {
    label: "Visual trees",
    content:
      "Use tree diagrams, Venn diagrams, and two-way tables to reason. Each problem highlights branches, overlaps, or partitions before computing.",
  },
  explain: {
    label: "Step-by-step",
    content:
      "Tutor mode breaks probability into micro-steps: define events, state assumptions (independence? replacement?), and annotate each ratio.",
  },
};

const chapterContent = [
  {
    id: 1,
    title: "Chapter 1 · Probability Foundations",
    focus: "Sample spaces, events, complements, and P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
    sprint: "State the experiment, enumerate outcomes, and compute complements before unions.",
    commFocus: "State events crisply and describe complements in words.",
    commMove: "Always define the experiment and event labels before symbols.",
    resources: {
      slide: "ASL01-1_PRP25.pdf",
      homework: "PS1_PRP25.pdf",
      solution: "SPS1_PRP25.pdf",
    },
    questions: [
      {
        prompt: "For a fair die, what is P(rolling an even number)?",
        theory: "P(Even) = |{2,4,6}| / |{1,2,3,4,5,6}| = 3/6.",
        options: ["1/2", "1/3", "2/3", "1/6"],
        correct: 0,
        explain: "Even outcomes are {2,4,6} so 3 of 6 outcomes → 1/2.",
      },
      {
        prompt: "Events A and B have P(A)=0.4, P(B)=0.5, P(A ∩ B)=0.2. What is P(A ∪ B)?",
        theory: "Inclusion–exclusion: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
        options: ["0.5", "0.6", "0.7", "0.9"],
        correct: 2,
        explain: "0.4 + 0.5 − 0.2 = 0.7.",
      },
      {
        prompt: "What is P(Aᶜ) if P(A)=0.28?",
        theory: "Complement rule: P(Aᶜ) = 1 − P(A).",
        options: ["0.28", "0.48", "0.62", "0.72"],
        correct: 3,
        explain: "1 − 0.28 = 0.72.",
      },
    ],
  },
  {
    id: 2,
    title: "Chapter 2 · Counting & Combinatorics",
    focus: "Multiplication rule, permutations nPr, and combinations nCr.",
    sprint: "Decide if order matters; pick nPr or nCr; verify with a quick tree.",
    commFocus: "Narrate why order matters or not for each story.",
    commMove: "State n, k, and whether repetition is allowed before computing.",
    resources: {
      slide: "ASL02-1_PRP25.pdf",
      homework: "PS2_PRP25.pdf",
      solution: "SPS2_PRP25.pdf",
    },
    questions: [
      {
        prompt: "Create a 3-symbol code from A–D with no repeats. How many codes?",
        theory: "Permutations without replacement: nPr = 4P3 = 4! / (4−3)!",
        options: ["4", "12", "24", "64"],
        correct: 2,
        explain: "4P3 = 4×3×2 = 24.",
      },
      {
        prompt: "Choose 3 students from 10 for a committee (order irrelevant). How many choices?",
        theory: "Combinations: nCr = n! / (k!(n−k)!)",
        options: ["30", "60", "120", "720"],
        correct: 2,
        explain: "10C3 = 120.",
      },
      {
        prompt: "How many ways to arrange 5 distinct books on a shelf?",
        theory: "All positions distinct: 5! permutations.",
        options: ["25", "60", "120", "240"],
        correct: 2,
        explain: "5! = 120.",
      },
    ],
  },
  {
    id: 3,
    title: "Chapter 3 · Conditional Probability & Independence",
    focus: "P(A|B) = P(A ∩ B) / P(B) and independence checks.",
    sprint: "Build a two-way table or tree, compute conditionals, then test independence.",
    commFocus: "Explain conditionals in plain language and when independence fails.",
    commMove: "Always state the conditioning event and whether sampling is with/without replacement.",
    resources: {
      slide: "ASL03-1_PRP25.pdf",
      homework: "PS3_PRP25.pdf",
      solution: "SPS3_PRP25.pdf",
    },
    questions: [
      {
        prompt: "If P(A)=0.5, P(B)=0.4, P(A∩B)=0.2, what is P(A|B)?",
        theory: "P(A|B) = P(A∩B)/P(B).",
        options: ["0.2", "0.4", "0.5", "0.9"],
        correct: 1,
        explain: "0.2 / 0.4 = 0.5.",
      },
      {
        prompt: "Are A and B independent with the numbers above?",
        theory: "Independent if P(A|B)=P(A) or P(A∩B)=P(A)P(B).",
        options: ["Yes", "No, too low", "No, too high", "Cannot tell"],
        correct: 0,
        explain: "P(A|B)=0.5 equals P(A); also P(A)P(B)=0.2 matches P(A∩B).",
      },
      {
        prompt: "Bag: 3 red, 2 blue. Draw without replacement, then draw again. P(second blue)?",
        theory: "P(B₂)=P(R then B)+P(B then B).",
        options: ["2/5", "1/2", "3/10", "7/10"],
        correct: 0,
        explain: "6/20 + 2/20 = 8/20 = 2/5.",
      },
    ],
  },
  {
    id: 4,
    title: "Chapter 4 · Bayes’ Rule & Diagnostics",
    focus: "Posterior = prior × likelihood / evidence; sensitivity/specificity contexts.",
    sprint: "Draw a tree, label priors/likelihoods, compute evidence, then posterior.",
    commFocus: "Write posteriors as plain-language risks and decisions.",
    commMove: "Distinguish between P(+|D) and P(D|+).",
    resources: {
      slide: "ASL04_PRP25.pdf",
      homework: "PS4_PRP25.pdf",
      solution: "SPS4_PRP25.pdf",
    },
    questions: [
      {
        prompt: "Prevalence 0.1, sensitivity 0.9, specificity 0.8. P(disease | positive)?",
        theory: "Posterior = (0.9·0.1) / (0.9·0.1 + 0.2·0.9).",
        options: ["0.33", "0.36", "0.50", "0.69"],
        correct: 0,
        explain: "0.09 / 0.27 ≈ 0.333.",
      },
      {
        prompt: "Which is the false positive rate?",
        theory: "False positive rate = 1 − specificity.",
        options: ["Sensitivity", "Specificity", "0.2", "0.9"],
        correct: 2,
        explain: "Specificity 0.8 → false positive rate 0.2.",
      },
      {
        prompt: "What is the evidence term P(+) in the tree above?",
        theory: "P(+) = P(+|D)P(D) + P(+|Dᶜ)P(Dᶜ).",
        options: ["0.09", "0.18", "0.27", "0.72"],
        correct: 2,
        explain: "0.9·0.1 + 0.2·0.9 = 0.27.",
      },
    ],
  },
  {
    id: 5,
    title: "Chapter 5 · Discrete Random Variables",
    focus: "PMFs, expectation E[X] = Σ x·p(x), variance Var(X) = Σ (x−μ)² p(x).",
    sprint: "Build (x, p(x)) tables, compute μ and Var stepwise, use linearity.",
    commFocus: "Interpret E[X] and Var(X) in context.",
    commMove: "Pair each numeric result with a one-sentence meaning.",
    resources: {
      slide: "ASL05_PRP25.pdf",
      homework: "PS5_PRP25.pdf",
      solution: "SPS5_PRP25.pdf",
    },
    questions: [
      {
        prompt: "X: {0,1,2} with p = {0.2, 0.5, 0.3}. What is E[X]?",
        theory: "E[X] = Σ x·p(x) = 0·0.2 + 1·0.5 + 2·0.3.",
        options: ["0.8", "1.1", "1.6", "2.0"],
        correct: 1,
        explain: "0 + 0.5 + 0.6 = 1.1.",
      },
      {
        prompt: "Var(X) for the same distribution?",
        theory: "Var = Σ (x−μ)² p(x).",
        options: ["0.29", "0.49", "0.69", "1.21"],
        correct: 1,
        explain: "(0−1.1)²·0.2 + (1−1.1)²·0.5 + (2−1.1)²·0.3 ≈ 0.49.",
      },
      {
        prompt: "If Y = 3X + 2, what is E[Y]?",
        theory: "E[aX + b] = a·E[X] + b.",
        options: ["3.3", "5.3", "7.3", "8.3"],
        correct: 1,
        explain: "3·1.1 + 2 = 5.3.",
      },
    ],
  },
  {
    id: 6,
    title: "Chapter 6 · Binomial & Geometric Models",
    focus: "Binomial(n,p): P(X=k)=C(n,k) p^k (1−p)^{n−k}; Geometric waiting times.",
    sprint: "Check independence/constant p, then choose binomial vs geometric.",
    commFocus: "State parameters (n,p) and assumptions explicitly.",
    commMove: "Always mention independence and constant probability when claiming binomial.",
    resources: {
      slide: "ASL06-1_PRP25.pdf",
      homework: "PS6_PRP23.pdf",
      solution: "SPS6_PRP25.pdf",
    },
    questions: [
      {
        prompt: "Binomial with n=3, p=0.4. P(X=2)?",
        theory: "C(3,2) p² (1−p).",
        options: ["0.144", "0.288", "0.432", "0.6"],
        correct: 1,
        explain: "3*0.16*0.6 = 0.288.",
      },
      {
        prompt: "For geometric(p=0.2), P(first success on trial 4)?",
        theory: "P(X=4) = (1−p)^{3} p.",
        options: ["0.1024", "0.2", "0.256", "0.512"],
        correct: 0,
        explain: "(0.8)^3 * 0.2 = 0.1024.",
      },
      {
        prompt: "Mean of Binomial(n,p)?",
        theory: "E[X] = np.",
        options: ["np", "n(1−p)", "p/(1−p)", "1/p"],
        correct: 0,
        explain: "Expectation of binomial is np.",
      },
    ],
  },
  {
    id: 7,
    title: "Chapter 7 · Continuous Models & Normal",
    focus: "Densities integrate to 1; Normal Z = (X−μ)/σ.",
    sprint: "Sketch density, shade region, standardize if normal.",
    commFocus: "Describe areas as probabilities and note units disappear after standardizing.",
    commMove: "State mean/SD and the z-cut before quoting a probability.",
    resources: {
      slide: "ASL07-1_PRP25.pdf",
      homework: "PS7_PRP25.pdf",
      solution: "SPS7_PRP25.pdf",
    },
    questions: [
      {
        prompt: "For Z~N(0,1), which interval holds ~68%?",
        theory: "Empirical rule: ±1 SD.",
        options: ["|z|<0.5", "|z|<1", "|z|<2", "|z|<3"],
        correct: 1,
        explain: "~68% lies between -1 and 1.",
      },
      {
        prompt: "Density f(x) must satisfy…?",
        theory: "f(x) ≥ 0 and ∫ f(x) dx = 1.",
        options: ["f(x) ≥ 1", "∫ f(x) dx = 0", "f(x) ≥ 0 and integrates to 1", "f(x) bounded"],
        correct: 2,
        explain: "Nonnegative and total area 1.",
      },
      {
        prompt: "For X~N(μ,σ²), Z = (X−μ)/σ has…",
        theory: "Standard normal with mean 0, variance 1.",
        options: ["Mean μ, Var σ²", "Mean 0, Var 1", "Mean σ, Var μ", "Mean 1, Var 0"],
        correct: 1,
        explain: "Standardization centers and scales.",
      },
    ],
  },
  {
    id: 8,
    title: "Chapter 8 · Sampling & CLT",
    focus: "Sampling mean: μ_{X̄}=μ, SE=σ/√n; CLT gives approximate normality.",
    sprint: "Check n and tail heaviness; compute SE; standardize.",
    commFocus: "Clarify when normal approximation is justified.",
    commMove: "Always report n and any skew/heavy-tail caveats.",
    resources: {
      slide: "ASL08-1_PRP25 2.pdf",
      homework: "PS8_PRP25.pdf",
      solution: "SPS8_PRP25.pdf",
    },
    questions: [
      {
        prompt: "Population sd 10, n=36. SE of sample mean?",
        theory: "SE = σ / √n.",
        options: ["1", "1.5", "1.67", "3"],
        correct: 2,
        explain: "10 / √36 = 10/6 ≈ 1.67.",
      },
      {
        prompt: "When does CLT typically apply?",
        theory: "For iid samples with finite variance; larger n if heavy tails.",
        options: ["n≥5 always", "Only normal populations", "Moderate/large n with finite variance", "Never for proportions"],
        correct: 2,
        explain: "CLT covers many iid cases as n grows.",
      },
      {
        prompt: "For a proportion p̂ with n=100, p=0.4, SE?",
        theory: "SE = sqrt(p(1−p)/n).",
        options: ["0.004", "0.049", "0.24", "0.6"],
        correct: 1,
        explain: "sqrt(0.4·0.6/100) ≈ 0.049.",
      },
    ],
  },
  {
    id: 9,
    title: "Chapter 9 · Simulation & Markov Chains",
    focus: "Monte Carlo estimation; simple Markov transition matrices and steady state.",
    sprint: "Design experiments, track long-run proportions, solve for stationary vectors.",
    commFocus: "Document simulation design and interpret long-run behavior plainly.",
    commMove: "State seed, iterations, and what convergence means in context.",
    resources: {
      slide: "ASL09-1_PRP25.pdf",
      homework: "PS9_PRP25.pdf",
      solution: "SPS9_PRP25.pdf",
    },
    questions: [
      {
        prompt: "Two-state chain with P=[[0.7,0.3],[0.4,0.6]]. Steady-state π satisfies…",
        theory: "πP=π and π1+π2=1.",
        options: ["π=[0.5,0.5]", "π=[0.4,0.6]", "π=[0.57,0.43]", "π=[0.3,0.7]"],
        correct: 2,
        explain: "Solve π1=0.7π1+0.4π2 → π1≈0.57.",
      },
      {
        prompt: "Monte Carlo estimate accuracy improves when…",
        theory: "Variance decreases ≈1/n for iid draws.",
        options: ["Fewer iterations", "More iterations", "Higher variance inputs", "Changing the seed frequently"],
        correct: 1,
        explain: "Larger n lowers standard error ~1/√n.",
      },
      {
        prompt: "Simulation log should include…",
        theory: "Generator/seed, iterations, statistic recorded, and checks.",
        options: ["Only the final number", "Seed, iterations, outputs", "Hardware details only", "Nothing; logs are optional"],
        correct: 1,
        explain: "Document setup for reproducibility.",
      },
    ],
  },
];

const mapMathModule = ({ title, focus, sprint }) => ({ title, focus, sprint });
const mapEnglishModule = ({ title, commFocus: focus, commMove: move }) => ({ title, focus, move });

const mathModulesByLevel = {
  launch: chapterContent.map(mapMathModule),
  boost: chapterContent.map(mapMathModule),
  excel: chapterContent.map(mapMathModule),
};

const englishModulesByLevel = {
  launch: chapterContent.map(mapEnglishModule),
  boost: chapterContent.map(mapEnglishModule),
  excel: chapterContent.map(mapEnglishModule),
};

const courseBlueprints = {
  launch: {
    duration: "4 weeks · 6 hrs/week",
    mathPriority: "Build probability fundamentals and confidence with simple models.",
    englishPriority: "Explain events, assumptions, and visuals clearly.",
    stretchGoal: "Move from intuition to clear calculations with complements and conditionals.",
  },
  boost: {
    duration: "5 weeks · 7 hrs/week",
    mathPriority: "Strengthen discrete models, expectation, and Bayes updates.",
    englishPriority: "Communicate risk, expected value, and posterior conclusions.",
    stretchGoal: "Translate real scenarios into binomial/Bayes models quickly.",
  },
  excel: {
    duration: "6 weeks · 8 hrs/week",
    mathPriority: "Confident with continuous models, CLT, and Markov/simulation thinking.",
    englishPriority: "Concise technical writeups and model defenses.",
    stretchGoal: "Handle advanced probability narratives and justify model choices.",
  },
};

const toLibraryUnit = ({ title, focus }) => ({
  title,
  description: focus,
  lessons: [
    "Concept brief with formulas",
    "Worked examples",
    "Targeted practice set",
  ],
});

const courseLibraryContent = {
  launch: {
    math: chapterContent.map(toLibraryUnit),
    english: chapterContent.map(({ title, commFocus }) => ({
      title,
      description: commFocus,
      lessons: [
        "Define the scenario and events in words",
        "Explain assumptions and conditions",
        "Write a short interpretation",
      ],
    })),
  },
  boost: {
    math: chapterContent.map(toLibraryUnit),
    english: chapterContent.map(({ title, commFocus }) => ({
      title,
      description: commFocus,
      lessons: [
        "Define the scenario and events in words",
        "Explain assumptions and conditions",
        "Write a short interpretation",
      ],
    })),
  },
  excel: {
    math: chapterContent.map(toLibraryUnit),
    english: chapterContent.map(({ title, commFocus }) => ({
      title,
      description: commFocus,
      lessons: [
        "Define the scenario and events in words",
        "Explain assumptions and conditions",
        "Write a short interpretation",
      ],
    })),
  },
};

const toResourceLinks = (res = {}) => {
  const links = [];
  if (res.slide) links.push({ label: "Slides", href: `/materials/slides/${encodeURIComponent(res.slide)}` });
  if (res.homework) links.push({ label: "Homework", href: `/materials/homeworks/${encodeURIComponent(res.homework)}` });
  if (res.solution) links.push({ label: "Solutions", href: `/materials/homework-solutions/${encodeURIComponent(res.solution)}` });
  return links;
};

const workspaceUnitFromChapter = (chapter, track) => {
  const media = {
    guideTitle: "Guided Exercise",
    guideIntro: chapter.focus,
    guideProblems: [
      chapter.focus,
      chapter.sprint,
    ],
    graphPrompt: chapter.commFocus,
    notesPrompt: chapter.commMove,
  };
  return {
    title: chapter.title,
    description: chapter.focus,
    media,
    tasks: [
      "Write the setup in your own words.",
      "Solve a small set and check with formulas.",
      "Summarize a key mistake to avoid.",
    ],
    resources: toResourceLinks(chapter.resources),
    questions: chapter.questions,
    track,
  };
};

const workspaceCommunicationFromChapter = (chapter) => ({
  title: chapter.title,
  description: chapter.commFocus,
  media: {
    guideTitle: "Writing Drill",
    guideIntro: chapter.commMove,
    guideProblems: [
      "Define the experiment and events in words.",
      "List the assumptions (independence, replacement, model fit).",
      "Write a one-sentence interpretation for a computed probability.",
    ],
    notesPrompt: "Keep equations paired with short explanations.",
  },
  tasks: [
    "Write a two-sentence summary of the scenario and events.",
    "State the assumptions that matter and why.",
    "Draft a plain-language takeaway for a result.",
  ],
  resources: toResourceLinks(chapter.resources),
  questions: chapter.questions,
  track: "Communication",
});

const courseWorkspaceContent = {
  launch: {
    math: chapterContent.map((c) => workspaceUnitFromChapter(c, "Math")),
    english: chapterContent.map(workspaceCommunicationFromChapter),
  },
  boost: {
    math: chapterContent.map((c) => workspaceUnitFromChapter(c, "Math")),
    english: chapterContent.map(workspaceCommunicationFromChapter),
  },
  excel: {
    math: chapterContent.map((c) => workspaceUnitFromChapter(c, "Math")),
    english: chapterContent.map(workspaceCommunicationFromChapter),
  },
};

const describeStructure = (value) => {
  const score = Number(value);
  if (score <= 2) {
    return "Prefers flexible weekly checkpoints with room to explore additional practice.";
  }
  if (score === 3) {
    return "Balanced mix of guidance and autonomy works best.";
  }
  return "Thrives with daily agendas and explicit milestones.";
};

const gritMessages = {
  solo: "Independent starter: prime them with optional hints after they attempt a question.",
  hint: "Prefers light scaffolds: layer on hint cards when accuracy dips.",
  coach: "Responds to coaching cues and motivational nudges between questions.",
};

const determineLevel = (score) => {
  if (score <= 2) return "launch";
  if (score <= 4) return "boost";
  return "excel";
};

const determineLevelFromSurvey = (survey) => {
  const structureScore = Number(survey?.structure || 3);
  return determineLevel(structureScore);
};

const determineMathFocus = (survey) => {
  if (!survey) return "text";
  return survey.mathStyle || "text";
};

const renderMathView = (key) => {
  const view = mathViews[key];
  mathPanel.innerHTML = `<h4>${view.label}</h4><p>${view.content}</p>`;
  Array.from(mathToggle.children).forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === key);
  });
};

const renderMathToggle = (activeKey) => {
  mathToggle.innerHTML = "";
  Object.entries(mathViews).forEach(([key, view]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = view.label;
    btn.dataset.view = key;
    if (key === activeKey) {
      btn.classList.add("active");
    }
    btn.addEventListener("click", () => renderMathView(key));
    mathToggle.appendChild(btn);
  });
  renderMathView(activeKey);
};

const renderModules = (container, modules) => {
  container.innerHTML = "";
  modules.forEach((module) => {
    const el = document.createElement("div");
    el.className = "module";
    el.innerHTML = `
      <h4>${module.title}</h4>
      <p><strong>Focus:</strong> ${module.focus}</p>
      <p class="muted"><strong>Practice move:</strong> ${module.sprint || module.move}</p>
    `;
    container.appendChild(el);
  });
};

const renderLibraryColumn = (container, units) => {
  container.innerHTML = "";
  units.forEach((unit) => {
    const card = document.createElement("div");
    card.className = "unit-card";
    const lessons = unit.lessons
      .map((lesson) => `<li>${lesson}</li>`)
      .join("");
    card.innerHTML = `
      <h4>${unit.title}</h4>
      <p>${unit.description}</p>
      <ul>${lessons}</ul>
    `;
    container.appendChild(card);
  });
};

const renderCourseLibrary = (level) => {
  const library = courseLibraryContent[level];
  renderLibraryColumn(mathLibrary, library.math);
  renderLibraryColumn(englishLibrary, library.english);
};

const renderCourseBlueprint = (level) => {
  const blueprint = courseBlueprints[level];
  blueprintEssentials.innerHTML = `
    <li><strong>Cadence:</strong> ${blueprint.duration}</li>
    <li><strong>Math priority:</strong> ${blueprint.mathPriority}</li>
    <li><strong>English priority:</strong> ${blueprint.englishPriority}</li>
    <li><strong>Stretch target:</strong> ${blueprint.stretchGoal}</li>
  `;
};

const buildProfileSummary = ({ level, mathLens }) => {
  const learnerLine = state.account
    ? `<li><strong>Learner:</strong> ${state.account.fullName} · ${state.account.goal || "Goal pending"}</li>`
    : "";
  const structurePref = state.survey ? describeStructure(state.survey.structure) : "Pending survey";
  const supportPref = state.survey ? gritMessages[state.survey.grit] : "Pending survey";
  const mathPref = mathViews[mathLens]?.label || "Preferred lens pending";
  const audioPref = audioOptions.find((option) => option.id === state.survey?.audio)?.label || "Choose a soundscape";
  profileSummary.innerHTML = `
    ${learnerLine}
    <li><strong>Overall pathway:</strong> ${level.toUpperCase()}</li>
    <li><strong>Math lens:</strong> ${mathPref}</li>
    <li><strong>Soundtrack:</strong> ${audioPref}</li>
    <li><strong>Plan structure:</strong> ${structurePref}</li>
    <li><strong>Support preference:</strong> ${supportPref}</li>
  `;
};

const renderAudioPills = (activeId) => {
  audioPills.innerHTML = "";
  audioOptions.forEach((option) => {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = option.label;
    if (option.id === activeId) {
      pill.classList.add("active");
    }
    audioPills.appendChild(pill);
  });
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
    prompt: "You flip two coins. What is P(exactly one head)?",
    theory: "List outcomes: HH, HT, TH, TT. Exactly one head means 'HT' or 'TH'.",
    options: ["1/4", "1/2", "3/4", "1/8"],
    correct: 1,
    explain: "Outcomes HH, HT, TH, TT. Exactly one head in HT and TH → 2/4 = 1/2.",
  },
  {
    prompt: "Choose 2 students from 5. How many unordered pairs?",
    theory: "Order does not matter, so use combinations: nCk = n! / (k!(n-k)!).",
    options: ["5", "10", "20", "15"],
    correct: 1,
    explain: "Combinations: 5 choose 2 = 10.",
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
    prompt: "Normal(0,1): Which z captures the middle 68% of the mass (approx)?",
    theory: "Empirical rule: ~68% of mass lies within 1 standard deviation.",
    options: ["|z| < 0.5", "|z| < 1", "|z| < 2", "|z| < 3"],
    correct: 1,
    explain: "About 68% lies between -1 and 1.",
  },
];

const withQuestions = (units) =>
  units.map((unit) => ({
    ...unit,
    questions: unit.questions && unit.questions.length ? unit.questions : defaultQuestionBank,
  }));

const buildCourseWorkspacePayload = (level, mathFocus) => ({
  generatedAt: new Date().toISOString(),
  account: state.account,
  level,
  mathFocus,
  survey: state.survey,
  blueprint: courseBlueprints[level],
  mathModules: withQuestions(mathModulesByLevel[level]),
  englishModules: withQuestions(englishModulesByLevel[level]),
  library: courseLibraryContent[level],
  workspaceModules: {
    math: withQuestions(courseWorkspaceContent[level].math),
    english: withQuestions(courseWorkspaceContent[level].english),
  },
});

const handleAccountSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const payload = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
    goal: formData.get("goal"),
  };
  try {
    const data = await requestJson("/api/signup", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (data.accountCreated) {
      redirectAfterAuth(data.next || "/focus-test");
    }
  } catch (error) {
    showAuthError(error.message || "Unable to sign up.");
  }
};

const handleLoginSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const payload = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const data = await requestJson("/api/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    redirectAfterAuth(data.next || "/focus-test");
  } catch (error) {
    showAuthError(error.message || "Unable to log in.");
  }
};

const handleGoogleSignup = async () => {
  const email = googleEmailInput?.value.trim();
  const fullName = googleNameInput?.value.trim() || "Google Learner";
  if (!email) {
    showAuthError("Please provide your Google account email.");
    return;
  }
  try {
    const data = await requestJson("/api/google-login", {
      method: "POST",
      body: JSON.stringify({ email, fullName }),
    });
    redirectAfterAuth(data.next || "/focus-test");
  } catch (error) {
    showAuthError(error.message || "Unable to contact Google sign-in.");
  }
};

const launchWorkspace = () => {
  if (!state.coursePayload) return;
  try {
    localStorage.setItem("satCourseWorkspace", JSON.stringify(state.coursePayload));
  } catch (error) {
    console.error("Unable to save workspace payload", error);
  }
  window.open("/course", "_blank");
};

const buildCourse = () => {
  if (!state.survey) return;
  const level = determineLevelFromSurvey(state.survey);
  const mathFocus = determineMathFocus(state.survey);

  buildProfileSummary({
    level,
    mathLens: mathFocus,
  });
  renderAudioPills(state.survey.audio);
  renderMathToggle(mathFocus);
  renderModules(mathModulesContainer, mathModulesByLevel[level]);
  renderModules(englishModulesContainer, englishModulesByLevel[level]);
  renderCourseBlueprint(level);
  renderCourseLibrary(level);
  state.coursePayload = buildCourseWorkspacePayload(level, mathFocus);
  if (openCourseButton) {
    openCourseButton.disabled = false;
  }
  showCourseSections();
};

if (accountForm) {
  accountForm.addEventListener("submit", handleAccountSubmit);
}
if (loginForm) {
  loginForm.addEventListener("submit", handleLoginSubmit);
}
if (googleButton) {
  googleButton.addEventListener("click", handleGoogleSignup);
}
if (openCourseButton) {
  openCourseButton.addEventListener("click", launchWorkspace);
  openCourseButton.disabled = true;
}
if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    try {
      await requestJson("/api/logout", { method: "POST" });
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      window.location.href = "/";
    }
  });
}

document.querySelectorAll("[data-scroll]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    const targetSelector = trigger.dataset.scroll;
    const target = targetSelector ? document.querySelector(targetSelector) : null;
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

if (authTabs.length) {
  authTabs.forEach((tab) => {
    tab.addEventListener("click", () => setAuthView(tab.dataset.auth));
  });
  setAuthView("signup");
}
setStepState("account");
hideCourseSections();
loadSession();
