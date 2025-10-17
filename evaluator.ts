// deno-lint-ignore-file no-explicit-any

export function Fun(param: any, body: any) {
  return { type: "fun", param, body };
}

export function Apply(funExp: any, argExp: any) {
  return { type: "apply", funExp, argExp };
}

export function Add(exp1: any, exp2: any) {
  return { type: "add", exp1, exp2 };
}

export function If(condition: any, thenExp: any, elseExp: any) {
  return { type: "if", condition, thenExp, elseExp };
}

export function evaluate(exp: any, env: { [index: string]: any } = {}): any {
  if (typeof exp === "number" || typeof exp === "boolean") {
    return exp;
  }
  if (typeof exp === "string") {
    return env[exp];
  }
  if (exp.type === "add") {
    return evaluate(exp.exp1, env) + evaluate(exp.exp2, env);
  }
  if (exp.type === "if") {
    const conditionValue = evaluate(exp.condition, env);
    if (conditionValue) {
      return evaluate(exp.thenExp, env);
    } else {
      return evaluate(exp.elseExp, env);
    }
  }
  if (exp.type === "fun") {
   return function(value: any) {
      const funEnv = { ...env, [exp.param]: value };
      return evaluate(exp.body, funEnv);
    };
  }
  if (exp.type === "apply") {
    const funValue = evaluate(exp.funExp, env);
    const argValue = evaluate(exp.argExp, env);
    return funValue(argValue);
  }
}
