import { Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Common$$$genericParse as Common$0024$0024$0024genericParse } from "../Fulma/Common.js";
import { Record, declare, Union, List } from "../fable-library.2.2.0-beta-010/Types.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
import { record, option, bool, union, string, list as list$$1, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
const createElement = React.createElement;
export function card(options, children) {
  const opts = Common$0024$0024$0024genericParse(options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("card", new List(opts.CustomClass, opts.Modifiers), new List());
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
export function header(options$$1, children$$3) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$1);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("card-header", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("header", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$3);
}
export function content(options$$2, children$$6) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("card-content", new List(opts$$2.CustomClass, opts$$2.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$2, opts$$2.Props), 1), ...children$$6);
}
export function footer(options$$3, children$$9) {
  const opts$$3 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("card-footer", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List());
  return createElement("footer", createObj(new List(classes$$3, opts$$3.Props), 1), ...children$$9);
}
export function image(options$$4, children$$12) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$4);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("card-image", new List(opts$$4.CustomClass, opts$$4.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$4, opts$$4.Props), 1), ...children$$12);
}
export const Header$002ETitle$002EOption = declare(function Fulma_Card_Header_Title_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Header$002ETitle$002EOption$reflection() {
  return union("Fulma.Card.Header.Title.Option", [], Header$002ETitle$002EOption, () => ["IsCentered", ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Header$002ETitle$002EOptions = declare(function Fulma_Card_Header_Title_Options(arg1, arg2, arg3, arg4) {
  this.IsCentered = arg1;
  this.Props = arg2;
  this.CustomClass = arg3;
  this.Modifiers = arg4;
}, Record);
export function Header$002ETitle$002EOptions$reflection() {
  return record("Fulma.Card.Header.Title.Options", [], Header$002ETitle$002EOptions, () => [["IsCentered", bool], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["CustomClass", option(string)], ["Modifiers", list$$1(option(string))]]);
}
export function Header$002ETitle$002EOptions$$$get_Empty() {
  return new Header$002ETitle$002EOptions(false, new List(), null, new List());
}
export function Header$$$icon(options$$5, children$$15) {
  const opts$$5 = Common$0024$0024$0024genericParse(options$$5);
  const classes$$5 = Common$0024002EHelpers$0024$0024$0024classes("card-header-icon", new List(opts$$5.CustomClass, opts$$5.Modifiers), new List());
  return createElement("a", createObj(new List(classes$$5, opts$$5.Props), 1), ...children$$15);
}
export function Header$$$title(options$$6, children$$18) {
  const parseOption = function parseOption(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          const props$$12 = opt.fields[0];
          return new Header$002ETitle$002EOptions(result.IsCentered, props$$12, result.CustomClass, result.Modifiers);
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
  return createElement("p", createObj(new List(classes$$6, opts$$6.Props), 1), ...children$$18);
}
export function Footer$$$itemView(element, options$$8, children$$21) {
  const opts$$7 = Common$0024$0024$0024genericParse(options$$8);
  const classes$$7 = Common$0024002EHelpers$0024$0024$0024classes("card-footer-item", new List(opts$$7.CustomClass, opts$$7.Modifiers), new List());
  return element(new List(classes$$7, opts$$7.Props), children$$21);
}
export function Footer$$$div(x, y) {
  return Footer$$$itemView(function (props$$15, children$$22) {
    return createElement("div", createObj(props$$15, 1), ...children$$22);
  }, x, y);
}
export function Footer$$$p(x$$1, y$$1) {
  return Footer$$$itemView(function (props$$18, children$$25) {
    return createElement("p", createObj(props$$18, 1), ...children$$25);
  }, x$$1, y$$1);
}
export function Footer$$$a(x$$2, y$$2) {
  return Footer$$$itemView(function (props$$21, children$$28) {
    return createElement("a", createObj(props$$21, 1), ...children$$28);
  }, x$$2, y$$2);
}
