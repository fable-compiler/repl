import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Color$$$ofColor as Color$0024$0024$0024ofColor, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { ofSeq, fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
import { append, delay, singleton } from "../../fable-core/Seq.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4) {
  this.Color = arg1;
  this.CustomClass = arg2;
  this.Props = arg3;
  this.Modifiers = arg4;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, null, L(), L());
}
export function notification(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          const customClass = opt.fields[0];
          return new Options(result.Color, customClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          const props = opt.fields[0];
          return new Options(result.Color, result.CustomClass, props, result.Modifiers);
        }

      case 3:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Color, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const color = opt.fields[0];
          return new Options(Color$0024$0024$0024ofColor(color), result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("notification", L(opts.CustomClass, L(opts.Color, opts.Modifiers)), L());
  return createElement("div", createObj(L(classes, opts.Props), 1), ...children);
}
export function delete$(options$$2, children$$2) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  return createElement("button", createObj(ofSeq(delay(function () {
    return append(singleton(Common$0024002EHelpers$0024$0024$0024classes("delete", L(opts$$1.CustomClass, opts$$1.Modifiers), L())), delay(function () {
      return opts$$1.Props;
    }));
  })), 1), ...children$$2);
}
