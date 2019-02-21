import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option, union, list as list$$1, type, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Image_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Image.Option", [], Option, () => ["Is16x16", "Is24x24", "Is32x32", "Is48x48", "Is64x64", "Is96x96", "Is128x128", "IsSquare", "Is1by1", "Is5by4", "Is4by3", "Is3by2", "Is5by3", "Is16by9", "Is2by1", "Is3by1", "Is4by5", "Is3by4", "Is2by3", "Is3by5", "Is9by16", "Is1by2", "Is1by3", ["CustomClass", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Image_Options(arg1, arg2, arg3, arg4, arg5) {
  this.Size = arg1;
  this.Ratio = arg2;
  this.CustomClass = arg3;
  this.Props = arg4;
  this.Modifiers = arg5;
}, Record);
export function Options$reflection() {
  return record("Fulma.Image.Options", [], Options, () => [["Size", option(string)], ["Ratio", option(string)], ["CustomClass", option(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, null, null, new List(), new List());
}
export function image(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          return new Options("is-24x24", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          return new Options("is-32x32", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          return new Options("is-48x48", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }

      case 4:
        {
          return new Options("is-64x64", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }

      case 5:
        {
          return new Options("is-96x96", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }

      case 6:
        {
          return new Options("is-128x128", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }

      case 7:
        {
          return new Options(result.Size, "is-square", result.CustomClass, result.Props, result.Modifiers);
        }

      case 8:
        {
          return new Options(result.Size, "is-1by1", result.CustomClass, result.Props, result.Modifiers);
        }

      case 9:
        {
          return new Options(result.Size, "is-5by4", result.CustomClass, result.Props, result.Modifiers);
        }

      case 10:
        {
          return new Options(result.Size, "is-4by3", result.CustomClass, result.Props, result.Modifiers);
        }

      case 11:
        {
          return new Options(result.Size, "is-3by2", result.CustomClass, result.Props, result.Modifiers);
        }

      case 12:
        {
          return new Options(result.Size, "is-5by3", result.CustomClass, result.Props, result.Modifiers);
        }

      case 13:
        {
          return new Options(result.Size, "is-16by9", result.CustomClass, result.Props, result.Modifiers);
        }

      case 14:
        {
          return new Options(result.Size, "is-2by1", result.CustomClass, result.Props, result.Modifiers);
        }

      case 15:
        {
          return new Options(result.Size, "is-3by1", result.CustomClass, result.Props, result.Modifiers);
        }

      case 16:
        {
          return new Options(result.Size, "is-4by5", result.CustomClass, result.Props, result.Modifiers);
        }

      case 17:
        {
          return new Options(result.Size, "is-3by4", result.CustomClass, result.Props, result.Modifiers);
        }

      case 18:
        {
          return new Options(result.Size, "is-2by3", result.CustomClass, result.Props, result.Modifiers);
        }

      case 19:
        {
          return new Options(result.Size, "is-3by5", result.CustomClass, result.Props, result.Modifiers);
        }

      case 20:
        {
          return new Options(result.Size, "is-9by16", result.CustomClass, result.Props, result.Modifiers);
        }

      case 21:
        {
          return new Options(result.Size, "is-1by2", result.CustomClass, result.Props, result.Modifiers);
        }

      case 22:
        {
          return new Options(result.Size, "is-1by3", result.CustomClass, result.Props, result.Modifiers);
        }

      case 23:
        {
          const customClass = _arg1.fields[0];
          return new Options(result.Size, result.Ratio, customClass, result.Props, result.Modifiers);
        }

      case 24:
        {
          const props = _arg1.fields[0];
          return new Options(result.Size, result.Ratio, result.CustomClass, props, result.Modifiers);
        }

      case 25:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.Size, result.Ratio, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new Options("is-16x16", result.Ratio, result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("image", new List(opts.Size, new List(opts.Ratio, new List(opts.CustomClass, opts.Modifiers))), new List());
  return createElement("figure", createObj(new List(classes, opts.Props), 1), ...children);
}
