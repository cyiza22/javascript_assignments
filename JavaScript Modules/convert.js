export function convertCtoF(c) {
  const f = (c * 9) / 5 + 32;

  const label =
    c > 30 ? "Hot" : c >= 15 ? "Warm" : "Cold";

  return `${c}°C = ${f}°F (${label})`;
}
