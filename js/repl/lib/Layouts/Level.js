import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option, bool, union, string, list as list$$2, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Level$002EOption = declare(function Fulma_Level_Level_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Level$002EOption$reflection() {
  return union("Fulma.Level.Level.Option", [], Level$002EOption, () => [["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], "IsMobile", ["CustomClass", [string]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Level$002EOptions = declare(function Fulma_Level_Level_Options(arg1, arg2, arg3, arg4) {
  this.Props = arg1;
  this.IsMobile = arg2;
  this.CustomClass = arg3;
  this.Modifiers = arg4;
}, Record);
export function Level$002EOptions$reflection() {
  return record("Fulma.Level.Level.Options", [], Level$002EOptions, () => [["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["IsMobile", bool], ["CustomClass", option(string)], ["Modifiers", list$$2(option(string))]]);
}
export function Level$002EOptions$$$get_Empty() {
  return new Level$002EOptions(new List(), false, null, new List());
}
export const Item$002EOption = declare(function Fulma_Level_Item_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Item$002EOption$reflection() {
  return union("Fulma.Level.Item.Option", [], Item$002EOption, () => [["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], "HasTextCentered", ["CustomClass", [string]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Item$002EOptions = declare(function Fulma_Level_Item_Options(arg1, arg2, arg3, arg4) {
  this.Props = arg1;
  this.HasTextCentered = arg2;
  this.CustomClass = arg3;
  this.Modifiers = arg4;
}, Record);
export function Item$002EOptions$reflection() {
  return record("Fulma.Level.Item.Options", [], Item$002EOptions, () => [["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["HasTextCentered", bool], ["CustomClass", option(string)], ["Modifiers", list$$2(option(string))]]);
}
export function Item$002EOptions$$$get_Empty() {
  return new Item$002EOptions(new List(), false, null, new List());
}
export function level(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          return new Level$002EOptions(result.Props, true, result.CustomClass, result.Modifiers);
        }

      case 2:
        {
          const customClass = opt.fields[0];
          return new Level$002EOptions(result.Props, result.IsMobile, customClass, result.Modifiers);
        }

      case 3:
        {
          const modifiers = opt.fields[0];
          return new Level$002EOptions(result.Props, result.IsMobile, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const props = opt.fields[0];
          return new Level$002EOptions(props, result.IsMobile, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Level$002EOptions$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("level", new List(opts.CustomClass, opts.Modifiers), new List(["is-mobile", opts.IsMobile], new List()));
  return createElement("nav", createObj(new List(classes, opts.Props), 1), ...children);
}
export function left(options$$2, children$$3) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("level-left", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$3);
}
export function right(options$$3, children$$6) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("level-right", new List(opts$$2.CustomClass, opts$$2.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$2, opts$$2.Props), 1), ...children$$6);
}
export function item(options$$4, children$$9) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, opt$$1) {
    switch (opt$$1.tag) {
      case 1:
        {
          return new Item$002EOptions(result$$1.Props, true, result$$1.CustomClass, result$$1.Modifiers);
        }

      case 2:
        {
          const customClass$$1 = opt$$1.fields[0];
          return new Item$002EOptions(result$$1.Props, result$$1.HasTextCentered, customClass$$1, result$$1.Modifiers);
        }

      case 3:
        {
          const modifiers$$1 = opt$$1.fields[0];
          return new Item$002EOptions(result$$1.Props, result$$1.HasTextCentered, result$$1.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers$$1));
        }

      default:
        {
          const props$$7 = opt$$1.fields[0];
          return new Item$002EOptions(props$$7, result$$1.HasTextCentered, result$$1.CustomClass, result$$1.Modifiers);
        }
    }
  };

  const opts$$3 = fold(parseOptions$$1, Item$002EOptions$$$get_Empty(), options$$4);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("level-item", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List(["has-text-centered", opts$$3.HasTextCentered], new List()));
  return createElement("div", createObj(new List(classes$$3, opts$$3.Props), 1), ...children$$9);
}
export function heading(options$$6, children$$12) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$6);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("heading", new List(opts$$4.CustomClass, opts$$4.Modifiers), new List());
  return createElement("p", createObj(new List(classes$$4, opts$$4.Props), 1), ...children$$12);
}
export function title(options$$7, children$$15) {
  const opts$$5 = Common$0024$0024$0024genericParse(options$$7);
  const classes$$5 = Common$0024002EHelpers$0024$0024$0024classes("title", new List(opts$$5.CustomClass, opts$$5.Modifiers), new List());
  return createElement("p", createObj(new List(classes$$5, opts$$5.Props), 1), ...children$$15);
}
