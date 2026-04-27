const MEME_LEVELS = [
  { name: "Капучино-балерино", nameEn: "Cappuccino Ballerino", emoji: "☕", color: "#6ad1ff", income: 1 },
  { name: "Шмело-мускуляро", nameEn: "Bumblebee Muscularo", emoji: "🐝", color: "#8be26c", income: 3 },
  { name: "Еното-батоно", nameEn: "Raccoono Loafero", emoji: "🦝", color: "#f4d35e", income: 8 },
  { name: "Грибо-космико", nameEn: "Mushroomo Cosmico", emoji: "🍄", color: "#b07cff", income: 20 },
  { name: "Пандо-диджеро", nameEn: "Pando Deejayero", emoji: "🐼", color: "#ff6b6b", income: 50 },
  { name: "Утко-самурайо", nameEn: "Ducko Samurairo", emoji: "🦆", color: "#ffa94d", income: 120 },
  { name: "Арбузо-карусеро", nameEn: "Watermelono Carouselro", emoji: "🍉", color: "#63e6be", income: 300 },
  { name: "Жабо-рэперо", nameEn: "Froggo Rappero", emoji: "🐸", color: "#f06595", income: 700 },
  { name: "Тигро-йогини", nameEn: "Tigro Yogini", emoji: "🐯", color: "#74c0fc", income: 1500 },
  { name: "Авокадо-пирато", nameEn: "Avocado Pirato", emoji: "🥑", color: "#e599f7", income: 3200 },
  { name: "Слоно-балерино", nameEn: "Elephanto Ballerino", emoji: "🐘", color: "#ffd43b", income: 7000 },
  { name: "Кактусо-ковбойро", nameEn: "Cactuso Cowboyro", emoji: "🌵", color: "#ff8787", income: 15000 }
];

const I18N = {
  ru: {
    title: "Брейнрот Мемы: Эволюция",
    likesLabel: "Лайки",
    incomeLabel: "В секунду",
    critLabel: "Супер %",
    noSpace: "Нет места на поле",
    sameLevelOnly: "Слияние только одинаковых уровней",
    noLikes: "Не хватает лайков",
    mergeReward: "Слияние!",
    critTag: "КРИТ!",
    cooldownReset: "Кулдаун сброшен",
    incomeBoost: "Бонус ×2 к лайкам на 30 секунд!",
    adsUnavailable: "Реклама недоступна",
    soundOn: "вкл 🔊",
    soundOff: "выкл 🔇",
    topLevel: "Топ мем",
    guideTitle: "Как играть",
    guideP1: "Поле 4×4. Соедини два одинаковых мема — получится мем на уровень выше и лайки.",
    guideP2: "Перетащи одного на другого или нажми сначала на одного, потом на такого же.",
    guideP3: "Лайки капают сами с мемов на поле. Покупай улучшения справа и платный мем, если нужно.",
    guideP4: "«Супер слияние» иногда поднимает мем сразу на два уровня!",
    resetProgress: "Сбросить всё",
    resetConfirm: "Удалить весь прогресс на этом устройстве? Это нельзя отменить.",
    resetDone: "Прогресс сброшен",
    offlineTitle: "Ты отсутствовал!",
    offlineText: "Пока тебя не было, набежали лайки:",
    claim: "Забрать",
    claimX2: "В два раза больше (видео)",
    spawnFree: "Новый мем",
    spawnFreeSub: "подождать",
    spawnPaid: "Купить мем",
    spawnPaidSub: "лайки",
    adBoostShort: "Реклама: ×2 лайков 30 сек",
    adSpawnShort: "Реклама: +5 мемов",
    adInstant: "Реклама: Турбо 5 сек (кулдаун 0,3с)",
    adMicroCdToast: "Турбо-режим! Кулдаун мемов 0,3 сек в течение 5 секунд!",
    adBoostCountdown: "×2 ещё {t} сек",
    shopTitle: "Суперсилы",
    upgradeIncome: "Больше лайков",
    upgradeCooldown: "Быстрее кнопка",
    upgradeCrit: "Супер слияние",
    buy: "Улучшить",
    level: "Уровень",
    incomeNow: "Сейчас доход ×",
    cooldownNow: "Ждать сек",
    critNow: "Шанс супера",
    maxShort: "макс",
    offlineClaimed: "+ оффлайн лайки",
    offlineClaimedX2: "x2 оффлайн доход получен",
    memesAdded: "мемов добавлено"
  },
  en: {
    title: "Brainrot Memes: Evolution",
    likesLabel: "Likes",
    incomeLabel: "Per sec",
    critLabel: "Super %",
    noSpace: "No space on board",
    sameLevelOnly: "Merge works for same level only",
    noLikes: "Not enough likes",
    mergeReward: "Merge!",
    critTag: "CRIT!",
    cooldownReset: "Cooldown reset",
    incomeBoost: "×2 likes bonus for 30 seconds!",
    adsUnavailable: "Ads unavailable",
    soundOn: "on 🔊",
    soundOff: "off 🔇",
    topLevel: "Top meme",
    guideTitle: "How to play",
    guideP1: "4×4 board. Merge two same memes to get a higher level and likes.",
    guideP2: "Drag one onto the other, or tap one meme, then tap its twin.",
    guideP3: "Likes drip from memes on the board. Buy upgrades on the right or a paid meme if you need more.",
    guideP4: "“Super merge” can sometimes jump two levels at once!",
    resetProgress: "Reset everything",
    resetConfirm: "Delete all progress on this device? This cannot be undone.",
    resetDone: "Progress reset",
    offlineTitle: "You were away!",
    offlineText: "While you were away, you earned:",
    claim: "Claim",
    claimX2: "x2 via ad",
    spawnFree: "New meme",
    spawnFreeSub: "wait",
    spawnPaid: "Buy meme",
    spawnPaidSub: "likes",
    adBoostShort: "Ad: ×2 likes, 30 sec",
    adSpawnShort: "Ad: +5 memes",
    adInstant: "Ad: Turbo 5s (0.3s cooldown)",
    adMicroCdToast: "Turbo mode! 0.3s meme cooldown for 5 seconds!",
    adBoostCountdown: "×2: {t}s left",
    shopTitle: "Power-ups",
    upgradeIncome: "More likes",
    upgradeCooldown: "Faster button",
    upgradeCrit: "Super merge",
    buy: "Level up",
    level: "Level",
    incomeNow: "Income ×",
    cooldownNow: "Wait sec",
    critNow: "Super chance",
    maxShort: "max",
    offlineClaimed: "+ offline likes",
    offlineClaimedX2: "x2 offline income claimed",
    memesAdded: "memes added"
  }
};

const INITIAL_SPAWN_PRICES = [10, 25, 60, 130, 220, 370, 450, 580, 650, 750];

/** 10 покупок: уровень таланта 0…10. Цены с большим шагом; сила задаётся формулами, не компаундом. */
const MAX_TALENT_LEVEL = 10;
const INCOME_UPGRADE_PRICES = [280, 2200, 12000, 68000, 360000, 1_900_000, 9_500_000, 42_000_000, 175_000_000, 680_000_000];
const COOLDOWN_UPGRADE_PRICES = [260, 2100, 11500, 65000, 340000, 1_800_000, 9_000_000, 40_000_000, 165_000_000, 640_000_000];
const CRIT_UPGRADE_PRICES = [320, 2600, 14000, 78000, 410000, 2_100_000, 10_500_000, 46_000_000, 190_000_000, 720_000_000];

function buildLinearCooldownSteps() {
  const out = [];
  for (let i = 0; i <= MAX_TALENT_LEVEL; i += 1) {
    out.push(5 - (4 * i) / MAX_TALENT_LEVEL);
  }
  return out;
}
const COOLDOWN_VALUES = buildLinearCooldownSteps();

const BOARD_SIZE = 16;
/** Пассивные лайки с мемов на поле (−10% к базе уровня). Награды за слияние не затрагиваются. */
const PASSIVE_MEME_INCOME_FACTOR = 0.9;
const AD_INCOME_BOOST_MS = 30000;
/** После рекламы «быстрая кнопка»: столько мс кнопка «Новый мем» ждёт всего 0.3 с между нажатиями. */
const AD_FAST_SPAWN_MS = 5000;
const AD_FAST_SPAWN_COOLDOWN_SEC = 0.3;
/** Минимум между полноэкранной рекламой (мс). Показ только после действия игрока (слияние). */
const INTERSTITIAL_COOLDOWN_MS = 180 * 1000;
const SAVE_KEY = "brainrot_merge_save_v3";
const SAVE_KEY_LEGACY = "brainrot_merge_save_v2";
const ASSETS = {
  memeIcons: Array.from({ length: 12 }, (_, i) => `assets/sprites/meme_lv${i + 1}.png`),
  sounds: {
    spawn: "assets/sfx/spawn.mp3",
    merge: "assets/sfx/merge.mp3",
    crit: "assets/sfx/crit.mp3",
    upgrade: "assets/sfx/upgrade.mp3",
    click: "assets/sfx/ui_click.mp3",
    background: "assets/sfx/backloop.mp3"
  }
};
const MASTER_VOLUME = 0.22;
const BGM_VOLUME = 0.12;

function clampVolume(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

const state = {
  likes: 0,
  board: Array(BOARD_SIZE).fill(null),
  spawnCooldown: 0,
  paidSpawnCount: 0,
  paidSpawnPrice: INITIAL_SPAWN_PRICES[0],
  lastPaidSpawnTs: Date.now(),
  incomeUpgradeLevel: 0,
  cooldownUpgradeLevel: 0,
  critUpgradeLevel: 0,
  sessionStartTs: Date.now(),
  adIncomeBoostUntil: 0,
  adFastSpawnUntil: 0,
  stickyBonusUntil: 0,
  lastProgressTs: Date.now(),
  locale: "ru",
  playerName: "Игрок",
  lastVisitTs: Date.now(),
  yandexReady: false,
  selectedIndex: -1,
  topLevelReached: 1,
  soundEnabled: true,
  pendingOfflineGain: 0,
  /** Время закрытия прошлой interstitial (или старт сессии) — не чаще чем раз в INTERSTITIAL_COOLDOWN_MS. */
  lastInterstitialTs: Date.now()
};

const el = {};
const loadedMemeIcons = new Map();
const loadedSounds = new Map();
let bgmAudio = null;
let bgmStarted = false;
let bgmSuspendedForAd = false;
let bgmFadeTimer = null;
let gamePausedForAd = false;

function $(id) { return document.getElementById(id); }
function text(key) { return (I18N[state.locale] || I18N.ru)[key] || key; }
function getMemeName(levelData) { return state.locale === "en" ? (levelData.nameEn || levelData.name) : levelData.name; }

/** Язык из панели отладки / окружения SDK (обновляется без перезагрузки). */
function getSdkUiLang() {
  const sdk = typeof ysdk !== "undefined" ? ysdk.sdk : null;
  const raw = sdk?.environment?.i18n?.lang;
  if (raw == null || raw === "") return null;
  const lang = String(raw).slice(0, 2).toLowerCase();
  return I18N[lang] ? lang : "ru";
}

function syncLocaleFromSdk() {
  const next = getSdkUiLang();
  if (next == null) return;
  if (next === state.locale) return;
  state.locale = next;
  applyLocaleTexts();
  renderBoard();
}

function toast(message) {
  el.toast.textContent = message;
  el.toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => el.toast.classList.remove("show"), 1700);
}

function playBeep(freq, duration = 0.08, type = "square", gain = 0.04) {
  if (!state.soundEnabled) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    if (!playBeep.ctx) playBeep.ctx = new Ctx();
    const ctx = playBeep.ctx;
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    amp.gain.value = Math.max(0, Math.min(1, gain * clampVolume(MASTER_VOLUME)));
    osc.connect(amp);
    amp.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Silent fallback for browsers with strict autoplay/sound restrictions.
  }
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function preloadAudio(src) {
  return new Promise((resolve) => {
    const a = new Audio();
    a.preload = "auto";
    a.addEventListener("canplaythrough", () => resolve(a), { once: true });
    a.addEventListener("error", () => resolve(null), { once: true });
    a.src = src;
    try { a.load(); } catch (_) { resolve(null); }
  });
}

async function loadAssets() {
  const iconLoads = ASSETS.memeIcons.map((src) => preloadImage(src));
  const iconResults = await Promise.all(iconLoads);
  iconResults.forEach((img, i) => {
    if (img) loadedMemeIcons.set(i + 1, ASSETS.memeIcons[i]);
  });

  const soundEntries = Object.entries(ASSETS.sounds);
  const soundLoads = soundEntries.map(([, src]) => preloadAudio(src));
  const soundResults = await Promise.all(soundLoads);
  soundResults.forEach((audio, i) => {
    if (audio) loadedSounds.set(soundEntries[i][0], audio);
  });
}

function playSoundEffect(key, fallbackArgs) {
  if (!state.soundEnabled) return;
  const template = loadedSounds.get(key);
  if (template && key !== "background") {
    try {
      const src = template.currentSrc || template.src;
      if (!src) throw new Error("no src");
      const a = new Audio(src);
      a.volume = clampVolume(MASTER_VOLUME);
      const p = a.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
      return;
    } catch (_) {
      // Fall through to beep fallback.
    }
  }
  playBeep(...fallbackArgs);
}

function ensureBackgroundMusic() {
  if (!state.soundEnabled || bgmStarted) return;
  const template = loadedSounds.get("background");
  if (!template) return;
  try {
    const src = template.currentSrc || template.src;
    if (!src) return;
    if (!ensureBackgroundMusic._ctx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) ensureBackgroundMusic._ctx = new Ctx();
    }
    const ctx = ensureBackgroundMusic._ctx;
    if (ctx) {
      bgmAudio = new Audio(src);
      bgmAudio.loop = true;
      bgmAudio.crossOrigin = "anonymous";
      const source = ctx.createMediaElementSource(bgmAudio);
      const gain = ctx.createGain();
      gain.gain.value = clampVolume(BGM_VOLUME);
      source.connect(gain);
      gain.connect(ctx.destination);
      bgmAudio.volume = 1;
      bgmAudio._gainNode = gain;
      bgmAudio._bgmVolume = clampVolume(BGM_VOLUME);
      const promise = bgmAudio.play();
      if (promise && promise.then) {
        promise.then(() => { bgmStarted = true; }).catch(() => {});
      } else {
        bgmStarted = true;
      }
    } else {
      bgmAudio = new Audio(src);
      bgmAudio.loop = true;
      bgmAudio.volume = clampVolume(BGM_VOLUME);
      const promise = bgmAudio.play();
      if (promise && promise.then) {
        promise.then(() => { bgmStarted = true; }).catch(() => {});
      } else {
        bgmStarted = true;
      }
    }
  } catch (_) {
    // Fallback: try direct Audio if WebAudio fails
    try {
      bgmAudio = new Audio(template.currentSrc || template.src);
      bgmAudio.loop = true;
      bgmAudio.volume = clampVolume(BGM_VOLUME);
      const p = bgmAudio.play();
      if (p && p.then) p.then(() => { bgmStarted = true; }).catch(() => {});
      else bgmStarted = true;
    } catch (_2) {}
  }
}

function getBgmVolume() {
  if (bgmAudio && bgmAudio._gainNode) return bgmAudio._gainNode.gain.value;
  return bgmAudio ? bgmAudio.volume : 0;
}
function setBgmVolume(v) {
  if (!bgmAudio) return;
  try {
    if (bgmAudio._gainNode) bgmAudio._gainNode.gain.value = Math.max(0, Math.min(1, v));
    else bgmAudio.volume = Math.max(0, Math.min(1, v));
  } catch (_) {}
}

function stopBackgroundMusic() {
  clearBgmFadeTimer();
  bgmSuspendedForAd = false;
  if (!bgmAudio) return;
  try {
    bgmAudio.pause();
    bgmAudio.currentTime = 0;
    setBgmVolume(clampVolume(BGM_VOLUME));
  } catch (_) {}
  bgmStarted = false;
}

function clearBgmFadeTimer() {
  if (bgmFadeTimer) {
    clearInterval(bgmFadeTimer);
    bgmFadeTimer = null;
  }
}

function suspendBgmForAd() {
  clearBgmFadeTimer();
  bgmSuspendedForAd = false;
  if (!state.soundEnabled || !bgmAudio || bgmAudio.paused) return;
  bgmSuspendedForAd = true;
  try {
    const startVol = getBgmVolume();
    const fadeMs = 200;
    const step = 40;
    let elapsed = 0;
    bgmFadeTimer = setInterval(() => {
      elapsed += step;
      const k = Math.min(1, elapsed / fadeMs);
      setBgmVolume(Math.max(0, startVol * (1 - k)));
      if (k >= 1) {
        clearBgmFadeTimer();
        try { bgmAudio.pause(); } catch (_) {}
      }
    }, step);
  } catch (_) {
    bgmSuspendedForAd = false;
  }
}

function resumeBgmAfterAd() {
  clearBgmFadeTimer();
  if (!bgmSuspendedForAd || !state.soundEnabled) {
    bgmSuspendedForAd = false;
    return;
  }
  bgmSuspendedForAd = false;
  if (!bgmAudio) return;
  try {
    const endVol = bgmAudio._bgmVolume || clampVolume(BGM_VOLUME);
    setBgmVolume(0);
    const p = bgmAudio.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
    const fadeMs = 220;
    const step = 45;
    let elapsed = 0;
    bgmFadeTimer = setInterval(() => {
      elapsed += step;
      const k = Math.min(1, elapsed / fadeMs);
      setBgmVolume(endVol * k);
      if (k >= 1) {
        clearBgmFadeTimer();
        setBgmVolume(endVol);
      }
    }, step);
  } catch (_) {
    setBgmVolume(bgmAudio._bgmVolume || clampVolume(BGM_VOLUME));
  }
}

function formatInt(v) {
  const loc = state.locale === "en" ? "en-US" : "ru-RU";
  return Math.floor(v).toLocaleString(loc);
}
function formatMult(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return "1";
  return n.toFixed(n >= 10 ? 1 : 2);
}
function clampInt(v, min, max, fallback = min) {
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(min, Math.min(max, Math.floor(n)));
}

function getIncomeUpgradePrice(level) {
  const lv = clampInt(level, 0, INCOME_UPGRADE_PRICES.length - 1, 0);
  return INCOME_UPGRADE_PRICES[lv];
}

function getCooldownUpgradePrice(level) {
  const lv = clampInt(level, 0, COOLDOWN_UPGRADE_PRICES.length - 1, 0);
  return COOLDOWN_UPGRADE_PRICES[lv];
}

function getCritUpgradePrice(level) {
  const lv = clampInt(level, 0, CRIT_UPGRADE_PRICES.length - 1, 0);
  return CRIT_UPGRADE_PRICES[lv];
}

/** Множитель лайков только от прокачки: 1 … 2.5 (линейно по уровню 0…10). */
function getTalentIncomeMult() {
  const lv = clampInt(state.incomeUpgradeLevel, 0, MAX_TALENT_LEVEL, 0);
  return 1 + (lv / MAX_TALENT_LEVEL) * 1.5;
}

function getIncomeBoostMult() {
  let mult = getTalentIncomeMult();
  if (Date.now() - state.sessionStartTs < 3 * 60 * 1000) mult *= 1.06;
  if (Date.now() < state.adIncomeBoostUntil) mult *= 2;
  if (Date.now() < state.stickyBonusUntil) mult *= 3;
  if (Date.now() - state.lastProgressTs > 90 * 1000) mult *= 1.05;
  return mult;
}

/** Шанс «супер слияния» только от прокачки: 0% … 20%. */
function getCurrentCritChance() {
  const lv = clampInt(state.critUpgradeLevel, 0, MAX_TALENT_LEVEL, 0);
  const chance = (lv / MAX_TALENT_LEVEL) * 0.2;
  return Math.max(0, Math.min(1, Number.isFinite(chance) ? chance : 0));
}

function getCurrentCooldown() {
  const idx = clampInt(state.cooldownUpgradeLevel, 0, MAX_TALENT_LEVEL, 0);
  if (idx < COOLDOWN_VALUES.length) return COOLDOWN_VALUES[idx];
  return COOLDOWN_VALUES[COOLDOWN_VALUES.length - 1] ?? 1;
}

/** Сколько секунд ждать после бесплатного спавна (рекламный бафф даёт 0.3 с). */
function getFreeSpawnCooldownAfterPress() {
  if (Date.now() < state.adFastSpawnUntil) return AD_FAST_SPAWN_COOLDOWN_SEC;
  return getCurrentCooldown();
}

function recomputeIncomePerSec() {
  const mult = getIncomeBoostMult();
  return state.board.reduce(
    (sum, meme) => sum + (meme
      ? MEME_LEVELS[meme.level - 1].income * mult * PASSIVE_MEME_INCOME_FACTOR
      : 0),
    0
  );
}

function getSpawnPriceGrowth() {
  const sessionSec = (Date.now() - state.sessionStartTs) / 1000;
  if (sessionSec < 180) return 1.45;
  if (sessionSec < 600) return 1.55;
  return 1.65;
}

function getNextSpawnPrice() {
  if (state.paidSpawnCount < INITIAL_SPAWN_PRICES.length) return INITIAL_SPAWN_PRICES[state.paidSpawnCount];
  return Math.round(state.paidSpawnPrice * getSpawnPriceGrowth());
}

function findEmptyCell() {
  const empty = state.board.map((_, i) => i).filter((i) => !state.board[i]);
  return empty.length ? empty[Math.floor(Math.random() * empty.length)] : -1;
}

function spawnMeme(level = 1) {
  const idx = findEmptyCell();
  if (idx < 0) { toast(text("noSpace")); return false; }
  const clamped = Math.max(1, Math.min(12, level));
  state.board[idx] = { id: `${Date.now()}_${Math.random().toString(16).slice(2)}`, level: clamped };
  state.topLevelReached = Math.max(state.topLevelReached, clamped);
  state.lastProgressTs = Date.now();
  playSoundEffect("spawn", [420, 0.08, "square", 0.04]);
  emitParticlesAtCell(idx, { level: clamped, event: "spawn", crit: false });
  renderBoard();
  return true;
}

function highlightDrop(indexFrom, indexTo) {
  const boardCells = el.board.querySelectorAll(".cell");
  const source = state.board[indexFrom];
  const target = state.board[indexTo];
  boardCells.forEach((c) => c.classList.remove("drop-ok", "drop-bad"));
  if (!source || !target || indexFrom === indexTo) return;
  boardCells[indexTo].classList.add(source.level === target.level ? "drop-ok" : "drop-bad");
}

function mergeMemes(from, to) {
  const a = state.board[from];
  const b = state.board[to];
  if (!a || !b || from === to) return false;
  if (a.level !== b.level) {
    toast(text("sameLevelOnly"));
    return false;
  }
  const crit = Math.random() < getCurrentCritChance();
  const levelDelta = crit ? 2 : 1;
  const newLevel = Math.min(12, a.level + levelDelta);
  state.board[to] = { id: `${Date.now()}_m`, level: newLevel };
  state.board[from] = null;
  state.topLevelReached = Math.max(state.topLevelReached, newLevel);
  state.lastProgressTs = Date.now();
  state.selectedIndex = -1;

  const reward = MEME_LEVELS[newLevel - 1].income * 2 * getIncomeBoostMult();
  state.likes += reward;
  emitParticlesAtCell(to, { level: newLevel, event: "merge", crit });
  if (crit) {
    emitBoardConfetti(newLevel);
    setTimeout(() => emitParticlesAtCell(to, { level: newLevel, event: "burst", crit: true }), 60);
  } else if (newLevel >= 5) {
    setTimeout(() => emitParticlesAtCell(to, { level: newLevel, event: "burst", crit: false }), 40);
  }
  if (crit) flashBoard();

  playSoundEffect(crit ? "crit" : "merge", [crit ? 920 : 700, crit ? 0.14 : 0.08, "triangle", crit ? 0.07 : 0.05]);
  toast(`${text("mergeReward")} +${formatInt(reward)} ${crit ? `(${text("critTag")})` : ""}`);
  renderBoard(to, crit);
  tryShowInterstitialAfterUserAction();
  return true;
}

function tick(deltaSec) {
  if (gamePausedForAd) return;
  if (state.spawnCooldown > 0) state.spawnCooldown = Math.max(0, state.spawnCooldown - deltaSec);
  if (Date.now() - state.lastPaidSpawnTs > 30000) {
    state.paidSpawnPrice = Math.max(10, Math.round(state.paidSpawnPrice * 0.8));
    state.lastPaidSpawnTs = Date.now();
  }
  state.likes += recomputeIncomePerSec() * deltaSec;
}

function pauseGameForAd() {
  gamePausedForAd = true;
  if (state.adIncomeBoostUntil > Date.now()) state._adBoostPausedAt = Date.now();
  if (state.adFastSpawnUntil > Date.now()) state._adFastPausedAt = Date.now();
}

function resumeGameAfterAd() {
  if (!gamePausedForAd) return;
  const pauseDuration = Date.now() - (state._adBoostPausedAt || Date.now());
  if (state._adBoostPausedAt && state.adIncomeBoostUntil > 0) {
    state.adIncomeBoostUntil += pauseDuration;
  }
  if (state._adFastPausedAt && state.adFastSpawnUntil > 0) {
    const fastPause = Date.now() - state._adFastPausedAt;
    state.adFastSpawnUntil += fastPause;
  }
  delete state._adBoostPausedAt;
  delete state._adFastPausedAt;
  gamePausedForAd = false;
}

function safeSaveData() {
  return {
    likes: state.likes,
    board: state.board,
    spawnCooldown: state.spawnCooldown,
    paidSpawnCount: state.paidSpawnCount,
    paidSpawnPrice: state.paidSpawnPrice,
    lastPaidSpawnTs: state.lastPaidSpawnTs,
    incomeUpgradeLevel: state.incomeUpgradeLevel,
    cooldownUpgradeLevel: state.cooldownUpgradeLevel,
    critUpgradeLevel: state.critUpgradeLevel,
    sessionStartTs: state.sessionStartTs,
    adIncomeBoostUntil: state.adIncomeBoostUntil,
    adFastSpawnUntil: state.adFastSpawnUntil,
    stickyBonusUntil: state.stickyBonusUntil,
    lastProgressTs: state.lastProgressTs,
    locale: state.locale,
    playerName: state.playerName,
    lastVisitTs: state.lastVisitTs,
    yandexReady: state.yandexReady,
    topLevelReached: state.topLevelReached,
    soundEnabled: state.soundEnabled,
    lastInterstitialTs: state.lastInterstitialTs
  };
}

function saveGame() {
  state.lastVisitTs = Date.now();
  localStorage.setItem(SAVE_KEY, JSON.stringify(safeSaveData()));
}

function hydrateFromData(data) {
  if (!data || typeof data !== "object") return;
  Object.assign(state, data);
  delete state.mergesToday;
  delete state.reachedLevel6Today;
  delete state.dailyClaimedFor;
  delete state.interstitialShown;
  if (!Array.isArray(state.board) || state.board.length !== BOARD_SIZE) {
    state.board = Array(BOARD_SIZE).fill(null);
  }
  state.selectedIndex = -1;
  state.incomeUpgradeLevel = clampInt(state.incomeUpgradeLevel, 0, MAX_TALENT_LEVEL, 0);
  state.cooldownUpgradeLevel = clampInt(state.cooldownUpgradeLevel, 0, MAX_TALENT_LEVEL, 0);
  state.critUpgradeLevel = clampInt(state.critUpgradeLevel, 0, MAX_TALENT_LEVEL, 0);
  state.paidSpawnCount = clampInt(state.paidSpawnCount, 0, 999999, 0);
  state.paidSpawnPrice = Number.isFinite(Number(state.paidSpawnPrice)) ? Math.max(10, Number(state.paidSpawnPrice)) : INITIAL_SPAWN_PRICES[0];
  state.topLevelReached = clampInt(state.topLevelReached, 1, 12, 1);
  state.lastProgressTs = Number.isFinite(Number(state.lastProgressTs)) ? Number(state.lastProgressTs) : Date.now();
  state.sessionStartTs = Number.isFinite(Number(state.sessionStartTs)) ? Number(state.sessionStartTs) : Date.now();
  state.adIncomeBoostUntil = Number.isFinite(Number(state.adIncomeBoostUntil)) ? Number(state.adIncomeBoostUntil) : 0;
  state.adFastSpawnUntil = Number.isFinite(Number(state.adFastSpawnUntil)) ? Number(state.adFastSpawnUntil) : 0;
  state.stickyBonusUntil = Number.isFinite(Number(state.stickyBonusUntil)) ? Number(state.stickyBonusUntil) : 0;
  state.lastInterstitialTs = Number.isFinite(Number(state.lastInterstitialTs))
    ? Number(state.lastInterstitialTs)
    : Date.now();
}

function loadGame() {
  let raw = localStorage.getItem(SAVE_KEY);
  if (!raw) raw = localStorage.getItem(SAVE_KEY_LEGACY);
  if (!raw) return;
  try {
    hydrateFromData(JSON.parse(raw));
    const now = Date.now();
    const offlineSec = Math.max(0, Math.min(2 * 60 * 60, (now - (state.lastVisitTs || now)) / 1000));
    if (offlineSec > 1) {
      state.pendingOfflineGain = recomputeIncomePerSec() * offlineSec * 0.5;
      state.stickyBonusUntil = now + 60000;
      if (Math.random() < 0.5) spawnMeme(Math.random() < 0.7 ? 1 : 2);
    }
  } catch (e) {
    console.error(e);
  }
}

function tryTapMerge(index) {
  if (!state.board[index]) return;
  if (state.selectedIndex < 0) {
    state.selectedIndex = index;
    renderBoard();
    return;
  }
  if (state.selectedIndex === index) {
    state.selectedIndex = -1;
    renderBoard();
    return;
  }
  mergeMemes(state.selectedIndex, index);
}

function renderBoard(animTarget = -1, isCrit = false) {
  el.board.innerHTML = "";
  for (let i = 0; i < BOARD_SIZE; i += 1) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    cell.addEventListener("dragover", (e) => e.preventDefault());
    cell.addEventListener("dragenter", () => highlightDrop(Number(el.board.dataset.dragFrom), i));
    cell.addEventListener("dragleave", () => cell.classList.remove("drop-ok", "drop-bad"));
    cell.addEventListener("drop", (e) => {
      e.preventDefault();
      const from = Number(e.dataTransfer.getData("text/plain"));
      cell.classList.remove("drop-ok", "drop-bad");
      mergeMemes(from, i);
    });

    const meme = state.board[i];
    if (meme) {
      const levelData = MEME_LEVELS[meme.level - 1];
      const item = document.createElement("div");
      item.className = "meme";
      item.classList.add(`lvl-${meme.level}`);
      if (state.selectedIndex === i) item.classList.add("selected");
      if (animTarget === i) item.classList.add("merge-pop");
      if (animTarget === i) item.classList.add("merge-evolve");
      if (animTarget === i && isCrit) item.classList.add("crit");
      item.draggable = true;
      item.style.background = `linear-gradient(145deg, ${levelData.color}, #111)`;
      item.style.transform = `rotate(${(Math.random() - 0.5) * meme.level * 0.5}deg)`;
      const iconSrc = loadedMemeIcons.get(meme.level);
      const memeName = getMemeName(levelData);
      item.innerHTML = iconSrc
        ? `<img class="meme-icon" src="${iconSrc}" alt="${memeName}"><div class="meme-meta"><div class="label">${memeName}</div><div class="level">Lv.${meme.level}</div></div>`
        : `<div class="emoji">${levelData.emoji}</div><div class="meme-meta"><div class="label">${memeName}</div><div class="level">Lv.${meme.level}</div></div>`;
      item.addEventListener("click", () => tryTapMerge(i));
      item.addEventListener("dragstart", (e) => {
        el.board.dataset.dragFrom = String(i);
        e.dataTransfer.setData("text/plain", String(i));
      });
      item.addEventListener("dragend", () => {
        delete el.board.dataset.dragFrom;
        el.board.querySelectorAll(".cell").forEach((c) => c.classList.remove("drop-ok", "drop-bad"));
      });
      cell.appendChild(item);
    }
    el.board.appendChild(cell);
  }
  renderUI();
}

function renderUI() {
  const income = recomputeIncomePerSec();
  applyLocaleTexts();
  el.likesValue.textContent = formatInt(state.likes);
  el.incomeValue.textContent = formatInt(income);
  const rawCrit = getCurrentCritChance();
  const critPercent = Number.isFinite(rawCrit) ? Math.round(rawCrit * 100) : 0;
  el.critValue.textContent = `${Number.isFinite(critPercent) ? critPercent : 0}%`;
  el.cooldownValue.textContent = state.spawnCooldown.toFixed(1);
  el.spawnPriceValue.textContent = formatInt(state.paidSpawnPrice);
  el.topLevelValue.textContent = `Lv.${state.topLevelReached}`;
  if (el.soundBtnLabel) el.soundBtnLabel.textContent = state.soundEnabled ? text("soundOn") : text("soundOff");

  if (el.incomeMultHint) el.incomeMultHint.textContent = `${text("incomeNow")}${formatMult(getTalentIncomeMult())}`;

  const incLv = state.incomeUpgradeLevel;
  const nextIncomeMult = incLv >= MAX_TALENT_LEVEL ? null : 1 + ((incLv + 1) / MAX_TALENT_LEVEL) * 1.5;
  if (el.incomeBonusPreview) {
    el.incomeBonusPreview.textContent = nextIncomeMult == null
      ? `${text("incomeNow")}${formatMult(getTalentIncomeMult())} · ${text("maxShort")}`
      : `${text("incomeNow")}${formatMult(getTalentIncomeMult())} → ${formatMult(nextIncomeMult)}`;
  }
  const cdLv = state.cooldownUpgradeLevel;
  const cdNow = getCurrentCooldown();
  const cdNext = cdLv >= MAX_TALENT_LEVEL ? null : COOLDOWN_VALUES[clampInt(cdLv + 1, 0, COOLDOWN_VALUES.length - 1, 0)];
  if (el.cooldownBonusPreview) {
    el.cooldownBonusPreview.textContent = cdNext == null
      ? `${text("cooldownNow")} ${cdNow.toFixed(1)} · ${text("maxShort")}`
      : `${text("cooldownNow")} ${cdNow.toFixed(1)} → ${cdNext.toFixed(1)}`;
  }
  const crLv = state.critUpgradeLevel;
  const crNext = crLv >= MAX_TALENT_LEVEL ? null : ((crLv + 1) / MAX_TALENT_LEVEL) * 0.2;
  if (el.critBonusPreview) {
    el.critBonusPreview.textContent = crNext == null
      ? `${text("critNow")} ${critPercent}% · ${text("maxShort")}`
      : `${text("critNow")} ${critPercent}% → ${Math.round(crNext * 100)}%`;
  }

  el.incomeUpgradePrice.textContent = state.incomeUpgradeLevel >= MAX_TALENT_LEVEL
    ? "—"
    : formatInt(getIncomeUpgradePrice(state.incomeUpgradeLevel));
  el.cooldownUpgradePrice.textContent = state.cooldownUpgradeLevel >= MAX_TALENT_LEVEL
    ? "—"
    : formatInt(getCooldownUpgradePrice(state.cooldownUpgradeLevel));
  el.critUpgradePrice.textContent = state.critUpgradeLevel >= MAX_TALENT_LEVEL
    ? "—"
    : formatInt(getCritUpgradePrice(state.critUpgradeLevel));
  el.incomeUpgradeLevel.textContent = `${text("level")}: ${state.incomeUpgradeLevel}/${MAX_TALENT_LEVEL}`;
  el.cooldownUpgradeLevel.textContent = `${text("level")}: ${state.cooldownUpgradeLevel}/${MAX_TALENT_LEVEL}`;
  el.critUpgradeLevel.textContent = `${text("level")}: ${state.critUpgradeLevel}/${MAX_TALENT_LEVEL}`;
  el.spawnFreeBtn.disabled = state.spawnCooldown > 0;
  el.spawnPaidBtn.disabled = state.likes < state.paidSpawnPrice;

  const adBoostLeftMs = state.adIncomeBoostUntil - Date.now();
  if (el.adBoostBtn && el.adBoostTimer) {
    if (adBoostLeftMs > 0) {
      el.adBoostTimer.hidden = false;
      const sec = Math.max(1, Math.ceil(adBoostLeftMs / 1000));
      el.adBoostTimer.textContent = text("adBoostCountdown").replace("{t}", String(sec));
      el.adBoostBtn.disabled = true;
    } else {
      el.adBoostTimer.hidden = true;
      el.adBoostBtn.disabled = false;
    }
  }
}

function applyLocaleTexts() {
  if (!el.titleText) return;
  try { document.documentElement.lang = state.locale === "en" ? "en" : "ru"; } catch (_) {}
  el.titleText.textContent = text("title");
  try { document.title = text("title"); } catch (_) {}
  el.likesLabel.textContent = text("likesLabel");
  el.incomeLabel.textContent = text("incomeLabel");
  el.critLabel.textContent = text("critLabel");
  el.topLevelLabel.textContent = text("topLevel");
  if (el.guideTitle) el.guideTitle.textContent = text("guideTitle");
  if (el.guideP1) el.guideP1.textContent = text("guideP1");
  if (el.guideP2) el.guideP2.textContent = text("guideP2");
  if (el.guideP3) el.guideP3.textContent = text("guideP3");
  if (el.guideP4) el.guideP4.textContent = text("guideP4");
  if (el.resetProgressBtn) el.resetProgressBtn.textContent = text("resetProgress");
  el.spawnFreeLabel.textContent = text("spawnFree");
  if (el.spawnFreeSub) el.spawnFreeSub.textContent = text("spawnFreeSub");
  el.spawnPaidLabel.textContent = text("spawnPaid");
  if (el.spawnPaidSub) el.spawnPaidSub.textContent = text("spawnPaidSub");
  if (el.adBoostLabel) el.adBoostLabel.textContent = text("adBoostShort");
  if (el.adSpawnLabel) el.adSpawnLabel.textContent = text("adSpawnShort");
  if (el.adInstantLabel) el.adInstantLabel.textContent = text("adInstant");
  el.shopTitle.textContent = text("shopTitle");
  el.incomeUpgradeTitle.textContent = text("upgradeIncome");
  el.cooldownUpgradeTitle.textContent = text("upgradeCooldown");
  el.critUpgradeTitle.textContent = text("upgradeCrit");
  el.buyIncomeLabel.textContent = text("buy");
  el.buyCooldownLabel.textContent = text("buy");
  el.buyCritLabel.textContent = text("buy");
  el.offlineTitle.textContent = text("offlineTitle");
  el.offlineClaimBtn.textContent = text("claim");
  el.offlineClaimAdBtn.textContent = `📺 ${text("claimX2")}`;
}

function flashBoard() {
  el.board.style.filter = "brightness(1.35) saturate(1.35)";
  setTimeout(() => {
    el.board.style.filter = "";
  }, 140);
}

function emitBoardConfetti(level) {
  if (!el.particles || !el.board) return;
  const boardRect = el.board.getBoundingClientRect();
  const n = 28 + level * 3;
  const colors = ["#ffeb3b", "#ff69b4", "#7cfcff", "#b388ff", "#76ff03", "#fff", "#ff9800"];
  for (let i = 0; i < n; i += 1) {
    const p = document.createElement("span");
    p.className = "particle particle--confetti";
    p.style.left = `${Math.random() * boardRect.width}px`;
    p.style.top = `${Math.random() * boardRect.height * 0.35}px`;
    const c = colors[Math.floor(Math.random() * colors.length)];
    p.style.color = c;
    p.style.background = c;
    const dx = (Math.random() - 0.5) * (140 + level * 10);
    const dy = 80 + Math.random() * (220 + level * 12);
    p.style.setProperty("--dx", `${dx}px`);
    p.style.setProperty("--dy", `${dy}px`);
    p.style.animationDuration = `${0.65 + Math.random() * 0.45}s`;
    el.particles.appendChild(p);
    setTimeout(() => p.remove(), 1200);
  }
}

function emitParticlesAtCell(index, config) {
  if (!el.particles) return;
  const boardRect = el.board.getBoundingClientRect();
  const cells = el.board.querySelectorAll(".cell");
  const cell = cells[index];
  if (!cell) return;
  const rect = cell.getBoundingClientRect();
  const originX = rect.left - boardRect.left + rect.width / 2;
  const originY = rect.top - boardRect.top + rect.height / 2;

  const level = clampInt(config?.level, 1, 12, 1);
  const crit = Boolean(config?.crit);
  const basePalettes = [
    ["#9be7ff", "#5fd0ff", "#ffffff"],
    ["#8bffa3", "#4dff7f", "#ffffff"],
    ["#ffd86b", "#ffc040", "#fff1b8"],
    ["#8ec3ff", "#7f7bff", "#ff9fff"],
    ["#ff8080", "#ff3f6f", "#ffd2d2"],
    ["#ffba67", "#ffd54a", "#fff6cc"],
    ["#79ffd8", "#4de8c2", "#ffffff"],
    ["#ff89e4", "#d672ff", "#ffffff"],
    ["#90ffe8", "#67d8ff", "#f3f8ff"],
    ["#ebd2ff", "#7ce7ff", "#ffffff"],
    ["#ffd6a0", "#ffe8c9", "#ffffff"],
    ["#ffffff", "#ff80b3", "#80e8ff"]
  ];
  const palette = basePalettes[level - 1] || ["#ffffff", "#ffd36e", "#7fe8ff"];
  const burst = config?.event === "burst";
  const amount = (config?.event === "spawn" ? 18 : burst ? 26 : 32) + level * 3 + (crit ? 22 : 0);

  for (let i = 0; i < amount; i += 1) {
    const p = document.createElement("span");
    const shapeRoll = Math.random();
    p.className = `particle${shapeRoll < 0.12 ? " particle--star" : ""}${shapeRoll > 0.88 ? " particle--big" : ""}`;
    p.style.left = `${originX}px`;
    p.style.top = `${originY}px`;
    const tint = palette[Math.floor(Math.random() * palette.length)];
    p.style.color = tint;
    const spread = (burst ? 130 : 100) + level * 10 + (crit ? 55 : 0);
    const dx = (Math.random() - 0.5) * spread;
    const dy = (Math.random() - 0.5) * spread - Math.random() * (40 + level * 4 + (burst ? 25 : 0));
    p.style.setProperty("--dx", `${dx}px`);
    p.style.setProperty("--dy", `${dy}px`);
    p.style.background = `radial-gradient(circle, ${tint}, #ffffff)`;
    el.particles.appendChild(p);
    setTimeout(() => p.remove(), burst ? 920 : 800);
  }

  const rings = crit ? 7 : burst ? 5 : Math.min(5, 3 + Math.floor(level / 3));
  for (let i = 0; i < rings; i += 1) {
    const ring = document.createElement("span");
    ring.className = "particle ring";
    ring.style.left = `${originX}px`;
    ring.style.top = `${originY}px`;
    ring.style.color = palette[Math.floor(Math.random() * palette.length)];
    el.particles.appendChild(ring);
    setTimeout(() => ring.remove(), burst ? 680 : 580);
  }

  const sparkleCount = (level >= 4 ? 8 : 4) + level + (crit ? 14 : 0) + (burst ? 10 : 0);
  for (let i = 0; i < sparkleCount; i += 1) {
    const sp = document.createElement("span");
    sp.className = "particle particle--sparkle";
    sp.textContent = ["✨", "⭐", "💫"][Math.floor(Math.random() * 3)];
    sp.style.left = `${originX + (Math.random() - 0.5) * 40}px`;
    sp.style.top = `${originY + (Math.random() - 0.5) * 40}px`;
    const spSpread = 70 + level * 6 + (crit ? 40 : 0);
    sp.style.setProperty("--dx", `${(Math.random() - 0.5) * spSpread}px`);
    sp.style.setProperty("--dy", `${(Math.random() - 0.5) * spSpread - 20 - Math.random() * 50}px`);
    el.particles.appendChild(sp);
    setTimeout(() => sp.remove(), 700);
  }

  // Extra juicy accents for higher levels.
  if (level >= 5 || burst || crit) {
    for (let i = 0; i < 8 + level * 2 + (crit ? 10 : 0); i += 1) {
      const streak = document.createElement("span");
      streak.className = "particle";
      streak.style.width = `${2 + Math.random() * 3}px`;
      streak.style.height = `${12 + Math.random() * 18}px`;
      streak.style.borderRadius = "12px";
      streak.style.left = `${originX}px`;
      streak.style.top = `${originY}px`;
      streak.style.color = palette[Math.floor(Math.random() * palette.length)];
      streak.style.background = streak.style.color;
      streak.style.setProperty("--dx", `${(Math.random() - 0.5) * (160 + level * 6)}px`);
      streak.style.setProperty("--dy", `${(Math.random() - 0.5) * (150 + level * 6)}px`);
      el.particles.appendChild(streak);
      setTimeout(() => streak.remove(), 820);
    }
  }
}

function trySpend(amount) {
  if (state.likes < amount) return false;
  state.likes -= amount;
  return true;
}

function onFreeSpawn() {
  ensureBackgroundMusic();
  if (state.spawnCooldown > 0) return;
  if (spawnMeme(1)) state.spawnCooldown = getFreeSpawnCooldownAfterPress();
}

function onPaidSpawn() {
  ensureBackgroundMusic();
  if (!trySpend(state.paidSpawnPrice)) return toast(text("noLikes"));
  if (!spawnMeme(1)) { state.likes += state.paidSpawnPrice; return; }
  state.paidSpawnCount += 1;
  state.lastPaidSpawnTs = Date.now();
  state.paidSpawnPrice = getNextSpawnPrice();
}

function buyIncomeUpgrade() {
  ensureBackgroundMusic();
  if (state.incomeUpgradeLevel >= MAX_TALENT_LEVEL) return;
  const price = getIncomeUpgradePrice(state.incomeUpgradeLevel);
  if (!trySpend(price)) return toast(text("noLikes"));
  state.incomeUpgradeLevel += 1;
  state.lastProgressTs = Date.now();
  playSoundEffect("upgrade", [530, 0.08, "triangle", 0.05]);
}

function buyCooldownUpgrade() {
  ensureBackgroundMusic();
  if (state.cooldownUpgradeLevel >= MAX_TALENT_LEVEL) return;
  const price = getCooldownUpgradePrice(state.cooldownUpgradeLevel);
  if (!trySpend(price)) return toast(text("noLikes"));
  state.cooldownUpgradeLevel += 1;
  state.lastProgressTs = Date.now();
  playSoundEffect("upgrade", [580, 0.08, "triangle", 0.05]);
}

function buyCritUpgrade() {
  ensureBackgroundMusic();
  if (state.critUpgradeLevel >= MAX_TALENT_LEVEL) return;
  const price = getCritUpgradePrice(state.critUpgradeLevel);
  if (!trySpend(price)) return toast(text("noLikes"));
  state.critUpgradeLevel += 1;
  state.lastProgressTs = Date.now();
  playSoundEffect("upgrade", [630, 0.08, "triangle", 0.05]);
}

function tryShowInterstitialAfterUserAction() {
  if (!ysdk.sdk?.adv?.showFullscreenAdv) return;
  if (ysdk.interstitialShowing) return;
  if (Date.now() - state.lastInterstitialTs < INTERSTITIAL_COOLDOWN_MS) return;
  ysdk.showInterstitial();
}

const ysdk = {
  sdk: null,
  player: null,
  gameplayStarted: false,
  interstitialShowing: false,
  async init() {
    if (!window.YaGames) return;
    try {
      this.sdk = await window.YaGames.init();
      state.yandexReady = true;
      this.player = await this.sdk.getPlayer({ scopes: false });
      state.playerName = this.player?.getName?.() || state.playerName;
      await this.loadCloudData();
      syncLocaleFromSdk();
      this.sdk.features?.LoadingAPI?.ready?.();
      this.startGameplay();
    } catch (e) {
      console.warn("Yandex SDK init failed", e);
    }
  },
  startGameplay() {
    if (this.gameplayStarted) return;
    this.sdk?.features?.GameplayAPI?.start?.();
    this.gameplayStarted = true;
  },
  stopGameplay() {
    if (!this.gameplayStarted) return;
    this.sdk?.features?.GameplayAPI?.stop?.();
    this.gameplayStarted = false;
  },
  async loadCloudData() {
    if (!this.player?.getData) return;
    try {
      const data = await this.player.getData([SAVE_KEY]);
      if (data && data[SAVE_KEY]) hydrateFromData(data[SAVE_KEY]);
    } catch (e) {
      console.warn("Cloud load failed", e);
    }
  },
  async saveCloudData() {
    if (!this.player?.setData) return;
    try {
      await this.player.setData({ [SAVE_KEY]: safeSaveData() });
    } catch (e) {
      console.warn("Cloud save failed", e);
    }
  },
  showInterstitial() {
    if (!this.sdk?.adv?.showFullscreenAdv || this.interstitialShowing) return;
    if (Date.now() - state.lastInterstitialTs < INTERSTITIAL_COOLDOWN_MS) return;
    this.interstitialShowing = true;
    pauseGameForAd();
    suspendBgmForAd();
    this.stopGameplay();
    this.sdk.adv.showFullscreenAdv({
      callbacks: {
        onClose: (wasShown) => {
          state.lastInterstitialTs = Date.now();
          this.interstitialShowing = false;
          resumeGameAfterAd();
          resumeBgmAfterAd();
          this.startGameplay();
        },
        onError: () => {
          state.lastInterstitialTs = Date.now();
          this.interstitialShowing = false;
          resumeGameAfterAd();
          resumeBgmAfterAd();
          this.startGameplay();
        }
      }
    });
  },
  showRewarded(onReward) {
    if (!this.sdk?.adv?.showRewardedVideo) {
      onReward();
      return;
    }
    let granted = false;
    const grantOnce = () => {
      if (granted) return;
      granted = true;
      try {
        onReward();
      } catch (e) {
        console.warn("Reward callback failed", e);
      }
    };
    pauseGameForAd();
    suspendBgmForAd();
    this.stopGameplay();
    this.sdk.adv.showRewardedVideo({
      callbacks: {
        onRewarded: grantOnce,
        onClose: (wasShown) => {
          if (wasShown !== false) grantOnce();
          resumeGameAfterAd();
          resumeBgmAfterAd();
          this.startGameplay();
        },
        onError: () => {
          resumeGameAfterAd();
          resumeBgmAfterAd();
          this.startGameplay();
          toast(text("adsUnavailable"));
        }
      }
    });
  }
};

function showOfflinePanel() {
  if (state.pendingOfflineGain <= 0) {
    el.offlinePanel.classList.add("hidden");
    return;
  }
  el.offlinePanel.classList.remove("hidden");
  el.offlineText.textContent = `${text("offlineText")} +${formatInt(state.pendingOfflineGain)}`;
}

function bindEvents() {
  el.spawnFreeBtn.addEventListener("click", onFreeSpawn);
  el.spawnPaidBtn.addEventListener("click", onPaidSpawn);
  el.buyIncomeUpgradeBtn.addEventListener("click", buyIncomeUpgrade);
  el.buyCooldownUpgradeBtn.addEventListener("click", buyCooldownUpgrade);
  el.buyCritUpgradeBtn.addEventListener("click", buyCritUpgrade);
  if (el.resetProgressBtn) el.resetProgressBtn.addEventListener("click", resetAllProgress);

  el.soundBtn.addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    if (state.soundEnabled) ensureBackgroundMusic();
    else stopBackgroundMusic();
    playSoundEffect("click", [660, 0.05, "square", 0.04]);
    renderUI();
  });

  el.offlineClaimBtn.addEventListener("click", () => {
    state.likes += state.pendingOfflineGain;
    state.pendingOfflineGain = 0;
    el.offlinePanel.classList.add("hidden");
    toast(text("offlineClaimed"));
  });
  el.offlineClaimAdBtn.addEventListener("click", () => {
    ysdk.showRewarded(() => {
      state.likes += state.pendingOfflineGain * 2;
      state.pendingOfflineGain = 0;
      el.offlinePanel.classList.add("hidden");
      toast(text("offlineClaimedX2"));
    });
  });

  el.adBoostBtn.addEventListener("click", () => {
    ensureBackgroundMusic();
    ysdk.showRewarded(() => {
      state.adIncomeBoostUntil = Date.now() + AD_INCOME_BOOST_MS;
      toast(text("incomeBoost"));
    });
  });
  el.adSpawnBtn.addEventListener("click", () => {
    ensureBackgroundMusic();
    ysdk.showRewarded(() => {
      let added = 0;
      for (let i = 0; i < 5; i += 1) if (spawnMeme(1)) added += 1;
      toast(`+${added} ${text("memesAdded")}`);
    });
  });
  el.adInstantBtn.addEventListener("click", () => {
    ensureBackgroundMusic();
    ysdk.showRewarded(() => {
      state.adFastSpawnUntil = Date.now() + AD_FAST_SPAWN_MS;
      toast(text("adMicroCdToast"));
    });
  });
}

function applyFreshGameState() {
  const now = Date.now();
  state.likes = 0;
  state.board = Array(BOARD_SIZE).fill(null);
  state.spawnCooldown = 0;
  state.paidSpawnCount = 0;
  state.paidSpawnPrice = INITIAL_SPAWN_PRICES[0];
  state.lastPaidSpawnTs = now;
  state.incomeUpgradeLevel = 0;
  state.cooldownUpgradeLevel = 0;
  state.critUpgradeLevel = 0;
  state.sessionStartTs = now;
  state.adIncomeBoostUntil = 0;
  state.adFastSpawnUntil = 0;
  state.stickyBonusUntil = 0;
  state.lastProgressTs = now;
  state.selectedIndex = -1;
  state.topLevelReached = 1;
  state.pendingOfflineGain = 0;
  state.lastInterstitialTs = Date.now();
}

function resetAllProgress() {
  if (!window.confirm(text("resetConfirm"))) return;
  localStorage.removeItem(SAVE_KEY);
  localStorage.removeItem(SAVE_KEY_LEGACY);
  applyFreshGameState();
  spawnMeme(1);
  spawnMeme(1);
  showOfflinePanel();
  toast(text("resetDone"));
  saveGame();
  ysdk.saveCloudData();
}

function cacheElements() {
  el.board = $("board");
  el.particles = $("particles");
  el.titleText = $("titleText");
  el.likesLabel = $("likesLabel");
  el.incomeLabel = $("incomeLabel");
  el.critLabel = $("critLabel");
  el.topLevelLabel = $("topLevelLabel");
  el.likesValue = $("likesValue");
  el.incomeValue = $("incomeValue");
  el.incomeMultHint = $("incomeMultHint");
  el.critValue = $("critValue");
  el.topLevelValue = $("topLevelValue");
  el.cooldownValue = $("cooldownValue");
  el.spawnPriceValue = $("spawnPriceValue");
  el.guideTitle = $("guideTitle");
  el.guideP1 = $("guideP1");
  el.guideP2 = $("guideP2");
  el.guideP3 = $("guideP3");
  el.guideP4 = $("guideP4");
  el.resetProgressBtn = $("resetProgressBtn");
  el.spawnFreeBtn = $("spawnFreeBtn");
  el.spawnFreeLabel = $("spawnFreeLabel");
  el.spawnFreeSub = $("spawnFreeSub");
  el.spawnPaidBtn = $("spawnPaidBtn");
  el.spawnPaidLabel = $("spawnPaidLabel");
  el.spawnPaidSub = $("spawnPaidSub");
  el.adBoostBtn = $("adBoostBtn");
  el.adBoostLabel = $("adBoostLabel");
  el.adBoostTimer = $("adBoostTimer");
  el.adSpawnBtn = $("adSpawnBtn");
  el.adSpawnLabel = $("adSpawnLabel");
  el.adInstantBtn = $("adInstantBtn");
  el.adInstantLabel = $("adInstantLabel");
  el.soundBtn = $("soundBtn");
  el.soundBtnLabel = $("soundBtnLabel");
  el.shopTitle = $("shopTitle");
  el.incomeUpgradeTitle = $("incomeUpgradeTitle");
  el.cooldownUpgradeTitle = $("cooldownUpgradeTitle");
  el.critUpgradeTitle = $("critUpgradeTitle");
  el.buyIncomeUpgradeBtn = $("buyIncomeUpgradeBtn");
  el.buyIncomeLabel = $("buyIncomeLabel");
  el.buyCooldownUpgradeBtn = $("buyCooldownUpgradeBtn");
  el.buyCooldownLabel = $("buyCooldownLabel");
  el.buyCritUpgradeBtn = $("buyCritUpgradeBtn");
  el.buyCritLabel = $("buyCritLabel");
  el.incomeUpgradePrice = $("incomeUpgradePrice");
  el.cooldownUpgradePrice = $("cooldownUpgradePrice");
  el.critUpgradePrice = $("critUpgradePrice");
  el.incomeBonusPreview = $("incomeBonusPreview");
  el.cooldownBonusPreview = $("cooldownBonusPreview");
  el.critBonusPreview = $("critBonusPreview");
  el.incomeUpgradeLevel = $("incomeUpgradeLevel");
  el.cooldownUpgradeLevel = $("cooldownUpgradeLevel");
  el.critUpgradeLevel = $("critUpgradeLevel");
  el.offlinePanel = $("offlinePanel");
  el.offlineTitle = $("offlineTitle");
  el.offlineText = $("offlineText");
  el.offlineClaimBtn = $("offlineClaimBtn");
  el.offlineClaimAdBtn = $("offlineClaimAdBtn");
  el.toast = $("toast");
}

async function bootstrap() {
  cacheElements();
  await loadAssets();
  window.addEventListener("pointerdown", ensureBackgroundMusic, { once: true });
  loadGame();
  bindEvents();
  if (!state.board.some(Boolean)) {
    spawnMeme(1);
    spawnMeme(1);
  }
  showOfflinePanel();
  renderBoard();
  ysdk.init();

  let last = performance.now();
  setInterval(() => {
    const now = performance.now();
    const deltaSec = (now - last) / 1000;
    last = now;
    tick(deltaSec);
    syncLocaleFromSdk();
    renderUI();
  }, 100);

  setInterval(() => {
    saveGame();
    ysdk.saveCloudData();
  }, 10000);

  window.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      ysdk.stopGameplay();
      if (bgmAudio && !bgmAudio.paused) {
        try { bgmAudio.pause(); } catch (_) {}
      }
    } else {
      ysdk.startGameplay();
      if (state.soundEnabled && bgmStarted && bgmAudio && !bgmSuspendedForAd) {
        try { const p = bgmAudio.play(); if (p && p.catch) p.catch(() => {}); } catch (_) {}
      }
    }
  });
  window.addEventListener("beforeunload", () => {
    saveGame();
    ysdk.saveCloudData();
    ysdk.stopGameplay();
  });

  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("touchmove", (e) => {
    if (!e.target.closest(".app")) e.preventDefault();
  }, { passive: false });
  document.addEventListener("selectstart", (e) => e.preventDefault());

  if (navigator.mediaSession) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: text("title"),
      artist: "Brainrot Merge"
    });
    navigator.mediaSession.setActionHandler("play", () => {});
    navigator.mediaSession.setActionHandler("pause", () => {});
  }

}

// Auto-scale: fit app to viewport without scrollbars
function fitToScreen() {
  const app = document.querySelector(".app");
  if (!app) return;
  app.style.transform = "";
  app.style.transformOrigin = "top center";
  void app.offsetHeight;
  const sh = app.scrollHeight;
  const vh = window.innerHeight;
  if (sh > vh + 2) {
    app.style.transform = "scale(" + (vh / sh) + ")";
  }
}
window.addEventListener("resize", fitToScreen);
window.addEventListener("load", fitToScreen);

bootstrap().then(() => { fitToScreen(); });
