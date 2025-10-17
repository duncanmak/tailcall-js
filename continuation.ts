  // deno-lint-ignore-file no-explicit-any

export interface Continuation {
  result?: unknown;
  apply(): void;
}

export interface Continuation1 extends Continuation {
  arg: any;
}

export interface Continuation2 extends Continuation {
  arg0:any;
  arg1: any;
}

let $CONTINUATION: Continuation | undefined;

export function setContinuation(cont?: Continuation) {
  $CONTINUATION = cont;
}

export function getContinuation() {
  return $CONTINUATION;
}

export function run(cont: Continuation): Continuation {
  let prev = cont;
  setContinuation(cont);
  while (true) {
    const current = getContinuation();

    if (current === undefined) {
      return prev;
    } else {
      prev = current;
      current.apply();
    }
  }
}


