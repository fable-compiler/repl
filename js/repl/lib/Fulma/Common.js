import { record, list as list$$5, type, bool, string, union, getCaseTag, getCaseName } from "../fable-library.2.3.7/Reflection.js";
import { Record, List, declare, Union } from "../fable-library.2.3.7/Types.js";
import { createObj, int32ToString } from "../fable-library.2.3.7/Util.js";
import { filter, append, fold } from "../fable-library.2.3.7/List.js";
import { defaultArg } from "../fable-library.2.3.7/Option.js";
import { HTMLAttr } from "../src/Fable.React.Props.js";
import { join } from "../fable-library.2.3.7/String.js";
export function Reflection$$$getCaseName(case$) {
  return getCaseName(case$);
}
export function Reflection$$$getCaseTag(case$$$1) {
  return getCaseTag(case$$$1);
}
export const Screen = declare(function Fulma_Screen(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Screen$reflection() {
  return union("Fulma.Screen", [], Screen, () => ["All", "desktop", "tablet", "mobile", "widescreen", "touch", "fullhd"]);
}
export function Screen$$$ToString$$2D2414B4(screen) {
  switch (screen.tag) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      {
        return "-" + Reflection$$$getCaseName(screen);
      }

    default:
      {
        return "";
      }
  }
}
export const Color$002EIColor = declare(function Fulma_Color_IColor(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Color$002EIColor$reflection() {
  return union("Fulma.Color.IColor", [], Color$002EIColor, () => ["is-black", "is-dark", "is-light", "is-white", "is-primary", "is-info", "is-success", "is-warning", "is-danger", "is-link", "is-black-bis", "is-black-ter", "is-grey-darker", "is-grey-dark", "is-grey", "is-grey-light", "is-grey-lighter", "is-white-ter", "is-white-bis", ["IsCustomColor", [string]], "NoColor"]);
}
export function Color$$$ofColor(level) {
  switch (level.tag) {
    case 19:
      {
        const color = level.fields[0];
        return "is-" + color;
      }

    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
      {
        return Reflection$$$getCaseName(level);
      }

    default:
      {
        return "";
      }
  }
}
export const Size$002EISize = declare(function Fulma_Size_ISize(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Size$002EISize$reflection() {
  return union("Fulma.Size.ISize", [], Size$002EISize, () => ["is-small", "is-medium", "is-large"]);
}
export function Size$$$ofSize(size) {
  return Reflection$$$getCaseName(size);
}
export const TextSize$002EOption = declare(function Fulma_TextSize_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function TextSize$002EOption$reflection() {
  return union("Fulma.TextSize.Option", [], TextSize$002EOption, () => ["Is1", "Is2", "Is3", "Is4", "Is5", "Is6", "Is7"]);
}
export function TextSize$002EOption$$$ToString$$Z2E0B9453(x) {
  return int32ToString(Reflection$$$getCaseTag(x) + 1);
}
export function TextSize$$$generic(screen$$1, size$$1) {
  return "is-size-" + TextSize$002EOption$$$ToString$$Z2E0B9453(size$$1) + Screen$$$ToString$$2D2414B4(screen$$1);
}
export function TextSize$$$only(screen$$2, size$$2) {
  switch (screen$$2.tag) {
    case 2:
    case 1:
    case 4:
      {
        return "is-size-" + TextSize$002EOption$$$ToString$$Z2E0B9453(size$$2) + Screen$$$ToString$$2D2414B4(screen$$2) + "-only";
      }

    default:
      {
        const x$$1 = screen$$2;
        console.warn("Screen `%s` does not support `is-size-xxx-only`." + String(x$$1));
        return "";
      }
  }
}
export const TextAlignment$002EOption = declare(function Fulma_TextAlignment_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function TextAlignment$002EOption$reflection() {
  return union("Fulma.TextAlignment.Option", [], TextAlignment$002EOption, () => ["has-text-centered", "has-text-justified", "has-text-left", "has-text-right"]);
}
export function TextAlignment$002EOption$$$ToString$$1505(opt) {
  return Reflection$$$getCaseName(opt);
}
export function TextAlignment$$$generic(screen$$3, alignment) {
  return Reflection$$$getCaseName(alignment) + Screen$$$ToString$$2D2414B4(screen$$3);
}
export function TextAlignment$$$only(screen$$4, alignment$$1) {
  switch (screen$$4.tag) {
    case 2:
    case 1:
    case 4:
      {
        return Reflection$$$getCaseName(alignment$$1) + Screen$$$ToString$$2D2414B4(screen$$4) + "-only";
      }

    default:
      {
        const x$$2 = screen$$4;
        console.warn("Screen `%s` does not support `is-size-xxx-only`." + String(x$$2));
        return "";
      }
  }
}
export const TextWeight$002EOption = declare(function Fulma_TextWeight_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function TextWeight$002EOption$reflection() {
  return union("Fulma.TextWeight.Option", [], TextWeight$002EOption, () => ["has-text-weight-light", "has-text-weight-normal", "has-text-weight-semi-bold", "has-text-weight-bold"]);
}
export function TextWeight$$$ofOption(opt$$3) {
  return Reflection$$$getCaseName(opt$$3);
}
export const TextTransform$002EOption = declare(function Fulma_TextTransform_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function TextTransform$002EOption$reflection() {
  return union("Fulma.TextTransform.Option", [], TextTransform$002EOption, () => ["is-capitalized", "is-lowercase", "is-uppercase", "is-italic"]);
}
export function TextTransform$002EOption$$$toClass$$1505(opt$$4) {
  return Reflection$$$getCaseName(opt$$4);
}
export const Display$002EOption = declare(function Fulma_Display_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Display$002EOption$reflection() {
  return union("Fulma.Display.Option", [], Display$002EOption, () => ["block", "flex", "inline", "inline-block", "inline-flex"]);
}
export function Display$002EOption$$$toClass$$1505(opt$$5) {
  return Reflection$$$getCaseName(opt$$5);
}
export function Display$$$toDisplayClass(screen$$5, display) {
  const display$$1 = Reflection$$$getCaseName(display);
  const screen$$6 = Screen$$$ToString$$2D2414B4(screen$$5);
  return "is-" + display$$1 + screen$$6;
}
export function Display$$$toDisplayOnlyClass(screen$$7, display$$2) {
  switch (screen$$7.tag) {
    case 2:
    case 1:
    case 4:
      {
        const display$$3 = Reflection$$$getCaseName(display$$2);
        const screen$$8 = Screen$$$ToString$$2D2414B4(screen$$7);
        return "is-" + display$$3 + screen$$8 + "-only";
      }

    default:
      {
        const x$$3 = screen$$7;
        console.warn("Screen `%s` does not support display only." + String(x$$3));
        return "";
      }
  }
}
export function Modifier$$$ofBackground(level$$1) {
  switch (level$$1.tag) {
    case 19:
      {
        const color$$1 = level$$1.fields[0];
        return "has-background-" + color$$1;
      }

    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
      {
        return "has-background-" + Reflection$$$getCaseName(level$$1).slice(3, Reflection$$$getCaseName(level$$1).length);
      }

    default:
      {
        return "";
      }
  }
}
export function Modifier$$$ofText(level$$2) {
  switch (level$$2.tag) {
    case 19:
      {
        const color$$2 = level$$2.fields[0];
        return "has-text-" + color$$2;
      }

    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
      {
        return "has-text-" + Reflection$$$getCaseName(level$$2).slice(3, Reflection$$$getCaseName(level$$2).length);
      }

    default:
      {
        return "";
      }
  }
}
export function Modifier$$$ofInvisible(screen$$9) {
  return "is-invisible" + Screen$$$ToString$$2D2414B4(screen$$9);
}
export function Modifier$$$ofHidden(screen$$10) {
  return "is-hidden" + Screen$$$ToString$$2D2414B4(screen$$10);
}
export function Modifier$$$ofInvisibleOnly(screen$$11) {
  switch (screen$$11.tag) {
    case 2:
    case 1:
    case 4:
      {
        return "is-invisible" + Screen$$$ToString$$2D2414B4(screen$$11) + "-only";
      }

    default:
      {
        const x$$4 = screen$$11;
        console.warn("Screen `%s` does not support `is-invisible-xxx-only`." + String(x$$4));
        return "";
      }
  }
}
export function Modifier$$$ofHiddenOnly(screen$$12) {
  switch (screen$$12.tag) {
    case 2:
    case 1:
    case 4:
      {
        return "is-hidden" + Screen$$$ToString$$2D2414B4(screen$$12) + "-only";
      }

    default:
      {
        const x$$5 = screen$$12;
        console.warn("Screen `%s` does not support `is-hidden-xxx-only`." + String(x$$5));
        return "";
      }
  }
}
export const Modifier$002EIModifier = declare(function Fulma_Modifier_IModifier(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Modifier$002EIModifier$reflection() {
  return union("Fulma.Modifier.IModifier", [], Modifier$002EIModifier, () => [["BackgroundColor", [Color$002EIColor$reflection()]], ["TextColor", [Color$002EIColor$reflection()]], ["TextWeight", [TextWeight$002EOption$reflection()]], ["TextSize", [Screen$reflection(), TextSize$002EOption$reflection()]], ["TextSizeOnly", [Screen$reflection(), TextSize$002EOption$reflection()]], ["TextAlignment", [Screen$reflection(), TextAlignment$002EOption$reflection()]], ["TextAlignmentOnly", [Screen$reflection(), TextAlignment$002EOption$reflection()]], ["TextTransform", [TextTransform$002EOption$reflection()]], ["Display", [Screen$reflection(), Display$002EOption$reflection()]], ["DisplayOnly", [Screen$reflection(), Display$002EOption$reflection()]], "is-clearfix", "is-pulled-left", "is-pulled-right", "is-marginless", "is-paddingless", "is-overlay", "is-clipped", "is-radiusless", "is-shadowless", "is-unselectable", ["IsInvisible", [Screen$reflection(), bool]], ["IsHidden", [Screen$reflection(), bool]], ["IsInvisibleOnly", [Screen$reflection(), bool]], ["IsHiddenOnly", [Screen$reflection(), bool]], "IsSrOnly", "IsScreenReaderOnly"]);
}
export function Modifier$$$parseModifiers(options) {
  var state;

  const parseOptions = function parseOptions(result, option) {
    var x$$6, x$$7;

    switch (option.tag) {
      case 1:
        {
          const color$$4 = option.fields[0];
          return new List(Modifier$$$ofText(color$$4), result);
        }

      case 2:
        {
          const textWeight = option.fields[0];
          return new List(Reflection$$$getCaseName(textWeight), result);
        }

      case 3:
        {
          const size$$3 = option.fields[1];
          const screen$$13 = option.fields[0];
          return new List("is-size-" + TextSize$002EOption$$$ToString$$Z2E0B9453(size$$3) + Screen$$$ToString$$2D2414B4(screen$$13), result);
        }

      case 4:
        {
          const size$$5 = option.fields[1];
          const screen$$15 = option.fields[0];
          return new List(screen$$15.tag === 2 ? "is-size-" + TextSize$002EOption$$$ToString$$Z2E0B9453(size$$5) + Screen$$$ToString$$2D2414B4(screen$$15) + "-only" : screen$$15.tag === 1 ? "is-size-" + TextSize$002EOption$$$ToString$$Z2E0B9453(size$$5) + Screen$$$ToString$$2D2414B4(screen$$15) + "-only" : screen$$15.tag === 4 ? "is-size-" + TextSize$002EOption$$$ToString$$Z2E0B9453(size$$5) + Screen$$$ToString$$2D2414B4(screen$$15) + "-only" : (x$$6 = screen$$15, (console.warn("Screen `%s` does not support `is-size-xxx-only`." + String(x$$6)), "")), result);
        }

      case 5:
        {
          const size$$7 = option.fields[1];
          const screen$$17 = option.fields[0];
          return new List(Reflection$$$getCaseName(size$$7) + Screen$$$ToString$$2D2414B4(screen$$17), result);
        }

      case 6:
        {
          const size$$8 = option.fields[1];
          const screen$$19 = option.fields[0];
          return new List(screen$$19.tag === 2 ? Reflection$$$getCaseName(size$$8) + Screen$$$ToString$$2D2414B4(screen$$19) + "-only" : screen$$19.tag === 1 ? Reflection$$$getCaseName(size$$8) + Screen$$$ToString$$2D2414B4(screen$$19) + "-only" : screen$$19.tag === 4 ? Reflection$$$getCaseName(size$$8) + Screen$$$ToString$$2D2414B4(screen$$19) + "-only" : (x$$7 = screen$$19, (console.warn("Screen `%s` does not support `is-size-xxx-only`." + String(x$$7)), "")), result);
        }

      case 7:
        {
          const transform = option.fields[0];
          return new List(Reflection$$$getCaseName(transform), result);
        }

      case 8:
        {
          const screen$$21 = option.fields[0];
          const display$$4 = option.fields[1];
          return new List(Display$$$toDisplayClass(screen$$21, display$$4), result);
        }

      case 9:
        {
          const screen$$22 = option.fields[0];
          const display$$5 = option.fields[1];
          return new List(Display$$$toDisplayOnlyClass(screen$$22, display$$5), result);
        }

      case 20:
        {
          const screen$$23 = option.fields[0];
          const b = option.fields[1];

          if (b) {
            return new List(Modifier$$$ofInvisible(screen$$23), result);
          } else {
            return result;
          }
        }

      case 22:
        {
          const screen$$24 = option.fields[0];
          const b$$1 = option.fields[1];

          if (b$$1) {
            return new List(Modifier$$$ofInvisibleOnly(screen$$24), result);
          } else {
            return result;
          }
        }

      case 21:
        {
          const screen$$25 = option.fields[0];
          const b$$2 = option.fields[1];

          if (b$$2) {
            return new List(Modifier$$$ofHidden(screen$$25), result);
          } else {
            return result;
          }
        }

      case 23:
        {
          const screen$$26 = option.fields[0];
          const b$$3 = option.fields[1];

          if (b$$3) {
            return new List(Modifier$$$ofHiddenOnly(screen$$26), result);
          } else {
            return result;
          }
        }

      case 24:
      case 25:
        {
          return new List("is-sr-only", result);
        }

      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
        {
          return new List(Reflection$$$getCaseName(option), result);
        }

      default:
        {
          const color$$3 = option.fields[0];
          return new List(Modifier$$$ofBackground(color$$3), result);
        }
    }
  };

  return (state = new List(), function (list) {
    return fold(parseOptions, state, list);
  })(options);
}
export const Common$002EGenericOption = declare(function Fulma_Common_GenericOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Common$002EGenericOption$reflection() {
  return union("Fulma.Common.GenericOption", [], Common$002EGenericOption, () => [["CustomClass", [string]], ["Props", [list$$5(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list$$5(Modifier$002EIModifier$reflection())]]]);
}
export const Common$002EGenericOptions = declare(function Fulma_Common_GenericOptions(arg1, arg2) {
  this.Props = arg1;
  this.Classes = arg2;
}, Record);
export function Common$002EGenericOptions$reflection() {
  return record("Fulma.Common.GenericOptions", [], Common$002EGenericOptions, () => [["Props", list$$5(type("Fable.React.Props.IHTMLProp"))], ["Classes", list$$5(string)]]);
}
export function Common$002EGenericOptions$$$get_Empty() {
  return new Common$002EGenericOptions(new List(), new List());
}
export function Common$002EGenericOptions$$$Parse$$9AE2F7C(options$$1, parser, baseClass, baseProps) {
  var state$$1;
  const result$$1 = (state$$1 = Common$002EGenericOptions$$$get_Empty(), function (list$$1) {
    return fold(parser, state$$1, list$$1);
  })(options$$1);
  let result$$2;

  if (baseClass == null) {
    result$$2 = result$$1;
  } else {
    const baseClass$$1 = baseClass;
    result$$2 = Common$002EGenericOptions$$AddClass$$Z721C83C5(result$$1, baseClass$$1);
  }

  if (baseProps == null) {
    return result$$2;
  } else {
    const baseProps$$1 = baseProps;
    return Common$002EGenericOptions$$AddProps$$416C4D0B(result$$2, baseProps$$1);
  }
}
export function Common$002EGenericOptions$$AddProp$$7BFEDA81(this$, prop) {
  return new Common$002EGenericOptions(new List(prop, this$.Props), this$.Classes);
}
export function Common$002EGenericOptions$$AddProps$$416C4D0B(this$$$1, props) {
  return new Common$002EGenericOptions(append(props, this$$$1.Props), this$$$1.Classes);
}
export function Common$002EGenericOptions$$AddClass$$Z721C83C5(this$$$2, cl) {
  return new Common$002EGenericOptions(this$$$2.Props, new List(cl, this$$$2.Classes));
}
export function Common$002EGenericOptions$$RemoveClass$$Z721C83C5(this$$$3, cl$$1) {
  const classes = filter(function predicate(cls) {
    return cls !== cl$$1;
  }, this$$$3.Classes);
  return new Common$002EGenericOptions(this$$$3.Props, classes);
}
export function Common$002EGenericOptions$$AddCaseName$$1505(this$$$4, case$$$2) {
  return Common$002EGenericOptions$$AddClass$$Z721C83C5(this$$$4, Reflection$$$getCaseName(case$$$2));
}
export function Common$002EGenericOptions$$AddModifiers$$5BB435D5(this$$$5, modifiers) {
  return new Common$002EGenericOptions(this$$$5.Props, append(Modifier$$$parseModifiers(modifiers), this$$$5.Classes));
}
export function Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7(this$$$6, el, children) {
  const children$$1 = defaultArg(children, new List());
  const classes$$1 = new HTMLAttr(24, "ClassName", join(" ", ...this$$$6.Classes));
  return el(new List(classes$$1, this$$$6.Props), children$$1);
}
export function Common$002EGenericOptions$$ToReactElement$$Z46A53D36(this$$$7, el$$1) {
  const classes$$2 = new HTMLAttr(24, "ClassName", join(" ", ...this$$$7.Classes));
  return el$$1(new List(classes$$2, this$$$7.Props));
}
export function Common$$$parseOptions(result$$3, option$$1) {
  switch (option$$1.tag) {
    case 0:
      {
        const customClass = option$$1.fields[0];
        return Common$002EGenericOptions$$AddClass$$Z721C83C5(result$$3, customClass);
      }

    case 2:
      {
        const modifiers$$1 = option$$1.fields[0];
        return Common$002EGenericOptions$$AddModifiers$$5BB435D5(result$$3, modifiers$$1);
      }

    default:
      {
        const props$$1 = option$$1.fields[0];
        return Common$002EGenericOptions$$AddProps$$416C4D0B(result$$3, props$$1);
      }
  }
}
export function Common$002EHelpers$$$classes(std, options$$3, booleans) {
  const std$$1 = fold(function folder(complete, option$$2) {
    if (option$$2 == null) {
      return complete;
    } else {
      const name = option$$2;
      return complete + " " + name;
    }
  }, std, options$$3);
  return new HTMLAttr(24, "ClassName", fold(function folder$$1(complete$$1, tupledArg) {
    if (tupledArg[1]) {
      return complete$$1 + " " + tupledArg[0];
    } else {
      return complete$$1;
    }
  }, std$$1, booleans));
}
export function Text$$$p(options$$4, children$$2) {
  return Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7(Common$002EGenericOptions$$$Parse$$9AE2F7C(options$$4, Common$$$parseOptions), function (props$$2, children$$3) {
    return React.createElement("p", createObj(props$$2, 1), ...children$$3);
  }, children$$2);
}
export function Text$$$div(options$$5, children$$6) {
  return Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7(Common$002EGenericOptions$$$Parse$$9AE2F7C(options$$5, Common$$$parseOptions), function (props$$5, children$$7) {
    return React.createElement("div", createObj(props$$5, 1), ...children$$7);
  }, children$$6);
}
export function Text$$$span(options$$6, children$$10) {
  return Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7(Common$002EGenericOptions$$$Parse$$9AE2F7C(options$$6, Common$$$parseOptions), function (props$$8, children$$11) {
    return React.createElement("span", createObj(props$$8, 1), ...children$$11);
  }, children$$10);
}
