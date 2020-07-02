import { declare, Union } from "../../fable-library/Types.js";
import { Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { union_type, list_type, class_type, string_type } from "../../fable-library/Reflection.js";
import { createObj } from "../../fable-library/Util.js";
export const Option = declare(function Fulma_Content_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Option$reflection() {
  return union_type("Fulma.Content.Option", [], Option, () => [["Size", [["Item", Size$0024002EISize$0024reflection()]]], ["CustomClass", [["Item", string_type]]], ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export function content(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    switch (option.tag) {
      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }

      default:
        {
          const arg00 = Reflection$0024$0024$0024getCaseName(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00);
        }
    }
  }, "content"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$2, 1), ...children$$2);
  }, children);
}
export const Ol$002EOption = declare(function Fulma_Content_Ol_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Ol$002EOption$reflection() {
  return union_type("Fulma.Content.Ol.Option", [], Ol$002EOption, () => ["is-lower-roman", "is-upper-roman", "is-lower-alpha", "is-upper-alpha", ["CustomClass", [["Item", string_type]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]], ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]]]);
}
export function Ol$$$ol(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, function parseOptions$$1(result$$1, option$$1) {
    switch (option$$1.tag) {
      case 1:
      case 2:
      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
        }

      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, option$$1.fields[0]);
        }

      case 4:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, option$$1.fields[0]);
        }

      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$1, option$$1.fields[0]);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
        }
    }
  }), function (props$$5, children$$5) {
    const props$$6 = props$$5;
    const children$$6 = children$$5;
    return React.createElement("ol", createObj(props$$6, 1), ...children$$6);
  }, children$$4);
}
