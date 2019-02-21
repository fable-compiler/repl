import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { bool, record, option, union, string, list as list$$2, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { ofSeq, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
import { append, delay, singleton } from "../fable-library.2.2.0-beta-010/Seq.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Breadcrumb_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Breadcrumb.Option", [], Option, () => ["IsCentered", "IsRight", "HasArrowSeparator", "HasBulletSeparator", "HasDotSeparator", "HasSucceedsSeparator", ["Size", [Size$0024002EISize$0024reflection()]], ["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Breadcrumb_Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Props = arg1;
  this.Alignment = arg2;
  this.Separator = arg3;
  this.Size = arg4;
  this.CustomClass = arg5;
  this.Modifiers = arg6;
}, Record);
export function Options$reflection() {
  return record("Fulma.Breadcrumb.Options", [], Options, () => [["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Alignment", option(string)], ["Separator", option(string)], ["Size", option(string)], ["CustomClass", option(string)], ["Modifiers", list$$2(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(new List(), null, null, null, null, new List());
}
export function breadcrumb(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          return new Options(result.Props, "is-right", result.Separator, result.Size, result.CustomClass, result.Modifiers);
        }

      case 2:
        {
          return new Options(result.Props, result.Alignment, "has-arrow-separator", result.Size, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          return new Options(result.Props, result.Alignment, "has-bullet-separator", result.Size, result.CustomClass, result.Modifiers);
        }

      case 4:
        {
          return new Options(result.Props, result.Alignment, "has-dot-separator", result.Size, result.CustomClass, result.Modifiers);
        }

      case 5:
        {
          return new Options(result.Props, result.Alignment, "has-succeeds-separator", result.Size, result.CustomClass, result.Modifiers);
        }

      case 6:
        {
          const size = _arg1.fields[0];
          return new Options(result.Props, result.Alignment, result.Separator, Size$0024$0024$0024ofSize(size), result.CustomClass, result.Modifiers);
        }

      case 7:
        {
          const props = _arg1.fields[0];
          return new Options(props, result.Alignment, result.Separator, result.Size, result.CustomClass, result.Modifiers);
        }

      case 8:
        {
          const customClass = _arg1.fields[0];
          return new Options(result.Props, result.Alignment, result.Separator, result.Size, customClass, result.Modifiers);
        }

      case 9:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.Props, result.Alignment, result.Separator, result.Size, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new Options(result.Props, "is-centered", result.Separator, result.Size, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("breadcrumb", new List(opts.Alignment, new List(opts.Separator, new List(opts.Size, new List(opts.CustomClass, opts.Modifiers)))), new List());
  return createElement("nav", createObj(new List(classes, opts.Props), 1), ...[createElement("ul", {}, ...children)]);
}
export const Item$002EOption = declare(function Fulma_Breadcrumb_Item_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Item$002EOption$reflection() {
  return union("Fulma.Breadcrumb.Item.Option", [], Item$002EOption, () => [["IsActive", [bool]], ["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Item$002EOptions = declare(function Fulma_Breadcrumb_Item_Options(arg1, arg2, arg3, arg4) {
  this.Props = arg1;
  this.IsActive = arg2;
  this.CustomClass = arg3;
  this.Modifiers = arg4;
}, Record);
export function Item$002EOptions$reflection() {
  return record("Fulma.Breadcrumb.Item.Options", [], Item$002EOptions, () => [["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["IsActive", bool], ["CustomClass", option(string)], ["Modifiers", list$$2(option(string))]]);
}
export function Item$002EOptions$$$get_Empty() {
  return new Item$002EOptions(new List(), false, null, new List());
}
export function item(options$$2, children$$5) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, _arg1$$1) {
    switch (_arg1$$1.tag) {
      case 1:
        {
          const props$$5 = _arg1$$1.fields[0];
          return new Item$002EOptions(props$$5, result$$1.IsActive, result$$1.CustomClass, result$$1.Modifiers);
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
          const state$$1 = _arg1$$1.fields[0];
          return new Item$002EOptions(result$$1.Props, state$$1, result$$1.CustomClass, result$$1.Modifiers);
        }
    }
  };

  const opts$$1 = fold(parseOptions$$1, Item$002EOptions$$$get_Empty(), options$$2);
  return createElement("li", createObj(ofSeq(delay(function () {
    return append(singleton(Common$0024002EHelpers$0024$0024$0024classes("", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List(["is-active", opts$$1.IsActive], new List()))), delay(function () {
      return opts$$1.Props;
    }));
  })), 1), ...children$$5);
}
