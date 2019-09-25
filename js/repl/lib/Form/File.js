import { List, declare, Union } from "../fable-library.2.4.2/Types.js";
import { union, bool, list, type, string } from "../fable-library.2.4.2/Reflection.js";
import { Common$002EGenericOptions$$ToReactElement$$Z46A53D36 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Color$$$ofColor as Color$0024$0024$0024ofColor, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.4.2/Util.js";
import { HTMLAttr } from "../src/Fable.React.Props.js";
export const Option = declare(function Fulma_File_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.File.Option", [], Option, () => [["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Size", [Size$0024002EISize$0024reflection()]], ["is-focused", [bool]], ["is-active", [bool]], ["is-hovered", [bool]], "is-fullwidth", "is-centered", "is-right", "is-boxed", "has-name", ["is-empty", [bool]], ["Color", [Color$0024002EIColor$0024reflection()]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function file(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    var $target$$5, state;

    switch (option.tag) {
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        $target$$5 = 1;
        break;

      case 12:
        $target$$5 = 2;
        break;

      case 3:
        $target$$5 = 3;
        state = option.fields[0];
        break;

      case 4:
        $target$$5 = 3;
        state = option.fields[0];
        break;

      case 5:
        $target$$5 = 3;
        state = option.fields[0];
        break;

      case 11:
        $target$$5 = 3;
        state = option.fields[0];
        break;

      case 1:
        $target$$5 = 4;
        break;

      case 0:
        $target$$5 = 5;
        break;

      case 13:
        $target$$5 = 6;
        break;

      default:
        $target$$5 = 0;
    }

    switch ($target$$5) {
      case 0:
        {
          const arg00 = Reflection$0024$0024$0024getCaseName(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00);
        }

      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 2:
        {
          const arg00$$1 = Color$0024$0024$0024ofColor(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00$$1);
        }

      case 3:
        {
          if (state) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
          } else {
            return result;
          }
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
    }
  }, "file"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$2, 1), ...children$$2);
  }, children);
}
export function cta(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "file-cta"), function (props$$4, children$$5) {
    const props$$5 = props$$4;
    const children$$6 = children$$5;
    return React.createElement("span", createObj(props$$5, 1), ...children$$6);
  }, children$$4);
}
export function name(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "file-name"), function (props$$7, children$$9) {
    const props$$8 = props$$7;
    const children$$10 = children$$9;
    return React.createElement("span", createObj(props$$8, 1), ...children$$10);
  }, children$$8);
}
export function icon(options$$3, children$$12) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, Common$0024$0024$0024parseOptions, "file-icon"), function (props$$10, children$$13) {
    const props$$11 = props$$10;
    const children$$14 = children$$13;
    return React.createElement("span", createObj(props$$11, 1), ...children$$14);
  }, children$$12);
}
export function label(options$$4, children$$16) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "file-label"), function (props$$13, children$$17) {
    const props$$14 = props$$13;
    const children$$18 = children$$17;
    return React.createElement("label", createObj(props$$14, 1), ...children$$18);
  }, children$$16);
}
export function input(options$$5) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, Common$0024$0024$0024parseOptions, "file-input", new List(new HTMLAttr(119, "Type", "file"), new List())), function (props$$16) {
    const props$$17 = props$$16;
    return React.createElement("input", createObj(props$$17, 1), ...[]);
  });
}
