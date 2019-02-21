import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { record, bool, option, union, list as list$$2, type, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { ofArray, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Tabs_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Tabs.Option", [], Option, () => ["IsCentered", "IsRight", ["Size", [Size$0024002EISize$0024reflection()]], "IsBoxed", "IsToggle", "IsToggleRounded", "IsFullWidth", ["CustomClass", [string]], ["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Tabs_Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.Alignment = arg1;
  this.Size = arg2;
  this.IsBoxed = arg3;
  this.IsToggle = arg4;
  this.IsToggleRounded = arg5;
  this.IsFullwidth = arg6;
  this.CustomClass = arg7;
  this.Props = arg8;
  this.Modifiers = arg9;
}, Record);
export function Options$reflection() {
  return record("Fulma.Tabs.Options", [], Options, () => [["Alignment", option(string)], ["Size", option(string)], ["IsBoxed", bool], ["IsToggle", bool], ["IsToggleRounded", bool], ["IsFullwidth", bool], ["CustomClass", option(string)], ["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$2(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, null, false, false, false, false, null, new List(), new List());
}
export const Tab$002EOption = declare(function Fulma_Tabs_Tab_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Tab$002EOption$reflection() {
  return union("Fulma.Tabs.Tab.Option", [], Tab$002EOption, () => [["IsActive", [bool]], ["CustomClass", [string]], ["Props", [list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$2(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Tab$002EOptions = declare(function Fulma_Tabs_Tab_Options(arg1, arg2, arg3, arg4) {
  this.IsActive = arg1;
  this.CustomClass = arg2;
  this.Props = arg3;
  this.Modifiers = arg4;
}, Record);
export function Tab$002EOptions$reflection() {
  return record("Fulma.Tabs.Tab.Options", [], Tab$002EOptions, () => [["IsActive", bool], ["CustomClass", option(string)], ["Props", list$$2(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$2(option(string))]]);
}
export function Tab$002EOptions$$$get_Empty() {
  return new Tab$002EOptions(false, null, new List(), new List());
}
export function tabs(options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          return new Options("is-right", result.Size, result.IsBoxed, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          return new Options(result.Alignment, result.Size, true, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, result.Props, result.Modifiers);
        }

      case 4:
        {
          return new Options(result.Alignment, result.Size, result.IsBoxed, true, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, result.Props, result.Modifiers);
        }

      case 5:
        {
          return new Options(result.Alignment, result.Size, result.IsBoxed, result.IsToggle, true, result.IsFullwidth, result.CustomClass, result.Props, result.Modifiers);
        }

      case 6:
        {
          return new Options(result.Alignment, result.Size, result.IsBoxed, result.IsToggle, result.IsToggleRounded, true, result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          const size = opt.fields[0];
          return new Options(result.Alignment, Size$0024$0024$0024ofSize(size), result.IsBoxed, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, result.Props, result.Modifiers);
        }

      case 7:
        {
          const customClass = opt.fields[0];
          return new Options(result.Alignment, result.Size, result.IsBoxed, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, customClass, result.Props, result.Modifiers);
        }

      case 8:
        {
          const props = opt.fields[0];
          return new Options(result.Alignment, result.Size, result.IsBoxed, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, props, result.Modifiers);
        }

      case 9:
        {
          const modifiers = opt.fields[0];
          return new Options(result.Alignment, result.Size, result.IsBoxed, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new Options("is-centered", result.Size, result.IsBoxed, result.IsToggle, result.IsToggleRounded, result.IsFullwidth, result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("tabs", new List(opts.Alignment, new List(opts.Size, new List(opts.CustomClass, opts.Modifiers))), ofArray([["is-boxed", opts.IsBoxed], ["is-fullwidth", opts.IsFullwidth], ["is-toggle", opts.IsToggle], ["is-toggle-rounded", opts.IsToggleRounded]]));
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...[createElement("ul", {}, ...children)]);
}
export function tab(options$$2, children$$5) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, opt$$1) {
    switch (opt$$1.tag) {
      case 1:
        {
          const customClass$$1 = opt$$1.fields[0];
          return new Tab$002EOptions(result$$1.IsActive, customClass$$1, result$$1.Props, result$$1.Modifiers);
        }

      case 2:
        {
          const props$$5 = opt$$1.fields[0];
          return new Tab$002EOptions(result$$1.IsActive, result$$1.CustomClass, props$$5, result$$1.Modifiers);
        }

      case 3:
        {
          const modifiers$$1 = opt$$1.fields[0];
          return new Tab$002EOptions(result$$1.IsActive, result$$1.CustomClass, result$$1.Props, Modifier$0024$0024$0024parseModifiers(modifiers$$1));
        }

      default:
        {
          const state$$1 = opt$$1.fields[0];
          return new Tab$002EOptions(state$$1, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }
    }
  };

  const opts$$1 = fold(parseOptions$$1, Tab$002EOptions$$$get_Empty(), options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List(["is-active", opts$$1.IsActive], new List()));
  return createElement("li", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$5);
}
