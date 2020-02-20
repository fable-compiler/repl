import { declare, Union } from "../../fable-library/Types.js";
import { union, string, list, type, bool } from "../../fable-library/Reflection.js";
import { Common$002EGenericOptions$$ToReactElement$$Z46A53D36 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../../fable-library/Util.js";
export const Option = declare(function Fulma_Dropdown_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Dropdown.Option", [], Option, () => [["is-active", [bool]], "is-hoverable", "is-right", "is-up", ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function dropdown(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
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
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }

      default:
        {
          if (option.fields[0]) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
          } else {
            return result;
          }
        }
    }
  }, "dropdown"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$2, 1), ...children$$2);
  }, children);
}
export function menu(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "dropdown-menu"), function (props$$4, children$$5) {
    const props$$5 = props$$4;
    const children$$6 = children$$5;
    return React.createElement("div", createObj(props$$5, 1), ...children$$6);
  }, children$$4);
}
export function content(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "dropdown-content"), function (props$$7, children$$9) {
    const props$$8 = props$$7;
    const children$$10 = children$$9;
    return React.createElement("div", createObj(props$$8, 1), ...children$$10);
  }, children$$8);
}
export function divider(options$$3) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, Common$0024$0024$0024parseOptions, "dropdown-divider"), function (props$$10) {
    const props$$11 = props$$10;
    return React.createElement("hr", createObj(props$$11, 1), ...[]);
  });
}
export function trigger(options$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "dropdown-trigger"), function (props$$13) {
    const props$$14 = props$$13;
    return React.createElement("hr", createObj(props$$14, 1), ...[]);
  });
}
export const Item$002EOption = declare(function Fulma_Dropdown_Item_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Item$002EOption$reflection() {
  return union("Fulma.Dropdown.Item.Option", [], Item$002EOption, () => [["is-active", [bool]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function Item$$$item(element, options$$5, children$$12) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, function parseOptions$$1(result$$5, option$$5) {
    switch (option$$5.tag) {
      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$5, option$$5.fields[0]);
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$5, option$$5.fields[0]);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$5, option$$5.fields[0]);
        }

      default:
        {
          if (option$$5.fields[0]) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$5, option$$5);
          } else {
            return result$$5;
          }
        }
    }
  }, "dropdown-item"), element, children$$12);
}
export function Item$$$div(x, y) {
  return Item$$$item(function (props$$17, children$$13) {
    const props$$18 = props$$17;
    const children$$14 = children$$13;
    return React.createElement("div", createObj(props$$18, 1), ...children$$14);
  }, x, y);
}
export function Item$$$a(x$$1, y$$1) {
  return Item$$$item(function (props$$20, children$$16) {
    const props$$21 = props$$20;
    const children$$17 = children$$16;
    return React.createElement("a", createObj(props$$21, 1), ...children$$17);
  }, x$$1, y$$1);
}
export function Item$$$button(x$$2, y$$2) {
  return Item$$$item(function (props$$23, children$$19) {
    const props$$24 = props$$23;
    const children$$20 = children$$19;
    return React.createElement("button", createObj(props$$24, 1), ...children$$20);
  }, x$$2, y$$2);
}
