import { List, declare, Union } from "../fable-library.2.3.10/Types.js";
import { union, list, type, string } from "../fable-library.2.3.10/Reflection.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$RemoveClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024RemoveClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.3.10/Util.js";
export const Option = declare(function Fulma_Heading_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Heading.Option", [], Option, () => ["is-1", "is-2", "is-3", "is-4", "is-5", "is-6", "subtitle`", "is-spaced", ["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function title(element, options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 7:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(Common$0024002EGenericOptions$0024$0024RemoveClass$0024$0024Z721C83C5(result, "title"), "subtitle");
        }

      case 9:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 8:
        {
          const customClass = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 10:
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

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "title"), element, children);
}
export function h1(options$$1) {
  const options$$2 = new List(new Option(0, "is-1"), options$$1);
  return function (children$$4) {
    return title(function element$$1(props$$1, children$$1) {
      return React.createElement("h1", createObj(props$$1, 1), ...children$$1);
    }, options$$2, children$$4);
  };
}
export function h2(options$$3) {
  const options$$4 = new List(new Option(1, "is-2"), options$$3);
  return function (children$$8) {
    return title(function element$$2(props$$4, children$$5) {
      return React.createElement("h2", createObj(props$$4, 1), ...children$$5);
    }, options$$4, children$$8);
  };
}
export function h3(options$$5) {
  const options$$6 = new List(new Option(2, "is-3"), options$$5);
  return function (children$$12) {
    return title(function element$$3(props$$7, children$$9) {
      return React.createElement("h3", createObj(props$$7, 1), ...children$$9);
    }, options$$6, children$$12);
  };
}
export function h4(options$$7) {
  const options$$8 = new List(new Option(3, "is-4"), options$$7);
  return function (children$$16) {
    return title(function element$$4(props$$10, children$$13) {
      return React.createElement("h4", createObj(props$$10, 1), ...children$$13);
    }, options$$8, children$$16);
  };
}
export function h5(options$$9) {
  const options$$10 = new List(new Option(4, "is-5"), options$$9);
  return function (children$$20) {
    return title(function element$$5(props$$13, children$$17) {
      return React.createElement("h5", createObj(props$$13, 1), ...children$$17);
    }, options$$10, children$$20);
  };
}
export function h6(options$$11) {
  const options$$12 = new List(new Option(5, "is-6"), options$$11);
  return function (children$$24) {
    return title(function element$$6(props$$16, children$$21) {
      return React.createElement("h6", createObj(props$$16, 1), ...children$$21);
    }, options$$12, children$$24);
  };
}
export function p(opts, children$$25) {
  return title(function (props$$19, children$$26) {
    return React.createElement("p", createObj(props$$19, 1), ...children$$26);
  }, opts, children$$25);
}
