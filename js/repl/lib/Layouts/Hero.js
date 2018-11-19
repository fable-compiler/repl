import { List, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Color$$$ofColor as Color$0024$0024$0024ofColor } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Props = arg1;
  this.IsBold = arg2;
  this.Size = arg3;
  this.Color = arg4;
  this.CustomClass = arg5;
  this.Modifiers = arg6;
}, Record);
export function Options$$$get_Empty() {
  return new Options(new List(), false, null, null, null, new List());
}
export function hero(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          return new Options(result.Props, result.IsBold, "is-medium", result.Color, result.CustomClass, result.Modifiers);
        }

      case 2:
        {
          return new Options(result.Props, result.IsBold, "is-large", result.Color, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          return new Options(result.Props, result.IsBold, "is-halfheight", result.Color, result.CustomClass, result.Modifiers);
        }

      case 4:
        {
          return new Options(result.Props, result.IsBold, "is-fullheight", result.Color, result.CustomClass, result.Modifiers);
        }

      case 5:
        {
          const color = opt.fields[0];
          return new Options(result.Props, result.IsBold, result.Size, Color$0024$0024$0024ofColor(color), result.CustomClass, result.Modifiers);
        }

      case 0:
        {
          return new Options(result.Props, true, result.Size, result.Color, result.CustomClass, result.Modifiers);
        }

      case 6:
        {
          const customClass = opt.fields[0];
          return new Options(result.Props, result.IsBold, result.Size, result.Color, customClass, result.Modifiers);
        }

      case 8:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Props, result.IsBold, result.Size, result.Color, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const props = opt.fields[0];
          return new Options(props, result.IsBold, result.Size, result.Color, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("hero", new List(opts.Color, new List(opts.Size, new List(opts.CustomClass, opts.Modifiers))), new List(["is-bold", opts.IsBold], new List()));
  return createElement("section", createObj(new List(classes, opts.Props), 1), ...children);
}
export function head(options$$2, children$$2) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("hero-head", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$2);
}
export function body(options$$3, children$$4) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("hero-body", new List(opts$$2.CustomClass, opts$$2.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$2, opts$$2.Props), 1), ...children$$4);
}
export function foot(options$$4, children$$6) {
  const opts$$3 = Common$0024$0024$0024genericParse(options$$4);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("hero-foot", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$3, opts$$3.Props), 1), ...children$$6);
}
export function video(options$$5, children$$8) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$5);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("hero-video", new List(opts$$4.CustomClass, opts$$4.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$4, opts$$4.Props), 1), ...children$$8);
}
export function buttons(options$$6, children$$10) {
  const opts$$5 = Common$0024$0024$0024genericParse(options$$6);
  const classes$$5 = Common$0024002EHelpers$0024$0024$0024classes("hero-buttons", new List(opts$$5.CustomClass, opts$$5.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$5, opts$$5.Props), 1), ...children$$10);
}
