import { declare, Union } from "../../fable-library/Types.js";
import { Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Color$$$ofColor as Color$0024$0024$0024ofColor, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection } from "../Fulma/Common.js";
import { union_type, string_type, list_type, class_type } from "../../fable-library/Reflection.js";
import { createObj } from "../../fable-library/Util.js";
export const Option = declare(function Fulma_Message_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Option$reflection() {
  return union_type("Fulma.Message.Option", [], Option, () => [["Color", [["Item", Color$0024002EIColor$0024reflection()]]], ["Size", [["Item", Size$0024002EISize$0024reflection()]]], ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["CustomClass", [["Item", string_type]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export function message(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          const arg00$$1 = Reflection$0024$0024$0024getCaseName(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00$$1);
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 4:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }

      default:
        {
          const arg00 = Color$0024$0024$0024ofColor(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00);
        }
    }
  }, "message"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("article", createObj(props$$2, 1), ...children$$2);
  }, children);
}
export function header(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "message-header"), function (props$$4, children$$5) {
    const props$$5 = props$$4;
    const children$$6 = children$$5;
    return React.createElement("div", createObj(props$$5, 1), ...children$$6);
  }, children$$4);
}
export function body(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "message-body"), function (props$$7, children$$9) {
    const props$$8 = props$$7;
    const children$$10 = children$$9;
    return React.createElement("div", createObj(props$$8, 1), ...children$$10);
  }, children$$8);
}
