import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Size$$$ofSize as Size$0024$0024$0024ofSize, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
import { Props$002EDOMAttr as Props$0024002EDOMAttr } from "../Fable.React/Fable.Helpers.React.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4) {
  this.Props = arg1;
  this.IsActive = arg2;
  this.CustomClass = arg3;
  this.Modifiers = arg4;
}, Record);
export function Options$$$get_Empty() {
  return new Options(L(), false, null, L());
}
export const Close$002EOption = declare(function Close$002EOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Close$002EOptions = declare(function Close$002EOptions(arg1, arg2, arg3, arg4, arg5) {
  this.Props = arg1;
  this.Size = arg2;
  this.CustomClass = arg3;
  this.OnClick = arg4;
  this.Modifiers = arg5;
}, Record);
export function Close$002EOptions$$$get_Empty() {
  return new Close$002EOptions(L(), null, null, null, L());
}
export function modal(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 2:
        {
          const customClass = opt.fields[0];
          return new Options(result.Props, result.IsActive, customClass, result.Modifiers);
        }

      case 1:
        {
          const state = opt.fields[0];
          return new Options(result.Props, state, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Props, result.IsActive, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const props = opt.fields[0];
          return new Options(props, result.IsActive, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("modal", L(opts.CustomClass, opts.Modifiers), L(["is-active", opts.IsActive], L()));
  return createElement("div", createObj(L(classes, opts.Props), 1), ...children);
}
export function close(options$$2, children$$2) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, opt$$1) {
    var $target$$1, props$$2, customClass$$1, size, cb, modifiers$$1;

    if (opt$$1.tag === 2) {
      $target$$1 = 1;
      customClass$$1 = opt$$1.fields[0];
    } else if (opt$$1.tag === 1) {
      if (opt$$1.fields[0].tag === 0) {
        $target$$1 = 2;
      } else if (opt$$1.fields[0].tag === 1) {
        $target$$1 = 2;
      } else {
        $target$$1 = 3;
        size = opt$$1.fields[0];
      }
    } else if (opt$$1.tag === 3) {
      $target$$1 = 4;
      cb = opt$$1.fields[0];
    } else if (opt$$1.tag === 4) {
      $target$$1 = 5;
      modifiers$$1 = opt$$1.fields[0];
    } else {
      $target$$1 = 0;
      props$$2 = opt$$1.fields[0];
    }

    switch ($target$$1) {
      case 0:
        {
          return new Close$002EOptions(props$$2, result$$1.Size, result$$1.CustomClass, result$$1.OnClick, result$$1.Modifiers);
        }

      case 1:
        {
          return new Close$002EOptions(result$$1.Props, result$$1.Size, customClass$$1, result$$1.OnClick, result$$1.Modifiers);
        }

      case 2:
        {
          console.warn("`is-small` and `is-medium` are not valid sizes for 'modal close'");
          return result$$1;
        }

      case 3:
        {
          return new Close$002EOptions(result$$1.Props, Size$0024$0024$0024ofSize(size), result$$1.CustomClass, result$$1.OnClick, result$$1.Modifiers);
        }

      case 4:
        {
          return new Close$002EOptions(result$$1.Props, result$$1.Size, result$$1.CustomClass, cb, result$$1.Modifiers);
        }

      case 5:
        {
          return new Close$002EOptions(result$$1.Props, result$$1.Size, result$$1.CustomClass, result$$1.OnClick, Modifier$0024$0024$0024parseModifiers(modifiers$$1));
        }
    }
  };

  const opts$$1 = fold(parseOptions$$1, Close$002EOptions$$$get_Empty(), options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("modal-close", L(opts$$1.Size, L(opts$$1.CustomClass, opts$$1.Modifiers)), L());
  let opts$$2;

  if (opts$$1.OnClick == null) {
    opts$$2 = L(classes$$1, opts$$1.Props);
  } else {
    const v = opts$$1.OnClick;
    opts$$2 = L(classes$$1, L(new Props$0024002EDOMAttr(40, "OnClick", v), opts$$1.Props));
  }

  return createElement("button", createObj(opts$$2, 1), ...children$$2);
}
export function background(options$$4, children$$4) {
  const opts$$3 = Common$0024$0024$0024genericParse(options$$4);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("modal-background", L(opts$$3.CustomClass, opts$$3.Modifiers), L());
  return createElement("div", createObj(L(classes$$2, opts$$3.Props), 1), ...children$$4);
}
export function content(options$$5, children$$6) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$5);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("modal-content", L(opts$$4.CustomClass, opts$$4.Modifiers), L());
  return createElement("div", createObj(L(classes$$3, opts$$4.Props), 1), ...children$$6);
}
export function Card$$$card(options$$6, children$$8) {
  const opts$$5 = Common$0024$0024$0024genericParse(options$$6);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("modal-card", L(opts$$5.CustomClass, opts$$5.Modifiers), L());
  return createElement("div", createObj(L(classes$$4, opts$$5.Props), 1), ...children$$8);
}
export function Card$$$head(options$$7, children$$10) {
  const opts$$6 = Common$0024$0024$0024genericParse(options$$7);
  const classes$$5 = Common$0024002EHelpers$0024$0024$0024classes("modal-card-head", L(opts$$6.CustomClass, opts$$6.Modifiers), L());
  return createElement("header", createObj(L(classes$$5, opts$$6.Props), 1), ...children$$10);
}
export function Card$$$foot(options$$8, children$$12) {
  const opts$$7 = Common$0024$0024$0024genericParse(options$$8);
  const classes$$6 = Common$0024002EHelpers$0024$0024$0024classes("modal-card-foot", L(opts$$7.CustomClass, opts$$7.Modifiers), L());
  return createElement("footer", createObj(L(classes$$6, opts$$7.Props), 1), ...children$$12);
}
export function Card$$$title(options$$9, children$$14) {
  const opts$$8 = Common$0024$0024$0024genericParse(options$$9);
  const classes$$7 = Common$0024002EHelpers$0024$0024$0024classes("modal-card-title", L(opts$$8.CustomClass, opts$$8.Modifiers), L());
  return createElement("div", createObj(L(classes$$7, opts$$8.Props), 1), ...children$$14);
}
export function Card$$$body(options$$10, children$$16) {
  const opts$$9 = Common$0024$0024$0024genericParse(options$$10);
  const classes$$8 = Common$0024002EHelpers$0024$0024$0024classes("modal-card-body", L(opts$$9.CustomClass, opts$$9.Modifiers), L());
  return createElement("section", createObj(L(classes$$8, opts$$9.Props), 1), ...children$$16);
}
