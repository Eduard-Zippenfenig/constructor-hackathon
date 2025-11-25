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
        title: "Chapter 1: The Cell",
        description: "Core cell structure and energy flow.",
        media: {
          graphPrompt: "Cell overview",
          readerPrompt:
            "Chapter 1: The Cell\nCell theory is the foundational principle of biology and states that all living organisms, from the simplest bacteria to the most complex animals, are composed of cells. These cells serve as the basic structural and functional units of life. According to this theory, cells are responsible for carrying out all essential processes that define living systems, including growth, metabolism, and reproduction. Another central idea is that all cells arise from pre-existing cells rather than forming spontaneously. This insight helped scientists understand how tissues heal, how organisms grow, and how hereditary traits are passed from one generation to the next. Examples: A cut on the skin heals because nearby cells divide to replace those that were damaged, and bacterial populations increase through the simple division of one cell into two identical descendants.\nCells exist in two major categories: prokaryotic and eukaryotic. Prokaryotic cells are the simpler of the two and lack internal membrane-bound organelles. Their DNA is not enclosed within a nucleus but is instead located in a region called the nucleoid. Despite their simplicity, they are incredibly adaptable and can survive in extreme environments such as hot springs, deep ocean vents, and frozen soil. Examples: Common bacteria like E. coli inhabit the human digestive system, cyanobacteria carry out photosynthesis in aquatic ecosystems, and archaea thrive in highly acidic or extremely hot environments. Eukaryotic cells, on the other hand, contain a nucleus and various organelles with specialized functions. These cells are larger, more complex, and form organisms such as plants, animals, fungi, and protists. Examples: Yeast used in baking is eukaryotic, plant cells contain chloroplasts for photosynthesis, and animal cells form tissues such as muscles and nerves.\nAlthough cells vary widely in form, they share certain essential components. Every cell possesses a cell membrane composed of a phospholipid bilayer that controls the movement of substances in and out of the cell. This membrane also contains receptors and channels that allow communication with the environment. Examples: Insulin binds to receptors on muscle cells and triggers glucose uptake, and nerve cells transmit electrical signals using ion channels in their membranes. Inside the membrane lies the cytoplasm, a gel-like fluid filled with enzymes and nutrients essential for metabolic reactions. Ribosomes, present in all cells, assemble proteins by translating genetic instructions. Examples: Pancreatic cells rely on ribosomes to produce digestive enzymes, while muscle cells produce large quantities of actin and myosin. At the core of cellular function is genetic material, primarily DNA, which stores the organism’s blueprint. RNA serves as the messenger and helper molecule during protein synthesis.\nCells in multicellular organisms are often highly specialized. Their structures are adapted to the specific tasks they perform. Examples: Nerve cells have long extensions that allow them to transmit impulses across long distances, red blood cells are concave discs optimized for oxygen transport, muscle cells contain abundant mitochondria to power contractions, and plant root hair cells have elongated projections that enhance water and nutrient absorption.",
          modelSrc: "/static/cell.glb",
          podcastSrc: "/static/Biology1.mp3",
          videoSrc: "/static/Biology11.mov",
          genzVideoSrc: "/static/bio1.mp4",
        },
        resources: [
          { label: "Cell Texture", href: "/static/cell-texture.txt" },
          { label: "3D Cell Model", href: "/static/cell.glb" },
          { label: "Mitochondria Model", href: "/static/mitochondria.glb" },
        ],
      },
      {
        title: "Chapter 2: The Mitochondrion",
        description: "Powerhouse details.",
        media: {
          graphPrompt: "Mitochondria roles",
          readerPrompt:
            "Chapter 2: The Mitochondrion\nMitochondria are double-membraned organelles often called the “powerhouses of the cell” because they produce most of the ATP that fuels cellular activities. The outer membrane acts as a protective boundary, while the inner membrane folds into cristae that greatly increase surface area for energy-generating reactions. Inside the inner membrane is the matrix, which contains enzymes for metabolic pathways, ribosomes, and mitochondrial DNA. These characteristics allow mitochondria to produce some of their own proteins, granting them a degree of independence within the cell. Examples: Heart muscle cells contain many mitochondria because they require continuous energy, and endurance athletes often develop high mitochondrial density in their muscles.\nThe primary function of mitochondria is ATP production via cellular respiration. This begins with the Krebs cycle in the matrix, where nutrient molecules are broken down to release electrons. These electrons flow through the electron transport chain located in the inner membrane. Their movement establishes a proton gradient that powers ATP synthase, the enzyme responsible for producing ATP. Examples: Neurons require ATP to maintain electrical gradients that allow them to generate nerve impulses, and muscle cells need a constant supply of ATP for contraction during physical activity.\nMitochondria also carry out additional vital roles. They help regulate apoptosis, a form of programmed cell death that eliminates damaged or unnecessary cells in a controlled manner. Examples: Immune cells self-destruct after eliminating an infection, and cells with severely damaged DNA undergo apoptosis to prevent cancer formation. In specialized tissues such as brown fat, mitochondria generate heat through non-shivering thermogenesis. Examples: Infants rely on brown fat to maintain body temperature. Mitochondria also regulate calcium levels within cells, which is essential for signaling and muscle contraction.",
          modelSrc: "/static/mitochondria.glb",
          podcastSrc: "/static/Biology2.mp3",
          genzVideoSrc: "/static/bio2.mp4",
        },
        resources: [{ label: "Mitochondria Model", href: "/static/mitochondria.glb" }],
      },
      {
        title: "Chapter 3: The Golgi Apparatus",
        description: "Processing and packaging.",
        media: {
          graphPrompt: "Golgi pathways",
          readerPrompt:
            "Chapter 3: The Golgi Apparatus\nThe Golgi apparatus functions as the cell’s processing, modifying, and packaging center. It consists of flattened membrane-bound sacs called cisternae arranged in a stack. The cis face receives newly synthesized proteins and lipids from the endoplasmic reticulum (ER). As molecules move from the cis to the medial to the trans region, they undergo highly organized modifications. The trans face sorts and packages them for secretion or for delivery to specific cellular locations.\nThe Golgi apparatus performs chemical modifications such as glycosylation and phosphorylation, which determine molecular function and final destination. Processed molecules are packaged into vesicles that either fuse with the cell membrane, become part of lysosomes, or transport materials elsewhere within the cell. Examples: Intestinal cells rely on the Golgi to secrete mucus, and immune cells use it to package antibodies before releasing them into the bloodstream.\nProteins travel from the rough ER to the Golgi apparatus in transport vesicles. As they move through the Golgi’s layers, they are refined into fully functional molecules. Examples: Pancreatic cells manufacture digestive enzymes in the rough ER, process them in the Golgi, and ship them to lysosomes. Insulin is also processed in the Golgi before being released from the pancreas into the bloodstream.",
          podcastSrc: "/static/Biology3.mp3",
          genzVideoSrc: "/static/bio3.mp4",
        },
        resources: [{ label: "Golgi Model", href: "/static/Golgi%20Aparatus%20Texture.glb" }],
      },
      {
        title: "Chapter 4: The Endoplasmic Reticulum (ER)",
        description: "Synthesis and transport.",
        media: {
          graphPrompt: "Rough vs smooth ER",
          podcastSrc: "/static/Biology4.mp3",
          genzVideoSrc: "/static/bio4.mp4",
          readerPrompt:
            "Chapter 4: The Endoplasmic Reticulum (ER)\nThe endoplasmic reticulum (ER) is a vast network of membranes connected to the nuclear envelope. It functions as the cell’s primary manufacturing and transportation system. The rough ER is studded with ribosomes and specializes in protein synthesis and folding. Examples: Liver and immune cells rely on the rough ER to produce high volumes of enzymes and antibodies.\nThe smooth ER, which lacks ribosomes, is responsible for lipid synthesis, detoxification, and calcium storage. Examples: Liver cells use the smooth ER to break down toxins such as alcohol, and muscle cells rely on its calcium-storing form, the sarcoplasmic reticulum, for contraction.\nWhen the ER malfunctions, serious diseases may occur. Misfolded proteins can accumulate and cause stress within the ER. Examples: In cystic fibrosis, a misfolded CFTR protein is destroyed in the ER instead of reaching the cell membrane, and disturbances in lipid regulation may result in fatty liver disease.",
        },
        resources: [],
      },
    ],
    english: [],
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
    focus: "Conditional probability and independence checks.",
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
    math: [
      {
        title: "Chapter 1: Foundations of Probability",
        description: "Core rules and intuition.",
        media: {
          graphPrompt: "Foundations visual prompt",
          podcastSrc: "/static/Probability1.mp3",
          videoSrc: "/static/Probability11.mov",
          genzVideoSrc: "/static/pro1.mp4",
          readerPrompt:
            "Chapter 1: Foundations of Probability\nProbability begins with the idea of an experiment, which is any process that produces outcomes that cannot be predicted with certainty. Everyday examples include flipping a coin, rolling dice, or measuring daily rainfall. The sample space is the complete set of all outcomes, while an event is any subset of outcomes of interest. Examples: For a coin flip, the sample space includes heads and tails, and in weather prediction, it may include rain or sunshine.\nProbability can be understood in several ways. Classical probability applies when outcomes are equally likely. Example: The chance of drawing a heart from a standard deck is thirteen out of fifty-two. Empirical probability is based on observation and repeated trials. Example: If it rained ninety days last year, the empirical probability of rain on a given day is ninety out of three hundred sixty-five. Axiomatic probability is a rigorous mathematical system built on rules: probabilities are non-negative, the probability of the full sample space is one, and probabilities of disjoint events add together.\nImportant rules include the complement rule, which states that the chance of an event not happening is one minus the chance of it happening. Example: If the probability of rain is 0.3, then the probability of no rain is 0.7. Independence occurs when the outcome of one event does not influence another. Examples: Two separate coin flips are independent, and two machines on different production lines do not affect each other’s failure probabilities.",
        },
        questions: probabilityQuestionBank,
      },
      {
        title: "Chapter 2: Conditional Probability and Bayes’ Theorem",
        description: "Conditionals and updates.",
        media: {
          graphPrompt: "Conditionals visual prompt",
          podcastSrc: "/static/Probability2.mp3",
          genzVideoSrc: "/static/pro2.mp4",
          readerPrompt:
            "Chapter 2: Conditional Probability and Bayes’ Theorem\nConditional probability measures the likelihood of an event occurring given that another event has already taken place. Example: The probability of having the flu increases if we know the person has a fever. If two events are independent, knowing that one occurred does not change the probability of the other. Example: Knowing someone rolled a three on a die has no effect on your coin flip outcome.\nThe total probability theorem is useful when an event may occur under several different scenarios. Example: Determining the probability of high blood pressure may require weighing age groups by their proportion in the population. Bayes’ theorem helps us reverse conditional probabilities, combining new information with prior knowledge. Examples: It is widely used in medical testing to determine the chance of a disease given a positive result, and in spam filtering to classify emails.",
        },
        questions: probabilityQuestionBank,
      },
      {
        title: "Chapter 3: Random Variables and Distributions",
        description: "Discrete/continuous models.",
        media: {
          graphPrompt: "Random variables visual prompt",
          podcastSrc: "/static/Probability3.mp3",
          genzVideoSrc: "/static/pro3.mp4",
          readerPrompt:
            "Chapter 3: Random Variables and Distributions\nA random variable assigns numerical values to outcomes of a random process. Discrete random variables take countable values, such as the number of cars passing an intersection. Continuous random variables take any value within an interval, such as the time needed to walk a kilometer.\nDiscrete distributions include the Bernoulli, binomial, and Poisson distributions. Examples: A Bernoulli trial models success or failure in sending a data packet, a binomial distribution models the number of correct guesses on a quiz, and a Poisson distribution models the number of customers arriving per hour.\nContinuous distributions include the uniform, exponential, and normal distributions. Examples: Computer-generated random numbers follow a uniform distribution, the time between phone calls in a call center tends to follow an exponential distribution, and human heights typically follow a normal distribution.\nExpectation represents the long-term average of a random variable, while variance measures how spread out the outcomes are. Examples: The expected number of heads in ten flips of a fair coin is five, and the variance of bus waiting times indicates how predictable the schedule is. Moment generating functions summarize all moments of a distribution and simplify the analysis of sums of random variables.",
        },
        questions: probabilityQuestionBank,
      },
      {
        title: "Chapter 4: Joint Distributions and Limit Theorems",
        description: "Joins and asymptotics.",
        media: {
          graphPrompt: "Joint distributions visual prompt",
          podcastSrc: "/static/Probability4.mp3",
          genzVideoSrc: "/static/pro4.mp4",
          readerPrompt:
            "Chapter 4: Joint Distributions and Limit Theorems\nJoint distributions describe two or more random variables at once. Examples: Temperature and electricity usage are jointly distributed, as are study hours and exam scores.\nCovariance and correlation describe relationships between variables. Height and weight typically show positive correlation, while fuel efficiency and vehicle weight often show negative correlation.\nThe law of large numbers states that the average outcome of many trials will approach the true expected value. Example: Repeated coin flips tend to stabilize around fifty percent heads. The central limit theorem states that averages of many independent variables tend to be normally distributed. Examples: Manufacturing quality control relies on this principle, as do opinion polls and surveys.\nThese theoretical tools form the basis of modern statistics, enabling scientists, engineers, and analysts to draw reliable conclusions from sample data.",
        },
        questions: probabilityQuestionBank,
      },
    ],
    english: [],
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

const hydrateProgressBars = () => {
  const probValue = document.getElementById("probability-progress-value");
  const bioValue = document.getElementById("biology-progress-value");
  const probFill = document.querySelector(".probability-progress");
  const bioFill = document.querySelector(".biology-progress");
  const clamp = (val) => Math.max(0, Math.min(100, Math.round(Number(val) || 0)));
  const prob = clamp(localStorage.getItem("pp-progress-probability"));
  const bio = clamp(localStorage.getItem("pp-progress-biology"));
  if (probValue && probFill) {
    probValue.textContent = `${prob}%`;
    probFill.style.width = `${prob}%`;
  }
  if (bioValue && bioFill) {
    bioValue.textContent = `${bio}%`;
    bioFill.style.width = `${bio}%`;
  }
};

const renderBiologyOutline = () => {
  const outline = document.getElementById("biology-module-list");
  if (!outline) return;
  outline.innerHTML = "";
  const chapters = [
    "Chapter 1: The Cell",
    "Chapter 2: The Mitochondrion",
    "Chapter 3: The Golgi Apparatus",
    "Chapter 4: The Endoplasmic Reticulum (ER)",
  ];
  chapters.forEach((title) => {
    const li = document.createElement("li");
    li.textContent = title;
    outline.appendChild(li);
  });
};

const renderProbabilityOutline = () => {
  const outline = document.getElementById("probability-module-list");
  if (!outline) return;
  outline.innerHTML = "";
  const chapters = [
    "Chapter 1: Foundations of Probability",
    "Chapter 2: Conditional Probability and Bayes’ Theorem",
    "Chapter 3: Random Variables and Distributions",
    "Chapter 4: Joint Distributions and Limit Theorems",
  ];
  chapters.forEach((title) => {
    const li = document.createElement("li");
    li.textContent = title;
    outline.appendChild(li);
  });
};

const applyGradedBadges = () => {
  const courses = [
    { key: "biology", selector: ".course-tiles article:nth-of-type(2) h3" },
    { key: "probability", selector: ".course-tiles article:nth-of-type(1) h3" },
  ];
  const clamp = (val) => Math.max(0, Math.min(100, Math.round(Number(val) || 0)));
  courses.forEach(({ key, selector }) => {
    const titleEl = document.querySelector(selector);
    if (!titleEl) return;
    let score = null;
    try {
      score = localStorage.getItem(`pp-graded-score-${key}`);
    } catch (e) {
      score = null;
    }
    if (!score) return;
    const pct = clamp(score);
    const existing = titleEl.parentElement.querySelector(".grade-badge");
    if (existing) {
      existing.textContent = `Final Exam: ${pct}%`;
      return;
    }
    const badge = document.createElement("span");
    badge.className = "grade-badge";
    badge.textContent = `Final Exam: ${pct}%`;
    titleEl.insertAdjacentElement("afterend", badge);
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

function setupSettingsDrawer() {
  const toggle = document.getElementById("settings-toggle");
  const drawer = document.getElementById("settings-drawer");
  const overlay = document.getElementById("settings-overlay");
  const closeBtn = document.getElementById("settings-close");
  if (!toggle || !drawer) return;
  const open = () => drawer.classList.remove("hidden");
  const close = () => drawer.classList.add("hidden");
  toggle.addEventListener("click", open);
  overlay?.addEventListener("click", close);
  closeBtn?.addEventListener("click", close);
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }
  const select = document.getElementById("settings-theme");
  if (select) select.value = theme;
  try {
    localStorage.setItem("pp-theme", theme);
  } catch (error) {
    /* ignore */
  }
}

function setupTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem("pp-theme");
  } catch (error) {
    saved = null;
  }
  const initial = saved === "dark" ? "dark" : "light";
  applyTheme(initial);
  const select = document.getElementById("settings-theme");
  select?.addEventListener("change", (e) => applyTheme(e.target.value));
}

let activeSound = null;
let pendingSound = null;

function stopSound() {
  if (activeSound) {
    activeSound.pause();
    activeSound = null;
  }
}

function playSound(val) {
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
}

function attachSoundResume() {
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
}

function setupSounds() {
  const select = document.getElementById("settings-sounds");
  let saved = null;
  try {
    saved = localStorage.getItem("pp-sounds");
    if (saved && select) select.value = saved;
  } catch (error) {
    saved = null;
  }
  if (saved === "lofi" || saved === "white") {
    playSound(saved);
  }
  select?.addEventListener("change", (e) => {
    const val = e.target.value;
    playSound(val);
    try {
      localStorage.setItem("pp-sounds", val);
    } catch (error) {
      /* ignore */
    }
  });
}

function setupSettingsExtras() {
  const sounds = document.getElementById("settings-sounds");
  const visuality = document.getElementById("settings-visuality");
  try {
    const savedSounds = localStorage.getItem("pp-sounds");
    if (savedSounds && sounds) sounds.value = savedSounds;
    const savedVisuality = localStorage.getItem("pp-visuality");
    if (savedVisuality && visuality) visuality.value = savedVisuality;
  } catch (error) {
    /* ignore */
  }
  sounds?.addEventListener("change", (e) => {
    try {
      localStorage.setItem("pp-sounds", e.target.value);
    } catch (error) {
      /* ignore */
    }
  });
  visuality?.addEventListener("change", (e) => {
    try {
      localStorage.setItem("pp-visuality", e.target.value);
    } catch (error) {
      /* ignore */
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const openBioBtn = document.getElementById("open-biology-workspace");
  if (openBioBtn) {
    openBioBtn.addEventListener("click", openBiologyWorkspace);
  }
  const openProbBtn = document.getElementById("open-probability-workspace");
  if (openProbBtn) {
    openProbBtn.addEventListener("click", openProbabilityWorkspace);
  }
  hydrateProgressBars();
  renderProbabilityOutline();
  loadProbabilityMaterials();
  renderBiologyOutline();
  applyGradedBadges();
  setupSettingsDrawer();
  setupTheme();
  setupSounds();
  setupSettingsExtras();
  window.addEventListener("storage", (e) => {
    if (e.key && e.key.startsWith("pp-graded-score-")) {
      applyGradedBadges();
    }
    if (e.key === "pp-sounds") {
      const select = document.getElementById("settings-sounds");
      if (select && e.newValue) select.value = e.newValue;
      if (e.newValue === "lofi" || e.newValue === "white") {
        playSound(e.newValue);
      } else {
        stopSound();
      }
    }
    if (e.key === "pp-visuality") {
      const visuality = document.getElementById("settings-visuality");
      if (visuality && e.newValue) visuality.value = e.newValue;
    }
  });
});
