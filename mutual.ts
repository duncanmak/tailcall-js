import { Continuation1, setContinuation } from "./continuation.ts";

export function isEven(n: number): boolean {
  // console.log("isEven", n);
  if (n == 0) {
    return true;
  } else {
    return isOdd(n - 1);
  }
}

export function isOdd(n: number): boolean {
  // console.log("isOdd", n);
  if (n == 0) {
    return false;
  } else {
    return isEven(n - 1);
  }
}

export const isOddCont: Continuation1 = {
  arg: undefined,
  result: undefined,
  apply() {
    const { arg } = this;
    if (arg == 0) {
      this.result = false;
      setContinuation(undefined);
      return;
    }
    isEvenCont.arg = arg - 1;
    setContinuation(isEvenCont);
    return;
  },
};

export const isEvenCont: Continuation1 = {
  arg: undefined,
  result: undefined,
  apply() {
    const { arg } = this;
    if (arg == 0) {
      this.result = true;
      setContinuation(undefined);
      return;
    }
    isOddCont.arg = arg - 1;
    setContinuation(isOddCont);
  },
};
