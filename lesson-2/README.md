# Lesson 2 - Building an Assertion Library

It's easy to see that writing tests this way is going to get messy quickly. Let's see if we can provide a better API for making assertions.

Our goal is to provide a chai-like syntax for making assertions that our code is working as expected.

```ts
expect(add(5, 5)).toBe(10);
expect(subtract(7, 3)).toBe(5);
```
