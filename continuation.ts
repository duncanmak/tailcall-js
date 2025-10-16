export interface Continuation {
  arg0: unknown;
  arg1: unknown;
  result?: unknown;
  apply(): void;
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
