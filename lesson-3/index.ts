import { add, subtract } from '../math';

describe('add', () => {
  it('adds 2 numbers', () => {
    expect(add(5, 5)).toBe(10);
  });
});

describe('subtract', () => {
  it('subtracts 2 numbers', () => {
    expect(subtract(7, 3)).toBe(4);
  });
});

function describe(title: string, test: () => void) {
  console.log(title);
  test();
}

function it(title: string, test: () => void) {
  try {
    test();
    console.log('  \x1b[32m%s\x1b[0m', `✓ ${title}`);
  } catch (error) {
    console.error('  \x1b[31m%s\x1b[0m', `✕ ${title} => ${error}`);
  }
}

function expect(actual) {
  return {
    toBe: expected => {
      if (actual !== expected) {
        throw new Error(`Expected ${actual} to equal ${expected}`);
      }
    }
  };
}
