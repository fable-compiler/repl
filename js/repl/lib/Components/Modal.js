import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { lambda, unit, record, option, union, string, bool, list as list$$2, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Size$$$ofSize as Size$0024$0024$0024ofSize, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Size$002EISize$reflection as Size$0024002EISize$0024reflection, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
import { Props$002EDOMAttr as Props$0024002EDOMAttr } from "../Fable.React/Fable.Helpers.React.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Modal_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Modal.Option", [], Option, () => [["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["IsActive", [bool]], ["CustomClass", [string]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Modal_Options(arg1, arg2, arg3, arg4) {
  this.Props = arg1;
  this.IsActive = arg2;
  this.CustomClass = arg3;
  this.Modifiers = arg4;
}, Record);
export function Options$reflection() {
  return record("Fulma.Modal.Options", [], Options, () => [["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["IsActive", bool], ["CustomClass", option(string)], ["Modifiers", list$$2(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(new List(), false, null, new List());
}
export const Close$002EOption = declare(function Fulma_Modal_Close_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Close$002EOption$reflection() {
  return union("Fulma.Modal.Close.Option", [], Close$002EOption, () => [["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Size", [Size$0024002EISize$0024reflection()]], ["CustomClass", [string]], ["OnClick", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Close$002EOptions = declare(function Fulma_Modal_Close_Options(arg1, arg2, arg3, arg4, arg5) {
  this.Props = arg1;
  this.Size = arg2;
  this.CustomClass = arg3;
  this.OnClick = arg4;
  this.Modifiers = arg5;
}, Record);
export function Close$002EOptions$reflection() {
  return record("Fulma.Modal.Close.Options", [], Close$002EOptions, () => [["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Size", option(string)], ["CustomClass", option(string)], ["OnClick", option(lambda(type("Fable.Import.React.MouseEvent"), unit))], ["Modifiers", list$$2(option(string))]]);
}
export function Close$002EOptions$$$get_Empty() {
  return new Close$002EOptions(new List(), null, null, null, new List());
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
  const classes = Common$0024002EHelpers$0024$0024$0024classes("modal", new List(opts.CustomClass, opts.Modifiers), new List(["is-active", opts.IsActive], new List()));
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
export function close(options$$2, children$$3) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, opt$$1) {
    var $target$$1, props$$3, customClass$$1, size, cb, modifiers$$1;

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
      props$$3 = opt$$1.fields[0];
    }

    switch ($target$$1) {
      case 0:
        {
          return new Close$002EOptions(props$$3, result$$1.Size, result$$1.CustomClass, result$$1.OnClick, result$$1.Modifiers);
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
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("modal-close", new List(opts$$1.Size, new List(opts$$1.CustomClass, opts$$1.Modifiers)), new List());
  let opts$$2;

  if (opts$$1.OnClick == null) {
    opts$$2 = new List(classes$$1, opts$$1.Props);
  } else {
    const v = opts$$1.OnClick;
    opts$$2 = new List(classes$$1, new List(new Props$0024002EDOMAttr(40, "OnClick", v), opts$$1.Props));
  }

  return createElement("button", createObj(opts$$2, 1), ...children$$3);
}
export function background(options$$4, children$$6) {
  const opts$$3 = Common$0024$0024$0024genericParse(options$$4);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("modal-background", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$2, opts$$3.Props), 1), ...children$$6);
}
export function content(options$$5, children$$9) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$5);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("modal-content", new List(opts$$4.CustomClass, opts$$4.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$3, opts$$4.Props), 1), ...children$$9);
}
export function Card$$$card(options$$6, children$$12) {
  const opts$$5 = Common$0024$0024$0024genericParse(options$$6);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("modal-card", new List(opts$$5.CustomClass, opts$$5.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$4, opts$$5.Props), 1), ...children$$12);
}
export function Card$$$head(options$$7, children$$15) {
  const opts$$6 = Common$0024$0024$0024genericParse(options$$7);
  const classes$$5 = Common$0024002EHelpers$0024$0024$0024classes("modal-card-head", new List(opts$$6.CustomClass, opts$$6.Modifiers), new List());
  return createElement("header", createObj(new List(classes$$5, opts$$6.Props), 1), ...children$$15);
}
export function Card$$$foot(options$$8, children$$18) {
  const opts$$7 = Common$0024$0024$0024genericParse(options$$8);
  const classes$$6 = Common$0024002EHelpers$0024$0024$0024classes("modal-card-foot", new List(opts$$7.CustomClass, opts$$7.Modifiers), new List());
  return createElement("footer", createObj(new List(classes$$6, opts$$7.Props), 1), ...children$$18);
}
export function Card$$$title(options$$9, children$$21) {
  const opts$$8 = Common$0024$0024$0024genericParse(options$$9);
  const classes$$7 = Common$0024002EHelpers$0024$0024$0024classes("modal-card-title", new List(opts$$8.CustomClass, opts$$8.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$7, opts$$8.Props), 1), ...children$$21);
}
export function Card$$$body(options$$10, children$$24) {
  const opts$$9 = Common$0024$0024$0024genericParse(options$$10);
  const classes$$8 = Common$0024002EHelpers$0024$0024$0024classes("modal-card-body", new List(opts$$9.CustomClass, opts$$9.Modifiers), new List());
  return createElement("section", createObj(new List(classes$$8, opts$$9.Props), 1), ...children$$24);
}
