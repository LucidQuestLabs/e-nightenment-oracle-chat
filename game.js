const MAX_NIGHTS = 8;

const cards = [
  {
    title: "The Mirror With Rain Inside",
    text:
      "A mirror leans against a cedar stump. Its reflection is late by three seconds and seems relieved to see you.",
    choices: [
      {
        label: "Wait for your reflection to catch up",
        hint: "Patience clarifies the edges.",
        delta: { glow: -3, hush: 12, spark: -2, shadow: 6 },
        glints: 1,
        result:
          "You wait. The face in the glass arrives carrying your oldest worry, then sets it down like a wet coat."
      },
      {
        label: "Compliment its timing",
        hint: "A little wit can unlock a stuck image.",
        delta: { glow: 5, hush: -4, spark: 12, shadow: -2 },
        glints: 1,
        result:
          "The mirror blushes in silver. For once, self-knowledge has comic timing."
      },
      {
        label: "Turn it toward the sky",
        hint: "Borrow a wider face.",
        delta: { glow: 9, hush: 5, spark: -3, shadow: 2 },
        glints: 2,
        result:
          "The clouds see themselves and briefly become honest. A bright fleck falls into your palm."
      }
    ]
  },
  {
    title: "The Door That Asks Your Name",
    text:
      "A narrow door stands alone in the grass. It has no wall, no lock, and an unsettlingly good memory.",
    choices: [
      {
        label: "Give the name you outgrew",
        hint: "Old skins still know useful weather.",
        delta: { glow: 2, hush: 7, spark: -2, shadow: 9 },
        glints: 1,
        result:
          "The hinges sigh. Something small and brave from the past steps through first."
      },
      {
        label: "Invent a name on the spot",
        hint: "The soul enjoys a fake mustache.",
        delta: { glow: 4, hush: -5, spark: 14, shadow: 1 },
        glints: 1,
        result:
          "The door accepts the alias immediately. It has been waiting for better theater."
      },
      {
        label: "Ask what it calls itself",
        hint: "Inquiry is hospitality with sharper shoes.",
        delta: { glow: 7, hush: 8, spark: 1, shadow: -4 },
        glints: 2,
        result:
          "The door says, 'Almost.' Then it opens without moving, which is frankly excellent door work."
      }
    ]
  },
  {
    title: "The Garden of Unsent Replies",
    text:
      "Every flower here is a message never sent. They lean toward you, fragrant with restraint.",
    choices: [
      {
        label: "Read one aloud to the moths",
        hint: "Expression changes shape when it has wings.",
        delta: { glow: 8, hush: -3, spark: 8, shadow: 4 },
        glints: 1,
        result:
          "The moths do not solve anything. They do listen with their whole powdery bodies."
      },
      {
        label: "Water the shortest apology",
        hint: "Small repair is still repair.",
        delta: { glow: 9, hush: 6, spark: -4, shadow: -5 },
        glints: 2,
        result:
          "It grows one new leaf and no moral. You feel unreasonably fond of it."
      },
      {
        label: "Leave every bloom unopened",
        hint: "Silence can be a completed sentence.",
        delta: { glow: -4, hush: 13, spark: -2, shadow: 5 },
        glints: 1,
        result:
          "The garden rustles, grateful not to be converted into content."
      }
    ]
  },
  {
    title: "The Comet Wearing Spectacles",
    text:
      "A comet descends to inspect your lantern. It is very old, very bright, and a bit nearsighted.",
    choices: [
      {
        label: "Polish its lenses",
        hint: "Service can be cosmic without making a speech.",
        delta: { glow: 10, hush: 3, spark: -2, shadow: -3 },
        glints: 2,
        result:
          "The comet reads the fine print on your fear and declares most of it unenforceable."
      },
      {
        label: "Challenge it to a staring contest",
        hint: "Foolish courage is still courage.",
        delta: { glow: 6, hush: -8, spark: 13, shadow: 4 },
        glints: 1,
        result:
          "You lose instantly. The comet respects the attempt and leaves a hot little comma in the dark."
      },
      {
        label: "Ask what it has forgotten",
        hint: "Even old fire misplaces itself.",
        delta: { glow: -2, hush: 10, spark: 2, shadow: 8 },
        glints: 1,
        result:
          "It remembers rain. The whole sky goes quiet around that one word."
      }
    ]
  },
  {
    title: "The Well of Borrowed Certainty",
    text:
      "At the bottom of a stone well, dozens of confident voices make excellent arguments with no moonlight.",
    choices: [
      {
        label: "Drop in a question, not a coin",
        hint: "A good question spends itself slowly.",
        delta: { glow: 5, hush: 9, spark: 1, shadow: -2 },
        glints: 2,
        result:
          "The well cannot echo a question properly. It has to become larger first."
      },
      {
        label: "Sing badly until certainty laughs",
        hint: "Cracked notes make useful exits.",
        delta: { glow: 3, hush: -5, spark: 15, shadow: -4 },
        glints: 1,
        result:
          "The voices break formation. One of them admits it was mostly posture."
      },
      {
        label: "Listen without adopting",
        hint: "Not every voice needs a room key.",
        delta: { glow: -1, hush: 12, spark: -3, shadow: 5 },
        glints: 1,
        result:
          "You hear the shape of hunger under the certainty, and it stops sounding like command."
      }
    ]
  },
  {
    title: "The Library of Tiny Dawns",
    text:
      "Each book opens to the same sentence: 'Begin again, but this time include your elbows.'",
    choices: [
      {
        label: "Shelve the book you wanted to be",
        hint: "A self can be retired with honors.",
        delta: { glow: 4, hush: 11, spark: -5, shadow: 3 },
        glints: 1,
        result:
          "The shelf makes room with a tender click. You are lighter by one impressive costume."
      },
      {
        label: "Annotate the margins with jokes",
        hint: "Wisdom likes an unlocked window.",
        delta: { glow: 3, hush: -3, spark: 12, shadow: -1 },
        glints: 1,
        result:
          "A librarian coughs in disapproval, then steals your best line."
      },
      {
        label: "Read by lantern, not by hunger",
        hint: "Attention changes the appetite.",
        delta: { glow: 11, hush: 7, spark: -2, shadow: -6 },
        glints: 2,
        result:
          "The page warms. Nothing is missing from the room for almost a full breath."
      }
    ]
  },
  {
    title: "The Orchestra Tuning One Note",
    text:
      "Crickets, wires, teeth, rivers, and one suspicious spoon tune themselves to a note you almost recognize.",
    choices: [
      {
        label: "Hum beneath the note",
        hint: "Harmony is not obedience.",
        delta: { glow: 5, hush: 10, spark: 2, shadow: -1 },
        glints: 2,
        result:
          "The night adds you without swallowing you. The spoon looks less suspicious."
      },
      {
        label: "Conduct with the lantern handle",
        hint: "Play is a form of permission.",
        delta: { glow: 8, hush: -4, spark: 11, shadow: 2 },
        glints: 1,
        result:
          "The orchestra follows for six glorious beats before deciding you are ornamental."
      },
      {
        label: "Let the note pass through",
        hint: "Some music prefers no witness stand.",
        delta: { glow: -2, hush: 14, spark: -4, shadow: 4 },
        glints: 1,
        result:
          "You become acoustically transparent. The note leaves a clean window behind."
      }
    ]
  },
  {
    title: "The Bureau of Acceptable Longing",
    text:
      "A clerk in a moonlit booth asks you to file your yearning in triplicate. The forms are damp.",
    choices: [
      {
        label: "Submit a blank form with confidence",
        hint: "Emptiness can have excellent posture.",
        delta: { glow: 6, hush: 6, spark: 6, shadow: -3 },
        glints: 2,
        result:
          "The clerk stamps the silence approved. A drawer full of stars unlocks itself."
      },
      {
        label: "Ask for the improper longing desk",
        hint: "The hidden office has better chairs.",
        delta: { glow: 2, hush: -2, spark: 13, shadow: 5 },
        glints: 1,
        result:
          "The clerk smiles for the first time all century and points behind the moon."
      },
      {
        label: "Fold the forms into a boat",
        hint: "A rule can become a vessel.",
        delta: { glow: 9, hush: 3, spark: 8, shadow: -2 },
        glints: 1,
        result:
          "The boat sails across the counter. The clerk pretends not to be moved."
      }
    ]
  },
  {
    title: "The Hill That Refuses Metaphor",
    text:
      "It is simply a hill. It insists on this. Still, it has arranged the stars rather beautifully.",
    choices: [
      {
        label: "Climb it without improving yourself",
        hint: "Not every ascent needs a lesson plan.",
        delta: { glow: 8, hush: 10, spark: -2, shadow: -3 },
        glints: 2,
        result:
          "At the top, nothing transforms. This is suspiciously transformative."
      },
      {
        label: "Race your own seriousness",
        hint: "Speed is not depth, but it is funny.",
        delta: { glow: 4, hush: -6, spark: 14, shadow: 1 },
        glints: 1,
        result:
          "You beat seriousness by half a shoe. It files a formal protest."
      },
      {
        label: "Sit halfway and admit halfway",
        hint: "Partial arrival is a real country.",
        delta: { glow: -1, hush: 13, spark: 1, shadow: 6 },
        glints: 1,
        result:
          "The hill accepts your fraction. The stars lower their volume."
      }
    ]
  },
  {
    title: "The Lantern That Wants a Turn",
    text:
      "Your lantern clears its throat. Apparently, being carried is not the same as being heard.",
    choices: [
      {
        label: "Let it choose the path",
        hint: "Trust is a door with muddy boots.",
        delta: { glow: 10, hush: 5, spark: 2, shadow: -4 },
        glints: 2,
        result:
          "The lantern leads you in a spiral that somehow saves time."
      },
      {
        label: "Ask what it sees in you",
        hint: "Tenderness is data, if you can stand it.",
        delta: { glow: 7, hush: 8, spark: -3, shadow: 3 },
        glints: 1,
        result:
          "It says you are less alone than your habits advertise."
      },
      {
        label: "Trade jobs until dawn",
        hint: "Perspective has calluses.",
        delta: { glow: 3, hush: -2, spark: 11, shadow: 5 },
        glints: 1,
        result:
          "The lantern carries you poorly but enthusiastically. You learn why handles matter."
      }
    ]
  }
];

const endingCopy = [
  {
    test: ({ score, spread, shadow }) => score >= 82 && spread <= 22 && shadow >= 20 && shadow <= 62,
    title: "Enightened, With Something Else",
    text:
      "You do not rise above the world. Better: you return to it with luminous pockets, a steadier breath, and a grin that refuses to become a doctrine. The something else was companionship. Naturally."
  },
  {
    test: ({ spark, hush }) => spark >= hush + 18,
    title: "Moon-Drunk Sage of Excellent Bad Ideas",
    text:
      "You reach dawn by laughing at the locked gates until they get embarrassed. The insight is uneven, but alive. Keep the lantern. It likes your reckless footwork."
  },
  {
    test: ({ hush, glow }) => hush >= glow + 18,
    title: "Keeper of the Almost-Silent Bell",
    text:
      "The night teaches you to hear the small hinge inside things. You leave with fewer answers and better acoustics. This is a stranger victory than certainty."
  },
  {
    test: ({ glow, shadow }) => glow >= 76 && shadow <= 24,
    title: "Radiant, Slightly Overexposed",
    text:
      "You become very bright and briefly mistake brightness for arrival. Dawn hands you a pair of softer eyes. The shadow would still like a seat at breakfast."
  },
  {
    test: ({ shadow }) => shadow >= 72,
    title: "Beautifully Unresolved",
    text:
      "You carry a heavy dark into morning, but now it has handles. Not enlightenment exactly, not failure either. More like an honest suitcase with stars in the seams."
  },
  {
    test: () => true,
    title: "Apprentice of the Sideways Dawn",
    text:
      "You do not solve the night. You do leave it more tenderly arranged than you found it. Sometimes that is the whole secret wearing a smaller hat."
  }
];

const dom = {
  canvas: document.querySelector("#skyCanvas"),
  nightCounter: document.querySelector("#nightCounter"),
  glintCounter: document.querySelector("#glintCounter"),
  balanceLabel: document.querySelector("#balanceLabel"),
  omenLabel: document.querySelector("#omenLabel"),
  omenTitle: document.querySelector("#omenTitle"),
  omenText: document.querySelector("#omenText"),
  choiceList: document.querySelector("#choiceList"),
  resultPane: document.querySelector("#resultPane"),
  resultText: document.querySelector("#resultText"),
  continueButton: document.querySelector("#continueButton"),
  resetButton: document.querySelector("#resetButton"),
  weatherToggle: document.querySelector("#weatherToggle"),
  weatherToggleLabel: document.querySelector("#weatherToggleLabel"),
  meters: document.querySelector(".meters"),
  journalList: document.querySelector("#journalList"),
  endingOverlay: document.querySelector("#endingOverlay"),
  endingTitle: document.querySelector("#endingTitle"),
  endingText: document.querySelector("#endingText"),
  endingGlints: document.querySelector("#endingGlints"),
  endingBalance: document.querySelector("#endingBalance"),
  oracleButton: document.querySelector("#oracleButton"),
  oracleStatus: document.querySelector("#oracleStatus"),
  oracleText: document.querySelector("#oracleText"),
  endingCloseButton: document.querySelector("#endingCloseButton"),
  endingResetButton: document.querySelector("#endingResetButton"),
  values: {
    glow: document.querySelector("#glowValue"),
    hush: document.querySelector("#hushValue"),
    spark: document.querySelector("#sparkValue"),
    shadow: document.querySelector("#shadowValue")
  },
  bars: {
    glow: document.querySelector("#glowBar"),
    hush: document.querySelector("#hushBar"),
    spark: document.querySelector("#sparkBar"),
    shadow: document.querySelector("#shadowBar")
  },
  chips: {
    glow: document.querySelector("#glowChipValue"),
    hush: document.querySelector("#hushChipValue"),
    spark: document.querySelector("#sparkChipValue"),
    shadow: document.querySelector("#shadowChipValue")
  }
};

const ctx = dom.canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let state;
let stars = [];
let particles = [];
let frame = 0;

const statColors = {
  glow: "#efb35d",
  hush: "#60c4a6",
  spark: "#d66c7a",
  shadow: "#8d84d8"
};

const LEDGER_KEY = "eNightenmentLedger";
const LEDGER_LIMIT = 24;

const skyPath = [
  [0.15, 0.25],
  [0.24, 0.19],
  [0.33, 0.28],
  [0.43, 0.22],
  [0.53, 0.3],
  [0.62, 0.24],
  [0.69, 0.28],
  [0.75, 0.2]
];

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createState() {
  return {
    sessionId: createSessionId(),
    startedAt: new Date().toISOString(),
    night: 1,
    stats: {
      glow: 48,
      hush: 44,
      spark: 42,
      shadow: 34
    },
    glints: 0,
    deck: shuffle(cards).slice(0, MAX_NIGHTS),
    card: null,
    phase: "choosing",
    journal: [],
    skyMarks: [],
    lastPulse: null,
    ending: null,
    oracle: {
      status: "idle",
      text: ""
    },
    choices: [],
    savedSession: false
  };
}

function createSessionId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `run-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function readLedger() {
  try {
    const ledger = JSON.parse(localStorage.getItem(LEDGER_KEY) || "[]");
    return Array.isArray(ledger) ? ledger : [];
  } catch {
    return [];
  }
}

function writeLedger(ledger) {
  localStorage.setItem(LEDGER_KEY, JSON.stringify(ledger.slice(0, LEDGER_LIMIT)));
}

function currentSessionRecord(oracleReading = state.oracle.text) {
  const score = scoreRun();
  return {
    sessionId: state.sessionId,
    startedAt: state.startedAt,
    endedAt: new Date().toISOString(),
    choices: state.choices,
    final: {
      ending: state.ending,
      glints: state.glints,
      balance: balanceName(),
      score: score.score,
      spread: score.spread,
      stats: { ...state.stats },
      oracleReading: oracleReading || ""
    }
  };
}

function saveSession(oracleReading = state.oracle.text) {
  if (state.phase !== "ended") return;

  const ledger = readLedger();
  const record = currentSessionRecord(oracleReading);
  const index = ledger.findIndex((entry) => entry.sessionId === state.sessionId);

  if (index >= 0) {
    ledger[index] = record;
  } else {
    ledger.unshift(record);
  }

  writeLedger(ledger);
  state.savedSession = true;
}

function statSpread(stats = state.stats) {
  const values = [stats.glow, stats.hush, stats.spark, stats.shadow];
  return Math.max(...values) - Math.min(...values);
}

function balanceName(stats = state.stats) {
  const spread = statSpread(stats);
  if (spread <= 16) return "Lucid";
  if (spread <= 28) return "Tuned";
  if (spread <= 42) return "Weathered";
  return "Wobbly";
}

function scoreRun() {
  const { glow, hush, spark, shadow } = state.stats;
  const innerLift = (glow + hush + spark) / 3;
  const shadowSeat = 100 - Math.abs(shadow - 42) * 1.7;
  const spread = statSpread();
  const score = Math.round(innerLift * 0.55 + shadowSeat * 0.25 + state.glints * 5 - spread * 0.18);
  return {
    score: clamp(score),
    spread,
    glow,
    hush,
    spark,
    shadow
  };
}

function dominantStat(stats = state.stats) {
  return Object.entries(stats).sort((a, b) => b[1] - a[1])[0][0];
}

function choiceTemperament(delta) {
  const positive = Object.entries(delta)
    .filter(([, amount]) => amount > 0)
    .sort((a, b) => b[1] - a[1]);
  return positive[0]?.[0] || dominantStat();
}

function colorWithAlpha(hex, alpha) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function resizeCanvas() {
  const rect = dom.canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  dom.canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  dom.canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  makeStars(Math.floor((rect.width * rect.height) / 5200));
}

function makeStars(count) {
  const rect = dom.canvas.getBoundingClientRect();
  stars = Array.from({ length: Math.max(80, count) }, () => ({
    x: Math.random() * rect.width,
    y: Math.random() * rect.height * 0.78,
    r: Math.random() * 1.35 + 0.25,
    pulse: Math.random() * Math.PI * 2,
    color: Math.random() > 0.76 ? "#efb35d" : Math.random() > 0.5 ? "#f5efe0" : "#60c4a6"
  }));
}

function addParticles(amount, color) {
  const rect = dom.canvas.getBoundingClientRect();
  const focus = getLanternFocus(rect.width, rect.height);
  for (let i = 0; i < amount; i += 1) {
    particles.push({
      x: focus.x + (Math.random() - 0.5) * 80,
      y: focus.y + (Math.random() - 0.5) * 52,
      vx: (Math.random() - 0.5) * 1.8,
      vy: -Math.random() * 1.9 - 0.35,
      life: 70 + Math.random() * 45,
      maxLife: 110,
      size: Math.random() * 3 + 1,
      color
    });
  }
}

function getLanternFocus(width, height) {
  return {
    x: width * 0.5,
    y: height * 0.55
  };
}

function drawSky() {
  const rect = dom.canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const { glow, hush, spark, shadow } = state.stats;

  ctx.clearRect(0, 0, width, height);

  const sky = ctx.createLinearGradient(0, 0, width, height);
  sky.addColorStop(0, "#0b1113");
  sky.addColorStop(0.45, "#14100f");
  sky.addColorStop(1, "#08090b");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  drawMoon(width, height);

  for (const star of stars) {
    const alpha = 0.36 + Math.sin(frame * 0.018 + star.pulse) * 0.18 + glow / 360;
    ctx.globalAlpha = clamp(alpha, 0.18, 0.9);
    ctx.fillStyle = star.color;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  drawConstellation(width, height);
  drawHills(width, height, hush);
  drawShadow(width, height, shadow);
  drawLantern(width, height, glow, spark);
  drawGlints(width, height);
  drawParticles();

  if (!reduceMotion) {
    frame += 1;
    requestAnimationFrame(drawSky);
  }
}

function drawConstellation(width, height) {
  const points = skyPath.map(([x, y], index) => ({
    x: x * width,
    y: y * height + Math.sin(frame * 0.01 + index) * 4
  }));
  const litCount = state.skyMarks.length;

  ctx.setLineDash([5, 11]);
  ctx.strokeStyle = "rgba(245, 239, 224, 0.12)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();
  ctx.setLineDash([]);

  for (let i = 0; i < Math.max(0, litCount - 1); i += 1) {
    const mark = state.skyMarks[i + 1] || state.skyMarks[i];
    const color = statColors[mark.temperament] || "#efb35d";
    const wobble = mark.balance === "Wobbly" ? Math.sin(frame * 0.07 + i) * 2 : 0;
    ctx.strokeStyle = colorWithAlpha(color, mark.balance === "Lucid" ? 0.74 : 0.52);
    ctx.lineWidth = mark.balance === "Lucid" ? 2 : 1.35;
    if (mark.balance === "Weathered") ctx.setLineDash([9, 5]);
    if (mark.balance === "Wobbly") ctx.setLineDash([4, 7]);
    ctx.beginPath();
    ctx.moveTo(points[i].x, points[i].y + wobble);
    ctx.lineTo(points[i + 1].x, points[i + 1].y - wobble);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  points.forEach((point, index) => {
    const mark = state.skyMarks[index];
    const isLit = Boolean(mark);
    const isNext = index === litCount && state.phase === "choosing";
    const color = isLit ? statColors[mark.temperament] : "#f5efe0";
    const pulse = isNext ? Math.sin(frame * 0.06) * 1.1 + 1.2 : 0;
    const radius = isLit ? 3.2 + Math.min(mark.glintsGained, 3) * 0.7 : 2.1 + pulse;
    ctx.fillStyle = isLit ? color : "rgba(245, 239, 224, 0.52)";
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.fill();

    if (isLit && mark.balance === "Lucid") {
      ctx.strokeStyle = colorWithAlpha(color, 0.42);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(point.x, point.y, radius + 5, 0, Math.PI * 2);
      ctx.stroke();
    }
  });

  drawTravelingGlints(points, litCount);
}

function drawMoon(width, height) {
  const progress = state.skyMarks.length / MAX_NIGHTS;
  const moonX = width * 0.78;
  const moonY = height * 0.18;
  const moonR = Math.max(32, Math.min(width, height) * 0.085);
  const temperament = state.lastPulse?.temperament || dominantStat();
  const color = statColors[temperament] || "#efb35d";
  const moonGlow = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moonR * (3.3 + progress));
  moonGlow.addColorStop(0, `rgba(245, 239, 224, ${0.22 + progress * 0.1})`);
  moonGlow.addColorStop(0.42, colorWithAlpha(color, 0.1 + progress * 0.18));
  moonGlow.addColorStop(1, "rgba(245, 239, 224, 0)");
  ctx.fillStyle = moonGlow;
  ctx.beginPath();
  ctx.arc(moonX, moonY, moonR * (3.3 + progress), 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ead9a5";
  ctx.beginPath();
  ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(moonX + moonR * (0.42 - progress * 0.62), moonY - moonR * 0.1, moonR * (0.96 - progress * 0.08), 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = "source-over";

  if (state.skyMarks.length === MAX_NIGHTS) {
    ctx.strokeStyle = colorWithAlpha(color, 0.5);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(moonX, moonY, moonR + 8 + Math.sin(frame * 0.04) * 2, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawTravelingGlints(points, litCount) {
  if (litCount < 2 || state.glints === 0) return;

  const travelers = Math.min(4, Math.max(1, Math.floor(state.glints / 3)));
  const maxSegment = litCount - 1;
  for (let i = 0; i < travelers; i += 1) {
    const travel = ((frame * 0.006 + i / travelers) % 1) * maxSegment;
    const segment = Math.min(maxSegment - 1, Math.floor(travel));
    const t = travel - segment;
    const from = points[segment];
    const to = points[segment + 1];
    const x = from.x + (to.x - from.x) * t;
    const y = from.y + (to.y - from.y) * t;
    ctx.fillStyle = i % 2 ? "#60c4a6" : "#efb35d";
    ctx.globalAlpha = 0.76;
    ctx.beginPath();
    ctx.arc(x, y, 2.1 + (i % 2), 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

function drawHills(width, height, hush) {
  ctx.fillStyle = "#101714";
  ctx.beginPath();
  ctx.moveTo(0, height * 0.75);
  for (let x = 0; x <= width; x += 36) {
    const y = height * 0.75 + Math.sin(x * 0.012 + hush * 0.03) * 18 + Math.cos(x * 0.025) * 11;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#0a0d0d";
  ctx.beginPath();
  ctx.moveTo(0, height * 0.84);
  for (let x = 0; x <= width; x += 42) {
    const y = height * 0.84 + Math.cos(x * 0.015 + 1.2) * 21;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fill();
}

function drawShadow(width, height, shadow) {
  const strands = Math.round(5 + shadow / 13);
  ctx.strokeStyle = `rgba(141, 132, 216, ${0.05 + shadow / 700})`;
  ctx.lineWidth = 1.2 + shadow / 80;

  for (let i = 0; i < strands; i += 1) {
    const baseX = width * (0.14 + i / (strands + 2));
    ctx.beginPath();
    ctx.moveTo(baseX, height);
    for (let step = 0; step < 8; step += 1) {
      const y = height - step * (height * 0.075);
      const x = baseX + Math.sin(frame * 0.01 + step + i) * (shadow * 0.45);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}

function drawLantern(width, height, glow, spark) {
  const { x, y } = getLanternFocus(width, height);
  const pulse = reduceMotion ? 0 : Math.sin(frame * 0.05) * 4;
  const radius = 90 + glow * 1.6 + pulse;
  const aura = ctx.createRadialGradient(x, y, 0, x, y, radius);
  aura.addColorStop(0, "rgba(239, 179, 93, 0.55)");
  aura.addColorStop(0.35, "rgba(214, 108, 122, 0.14)");
  aura.addColorStop(1, "rgba(239, 179, 93, 0)");
  ctx.fillStyle = aura;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#4b3128";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(x, y - 35, 24, Math.PI, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#2b221d";
  roundRect(x - 26, y - 28, 52, 66, 8);
  ctx.fill();

  ctx.fillStyle = "#f1b257";
  roundRect(x - 15, y - 16, 30, 42, 5);
  ctx.fill();

  ctx.fillStyle = "#fff0b3";
  ctx.beginPath();
  ctx.ellipse(x, y + 4, 8 + spark / 13, 16 + glow / 14, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(245, 239, 224, 0.55)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x - 26, y - 6);
  ctx.lineTo(x + 26, y - 6);
  ctx.moveTo(x - 26, y + 20);
  ctx.lineTo(x + 26, y + 20);
  ctx.stroke();
}

function roundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function drawGlints(width, height) {
  const focus = getLanternFocus(width, height);
  for (let i = 0; i < Math.min(state.glints, 16); i += 1) {
    const angle = (i / Math.max(1, state.glints)) * Math.PI * 2 + frame * 0.008;
    const orbit = 58 + (i % 4) * 16;
    const x = focus.x + Math.cos(angle) * orbit;
    const y = focus.y + Math.sin(angle) * orbit * 0.45;
    ctx.fillStyle = i % 2 ? "#60c4a6" : "#efb35d";
    ctx.beginPath();
    ctx.arc(x, y, 2.5 + (i % 3), 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawParticles() {
  particles = particles.filter((particle) => particle.life > 0);
  for (const particle of particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.life -= reduceMotion ? 6 : 1;
    const alpha = clamp(particle.life / particle.maxLife, 0, 1);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function render() {
  const card = state.card;
  dom.nightCounter.textContent = `Night ${Math.min(state.night, MAX_NIGHTS)} / ${MAX_NIGHTS}`;
  dom.glintCounter.textContent = `${state.glints} ${state.glints === 1 ? "glint" : "glints"}`;
  dom.balanceLabel.textContent = balanceName();
  dom.omenLabel.textContent = `Omen ${Math.min(state.night, MAX_NIGHTS)}`;
  dom.omenTitle.textContent = card.title;
  dom.omenText.textContent = card.text;

  for (const key of Object.keys(state.stats)) {
    const value = state.stats[key];
    dom.values[key].textContent = value;
    dom.bars[key].style.width = `${value}%`;
    dom.chips[key].textContent = value;
  }

  renderChoices();
  renderJournal();

  if (reduceMotion) {
    frame += 1;
    drawSky();
  }
}

function renderChoices() {
  dom.choiceList.innerHTML = "";
  dom.resultPane.hidden = state.phase !== "resolved";
  dom.choiceList.hidden = state.phase !== "choosing";

  if (state.phase !== "choosing") return;

  state.card.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.dataset.choice = String(index);

    const label = document.createElement("strong");
    label.textContent = choice.label;
    const hint = document.createElement("span");
    hint.textContent = choice.hint;

    button.append(label, hint);
    button.addEventListener("click", () => choose(index));
    dom.choiceList.append(button);
  });
}

function renderJournal() {
  dom.journalList.innerHTML = "";
  const items = state.journal.slice(-6);
  if (items.length === 0) {
    const item = document.createElement("li");
    item.textContent = "The lantern is waiting for its first rumor.";
    dom.journalList.append(item);
    return;
  }

  for (const entry of items) {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${entry.title}</strong> ${entry.note}`;
    dom.journalList.append(item);
  }
}

function buildOracleSummary() {
  const score = scoreRun();
  return {
    ending: state.ending,
    nightCount: MAX_NIGHTS,
    glints: state.glints,
    balance: balanceName(),
    score: score.score,
    spread: score.spread,
    stats: { ...state.stats },
    journal: state.journal.map((entry, index) => ({
      night: index + 1,
      omen: entry.title,
      posture: entry.note
    })),
    skyMarks: state.skyMarks.map((mark) => ({
      night: mark.night,
      omen: mark.omen,
      temperament: mark.temperament,
      balance: mark.balance,
      glintsGained: mark.glintsGained
    }))
  };
}

function renderOracle(status = state.oracle.status, text = state.oracle.text) {
  state.oracle.status = status;
  state.oracle.text = text;

  const statusCopy = {
    idle: "Ready",
    loading: "Listening",
    ready: "Answered",
    error: "Clouded"
  };

  dom.oracleStatus.textContent = statusCopy[status] || "Ready";
  dom.oracleText.textContent = text || "Invite the lantern to read the shape of your run.";
  dom.oracleButton.disabled = status === "loading";
  dom.oracleButton.textContent = status === "loading" ? "Listening..." : "Ask the Lantern";
}

async function askOracle() {
  if (state.phase !== "ended" || state.oracle.status === "loading") return;

  renderOracle("loading", "The lantern lowers its wick and considers the evidence.");

  try {
    const response = await fetch("/.netlify/functions/oracle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(buildOracleSummary())
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || "The lantern could not reach the oracle.");
    }

    renderOracle("ready", data.reading);
    saveSession(data.reading);
  } catch (error) {
    renderOracle(
      "error",
      `${error.message} The ending still stands; only the extra shimmer is offline.`
    );
  }
}

function choose(index) {
  if (state.phase !== "choosing") return;

  const choice = state.card.choices[index];
  const temperament = choiceTemperament(choice.delta);
  for (const [key, amount] of Object.entries(choice.delta)) {
    state.stats[key] = clamp(state.stats[key] + amount);
  }

  const balanceBonus = statSpread() <= 26 ? 1 : 0;
  const gained = choice.glints + balanceBonus;
  state.glints += gained;
  state.phase = "resolved";
  state.lastPulse = {
    balance: balanceName(),
    glintsGained: gained,
    temperament
  };
  state.skyMarks.push({
    balance: state.lastPulse.balance,
    glintsGained: gained,
    night: state.night,
    omen: state.card.title,
    temperament
  });
  state.journal.push({
    title: state.card.title,
    note: choice.label.toLowerCase()
  });
  state.choices.push({
    night: state.night,
    omen: state.card.title,
    choice: choice.label,
    delta: { ...choice.delta },
    glintsGained: gained,
    balanceAfter: state.lastPulse.balance,
    statsAfter: { ...state.stats },
    timestamp: new Date().toISOString()
  });

  dom.resultText.textContent =
    choice.result +
    (balanceBonus ? " Because your inner weather held its shape, another glint answered." : "");
  addParticles(24 + gained * 8, gained > choice.glints ? "#60c4a6" : "#efb35d");
  render();
}

function nextNight() {
  if (state.phase !== "resolved") return;
  state.night += 1;

  if (state.night > MAX_NIGHTS) {
    finishRun();
    return;
  }

  state.card = state.deck[state.night - 1];
  state.phase = "choosing";
  render();
}

function finishRun() {
  state.phase = "ended";
  const score = scoreRun();
  const ending = endingCopy.find((candidate) => candidate.test(score));
  state.ending = {
    title: ending.title,
    text: ending.text
  };
  dom.endingTitle.textContent = ending.title;
  dom.endingText.textContent = ending.text;
  dom.endingGlints.textContent = state.glints;
  dom.endingBalance.textContent = `${balanceName()} ${score.score}`;
  renderOracle("idle", "");
  dom.endingOverlay.hidden = false;
  saveSession("");
  addParticles(90, "#efb35d");
}

function startRun() {
  state = createState();
  state.card = state.deck[0];
  particles = [];
  dom.endingOverlay.hidden = true;
  render();
  addParticles(28, "#efb35d");
}

dom.continueButton.addEventListener("click", nextNight);
dom.resetButton.addEventListener("click", startRun);
dom.endingResetButton.addEventListener("click", startRun);
dom.endingCloseButton.addEventListener("click", () => {
  dom.endingOverlay.hidden = true;
});
dom.oracleButton.addEventListener("click", askOracle);
dom.weatherToggle.addEventListener("click", () => {
  const isCollapsed = dom.meters.classList.toggle("is-collapsed");
  dom.weatherToggle.setAttribute("aria-expanded", String(!isCollapsed));
  dom.weatherToggleLabel.textContent = isCollapsed ? "Show" : "Hide";
});

window.addEventListener("keydown", (event) => {
  if (event.key >= "1" && event.key <= "3" && state.phase === "choosing") {
    choose(Number(event.key) - 1);
  }
  if ((event.key === "Enter" || event.key === " ") && state.phase === "resolved") {
    nextNight();
  }
  if (event.key === "Escape" && state.phase === "ended") {
    dom.endingOverlay.hidden = true;
  }
});

window.addEventListener("resize", () => {
  resizeCanvas();
  if (reduceMotion) drawSky();
});

resizeCanvas();
startRun();
if (!reduceMotion) drawSky();
