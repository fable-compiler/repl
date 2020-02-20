import { List, declare, Union } from "../../fable-library/Types.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Color$$$ofColor as Color$0024$0024$0024ofColor, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection } from "../Fulma/Common.js";
import { union, string, lambda, unit, list as list$$3, type, bool } from "../../fable-library/Reflection.js";
import { DOMAttr, HTMLAttr } from "../src/Fable.React.Props.js";
import { createObj } from "../../fable-library/Util.js";
import { map, exists } from "../../fable-library/List.js";
export const Option = declare(function Fulma_Button_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Button.Option", [], Option, () => [["Color", [Color$0024002EIColor$0024reflection()]], ["Size", [Size$0024002EISize$0024reflection()]], "is-fullwidth", "is-link", "is-outlined", "is-inverted", "is-text", "is-rounded", "is-expanded", ["is-hovered", [bool]], ["is-focused", [bool]], ["is-active", [bool]], ["is-loading", [bool]], ["is-static", [bool]], ["Disabled", [bool]], ["Props", [list$$3(type("Fable.React.Props.IHTMLProp"))]], ["OnClick", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["CustomClass", [string]], ["Modifiers", [list$$3(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function btnView(element, options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    var $target$$6, state;

    switch (option.tag) {
      case 1:
        $target$$6 = 1;
        break;

      case 3:
      case 2:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        $target$$6 = 2;
        break;

      case 9:
        $target$$6 = 3;
        state = option.fields[0];
        break;

      case 10:
        $target$$6 = 3;
        state = option.fields[0];
        break;

      case 11:
        $target$$6 = 3;
        state = option.fields[0];
        break;

      case 12:
        $target$$6 = 3;
        state = option.fields[0];
        break;

      case 13:
        $target$$6 = 3;
        state = option.fields[0];
        break;

      case 14:
        $target$$6 = 4;
        break;

      case 16:
        $target$$6 = 5;
        break;

      case 15:
        $target$$6 = 6;
        break;

      case 17:
        $target$$6 = 7;
        break;

      case 18:
        $target$$6 = 8;
        break;

      default:
        $target$$6 = 0;
    }

    switch ($target$$6) {
      case 0:
        {
          const arg00 = Color$0024$0024$0024ofColor(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00);
        }

      case 1:
        {
          const arg00$$1 = Reflection$0024$0024$0024getCaseName(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00$$1);
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
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
          const arg00$$2 = new HTMLAttr(39, "Disabled", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$2);
        }

      case 5:
        {
          const arg00$$3 = new DOMAttr(40, "OnClick", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$3);
        }

      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 7:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 8:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }
    }
  }, "button"), element, children);
}
export function button(options$$1, children$$1) {
  return btnView(function (props$$1, children$$2) {
    const props$$2 = props$$1;
    const children$$3 = children$$2;
    return React.createElement("button", createObj(props$$2, 1), ...children$$3);
  }, options$$1, children$$1);
}
export function span(options$$2, children$$5) {
  return btnView(function (props$$4, children$$6) {
    const props$$5 = props$$4;
    const children$$7 = children$$6;
    return React.createElement("span", createObj(props$$5, 1), ...children$$7);
  }, options$$2, children$$5);
}
export function a(options$$3, children$$9) {
  return btnView(function (props$$7, children$$10) {
    const props$$8 = props$$7;
    const children$$11 = children$$10;
    return React.createElement("a", createObj(props$$8, 1), ...children$$11);
  }, options$$3, children$$9);
}
export function Input$$$btnInput(typ, options$$4) {
  let hasProps;
  hasProps = exists(function predicate(opts) {
    if (opts.tag === 15) {
      return true;
    } else {
      return false;
    }
  }, options$$4);

  if (hasProps) {
    let newOptions;
    newOptions = map(function mapping(opts$$1) {
      if (opts$$1.tag === 15) {
        return new Option(15, "Props", new List(new HTMLAttr(119, "Type", typ), opts$$1.fields[0]));
      } else {
        return opts$$1;
      }
    }, options$$4);
    return btnView(function (options$$5, _arg1) {
      const props$$11 = options$$5;
      return React.createElement("input", createObj(props$$11, 1), ...[]);
    }, newOptions, new List());
  } else {
    return btnView(function (options$$6, _arg2) {
      const props$$13 = options$$6;
      return React.createElement("input", createObj(props$$13, 1), ...[]);
    }, new List(new Option(15, "Props", new List(new HTMLAttr(119, "Type", typ), new List())), options$$4), new List());
  }
}
export function Input$$$reset(options$$7) {
  return Input$$$btnInput("reset", options$$7);
}
export function Input$$$submit(options$$8) {
  return Input$$$btnInput("submit", options$$8);
}
export const List$002EOption = declare(function Fulma_Button_List_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function List$002EOption$reflection() {
  return union("Fulma.Button.List.Option", [], List$002EOption, () => ["has-addons", "is-centered", "is-right", ["Props", [list$$3(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$3(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function list(options$$9, children$$13) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$9, function parseOptions$$1(result$$1, option$$1) {
    switch (option$$1.tag) {
      case 1:
      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, option$$1.fields[0]);
        }

      case 4:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, option$$1.fields[0]);
        }

      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$1, option$$1.fields[0]);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
        }
    }
  }, "buttons"), function (props$$16, children$$14) {
    const props$$17 = props$$16;
    const children$$15 = children$$14;
    return React.createElement("div", createObj(props$$17, 1), ...children$$15);
  }, children$$13);
}
