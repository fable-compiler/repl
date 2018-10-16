import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Color$$$ofColor as Color$0024$0024$0024ofColor } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4) {
  this.CustomClass = arg1;
  this.Props = arg2;
  this.Color = arg3;
  this.Modifiers = arg4;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, L(), null, L());
}
export function help(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          const props = _arg1.fields[0];
          return new Options(result.CustomClass, props, result.Color, result.Modifiers);
        }

      case 2:
        {
          const color = _arg1.fields[0];
          return new Options(result.CustomClass, result.Props, Color$0024$0024$0024ofColor(color), result.Modifiers);
        }

      case 3:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.CustomClass, result.Props, result.Color, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const customClass = _arg1.fields[0];
          return new Options(customClass, result.Props, result.Color, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("help", L(opts.CustomClass, L(opts.Color, opts.Modifiers)), L());
  return createElement("p", createObj(L(classes, opts.Props), 1), ...children);
}
