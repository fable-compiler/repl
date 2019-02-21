import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Color$$$ofColor as Color$0024$0024$0024ofColor, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { record, option as option$$1, union, lambda, unit, list as list$$1, type, string, bool } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { ofSeq, ofArray, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { append, delay, empty, singleton } from "../fable-library.2.2.0-beta-010/Seq.js";
import { Props$002EDOMAttr as Props$0024002EDOMAttr, Props$002EProp as Props$0024002EProp, Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
import { createObj, equals } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Textarea_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Textarea.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], "IsFullWidth", "IsInline", ["IsLoading", [bool]], ["IsFocused", [bool]], ["IsActive", [bool]], ["IsReadOnly", [bool]], ["Color", [Color$0024002EIColor$0024reflection()]], ["Id", [string]], ["Disabled", [bool]], ["Value", [string]], ["DefaultValue", [string]], ["ValueOrDefault", [string]], ["Placeholder", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["OnChange", [lambda(type("Fable.Import.React.FormEvent"), unit)]], ["Ref", [lambda(type("Fable.Import.Browser.Element"), unit)]], ["CustomClass", [string]], "HasFixedSize", ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Textarea_Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18) {
  this.Size = arg1;
  this.IsLoading = arg2;
  this.IsFocused = arg3;
  this.IsActive = arg4;
  this.Color = arg5;
  this.Id = arg6;
  this.Disabled = arg7;
  this.IsReadOnly = arg8;
  this.HasFixedSize = arg9;
  this.Value = arg10;
  this.DefaultValue = arg11;
  this.ValueOrDefault = arg12;
  this.Placeholder = arg13;
  this.OnChange = arg14;
  this.Ref = arg15;
  this.Props = arg16;
  this.CustomClass = arg17;
  this.Modifiers = arg18;
}, Record);
export function Options$reflection() {
  return record("Fulma.Textarea.Options", [], Options, () => [["Size", option$$1(string)], ["IsLoading", bool], ["IsFocused", bool], ["IsActive", bool], ["Color", option$$1(string)], ["Id", option$$1(string)], ["Disabled", bool], ["IsReadOnly", bool], ["HasFixedSize", bool], ["Value", option$$1(string)], ["DefaultValue", option$$1(string)], ["ValueOrDefault", option$$1(string)], ["Placeholder", option$$1(string)], ["OnChange", option$$1(lambda(type("Fable.Import.React.FormEvent"), unit))], ["Ref", option$$1(lambda(type("Fable.Import.Browser.Element"), unit))], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["CustomClass", option$$1(string)], ["Modifiers", list$$1(option$$1(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, false, false, false, null, null, false, false, false, null, null, null, null, null, null, new List(), null, new List());
}
export function textarea(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          return new Options("is-fullwidth", result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 2:
        {
          return new Options("is-inline", result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          const state = option.fields[0];
          return new Options(result.Size, state, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 4:
        {
          const state$$1 = option.fields[0];
          return new Options(result.Size, result.IsLoading, state$$1, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 5:
        {
          const state$$2 = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, state$$2, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 7:
        {
          const color = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, Color$0024$0024$0024ofColor(color), result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 8:
        {
          const id = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 9:
        {
          const state$$3 = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, state$$3, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 6:
        {
          const state$$4 = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, state$$4, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 10:
        {
          const value = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 11:
        {
          const defaultValue = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, defaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 12:
        {
          const valueOrDefault = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, valueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 13:
        {
          const placeholder = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 14:
        {
          const props = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, props, result.CustomClass, result.Modifiers);
        }

      case 15:
        {
          const cb = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, cb, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 16:
        {
          const cb$$1 = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, cb$$1, result.Props, result.CustomClass, result.Modifiers);
        }

      case 17:
        {
          const customClass = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, customClass, result.Modifiers);
        }

      case 18:
        {
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, true, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 19:
        {
          const modifiers = option.fields[0];
          return new Options(result.Size, result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const size = option.fields[0];
          return new Options(Size$0024$0024$0024ofSize(size), result.IsLoading, result.IsFocused, result.IsActive, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.HasFixedSize, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("textarea", new List(opts.Color, new List(opts.CustomClass, new List(opts.Size, opts.Modifiers))), ofArray([["has-fixed-size", opts.HasFixedSize], ["is-loading", opts.IsLoading], ["is-focused", opts.IsFocused], ["is-active", opts.IsActive]]));
  return createElement("textarea", createObj(ofSeq(delay(function () {
    return append(singleton(classes), delay(function () {
      return append(singleton(new Props$0024002EHTMLAttr(37, "Disabled", opts.Disabled)), delay(function () {
        return append(singleton(new Props$0024002EHTMLAttr(90, "ReadOnly", opts.IsReadOnly)), delay(function () {
          return append(opts.Id != null ? singleton(new Props$0024002EHTMLAttr(57, "Id", opts.Id)) : empty(), delay(function () {
            return append(opts.Value != null ? singleton(new Props$0024002EHTMLAttr(119, "Value", opts.Value)) : empty(), delay(function () {
              return append(opts.DefaultValue != null ? singleton(new Props$0024002EHTMLAttr(1, "DefaultValue", opts.DefaultValue)) : empty(), delay(function () {
                return append(opts.ValueOrDefault != null ? singleton(new Props$0024002EProp(1, "Ref", function (e) {
                  if (!(e == null) ? !equals(e.value, opts.ValueOrDefault) : false) {
                    e.value = opts.ValueOrDefault;
                  }
                })) : empty(), delay(function () {
                  return append(opts.Placeholder != null ? singleton(new Props$0024002EHTMLAttr(86, "Placeholder", opts.Placeholder)) : empty(), delay(function () {
                    return append(opts.OnChange != null ? singleton(new Props$0024002EDOMAttr(9, "OnChange", opts.OnChange)) : empty(), delay(function () {
                      return append(opts.Ref != null ? singleton(new Props$0024002EProp(1, "Ref", opts.Ref)) : empty(), delay(function () {
                        return opts.Props;
                      }));
                    }));
                  }));
                }));
              }));
            }));
          }));
        }));
      }));
    }));
  })), 1), ...children);
}
