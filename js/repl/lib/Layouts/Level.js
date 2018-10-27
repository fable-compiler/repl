import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Level$002EOption = declare(function Level$002EOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Level$002EOptions = declare(function Level$002EOptions(arg1, arg2, arg3, arg4) {
  this.Props = arg1;
  this.IsMobile = arg2;
  this.CustomClass = arg3;
  this.Modifiers = arg4;
}, Record);
export function Level$002EOptions$$$get_Empty() {
  return new Level$002EOptions(L(), false, null, L());
}
export const Item$002EOption = declare(function Item$002EOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Item$002EOptions = declare(function Item$002EOptions(arg1, arg2, arg3, arg4) {
  this.Props = arg1;
  this.HasTextCentered = arg2;
  this.CustomClass = arg3;
  this.Modifiers = arg4;
}, Record);
export function Item$002EOptions$$$get_Empty() {
  return new Item$002EOptions(L(), false, null, L());
}
export function level(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          return new Level$002EOptions(result.Props, true, result.CustomClass, result.Modifiers);
        }

      case 2:
        {
          const customClass = opt.fields[0];
          return new Level$002EOptions(result.Props, result.IsMobile, customClass, result.Modifiers);
        }

      case 3:
        {
          const modifiers = opt.fields[0];
          return new Level$002EOptions(result.Props, result.IsMobile, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const props = opt.fields[0];
          return new Level$002EOptions(props, result.IsMobile, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Level$002EOptions$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("level", L(opts.CustomClass, opts.Modifiers), L(["is-mobile", opts.IsMobile], L()));
  return createElement("nav", createObj(L(classes, opts.Props), 1), ...children);
}
export function left(options$$2, children$$2) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("level-left", L(opts$$1.CustomClass, opts$$1.Modifiers), L());
  return createElement("div", createObj(L(classes$$1, opts$$1.Props), 1), ...children$$2);
}
export function right(options$$3, children$$4) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("level-right", L(opts$$2.CustomClass, opts$$2.Modifiers), L());
  return createElement("div", createObj(L(classes$$2, opts$$2.Props), 1), ...children$$4);
}
export function item(options$$4, children$$6) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, opt$$1) {
    switch (opt$$1.tag) {
      case 1:
        {
          return new Item$002EOptions(result$$1.Props, true, result$$1.CustomClass, result$$1.Modifiers);
        }

      case 2:
        {
          const customClass$$1 = opt$$1.fields[0];
          return new Item$002EOptions(result$$1.Props, result$$1.HasTextCentered, customClass$$1, result$$1.Modifiers);
        }

      case 3:
        {
          const modifiers$$1 = opt$$1.fields[0];
          return new Item$002EOptions(result$$1.Props, result$$1.HasTextCentered, result$$1.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers$$1));
        }

      default:
        {
          const props$$4 = opt$$1.fields[0];
          return new Item$002EOptions(props$$4, result$$1.HasTextCentered, result$$1.CustomClass, result$$1.Modifiers);
        }
    }
  };

  const opts$$3 = fold(parseOptions$$1, Item$002EOptions$$$get_Empty(), options$$4);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("level-item", L(opts$$3.CustomClass, opts$$3.Modifiers), L(["has-text-centered", opts$$3.HasTextCentered], L()));
  return createElement("div", createObj(L(classes$$3, opts$$3.Props), 1), ...children$$6);
}
export function heading(options$$6, children$$8) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$6);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("heading", L(opts$$4.CustomClass, opts$$4.Modifiers), L());
  return createElement("p", createObj(L(classes$$4, opts$$4.Props), 1), ...children$$8);
}
export function title(options$$7, children$$10) {
  const opts$$5 = Common$0024$0024$0024genericParse(options$$7);
  const classes$$5 = Common$0024002EHelpers$0024$0024$0024classes("title", L(opts$$5.CustomClass, opts$$5.Modifiers), L());
  return createElement("p", createObj(L(classes$$5, opts$$5.Props), 1), ...children$$10);
}