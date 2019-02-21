import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Color$$$ofColor as Color$0024$0024$0024ofColor, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { record, bool, option, union, string, list as list$$3, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { ofArray, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Tag_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Tag.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], ["Color", [Color$0024002EIColor$0024reflection()]], "IsDelete", ["Props", [list$$3(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$3(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Tag_Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Size = arg1;
  this.Color = arg2;
  this.IsDelete = arg3;
  this.Props = arg4;
  this.CustomClass = arg5;
  this.Modifiers = arg6;
}, Record);
export function Options$reflection() {
  return record("Fulma.Tag.Options", [], Options, () => [["Size", option(string)], ["Color", option(string)], ["IsDelete", bool], ["Props", list$$3(type("Fable.Helpers.React.Props.IHTMLProp"))], ["CustomClass", option(string)], ["Modifiers", list$$3(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, null, false, new List(), null, new List());
}
export function tag(options, children) {
  const parseOption = function parseOption(result, opt) {
    if (opt.tag === 2) {
      return new Options(result.Size, result.Color, true, result.Props, result.CustomClass, result.Modifiers);
    } else if (opt.tag === 1) {
      return new Options(result.Size, Color$0024$0024$0024ofColor(opt.fields[0]), result.IsDelete, result.Props, result.CustomClass, result.Modifiers);
    } else if (opt.tag === 3) {
      return new Options(result.Size, result.Color, result.IsDelete, opt.fields[0], result.CustomClass, result.Modifiers);
    } else if (opt.tag === 4) {
      return new Options(result.Size, result.Color, result.IsDelete, result.Props, opt.fields[0], result.Modifiers);
    } else if (opt.tag === 5) {
      return new Options(result.Size, result.Color, result.IsDelete, result.Props, result.CustomClass, Modifier$0024$0024$0024parseModifiers(opt.fields[0]));
    } else if (opt.fields[0].tag === 0) {
      console.warn("`is-small` is not a valid size for the tag element");
      return result;
    } else {
      return new Options(Size$0024$0024$0024ofSize(opt.fields[0]), result.Color, result.IsDelete, result.Props, result.CustomClass, result.Modifiers);
    }
  };

  const opts = fold(parseOption, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("tag", new List(opts.Size, new List(opts.Color, new List(opts.CustomClass, opts.Modifiers))), new List(["is-delete", opts.IsDelete], new List()));
  return createElement("span", createObj(new List(classes, opts.Props), 1), ...children);
}
export function delete$(options$$2, children$$3) {
  return tag(new List(new Option(2, "IsDelete"), options$$2), children$$3);
}
export const List$002EOption = declare(function Fulma_Tag_List_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function List$002EOption$reflection() {
  return union("Fulma.Tag.List.Option", [], List$002EOption, () => ["HasAddons", "IsCentered", "IsRight", ["Props", [list$$3(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$3(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const List$002EOptions = declare(function Fulma_Tag_List_Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.HasAddons = arg1;
  this.IsCentered = arg2;
  this.IsRight = arg3;
  this.Props = arg4;
  this.CustomClass = arg5;
  this.Modifiers = arg6;
}, Record);
export function List$002EOptions$reflection() {
  return record("Fulma.Tag.List.Options", [], List$002EOptions, () => [["HasAddons", bool], ["IsCentered", bool], ["IsRight", bool], ["Props", list$$3(type("Fable.Helpers.React.Props.IHTMLProp"))], ["CustomClass", option(string)], ["Modifiers", list$$3(option(string))]]);
}
export function List$002EOptions$$$get_Empty() {
  return new List$002EOptions(false, false, false, new List(), null, new List());
}
export function list(options$$3, children$$4) {
  const parseOption$$1 = function parseOption$$1(result$$1, opt$$1) {
    switch (opt$$1.tag) {
      case 1:
        {
          return new List$002EOptions(result$$1.HasAddons, true, result$$1.IsRight, result$$1.Props, result$$1.CustomClass, result$$1.Modifiers);
        }

      case 2:
        {
          return new List$002EOptions(result$$1.HasAddons, result$$1.IsCentered, true, result$$1.Props, result$$1.CustomClass, result$$1.Modifiers);
        }

      case 3:
        {
          const props$$3 = opt$$1.fields[0];
          return new List$002EOptions(result$$1.HasAddons, result$$1.IsCentered, result$$1.IsRight, props$$3, result$$1.CustomClass, result$$1.Modifiers);
        }

      case 4:
        {
          const customClass$$1 = opt$$1.fields[0];
          return new List$002EOptions(result$$1.HasAddons, result$$1.IsCentered, result$$1.IsRight, result$$1.Props, customClass$$1, result$$1.Modifiers);
        }

      case 5:
        {
          const modifiers$$1 = opt$$1.fields[0];
          return new List$002EOptions(result$$1.HasAddons, result$$1.IsCentered, result$$1.IsRight, result$$1.Props, result$$1.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers$$1));
        }

      default:
        {
          return new List$002EOptions(true, result$$1.IsCentered, result$$1.IsRight, result$$1.Props, result$$1.CustomClass, result$$1.Modifiers);
        }
    }
  };

  const opts$$1 = fold(parseOption$$1, List$002EOptions$$$get_Empty(), options$$3);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("tags", new List(opts$$1.CustomClass, opts$$1.Modifiers), ofArray([["has-addons", opts$$1.HasAddons], ["is-centered", opts$$1.IsCentered], ["is-right", opts$$1.IsRight]]));
  return createElement("div", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$4);
}
