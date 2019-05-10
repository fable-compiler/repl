import { createObj } from "../fable-library.2.3.7/Util.js";
import { Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7 } from "../Fulma/Common.js";
import { declare, Union } from "../fable-library.2.3.7/Types.js";
import { union, lambda, unit, string, list as list$$1, type, bool } from "../fable-library.2.3.7/Reflection.js";
import { HTMLAttr, DOMAttr } from "../src/Fable.React.Props.js";
export function menu(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, Common$0024$0024$0024parseOptions, "menu"), function (props, children$$1) {
    return React.createElement("aside", createObj(props, 1), ...children$$1);
  }, children);
}
export function label(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "menu-label"), function (props$$3, children$$5) {
    return React.createElement("p", createObj(props$$3, 1), ...children$$5);
  }, children$$4);
}
export function list(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "menu-list"), function (props$$6, children$$9) {
    return React.createElement("ul", createObj(props$$6, 1), ...children$$9);
  }, children$$8);
}
export const Item$002EOption = declare(function Fulma_Menu_Item_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Item$002EOption$reflection() {
  return union("Fulma.Menu.Item.Option", [], Item$002EOption, () => [["is-active", [bool]], ["Props", [list$$1(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["OnClick", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["Href", [string]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}

function Item$$$generateAnchor(options$$3, children$$12) {
  const parseOptions = function parseOptions(result$$3, option$$3) {
    switch (option$$3.tag) {
      case 3:
        {
          const cb = option$$3.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result$$3, new DOMAttr(40, "OnClick", cb));
        }

      case 4:
        {
          const href = option$$3.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result$$3, new HTMLAttr(54, "Href", href));
        }

      case 1:
        {
          const props$$9 = option$$3.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$3, props$$9);
        }

      case 2:
        {
          const customClass = option$$3.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$3, customClass);
        }

      case 5:
        {
          const modifiers = option$$3.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$3, modifiers);
        }

      default:
        {
          const state = option$$3.fields[0];

          if (state) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$3, option$$3);
          } else {
            return result$$3;
          }
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, parseOptions), function (props$$10, children$$13) {
    return React.createElement("a", createObj(props$$10, 1), ...children$$13);
  }, children$$12);
}

export function Item$$$li(options$$4, children$$16) {
  return React.createElement("li", {}, ...[Item$$$generateAnchor(options$$4, children$$16)]);
}
export function Item$$$a(options$$5, children$$19) {
  return Item$$$generateAnchor(options$$5, children$$19);
}
