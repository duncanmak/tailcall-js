import { Continuation, setContinuation } from "./continuation.ts";

export function isEven(n: number): boolean {
  console.log("isEven", n);
  if (n == 0) {
    return true;
  } else {
    return isOdd(n - 1);
  }
}

export function isOdd(n: number): boolean {
  console.log("isOdd", n);
  if (n == 0) {
    return false;
  } else {
    return isEven(n - 1);
  }
}

export const isOddCont: Continuation = {
  arg0: undefined,
  arg1: undefined,
  result: undefined,
  apply: () => {
    if (isOddCont.arg0 == 0) {
      isOddCont.result = false;
      setContinuation(undefined);
      return;
    }
    isEvenCont.arg0 = (isOddCont.arg0 as number) - 1;
    setContinuation(isEvenCont);
  },
};

export const isEvenCont: Continuation = {
  arg0: undefined,
  arg1: undefined,
  result: undefined,
  apply: () => {
    if (isEvenCont.arg0 == 0) {
      isEvenCont.result = true;
      setContinuation(undefined);
      return;
    }
    isOddCont.arg0 = (isEvenCont.arg0 as number) - 1;
    setContinuation(isOddCont);
  },
};
