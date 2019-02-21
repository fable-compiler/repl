import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, bool, option, union, string, list as list$$1, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Container_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Container.Option", [], Option, () => ["IsFluid", "IsWideScreen", "IsFullHD", ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Container_Options(arg1, arg2, arg3, arg4, arg5) {
  this.Props = arg1;
  this.CustomClass = arg2;
  this.IsFluid = arg3;
  this.Breakpoint = arg4;
  this.Modifiers = arg5;
}, Record);
export function Options$reflection() {
  return record("Fulma.Container.Options", [], Options, () => [["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["CustomClass", option(string)], ["IsFluid", bool], ["Breakpoint", option(string)], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(new List(), null, false, null, new List());
}
export function container(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 0:
        {
          return new Options(result.Props, result.CustomClass, true, result.Breakpoint, result.Modifiers);
        }

      case 1:
        {
          return new Options(result.Props, result.CustomClass, result.IsFluid, "is-widescreen", result.Modifiers);
        }

      case 2:
        {
          return new Options(result.Props, result.CustomClass, result.IsFluid, "is-fullhd", result.Modifiers);
        }

      case 4:
        {
          const customClass = opt.fields[0];
          return new Options(result.Props, customClass, result.IsFluid, result.Breakpoint, result.Modifiers);
        }

      case 5:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Props, result.CustomClass, result.IsFluid, result.Breakpoint, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const props = opt.fields[0];
          return new Options(props, result.CustomClass, result.IsFluid, result.Breakpoint, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("container", new List(opts.Breakpoint, new List(opts.CustomClass, opts.Modifiers)), new List(["is-fluid", opts.IsFluid], new List()));
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
