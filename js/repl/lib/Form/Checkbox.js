import { createObj } from "../../fable-library/Util.js";
import { Common$002EGenericOptions$$ToReactElement$$Z46A53D36 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7 } from "../Fulma/Common.js";
import { HTMLAttr } from "../src/Fable.React.Props.js";
import { List } from "../../fable-library/Types.js";
export function checkbox(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, Common$0024$0024$0024parseOptions, "checkbox"), function (props, children$$1) {
    const props$$1 = props;
    const children$$2 = children$$1;
    return React.createElement("label", createObj(props$$1, 1), ...children$$2);
  }, children);
}
export function input(options$$1) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "checkbox", new List(new HTMLAttr(119, "Type", "checkbox"), new List())), function (props$$3) {
    const props$$4 = props$$3;
    return React.createElement("input", createObj(props$$4, 1), ...[]);
  });
}
