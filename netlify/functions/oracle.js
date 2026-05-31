const OPENAI_URL = "https://api.openai.com/v1/responses";
const DEFAULT_MODEL = "gpt-5-nano";

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(body)
  };
}

function clampText(value, maxLength = 240) {
  return String(value || "").slice(0, maxLength);
}

function sanitizeRun(run) {
  const stats = run?.stats || {};
  return {
    ending: {
      title: clampText(run?.ending?.title, 90),
      text: clampText(run?.ending?.text, 360)
    },
    nightCount: Number(run?.nightCount) || 8,
    glints: Number(run?.glints) || 0,
    balance: clampText(run?.balance, 40),
    score: Number(run?.score) || 0,
    spread: Number(run?.spread) || 0,
    stats: {
      glow: Number(stats.glow) || 0,
      hush: Number(stats.hush) || 0,
      spark: Number(stats.spark) || 0,
      shadow: Number(stats.shadow) || 0
    },
    journal: Array.isArray(run?.journal)
      ? run.journal.slice(0, 8).map((entry) => ({
          night: Number(entry.night) || 0,
          omen: clampText(entry.omen, 90),
          posture: clampText(entry.posture, 90)
        }))
      : [],
    skyMarks: Array.isArray(run?.skyMarks)
      ? run.skyMarks.slice(0, 8).map((mark) => ({
          night: Number(mark.night) || 0,
          omen: clampText(mark.omen, 90),
          temperament: clampText(mark.temperament, 20),
          balance: clampText(mark.balance, 30),
          glintsGained: Number(mark.glintsGained) || 0
        }))
      : []
  };
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed." });
  }

  if (!process.env.OPENAI_API_KEY) {
    return json(503, { error: "OPENAI_API_KEY is not configured for this Netlify site." });
  }

  let run;
  try {
    run = sanitizeRun(JSON.parse(event.body || "{}"));
  } catch {
    return json(400, { error: "The oracle received unreadable run data." });
  }

  const prompt = [
    "You are the Lantern Oracle inside E-Nightenment, a playful browser koan arcade.",
    "Write an end-of-run reading for the player based only on the compact run data.",
    "Voice: lucid, warm, lightly funny, mystical without being grandiose.",
    "Length: 2 short paragraphs, 90-130 words total.",
    "Mention one concrete omen or posture, one inner-weather pattern, and one closing invitation.",
    "Do not give medical, spiritual authority, or life advice. Do not mention being an AI.",
    "",
    JSON.stringify(run)
  ].join("\n");

  try {
    const response = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || DEFAULT_MODEL,
        input: prompt,
        max_output_tokens: 240,
        reasoning: { effort: "minimal" }
      })
    });

    const data = await response.json();
    if (!response.ok) {
      return json(response.status, {
        error: data?.error?.message || "The oracle did not answer."
      });
    }

    const reading =
      data.output_text ||
      data.output
        ?.flatMap((item) => item.content || [])
        .map((content) => content.text)
        .filter(Boolean)
        .join("\n\n");

    if (!reading) {
      return json(502, { error: "The oracle answered in an unexpected shape." });
    }

    return json(200, { reading: reading.trim() });
  } catch {
    return json(502, { error: "The oracle could not be reached." });
  }
};
