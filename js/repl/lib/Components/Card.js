import { Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Common$$$genericParse as Common$0024$0024$0024genericParse } from "../Fulma/Common.js";
import { Record, declare, Union, List } from "../../fable-core/Types.js";
import { createObj } from "../../fable-core/Util.js";
import { fold } from "../../fable-core/List.js";
const createElement = React.createElement;
export function card(options, children) {
  const opts = Common$0024$0024$0024genericParse(options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("card", new List(opts.CustomClass, opts.Modifiers), new List());
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
export function header(options$$1, children$$2) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$1);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("card-header", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("header", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$2);
}
export function content(options$$2, children$$4) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("card-content", new List(opts$$2.CustomClass, opts$$2.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$2, opts$$2.Props), 1), ...children$$4);
}
export function footer(options$$3, children$$6) {
  const opts$$3 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("card-footer", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List());
  return createElement("footer", createObj(new List(classes$$3, opts$$3.Props), 1), ...children$$6);
}
export function image(options$$4, children$$8) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$4);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("card-image", new List(opts$$4.CustomClass, opts$$4.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$4, opts$$4.Props), 1), ...children$$8);
}
export const Header$002ETitle$002EOption = declare(function Header$002ETitle$002EOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Header$002ETitle$002EOptions = declare(function Header$002ETitle$002EOptions(arg1, arg2, arg3, arg4) {
  this.IsCentered = arg1;
  this.Props = arg2;
  this.CustomClass = arg3;
  this.Modifiers = arg4;
}, Record);
export function Header$002ETitle$002EOptions$$$get_Empty() {
  return new Header$002ETitle$002EOptions(false, new List(), null, new List());
}
export function Header$$$icon(options$$5, children$$10) {
  const opts$$5 = Common$0024$0024$0024genericParse(options$$5);
  const classes$$5 = Common$0024002EHelpers$0024$0024$0024classes("card-header-icon", new List(opts$$5.CustomClass, opts$$5.Modifiers), new List());
  return createElement("a", createObj(new List(classes$$5, opts$$5.Props), 1), ...children$$10);
}
export function Header$$$title(options$$6, children$$12) {
  const parseOption = function parseOption(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          const props$$6 = opt.fields[0];
          return new Header$002ETitle$002EOptions(result.IsCentered, props$$6, result.CustomClass, result.Modifiers);
        }

      case 2:
        {
          const customClass = opt.fields[0];
          return new Header$002ETitle$002EOptions(result.IsCentered, result.Props, customClass, result.Modifiers);
        }

      case 3:
        {
          const modifiers = opt.fields[0];
          return new Header$002ETitle$002EOptions(result.IsCentered, result.Props, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new Header$002ETitle$002EOptions(true, result.Props, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts$$6 = fold(parseOption, Header$002ETitle$002EOptions$$$get_Empty(), options$$6);
  const classes$$6 = Common$0024002EHelpers$0024$0024$0024classes("card-header-title", new List(opts$$6.CustomClass, opts$$6.Modifiers), new List(["is-centered", opts$$6.IsCentered], new List()));
  return createElement("p", createObj(new List(classes$$6, opts$$6.Props), 1), ...children$$12);
}
export function Footer$$$itemView(element, options$$8, children$$14) {
  const opts$$7 = Common$0024$0024$0024genericParse(options$$8);
  const classes$$7 = Common$0024002EHelpers$0024$0024$0024classes("card-footer-item", new List(opts$$7.CustomClass, opts$$7.Modifiers), new List());
  return element(new List(classes$$7, opts$$7.Props), children$$14);
}
export function Footer$$$div(x, y) {
  return Footer$$$itemView(function (b$$7, c$$7) {
    return createElement("div", createObj(b$$7, 1), ...c$$7);
  }, x, y);
}
export function Footer$$$p(x$$1, y$$1) {
  return Footer$$$itemView(function (b$$9, c$$9) {
    return createElement("p", createObj(b$$9, 1), ...c$$9);
  }, x$$1, y$$1);
}
export function Footer$$$a(x$$2, y$$2) {
  return Footer$$$itemView(function (b$$11, c$$11) {
    return createElement("a", createObj(b$$11, 1), ...c$$11);
  }, x$$2, y$$2);
}
