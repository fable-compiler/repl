import { createObj } from "../fable-library.2.3.18/Util.js";
import { Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7 } from "../Fulma/Common.js";
import { declare, Union } from "../fable-library.2.3.18/Types.js";
import { union, string, list, type } from "../fable-library.2.3.18/Reflection.js";
export function card(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, Common$0024$0024$0024parseOptions, "card"), function (props, children$$1) {
    return React.createElement("div", createObj(props, 1), ...children$$1);
  }, children);
}
export function header(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "card-header"), function (props$$3, children$$5) {
    return React.createElement("header", createObj(props$$3, 1), ...children$$5);
  }, children$$4);
}
export function content(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "card-content"), function (props$$6, children$$9) {
    return React.createElement("div", createObj(props$$6, 1), ...children$$9);
  }, children$$8);
}
export function footer(options$$3, children$$12) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, Common$0024$0024$0024parseOptions, "card-footer"), function (props$$9, children$$13) {
    return React.createElement("footer", createObj(props$$9, 1), ...children$$13);
  }, children$$12);
}
export function image(options$$4, children$$16) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "card-image"), function (props$$12, children$$17) {
    return React.createElement("div", createObj(props$$12, 1), ...children$$17);
  }, children$$16);
}
export const Header$002ETitle$002EOption = declare(function Fulma_Card_Header_Title_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Header$002ETitle$002EOption$reflection() {
  return union("Fulma.Card.Header.Title.Option", [], Header$002ETitle$002EOption, () => ["is-centered", ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function Header$$$icon(options$$5, children$$20) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, Common$0024$0024$0024parseOptions, "card-header-icon"), function (props$$15, children$$21) {
    return React.createElement("a", createObj(props$$15, 1), ...children$$21);
  }, children$$20);
}
export function Header$$$title(options$$6, children$$24) {
  const parseOptions = function parseOptions(result$$6, option$$6) {
    switch (option$$6.tag) {
      case 1:
        {
          const props$$18 = option$$6.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$6, props$$18);
        }

      case 2:
        {
          const customClass = option$$6.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$6, customClass);
        }

      case 3:
        {
          const modifiers = option$$6.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$6, modifiers);
        }

      default:
        {
          const opt = option$$6;
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$6, option$$6);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$6, parseOptions, "card-header-title"), function (props$$19, children$$25) {
    return React.createElement("p", createObj(props$$19, 1), ...children$$25);
  }, children$$24);
}
export function Footer$$$itemView(element, options$$7, children$$28) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$7, Common$0024$0024$0024parseOptions, "card-footer-item"), element, children$$28);
}
export function Footer$$$div(x, y) {
  return Footer$$$itemView(function (props$$22, children$$29) {
    return React.createElement("div", createObj(props$$22, 1), ...children$$29);
  }, x, y);
}
export function Footer$$$p(x$$1, y$$1) {
  return Footer$$$itemView(function (props$$25, children$$32) {
    return React.createElement("p", createObj(props$$25, 1), ...children$$32);
  }, x$$1, y$$1);
}
export function Footer$$$a(x$$2, y$$2) {
  return Footer$$$itemView(function (props$$28, children$$35) {
    return React.createElement("a", createObj(props$$28, 1), ...children$$35);
  }, x$$2, y$$2);
}
