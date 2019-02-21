import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option as option$$1, list as list$$1, lambda, unit, type, bool, string, union } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Color$$$ofColor as Color$0024$0024$0024ofColor, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { append as append$$1, ofSeq, ofArray, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { append, delay, empty, singleton } from "../fable-library.2.2.0-beta-010/Seq.js";
import { Props$002EDOMAttr as Props$0024002EDOMAttr, Props$002EProp as Props$0024002EProp, Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
import { createObj, equals } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const IInputType = declare(function Fulma_Input_IInputType(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function IInputType$reflection() {
  return union("Fulma.Input.IInputType", [], IInputType, () => ["Text", "Password", "DatetimeLocal", "Date", "Month", "Time", "Week", "Number", "Email", "Url", "Search", "Tel", "ColorType"]);
}
export const Option = declare(function Fulma_Input_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Input.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], ["Type", [IInputType$reflection()]], ["Color", [Color$0024002EIColor$0024reflection()]], ["Id", [string]], ["Disabled", [bool]], ["IsReadOnly", [bool]], ["IsStatic", [bool]], "IsRounded", ["Value", [string]], ["DefaultValue", [string]], ["ValueOrDefault", [string]], ["Placeholder", [string]], ["OnChange", [lambda(type("Fable.Import.React.FormEvent"), unit)]], ["Ref", [lambda(type("Fable.Import.Browser.Element"), unit)]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Input_Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17) {
  this.Size = arg1;
  this.Type = arg2;
  this.Color = arg3;
  this.Id = arg4;
  this.Disabled = arg5;
  this.IsReadOnly = arg6;
  this.IsStatic = arg7;
  this.IsRounded = arg8;
  this.Value = arg9;
  this.DefaultValue = arg10;
  this.ValueOrDefault = arg11;
  this.Placeholder = arg12;
  this.OnChange = arg13;
  this.Ref = arg14;
  this.Props = arg15;
  this.CustomClass = arg16;
  this.Modifiers = arg17;
}, Record);
export function Options$reflection() {
  return record("Fulma.Input.Options", [], Options, () => [["Size", option$$1(string)], ["Type", string], ["Color", option$$1(string)], ["Id", option$$1(string)], ["Disabled", bool], ["IsReadOnly", bool], ["IsStatic", bool], ["IsRounded", bool], ["Value", option$$1(string)], ["DefaultValue", option$$1(string)], ["ValueOrDefault", option$$1(string)], ["Placeholder", option$$1(string)], ["OnChange", option$$1(lambda(type("Fable.Import.React.FormEvent"), unit))], ["Ref", option$$1(lambda(type("Fable.Import.Browser.Element"), unit))], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["CustomClass", option$$1(string)], ["Modifiers", list$$1(option$$1(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, "", null, null, false, false, false, false, null, null, null, null, null, null, new List(), null, new List());
}

function ofType(_arg1) {
  switch (_arg1.tag) {
    case 1:
      {
        return "password";
      }

    case 2:
      {
        return "datetime-local";
      }

    case 3:
      {
        return "date";
      }

    case 4:
      {
        return "month";
      }

    case 5:
      {
        return "time";
      }

    case 6:
      {
        return "week";
      }

    case 7:
      {
        return "number";
      }

    case 8:
      {
        return "email";
      }

    case 9:
      {
        return "url";
      }

    case 10:
      {
        return "search";
      }

    case 11:
      {
        return "tel";
      }

    case 12:
      {
        return "color";
      }

    default:
      {
        return "text";
      }
  }
}

export function input(options) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          const type$0027 = option.fields[0];
          return new Options(result.Size, ofType(type$0027), result.Color, result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 2:
        {
          const color$$1 = option.fields[0];
          return new Options(result.Size, result.Type, Color$0024$0024$0024ofColor(color$$1), result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          const id = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 4:
        {
          const disabled = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, result.Id, disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 5:
        {
          const state = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, result.Id, result.Disabled, state, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 6:
        {
          const state$$1 = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, result.Id, result.Disabled, result.IsReadOnly, state$$1, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 7:
        {
          return new Options(result.Size, result.Type, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, true, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 8:
        {
          const value = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 9:
        {
          const defaultValue = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, defaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 10:
        {
          const valueOrDefault = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, valueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 11:
        {
          const placeholder = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 14:
        {
          const props = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, props, result.CustomClass, result.Modifiers);
        }

      case 12:
        {
          const cb = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, cb, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }

      case 13:
        {
          const cb$$1 = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, cb$$1, result.Props, result.CustomClass, result.Modifiers);
        }

      case 15:
        {
          const customClass = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, customClass, result.Modifiers);
        }

      case 16:
        {
          const modifiers = option.fields[0];
          return new Options(result.Size, result.Type, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const size = option.fields[0];
          return new Options(Size$0024$0024$0024ofSize(size), result.Type, result.Color, result.Id, result.Disabled, result.IsReadOnly, result.IsStatic, result.IsRounded, result.Value, result.DefaultValue, result.ValueOrDefault, result.Placeholder, result.OnChange, result.Ref, result.Props, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("input", new List(opts.Size, new List(opts.Color, new List(opts.CustomClass, opts.Modifiers))), ofArray([["is-static", opts.IsStatic], ["is-rounded", opts.IsRounded]]));
  return createElement("input", createObj(append$$1(ofSeq(delay(function () {
    return append(singleton(classes), delay(function () {
      return append(singleton(new Props$0024002EHTMLAttr(37, "Disabled", opts.Disabled)), delay(function () {
        return append(singleton(new Props$0024002EHTMLAttr(90, "ReadOnly", opts.IsReadOnly)), delay(function () {
          return append(singleton(new Props$0024002EHTMLAttr(117, "Type", opts.Type)), delay(function () {
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
                        return opts.Ref != null ? singleton(new Props$0024002EProp(1, "Ref", opts.Ref)) : empty();
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
  })), opts.Props), 1), ...new List());
}
export function text(options$$2) {
  return input(new List(new Option(1, "Type", new IInputType(0, "Text")), options$$2));
}
export function password(options$$3) {
  return input(new List(new Option(1, "Type", new IInputType(1, "Password")), options$$3));
}
export function datetimeLocal(options$$4) {
  return input(new List(new Option(1, "Type", new IInputType(2, "DatetimeLocal")), options$$4));
}
export function date(options$$5) {
  return input(new List(new Option(1, "Type", new IInputType(3, "Date")), options$$5));
}
export function month(options$$6) {
  return input(new List(new Option(1, "Type", new IInputType(4, "Month")), options$$6));
}
export function time(options$$7) {
  return input(new List(new Option(1, "Type", new IInputType(5, "Time")), options$$7));
}
export function week(options$$8) {
  return input(new List(new Option(1, "Type", new IInputType(6, "Week")), options$$8));
}
export function number(options$$9) {
  return input(new List(new Option(1, "Type", new IInputType(7, "Number")), options$$9));
}
export function email(options$$10) {
  return input(new List(new Option(1, "Type", new IInputType(8, "Email")), options$$10));
}
export function url(options$$11) {
  return input(new List(new Option(1, "Type", new IInputType(9, "Url")), options$$11));
}
export function search(options$$12) {
  return input(new List(new Option(1, "Type", new IInputType(10, "Search")), options$$12));
}
export function tel(options$$13) {
  return input(new List(new Option(1, "Type", new IInputType(11, "Tel")), options$$13));
}
export function color(options$$14) {
  return input(new List(new Option(1, "Type", new IInputType(12, "ColorType")), options$$14));
}
