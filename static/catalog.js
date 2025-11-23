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

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-biology-workspace");
  if (openBtn) {
    openBtn.addEventListener("click", openBiologyWorkspace);
  }
  renderBiologyOutline();
});
