import { createObj } from "../fable-library.2.4.2/Util.js";
import { Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7 } from "../Fulma/Common.js";
import { declare, Union } from "../fable-library.2.4.2/Types.js";
import { union, lambda, unit, string, list as list$$1, type, bool } from "../fable-library.2.4.2/Reflection.js";
import { HTMLAttr, DOMAttr } from "../src/Fable.React.Props.js";
export function menu(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, Common$0024$0024$0024parseOptions, "menu"), function (props, children$$1) {
    const props$$1 = props;
    const children$$2 = children$$1;
    return React.createElement("aside", createObj(props$$1, 1), ...children$$2);
  }, children);
}
export function label(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "menu-label"), function (props$$3, children$$5) {
    const props$$4 = props$$3;
    const children$$6 = children$$5;
    return React.createElement("p", createObj(props$$4, 1), ...children$$6);
  }, children$$4);
}
export function list(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "menu-list"), function (props$$6, children$$9) {
    const props$$7 = props$$6;
    const children$$10 = children$$9;
    return React.createElement("ul", createObj(props$$7, 1), ...children$$10);
  }, children$$8);
}
export const Item$002EOption = declare(function Fulma_Menu_Item_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Item$002EOption$reflection() {
  return union("Fulma.Menu.Item.Option", [], Item$002EOption, () => [["is-active", [bool]], ["Props", [list$$1(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["OnClick", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["Href", [string]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}

function Item$$$generateAnchor(options$$3, children$$12) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, function parseOptions(result$$3, option$$3) {
    switch (option$$3.tag) {
      case 3:
        {
          const arg00 = new DOMAttr(40, "OnClick", option$$3.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result$$3, arg00);
        }

      case 4:
        {
          const arg00$$1 = new HTMLAttr(54, "Href", option$$3.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result$$3, arg00$$1);
        }

      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$3, option$$3.fields[0]);
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$3, option$$3.fields[0]);
        }

      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$3, option$$3.fields[0]);
        }

      default:
        {
          if (option$$3.fields[0]) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$3, option$$3);
          } else {
            return result$$3;
          }
        }
    }
  }), function (props$$10, children$$13) {
    const props$$11 = props$$10;
    const children$$14 = children$$13;
    return React.createElement("a", createObj(props$$11, 1), ...children$$14);
  }, children$$12);
}

export function Item$$$li(options$$4, children$$16) {
  const props$$13 = [];
  const children$$17 = [Item$$$generateAnchor(options$$4, children$$16)];
  return React.createElement("li", createObj(props$$13, 1), ...children$$17);
}
export function Item$$$a(options$$5, children$$19) {
  return Item$$$generateAnchor(options$$5, children$$19);
}
