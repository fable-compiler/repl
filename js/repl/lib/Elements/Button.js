import { List, declare, Union } from "../fable-library.2.3.10/Types.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Color$$$ofColor as Color$0024$0024$0024ofColor, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection } from "../Fulma/Common.js";
import { union, string, lambda, unit, list as list$$3, type, bool } from "../fable-library.2.3.10/Reflection.js";
import { DOMAttr, HTMLAttr } from "../src/Fable.React.Props.js";
import { createObj } from "../fable-library.2.3.10/Util.js";
import { map, exists } from "../fable-library.2.3.10/List.js";
export const Option = declare(function Fulma_Button_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Button.Option", [], Option, () => [["Color", [Color$0024002EIColor$0024reflection()]], ["Size", [Size$0024002EISize$0024reflection()]], "is-fullwidth", "is-link", "is-outlined", "is-inverted", "is-text", "is-rounded", "is-expanded", ["is-hovered", [bool]], ["is-focused", [bool]], ["is-active", [bool]], ["is-loading", [bool]], ["is-static", [bool]], ["Disabled", [bool]], ["Props", [list$$3(type("Fable.React.Props.IHTMLProp"))]], ["OnClick", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["CustomClass", [string]], ["Modifiers", [list$$3(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function btnView(element, options, children) {
  const parseOptions = function parseOptions(result, option) {
    var $target$$4, state;

    switch (option.tag) {
      case 1:
        $target$$4 = 1;
        break;

      case 3:
      case 2:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        $target$$4 = 2;
        break;

      case 9:
        $target$$4 = 3;
        state = option.fields[0];
        break;

      case 10:
        $target$$4 = 3;
        state = option.fields[0];
        break;

      case 11:
        $target$$4 = 3;
        state = option.fields[0];
        break;

      case 12:
        $target$$4 = 3;
        state = option.fields[0];
        break;

      case 13:
        $target$$4 = 3;
        state = option.fields[0];
        break;

      case 14:
        $target$$4 = 4;
        break;

      case 16:
        $target$$4 = 5;
        break;

      case 15:
        $target$$4 = 6;
        break;

      case 17:
        $target$$4 = 7;
        break;

      case 18:
        $target$$4 = 8;
        break;

      default:
        $target$$4 = 0;
    }

    switch ($target$$4) {
      case 0:
        {
          const color = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, Color$0024$0024$0024ofColor(color));
        }

      case 1:
        {
          const size = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, Reflection$0024$0024$0024getCaseName(size));
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
          const isDisabled = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new HTMLAttr(39, "Disabled", isDisabled));
        }

      case 5:
        {
          const cb = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new DOMAttr(40, "OnClick", cb));
        }

      case 6:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 7:
        {
          const customClass = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 8:
        {
          const modifiers = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, modifiers);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "button"), element, children);
}
export function button(options$$1, children$$1) {
  return btnView(function (props$$1, children$$2) {
    return React.createElement("button", createObj(props$$1, 1), ...children$$2);
  }, options$$1, children$$1);
}
export function span(options$$2, children$$5) {
  return btnView(function (props$$4, children$$6) {
    return React.createElement("span", createObj(props$$4, 1), ...children$$6);
  }, options$$2, children$$5);
}
export function a(options$$3, children$$9) {
  return btnView(function (props$$7, children$$10) {
    return React.createElement("a", createObj(props$$7, 1), ...children$$10);
  }, options$$3, children$$9);
}
export function Input$$$btnInput(typ, options$$4) {
  const hasProps = exists(function predicate(opts) {
    if (opts.tag === 15) {
      return true;
    } else {
      return false;
    }
  }, options$$4);

  if (hasProps) {
    const newOptions = map(function mapping(opts$$1) {
      if (opts$$1.tag === 15) {
        const props$$10 = opts$$1.fields[0];
        return new Option(15, "Props", new List(new HTMLAttr(119, "Type", typ), props$$10));
      } else {
        const forward = opts$$1;
        return forward;
      }
    }, options$$4);
    return btnView(function (options$$5, _arg1) {
      return React.createElement("input", createObj(options$$5, 1), ...[]);
    }, newOptions, new List());
  } else {
    return btnView(function (options$$6, _arg2) {
      return React.createElement("input", createObj(options$$6, 1), ...[]);
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
  const parseOptions$$1 = function parseOptions$$1(result$$1, option$$1) {
    switch (option$$1.tag) {
      case 1:
      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
        }

      case 3:
        {
          const props$$15 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, props$$15);
        }

      case 4:
        {
          const customClass$$1 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, customClass$$1);
        }

      case 5:
        {
          const modifiers$$1 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$1, modifiers$$1);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$9, parseOptions$$1, "buttons"), function (props$$16, children$$14) {
    return React.createElement("div", createObj(props$$16, 1), ...children$$14);
  }, children$$13);
}
