import { Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Common$$$genericParse as Common$0024$0024$0024genericParse } from "../Fulma/Common.js";
import { Record, declare, Union, List } from "../fable-library.2.2.0-beta-010/Types.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
import { record, option, union, lambda, unit, string, list as list$$2, type, bool } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { ofSeq, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { Props$002EHTMLAttr as Props$0024002EHTMLAttr, Props$002EDOMAttr as Props$0024002EDOMAttr } from "../Fable.React/Fable.Helpers.React.js";
import { append, delay, empty, singleton } from "../fable-library.2.2.0-beta-010/Seq.js";
const createElement = React.createElement;
export function menu(options, children) {
  const opts = Common$0024$0024$0024genericParse(options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("menu", new List(opts.CustomClass, opts.Modifiers), new List());
  return createElement("aside", createObj(new List(classes, opts.Props), 1), ...children);
}
export function label(options$$1, children$$3) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$1);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("menu-label", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("p", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$3);
}
export function list(options$$2, children$$6) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("menu-list", new List(opts$$2.CustomClass, opts$$2.Modifiers), new List());
  return createElement("ul", createObj(new List(classes$$2, opts$$2.Props), 1), ...children$$6);
}
export const Item$002EOption = declare(function Fulma_Menu_Item_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Item$002EOption$reflection() {
  return union("Fulma.Menu.Item.Option", [], Item$002EOption, () => [["IsActive", [bool]], ["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["OnClick", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["Href", [string]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Item$002EOptions = declare(function Fulma_Menu_Item_Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Props = arg1;
  this.IsActive = arg2;
  this.CustomClass = arg3;
  this.OnClick = arg4;
  this.Href = arg5;
  this.Modifiers = arg6;
}, Record);
export function Item$002EOptions$reflection() {
  return record("Fulma.Menu.Item.Options", [], Item$002EOptions, () => [["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["IsActive", bool], ["CustomClass", option(string)], ["OnClick", option(lambda(type("Fable.Import.React.MouseEvent"), unit))], ["Href", option(string)], ["Modifiers", list$$2(option(string))]]);
}
export function Item$002EOptions$$$get_Empty() {
  return new Item$002EOptions(new List(), false, null, null, null, new List());
}

function Item$$$itemAttrs(options$$3) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          const props$$6 = _arg1.fields[0];
          return new Item$002EOptions(props$$6, result.IsActive, result.CustomClass, result.OnClick, result.Href, result.Modifiers);
        }

      case 2:
        {
          const customClass = _arg1.fields[0];
          return new Item$002EOptions(result.Props, result.IsActive, customClass, result.OnClick, result.Href, result.Modifiers);
        }

      case 3:
        {
          const cb = _arg1.fields[0];
          return new Item$002EOptions(result.Props, result.IsActive, result.CustomClass, cb, result.Href, result.Modifiers);
        }

      case 4:
        {
          const href = _arg1.fields[0];
          return new Item$002EOptions(result.Props, result.IsActive, result.CustomClass, result.OnClick, href, result.Modifiers);
        }

      case 5:
        {
          const modifiers = _arg1.fields[0];
          return new Item$002EOptions(result.Props, result.IsActive, result.CustomClass, result.OnClick, result.Href, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const state = _arg1.fields[0];
          return new Item$002EOptions(result.Props, state, result.CustomClass, result.OnClick, result.Href, result.Modifiers);
        }
    }
  };

  const opts$$3 = fold(parseOptions, Item$002EOptions$$$get_Empty(), options$$3);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List(["is-active", opts$$3.IsActive], new List()));
  const attrs = ofSeq(delay(function () {
    return append(opts$$3.OnClick != null ? singleton(new Props$0024002EDOMAttr(40, "OnClick", opts$$3.OnClick)) : empty(), delay(function () {
      return append(opts$$3.Href != null ? singleton(new Props$0024002EHTMLAttr(52, "Href", opts$$3.Href)) : empty(), delay(function () {
        return opts$$3.Props;
      }));
    }));
  }));
  return new List(classes$$3, attrs);
}

export function Item$$$li(options$$6, children$$9) {
  const attrs$$1 = Item$$$itemAttrs(options$$6);
  return createElement("li", {}, ...[createElement("a", createObj(attrs$$1, 1), ...children$$9)]);
}
export function Item$$$a(options$$7, children$$14) {
  const attrs$$2 = Item$$$itemAttrs(options$$7);
  return createElement("a", createObj(attrs$$2, 1), ...children$$14);
}
