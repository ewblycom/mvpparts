const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Content-Type": "application/json; charset=utf-8"
};
function json(statusCode, body) {
  return { statusCode, headers: cors, body: JSON.stringify(body) };
}
function pick(row) {
  const fields = ["VIN","ErrorCode","ErrorText","Make","Manufacturer","Model","ModelYear","Trim","Series","BodyClass","VehicleType","Doors","DriveType","EngineCylinders","DisplacementL","EngineHP","EngineModel","FuelTypePrimary","TransmissionStyle","TransmissionSpeeds"];
  const out = {};
  fields.forEach((k) => { out[k] = row[k] || ""; });
  out.ok = String(row.ErrorCode || "") === "0";
  return out;
}
async function decodeVin(vin) {
  const clean = String(vin || "").toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, "");
  if (clean.length !== 17) return { ok: false, error: "vin_length", vin: clean };
  const url = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/" + encodeURIComponent(clean) + "?format=json";
  const res = await fetch(url);
  if (!res.ok) return { ok: false, error: "nhtsa_http", status: res.status, vin: clean };
  const data = await res.json();
  return pick((data.Results && data.Results[0]) || {});
}
exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers: cors, body: "" };
  const vin = (event.queryStringParameters && event.queryStringParameters.vin) || "";
  try { return json(200, await decodeVin(vin)); }
  catch (err) { return json(500, { ok: false, error: "decode_fail" }); }
};
