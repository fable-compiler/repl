import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Size$$$ofSize as Size$0024$0024$0024ofSize, Color$$$ofColor as Color$0024$0024$0024ofColor } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5) {
  this.Props = arg1;
  this.Color = arg2;
  this.Size = arg3;
  this.CustomClass = arg4;
  this.Modifiers = arg5;
}, Record);
export function Options$$$get_Empty() {
  return new Options(L(), null, null, null, L());
}
export function message(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          const color = opt.fields[0];
          return new Options(result.Props, Color$0024$0024$0024ofColor(color), result.Size, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          const customClass = opt.fields[0];
          return new Options(result.Props, result.Color, result.Size, customClass, result.Modifiers);
        }

      case 2:
        {
          const size = opt.fields[0];
          return new Options(result.Props, result.Color, Size$0024$0024$0024ofSize(size), result.CustomClass, result.Modifiers);
        }

      case 4:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Props, result.Color, result.Size, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const props = opt.fields[0];
          return new Options(props, result.Color, result.Size, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("message", L(opts.Color, L(opts.CustomClass, L(opts.Size, opts.Modifiers))), L());
  return createElement("article", createObj(L(classes, opts.Props), 1), ...children);
}
export function header(options$$2, children$$2) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("message-header", L(opts$$1.CustomClass, opts$$1.Modifiers), L());
  return createElement("div", createObj(L(classes$$1, opts$$1.Props), 1), ...children$$2);
}
export function body(options$$3, children$$4) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("message-body", L(opts$$2.CustomClass, opts$$2.Modifiers), L());
  return createElement("div", createObj(L(classes$$2, opts$$2.Props), 1), ...children$$4);
}
