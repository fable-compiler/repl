import { declare, Union } from "../fable-library.2.3.7/Types.js";
import { Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { bool, union, list as list$$1, type, string } from "../fable-library.2.3.7/Reflection.js";
import { createObj } from "../fable-library.2.3.7/Util.js";
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
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 3:
        {
          const size = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, Reflection$0024$0024$0024getCaseName(size));
        }

      case 5:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 4:
        {
          const customClass = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 6:
        {
          const modifiers = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, modifiers);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "pagination"), function (props$$1, children$$1) {
    return React.createElement("nav", createObj(props$$1, 1), ...children$$1);
  }, children);
}
export function previous(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "pagination-previous"), function (props$$4, children$$5) {
    return React.createElement("a", createObj(props$$4, 1), ...children$$5);
  }, children$$4);
}
export function next(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "pagination-next"), function (props$$7, children$$9) {
    return React.createElement("a", createObj(props$$7, 1), ...children$$9);
  }, children$$8);
}
export function link(options$$3, children$$12) {
  const parseOptions$$1 = function parseOptions$$1(result$$3, option$$3) {
    switch (option$$3.tag) {
      case 2:
        {
          const props$$10 = option$$3.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$3, props$$10);
        }

      case 1:
        {
          const customClass$$1 = option$$3.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$3, customClass$$1);
        }

      case 3:
        {
          const modifiers$$1 = option$$3.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$3, modifiers$$1);
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

  const props$$14 = [];
  return React.createElement("li", createObj(props$$14, 1), ...[Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, parseOptions$$1, "pagination-link"), function (props$$11, children$$13) {
    return React.createElement("a", createObj(props$$11, 1), ...children$$13);
  }, children$$12)]);
}
export function ellipsis(options$$4) {
  const props$$19 = [];
  return React.createElement("li", createObj(props$$19, 1), ...[Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "pagination-ellipsis"), new DOMAttr(0, "DangerouslySetInnerHTML", new DangerousHtml("&hellip;"))), function (props$$16, children$$18) {
    return React.createElement("a", createObj(props$$16, 1), ...children$$18);
  })]);
}
export function list(options$$5, children$$23) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, Common$0024$0024$0024parseOptions, "pagination-list"), function (props$$21, children$$24) {
    return React.createElement("ul", createObj(props$$21, 1), ...children$$24);
  }, children$$23);
}
