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
  const fields = [
    "VIN", "ErrorCode", "ErrorText", "Make", "Manufacturer", "Model", "ModelYear",
    "Trim", "Series", "BodyClass", "VehicleType", "Doors", "DriveType",
    "EngineCylinders", "DisplacementL", "EngineHP", "FuelTypePrimary",
    "TransmissionStyle", "PlantCity", "PlantCountry"
  ];
  const out = {};
  fields.forEach((k) => { out[k] = row[k] || ""; });
  out.ok = String(row.ErrorCode || "") === "0";
  out.summary = [row.Make, row.Model, row.ModelYear, row.Trim, row.DisplacementL ? `${row.DisplacementL}L` : "", row.FuelTypePrimary]
    .filter(Boolean)
    .join(" ");
  return out;
}

async function decodeVin(vin) {
  const clean = String(vin || "").toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, "");
  if (clean.length !== 17) {
    return { ok: false, error: "vin_length", vin: clean };
  }
  const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${encodeURIComponent(clean)}?format=json`;
  const res = await fetch(url);
  if (!res.ok) return { ok: false, error: "nhtsa_http", status: res.status, vin: clean };
  const data = await res.json();
  const row = (data.Results && data.Results[0]) || {};
  return pick(row);
}

exports.decodeVin = decodeVin;

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors, body: "" };
  }
  const vin = (event.queryStringParameters && event.queryStringParameters.vin) || "";
  try {
    const out = await decodeVin(vin);
    return json(out.ok || out.ErrorCode ? 200 : 400, out);
  } catch (err) {
    return json(500, { ok: false, error: "decode_fail" });
  }
};
