import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Color$$$ofColor as Color$0024$0024$0024ofColor, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection } from "../Fulma/Common.js";
import { record, option, bool, union, list as list$$1, type, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Hero_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Hero.Option", [], Option, () => ["IsBold", "IsMedium", "IsLarge", "IsHalfHeight", "IsFullHeight", ["Color", [Color$0024002EIColor$0024reflection()]], ["CustomClass", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Hero_Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Props = arg1;
  this.IsBold = arg2;
  this.Size = arg3;
  this.Color = arg4;
  this.CustomClass = arg5;
  this.Modifiers = arg6;
}, Record);
export function Options$reflection() {
  return record("Fulma.Hero.Options", [], Options, () => [["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["IsBold", bool], ["Size", option(string)], ["Color", option(string)], ["CustomClass", option(string)], ["Modifiers", list$$1(option(string))]]);
}
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
export function head(options$$2, children$$3) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("hero-head", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$3);
}
export function body(options$$3, children$$6) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("hero-body", new List(opts$$2.CustomClass, opts$$2.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$2, opts$$2.Props), 1), ...children$$6);
}
export function foot(options$$4, children$$9) {
  const opts$$3 = Common$0024$0024$0024genericParse(options$$4);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("hero-foot", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$3, opts$$3.Props), 1), ...children$$9);
}
export function video(options$$5, children$$12) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$5);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("hero-video", new List(opts$$4.CustomClass, opts$$4.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$4, opts$$4.Props), 1), ...children$$12);
}
export function buttons(options$$6, children$$15) {
  const opts$$5 = Common$0024$0024$0024genericParse(options$$6);
  const classes$$5 = Common$0024002EHelpers$0024$0024$0024classes("hero-buttons", new List(opts$$5.CustomClass, opts$$5.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$5, opts$$5.Props), 1), ...children$$15);
}
