import { assertEquals } from "@std/assert/equals";
import { Add, Apply, evaluate, Fun, If } from "./evaluator.ts";

Deno.test("(#%plain-app (lambda (x) (+ x x)))", () => {
  assertEquals(evaluate(Apply(Fun("x", Add("x", "x")), 1)), 2);
});

Deno.test("if", () => {
  assertEquals(evaluate(If(true, 2, 3)), 2);
  assertEquals(evaluate(If(false, 2, 3)), 3);
});


