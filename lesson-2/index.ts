import { add, subtract } from "../math";

expect(add(5, 5)).toBe(10);
expect(subtract(7, 3)).toBe(5);

function expect(actual) {
  return {
    toBe: expected => {
      if (actual !== expected) {
        throw new Error(`Expected ${actual} to equal ${expected}`);
      }
    }
  };
}
