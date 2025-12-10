function validate(a, b) {
  return typeof a === "number" && typeof b === "number";
}

export function add(a, b) {
  if (!validate(a, b)) return "Invalid input";
  return a + b;
}

export function subtract(a, b) {
  if (!validate(a, b)) return "Invalid input";
  return a - b;
}

export function multiply(a, b) {
  if (!validate(a, b)) return "Invalid input";
  return a * b;
}

export function divide(a, b) {
  if (!validate(a, b)) return "Invalid input";
  if (b === 0) return "Error: Division by zero";
  return a / b;
}

export function power(base, exponent) {
  if (!validate(base, exponent)) return "Invalid input";
  return Math.pow(base, exponent);
}
