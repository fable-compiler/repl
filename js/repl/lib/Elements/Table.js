import { List, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { ofArray, fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const TableOption = declare(function TableOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
const TableOptions = declare(function TableOptions(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this.IsBordered = arg1;
  this.IsStriped = arg2;
  this.IsFullwidth = arg3;
  this.IsNarrow = arg4;
  this.IsHoverable = arg5;
  this.CustomClass = arg6;
  this.Props = arg7;
  this.Modifiers = arg8;
}, Record);

function TableOptions$$$get_Empty() {
  return new TableOptions(false, false, false, false, false, null, new List(), new List());
}

export function table(options, children) {
  const parseOptions = function parseOptions(result, _arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          return new TableOptions(result.IsBordered, true, result.IsFullwidth, result.IsNarrow, result.IsHoverable, result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          return new TableOptions(result.IsBordered, result.IsStriped, true, result.IsNarrow, result.IsHoverable, result.CustomClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          return new TableOptions(result.IsBordered, result.IsStriped, result.IsFullwidth, true, result.IsHoverable, result.CustomClass, result.Props, result.Modifiers);
        }

      case 4:
        {
          return new TableOptions(result.IsBordered, result.IsStriped, result.IsFullwidth, result.IsNarrow, true, result.CustomClass, result.Props, result.Modifiers);
        }

      case 5:
        {
          const customClass = _arg1.fields[0];
          return new TableOptions(result.IsBordered, result.IsStriped, result.IsFullwidth, result.IsNarrow, result.IsHoverable, customClass, result.Props, result.Modifiers);
        }

      case 6:
        {
          const props = _arg1.fields[0];
          return new TableOptions(result.IsBordered, result.IsStriped, result.IsFullwidth, result.IsNarrow, result.IsHoverable, result.CustomClass, props, result.Modifiers);
        }

      case 7:
        {
          const modifiers = _arg1.fields[0];
          return new TableOptions(result.IsBordered, result.IsStriped, result.IsFullwidth, result.IsNarrow, result.IsHoverable, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new TableOptions(true, result.IsStriped, result.IsFullwidth, result.IsNarrow, result.IsHoverable, result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, TableOptions$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("table", new List(opts.CustomClass, opts.Modifiers), ofArray([["is-bordered", opts.IsBordered], ["is-striped", opts.IsStriped], ["is-fullwidth", opts.IsFullwidth], ["is-narrow", opts.IsNarrow], ["is-hoverable", opts.IsHoverable]]));
  return createElement("table", createObj(new List(classes, opts.Props), 1), ...children);
}
