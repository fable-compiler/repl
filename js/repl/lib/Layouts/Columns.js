import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Display = arg1;
  this.Spacing = arg2;
  this.Alignment = arg3;
  this.CustomClass = arg4;
  this.Props = arg5;
  this.Modifiers = arg6;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, null, null, null, L(), L());
}
export function columns(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          return new Options(result.Display, result.Spacing, "is-vcentered", result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          return new Options(result.Display, "is-multiline", result.Alignment, result.CustomClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          return new Options(result.Display, "is-gapless", result.Alignment, result.CustomClass, result.Props, result.Modifiers);
        }

      case 4:
        {
          return new Options(result.Display, "is-grid", result.Alignment, result.CustomClass, result.Props, result.Modifiers);
        }

      case 5:
        {
          return new Options("is-mobile", result.Spacing, result.Alignment, result.CustomClass, result.Props, result.Modifiers);
        }

      case 6:
        {
          return new Options("is-desktop", result.Spacing, result.Alignment, result.CustomClass, result.Props, result.Modifiers);
        }

      case 7:
        {
          const customClass = _arg1.fields[0];
          return new Options(result.Display, result.Spacing, result.Alignment, customClass, result.Props, result.Modifiers);
        }

      case 8:
        {
          const props = _arg1.fields[0];
          return new Options(result.Display, result.Spacing, result.Alignment, result.CustomClass, props, result.Modifiers);
        }

      case 9:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.Display, result.Spacing, result.Alignment, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new Options(result.Display, result.Spacing, "is-centered", result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("columns", L(opts.Alignment, L(opts.Display, L(opts.Spacing, L(opts.CustomClass, opts.Modifiers)))), L());
  return createElement("div", createObj(L(classes, opts.Props), 1), ...children);
}
