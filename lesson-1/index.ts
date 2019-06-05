import { add, subtract } from "./math";

let value = add(5, 5);
let expected = 10;

if (value !== expected) {
  throw new Error(`Expected ${value} to equal ${expected}`);
}

value = subtract(7, 3);
expected = 4;

if (value !== expected) {
  throw new Error(`Expected ${value} to equal ${expected}`);
}
