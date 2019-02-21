import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, bool, option, union, list as list$$1, type, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Heading_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Heading.Option", [], Option, () => ["Is1", "Is2", "Is3", "Is4", "Is5", "Is6", "IsSubtitle", "IsSpaced", ["CustomClass", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Heading_Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.TitleSize = arg1;
  this.TitleType = arg2;
  this.IsSpaced = arg3;
  this.CustomClass = arg4;
  this.Props = arg5;
  this.Modifiers = arg6;
}, Record);
export function Options$reflection() {
  return record("Fulma.Heading.Options", [], Options, () => [["TitleSize", option(string)], ["TitleType", string], ["IsSpaced", bool], ["CustomClass", option(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, "title", false, null, new List(), new List());
}
export function title(element, options, children) {
  const parseOption = function parseOption(result, opt) {
    switch (opt.tag) {
      case 1:
        {
          return new Options("is-2", result.TitleType, result.IsSpaced, result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          return new Options("is-3", result.TitleType, result.IsSpaced, result.CustomClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          return new Options("is-4", result.TitleType, result.IsSpaced, result.CustomClass, result.Props, result.Modifiers);
        }

      case 4:
        {
          return new Options("is-5", result.TitleType, result.IsSpaced, result.CustomClass, result.Props, result.Modifiers);
        }

      case 5:
        {
          return new Options("is-6", result.TitleType, result.IsSpaced, result.CustomClass, result.Props, result.Modifiers);
        }

      case 6:
        {
          return new Options(result.TitleSize, "subtitle", result.IsSpaced, result.CustomClass, result.Props, result.Modifiers);
        }

      case 7:
        {
          return new Options(result.TitleSize, result.TitleType, true, result.CustomClass, result.Props, result.Modifiers);
        }

      case 8:
        {
          const customClass = opt.fields[0];
          return new Options(result.TitleSize, result.TitleType, result.IsSpaced, customClass, result.Props, result.Modifiers);
        }

      case 9:
        {
          const props = opt.fields[0];
          return new Options(result.TitleSize, result.TitleType, result.IsSpaced, result.CustomClass, props, result.Modifiers);
        }

      case 10:
        {
          const modifiers = opt.fields[0];
          return new Options(result.TitleSize, result.TitleType, result.IsSpaced, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          return new Options("is-1", result.TitleType, result.IsSpaced, result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOption, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes(opts.TitleType, new List(opts.TitleSize, new List(opts.CustomClass, opts.Modifiers)), new List(["is-spaced", opts.IsSpaced], new List()));
  return element(new List(classes, opts.Props), children);
}
export function h1(options$$2) {
  return function (children$$4) {
    return title(function element$$1(props$$1, children$$1) {
      return createElement("h1", createObj(props$$1, 1), ...children$$1);
    }, new List(new Option(0, "Is1"), options$$2), children$$4);
  };
}
export function h2(options$$4) {
  return function (children$$8) {
    return title(function element$$2(props$$4, children$$5) {
      return createElement("h2", createObj(props$$4, 1), ...children$$5);
    }, new List(new Option(1, "Is2"), options$$4), children$$8);
  };
}
export function h3(options$$6) {
  return function (children$$12) {
    return title(function element$$3(props$$7, children$$9) {
      return createElement("h3", createObj(props$$7, 1), ...children$$9);
    }, new List(new Option(2, "Is3"), options$$6), children$$12);
  };
}
export function h4(options$$8) {
  return function (children$$16) {
    return title(function element$$4(props$$10, children$$13) {
      return createElement("h4", createObj(props$$10, 1), ...children$$13);
    }, new List(new Option(3, "Is4"), options$$8), children$$16);
  };
}
export function h5(options$$10) {
  return function (children$$20) {
    return title(function element$$5(props$$13, children$$17) {
      return createElement("h5", createObj(props$$13, 1), ...children$$17);
    }, new List(new Option(4, "Is5"), options$$10), children$$20);
  };
}
export function h6(options$$12) {
  return function (children$$24) {
    return title(function element$$6(props$$16, children$$21) {
      return createElement("h6", createObj(props$$16, 1), ...children$$21);
    }, new List(new Option(5, "Is6"), options$$12), children$$24);
  };
}
export function p(opts$$1, children$$25) {
  return title(function (props$$19, children$$26) {
    return createElement("p", createObj(props$$19, 1), ...children$$26);
  }, opts$$1, children$$25);
}
