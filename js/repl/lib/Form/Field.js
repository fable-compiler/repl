import { declare, Union } from "../../fable-library/Types.js";
import { union_type, list_type, class_type, string_type } from "../../fable-library/Reflection.js";
import { Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Size$002EISize$reflection as Size$0024002EISize$0024reflection, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../../fable-library/Util.js";
export const Option = declare(function Fulma_Field_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Option$reflection() {
  return union_type("Fulma.Field.Option", [], Option, () => ["has-addons", "has-addons-centered", "has-addons-right", "has-addons-fullwidth", "is-grouped", "is-grouped-centered", "is-grouped-right", "is-grouped-multiline", "is-horizontal", "is-expanded", ["CustomClass", [["Item", string_type]]], ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export const Label$002EOption = declare(function Fulma_Field_Label_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Label$002EOption$reflection() {
  return union_type("Fulma.Field.Label.Option", [], Label$002EOption, () => [["Size", [["Item", Size$0024002EISize$0024reflection()]]], "is-normal", ["CustomClass", [["Item", string_type]]], ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export function body(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, Common$0024$0024$0024parseOptions, "field-body"), function (props, children$$1) {
    const props$$1 = props;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$1, 1), ...children$$2);
  }, children);
}
export function label(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, function parseOptions(result$$1, option$$1) {
    switch (option$$1.tag) {
      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, option$$1.fields[0]);
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, option$$1.fields[0]);
        }

      case 4:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$1, option$$1.fields[0]);
        }

      default:
        {
          const arg00 = Reflection$0024$0024$0024getCaseName(option$$1.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, arg00);
        }
    }
  }, "field-label"), function (props$$4, children$$5) {
    const props$$5 = props$$4;
    const children$$6 = children$$5;
    return React.createElement("div", createObj(props$$5, 1), ...children$$6);
  }, children$$4);
}
export function fieldView(element, options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, function parseOptions$$1(result$$2, option$$2) {
    switch (option$$2.tag) {
      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$2, "has-addons"), option$$2);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$2, "has-addons"), option$$2);
        }

      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$2, "is-grouped"), option$$2);
        }

      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$2, "is-grouped"), option$$2);
        }

      case 7:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$2, "is-grouped"), option$$2);
        }

      case 0:
      case 4:
      case 8:
      case 9:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$2, option$$2);
        }

      case 11:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$2, option$$2.fields[0]);
        }

      case 10:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$2, option$$2.fields[0]);
        }

      case 12:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$2, option$$2.fields[0]);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$2, "has-addons"), option$$2);
        }
    }
  }, "field"), element, children$$8);
}
export function div(x, y) {
  return fieldView(function (props$$8, children$$9) {
    const props$$9 = props$$8;
    const children$$10 = children$$9;
    return React.createElement("div", createObj(props$$9, 1), ...children$$10);
  }, x, y);
}
export function p(x$$1, y$$1) {
  return fieldView(function (props$$11, children$$12) {
    const props$$12 = props$$11;
    const children$$13 = children$$12;
    return React.createElement("p", createObj(props$$12, 1), ...children$$13);
  }, x$$1, y$$1);
}
