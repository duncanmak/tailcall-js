import { Continuation, setContinuation } from "./continuation.ts";

export function factorial(num: number, acc: number) {
  if (num == 0) {
    return acc;
  }
  return factorial(num - 1, num * acc);
}

export const factCont: Continuation = {
  apply() {
    const { arg0, arg1 } = this;
    if (arg0 == 0) {
      this.result = arg1;
      setContinuation(undefined);
      return;
    }
    this.arg1 = arg0 * arg1;
    this.arg0 = arg0 - 1;
    setContinuation(this);
  },
  result: undefined,
  arg0: undefined,
  arg1: undefined,
};
