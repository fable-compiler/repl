import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5) {
  this.Props = arg1;
  this.CustomClass = arg2;
  this.IsFluid = arg3;
  this.Breakpoint = arg4;
  this.Modifiers = arg5;
}, Record);
export function Options$$$get_Empty() {
  return new Options(L(), null, false, null, L());
}
export function container(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 0:
        {
          return new Options(result.Props, result.CustomClass, true, result.Breakpoint, result.Modifiers);
        }

      case 1:
        {
          return new Options(result.Props, result.CustomClass, result.IsFluid, "is-widescreen", result.Modifiers);
        }

      case 2:
        {
          return new Options(result.Props, result.CustomClass, result.IsFluid, "is-fullhd", result.Modifiers);
        }

      case 4:
        {
          const customClass = opt.fields[0];
          return new Options(result.Props, customClass, result.IsFluid, result.Breakpoint, result.Modifiers);
        }

      case 5:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Props, result.CustomClass, result.IsFluid, result.Breakpoint, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const props = opt.fields[0];
          return new Options(props, result.CustomClass, result.IsFluid, result.Breakpoint, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("container", L(opts.Breakpoint, L(opts.CustomClass, opts.Modifiers)), L(["is-fluid", opts.IsFluid], L()));
  return createElement("div", createObj(L(classes, opts.Props), 1), ...children);
}
