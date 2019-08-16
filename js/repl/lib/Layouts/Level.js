import { declare, Union } from "../fable-library.2.3.18/Types.js";
import { union, string, list, type } from "../fable-library.2.3.18/Reflection.js";
import { Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.3.18/Util.js";
export const Level$002EOption = declare(function Fulma_Level_Level_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Level$002EOption$reflection() {
  return union("Fulma.Level.Level.Option", [], Level$002EOption, () => [["Props", [list(type("Fable.React.Props.IHTMLProp"))]], "is-mobile", ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Item$002EOption = declare(function Fulma_Level_Item_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Item$002EOption$reflection() {
  return union("Fulma.Level.Item.Option", [], Item$002EOption, () => [["Props", [list(type("Fable.React.Props.IHTMLProp"))]], "has-text-centered", ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function level(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 0:
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
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "level"), function (props$$1, children$$1) {
    return React.createElement("nav", createObj(props$$1, 1), ...children$$1);
  }, children);
}
export function left(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "level-left"), function (props$$4, children$$5) {
    return React.createElement("div", createObj(props$$4, 1), ...children$$5);
  }, children$$4);
}
export function right(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "level-right"), function (props$$7, children$$9) {
    return React.createElement("div", createObj(props$$7, 1), ...children$$9);
  }, children$$8);
}
export function item(options$$3, children$$12) {
  const parseOptions$$1 = function parseOptions$$1(result$$3, option$$3) {
    switch (option$$3.tag) {
      case 0:
        {
          const props$$10 = option$$3.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$3, props$$10);
        }

      case 2:
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
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$3, option$$3);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, parseOptions$$1, "level-item"), function (props$$11, children$$13) {
    return React.createElement("div", createObj(props$$11, 1), ...children$$13);
  }, children$$12);
}
export function heading(options$$4, children$$16) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "heading"), function (props$$14, children$$17) {
    return React.createElement("p", createObj(props$$14, 1), ...children$$17);
  }, children$$16);
}
export function title(options$$5, children$$20) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, Common$0024$0024$0024parseOptions, "title"), function (props$$17, children$$21) {
    return React.createElement("p", createObj(props$$17, 1), ...children$$21);
  }, children$$20);
}
