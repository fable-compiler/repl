import { List, declare, Union } from "../fable-library.2.3.7/Types.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { bool, union, string, list, type } from "../fable-library.2.3.7/Reflection.js";
import { createObj } from "../fable-library.2.3.7/Util.js";
export const Option = declare(function Fulma_Breadcrumb_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Breadcrumb.Option", [], Option, () => ["is-centered", "is-right", "has-arrow-separator", "has-bullet-separator", "has-dot-separator", "has-succeeds-separator", ["Size", [Size$0024002EISize$0024reflection()]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function breadcrumb(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 7:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 8:
        {
          const customClass = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 9:
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

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "breadcrumb"), function (props$$1, children$$1) {
    return React.createElement("nav", createObj(props$$1, 1), ...children$$1);
  }, new List(React.createElement("ul", {}, ...children), new List()));
}
export const Item$002EOption = declare(function Fulma_Breadcrumb_Item_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Item$002EOption$reflection() {
  return union("Fulma.Breadcrumb.Item.Option", [], Item$002EOption, () => [["is-active", [bool]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function item(options$$1, children$$6) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, option$$1) {
    switch (option$$1.tag) {
      case 1:
        {
          const props$$6 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, props$$6);
        }

      case 2:
        {
          const customClass$$1 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, customClass$$1);
        }

      case 3:
        {
          const modifiers$$1 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$1, modifiers$$1);
        }

      default:
        {
          const state = option$$1.fields[0];

          if (state) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
          } else {
            return result$$1;
          }
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, parseOptions$$1), function (props$$7, children$$7) {
    return React.createElement("li", createObj(props$$7, 1), ...children$$7);
  }, children$$6);
}
