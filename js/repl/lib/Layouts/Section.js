import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option, union, string, list as list$$1, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Section_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Section.Option", [], Option, () => [["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], "IsMedium", "IsLarge", ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Section_Options(arg1, arg2, arg3, arg4) {
  this.Props = arg1;
  this.CustomClass = arg2;
  this.Spacing = arg3;
  this.Modifiers = arg4;
}, Record);
export function Options$reflection() {
  return record("Fulma.Section.Options", [], Options, () => [["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["CustomClass", option(string)], ["Spacing", option(string)], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(new List(), null, null, new List());
}
export function section(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 2:
        {
          return new Options(result.Props, result.CustomClass, "is-medium", result.Modifiers);
        }

      case 3:
        {
          return new Options(result.Props, result.CustomClass, "is-large", result.Modifiers);
        }

      case 1:
        {
          const customClass = opt.fields[0];
          return new Options(result.Props, customClass, result.Spacing, result.Modifiers);
        }

      case 4:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Props, result.CustomClass, result.Spacing, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const props = opt.fields[0];
          return new Options(props, result.CustomClass, result.Spacing, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("section", new List(opts.CustomClass, new List(opts.Spacing, opts.Modifiers)), new List());
  return createElement("section", createObj(new List(classes, opts.Props), 1), ...children);
}
