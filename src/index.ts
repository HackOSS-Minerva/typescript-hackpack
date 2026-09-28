/** Entry point for the calculator package */

import { add, divide, multiply, subtract } from "./utils.ts";

/** Run a small demo of the calculator utilities. */
export function main(): void {
  const a = 10;
  const b = 5;
  console.log(`${a} + ${b} = ${add(a, b)}`);
  console.log(`${a} - ${b} = ${subtract(a, b)}`);
  console.log(`${a} * ${b} = ${multiply(a, b)}`);
  console.log(`${a} / ${b} = ${divide(a, b)}`);
}

main();
