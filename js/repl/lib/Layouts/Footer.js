import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Common$$$genericParse as Common$0024$0024$0024genericParse } from "../Fulma/Common.js";
import { L } from "../../fable-core/Types.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export function footer(options, children) {
  const opts = Common$0024$0024$0024genericParse(options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("footer", L(opts.CustomClass, opts.Modifiers), L());
  return createElement("div", createObj(L(classes, opts.Props), 1), ...children);
}
