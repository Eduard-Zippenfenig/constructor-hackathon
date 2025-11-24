const BIOLOGY_WORKSPACE = {
  courseName: "Biology Foundations",
  courseCode: "BIO-101",
  level: "launch",
  mathFocus: "conceptual",
  heroTitle: "BIO-101 · Biology Foundations",
  heroSubtitle: "Cell structure, genetics, evolution, and ecology with lab-ready prompts.",
  heroTags: ["Cells → Genetics", "Lab-ready checklists", "Quick MC checks"],
  trackLabels: { math: "Core Science", english: "Lab & Communication" },
  survey: {
    audio: "lofi",
    structure: "3",
    grit: "coach",
  },
  questionBank: [
    {
      prompt: "Which organelle is the primary site of ATP production in most eukaryotic cells?",
      theory: "Mitochondria house the electron transport chain and ATP synthase for oxidative phosphorylation.",
      options: ["Golgi apparatus", "Mitochondrion", "Ribosome", "Lysosome"],
      correct: 1,
      explain: "Mitochondria generate most cellular ATP during aerobic respiration.",
    },
    {
      prompt: "What is the correct complementary base pairing in DNA?",
      theory: "Hydrogen bonds form between A and T, and between C and G in double-stranded DNA.",
      options: ["A–G, C–T", "A–T, C–G", "A–C, G–T", "A–U, C–G"],
      correct: 1,
      explain: "A pairs with T (2 H-bonds); C pairs with G (3 H-bonds).",
    },
    {
      prompt: "Two heterozygous plants (Aa) are crossed. What proportion of offspring show the recessive phenotype?",
      theory: "Punnett square for Aa × Aa yields genotypes: AA, Aa, aA, aa.",
      options: ["0%", "25%", "50%", "75%"],
      correct: 1,
      explain: "One of four outcomes is aa → 25% recessive phenotype.",
    },
    {
      prompt: "Natural selection is best described as…",
      theory: "Traits that improve survival/reproduction become more common over generations.",
      options: [
        "Changes individuals make during their lifetime",
        "Differential survival/reproduction of heritable traits",
        "Random mutations that are always beneficial",
        "A goal-directed process aiming for perfection",
      ],
      correct: 1,
      explain: "Selection acts on heritable variation; populations, not individuals, evolve.",
    },
    {
      prompt: "Which process captures carbon into organic molecules in plants?",
      theory: "Photosynthesis fixes carbon dioxide into sugars using light energy.",
      options: ["Cellular respiration", "Transcription", "Photosynthesis", "Glycolysis"],
      correct: 2,
      explain: "Photosynthesis in chloroplasts fixes CO₂ via the Calvin cycle.",
    },
    {
      prompt: "Roughly what percent of energy transfers from one trophic level to the next in most food webs?",
      theory: "About 10% of energy is passed on; the rest is lost as heat/metabolism.",
      options: ["~1%", "~10%", "~50%", "~90%"],
      correct: 1,
      explain: "Ecological efficiency averages near 10%, which shapes pyramid structure.",
    },
  ],
  workspaceModules: {
    math: [
      {
        title: "Cell Structure & Energy Flow",
        description:
          "Organelles, membranes, and how cells capture/store energy through respiration and photosynthesis.",
        media: {
          guideTitle: "Guided Lab Prep · Cell Tour",
          guideIntro: "Map each organelle to its role, then trace how glucose becomes ATP.",
          guideProblems: [
            "Identify where glycolysis, Krebs, and ETC occur in a cell diagram.",
            "Label chloroplast structures and where the light vs. dark reactions occur.",
            "Explain how membrane structure supports gradients (H⁺, ions).",
            "Predict how a missing mitochondrion would affect ATP yield.",
          ],
          graphPrompt: "Sketch a cell and annotate the energy flow arrows (glucose → ATP).",
          notesPrompt: "Summarize how structure (membranes, surface area) links to function.",
        },
        tasks: [
          "Pair each organelle with one sentence on its role.",
          "Trace ATP yield from one glucose under aerobic vs. anaerobic conditions.",
          "List two structure-function relationships you can cite on a quiz.",
        ],
        resources: [
          { label: "Cell Texture", href: "/static/cell-texture.txt" },
        ],
      },
      {
        title: "Genetics & Heredity",
        description: "DNA → RNA → protein, Punnett squares, and interpreting pedigrees.",
        media: {
          guideTitle: "Guided Exercise · Traits & Tracking",
          guideIntro: "Work a mono- and dihybrid cross, then connect genotype to phenotype.",
          guideProblems: [
            "Complete Aa × Aa Punnett; mark genotype ratios and phenotype ratios.",
            "Predict offspring for RrYy × RrYy (dihybrid) and note expected phenotypic ratio.",
            "Translate a short DNA sequence into mRNA and an amino acid chain.",
            "Read a pedigree to classify inheritance (dominant, recessive, sex-linked).",
          ],
          graphPrompt: "Draw a quick Punnett square and color-code dominant vs. recessive outcomes.",
          notesPrompt: "Write two cues for when to suspect linked genes vs. independent assortment.",
        },
        tasks: [
          "Set up a Punnett square before solving any worded cross.",
          "Explain genotype → phenotype for one trait in your own words.",
          "Draft a 2-sentence summary of an inheritance pattern from a pedigree.",
        ],
      },
      {
        title: "Evolution & Natural Selection",
        description: "Mechanisms of evolution, evidence, and reading phylogenetic trees.",
        media: {
          guideTitle: "Guided Exercise · Evidence & Trees",
          guideIntro: "Connect variation, selection pressure, and fitness; practice tree reading.",
          guideProblems: [
            "List the four conditions for natural selection using a real example.",
            "Compare homologous vs. analogous structures with one example each.",
            "Interpret a simple cladogram: identify the most recent common ancestor of two taxa.",
            "Describe how genetic drift differs from selection in a bottleneck scenario.",
          ],
          graphPrompt: "Sketch a mini cladogram and mark shared derived traits.",
          notesPrompt: "Capture one piece of evidence (fossil, molecular, anatomy) for evolution.",
        },
        tasks: [
          "Write the four pillars of natural selection beside one case study.",
          "Annotate a phylogenetic tree with at least three derived traits.",
          "Contrast selection vs. drift in 3 bullet points.",
        ],
      },
      {
        title: "Systems, Homeostasis, & Ecology",
        description: "Body systems integration, feedback loops, cycles, and energy flow in ecosystems.",
        media: {
          guideTitle: "Guided Exercise · Feedbacks",
          guideIntro: "Trace a feedback loop and follow matter/energy through an ecosystem snapshot.",
          guideProblems: [
            "Diagram negative feedback for blood glucose (insulin/glucagon).",
            "Follow nitrogen through fixation → assimilation → denitrification.",
            "Explain why energy pyramids taper; calculate energy at a higher trophic level.",
            "Spot abiotic vs. biotic limits in a given biome description.",
          ],
          graphPrompt: "Draw a feedback loop with set point, sensors, and effectors labeled.",
          notesPrompt: "List two examples of homeostasis breaking and the resulting symptoms.",
        },
        tasks: [
          "Pair each major system with one homeostasis example.",
          "Compute approximate energy transfer (10% rule) for a short food chain.",
          "Identify one human impact on a cycle (carbon, nitrogen) and its consequence.",
        ],
      },
    ],
    english: [
      {
        title: "Lab Notebook Discipline",
        description: "Strong methods sections, controls, and observation notes.",
        media: {
          guideTitle: "Lab Writing Sprint",
          guideIntro: "Structure a method so a peer could replicate it without guessing.",
          guideProblems: [
            "Rewrite a sloppy method to include controls, volumes, and timing.",
            "List dependent vs. independent variables for a sample experiment.",
            "Draft a clean observation entry after running a quick simulation.",
            "State one limitation and one follow-up step for the same lab.",
          ],
          graphPrompt: "Layout a tidy notebook page: date, goal, setup, observations, next steps.",
          notesPrompt: "Capture one sentence on why controls matter for causation claims.",
        },
        tasks: [
          "Bullet controls and variables before writing any procedure.",
          "Record observations as evidence, not interpretation, then add a short inference line.",
          "End with a next-step note for future you.",
        ],
      },
      {
        title: "Data Interpretation & Graphing",
        description: "Choosing visuals, spotting outliers, and writing claims from evidence.",
        media: {
          guideTitle: "Graph & Explain",
          guideIntro: "Pick the right plot for your data, then craft a one-sentence takeaway.",
          guideProblems: [
            "Decide between line, bar, scatter, or box plot for four mini-datasets.",
            "Mark potential outliers and discuss whether to keep/remove them.",
            "Calculate mean/median and explain which is better for skewed data.",
            "Write a claim-evidence-reasoning blurb for a tiny dataset.",
          ],
          graphPrompt: "Sketch a quick scatterplot with trend line and labeled axes.",
          notesPrompt: "List two rules for axis labels and units that keep graphs readable.",
        },
        tasks: [
          "Select a graph type and justify it in one sentence.",
          "State a claim using specific data values as evidence.",
          "Note one possible source of error and its impact on interpretation.",
        ],
      },
      {
        title: "Scientific Communication & Ethics",
        description: "Cite sources, avoid overclaiming, and acknowledge uncertainty or ethics flags.",
        media: {
          guideTitle: "Argue with Evidence",
          guideIntro: "Turn results into a cautious, accurate conclusion with citations.",
          guideProblems: [
            "Rewrite an overconfident claim into a precise, supported conclusion.",
            "Flag ethical considerations in a genetics or ecology scenario.",
            "Add a limitation and future direction to a short discussion section.",
            "Practice citing a primary source and a review article correctly.",
          ],
          graphPrompt: "Map a claim-evidence-reasoning chain with citations noted.",
          notesPrompt: "Write two sentence starters that signal uncertainty responsibly.",
        },
        tasks: [
          "Cite at least one primary source for any strong claim.",
          "Pair every claim with concrete evidence and note uncertainty.",
          "Name an ethical consideration (consent, ecosystem impact, data privacy) when relevant.",
        ],
      },
    ],
  },
};

const probabilityQuestionBank = [
  {
    prompt: "Roll a fair die. What is P(rolling an even number)?",
    theory: "Sample space S = {1,2,3,4,5,6}. Event Even = {2,4,6}. Probability = |Even| / |S|.",
    options: ["1/2", "1/3", "2/3", "1/6"],
    correct: 0,
    explain: "Even outcomes are {2,4,6} so 3 of 6 outcomes -> 1/2.",
  },
  {
    prompt: "You flip two coins. What is P(exactly one head)?",
    theory: "List outcomes: HH, HT, TH, TT. Exactly one head means 'HT' or 'TH'.",
    options: ["1/4", "1/2", "3/4", "1/8"],
    correct: 1,
    explain: "Outcomes HH, HT, TH, TT. Exactly one head in HT and TH -> 2/4 = 1/2.",
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

const probabilityChapters = [
  {
    id: 1,
    title: "Chapter 1 · Probability Foundations",
    focus: "Sample spaces, events, complements, and P(A or B) = P(A) + P(B) - P(A and B).",
    sprint: "State the experiment, enumerate outcomes, and compute complements before unions.",
    commFocus: "State events crisply and describe complements in words.",
    commMove: "Always define the experiment and event labels before symbols.",
    resources: {
      slide: "ASL01-1_PRP25.pdf",
      homework: "PS1_PRP25.pdf",
      solution: "SPS1_PRP25.pdf",
    },
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
  },
  {
    id: 3,
    title: "Chapter 3 · Conditional Probability & Independence",
    focus: "P(A|B) = P(A and B) / P(B) and independence checks.",
    sprint: "Build a two-way table or tree, compute conditionals, then test independence.",
    commFocus: "Explain conditionals in plain language and when independence fails.",
    commMove: "Always state the conditioning event and whether sampling is with/without replacement.",
    resources: {
      slide: "ASL03-1_PRP25.pdf",
      homework: "PS3_PRP25.pdf",
      solution: "SPS3_PRP25.pdf",
    },
  },
  {
    id: 4,
    title: "Chapter 4 · Bayes' Rule & Diagnostics",
    focus: "Posterior = prior * likelihood / evidence; sensitivity/specificity contexts.",
    sprint: "Draw a tree, label priors/likelihoods, compute evidence, then posterior.",
    commFocus: "Write posteriors as plain-language risks and decisions.",
    commMove: "Distinguish between P(+|D) and P(D|+).",
    resources: {
      slide: "ASL04_PRP25.pdf",
      homework: "PS4_PRP25.pdf",
      solution: "SPS4_PRP25.pdf",
    },
  },
  {
    id: 5,
    title: "Chapter 5 · Discrete Random Variables",
    focus: "PMFs, expectation E[X] = sum x*p(x), variance Var(X) = sum (x-mu)^2 p(x).",
    sprint: "Build (x, p(x)) tables, compute mu and variance stepwise, use linearity.",
    commFocus: "Interpret E[X] and Var(X) in context.",
    commMove: "Pair each numeric result with a one-sentence meaning.",
    resources: {
      slide: "ASL05_PRP25.pdf",
      homework: "PS5_PRP25.pdf",
      solution: "SPS5_PRP25.pdf",
    },
  },
  {
    id: 6,
    title: "Chapter 6 · Binomial & Geometric Models",
    focus: "Binomial(n,p): P(X=k)=C(n,k) p^k (1-p)^(n-k); Geometric waiting times.",
    sprint: "Check independence/constant p, then choose binomial vs geometric.",
    commFocus: "State parameters (n,p) and assumptions explicitly.",
    commMove: "Always mention independence and constant probability when claiming binomial.",
    resources: {
      slide: "ASL06-1_PRP25.pdf",
      homework: "PS6_PRP23.pdf",
      solution: "SPS6_PRP25.pdf",
    },
  },
  {
    id: 7,
    title: "Chapter 7 · Continuous Models & Normal",
    focus: "Densities integrate to 1; Normal Z = (X-mu)/sigma.",
    sprint: "Sketch density, shade region, standardize if normal.",
    commFocus: "Describe areas as probabilities and note units disappear after standardizing.",
    commMove: "State mean/SD and the z-cut before quoting a probability.",
    resources: {
      slide: "ASL07-1_PRP25.pdf",
      homework: "PS7_PRP25.pdf",
      solution: "SPS7_PRP25.pdf",
    },
  },
  {
    id: 8,
    title: "Chapter 8 · Sampling & CLT",
    focus: "Sampling mean: mu_xbar = mu, SE = sigma/sqrt(n); CLT gives approximate normality.",
    sprint: "Check n and tail heaviness; compute SE; standardize.",
    commFocus: "Clarify when normal approximation is justified.",
    commMove: "Always report n and any skew or heavy-tail caveats.",
    resources: {
      slide: "ASL08-1_PRP25.pdf",
      homework: "PS8_PRP25.pdf",
      solution: "SPS8_PRP25.pdf",
    },
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
  },
];

const toResourceLinks = (res = {}) => {
  const links = [];
  if (res.slide) links.push({ label: "Slides", href: `/materials/slides/${encodeURIComponent(res.slide)}` });
  if (res.homework) links.push({ label: "Homework", href: `/materials/homeworks/${encodeURIComponent(res.homework)}` });
  if (res.solution) links.push({ label: "Solutions", href: `/materials/solutions/${encodeURIComponent(res.solution)}` });
  return links;
};

const workspaceUnitFromChapter = (chapter, track) => ({
  title: chapter.title,
  description: chapter.focus,
  media: {
    guideTitle: "Guided Exercise",
    guideIntro: chapter.focus,
    guideProblems: [chapter.focus, chapter.sprint],
    graphPrompt: chapter.commFocus,
    notesPrompt: chapter.commMove,
  },
  tasks: [
    "Define the experiment and events before writing symbols.",
    "Work one drill from the linked slide or homework.",
    "Write a one-sentence takeaway for your answer.",
  ],
  resources: toResourceLinks(chapter.resources),
  questions: probabilityQuestionBank,
  track,
});

const workspaceCommunicationFromChapter = (chapter) => ({
  title: chapter.title,
  description: chapter.commFocus,
  media: {
    guideTitle: "Writing Drill",
    guideIntro: chapter.commMove,
    guideProblems: [
      "State the scenario in words.",
      "List assumptions and whether they hold.",
      "Write the interpretation of a result.",
    ],
    notesPrompt: "Pair equations with narration and visuals.",
  },
  tasks: [
    "Summarize the experiment and events in two sentences.",
    "Name key assumptions (independence, replacement, model).",
    "Explain one computed probability in plain language.",
  ],
  resources: toResourceLinks(chapter.resources),
  questions: probabilityQuestionBank,
  track: "Communication",
});

const PROBABILITY_WORKSPACE = {
  courseName: "Probability · Adaptive track",
  courseCode: "PRP-25",
  level: "launch",
  mathFocus: "text",
  heroTitle: "Probability · Adaptive track",
  heroSubtitle: "Foundations, Bayes, CLT, and Markov with your slides/homeworks wired in.",
  heroTags: ["Slides + PS + solutions", "Bayes", "CLT", "Markov"],
  trackLabels: { math: "Probability", english: "Communication" },
  survey: {
    audio: "lofi",
    structure: "3",
    grit: "coach",
  },
  questionBank: probabilityQuestionBank,
  workspaceModules: {
    math: probabilityChapters.map((chapter) => workspaceUnitFromChapter(chapter, "Math")),
    english: probabilityChapters.map(workspaceCommunicationFromChapter),
  },
};

const saveWorkspacePayload = (payload) => {
  try {
    localStorage.setItem("satCourseWorkspace", JSON.stringify(payload));
  } catch (error) {
    console.error("Unable to store workspace payload", error);
  }
};

const openBiologyWorkspace = () => {
  saveWorkspacePayload(BIOLOGY_WORKSPACE);
  window.open("/course", "_blank");
};

const openProbabilityWorkspace = () => {
  saveWorkspacePayload(PROBABILITY_WORKSPACE);
  window.open("/course", "_blank");
};

const renderBiologyOutline = () => {
  const outline = document.getElementById("biology-module-list");
  if (!outline) return;
  outline.innerHTML = "";
  const modules = [
    ...BIOLOGY_WORKSPACE.workspaceModules.math,
    ...BIOLOGY_WORKSPACE.workspaceModules.english,
  ];
  modules.forEach((module) => {
    const li = document.createElement("li");
    li.textContent = module.title;
    outline.appendChild(li);
  });
};

const renderProbabilityOutline = () => {
  const outline = document.getElementById("probability-module-list");
  if (!outline) return;
  outline.innerHTML = "";
  probabilityChapters.forEach((chapter) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${chapter.title}</strong><div class="muted">${chapter.focus}</div>`;
    outline.appendChild(li);
  });
};

const renderProbabilityMaterials = (materials) => {
  const container = document.getElementById("probability-materials");
  if (!container) return;
  container.innerHTML = "";
  const categories = [
    { key: "slides", label: "Slides" },
    { key: "homeworks", label: "Homeworks" },
    { key: "solutions", label: "Solutions" },
  ];
  categories.forEach(({ key, label }) => {
    const files = materials?.[key] || [];
    const card = document.createElement("div");
    card.className = "material-card";
    const title = document.createElement("h4");
    title.textContent = `${label} (${files.length})`;
    card.appendChild(title);
    if (!files.length) {
      const empty = document.createElement("p");
      empty.className = "muted";
      empty.textContent = "No files found.";
      card.appendChild(empty);
    } else {
      const list = document.createElement("ul");
      files.forEach((file) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `/materials/${key}/${encodeURIComponent(file)}`;
        link.target = "_blank";
        link.textContent = file;
        li.appendChild(link);
        list.appendChild(li);
      });
      card.appendChild(list);
    }
    container.appendChild(card);
  });
};

const loadProbabilityMaterials = async () => {
  const container = document.getElementById("probability-materials");
  if (!container) return;
  container.innerHTML = '<p class="muted">Loading downloads...</p>';
  try {
    const response = await fetch("/api/materials");
    if (!response.ok) {
      throw new Error(`Unable to load materials (${response.status})`);
    }
    const data = await response.json();
    renderProbabilityMaterials(data);
  } catch (error) {
    container.innerHTML = `<p class="form-error">${error.message || "Unable to load materials."}</p>`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const openBioBtn = document.getElementById("open-biology-workspace");
  if (openBioBtn) {
    openBioBtn.addEventListener("click", openBiologyWorkspace);
  }
  const openProbBtn = document.getElementById("open-probability-workspace");
  if (openProbBtn) {
    openProbBtn.addEventListener("click", openProbabilityWorkspace);
  }
  renderProbabilityOutline();
  loadProbabilityMaterials();
  renderBiologyOutline();
});
