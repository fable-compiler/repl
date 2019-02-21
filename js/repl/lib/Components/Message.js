import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option, union, string, list as list$$1, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Size$$$ofSize as Size$0024$0024$0024ofSize, Color$$$ofColor as Color$0024$0024$0024ofColor, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection } from "../Fulma/Common.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Message_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Message.Option", [], Option, () => [["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Color", [Color$0024002EIColor$0024reflection()]], ["Size", [Size$0024002EISize$0024reflection()]], ["CustomClass", [string]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Message_Options(arg1, arg2, arg3, arg4, arg5) {
  this.Props = arg1;
  this.Color = arg2;
  this.Size = arg3;
  this.CustomClass = arg4;
  this.Modifiers = arg5;
}, Record);
export function Options$reflection() {
  return record("Fulma.Message.Options", [], Options, () => [["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Color", option(string)], ["Size", option(string)], ["CustomClass", option(string)], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(new List(), null, null, null, new List());
}
export function message(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          const color = opt.fields[0];
          return new Options(result.Props, Color$0024$0024$0024ofColor(color), result.Size, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          const customClass = opt.fields[0];
          return new Options(result.Props, result.Color, result.Size, customClass, result.Modifiers);
        }

      case 2:
        {
          const size = opt.fields[0];
          return new Options(result.Props, result.Color, Size$0024$0024$0024ofSize(size), result.CustomClass, result.Modifiers);
        }

      case 4:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Props, result.Color, result.Size, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const props = opt.fields[0];
          return new Options(props, result.Color, result.Size, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("message", new List(opts.Color, new List(opts.CustomClass, new List(opts.Size, opts.Modifiers))), new List());
  return createElement("article", createObj(new List(classes, opts.Props), 1), ...children);
}
export function header(options$$2, children$$3) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("message-header", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$3);
}
export function body(options$$3, children$$6) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("message-body", new List(opts$$2.CustomClass, opts$$2.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$2, opts$$2.Props), 1), ...children$$6);
}
