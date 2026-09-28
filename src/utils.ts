/** Arithmetic utilities for the calculator package */

/** Return the sum of *a* and *b*. */
export function add(a: number, b: number): number {
  return a + b;
}

/** Return the difference of *a* and *b*. */
export function subtract(a: number, b: number): number {
  return a - b;
}

/** Return the product of *a* and *b*. */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Return the quotient of *a* and *b*.
 *
 * @throws Error If *b* is zero.
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("division by zero");
  }
  return a / b;
}
