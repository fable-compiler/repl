import { Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Common$$$genericParse as Common$0024$0024$0024genericParse } from "../Fulma/Common.js";
import { Record, declare, Union, L } from "../../fable-core/Types.js";
import { createObj } from "../../fable-core/Util.js";
import { ofSeq, fold } from "../../fable-core/List.js";
import { Props$002EHTMLAttr as Props$0024002EHTMLAttr, Props$002EDOMAttr as Props$0024002EDOMAttr } from "../Fable.React/Fable.Helpers.React.js";
import { append, delay, empty, singleton } from "../../fable-core/Seq.js";
const createElement = React.createElement;
export function menu(options, children) {
  const opts = Common$0024$0024$0024genericParse(options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("menu", L(opts.CustomClass, opts.Modifiers), L());
  return createElement("aside", createObj(L(classes, opts.Props), 1), ...children);
}
export function label(options$$1, children$$2) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$1);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("menu-label", L(opts$$1.CustomClass, opts$$1.Modifiers), L());
  return createElement("p", createObj(L(classes$$1, opts$$1.Props), 1), ...children$$2);
}
export function list(options$$2, children$$4) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("menu-list", L(opts$$2.CustomClass, opts$$2.Modifiers), L());
  return createElement("ul", createObj(L(classes$$2, opts$$2.Props), 1), ...children$$4);
}
export const Item$002EOption = declare(function Item$002EOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Item$002EOptions = declare(function Item$002EOptions(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Props = arg1;
  this.IsActive = arg2;
  this.CustomClass = arg3;
  this.OnClick = arg4;
  this.Href = arg5;
  this.Modifiers = arg6;
}, Record);
export function Item$002EOptions$$$get_Empty() {
  return new Item$002EOptions(L(), false, null, null, null, L());
}

function Item$$$itemAttrs(options$$3) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          const props$$3 = _arg1.fields[0];
          return new Item$002EOptions(props$$3, result.IsActive, result.CustomClass, result.OnClick, result.Href, result.Modifiers);
        }

      case 2:
        {
          const customClass = _arg1.fields[0];
          return new Item$002EOptions(result.Props, result.IsActive, customClass, result.OnClick, result.Href, result.Modifiers);
        }

      case 3:
        {
          const cb = _arg1.fields[0];
          return new Item$002EOptions(result.Props, result.IsActive, result.CustomClass, cb, result.Href, result.Modifiers);
        }

      case 4:
        {
          const href = _arg1.fields[0];
          return new Item$002EOptions(result.Props, result.IsActive, result.CustomClass, result.OnClick, href, result.Modifiers);
        }

      case 5:
        {
          const modifiers = _arg1.fields[0];
          return new Item$002EOptions(result.Props, result.IsActive, result.CustomClass, result.OnClick, result.Href, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const state = _arg1.fields[0];
          return new Item$002EOptions(result.Props, state, result.CustomClass, result.OnClick, result.Href, result.Modifiers);
        }
    }
  };

  const opts$$3 = fold(parseOptions, Item$002EOptions$$$get_Empty(), options$$3);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("", L(opts$$3.CustomClass, opts$$3.Modifiers), L(["is-active", opts$$3.IsActive], L()));
  const attrs = ofSeq(delay(function () {
    return append(opts$$3.OnClick != null ? singleton(new Props$0024002EDOMAttr(40, "OnClick", opts$$3.OnClick)) : empty(), delay(function () {
      return append(opts$$3.Href != null ? singleton(new Props$0024002EHTMLAttr(52, "Href", opts$$3.Href)) : empty(), delay(function () {
        return opts$$3.Props;
      }));
    }));
  }));
  return L(classes$$3, attrs);
}

export function Item$$$li(options$$6, children$$6) {
  const attrs$$1 = Item$$$itemAttrs(options$$6);
  return createElement("li", {}, ...[createElement("a", createObj(attrs$$1, 1), ...children$$6)]);
}
export function Item$$$a(options$$7, children$$9) {
  const attrs$$2 = Item$$$itemAttrs(options$$7);
  return createElement("a", createObj(attrs$$2, 1), ...children$$9);
}
