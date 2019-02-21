import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Common$$$genericParse as Common$0024$0024$0024genericParse } from "../Fulma/Common.js";
import { List } from "../fable-library.2.2.0-beta-010/Types.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
import { Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
const createElement = React.createElement;
export function checkbox(options, children) {
  const opts = Common$0024$0024$0024genericParse(options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("checkbox", new List(opts.CustomClass, opts.Modifiers), new List());
  return createElement("label", createObj(new List(classes, opts.Props), 1), ...children);
}
export function input(options$$1) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$1);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("input", createObj(new List(classes$$1, new List(new Props$0024002EHTMLAttr(117, "Type", "checkbox"), opts$$1.Props)), 1), ...new List());
}
