import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4) {
  this.Size = arg1;
  this.Props = arg2;
  this.CustomClass = arg3;
  this.Modifiers = arg4;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, L(), null, L());
}
export function content(options, children) {
  const parseOption = function parseOption(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          const customClass = opt.fields[0];
          return new Options(result.Size, result.Props, customClass, result.Modifiers);
        }

      case 2:
        {
          const props = opt.fields[0];
          return new Options(result.Size, props, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Size, result.Props, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const size = opt.fields[0];
          return new Options(Size$0024$0024$0024ofSize(size), result.Props, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOption, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("content", L(opts.CustomClass, L(opts.Size, opts.Modifiers)), L());
  return createElement("div", createObj(L(classes, opts.Props), 1), ...children);
}
