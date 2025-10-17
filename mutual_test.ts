import { assert } from "@std/assert";
import { isEven, isOdd, isOddCont } from "./mutual.ts";
import { run } from "./continuation.ts";

Deno.test("odd / even", () => {
  assert(isOdd(5));
  assert(isEven(6));
});

Deno.test("odd / even continuation", () => {
  const c = isOddCont;
  c.arg = 5000001;
  assert(run(c).result);
});
