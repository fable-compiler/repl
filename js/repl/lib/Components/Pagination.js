import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Size$$$ofSize as Size$0024$0024$0024ofSize } from "../Fulma/Common.js";
import { ofSeq, fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
import { append, delay, singleton } from "../../fable-core/Seq.js";
import { Props$002EDangerousHtml as Props$0024002EDangerousHtml, Props$002EDOMAttr as Props$0024002EDOMAttr } from "../Fable.React/Fable.Helpers.React.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Alignment = arg1;
  this.Size = arg2;
  this.IsRounded = arg3;
  this.CustomClass = arg4;
  this.Props = arg5;
  this.Modifiers = arg6;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, null, false, null, L(), L());
}
export const Link$002EOption = declare(function Link$002EOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Link$002EOptions = declare(function Link$002EOptions(arg1, arg2, arg3, arg4) {
  this.IsCurrent = arg1;
  this.CustomClass = arg2;
  this.Props = arg3;
  this.Modifiers = arg4;
}, Record);
export function Link$002EOptions$$$get_Empty() {
  return new Link$002EOptions(false, null, L(), L());
}
export function pagination(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          return new Options("is-right", result.Size, result.IsRounded, result.CustomClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          const size = opt.fields[0];
          return new Options(result.Alignment, Size$0024$0024$0024ofSize(size), result.IsRounded, result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          return new Options(result.Alignment, result.Size, true, result.CustomClass, result.Props, result.Modifiers);
        }

      case 4:
        {
          const customClass = opt.fields[0];
          return new Options(result.Alignment, result.Size, result.IsRounded, customClass, result.Props, result.Modifiers);
        }

      case 5:
        {
          const props = opt.fields[0];
          return new Options(result.Alignment, result.Size, result.IsRounded, result.CustomClass, props, result.Modifiers);
        }

      case 6:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Alignment, result.Size, result.IsRounded, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new Options("is-centered", result.Size, result.IsRounded, result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("pagination", L(opts.Alignment, L(opts.Size, L(opts.CustomClass, opts.Modifiers))), L(["is-rounded", opts.IsRounded], L()));
  return createElement("nav", createObj(L(classes, opts.Props), 1), ...children);
}
export function previous(options$$2, children$$2) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("pagination-previous", L(opts$$1.CustomClass, opts$$1.Modifiers), L());
  return createElement("a", createObj(L(classes$$1, opts$$1.Props), 1), ...children$$2);
}
export function next(options$$3, children$$4) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("pagination-next", L(opts$$2.CustomClass, opts$$2.Modifiers), L());
  return createElement("a", createObj(L(classes$$2, opts$$2.Props), 1), ...children$$4);
}
export function link(options$$4, children$$6) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, opt$$1) {
    switch (opt$$1.tag) {
      case 1:
        {
          const customClass$$1 = opt$$1.fields[0];
          return new Link$002EOptions(result$$1.IsCurrent, customClass$$1, result$$1.Props, result$$1.Modifiers);
        }

      case 2:
        {
          const props$$4 = opt$$1.fields[0];
          return new Link$002EOptions(result$$1.IsCurrent, result$$1.CustomClass, props$$4, result$$1.Modifiers);
        }

      case 3:
        {
          const modifiers$$1 = opt$$1.fields[0];
          return new Link$002EOptions(result$$1.IsCurrent, result$$1.CustomClass, result$$1.Props, Modifier$0024$0024$0024parseModifiers(modifiers$$1));
        }

      default:
        {
          const state$$1 = opt$$1.fields[0];
          return new Link$002EOptions(state$$1, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }
    }
  };

  const opts$$3 = fold(parseOptions$$1, Link$002EOptions$$$get_Empty(), options$$4);
  return createElement("li", {}, ...[createElement("a", createObj(ofSeq(delay(function () {
    return append(singleton(Common$0024002EHelpers$0024$0024$0024classes("pagination-link", L(opts$$3.CustomClass, L()), L(["is-current", opts$$3.IsCurrent], L()))), delay(function () {
      return opts$$3.Props;
    }));
  })), 1), ...children$$6)]);
}
export function ellipsis(options$$6) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$6);
  return createElement("li", {}, ...[createElement("span", createObj(ofSeq(delay(function () {
    return append(singleton(Common$0024002EHelpers$0024$0024$0024classes("pagination-ellipsis", L(opts$$4.CustomClass, opts$$4.Modifiers), L())), delay(function () {
      return append(opts$$4.Props, delay(function () {
        return singleton(new Props$0024002EDOMAttr(0, "DangerouslySetInnerHTML", new Props$0024002EDangerousHtml("&hellip;")));
      }));
    }));
  })), 1), ...[])]);
}
export function list(options$$7, children$$11) {
  const opts$$5 = Common$0024$0024$0024genericParse(options$$7);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("pagination-list", L(opts$$5.CustomClass, opts$$5.Modifiers), L());
  return createElement("ul", createObj(L(classes$$3, opts$$5.Props), 1), ...children$$11);
}
