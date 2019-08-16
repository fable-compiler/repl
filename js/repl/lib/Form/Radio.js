import { List, declare, Union } from "../fable-library.2.3.18/Types.js";
import { union, list, type, string } from "../fable-library.2.3.18/Reflection.js";
import { Common$002EGenericOptions$$ToReactElement$$Z46A53D36 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36, Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.3.18/Util.js";
import { HTMLAttr } from "../src/Fable.React.Props.js";
export const Input$002EOption = declare(function Fulma_Radio_Input_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Input$002EOption$reflection() {
  return union("Fulma.Radio.Input.Option", [], Input$002EOption, () => [["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Name", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function radio(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, Common$0024$0024$0024parseOptions, "radio"), function (props, children$$1) {
    return React.createElement("label", createObj(props, 1), ...children$$1);
  }, children);
}
export function input(options$$1) {
  const parseOptions = function parseOptions(result$$1, option$$1) {
    switch (option$$1.tag) {
      case 1:
        {
          const props$$3 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, props$$3);
        }

      case 0:
        {
          const customClass = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, customClass);
        }

      case 3:
        {
          const modifiers = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$1, modifiers);
        }

      default:
        {
          const name = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result$$1, new HTMLAttr(83, "Name", name));
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, parseOptions, "radio", new List(new HTMLAttr(119, "Type", "radio"), new List())), function (props$$4) {
    return React.createElement("input", createObj(props$$4, 1), ...[]);
  });
}
