import { assertEquals } from "@std/assert";
import { factCont, factorial } from "./factorial.ts";
import { run } from "./continuation.ts";

Deno.test("factorial", () => {
  assertEquals(factorial(5, 1), 120);
});

Deno.test("factCont", () => {
  const c = factCont;
  c.arg0 = 5;
  c.arg1 = 1;
  assertEquals(run(c).result, 120);
});
