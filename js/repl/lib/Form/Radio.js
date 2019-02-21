import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option as option$$1, union, list as list$$1, type, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Common$$$genericParse as Common$0024$0024$0024genericParse, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
const createElement = React.createElement;
export const Input$002EOption = declare(function Fulma_Radio_Input_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Input$002EOption$reflection() {
  return union("Fulma.Radio.Input.Option", [], Input$002EOption, () => [["CustomClass", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Name", [string]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Input$002EOptions = declare(function Fulma_Radio_Input_Options(arg1, arg2, arg3, arg4) {
  this.CustomClass = arg1;
  this.Props = arg2;
  this.Name = arg3;
  this.Modifiers = arg4;
}, Record);
export function Input$002EOptions$reflection() {
  return record("Fulma.Radio.Input.Options", [], Input$002EOptions, () => [["CustomClass", option$$1(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Name", option$$1(string)], ["Modifiers", list$$1(option$$1(string))]]);
}
export function Input$002EOptions$$$get_Empty() {
  return new Input$002EOptions(null, new List(), null, new List());
}
export function radio(options, children) {
  const opts = Common$0024$0024$0024genericParse(options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("radio", new List(opts.CustomClass, new List()), new List());
  return createElement("label", createObj(new List(classes, opts.Props), 1), ...children);
}
export function input(options$$1) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 0:
        {
          const customClass = option.fields[0];
          return new Input$002EOptions(customClass, result.Props, result.Name, result.Modifiers);
        }

      case 1:
        {
          const props$$2 = option.fields[0];
          return new Input$002EOptions(result.CustomClass, props$$2, result.Name, result.Modifiers);
        }

      case 3:
        {
          const modifiers = option.fields[0];
          return new Input$002EOptions(result.CustomClass, result.Props, result.Name, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const name = option.fields[0];
          return new Input$002EOptions(result.CustomClass, result.Props, name, result.Modifiers);
        }
    }
  };

  const opts$$1 = fold(parseOptions, Input$002EOptions$$$get_Empty(), options$$1);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("radio", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  const t = new Props$0024002EHTMLAttr(117, "Type", "radio");
  let attrs;

  if (opts$$1.Name == null) {
    attrs = new List(classes$$1, new List(t, opts$$1.Props));
  } else {
    const name$$1 = opts$$1.Name;
    attrs = new List(classes$$1, new List(t, new List(new Props$0024002EHTMLAttr(81, "Name", name$$1), opts$$1.Props)));
  }

  return createElement("input", createObj(attrs, 1), ...new List());
}
