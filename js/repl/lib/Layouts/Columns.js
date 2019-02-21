import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option, union, list as list$$1, type, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Columns_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Columns.Option", [], Option, () => ["IsCentered", "IsVCentered", "IsMultiline", "IsGapless", "IsGrid", "IsMobile", "IsDesktop", ["CustomClass", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Columns_Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Display = arg1;
  this.Spacing = arg2;
  this.Alignment = arg3;
  this.CustomClass = arg4;
  this.Props = arg5;
  this.Modifiers = arg6;
}, Record);
export function Options$reflection() {
  return record("Fulma.Columns.Options", [], Options, () => [["Display", option(string)], ["Spacing", option(string)], ["Alignment", option(string)], ["CustomClass", option(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, null, null, null, new List(), new List());
}
export function columns(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          return new Options(result.Display, result.Spacing, "is-vcentered", result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          return new Options(result.Display, "is-multiline", result.Alignment, result.CustomClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          return new Options(result.Display, "is-gapless", result.Alignment, result.CustomClass, result.Props, result.Modifiers);
        }

      case 4:
        {
          return new Options(result.Display, "is-grid", result.Alignment, result.CustomClass, result.Props, result.Modifiers);
        }

      case 5:
        {
          return new Options("is-mobile", result.Spacing, result.Alignment, result.CustomClass, result.Props, result.Modifiers);
        }

      case 6:
        {
          return new Options("is-desktop", result.Spacing, result.Alignment, result.CustomClass, result.Props, result.Modifiers);
        }

      case 7:
        {
          const customClass = _arg1.fields[0];
          return new Options(result.Display, result.Spacing, result.Alignment, customClass, result.Props, result.Modifiers);
        }

      case 8:
        {
          const props = _arg1.fields[0];
          return new Options(result.Display, result.Spacing, result.Alignment, result.CustomClass, props, result.Modifiers);
        }

      case 9:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.Display, result.Spacing, result.Alignment, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new Options(result.Display, result.Spacing, "is-centered", result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("columns", new List(opts.Alignment, new List(opts.Display, new List(opts.Spacing, new List(opts.CustomClass, opts.Modifiers)))), new List());
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
