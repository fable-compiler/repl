import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option, union, list as list$$1, type, string, bool } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { ofArray, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Control_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Control.Option", [], Option, () => ["HasIconRight", "HasIconLeft", ["IsLoading", [bool]], "IsExpanded", ["CustomClass", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Control_Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.HasIconLeft = arg1;
  this.HasIconRight = arg2;
  this.CustomClass = arg3;
  this.Props = arg4;
  this.IsLoading = arg5;
  this.IsExpanded = arg6;
  this.Modifiers = arg7;
}, Record);
export function Options$reflection() {
  return record("Fulma.Control.Options", [], Options, () => [["HasIconLeft", bool], ["HasIconRight", bool], ["CustomClass", option(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["IsLoading", bool], ["IsExpanded", bool], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(false, false, null, new List(), false, false, new List());
}
export function controlView(element, options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          return new Options(true, result.HasIconRight, result.CustomClass, result.Props, result.IsLoading, result.IsExpanded, result.Modifiers);
        }

      case 4:
        {
          const customClass = _arg1.fields[0];
          return new Options(result.HasIconLeft, result.HasIconRight, customClass, result.Props, result.IsLoading, result.IsExpanded, result.Modifiers);
        }

      case 5:
        {
          const props = _arg1.fields[0];
          return new Options(result.HasIconLeft, result.HasIconRight, result.CustomClass, props, result.IsLoading, result.IsExpanded, result.Modifiers);
        }

      case 2:
        {
          const state = _arg1.fields[0];
          return new Options(result.HasIconLeft, result.HasIconRight, result.CustomClass, result.Props, state, result.IsExpanded, result.Modifiers);
        }

      case 3:
        {
          return new Options(result.HasIconLeft, result.HasIconRight, result.CustomClass, result.Props, result.IsLoading, true, result.Modifiers);
        }

      case 6:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.HasIconLeft, result.HasIconRight, result.CustomClass, result.Props, result.IsLoading, result.IsExpanded, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new Options(result.HasIconLeft, true, result.CustomClass, result.Props, result.IsLoading, result.IsExpanded, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("control", new List(opts.CustomClass, opts.Modifiers), ofArray([["is-loading", opts.IsLoading], ["has-icons-right", opts.HasIconRight], ["has-icons-left", opts.HasIconLeft], ["is-expanded", opts.IsExpanded]]));
  return element(new List(classes, opts.Props), children);
}
export function div(x, y) {
  return controlView(function (props$$1, children$$1) {
    return createElement("div", createObj(props$$1, 1), ...children$$1);
  }, x, y);
}
export function p(x$$1, y$$1) {
  return controlView(function (props$$4, children$$4) {
    return createElement("p", createObj(props$$4, 1), ...children$$4);
  }, x$$1, y$$1);
}
