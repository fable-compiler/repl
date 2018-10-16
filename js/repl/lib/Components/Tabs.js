import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Size$$$ofSize as Size$0024$0024$0024ofSize } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.Alignment = arg1;
  this.Size = arg2;
  this.IsBoxed = arg3;
  this.IsToggle = arg4;
  this.IsToggleRounded = arg5;
  this.IsFullwidth = arg6;
  this.CustomClass = arg7;
  this.Props = arg8;
  this.Modifiers = arg9;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, null, false, false, false, false, null, L(), L());
}
export const Tab$002EOption = declare(function Tab$002EOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Tab$002EOptions = declare(function Tab$002EOptions(arg1, arg2, arg3, arg4) {
  this.IsActive = arg1;
  this.CustomClass = arg2;
  this.Props = arg3;
  this.Modifiers = arg4;
}, Record);
export function Tab$002EOptions$$$get_Empty() {
  return new Tab$002EOptions(false, null, L(), L());
}
export function tabs(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          return new Options("is-right", result.Size, result.IsBoxed, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          return new Options(result.Alignment, result.Size, true, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, result.Props, result.Modifiers);
        }

      case 4:
        {
          return new Options(result.Alignment, result.Size, result.IsBoxed, true, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, result.Props, result.Modifiers);
        }

      case 5:
        {
          return new Options(result.Alignment, result.Size, result.IsBoxed, result.IsToggle, true, result.IsFullwidth, result.CustomClass, result.Props, result.Modifiers);
        }

      case 6:
        {
          return new Options(result.Alignment, result.Size, result.IsBoxed, result.IsToggle, result.IsToggleRounded, true, result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          const size = opt.fields[0];
          return new Options(result.Alignment, Size$0024$0024$0024ofSize(size), result.IsBoxed, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, result.Props, result.Modifiers);
        }

      case 7:
        {
          const customClass = opt.fields[0];
          return new Options(result.Alignment, result.Size, result.IsBoxed, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, customClass, result.Props, result.Modifiers);
        }

      case 8:
        {
          const props = opt.fields[0];
          return new Options(result.Alignment, result.Size, result.IsBoxed, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, props, result.Modifiers);
        }

      case 9:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Alignment, result.Size, result.IsBoxed, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new Options("is-centered", result.Size, result.IsBoxed, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("tabs", L(opts.Alignment, L(opts.Size, L(opts.CustomClass, opts.Modifiers))), L(["is-boxed", opts.IsBoxed], L(["is-fullwidth", opts.IsFullwidth], L(["is-toggle", opts.IsToggle], L(["is-toggle-rounded", opts.IsToggleRounded], L())))));
  return createElement("div", createObj(L(classes, opts.Props), 1), ...[createElement("ul", {}, ...children)]);
}
export function tab(options$$2, children$$3) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, opt$$1) {
    switch (opt$$1.tag) {
      case 1:
        {
          const customClass$$1 = opt$$1.fields[0];
          return new Tab$002EOptions(result$$1.IsActive, customClass$$1, result$$1.Props, result$$1.Modifiers);
        }

      case 2:
        {
          const props$$3 = opt$$1.fields[0];
          return new Tab$002EOptions(result$$1.IsActive, result$$1.CustomClass, props$$3, result$$1.Modifiers);
        }

      case 3:
        {
          const modifiers$$1 = opt$$1.fields[0];
          return new Tab$002EOptions(result$$1.IsActive, result$$1.CustomClass, result$$1.Props, Modifier$0024$0024$0024parseModifiers(modifiers$$1));
        }

      default:
        {
          const state$$1 = opt$$1.fields[0];
          return new Tab$002EOptions(state$$1, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }
    }
  };

  const opts$$1 = fold(parseOptions$$1, Tab$002EOptions$$$get_Empty(), options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("", L(opts$$1.CustomClass, opts$$1.Modifiers), L(["is-active", opts$$1.IsActive], L()));
  return createElement("li", createObj(L(classes$$1, opts$$1.Props), 1), ...children$$3);
}
