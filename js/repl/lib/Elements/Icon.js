import { List, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5) {
  this.Size = arg1;
  this.Position = arg2;
  this.CustomClass = arg3;
  this.Props = arg4;
  this.Modifiers = arg5;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, null, null, new List(), new List());
}
export function icon(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          return new Options(result.Size, "is-left", result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          return new Options(result.Size, "is-right", result.CustomClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          const customClass = option.fields[0];
          return new Options(result.Size, result.Position, customClass, result.Props, result.Modifiers);
        }

      case 4:
        {
          const props = option.fields[0];
          return new Options(result.Size, result.Position, result.CustomClass, props, result.Modifiers);
        }

      case 5:
        {
          const modifiers = option.fields[0];
          return new Options(result.Size, result.Position, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const size = option.fields[0];
          return new Options(Size$0024$0024$0024ofSize(size), result.Position, result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("icon", new List(opts.Size, new List(opts.Position, new List(opts.CustomClass, opts.Modifiers))), new List());
  return createElement("span", createObj(new List(classes, opts.Props), 1), ...children);
}
