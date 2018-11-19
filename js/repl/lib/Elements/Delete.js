import { List, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { ofSeq, fold } from "../../fable-core/List.js";
import { append, delay, empty, singleton } from "../../fable-core/Seq.js";
import { Props$002EDOMAttr as Props$0024002EDOMAttr } from "../Fable.React/Fable.Helpers.React.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5) {
  this.Size = arg1;
  this.Props = arg2;
  this.CustomClass = arg3;
  this.OnClick = arg4;
  this.Modifiers = arg5;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, new List(), null, null, new List());
}
export function delete$(options, children) {
  const parseOption = function parseOption(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          const props = opt.fields[0];
          return new Options(result.Size, props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 2:
        {
          const customClass = opt.fields[0];
          return new Options(result.Size, result.Props, customClass, result.OnClick, result.Modifiers);
        }

      case 3:
        {
          const cb = opt.fields[0];
          return new Options(result.Size, result.Props, result.CustomClass, cb, result.Modifiers);
        }

      case 4:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Size, result.Props, result.CustomClass, result.OnClick, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const size = opt.fields[0];
          return new Options(Size$0024$0024$0024ofSize(size), result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOption, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("delete", new List(opts.Size, new List(opts.CustomClass, opts.Modifiers)), new List());
  return createElement("a", createObj(ofSeq(delay(function () {
    return append(singleton(classes), delay(function () {
      return append(opts.Props, delay(function () {
        return opts.OnClick != null ? singleton(new Props$0024002EDOMAttr(40, "OnClick", opts.OnClick)) : empty();
      }));
    }));
  })), 1), ...children);
}
