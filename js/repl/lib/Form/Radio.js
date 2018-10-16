import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Common$$$genericParse as Common$0024$0024$0024genericParse } from "../Fulma/Common.js";
import { createObj } from "../../fable-core/Util.js";
import { fold } from "../../fable-core/List.js";
import { Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
const createElement = React.createElement;
export const Input$002EOption = declare(function Input$002EOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Input$002EOptions = declare(function Input$002EOptions(arg1, arg2, arg3, arg4) {
  this.CustomClass = arg1;
  this.Props = arg2;
  this.Name = arg3;
  this.Modifiers = arg4;
}, Record);
export function Input$002EOptions$$$get_Empty() {
  return new Input$002EOptions(null, L(), null, L());
}
export function radio(options, children) {
  const opts = Common$0024$0024$0024genericParse(options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("radio", L(opts.CustomClass, L()), L());
  return createElement("label", createObj(L(classes, opts.Props), 1), ...children);
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
          const props$$1 = option.fields[0];
          return new Input$002EOptions(result.CustomClass, props$$1, result.Name, result.Modifiers);
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
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("radio", L(opts$$1.CustomClass, opts$$1.Modifiers), L());
  const t = new Props$0024002EHTMLAttr(117, "Type", "radio");
  let attrs;

  if (opts$$1.Name == null) {
    attrs = L(classes$$1, L(t, opts$$1.Props));
  } else {
    const name$$1 = opts$$1.Name;
    attrs = L(classes$$1, L(t, L(new Props$0024002EHTMLAttr(81, "Name", name$$1), opts$$1.Props)));
  }

  return createElement("input", createObj(attrs, 1), ...L());
}
