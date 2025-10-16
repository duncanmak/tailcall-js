import { assertEquals } from "@std/assert";
import { factCont, factorial } from "./factorial.ts";
import { run } from "./continuation.ts";

Deno.test("factorial", () => {
  assertEquals(factorial(5, 1), 120);
});

Deno.test("factCont", () => {
  assertEquals(run(factCont(5, 1)).result, 120);
});
