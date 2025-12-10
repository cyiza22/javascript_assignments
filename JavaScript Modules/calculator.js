import { add, subtract, multiply, divide, power } from "./operations.js";

const sum = add(10, 20);
const diff = subtract(30, 12);
const product = multiply(5, 6);
const quotient = divide(50, 2);
const pow = power(2, 5);

const results = { sum, diff, product, quotient, pow };

for (const key in results) {
  console.log(`${key} -> ${results[key]}`);
}
