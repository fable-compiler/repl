import { declare } from "../../fable-core/Types.js";
import { Result, bindOk } from "../../fable-core/Option.js";
export function unwrapResult(a) {
  if (a.tag === 1) {
    const b = a.fields[0];
    throw b;
  } else {
    const a$$1 = a.fields[0];
    return a$$1;
  }
}
export const ResultBuilder = declare(function ResultBuilder() {});
export function ResultBuilder$$$$002Ector() {
  return this != null ? ResultBuilder.call(this) : new ResultBuilder();
}
export function ResultBuilder$$Bind$$764BA1D3(this$, m, f) {
  return bindOk(f, m);
}
export function ResultBuilder$$Return$$1505(this$$$1, a$$2) {
  return new Result(0, "Ok", a$$2);
}
export function ResultBuilder$$ReturnFrom$$1505(this$$$2, m$$1) {
  return m$$1;
}
export function ResultBuilder$$Zero(this$$$3) {
  return ResultBuilder$$Return$$1505(this$$$3);
}
export function ResultBuilder$$Combine$$Z57BB8787(this$$$4, left, right) {
  return ResultBuilder$$Bind$$764BA1D3(this$$$4, left, function () {
    return right;
  });
}
export const result = ResultBuilder$$$$002Ector();
