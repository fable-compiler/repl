import { some } from "../../fable-library/Option.js";
export function onError(text, ex) {
  console.error(some(text), ex);
}
export function toConsole(text$$1, o) {
  console.log(some(text$$1), o);
}
