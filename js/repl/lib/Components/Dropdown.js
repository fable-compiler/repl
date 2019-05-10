import { declare, Union } from "../fable-library.2.3.7/Types.js";
import { union, string, list, type, bool } from "../fable-library.2.3.7/Reflection.js";
import { Common$002EGenericOptions$$ToReactElement$$Z46A53D36 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.3.7/Util.js";
export const Option = declare(function Fulma_Dropdown_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Dropdown.Option", [], Option, () => [["is-active", [bool]], "is-hoverable", "is-right", "is-up", ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function dropdown(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 4:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 5:
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
          const state = option.fields[0];

          if (state) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
          } else {
            return result;
          }
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "dropdown"), function (props$$1, children$$1) {
    return React.createElement("div", createObj(props$$1, 1), ...children$$1);
  }, children);
}
export function menu(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "dropdown-menu"), function (props$$4, children$$5) {
    return React.createElement("div", createObj(props$$4, 1), ...children$$5);
  }, children$$4);
}
export function content(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "dropdown-content"), function (props$$7, children$$9) {
    return React.createElement("div", createObj(props$$7, 1), ...children$$9);
  }, children$$8);
}
export function divider(options$$3) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, Common$0024$0024$0024parseOptions, "dropdown-divider"), function (props$$10) {
    return React.createElement("hr", createObj(props$$10, 1), ...[]);
  });
}
export function trigger(options$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "dropdown-trigger"), function (props$$13) {
    return React.createElement("hr", createObj(props$$13, 1), ...[]);
  });
}
export const Item$002EOption = declare(function Fulma_Dropdown_Item_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Item$002EOption$reflection() {
  return union("Fulma.Dropdown.Item.Option", [], Item$002EOption, () => [["is-active", [bool]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function Item$$$item(element, options$$5, children$$12) {
  const parseOptions$$1 = function parseOptions$$1(result$$5, option$$5) {
    switch (option$$5.tag) {
      case 1:
        {
          const props$$16 = option$$5.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$5, props$$16);
        }

      case 2:
        {
          const customClass$$1 = option$$5.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$5, customClass$$1);
        }

      case 3:
        {
          const modifiers$$1 = option$$5.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$5, modifiers$$1);
        }

      default:
        {
          const state$$1 = option$$5.fields[0];

          if (state$$1) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$5, option$$5);
          } else {
            return result$$5;
          }
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, parseOptions$$1, "dropdown-item"), element, children$$12);
}
export function Item$$$div(x, y) {
  return Item$$$item(function (props$$17, children$$13) {
    return React.createElement("div", createObj(props$$17, 1), ...children$$13);
  }, x, y);
}
export function Item$$$a(x$$1, y$$1) {
  return Item$$$item(function (props$$20, children$$16) {
    return React.createElement("a", createObj(props$$20, 1), ...children$$16);
  }, x$$1, y$$1);
}
export function Item$$$button(x$$2, y$$2) {
  return Item$$$item(function (props$$23, children$$19) {
    return React.createElement("button", createObj(props$$23, 1), ...children$$19);
  }, x$$2, y$$2);
}
