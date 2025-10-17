import { assertEquals, assert } from "@std/assert";
import { Add, Apply, Equal, evaluate, Fun, If } from "./evaluator.ts";

Deno.test("(#%plain-app (lambda (x) (+ x x)))", () => {
  assertEquals(evaluate(Apply(Fun("x", Add("x", "x")), 1)), 2);
});

Deno.test("if", () => {
  assertEquals(evaluate(If(true, 2, 3)), 2);
  assertEquals(evaluate(If(false, 2, 3)), 3);
});


Deno.test("mutual", () => {
  const isOdd = evaluate(Fun("n", If(Equal('n', 0), false, Apply("isEven", Add("n", -1)))));
  const isEven = evaluate(Fun("n", If(Equal('n', 0), true, Apply("isOdd", Add("n", -1)))));
  const env = { isOdd, isEven };
  assert(evaluate(Apply("isEven", 0), env));
  assert(evaluate(Apply("isOdd", 1), env));
});