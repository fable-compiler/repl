import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { record, option, union, list as list$$1, type, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { ofSeq, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { append, delay, empty, singleton } from "../fable-library.2.2.0-beta-010/Seq.js";
import { Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Label_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Label.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], ["For", [string]], ["CustomClass", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Label_Options(arg1, arg2, arg3, arg4, arg5) {
  this.Size = arg1;
  this.HtmlFor = arg2;
  this.CustomClass = arg3;
  this.Props = arg4;
  this.Modifiers = arg5;
}, Record);
export function Options$reflection() {
  return record("Fulma.Label.Options", [], Options, () => [["Size", option(string)], ["HtmlFor", option(string)], ["CustomClass", option(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, null, null, new List(), new List());
}
export function label(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          const htmlFor = _arg1.fields[0];
          return new Options(result.Size, htmlFor, result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          const customClass = _arg1.fields[0];
          return new Options(result.Size, result.HtmlFor, customClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          const props = _arg1.fields[0];
          return new Options(result.Size, result.HtmlFor, result.CustomClass, props, result.Modifiers);
        }

      case 4:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.Size, result.HtmlFor, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const size = _arg1.fields[0];
          return new Options(Size$0024$0024$0024ofSize(size), result.HtmlFor, result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("label", new List(opts.Size, new List(opts.CustomClass, opts.Modifiers)), new List());
  return createElement("label", createObj(ofSeq(delay(function () {
    return append(singleton(classes), delay(function () {
      return append(opts.HtmlFor != null ? singleton(new Props$0024002EHTMLAttr(54, "HtmlFor", opts.HtmlFor)) : empty(), delay(function () {
        return opts.Props;
      }));
    }));
  })), 1), ...children);
}
