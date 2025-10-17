import { expect, test } from "bun:test";
import { factorial } from "./factorial.ts";
import { isEven, isOdd } from "./mutual.ts";

test("factorial", () => {
  expect(factorial(5, 1)).toBe(120);
});

test("odd / even", () => {
  expect(isOdd(500001)).toBe(true);
  expect(isEven(6)).toBe(true);
});
