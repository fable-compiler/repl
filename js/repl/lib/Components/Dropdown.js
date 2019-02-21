import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option, union, string, list as list$$2, type, bool } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { ofArray, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Dropdown_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Dropdown.Option", [], Option, () => [["IsActive", [bool]], "IsHoverable", "IsRight", "IsUp", ["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Dropdown_Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.Props = arg1;
  this.IsActive = arg2;
  this.IsHoverable = arg3;
  this.IsRight = arg4;
  this.IsUp = arg5;
  this.CustomClass = arg6;
  this.Modifiers = arg7;
}, Record);
export function Options$reflection() {
  return record("Fulma.Dropdown.Options", [], Options, () => [["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["IsActive", bool], ["IsHoverable", bool], ["IsRight", bool], ["IsUp", bool], ["CustomClass", option(string)], ["Modifiers", list$$2(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(new List(), false, false, false, false, null, new List());
}
export function dropdown(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 2:
        {
          return new Options(result.Props, result.IsActive, result.IsHoverable, true, result.IsUp, result.CustomClass, result.Modifiers);
        }

      case 1:
        {
          return new Options(result.Props, result.IsActive, true, result.IsRight, result.IsUp, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          return new Options(result.Props, result.IsActive, result.IsHoverable, result.IsRight, true, result.CustomClass, result.Modifiers);
        }

      case 4:
        {
          const props = _arg1.fields[0];
          return new Options(props, result.IsActive, result.IsHoverable, result.IsRight, result.IsUp, result.CustomClass, result.Modifiers);
        }

      case 5:
        {
          const customClass = _arg1.fields[0];
          return new Options(result.Props, result.IsActive, result.IsHoverable, result.IsRight, result.IsUp, customClass, result.Modifiers);
        }

      case 6:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.Props, result.IsActive, result.IsHoverable, result.IsRight, result.IsUp, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const state = _arg1.fields[0];
          return new Options(result.Props, state, result.IsHoverable, result.IsRight, result.IsUp, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("dropdown", new List(opts.CustomClass, opts.Modifiers), ofArray([["is-right", opts.IsRight], ["is-active", opts.IsActive], ["is-hoverable", opts.IsHoverable], ["is-up", opts.IsUp]]));
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
export function menu(options$$3, children$$3) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("dropdown-menu", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$3);
}
export function content(options$$4, children$$6) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$4);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("dropdown-content", new List(opts$$2.CustomClass, opts$$2.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$2, opts$$2.Props), 1), ...children$$6);
}
export function divider(options$$5) {
  const opts$$3 = Common$0024$0024$0024genericParse(options$$5);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("dropdown-divider", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List());
  return createElement("hr", createObj(new List(classes$$3, opts$$3.Props), 1), ...new List());
}
export const Item$002EOption = declare(function Fulma_Dropdown_Item_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Item$002EOption$reflection() {
  return union("Fulma.Dropdown.Item.Option", [], Item$002EOption, () => [["IsActive", [bool]], ["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Item$002EOptions = declare(function Fulma_Dropdown_Item_Options(arg1, arg2, arg3, arg4) {
  this.Props = arg1;
  this.IsActive = arg2;
  this.CustomClass = arg3;
  this.Modifiers = arg4;
}, Record);
export function Item$002EOptions$reflection() {
  return record("Fulma.Dropdown.Item.Options", [], Item$002EOptions, () => [["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["IsActive", bool], ["CustomClass", option(string)], ["Modifiers", list$$2(option(string))]]);
}
export function Item$002EOptions$$$get_Empty() {
  return new Item$002EOptions(new List(), false, null, new List());
}
export function Item$$$item(element, options$$6, children$$9) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, _arg1$$1) {
    switch (_arg1$$1.tag) {
      case 1:
        {
          const props$$9 = _arg1$$1.fields[0];
          return new Item$002EOptions(props$$9, result$$1.IsActive, result$$1.CustomClass, result$$1.Modifiers);
        }

      case 2:
        {
          const customClass$$1 = _arg1$$1.fields[0];
          return new Item$002EOptions(result$$1.Props, result$$1.IsActive, customClass$$1, result$$1.Modifiers);
        }

      case 3:
        {
          const modifiers$$1 = _arg1$$1.fields[0];
          return new Item$002EOptions(result$$1.Props, result$$1.IsActive, result$$1.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers$$1));
        }

      default:
        {
          const state$$2 = _arg1$$1.fields[0];
          return new Item$002EOptions(result$$1.Props, state$$2, result$$1.CustomClass, result$$1.Modifiers);
        }
    }
  };

  const opts$$4 = fold(parseOptions$$1, Item$002EOptions$$$get_Empty(), options$$6);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("dropdown-item", new List(opts$$4.CustomClass, opts$$4.Modifiers), new List(["is-active", opts$$4.IsActive], new List()));
  return element(new List(classes$$4, opts$$4.Props), children$$9);
}
export function Item$$$div(x, y) {
  return Item$$$item(function (props$$10, children$$10) {
    return createElement("div", createObj(props$$10, 1), ...children$$10);
  }, x, y);
}
export function Item$$$a(x$$1, y$$1) {
  return Item$$$item(function (props$$13, children$$13) {
    return createElement("a", createObj(props$$13, 1), ...children$$13);
  }, x$$1, y$$1);
}
