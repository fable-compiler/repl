import { declare, Union } from "../fable-library.2.4.2/Types.js";
import { Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { bool, union, list as list$$1, type, string } from "../fable-library.2.4.2/Reflection.js";
import { createObj } from "../fable-library.2.4.2/Util.js";
import { DangerousHtml, DOMAttr } from "../src/Fable.React.Props.js";
export const Option = declare(function Fulma_Pagination_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Pagination.Option", [], Option, () => ["is-centered", "is-right", "is-rounded", ["Size", [Size$0024002EISize$0024reflection()]], ["CustomClass", [string]], ["Props", [list$$1(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Link$002EOption = declare(function Fulma_Pagination_Link_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Link$002EOption$reflection() {
  return union("Fulma.Pagination.Link.Option", [], Link$002EOption, () => [["is-current", [bool]], ["CustomClass", [string]], ["Props", [list$$1(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function pagination(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 3:
        {
          const arg00 = Reflection$0024$0024$0024getCaseName(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00);
        }

      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 4:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }
    }
  }, "pagination"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("nav", createObj(props$$2, 1), ...children$$2);
  }, children);
}
export function previous(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "pagination-previous"), function (props$$4, children$$5) {
    const props$$5 = props$$4;
    const children$$6 = children$$5;
    return React.createElement("a", createObj(props$$5, 1), ...children$$6);
  }, children$$4);
}
export function next(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "pagination-next"), function (props$$7, children$$9) {
    const props$$8 = props$$7;
    const children$$10 = children$$9;
    return React.createElement("a", createObj(props$$8, 1), ...children$$10);
  }, children$$8);
}
export function link(options$$3, children$$12) {
  const props$$14 = [];
  const children$$16 = [Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, function parseOptions$$1(result$$3, option$$3) {
    switch (option$$3.tag) {
      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$3, option$$3.fields[0]);
        }

      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$3, option$$3.fields[0]);
        }

      case 3:
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
  }, "pagination-link"), function (props$$11, children$$13) {
    const props$$12 = props$$11;
    const children$$14 = children$$13;
    return React.createElement("a", createObj(props$$12, 1), ...children$$14);
  }, children$$12)];
  return React.createElement("li", createObj(props$$14, 1), ...children$$16);
}
export function ellipsis(options$$4) {
  const props$$19 = [];
  const children$$21 = [Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "pagination-ellipsis"), new DOMAttr(0, "DangerouslySetInnerHTML", new DangerousHtml("&hellip;"))), function (props$$16, children$$18) {
    const props$$17 = props$$16;
    const children$$19 = children$$18;
    return React.createElement("a", createObj(props$$17, 1), ...children$$19);
  })];
  return React.createElement("li", createObj(props$$19, 1), ...children$$21);
}
export function list(options$$5, children$$23) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, Common$0024$0024$0024parseOptions, "pagination-list"), function (props$$21, children$$24) {
    const props$$22 = props$$21;
    const children$$25 = children$$24;
    return React.createElement("ul", createObj(props$$22, 1), ...children$$25);
  }, children$$23);
}
