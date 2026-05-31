const LEDGER_KEY = "eNightenmentLedger";

const dom = {
  runCount: document.querySelector("#runCount"),
  avgGlints: document.querySelector("#avgGlints"),
  avgScore: document.querySelector("#avgScore"),
  commonBalance: document.querySelector("#commonBalance"),
  archiveStatus: document.querySelector("#archiveStatus"),
  sessionList: document.querySelector("#sessionList"),
  exportButton: document.querySelector("#exportButton"),
  clearButton: document.querySelector("#clearButton")
};

function readLedger() {
  try {
    const ledger = JSON.parse(localStorage.getItem(LEDGER_KEY) || "[]");
    return Array.isArray(ledger) ? ledger : [];
  } catch {
    return [];
  }
}

function formatDate(value) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(value));
}

function average(values) {
  if (!values.length) return 0;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function mostCommon(values) {
  const counts = values.reduce((map, value) => {
    map.set(value, (map.get(value) || 0) + 1);
    return map;
  }, new Map());
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "None";
}

function statLine(stats = {}) {
  return ["glow", "hush", "spark", "shadow"]
    .map((key) => `${key} ${stats[key] ?? 0}`)
    .join(" / ");
}

function renderSummary(ledger) {
  dom.runCount.textContent = ledger.length;
  dom.avgGlints.textContent = average(ledger.map((entry) => entry.final?.glints || 0));
  dom.avgScore.textContent = average(ledger.map((entry) => entry.final?.score || 0));
  dom.commonBalance.textContent = mostCommon(ledger.map((entry) => entry.final?.balance).filter(Boolean));
  dom.archiveStatus.textContent = ledger.length ? "Local only" : "No runs yet";
}

function renderSession(entry) {
  const article = document.createElement("article");
  article.className = "session-card";

  const final = entry.final || {};
  const title = final.ending?.title || "Unlabeled Dawn";
  const choices = entry.choices || [];

  article.innerHTML = `
    <div class="session-card-header">
      <div>
        <p class="kicker">${formatDate(entry.endedAt || entry.startedAt)}</p>
        <h2>${title}</h2>
      </div>
      <strong>${final.balance || "Unlit"} ${final.score ?? 0}</strong>
    </div>
    <dl class="session-metrics">
      <div><dt>Glints</dt><dd>${final.glints ?? 0}</dd></div>
      <div><dt>Spread</dt><dd>${final.spread ?? 0}</dd></div>
      <div><dt>Weather</dt><dd>${statLine(final.stats)}</dd></div>
    </dl>
    <ol class="session-choices">
      ${choices
        .map(
          (choice) => `
            <li>
              <strong>${choice.night}. ${choice.omen}</strong>
              <span>${choice.choice} / ${choice.balanceAfter} / +${choice.glintsGained} glints</span>
            </li>
          `
        )
        .join("")}
    </ol>
    ${
      final.oracleReading
        ? `<p class="session-oracle">${final.oracleReading}</p>`
        : `<p class="session-oracle is-empty">The oracle has not annotated this run.</p>`
    }
  `;

  return article;
}

function render() {
  const ledger = readLedger();
  renderSummary(ledger);
  dom.sessionList.innerHTML = "";

  if (!ledger.length) {
    const empty = document.createElement("p");
    empty.className = "archive-empty";
    empty.textContent = "Finish a run to give the archive its first lantern mark.";
    dom.sessionList.append(empty);
    return;
  }

  ledger.forEach((entry) => dom.sessionList.append(renderSession(entry)));
}

dom.exportButton.addEventListener("click", async () => {
  const text = JSON.stringify(readLedger(), null, 2);
  await navigator.clipboard.writeText(text);
  dom.archiveStatus.textContent = "Copied JSON";
});

dom.clearButton.addEventListener("click", () => {
  if (!window.confirm("Clear the local Lantern Archive?")) return;
  localStorage.removeItem(LEDGER_KEY);
  render();
});

render();
