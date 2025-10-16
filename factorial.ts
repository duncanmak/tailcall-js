import { Continuation, setContinuation } from "./continuation.ts";

export function factorial(num: number, acc: number) {
  if (num == 0) {
    return acc;
  }
  return factorial(num - 1, num * acc);
}

export function factCont(num: number, acc: number): Continuation {
  const self: Continuation = {
    apply: () => {
      if (self.arg0 == 0) {
        self.result = self.arg1;
        setContinuation(undefined);
        return;
      }

      self.arg1 = (self.arg0 as number) * (self.arg1 as number);
      self.arg0 = (self.arg0 as number) - 1;
      setContinuation(self);
    },
    result: undefined,
    arg0: num,
    arg1: acc,
  };

  return self;
}
