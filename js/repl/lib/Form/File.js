import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Color$$$ofColor as Color$0024$0024$0024ofColor, Size$$$ofSize as Size$0024$0024$0024ofSize } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
import { Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12) {
  this.CustomClass = arg1;
  this.Props = arg2;
  this.IsFocused = arg3;
  this.IsActive = arg4;
  this.IsHovered = arg5;
  this.Size = arg6;
  this.Alignment = arg7;
  this.IsBoxed = arg8;
  this.Color = arg9;
  this.HasName = arg10;
  this.IsEmpty = arg11;
  this.Modifiers = arg12;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, L(), false, false, false, null, null, false, null, false, false, L());
}
export function file(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          const props = option.fields[0];
          return new Options(result.CustomClass, props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 2:
        {
          const state = option.fields[0];
          return new Options(result.CustomClass, result.Props, state, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 3:
        {
          const state$$1 = option.fields[0];
          return new Options(result.CustomClass, result.Props, result.IsFocused, state$$1, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 4:
        {
          const state$$2 = option.fields[0];
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, state$$2, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 5:
        {
          const size = option.fields[0];
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, Size$0024$0024$0024ofSize(size), result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 6:
        {
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, "is-fullwidth", result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 7:
        {
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, "is-centered", result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 8:
        {
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, "is-right", result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 12:
        {
          const color = option.fields[0];
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, Color$0024$0024$0024ofColor(color), result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 9:
        {
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, true, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 10:
        {
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, true, result.IsEmpty, result.Modifiers);
        }

      case 11:
        {
          const state$$3 = option.fields[0];
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, state$$3, result.Modifiers);
        }

      case 13:
        {
          const modifiers = option.fields[0];
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const customClass = option.fields[0];
          return new Options(customClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("file", L(opts.CustomClass, L(opts.Size, L(opts.Alignment, L(opts.Color, opts.Modifiers)))), L(["is-boxed", opts.IsBoxed], L(["has-name", opts.HasName], L(["is-focused", opts.IsFocused], L(["is-active", opts.IsActive], L(["is-hovered", opts.IsHovered], L(["is-empty", opts.IsEmpty], L())))))));
  return createElement("div", createObj(L(classes, opts.Props), 1), ...children);
}
export function cta(options$$2, children$$2) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("file-cta", L(opts$$1.CustomClass, opts$$1.Modifiers), L());
  return createElement("span", createObj(L(classes$$1, opts$$1.Props), 1), ...children$$2);
}
export function name(options$$3, children$$4) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("file-name", L(opts$$2.CustomClass, opts$$2.Modifiers), L());
  return createElement("span", createObj(L(classes$$2, opts$$2.Props), 1), ...children$$4);
}
export function icon(options$$4, children$$6) {
  const opts$$3 = Common$0024$0024$0024genericParse(options$$4);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("file-icon", L(opts$$3.CustomClass, opts$$3.Modifiers), L());
  return createElement("span", createObj(L(classes$$3, opts$$3.Props), 1), ...children$$6);
}
export function label(options$$5, children$$8) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$5);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("file-label", L(opts$$4.CustomClass, opts$$4.Modifiers), L());
  return createElement("label", createObj(L(classes$$4, opts$$4.Props), 1), ...children$$8);
}
export function input(options$$6) {
  const opts$$5 = Common$0024$0024$0024genericParse(options$$6);
  const classes$$5 = Common$0024002EHelpers$0024$0024$0024classes("file-input", L(opts$$5.CustomClass, opts$$5.Modifiers), L());
  return createElement("input", createObj(L(classes$$5, L(new Props$0024002EHTMLAttr(117, "Type", "file"), opts$$5.Props)), 1), ...L());
}
