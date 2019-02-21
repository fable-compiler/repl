import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option, union, list as list$$2, type, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Size$002EISize$reflection as Size$0024002EISize$0024reflection, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Field_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Field.Option", [], Option, () => ["HasAddons", "HasAddonsCentered", "HasAddonsRight", "HasAddonsFullWidth", "IsGrouped", "IsGroupedCentered", "IsGroupedRight", "IsHorizontal", ["CustomClass", [string]], ["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Field_Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.HasAddons = arg1;
  this.IsGrouped = arg2;
  this.Layout = arg3;
  this.CustomClass = arg4;
  this.Props = arg5;
  this.Modifiers = arg6;
}, Record);
export function Options$reflection() {
  return record("Fulma.Field.Options", [], Options, () => [["HasAddons", option(string)], ["IsGrouped", option(string)], ["Layout", option(string)], ["CustomClass", option(string)], ["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$2(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, null, null, null, new List(), new List());
}
export const Label$002EOption = declare(function Fulma_Field_Label_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Label$002EOption$reflection() {
  return union("Fulma.Field.Label.Option", [], Label$002EOption, () => [["Size", [Size$0024002EISize$0024reflection()]], "IsNormal", ["CustomClass", [string]], ["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Label$002EOptions = declare(function Fulma_Field_Label_Options(arg1, arg2, arg3, arg4) {
  this.Size = arg1;
  this.CustomClass = arg2;
  this.Props = arg3;
  this.Modifiers = arg4;
}, Record);
export function Label$002EOptions$reflection() {
  return record("Fulma.Field.Label.Options", [], Label$002EOptions, () => [["Size", option(string)], ["CustomClass", option(string)], ["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$2(option(string))]]);
}
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
export function body(options$$2, children$$3) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("field-body", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$3);
}
export function fieldView(element, options$$3, children$$6) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, _arg1$$1) {
    switch (_arg1$$1.tag) {
      case 1:
        {
          return new Options("has-addons has-addons-centered", result$$1.IsGrouped, result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }

      case 2:
        {
          return new Options("has-addons has-addons-right", result$$1.IsGrouped, result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }

      case 3:
        {
          return new Options("has-addons has-addons-fullwidth", result$$1.IsGrouped, result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }

      case 4:
        {
          return new Options(result$$1.HasAddons, "is-grouped", result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }

      case 5:
        {
          return new Options(result$$1.HasAddons, "is-grouped is-grouped-centered", result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }

      case 6:
        {
          return new Options(result$$1.HasAddons, "is-grouped is-grouped-right", result$$1.Layout, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
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
          const props$$5 = _arg1$$1.fields[0];
          return new Options(result$$1.HasAddons, result$$1.IsGrouped, result$$1.Layout, result$$1.CustomClass, props$$5, result$$1.Modifiers);
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
  return element(new List(classes$$2, opts$$2.Props), children$$6);
}
export function div(x, y) {
  return fieldView(function (props$$6, children$$7) {
    return createElement("div", createObj(props$$6, 1), ...children$$7);
  }, x, y);
}
export function p(x$$1, y$$1) {
  return fieldView(function (props$$9, children$$10) {
    return createElement("p", createObj(props$$9, 1), ...children$$10);
  }, x$$1, y$$1);
}
