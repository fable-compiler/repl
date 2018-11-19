import { List, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Color$$$ofColor as Color$0024$0024$0024ofColor } from "../Fulma/Common.js";
import { ofSeq, fold } from "../../fable-core/List.js";
import { append, delay, empty, singleton } from "../../fable-core/Seq.js";
import { Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
import { createObj, int32ToString } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.Size = arg1;
  this.Color = arg2;
  this.Props = arg3;
  this.Max = arg4;
  this.Value = arg5;
  this.CustomClass = arg6;
  this.Modifiers = arg7;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, null, new List(), null, null, null, new List());
}
export function progress(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          const color = _arg1.fields[0];
          return new Options(result.Size, Color$0024$0024$0024ofColor(color), result.Props, result.Max, result.Value, result.CustomClass, result.Modifiers);
        }

      case 2:
        {
          const props = _arg1.fields[0];
          return new Options(result.Size, result.Color, props, result.Max, result.Value, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          const value = _arg1.fields[0] | 0;
          return new Options(result.Size, result.Color, result.Props, result.Max, value, result.CustomClass, result.Modifiers);
        }

      case 4:
        {
          const max = _arg1.fields[0] | 0;
          return new Options(result.Size, result.Color, result.Props, max, result.Value, result.CustomClass, result.Modifiers);
        }

      case 5:
        {
          const customClass = _arg1.fields[0];
          return new Options(result.Size, result.Color, result.Props, result.Max, result.Value, customClass, result.Modifiers);
        }

      case 6:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.Size, result.Color, result.Props, result.Max, result.Value, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const size = _arg1.fields[0];
          return new Options(Size$0024$0024$0024ofSize(size), result.Color, result.Props, result.Max, result.Value, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("progress", new List(opts.Size, new List(opts.Color, new List(opts.CustomClass, opts.Modifiers))), new List());
  return createElement("progress", createObj(ofSeq(delay(function () {
    return append(singleton(classes), delay(function () {
      return append(opts.Props, delay(function () {
        return append(opts.Value != null ? singleton(new Props$0024002EHTMLAttr(119, "Value", int32ToString(opts.Value))) : empty(), delay(function () {
          return opts.Max != null ? singleton(new Props$0024002EHTMLAttr(72, "Max", opts.Max)) : empty();
        }));
      }));
    }));
  })), 1), ...children);
}
