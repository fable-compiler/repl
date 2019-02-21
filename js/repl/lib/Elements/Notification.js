import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Color$$$ofColor as Color$0024$0024$0024ofColor, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection } from "../Fulma/Common.js";
import { record, option, union, list as list$$1, type, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { ofSeq, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
import { append, delay, singleton } from "../fable-library.2.2.0-beta-010/Seq.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Notification_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Notification.Option", [], Option, () => [["Color", [Color$0024002EIColor$0024reflection()]], ["CustomClass", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Notification_Options(arg1, arg2, arg3, arg4) {
  this.Color = arg1;
  this.CustomClass = arg2;
  this.Props = arg3;
  this.Modifiers = arg4;
}, Record);
export function Options$reflection() {
  return record("Fulma.Notification.Options", [], Options, () => [["Color", option(string)], ["CustomClass", option(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, null, new List(), new List());
}
export function notification(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          const customClass = opt.fields[0];
          return new Options(result.Color, customClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          const props = opt.fields[0];
          return new Options(result.Color, result.CustomClass, props, result.Modifiers);
        }

      case 3:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Color, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const color = opt.fields[0];
          return new Options(Color$0024$0024$0024ofColor(color), result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("notification", new List(opts.CustomClass, new List(opts.Color, opts.Modifiers)), new List());
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
export function delete$(options$$2, children$$3) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  return createElement("button", createObj(ofSeq(delay(function () {
    return append(singleton(Common$0024002EHelpers$0024$0024$0024classes("delete", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List())), delay(function () {
      return opts$$1.Props;
    }));
  })), 1), ...children$$3);
}
