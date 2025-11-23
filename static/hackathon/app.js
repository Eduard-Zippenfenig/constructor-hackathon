const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const introCard = document.getElementById('intro');
const questionCard = document.getElementById('question-card');
const resultsCard = document.getElementById('results-card');
const questionCountEl = document.getElementById('question-count');
const measurementLabelEl = document.getElementById('measurement-label');
const noiseLabelEl = document.getElementById('noise-label');
const questionTextEl = document.getElementById('question-text');
const questionMediaEl = document.getElementById('question-media');
const answerForm = document.getElementById('answer-form');
const answerInput = document.getElementById('answer-input');
const inlineFeedback = document.getElementById('inline-feedback');
const accuracyStat = document.getElementById('accuracy-stat');
const speedStat = document.getElementById('speed-stat');
const fastestStat = document.getElementById('fastest-stat');
const insightPanel = document.getElementById('insight-panel');
const slimeWrapper = document.getElementById('slime-wrapper');
const slimeVideo = document.getElementById('slime-video');
const slimeCanvas = document.getElementById('slime-canvas');
const catalogBtn = document.getElementById('catalog-btn');
const mediaBase = (document.body?.dataset.mediaBase || '').replace(/\/$/, '');
const catalogUrl = document.body?.dataset.catalogUrl || '/catalog';

const buildMediaPath = (filename) => {
  if (!mediaBase) return filename;
  return `${mediaBase}/${filename}`;
};

let questions = [];
let currentIndex = 0;
let questionStartTime = 0;
let responses = [];
let activeAudioNode = null;
let slimeVideoPrimed = false;
let slimeAnimationStarted = false;
let catalogRedirectTimer = null;

const mediaLibrary = {
  whiteNoise: createLoopedAudio(buildMediaPath('rain.wav'), 0.2),
  softMusic: createLoopedAudio(buildMediaPath('MUSİC.mp3'), 0.25),
  slimeVideo: buildMediaPath('slime.mp4'),
};
const canStreamSlime = slimeCanvas && typeof slimeCanvas.captureStream === 'function';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (items) => items[randomInt(0, items.length - 1)];
const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const colorPalette = [
  { name: 'teal', value: '#2dd4bf' },
  { name: 'lime', value: '#bef264' },
  { name: 'violet', value: '#a78bfa' },
  { name: 'orange', value: '#fb923c' },
];

const generalKnowledgePool = [
  { prompt: 'What is the capital of Spain?', answer: 'madrid' },
  { prompt: 'Which planet is known as the Red Planet?', answer: 'mars' },
  { prompt: 'How many continents are there on Earth?', answer: '7' },
  { prompt: 'What gas do plants breathe in for photosynthesis?', answer: 'carbon dioxide' },
  { prompt: 'In which direction does the sun rise?', answer: 'east' },
  { prompt: 'How many minutes are in an hour?', answer: '60' },
];

const readAloudPool = [
  { prompt: 'Name the process where water changes from liquid to gas.', answer: 'evaporation' },
  { prompt: 'Which animal is known for remembering everything?', answer: 'elephant' },
  { prompt: 'What do bees collect from flowers to make honey?', answer: 'nectar' },
];

const silentFocusPool = [
  { prompt: 'Which ocean is the largest on Earth?', answer: 'pacific' },
  { prompt: 'What is 25 percent of 200?', answer: '50' },
  { prompt: 'Which instrument has keys, pedals, and strings?', answer: 'piano' },
];

function createLoopedAudio(src, volume = 0.2) {
  if (!src) return null;
  const audio = new Audio(src);
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = volume;
  return audio;
}

function playAudioBed(key) {
  stopBackgroundAudio();
  const audio = mediaLibrary[key];
  if (!audio) return;
  audio.currentTime = 0;
  audio.play().then(() => {
    activeAudioNode = audio;
  }).catch((err) => {
    console.warn(`Unable to play ${key}`, err);
  });
}

function stopBackgroundAudio() {
  if (activeAudioNode) {
    activeAudioNode.pause();
    activeAudioNode.currentTime = 0;
    activeAudioNode = null;
  }
}

function speakPrompt(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function startRelaxingSlimeAnimation() {
  if (!slimeCanvas || slimeAnimationStarted) return;
  slimeAnimationStarted = true;
  const ctx = slimeCanvas.getContext('2d');
  let tick = 0;

  const draw = () => {
    const { width, height } = slimeCanvas;
    ctx.fillStyle = '#e0e7ff';
    ctx.fillRect(0, 0, width, height);

    for (let layer = 0; layer < 3; layer += 1) {
      const offset = tick / (90 + layer * 20);
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 12) {
        const amplitude = 15 + layer * 8;
        const wavelength = 80 - layer * 10;
        const y =
          height / 2 +
          Math.sin(offset + (x / wavelength) * (1 + layer * 0.1)) * amplitude +
          layer * 18;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      const baseHue = 250 + layer * 8;
      gradient.addColorStop(0, `hsla(${baseHue}, 70%, 85%, 0.9)`);
      gradient.addColorStop(1, `hsla(${baseHue + 15}, 65%, 75%, 0.8)`);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    tick += 1;
    requestAnimationFrame(draw);
  };

  draw();
}

function prepareSlimeVideo() {
  if (!slimeWrapper) return;
  const src = mediaLibrary.slimeVideo;

  if (src) {
    if (!slimeVideoPrimed) {
      slimeVideo.src = src;
      slimeVideo.loop = true;
      slimeVideo.muted = true;
      slimeVideoPrimed = true;
    }
    slimeVideo.classList.remove('hidden');
    slimeVideo.play().catch(() => {});
    slimeCanvas.classList.add('sr-only');
    return;
  }

  startRelaxingSlimeAnimation();

  if (canStreamSlime) {
    if (!slimeVideoPrimed) {
      const stream = slimeCanvas.captureStream(30);
      slimeVideo.srcObject = stream;
      slimeVideo.loop = true;
      slimeVideo.muted = true;
      slimeVideoPrimed = true;
    }
    slimeVideo.classList.remove('hidden');
    slimeVideo.play().catch(() => {});
    slimeCanvas.classList.add('sr-only');
    return;
  }

  slimeVideo.classList.add('hidden');
  slimeCanvas.classList.remove('sr-only');
  slimeCanvas.classList.add('slime-canvas');
  if (!slimeWrapper.contains(slimeCanvas)) {
    slimeWrapper.insertBefore(slimeCanvas, slimeWrapper.firstChild);
  }
}

function normalizeAnswer(text) {
  return text.toString().trim().toLowerCase();
}

function buildVisualQuestion() {
  const totalShapes = randomInt(6, 11);
  const targetColor = pick(colorPalette);
  const targetShape = pick(['circle', 'square']);
  let matches = 0;
  const fragments = [];

  for (let i = 0; i < totalShapes; i += 1) {
    const color = pick(colorPalette);
    const shape = pick(['circle', 'square']);
    const isTarget = color.name === targetColor.name && shape === targetShape;
    if (isTarget) matches += 1;
    fragments.push(`<div class="visual-shape ${shape}" style="background:${color.value}"></div>`);
  }

  if (matches === 0) {
    matches = 1;
    fragments[0] = `<div class="visual-shape ${targetShape}" style="background:${targetColor.value}"></div>`;
  }

  return {
    id: 'visual',
    measurement: 'Visual recognition',
    prompt: `How many ${targetColor.name} ${targetShape === 'circle' ? 'circles' : 'blocks'} are in the grid?`,
    expected: matches.toString(),
    evaluate: (input) => Number(input) === matches,
    media: `<div class="visual-grid">${fragments.join('')}</div>`,
    answerType: 'number',
    noiseProfile: 'none',
    audioCue: null,
    readAloud: false,
    slime: false,
  };
}

function buildNonVisualQuestion() {
  const base = pick(generalKnowledgePool);
  return {
    id: 'verbal',
    measurement: 'Verbal reasoning',
    prompt: base.prompt,
    expected: base.answer,
    evaluate: (input) => normalizeAnswer(input) === base.answer,
    media: '',
    answerType: 'text',
    noiseProfile: 'none',
    audioCue: null,
    readAloud: false,
    slime: false,
  };
}

function buildWhiteNoiseQuestion() {
  const a = randomInt(10, 40);
  const b = randomInt(10, 40);
  const sum = a + b;
  return {
    id: 'white-noise',
    measurement: 'Math with rain ambience',
    prompt: `While rain falls, add ${a} + ${b}.`,
    expected: sum.toString(),
    evaluate: (input) => Number(input) === sum,
    media: '<p>Focus despite the static hiss.</p>',
    answerType: 'number',
    noiseProfile: 'white',
    audioCue: 'white-noise',
    readAloud: false,
    slime: false,
  };
}

function buildSilentQuestion() {
  const base = pick(silentFocusPool);
  return {
    id: 'silent',
    measurement: 'Calm reasoning (silent)',
    prompt: base.prompt,
    expected: base.answer,
    evaluate: (input) => normalizeAnswer(input) === base.answer,
    media: '',
    answerType: 'text',
    noiseProfile: 'silent',
    audioCue: null,
    readAloud: false,
    slime: false,
  };
}

function buildSoftMusicQuestion() {
  const multiplier = randomInt(3, 9);
  const multiplicand = randomInt(4, 12);
  const product = multiplier * multiplicand;
  return {
    id: 'soft-music',
    measurement: 'Patterning with soft music',
    prompt: `Soft synth is playing. What is ${multiplier} × ${multiplicand}?`,
    expected: product.toString(),
    evaluate: (input) => Number(input) === product,
    media: '<p>Stay rhythmic with the melody.</p>',
    answerType: 'number',
    noiseProfile: 'soft',
    audioCue: 'soft-music',
    readAloud: false,
    slime: false,
  };
}

function buildReadAloudQuestion() {
  const base = pick(readAloudPool);
  return {
    id: 'read-aloud',
    measurement: 'Auditory processing',
    prompt: base.prompt,
    expected: base.answer,
    evaluate: (input) => normalizeAnswer(input) === base.answer,
    media: '<p>This question is read aloud.</p>',
    answerType: 'text',
    noiseProfile: 'narration',
    audioCue: null,
    readAloud: true,
    slime: false,
  };
}

function buildSlimeQuestion() {
  const minuend = randomInt(50, 90);
  const subtrahend = randomInt(10, 40);
  const difference = minuend - subtrahend;
  return {
    id: 'slime-video',
    measurement: 'Distraction control',
    prompt: `Ignore the slime video and solve ${minuend} − ${subtrahend}.`,
    expected: difference.toString(),
    evaluate: (input) => Number(input) === difference,
    media: '',
    answerType: 'number',
    noiseProfile: 'visual-distraction',
    audioCue: null,
    readAloud: false,
    slime: true,
  };
}

function buildSpeedCheckQuestion() {
  const seqStart = randomInt(2, 6);
  const sequence = [seqStart, seqStart + 2, seqStart + 4];
  const prompt = `The sequence is ${sequence.join(', ')}. What comes next?`;
  const expected = (seqStart + 6).toString();
  return {
    id: 'pattern-speed',
    measurement: 'Sequence speed check',
    prompt,
    expected,
    evaluate: (input) => Number(input) === seqStart + 6,
    media: '',
    answerType: 'number',
    noiseProfile: 'none',
    audioCue: null,
    readAloud: false,
    slime: false,
  };
}

const questionFactories = [
  buildVisualQuestion,
  buildNonVisualQuestion,
  buildWhiteNoiseQuestion,
  buildSilentQuestion,
  buildSoftMusicQuestion,
  buildReadAloudQuestion,
  buildSlimeQuestion,
  buildSpeedCheckQuestion,
];

function generateQuestions() {
  return shuffle(questionFactories.map((factory) => factory()));
}

function renderQuestion(index) {
  const question = questions[index];
  if (!question) return;

  inlineFeedback.textContent = '';
  answerInput.value = '';
  answerInput.type = question.answerType === 'number' ? 'number' : 'text';
  questionMediaEl.innerHTML = question.media || '';
  questionTextEl.textContent = question.prompt;
  measurementLabelEl.textContent = question.measurement;

  const noiseLabelMap = {
    white: 'Rain ambience playing',
    soft: 'Soft music playing',
    silent: 'Silence',
    narration: 'Narrated prompt',
    'visual-distraction': 'Slime video distraction',
    none: 'Neutral background',
  };

  noiseLabelEl.textContent = noiseLabelMap[question.noiseProfile] || '';
  questionCountEl.textContent = `Question ${index + 1} / ${questions.length}`;

  if (question.slime) {
    slimeWrapper.classList.remove('hidden');
    prepareSlimeVideo();
  } else {
    slimeVideo.pause();
    slimeVideo.currentTime = 0;
    slimeWrapper.classList.add('hidden');
    if (slimeCanvas) slimeCanvas.classList.add('sr-only');
  }

  if (question.readAloud) {
    speakPrompt(question.prompt);
  } else if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  if (question.audioCue === 'white-noise') {
    playAudioBed('whiteNoise');
  } else if (question.audioCue === 'soft-music') {
    playAudioBed('softMusic');
  } else {
    stopBackgroundAudio();
  }

  questionStartTime = performance.now();
  answerInput.focus();
}

function recordResponse(question, userInput, correctness, duration) {
  responses.push({
    ...question,
    userAnswer: userInput,
    correct: correctness,
    duration,
    order: currentIndex + 1,
  });
}

function formatSeconds(value) {
  return `${(value / 1000).toFixed(1)}s`;
}

function buildInsights() {
  const totalQuestions = responses.length;
  const correctResponses = responses.filter((r) => r.correct);
  const accuracy = totalQuestions ? Math.round((correctResponses.length / totalQuestions) * 100) : 0;
  const avgResponse = responses.reduce((sum, r) => sum + r.duration, 0) / (totalQuestions || 1);
  const fastest = correctResponses.sort((a, b) => a.duration - b.duration)[0];

  accuracyStat.textContent = `${accuracy}%`;
  speedStat.textContent = formatSeconds(avgResponse || 0);
  fastestStat.textContent = fastest ? `${fastest.measurement} · ${formatSeconds(fastest.duration)}` : '—';

  const visual = responses.find((r) => r.id === 'visual');
  const nonVisual = responses.find((r) => r.id === 'verbal');
  const whiteNoise = responses.find((r) => r.noiseProfile === 'white');
  const silent = responses.find((r) => r.noiseProfile === 'silent');
  const soft = responses.find((r) => r.noiseProfile === 'soft');
  const slime = responses.find((r) => r.slime);

  const insights = [];
  const styleTags = [];
  const describe = (entry) =>
    entry ? `${entry.correct ? 'correct' : 'incorrect'} · ${formatSeconds(entry.duration)}` : 'no data';
  const quickThreshold = Math.max(2500, Math.min(avgResponse || 0, 9000));
  const isQuickAndAccurate = (entry) => entry && entry.correct && entry.duration <= quickThreshold;
  const addInsight = (title, detail) =>
    insights.push(`<p><strong>${title}</strong><br />${detail}</p>`);

  if (whiteNoise && isQuickAndAccurate(whiteNoise)) {
    addInsight('Distracted learner · white noise', `${whiteNoise.measurement}: ${describe(whiteNoise)}`);
    styleTags.push('white-noise focus');
  }

  if (soft && isQuickAndAccurate(soft)) {
    addInsight('Distracted learner · music', `${soft.measurement}: ${describe(soft)}`);
    styleTags.push('music focus');
  }

  if (silent && isQuickAndAccurate(silent)) {
    addInsight('Silent learner', `${silent.measurement}: ${describe(silent)}`);
    styleTags.push('silent focus');
  }

  if (visual && nonVisual) {
    const visualScore = (visual.correct ? 1 : 0) * 100 - visual.duration;
    const nonVisualScore = (nonVisual.correct ? 1 : 0) * 100 - nonVisual.duration;
    const leaningVisual = visualScore > nonVisualScore;
    if (leaningVisual) {
      addInsight(
        'Visual learner',
        `Visual: ${describe(visual)} | Non-visual: ${describe(nonVisual)}`
      );
      styleTags.push('visual learner');
    } else {
      addInsight(
        'Reader',
        `Non-visual: ${describe(nonVisual)} | Visual: ${describe(visual)}`
      );
      styleTags.push('reader');
    }
  }

  if (slime) {
    addInsight(
      slime.correct ? 'Distraction control' : 'Distraction risk',
      `${slime.measurement}: ${describe(slime)}`
    );
  }

  if (fastest) {
    addInsight('Fastest response', `${fastest.measurement}: ${describe(fastest)}`);
  }

  if (!insights.length) {
    insights.push('<p>Complete the test to unlock insights.</p>');
  }

  const learningStyle =
    styleTags.length > 0 ? styleTags.join(' + ') : 'no dominant learning style detected';
  insights.push(
    `<p class="learning-style-callout"><strong>Your learning style</strong><br /><span class="learning-style-value">${learningStyle}</span><br />Accuracy ${accuracy}%, avg time ${formatSeconds(
      avgResponse || 0
    )}.</p>`
  );

  insightPanel.innerHTML = insights.join('');

}

function handleSubmit(event) {
  event.preventDefault();
  const question = questions[currentIndex];
  if (!question) return;

  const userInput = answerInput.value.trim();
  if (!userInput) {
    inlineFeedback.textContent = 'Please enter an answer.';
    return;
  }

  const duration = performance.now() - questionStartTime;
  const isCorrect = question.evaluate(userInput);
  recordResponse(question, userInput, isCorrect, duration);

  inlineFeedback.textContent = isCorrect ? 'On point!' : `Expected: ${question.expected}`;

  currentIndex += 1;

  if (currentIndex >= questions.length) {
    stopBackgroundAudio();
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    questionCard.classList.add('hidden');
    resultsCard.classList.remove('hidden');
    buildInsights();
    if (catalogBtn) {
      catalogBtn.classList.remove('hidden');
    }
    if (catalogRedirectTimer) {
      clearTimeout(catalogRedirectTimer);
    }
    if (catalogUrl) {
      catalogRedirectTimer = setTimeout(() => {
        window.location.href = catalogUrl;
      }, 5000);
    }
    return;
  }

  renderQuestion(currentIndex);
}

function startTest() {
  if (catalogRedirectTimer) {
    clearTimeout(catalogRedirectTimer);
    catalogRedirectTimer = null;
  }
  prepareSlimeVideo();
  responses = [];
  currentIndex = 0;
  questions = generateQuestions();

  introCard.classList.add('hidden');
  resultsCard.classList.add('hidden');
  questionCard.classList.remove('hidden');
  if (catalogBtn) {
    catalogBtn.classList.add('hidden');
  }

  renderQuestion(currentIndex);
}

function restartTest() {
  if (catalogRedirectTimer) {
    clearTimeout(catalogRedirectTimer);
    catalogRedirectTimer = null;
  }
  introCard.classList.remove('hidden');
  questionCard.classList.add('hidden');
  resultsCard.classList.add('hidden');
  if (catalogBtn) {
    catalogBtn.classList.add('hidden');
  }
  stopBackgroundAudio();
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}

answerForm.addEventListener('submit', handleSubmit);
startBtn.addEventListener('click', startTest);
restartBtn.addEventListener('click', restartTest);
if (catalogBtn) {
  catalogBtn.addEventListener('click', () => {
    if (catalogRedirectTimer) {
      clearTimeout(catalogRedirectTimer);
      catalogRedirectTimer = null;
    }
    window.location.href = catalogUrl;
  });
}
