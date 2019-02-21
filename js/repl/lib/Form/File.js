import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option as option$$1, union, bool, list as list$$1, type, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Color$$$ofColor as Color$0024$0024$0024ofColor, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { ofArray, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
import { Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_File_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.File.Option", [], Option, () => [["CustomClass", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["IsFocused", [bool]], ["IsActive", [bool]], ["IsHovered", [bool]], ["Size", [Size$0024002EISize$0024reflection()]], "IsFullWidth", "IsCentered", "IsRight", "IsBoxed", "HasName", ["IsEmpty", [bool]], ["Color", [Color$0024002EIColor$0024reflection()]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_File_Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12) {
  this.CustomClass = arg1;
  this.Props = arg2;
  this.IsFocused = arg3;
  this.IsActive = arg4;
  this.IsHovered = arg5;
  this.Size = arg6;
  this.Alignment = arg7;
  this.IsBoxed = arg8;
  this.Color = arg9;
  this.HasName = arg10;
  this.IsEmpty = arg11;
  this.Modifiers = arg12;
}, Record);
export function Options$reflection() {
  return record("Fulma.File.Options", [], Options, () => [["CustomClass", option$$1(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["IsFocused", bool], ["IsActive", bool], ["IsHovered", bool], ["Size", option$$1(string)], ["Alignment", option$$1(string)], ["IsBoxed", bool], ["Color", option$$1(string)], ["HasName", bool], ["IsEmpty", bool], ["Modifiers", list$$1(option$$1(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, new List(), false, false, false, null, null, false, null, false, false, new List());
}
export function file(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          const props = option.fields[0];
          return new Options(result.CustomClass, props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 2:
        {
          const state = option.fields[0];
          return new Options(result.CustomClass, result.Props, state, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 3:
        {
          const state$$1 = option.fields[0];
          return new Options(result.CustomClass, result.Props, result.IsFocused, state$$1, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 4:
        {
          const state$$2 = option.fields[0];
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, state$$2, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 5:
        {
          const size = option.fields[0];
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, Size$0024$0024$0024ofSize(size), result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 6:
        {
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, "is-fullwidth", result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 7:
        {
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, "is-centered", result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 8:
        {
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, "is-right", result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 12:
        {
          const color = option.fields[0];
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, Color$0024$0024$0024ofColor(color), result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 9:
        {
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, true, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }

      case 10:
        {
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, true, result.IsEmpty, result.Modifiers);
        }

      case 11:
        {
          const state$$3 = option.fields[0];
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, state$$3, result.Modifiers);
        }

      case 13:
        {
          const modifiers = option.fields[0];
          return new Options(result.CustomClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const customClass = option.fields[0];
          return new Options(customClass, result.Props, result.IsFocused, result.IsActive, result.IsHovered, result.Size, result.Alignment, result.IsBoxed, result.Color, result.HasName, result.IsEmpty, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("file", new List(opts.CustomClass, new List(opts.Size, new List(opts.Alignment, new List(opts.Color, opts.Modifiers)))), ofArray([["is-boxed", opts.IsBoxed], ["has-name", opts.HasName], ["is-focused", opts.IsFocused], ["is-active", opts.IsActive], ["is-hovered", opts.IsHovered], ["is-empty", opts.IsEmpty]]));
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
export function cta(options$$2, children$$3) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("file-cta", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("span", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$3);
}
export function name(options$$3, children$$6) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("file-name", new List(opts$$2.CustomClass, opts$$2.Modifiers), new List());
  return createElement("span", createObj(new List(classes$$2, opts$$2.Props), 1), ...children$$6);
}
export function icon(options$$4, children$$9) {
  const opts$$3 = Common$0024$0024$0024genericParse(options$$4);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("file-icon", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List());
  return createElement("span", createObj(new List(classes$$3, opts$$3.Props), 1), ...children$$9);
}
export function label(options$$5, children$$12) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$5);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("file-label", new List(opts$$4.CustomClass, opts$$4.Modifiers), new List());
  return createElement("label", createObj(new List(classes$$4, opts$$4.Props), 1), ...children$$12);
}
export function input(options$$6) {
  const opts$$5 = Common$0024$0024$0024genericParse(options$$6);
  const classes$$5 = Common$0024002EHelpers$0024$0024$0024classes("file-input", new List(opts$$5.CustomClass, opts$$5.Modifiers), new List());
  return createElement("input", createObj(new List(classes$$5, new List(new Props$0024002EHTMLAttr(117, "Type", "file"), opts$$5.Props)), 1), ...new List());
}
