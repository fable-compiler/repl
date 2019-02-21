import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { record, option as option$$1, union, list as list$$1, type, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Icon_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Icon.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], "IsLeft", "IsRight", ["CustomClass", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Icon_Options(arg1, arg2, arg3, arg4, arg5) {
  this.Size = arg1;
  this.Position = arg2;
  this.CustomClass = arg3;
  this.Props = arg4;
  this.Modifiers = arg5;
}, Record);
export function Options$reflection() {
  return record("Fulma.Icon.Options", [], Options, () => [["Size", option$$1(string)], ["Position", option$$1(string)], ["CustomClass", option$$1(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$1(option$$1(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, null, null, new List(), new List());
}
export function icon(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          return new Options(result.Size, "is-left", result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          return new Options(result.Size, "is-right", result.CustomClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          const customClass = option.fields[0];
          return new Options(result.Size, result.Position, customClass, result.Props, result.Modifiers);
        }

      case 4:
        {
          const props = option.fields[0];
          return new Options(result.Size, result.Position, result.CustomClass, props, result.Modifiers);
        }

      case 5:
        {
          const modifiers = option.fields[0];
          return new Options(result.Size, result.Position, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const size = option.fields[0];
          return new Options(Size$0024$0024$0024ofSize(size), result.Position, result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("icon", new List(opts.Size, new List(opts.Position, new List(opts.CustomClass, opts.Modifiers))), new List());
  return createElement("span", createObj(new List(classes, opts.Props), 1), ...children);
}
