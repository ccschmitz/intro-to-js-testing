export const expect = (actual) => {
  return {
    toBe: expected => {
      if (actual !== expected) {
        throw new Error(`Expected ${actual} to equal ${expected}`);
      }
    },
    toContain: expected => {
      if (actual.indexOf(expected) === -1) {
        throw new Error(`Expected ${actual} to contain ${expected}`);
      }
    }
  };
}
