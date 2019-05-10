import { declare, Union } from "../fable-library.2.3.7/Types.js";
import { union, string, list, type, bool } from "../fable-library.2.3.7/Reflection.js";
import { Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.3.7/Util.js";
export const Block$002EOption = declare(function Fulma_Panel_Block_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Block$002EOption$reflection() {
  return union("Fulma.Panel.Block.Option", [], Block$002EOption, () => [["is-active", [bool]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Tab$002EOption = declare(function Fulma_Panel_Tab_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Tab$002EOption$reflection() {
  return union("Fulma.Panel.Tab.Option", [], Tab$002EOption, () => [["is-active", [bool]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function block(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 2:
        {
          const customClass = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 3:
        {
          const modifiers = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, modifiers);
        }

      default:
        {
          const state = option.fields[0];

          if (state) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
          } else {
            return result;
          }
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "panel-block"), function (props$$1, children$$1) {
    return React.createElement("div", createObj(props$$1, 1), ...children$$1);
  }, children);
}
export function checkbox(options$$1, children$$4) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, option$$1) {
    switch (option$$1.tag) {
      case 1:
        {
          const props$$4 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, props$$4);
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
          const state$$1 = option$$1.fields[0];

          if (state$$1) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
          } else {
            return result$$1;
          }
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, parseOptions$$1, "panel-block"), function (props$$5, children$$5) {
    return React.createElement("label", createObj(props$$5, 1), ...children$$5);
  }, children$$4);
}
export function panel(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "panel"), function (props$$8, children$$9) {
    return React.createElement("nav", createObj(props$$8, 1), ...children$$9);
  }, children$$8);
}
export function heading(options$$3, children$$12) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, Common$0024$0024$0024parseOptions, "panel-heading"), function (props$$11, children$$13) {
    return React.createElement("div", createObj(props$$11, 1), ...children$$13);
  }, children$$12);
}
export function tabs(options$$4, children$$16) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "panel-tabs"), function (props$$14, children$$17) {
    return React.createElement("div", createObj(props$$14, 1), ...children$$17);
  }, children$$16);
}
export function tab(options$$5, children$$20) {
  const parseOptions$$2 = function parseOptions$$2(result$$5, option$$5) {
    switch (option$$5.tag) {
      case 1:
        {
          const props$$17 = option$$5.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$5, props$$17);
        }

      case 2:
        {
          const customClass$$2 = option$$5.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$5, customClass$$2);
        }

      case 3:
        {
          const modifiers$$2 = option$$5.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$5, modifiers$$2);
        }

      default:
        {
          const state$$2 = option$$5.fields[0];

          if (state$$2) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$5, option$$5);
          } else {
            return result$$5;
          }
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, parseOptions$$2), function (props$$18, children$$21) {
    return React.createElement("a", createObj(props$$18, 1), ...children$$21);
  }, children$$20);
}
export function icon(options$$6, children$$24) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$6, Common$0024$0024$0024parseOptions, "panel-icon"), function (props$$21, children$$25) {
    return React.createElement("span", createObj(props$$21, 1), ...children$$25);
  }, children$$24);
}
