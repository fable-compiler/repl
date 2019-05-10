import { declare, Union } from "../fable-library.2.3.7/Types.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Color$$$ofColor as Color$0024$0024$0024ofColor, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { union, string, int32, list, type } from "../fable-library.2.3.7/Reflection.js";
import { HTMLAttr } from "../src/Fable.React.Props.js";
import { createObj } from "../fable-library.2.3.7/Util.js";
export const Option = declare(function Fulma_Progress_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Progress.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], ["Color", [Color$0024002EIColor$0024reflection()]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Value", [int32]], ["Max", [int32]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function progress(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 4:
        {
          const max = option.fields[0] | 0;
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new HTMLAttr(74, "Max", max));
        }

      case 0:
        {
          const size = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, Reflection$0024$0024$0024getCaseName(size));
        }

      case 1:
        {
          const color = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, Color$0024$0024$0024ofColor(color));
        }

      case 2:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 5:
        {
          const customClass = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 6:
        {
          const modifiers = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, modifiers);
        }

      default:
        {
          const value = option.fields[0] | 0;
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new HTMLAttr(121, "Value", value));
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "progress"), function (props$$1, children$$1) {
    return React.createElement("progress", createObj(props$$1, 1), ...children$$1);
  }, children);
}
