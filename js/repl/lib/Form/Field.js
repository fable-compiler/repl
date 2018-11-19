import { List, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.HasAddons = arg1;
  this.IsGrouped = arg2;
  this.Layout = arg3;
  this.CustomClass = arg4;
  this.Props = arg5;
  this.Modifiers = arg6;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, null, null, null, new List(), new List());
}
export const Label$002EOption = declare(function Label$002EOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Label$002EOptions = declare(function Label$002EOptions(arg1, arg2, arg3, arg4) {
  this.Size = arg1;
  this.CustomClass = arg2;
  this.Props = arg3;
  this.Modifiers = arg4;
}, Record);
export function Label$002EOptions$$$get_Empty() {
  return new Label$002EOptions(null, null, new List(), new List());
}
export function label(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          return new Label$002EOptions("is-normal", result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          const customClass = _arg1.fields[0];
          return new Label$002EOptions(result.Size, customClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          const props = _arg1.fields[0];
          return new Label$002EOptions(result.Size, result.CustomClass, props, result.Modifiers);
        }

      case 4:
        {
          const modifiers = _arg1.fields[0];
          return new Label$002EOptions(result.Size, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const size = _arg1.fields[0];
          return new Label$002EOptions(Size$0024$0024$0024ofSize(size), result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Label$002EOptions$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("field-label", new List(opts.Size, new List(opts.CustomClass, opts.Modifiers)), new List());
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
export function body(options$$2, children$$2) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("field-body", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$2);
}
export function fieldView(element, options$$3, children$$4) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, _arg1$$1) {
    switch (_arg1$$1.tag) {
      case 1:
        {
          return new Options("has-addons" + " " + "has-addons-centered", result$$1.IsGrouped, result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }

      case 2:
        {
          return new Options("has-addons" + " " + "has-addons-right", result$$1.IsGrouped, result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }

      case 3:
        {
          return new Options("has-addons" + " " + "has-addons-fullwidth", result$$1.IsGrouped, result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }

      case 4:
        {
          return new Options(result$$1.HasAddons, "is-grouped", result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }

      case 5:
        {
          return new Options(result$$1.HasAddons, "is-grouped" + " " + "is-grouped-centered", result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }

      case 6:
        {
          return new Options(result$$1.HasAddons, "is-grouped" + " " + "is-grouped-right", result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }

      case 7:
        {
          return new Options(result$$1.HasAddons, result$$1.IsGrouped, "is-horizontal", result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }

      case 8:
        {
          const customClass$$1 = _arg1$$1.fields[0];
          return new Options(result$$1.HasAddons, result$$1.IsGrouped, result$$1.Layout, customClass$$1, result$$1.Props, result$$1.Modifiers);
        }

      case 9:
        {
          const props$$3 = _arg1$$1.fields[0];
          return new Options(result$$1.HasAddons, result$$1.IsGrouped, result$$1.Layout, result$$1.CustomClass, props$$3, result$$1.Modifiers);
        }

      case 10:
        {
          const modifiers$$1 = _arg1$$1.fields[0];
          return new Options(result$$1.HasAddons, result$$1.IsGrouped, result$$1.Layout, result$$1.CustomClass, result$$1.Props, Modifier$0024$0024$0024parseModifiers(modifiers$$1));
        }

      default:
        {
          return new Options("has-addons", result$$1.IsGrouped, result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }
    }
  };

  const opts$$2 = fold(parseOptions$$1, Options$$$get_Empty(), options$$3);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("field", new List(opts$$2.HasAddons, new List(opts$$2.IsGrouped, new List(opts$$2.Layout, new List(opts$$2.CustomClass, opts$$2.Modifiers)))), new List());
  return element(new List(classes$$2, opts$$2.Props), children$$4);
}
export function div(x, y) {
  return fieldView(function (b$$2, c$$2) {
    return createElement("div", createObj(b$$2, 1), ...c$$2);
  }, x, y);
}
export function p(x$$1, y$$1) {
  return fieldView(function (b$$4, c$$4) {
    return createElement("p", createObj(b$$4, 1), ...c$$4);
  }, x$$1, y$$1);
}
