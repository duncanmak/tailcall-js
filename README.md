# Tail-call elimination in Javascript

This project implements the examples (`factorial`, mutual `isOdd`/`isEven`) from
these two papers:

**Memory-efficient Tail Calls in the JVM with Imperative Functional Objects**
<https://i.cs.hku.hk/~bruno/papers/APLAS2015.pdf>

**Tail Call Elimination and Data Representation for Functional Languages on the
Java Virtual Machine** <https://plg.uwaterloo.ca/~olhotak/pubs/cc18.pdf>

To run the two tests, `deno test`.

Of note, `bun.ts` shows that JSC does implement tail-call elimination, so the
IFO technique is not necessary.

`bun test ./bun.ts`
