import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.HasIconLeft = arg1;
  this.HasIconRight = arg2;
  this.CustomClass = arg3;
  this.Props = arg4;
  this.IsLoading = arg5;
  this.IsExpanded = arg6;
  this.Modifiers = arg7;
}, Record);
export function Options$$$get_Empty() {
  return new Options(false, false, null, L(), false, false, L());
}
export function controlView(element, options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          return new Options(true, result.HasIconRight, result.CustomClass, result.Props, result.IsLoading, result.IsExpanded, result.Modifiers);
        }

      case 4:
        {
          const customClass = _arg1.fields[0];
          return new Options(result.HasIconLeft, result.HasIconRight, customClass, result.Props, result.IsLoading, result.IsExpanded, result.Modifiers);
        }

      case 5:
        {
          const props = _arg1.fields[0];
          return new Options(result.HasIconLeft, result.HasIconRight, result.CustomClass, props, result.IsLoading, result.IsExpanded, result.Modifiers);
        }

      case 2:
        {
          const state = _arg1.fields[0];
          return new Options(result.HasIconLeft, result.HasIconRight, result.CustomClass, result.Props, state, result.IsExpanded, result.Modifiers);
        }

      case 3:
        {
          return new Options(result.HasIconLeft, result.HasIconRight, result.CustomClass, result.Props, result.IsLoading, true, result.Modifiers);
        }

      case 6:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.HasIconLeft, result.HasIconRight, result.CustomClass, result.Props, result.IsLoading, result.IsExpanded, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new Options(result.HasIconLeft, true, result.CustomClass, result.Props, result.IsLoading, result.IsExpanded, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("control", L(opts.CustomClass, opts.Modifiers), L(["is-loading", opts.IsLoading], L(["has-icons-right", opts.HasIconRight], L(["has-icons-left", opts.HasIconLeft], L(["is-expanded", opts.IsExpanded], L())))));
  return element(L(classes, opts.Props), children);
}
export function div(x, y) {
  return controlView(function (b, c) {
    return createElement("div", createObj(b, 1), ...c);
  }, x, y);
}
export function p(x$$1, y$$1) {
  return controlView(function (b$$2, c$$2) {
    return createElement("p", createObj(b$$2, 1), ...c$$2);
  }, x$$1, y$$1);
}
