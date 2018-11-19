import { List, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Size$$$ofSize as Size$0024$0024$0024ofSize, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Color$$$ofColor as Color$0024$0024$0024ofColor } from "../Fulma/Common.js";
import { ofArray, fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
  this.Size = arg1;
  this.Color = arg2;
  this.IsLoading = arg3;
  this.IsFocused = arg4;
  this.IsActive = arg5;
  this.IsDisabled = arg6;
  this.IsRounded = arg7;
  this.Props = arg8;
  this.CustomClass = arg9;
  this.Modifiers = arg10;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, null, false, false, false, false, false, new List(), null, new List());
}
export function select(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          return new Options("is-fullwidth", result.Color, result.IsLoading, result.IsFocused, result.IsActive, result.IsDisabled, result.IsRounded, result.Props, result.CustomClass, result.Modifiers);
        }

      case 2:
        {
          return new Options("is-inline", result.Color, result.IsLoading, result.IsFocused, result.IsActive, result.IsDisabled, result.IsRounded, result.Props, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          const state = _arg1.fields[0];
          return new Options(result.Size, result.Color, state, result.IsFocused, result.IsActive, result.IsDisabled, result.IsRounded, result.Props, result.CustomClass, result.Modifiers);
        }

      case 4:
        {
          const state$$1 = _arg1.fields[0];
          return new Options(result.Size, result.Color, result.IsLoading, state$$1, result.IsActive, result.IsDisabled, result.IsRounded, result.Props, result.CustomClass, result.Modifiers);
        }

      case 5:
        {
          const state$$2 = _arg1.fields[0];
          return new Options(result.Size, result.Color, result.IsLoading, result.IsFocused, state$$2, result.IsDisabled, result.IsRounded, result.Props, result.CustomClass, result.Modifiers);
        }

      case 6:
        {
          const state$$3 = _arg1.fields[0];
          return new Options(result.Size, result.Color, result.IsLoading, result.IsFocused, result.IsActive, state$$3, result.IsRounded, result.Props, result.CustomClass, result.Modifiers);
        }

      case 8:
        {
          return new Options(result.Size, result.Color, result.IsLoading, result.IsFocused, result.IsActive, result.IsDisabled, true, result.Props, result.CustomClass, result.Modifiers);
        }

      case 7:
        {
          const color = _arg1.fields[0];
          return new Options(result.Size, Color$0024$0024$0024ofColor(color), result.IsLoading, result.IsFocused, result.IsActive, result.IsDisabled, result.IsRounded, result.Props, result.CustomClass, result.Modifiers);
        }

      case 9:
        {
          const props = _arg1.fields[0];
          return new Options(result.Size, result.Color, result.IsLoading, result.IsFocused, result.IsActive, result.IsDisabled, result.IsRounded, props, result.CustomClass, result.Modifiers);
        }

      case 10:
        {
          const customClass = _arg1.fields[0];
          return new Options(result.Size, result.Color, result.IsLoading, result.IsFocused, result.IsActive, result.IsDisabled, result.IsRounded, result.Props, customClass, result.Modifiers);
        }

      case 11:
        {
          const modifiers = _arg1.fields[0];
          return new Options(result.Size, result.Color, result.IsLoading, result.IsFocused, result.IsActive, result.IsDisabled, result.IsRounded, result.Props, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const size = _arg1.fields[0];
          return new Options(Size$0024$0024$0024ofSize(size), result.Color, result.IsLoading, result.IsFocused, result.IsActive, result.IsDisabled, result.IsRounded, result.Props, result.CustomClass, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("select", new List(opts.Size, new List(opts.Color, new List(opts.CustomClass, opts.Modifiers))), ofArray([["is-loading", opts.IsLoading], ["is-focused", opts.IsFocused], ["is-active", opts.IsActive], ["is-disabled", opts.IsDisabled], ["is-rounded", opts.IsRounded]]));
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
