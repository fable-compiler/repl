import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Common$$$genericParse as Common$0024$0024$0024genericParse } from "../Fulma/Common.js";
import { List } from "../fable-library.2.2.0-beta-010/Types.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export function box$0027(options, children) {
  const opts = Common$0024$0024$0024genericParse(options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("box", new List(opts.CustomClass, opts.Modifiers), new List());
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
