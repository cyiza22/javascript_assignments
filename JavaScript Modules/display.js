import { multiply } from "./operations.js";

const a = 6;
const b = 7;

const result = multiply(a, b);

const status = result % 2 === 0 ? "Even Number" : "Odd Number";

console.log(`${a} * ${b} = ${result} (${status})`);
