import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Common$$$genericParse as Common$0024$0024$0024genericParse } from "../Fulma/Common.js";
import { L } from "../../fable-core/Types.js";
import { createObj } from "../../fable-core/Util.js";
import { Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
const createElement = React.createElement;
export function checkbox(options, children) {
  const opts = Common$0024$0024$0024genericParse(options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("checkbox", L(opts.CustomClass, opts.Modifiers), L());
  return createElement("label", createObj(L(classes, opts.Props), 1), ...children);
}
export function input(options$$1) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$1);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("", L(opts$$1.CustomClass, opts$$1.Modifiers), L());
  return createElement("input", createObj(L(classes$$1, L(new Props$0024002EHTMLAttr(117, "Type", "checkbox"), opts$$1.Props)), 1), ...L());
}
