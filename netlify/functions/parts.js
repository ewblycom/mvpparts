const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Content-Type": "application/json; charset=utf-8"
};

function json(code, body) {
  return { statusCode: code, headers: cors, body: JSON.stringify(body) };
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers: cors, body: "" };
  const q = event.queryStringParameters || {};
  let body = {};
  if (event.body) {
    try { body = JSON.parse(event.body); } catch { body = {}; }
  }
  const vin = String(q.vin || body.vin || "").toUpperCase();
  const part = String(q.part || body.part || "").trim();
  if (!process.env.RAPIDAPI_KEY) {
    return json(501, { ok: false, error: "missing_rapidapi_key" });
  }
  return json(200, { ok: true, vin: vin || null, part: part || null });
};
