import { List, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.TitleSize = arg1;
  this.TitleType = arg2;
  this.IsSpaced = arg3;
  this.CustomClass = arg4;
  this.Props = arg5;
  this.Modifiers = arg6;
}, Record);
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
  return function (children$$2) {
    return title(function element$$1(b, c) {
      return createElement("h1", createObj(b, 1), ...c);
    }, new List(new Option(0, "Is1"), options$$2), children$$2);
  };
}
export function h2(options$$4) {
  return function (children$$4) {
    return title(function element$$2(b$$2, c$$2) {
      return createElement("h2", createObj(b$$2, 1), ...c$$2);
    }, new List(new Option(1, "Is2"), options$$4), children$$4);
  };
}
export function h3(options$$6) {
  return function (children$$6) {
    return title(function element$$3(b$$4, c$$4) {
      return createElement("h3", createObj(b$$4, 1), ...c$$4);
    }, new List(new Option(2, "Is3"), options$$6), children$$6);
  };
}
export function h4(options$$8) {
  return function (children$$8) {
    return title(function element$$4(b$$6, c$$6) {
      return createElement("h4", createObj(b$$6, 1), ...c$$6);
    }, new List(new Option(3, "Is4"), options$$8), children$$8);
  };
}
export function h5(options$$10) {
  return function (children$$10) {
    return title(function element$$5(b$$8, c$$8) {
      return createElement("h5", createObj(b$$8, 1), ...c$$8);
    }, new List(new Option(4, "Is5"), options$$10), children$$10);
  };
}
export function h6(options$$12) {
  return function (children$$12) {
    return title(function element$$6(b$$10, c$$10) {
      return createElement("h6", createObj(b$$10, 1), ...c$$10);
    }, new List(new Option(5, "Is6"), options$$12), children$$12);
  };
}
export function p(opts$$1, children$$13) {
  return title(function (b$$12, c$$12) {
    return createElement("p", createObj(b$$12, 1), ...c$$12);
  }, opts$$1, children$$13);
}
