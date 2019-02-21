import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, bool, option, list as list$$1, type, string, union } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { ofSeq, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { append, delay, singleton } from "../fable-library.2.2.0-beta-010/Seq.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const ISize = declare(function Fulma_Tile_ISize(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function ISize$reflection() {
  return union("Fulma.Tile.ISize", [], ISize, () => ["Is1", "Is2", "Is3", "Is4", "Is5", "Is6", "Is7", "Is8", "Is9", "Is10", "Is11", "Is12"]);
}
export function ofSize(_arg1) {
  switch (_arg1.tag) {
    case 1:
      {
        return "is-2";
      }

    case 2:
      {
        return "is-3";
      }

    case 3:
      {
        return "is-4";
      }

    case 4:
      {
        return "is-5";
      }

    case 5:
      {
        return "is-6";
      }

    case 6:
      {
        return "is-7";
      }

    case 7:
      {
        return "is-8";
      }

    case 8:
      {
        return "is-9";
      }

    case 9:
      {
        return "is-10";
      }

    case 10:
      {
        return "is-11";
      }

    case 11:
      {
        return "is-12";
      }

    default:
      {
        return "is-1";
      }
  }
}
export const Option = declare(function Fulma_Tile_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Tile.Option", [], Option, () => [["Size", [ISize$reflection()]], ["CustomClass", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], "IsChild", "IsAncestor", "IsParent", "IsVertical", ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Tile_Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Size = arg1;
  this.IsVertical = arg2;
  this.CustomClass = arg3;
  this.Props = arg4;
  this.Context = arg5;
  this.Modifiers = arg6;
}, Record);
export function Options$reflection() {
  return record("Fulma.Tile.Options", [], Options, () => [["Size", option(string)], ["IsVertical", bool], ["CustomClass", option(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Context", option(string)], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, false, null, new List(), null, new List());
}
export function tile(options, children) {
  const parseOptions = function parseOptions(result, _arg1$$1) {
    switch (_arg1$$1.tag) {
      case 2:
        {
          const props = _arg1$$1.fields[0];
          return new Options(result.Size, result.IsVertical, result.CustomClass, props, result.Context, result.Modifiers);
        }

      case 0:
        {
          const size = _arg1$$1.fields[0];
          return new Options(ofSize(size), result.IsVertical, result.CustomClass, result.Props, result.Context, result.Modifiers);
        }

      case 3:
        {
          return new Options(result.Size, result.IsVertical, result.CustomClass, result.Props, "is-child", result.Modifiers);
        }

      case 4:
        {
          return new Options(result.Size, result.IsVertical, result.CustomClass, result.Props, "is-ancestor", result.Modifiers);
        }

      case 5:
        {
          return new Options(result.Size, result.IsVertical, result.CustomClass, result.Props, "is-parent", result.Modifiers);
        }

      case 6:
        {
          return new Options(result.Size, true, result.CustomClass, result.Props, result.Context, result.Modifiers);
        }

      case 7:
        {
          const modifiers = _arg1$$1.fields[0];
          return new Options(result.Size, result.IsVertical, result.CustomClass, result.Props, result.Context, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const customClass = _arg1$$1.fields[0];
          return new Options(result.Size, result.IsVertical, customClass, result.Props, result.Context, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  return createElement("div", createObj(ofSeq(delay(function () {
    return append(singleton(Common$0024002EHelpers$0024$0024$0024classes("tile", new List(opts.CustomClass, new List(opts.Context, new List(opts.Size, opts.Modifiers))), new List(["is-vertical", opts.IsVertical], new List()))), delay(function () {
      return opts.Props;
    }));
  })), 1), ...children);
}
export function parent(options$$2, children$$3) {
  return tile(new List(new Option(5, "IsParent"), options$$2), children$$3);
}
export function child(options$$3, children$$4) {
  return tile(new List(new Option(3, "IsChild"), options$$3), children$$4);
}
export function ancestor(options$$4, children$$5) {
  return tile(new List(new Option(4, "IsAncestor"), options$$4), children$$5);
}
