import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Color$$$ofColor as Color$0024$0024$0024ofColor, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Size$$$ofSize as Size$0024$0024$0024ofSize } from "../Fulma/Common.js";
import { map, exists, ofSeq, fold } from "../../fable-core/List.js";
import { append, delay, empty, singleton } from "../../fable-core/Seq.js";
import { Props$002EDOMAttr as Props$0024002EDOMAttr, Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18) {
  this.Level = arg1;
  this.Size = arg2;
  this.IsOutlined = arg3;
  this.IsInverted = arg4;
  this.IsDisabled = arg5;
  this.IsHovered = arg6;
  this.IsFocused = arg7;
  this.IsExpanded = arg8;
  this.IsText = arg9;
  this.IsRounded = arg10;
  this.IsActive = arg11;
  this.IsLoading = arg12;
  this.IsStatic = arg13;
  this.IsFullWidth = arg14;
  this.Props = arg15;
  this.CustomClass = arg16;
  this.OnClick = arg17;
  this.Modifiers = arg18;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, null, false, false, false, false, false, false, false, false, false, false, false, false, L(), null, null, L());
}
export function btnView(element, options, children) {
  const parseOption = function parseOption(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          const size = opt.fields[0];
          return new Options(result.Level, Size$0024$0024$0024ofSize(size), result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 2:
        {
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, true, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 3:
        {
          return new Options("is-link", result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 4:
        {
          return new Options(result.Level, result.Size, true, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 5:
        {
          return new Options(result.Level, result.Size, result.IsOutlined, true, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 6:
        {
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, true, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 7:
        {
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, true, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 8:
        {
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, true, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 9:
        {
          const state = opt.fields[0];
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, state, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 10:
        {
          const state$$1 = opt.fields[0];
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, state$$1, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 11:
        {
          const state$$2 = opt.fields[0];
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, state$$2, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 12:
        {
          const state$$3 = opt.fields[0];
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, state$$3, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 13:
        {
          const state$$4 = opt.fields[0];
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, state$$4, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 14:
        {
          const isDisabled = opt.fields[0];
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, isDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 15:
        {
          const props = opt.fields[0];
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 17:
        {
          const customClass = opt.fields[0];
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, customClass, result.OnClick, result.Modifiers);
        }

      case 16:
        {
          const cb = opt.fields[0];
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, cb, result.Modifiers);
        }

      case 18:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Level, result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const color = opt.fields[0];
          return new Options(Color$0024$0024$0024ofColor(color), result.Size, result.IsOutlined, result.IsInverted, result.IsDisabled, result.IsHovered, result.IsFocused, result.IsExpanded, result.IsText, result.IsRounded, result.IsActive, result.IsLoading, result.IsStatic, result.IsFullWidth, result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOption, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("button", L(opts.Level, L(opts.Size, L(opts.CustomClass, opts.Modifiers))), L(["is-outlined", opts.IsOutlined], L(["is-inverted", opts.IsInverted], L(["is-text", opts.IsText], L(["is-rounded", opts.IsRounded], L(["is-expanded", opts.IsExpanded], L(["is-hovered", opts.IsHovered], L(["is-focus", opts.IsFocused], L(["is-active", opts.IsActive], L(["is-loading", opts.IsLoading], L(["is-static", opts.IsStatic], L(["is-fullwidth", opts.IsFullWidth], L()))))))))))));
  return element(ofSeq(delay(function () {
    return append(singleton(classes), delay(function () {
      return append(singleton(new Props$0024002EHTMLAttr(37, "Disabled", opts.IsDisabled)), delay(function () {
        return append(opts.OnClick != null ? singleton(new Props$0024002EDOMAttr(40, "OnClick", opts.OnClick)) : empty(), delay(function () {
          return opts.Props;
        }));
      }));
    }));
  })), children);
}
export function button(options$$2, children$$1) {
  return btnView(function (b, c) {
    return createElement("button", createObj(b, 1), ...c);
  }, options$$2, children$$1);
}
export function span(options$$3, children$$3) {
  return btnView(function (b$$2, c$$2) {
    return createElement("span", createObj(b$$2, 1), ...c$$2);
  }, options$$3, children$$3);
}
export function a(options$$4, children$$5) {
  return btnView(function (b$$4, c$$4) {
    return createElement("a", createObj(b$$4, 1), ...c$$4);
  }, options$$4, children$$5);
}
export function Input$$$btnInput(typ, options$$5) {
  const hasProps = exists(function predicate(opts$$1) {
    if (opts$$1.tag === 15) {
      return true;
    } else {
      return false;
    }
  }, options$$5);

  if (hasProps) {
    const newOptions = map(function mapping(opts$$2) {
      if (opts$$2.tag === 15) {
        const props$$4 = opts$$2.fields[0];
        return new Option(15, "Props", L(new Props$0024002EHTMLAttr(117, "Type", typ), props$$4));
      } else {
        const forward = opts$$2;
        return forward;
      }
    }, options$$5);
    return btnView(function (options$$6, _arg1) {
      return createElement("input", createObj(options$$6, 1), ...L());
    }, newOptions, L());
  } else {
    return btnView(function (options$$7, _arg2) {
      return createElement("input", createObj(options$$7, 1), ...L());
    }, L(new Option(15, "Props", L(new Props$0024002EHTMLAttr(117, "Type", typ), L())), options$$5), L());
  }
}
export function Input$$$reset(options$$8) {
  return Input$$$btnInput("reset", options$$8);
}
export function Input$$$submit(options$$9) {
  return Input$$$btnInput("submit", options$$9);
}
export const List$002EOption = declare(function List$002EOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const List$002EOptions = declare(function List$002EOptions(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.HasAddons = arg1;
  this.IsCentered = arg2;
  this.IsRight = arg3;
  this.Props = arg4;
  this.CustomClass = arg5;
  this.Modifiers = arg6;
}, Record);
export function List$002EOptions$$$get_Empty() {
  return new List$002EOptions(false, false, false, L(), null, L());
}
export function list(options$$10, children$$7) {
  const parseOption$$1 = function parseOption$$1(result$$1, opt$$1) {
    switch (opt$$1.tag) {
      case 1:
        {
          return new List$002EOptions(result$$1.HasAddons, true, result$$1.IsRight, result$$1.Props, result$$1.CustomClass, result$$1.Modifiers);
        }

      case 2:
        {
          return new List$002EOptions(result$$1.HasAddons, result$$1.IsCentered, true, result$$1.Props, result$$1.CustomClass, result$$1.Modifiers);
        }

      case 3:
        {
          const props$$7 = opt$$1.fields[0];
          return new List$002EOptions(result$$1.HasAddons, result$$1.IsCentered, result$$1.IsRight, props$$7, result$$1.CustomClass, result$$1.Modifiers);
        }

      case 4:
        {
          const customClass$$1 = opt$$1.fields[0];
          return new List$002EOptions(result$$1.HasAddons, result$$1.IsCentered, result$$1.IsRight, result$$1.Props, customClass$$1, result$$1.Modifiers);
        }

      case 5:
        {
          const modifiers$$1 = opt$$1.fields[0];
          return new List$002EOptions(result$$1.HasAddons, result$$1.IsCentered, result$$1.IsRight, result$$1.Props, result$$1.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers$$1));
        }

      default:
        {
          return new List$002EOptions(true, result$$1.IsCentered, result$$1.IsRight, result$$1.Props, result$$1.CustomClass, result$$1.Modifiers);
        }
    }
  };

  const opts$$3 = fold(parseOption$$1, List$002EOptions$$$get_Empty(), options$$10);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("buttons", L(opts$$3.CustomClass, opts$$3.Modifiers), L(["has-addons", opts$$3.HasAddons], L(["is-centered", opts$$3.IsCentered], L(["is-right", opts$$3.IsRight], L()))));
  return createElement("div", createObj(L(classes$$1, opts$$3.Props), 1), ...children$$7);
}
