import { createObj } from "../../fable-library/Util.js";
import { Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7 } from "../Fulma/Common.js";
import { declare, Union } from "../../fable-library/Types.js";
import { union_type, string_type, list_type, class_type } from "../../fable-library/Reflection.js";
export function card(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, Common$0024$0024$0024parseOptions, "card"), function (props, children$$1) {
    const props$$1 = props;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$1, 1), ...children$$2);
  }, children);
}
export function header(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "card-header"), function (props$$3, children$$5) {
    const props$$4 = props$$3;
    const children$$6 = children$$5;
    return React.createElement("header", createObj(props$$4, 1), ...children$$6);
  }, children$$4);
}
export function content(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "card-content"), function (props$$6, children$$9) {
    const props$$7 = props$$6;
    const children$$10 = children$$9;
    return React.createElement("div", createObj(props$$7, 1), ...children$$10);
  }, children$$8);
}
export function footer(options$$3, children$$12) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, Common$0024$0024$0024parseOptions, "card-footer"), function (props$$9, children$$13) {
    const props$$10 = props$$9;
    const children$$14 = children$$13;
    return React.createElement("footer", createObj(props$$10, 1), ...children$$14);
  }, children$$12);
}
export function image(options$$4, children$$16) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "card-image"), function (props$$12, children$$17) {
    const props$$13 = props$$12;
    const children$$18 = children$$17;
    return React.createElement("div", createObj(props$$13, 1), ...children$$18);
  }, children$$16);
}
export const Header$002ETitle$002EOption = declare(function Fulma_Card_Header_Title_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Header$002ETitle$002EOption$reflection() {
  return union_type("Fulma.Card.Header.Title.Option", [], Header$002ETitle$002EOption, () => ["is-centered", ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["CustomClass", [["Item", string_type]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export function Header$$$icon(options$$5, children$$20) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, Common$0024$0024$0024parseOptions, "card-header-icon"), function (props$$15, children$$21) {
    const props$$16 = props$$15;
    const children$$22 = children$$21;
    return React.createElement("a", createObj(props$$16, 1), ...children$$22);
  }, children$$20);
}
export function Header$$$title(options$$6, children$$24) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$6, function parseOptions(result$$6, option$$6) {
    switch (option$$6.tag) {
      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$6, option$$6.fields[0]);
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$6, option$$6.fields[0]);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$6, option$$6.fields[0]);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$6, option$$6);
        }
    }
  }, "card-header-title"), function (props$$19, children$$25) {
    const props$$20 = props$$19;
    const children$$26 = children$$25;
    return React.createElement("p", createObj(props$$20, 1), ...children$$26);
  }, children$$24);
}
export function Footer$$$itemView(element, options$$7, children$$28) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$7, Common$0024$0024$0024parseOptions, "card-footer-item"), element, children$$28);
}
export function Footer$$$div(x, y) {
  return Footer$$$itemView(function (props$$22, children$$29) {
    const props$$23 = props$$22;
    const children$$30 = children$$29;
    return React.createElement("div", createObj(props$$23, 1), ...children$$30);
  }, x, y);
}
export function Footer$$$p(x$$1, y$$1) {
  return Footer$$$itemView(function (props$$25, children$$32) {
    const props$$26 = props$$25;
    const children$$33 = children$$32;
    return React.createElement("p", createObj(props$$26, 1), ...children$$33);
  }, x$$1, y$$1);
}
export function Footer$$$a(x$$2, y$$2) {
  return Footer$$$itemView(function (props$$28, children$$35) {
    const props$$29 = props$$28;
    const children$$36 = children$$35;
    return React.createElement("a", createObj(props$$29, 1), ...children$$36);
  }, x$$2, y$$2);
}
