import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { record, option, union, lambda, unit, string, list as list$$1, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { ofSeq, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { append, delay, empty, singleton } from "../fable-library.2.2.0-beta-010/Seq.js";
import { Props$002EDOMAttr as Props$0024002EDOMAttr } from "../Fable.React/Fable.Helpers.React.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Delete_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Delete.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["OnClick", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Delete_Options(arg1, arg2, arg3, arg4, arg5) {
  this.Size = arg1;
  this.Props = arg2;
  this.CustomClass = arg3;
  this.OnClick = arg4;
  this.Modifiers = arg5;
}, Record);
export function Options$reflection() {
  return record("Fulma.Delete.Options", [], Options, () => [["Size", option(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["CustomClass", option(string)], ["OnClick", option(lambda(type("Fable.Import.React.MouseEvent"), unit))], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, new List(), null, null, new List());
}
export function delete$(options, children) {
  const parseOption = function parseOption(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          const props = opt.fields[0];
          return new Options(result.Size, props, result.CustomClass, result.OnClick, result.Modifiers);
        }

      case 2:
        {
          const customClass = opt.fields[0];
          return new Options(result.Size, result.Props, customClass, result.OnClick, result.Modifiers);
        }

      case 3:
        {
          const cb = opt.fields[0];
          return new Options(result.Size, result.Props, result.CustomClass, cb, result.Modifiers);
        }

      case 4:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Size, result.Props, result.CustomClass, result.OnClick, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const size = opt.fields[0];
          return new Options(Size$0024$0024$0024ofSize(size), result.Props, result.CustomClass, result.OnClick, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOption, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("delete", new List(opts.Size, new List(opts.CustomClass, opts.Modifiers)), new List());
  return createElement("a", createObj(ofSeq(delay(function () {
    return append(singleton(classes), delay(function () {
      return append(opts.Props, delay(function () {
        return opts.OnClick != null ? singleton(new Props$0024002EDOMAttr(40, "OnClick", opts.OnClick)) : empty();
      }));
    }));
  })), 1), ...children);
}
