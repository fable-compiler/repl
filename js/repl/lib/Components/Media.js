import { List, Record, declare, Union } from "../../fable-core/Types.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Size$$$ofSize as Size$0024$0024$0024ofSize } from "../Fulma/Common.js";
import { fold } from "../../fable-core/List.js";
import { createObj } from "../../fable-core/Util.js";
const createElement = React.createElement;
export const Option = declare(function Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Options = declare(function Options(arg1, arg2, arg3, arg4) {
  this.Size = arg1;
  this.Props = arg2;
  this.CustomClass = arg3;
  this.Modifiers = arg4;
}, Record);
export function Options$$$get_Empty() {
  return new Options(null, new List(), null, new List());
}
export function media(options, children) {
  const parseOption = function parseOption(result, opt) {
    var $target$$1, size, props, customClass, modifiers;

    if (opt.tag === 1) {
      $target$$1 = 2;
      props = opt.fields[0];
    } else if (opt.tag === 2) {
      $target$$1 = 3;
      customClass = opt.fields[0];
    } else if (opt.tag === 3) {
      $target$$1 = 4;
      modifiers = opt.fields[0];
    } else if (opt.fields[0].tag === 0) {
      $target$$1 = 0;
    } else if (opt.fields[0].tag === 1) {
      $target$$1 = 0;
    } else {
      $target$$1 = 1;
      size = opt.fields[0];
    }

    switch ($target$$1) {
      case 0:
        {
          console.warn("`is-small` and `is-medium` are not valid sizes for the media component");
          return result;
        }

      case 1:
        {
          return new Options(Size$0024$0024$0024ofSize(size), result.Props, result.CustomClass, result.Modifiers);
        }

      case 2:
        {
          return new Options(result.Size, props, result.CustomClass, result.Modifiers);
        }

      case 3:
        {
          return new Options(result.Size, result.Props, customClass, result.Modifiers);
        }

      case 4:
        {
          return new Options(result.Size, result.Props, result.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers));
        }
    }
  };

  const opts = fold(parseOption, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("media", new List(opts.Size, new List(opts.CustomClass, opts.Modifiers)), new List());
  return createElement("article", createObj(new List(classes, opts.Props), 1), ...children);
}
export function left(options$$2, children$$2) {
  const opts$$1 = Common$0024$0024$0024genericParse(options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("media-left", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("figure", createObj(new List(classes$$1, opts$$1.Props), 1), ...children$$2);
}
export function right(options$$3, children$$4) {
  const opts$$2 = Common$0024$0024$0024genericParse(options$$3);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("media-right", new List(opts$$2.CustomClass, opts$$2.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$2, opts$$2.Props), 1), ...children$$4);
}
export function content(options$$4, children$$6) {
  const opts$$3 = Common$0024$0024$0024genericParse(options$$4);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("media-content", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$3, opts$$3.Props), 1), ...children$$6);
}
