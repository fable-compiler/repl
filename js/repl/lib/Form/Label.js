import { declare, Union } from "../fable-library.2.3.7/Types.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { union, list, type, string } from "../fable-library.2.3.7/Reflection.js";
import { HTMLAttr } from "../src/Fable.React.Props.js";
import { createObj } from "../fable-library.2.3.7/Util.js";
export const Option = declare(function Fulma_Label_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Label.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], ["For", [string]], ["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function label(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          const htmlFor = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new HTMLAttr(56, "HtmlFor", htmlFor));
        }

      case 3:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 2:
        {
          const customClass = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 4:
        {
          const modifiers = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, modifiers);
        }

      default:
        {
          const size = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, Reflection$0024$0024$0024getCaseName(size));
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "label"), function (props$$1, children$$1) {
    return React.createElement("label", createObj(props$$1, 1), ...children$$1);
  }, children);
}
