import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Color$$$ofColor as Color$0024$0024$0024ofColor } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Size = arg1;
  this.Color = arg2;
  this.IsDelete = arg3;
  this.Props = arg4;
  this.CustomClass = arg5;
  this.Modifiers = arg6;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, null, false, L(), null, L());
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
  const classes = Common$0024002EHelpers$0024$0024$0024classes("tag", L(opts.Size, L(opts.Color, L(opts.CustomClass, opts.Modifiers))), L(["is-delete", opts.IsDelete], L()));
  return createElement("span", createObj(L(classes, opts.Props), 1), ...children);
}
export function delete$(options$$2, children$$2) {
  return tag(L(new Option(2, "IsDelete"), options$$2), children$$2);
}
export const List$002EOption = declare(function List$002EOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const List$002EOptions = declare(function List$002EOptions(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.HasAddons = arg1;
  this.IsCentered = arg2;
  this.IsRight = arg3;
  this.Props = arg4;
  this.CustomClass = arg5;
  this.Modifiers = arg6;
}, Record);
export function List$002EOptions$$$get_Empty() {
  return new List$002EOptions(false, false, false, L(), null, L());
}
export function list(options$$3, children$$3) {
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
          const props$$2 = opt$$1.fields[0];
          return new List$002EOptions(result$$1.HasAddons, result$$1.IsCentered, result$$1.IsRight, props$$2, result$$1.CustomClass, result$$1.Modifiers);
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
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("tags", L(opts$$1.CustomClass, opts$$1.Modifiers), L(["has-addons", opts$$1.HasAddons], L(["is-centered", opts$$1.IsCentered], L(["is-right", opts$$1.IsRight], L()))));
  return createElement("div", createObj(L(classes$$1, opts$$1.Props), 1), ...children$$3);
}
