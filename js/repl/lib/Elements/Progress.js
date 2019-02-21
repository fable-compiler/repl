import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Color$$$ofColor as Color$0024$0024$0024ofColor, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { record, option, union, string, int32, list as list$$1, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { ofSeq, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { append, delay, empty, singleton } from "../fable-library.2.2.0-beta-010/Seq.js";
import { Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
import { createObj, int32ToString } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Progress_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Progress.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], ["Color", [Color$0024002EIColor$0024reflection()]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Value", [int32]], ["Max", [int32]], ["CustomClass", [string]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Progress_Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.Size = arg1;
  this.Color = arg2;
  this.Props = arg3;
  this.Max = arg4;
  this.Value = arg5;
  this.CustomClass = arg6;
  this.Modifiers = arg7;
}, Record);
export function Options$reflection() {
  return record("Fulma.Progress.Options", [], Options, () => [["Size", option(string)], ["Color", option(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Max", option(int32)], ["Value", option(int32)], ["CustomClass", option(string)], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, null, new List(), null, null, null, new List());
}
export function progress(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          const color = _arg1.fields[0];
          return new Options(result.Size, Color$0024$0024$0024ofColor(color), result.Props, result.Max, result.Value, result.CustomClass, result.Modifiers);
        }

      case 2:
        {
          const props = _arg1.fields[0];
          return new Options(result.Size, result.Color, props, result.Max, result.Value, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          const value = _arg1.fields[0] | 0;
          return new Options(result.Size, result.Color, result.Props, result.Max, value, result.CustomClass, result.Modifiers);
        }

      case 4:
        {
          const max = _arg1.fields[0] | 0;
          return new Options(result.Size, result.Color, result.Props, max, result.Value, result.CustomClass, result.Modifiers);
        }

      case 5:
        {
          const customClass = _arg1.fields[0];
          return new Options(result.Size, result.Color, result.Props, result.Max, result.Value, customClass, result.Modifiers);
        }

      case 6:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.Size, result.Color, result.Props, result.Max, result.Value, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const size = _arg1.fields[0];
          return new Options(Size$0024$0024$0024ofSize(size), result.Color, result.Props, result.Max, result.Value, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("progress", new List(opts.Size, new List(opts.Color, new List(opts.CustomClass, opts.Modifiers))), new List());
  return createElement("progress", createObj(ofSeq(delay(function () {
    return append(singleton(classes), delay(function () {
      return append(opts.Props, delay(function () {
        return append(opts.Value != null ? singleton(new Props$0024002EHTMLAttr(119, "Value", int32ToString(opts.Value))) : empty(), delay(function () {
          return opts.Max != null ? singleton(new Props$0024002EHTMLAttr(72, "Max", opts.Max)) : empty();
        }));
      }));
    }));
  })), 1), ...children);
}
