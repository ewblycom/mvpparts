const DATA_SOURCE_ID = "3c48be7f-a16a-8081-9f70-000bbc0235ad";
const NOTION_VERSION = "2026-03-11";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json; charset=utf-8"
};

function json(statusCode, body) {
  return { statusCode, headers: cors, body: JSON.stringify(body) };
}

function text(value) {
  const s = String(value || "").trim();
  return s ? [{ type: "text", text: { content: s.slice(0, 1900) } }] : [];
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors, body: "" };
  }
  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "method" });
  }

  const token = process.env.NOTION_TOKEN;
  if (!token) {
    return json(500, { ok: false, error: "missing_token" });
  }

  let data = {};
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { ok: false, error: "bad_json" });
  }

  if (data.website) return json(200, { ok: true, ignored: true });

  const auto = String(data.auto || "").trim();
  const vin = String(data.vin || "").trim();
  const jmeno = String(data.jmeno || "").trim();
  const telefon = String(data.telefon || "").trim();
  const komentar = String(data.komentar || "").trim();
  const jazyk = data.jazyk === "RU" ? "RU" : "CS";

  if (!auto || !vin || !jmeno || !telefon) {
    return json(400, { ok: false, error: "required" });
  }

  const today = new Date().toISOString().slice(0, 10);
  const title = `${jazyk} — ${auto}`.slice(0, 80);

  let vinNote = "";
  try {
    const { decodeVin } = require("./vin");
    const decoded = await decodeVin(vin);
    if (decoded && decoded.summary) {
      vinNote = `NHTSA: ${decoded.summary}${decoded.ok ? "" : " (" + (decoded.ErrorText || decoded.error || "check") + ")"}`;
    }
  } catch {
    vinNote = "";
  }

  const notionRes = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      parent: { type: "data_source_id", data_source_id: DATA_SOURCE_ID },
      properties: {
        Název: { title: text(title) },
        Auto: { rich_text: text(auto) },
        VIN: { rich_text: text(vin) },
        Jméno: { rich_text: text(jmeno) },
        Telefon: { phone_number: telefon.slice(0, 32) },
        Komentář: { rich_text: text(komentar) },
        Jazyk: { select: { name: jazyk } },
        Status: { select: { name: "Nová" } },
        Datum: { date: { start: today } },
        "LKQ poznámka": { rich_text: text(vinNote) }
      }
    })
  });

  const notionBody = await notionRes.json();
  if (!notionRes.ok) {
    return json(502, { ok: false, error: "notion", detail: notionBody.message || notionRes.status });
  }

  return json(200, { ok: true, id: notionBody.id });
};
