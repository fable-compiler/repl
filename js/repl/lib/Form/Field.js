import { declare, Union } from "../fable-library.2.3.7/Types.js";
import { union, list, type, string } from "../fable-library.2.3.7/Reflection.js";
import { Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Size$002EISize$reflection as Size$0024002EISize$0024reflection, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.3.7/Util.js";
export const Option = declare(function Fulma_Field_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Field.Option", [], Option, () => ["has-addons", "has-addons-centered", "has-addons-right", "has-addons-fullwidth", "is-grouped", "is-grouped-centered", "is-grouped-right", "is-grouped-multiline", "is-horizontal", "is-expanded", ["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Label$002EOption = declare(function Fulma_Field_Label_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Label$002EOption$reflection() {
  return union("Fulma.Field.Label.Option", [], Label$002EOption, () => [["Size", [Size$0024002EISize$0024reflection()]], "is-normal", ["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function body(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, Common$0024$0024$0024parseOptions, "field-body"), function (props, children$$1) {
    return React.createElement("div", createObj(props, 1), ...children$$1);
  }, children);
}
export function label(options$$1, children$$4) {
  const parseOptions = function parseOptions(result$$1, option$$1) {
    switch (option$$1.tag) {
      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
        }

      case 3:
        {
          const props$$3 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, props$$3);
        }

      case 2:
        {
          const customClass = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, customClass);
        }

      case 4:
        {
          const modifiers = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$1, modifiers);
        }

      default:
        {
          const size = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, Reflection$0024$0024$0024getCaseName(size));
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, parseOptions, "field-label"), function (props$$4, children$$5) {
    return React.createElement("div", createObj(props$$4, 1), ...children$$5);
  }, children$$4);
}
export function fieldView(element, options$$2, children$$8) {
  const parseOptions$$1 = function parseOptions$$1(result$$2, option$$2) {
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
          const props$$7 = option$$2.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$2, props$$7);
        }

      case 10:
        {
          const customClass$$1 = option$$2.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$2, customClass$$1);
        }

      case 12:
        {
          const modifiers$$1 = option$$2.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$2, modifiers$$1);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$2, "has-addons"), option$$2);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, parseOptions$$1, "field"), element, children$$8);
}
export function div(x, y) {
  return fieldView(function (props$$8, children$$9) {
    return React.createElement("div", createObj(props$$8, 1), ...children$$9);
  }, x, y);
}
export function p(x$$1, y$$1) {
  return fieldView(function (props$$11, children$$12) {
    return React.createElement("p", createObj(props$$11, 1), ...children$$12);
  }, x$$1, y$$1);
}
