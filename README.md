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

This is also an experiment to implement tail-call elimintation in an interpreter that supports delimited continuations.

**Algebraic Effects in JavaScript part 1 - continuations and control transfer**
<https://fnayre.github.io/2018-11-19-algebraic-effects-series-1/>

**Algebraic Effects in JavaScript part 2 - Capturing continuations with Generators**
<https://fnayre.github.io/2018-11-19-algebraic-effects-series-2/>