import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option, union, string, bool, list as list$$3, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Block$002EOption = declare(function Fulma_Panel_Block_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Block$002EOption$reflection() {
  return union("Fulma.Panel.Block.Option", [], Block$002EOption, () => [["Props", [list$$3(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["IsActive", [bool]], ["CustomClass", [string]], ["Modifiers", [list$$3(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Block$002EOptions = declare(function Fulma_Panel_Block_Options(arg1, arg2, arg3, arg4) {
  this.Props = arg1;
  this.CustomClass = arg2;
  this.IsActive = arg3;
  this.Modifiers = arg4;
}, Record);
export function Block$002EOptions$reflection() {
  return record("Fulma.Panel.Block.Options", [], Block$002EOptions, () => [["Props", list$$3(type("Fable.Helpers.React.Props.IHTMLProp"))], ["CustomClass", option(string)], ["IsActive", bool], ["Modifiers", list$$3(option(string))]]);
}
export function Block$002EOptions$$$get_Empty() {
  return new Block$002EOptions(new List(), null, false, new List());
}
export const Tab$002EOption = declare(function Fulma_Panel_Tab_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Tab$002EOption$reflection() {
  return union("Fulma.Panel.Tab.Option", [], Tab$002EOption, () => [["Props", [list$$3(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["IsActive", [bool]], ["CustomClass", [string]], ["Modifiers", [list$$3(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Tab$002EOptions = declare(function Fulma_Panel_Tab_Options(arg1, arg2, arg3, arg4) {
  this.Props = arg1;
  this.CustomClass = arg2;
  this.IsActive = arg3;
  this.Modifiers = arg4;
}, Record);
export function Tab$002EOptions$reflection() {
  return record("Fulma.Panel.Tab.Options", [], Tab$002EOptions, () => [["Props", list$$3(type("Fable.Helpers.React.Props.IHTMLProp"))], ["CustomClass", option(string)], ["IsActive", bool], ["Modifiers", list$$3(option(string))]]);
}
export function Tab$002EOptions$$$get_Empty() {
  return new Tab$002EOptions(new List(), null, false, new List());
}
export function block(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          const state = opt.fields[0];
          return new Block$002EOptions(result.Props, result.CustomClass, state, result.Modifiers);
        }

      case 2:
        {
          const customClass = opt.fields[0];
          return new Block$002EOptions(result.Props, customClass, result.IsActive, result.Modifiers);
        }

      case 3:
        {
          const modifiers = opt.fields[0];
          return new Block$002EOptions(result.Props, result.CustomClass, result.IsActive, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const props = opt.fields[0];
          return new Block$002EOptions(props, result.CustomClass, result.IsActive, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Block$002EOptions$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("panel-block", new List(opts.CustomClass, opts.Modifiers), new List(["is-active", opts.IsActive], new List()));
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
export function checkbox(options$$2, children$$3) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, opt$$1) {
    switch (opt$$1.tag) {
      case 1:
        {
          const state$$2 = opt$$1.fields[0];
          return new Block$002EOptions(result$$1.Props, result$$1.CustomClass, state$$2, result$$1.Modifiers);
        }

      case 2:
        {
          const customClass$$1 = opt$$1.fields[0];
          return new Block$002EOptions(result$$1.Props, customClass$$1, result$$1.IsActive, result$$1.Modifiers);
        }

      case 3:
        {
          const modifiers$$1 = opt$$1.fields[0];
          return new Block$002EOptions(result$$1.Props, result$$1.CustomClass, result$$1.IsActive, Modifier$0024$0024$0024parseModifiers(modifiers$$1));
        }

      default:
        {
          const props$$3 = opt$$1.fields[0];
          return new Block$002EOptions(props$$3, result$$1.CustomClass, result$$1.IsActive, result$$1.Modifiers);
        }
    }
  };

  const opts$$1 = fold(parseOptions$$1, Block$002EOptions$$$get_Empty(), options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("panel-block", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List(["is-active", opts$$1.IsActive], new List()));
  return createElement("label", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$3);
}
export function panel(options$$4, children$$6) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$4);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("panel", new List(opts$$2.CustomClass, opts$$2.Modifiers), new List());
  return createElement("nav", createObj(new List(classes$$2, opts$$2.Props), 1), ...children$$6);
}
export function heading(options$$5, children$$9) {
  const opts$$3 = Common$0024$0024$0024genericParse(options$$5);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("panel-heading", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$3, opts$$3.Props), 1), ...children$$9);
}
export function tabs(options$$6, children$$12) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$6);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("panel-tabs", new List(opts$$4.CustomClass, opts$$4.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$4, opts$$4.Props), 1), ...children$$12);
}
export function tab(options$$7, children$$15) {
  const parseOptions$$2 = function parseOptions$$2(result$$2, opt$$2) {
    switch (opt$$2.tag) {
      case 1:
        {
          const state$$4 = opt$$2.fields[0];
          return new Tab$002EOptions(result$$2.Props, result$$2.CustomClass, state$$4, result$$2.Modifiers);
        }

      case 2:
        {
          const customClass$$2 = opt$$2.fields[0];
          return new Tab$002EOptions(result$$2.Props, customClass$$2, result$$2.IsActive, result$$2.Modifiers);
        }

      case 3:
        {
          const modifiers$$2 = opt$$2.fields[0];
          return new Tab$002EOptions(result$$2.Props, result$$2.CustomClass, result$$2.IsActive, Modifier$0024$0024$0024parseModifiers(modifiers$$2));
        }

      default:
        {
          const props$$12 = opt$$2.fields[0];
          return new Tab$002EOptions(props$$12, result$$2.CustomClass, result$$2.IsActive, result$$2.Modifiers);
        }
    }
  };

  const opts$$5 = fold(parseOptions$$2, Tab$002EOptions$$$get_Empty(), options$$7);
  const classes$$5 = Common$0024002EHelpers$0024$0024$0024classes("", new List(opts$$5.CustomClass, opts$$5.Modifiers), new List(["is-active", opts$$5.IsActive], new List()));
  return createElement("a", createObj(new List(classes$$5, opts$$5.Props), 1), ...children$$15);
}
export function icon(options$$9, children$$18) {
  const opts$$6 = Common$0024$0024$0024genericParse(options$$9);
  const classes$$6 = Common$0024002EHelpers$0024$0024$0024classes("panel-icon", new List(opts$$6.CustomClass, opts$$6.Modifiers), new List());
  return createElement("span", createObj(new List(classes$$6, opts$$6.Props), 1), ...children$$18);
}
