import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5) {
  this.Size = arg1;
  this.Ratio = arg2;
  this.CustomClass = arg3;
  this.Props = arg4;
  this.Modifiers = arg5;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, null, null, L(), L());
}
export function image(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          return new Options("is-24x24", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          return new Options("is-32x32", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          return new Options("is-48x48", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }

      case 4:
        {
          return new Options("is-64x64", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }

      case 5:
        {
          return new Options("is-96x96", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }

      case 6:
        {
          return new Options("is-128x128", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }

      case 7:
        {
          return new Options(result.Size, "is-square", result.CustomClass, result.Props, result.Modifiers);
        }

      case 8:
        {
          return new Options(result.Size, "is-1by1", result.CustomClass, result.Props, result.Modifiers);
        }

      case 9:
        {
          return new Options(result.Size, "is-5by4", result.CustomClass, result.Props, result.Modifiers);
        }

      case 10:
        {
          return new Options(result.Size, "is-4by3", result.CustomClass, result.Props, result.Modifiers);
        }

      case 11:
        {
          return new Options(result.Size, "is-3by2", result.CustomClass, result.Props, result.Modifiers);
        }

      case 12:
        {
          return new Options(result.Size, "is-5by3", result.CustomClass, result.Props, result.Modifiers);
        }

      case 13:
        {
          return new Options(result.Size, "is-16by9", result.CustomClass, result.Props, result.Modifiers);
        }

      case 14:
        {
          return new Options(result.Size, "is-2by1", result.CustomClass, result.Props, result.Modifiers);
        }

      case 15:
        {
          return new Options(result.Size, "is-3by1", result.CustomClass, result.Props, result.Modifiers);
        }

      case 16:
        {
          return new Options(result.Size, "is-4by5", result.CustomClass, result.Props, result.Modifiers);
        }

      case 17:
        {
          return new Options(result.Size, "is-3by4", result.CustomClass, result.Props, result.Modifiers);
        }

      case 18:
        {
          return new Options(result.Size, "is-2by3", result.CustomClass, result.Props, result.Modifiers);
        }

      case 19:
        {
          return new Options(result.Size, "is-3by5", result.CustomClass, result.Props, result.Modifiers);
        }

      case 20:
        {
          return new Options(result.Size, "is-9by16", result.CustomClass, result.Props, result.Modifiers);
        }

      case 21:
        {
          return new Options(result.Size, "is-1by2", result.CustomClass, result.Props, result.Modifiers);
        }

      case 22:
        {
          return new Options(result.Size, "is-1by3", result.CustomClass, result.Props, result.Modifiers);
        }

      case 23:
        {
          const customClass = _arg1.fields[0];
          return new Options(result.Size, result.Ratio, customClass, result.Props, result.Modifiers);
        }

      case 24:
        {
          const props = _arg1.fields[0];
          return new Options(result.Size, result.Ratio, result.CustomClass, props, result.Modifiers);
        }

      case 25:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.Size, result.Ratio, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new Options("is-16x16", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("image", L(opts.Size, L(opts.Ratio, L(opts.CustomClass, opts.Modifiers))), L());
  return createElement("figure", createObj(L(classes, opts.Props), 1), ...children);
}
