import { record_type, list_type, class_type, bool_type, string_type, union_type, getCaseTag, getCaseName } from "../../fable-library/Reflection.js";
import { Record, List, declare, Union } from "../../fable-library/Types.js";
import { createObj, int32ToString } from "../../fable-library/Util.js";
import { defaultArg, some } from "../../fable-library/Option.js";
import { filter, append, fold } from "../../fable-library/List.js";
import { join } from "../../fable-library/String.js";
import { HTMLAttr } from "../src/Fable.React.Props.js";
export function Reflection$$$getCaseName(case$) {
  return getCaseName(case$);
}
export function Reflection$$$getCaseTag(case$$$1) {
  return getCaseTag(case$$$1);
}
export const Screen = declare(function Fulma_Screen(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Screen$reflection() {
  return union_type("Fulma.Screen", [], Screen, () => ["All", "desktop", "tablet", "mobile", "widescreen", "touch", "fullhd"]);
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
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Color$002EIColor$reflection() {
  return union_type("Fulma.Color.IColor", [], Color$002EIColor, () => ["is-black", "is-dark", "is-light", "is-white", "is-primary", "is-info", "is-success", "is-warning", "is-danger", "is-link", "is-black-bis", "is-black-ter", "is-grey-darker", "is-grey-dark", "is-grey", "is-grey-light", "is-grey-lighter", "is-white-ter", "is-white-bis", ["IsCustomColor", [["Item", string_type]]], "NoColor"]);
}
export function Color$$$ofColor(level) {
  switch (level.tag) {
    case 19:
      {
        return "is-" + level.fields[0];
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
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Size$002EISize$reflection() {
  return union_type("Fulma.Size.ISize", [], Size$002EISize, () => ["is-small", "is-medium", "is-large"]);
}
export function Size$$$ofSize(size) {
  return Reflection$$$getCaseName(size);
}
export const TextSize$002EOption = declare(function Fulma_TextSize_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function TextSize$002EOption$reflection() {
  return union_type("Fulma.TextSize.Option", [], TextSize$002EOption, () => ["Is1", "Is2", "Is3", "Is4", "Is5", "Is6", "Is7"]);
}
export function TextSize$002EOption$$$ToString$$Z2E0B9453(x) {
  const value = Reflection$$$getCaseTag(x) + 1 | 0;
  return int32ToString(value);
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
        console.warn(some("Screen `%s` does not support `is-size-xxx-only`." + String(screen$$2)));
        return "";
      }
  }
}
export const TextAlignment$002EOption = declare(function Fulma_TextAlignment_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function TextAlignment$002EOption$reflection() {
  return union_type("Fulma.TextAlignment.Option", [], TextAlignment$002EOption, () => ["has-text-centered", "has-text-justified", "has-text-left", "has-text-right"]);
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
        console.warn(some("Screen `%s` does not support `is-size-xxx-only`." + String(screen$$4)));
        return "";
      }
  }
}
export const TextWeight$002EOption = declare(function Fulma_TextWeight_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function TextWeight$002EOption$reflection() {
  return union_type("Fulma.TextWeight.Option", [], TextWeight$002EOption, () => ["has-text-weight-light", "has-text-weight-normal", "has-text-weight-semi-bold", "has-text-weight-bold"]);
}
export function TextWeight$$$ofOption(opt$$3) {
  return Reflection$$$getCaseName(opt$$3);
}
export const TextTransform$002EOption = declare(function Fulma_TextTransform_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function TextTransform$002EOption$reflection() {
  return union_type("Fulma.TextTransform.Option", [], TextTransform$002EOption, () => ["is-capitalized", "is-lowercase", "is-uppercase", "is-italic"]);
}
export function TextTransform$002EOption$$$toClass$$1505(opt$$4) {
  return Reflection$$$getCaseName(opt$$4);
}
export const Display$002EOption = declare(function Fulma_Display_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Display$002EOption$reflection() {
  return union_type("Fulma.Display.Option", [], Display$002EOption, () => ["block", "flex", "inline", "inline-block", "inline-flex"]);
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
        console.warn(some("Screen `%s` does not support display only." + String(screen$$7)));
        return "";
      }
  }
}
export function Modifier$$$ofBackground(level$$1) {
  switch (level$$1.tag) {
    case 19:
      {
        return "has-background-" + level$$1.fields[0];
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
        return "has-text-" + level$$2.fields[0];
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
        console.warn(some("Screen `%s` does not support `is-invisible-xxx-only`." + String(screen$$11)));
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
        console.warn(some("Screen `%s` does not support `is-hidden-xxx-only`." + String(screen$$12)));
        return "";
      }
  }
}
export const Modifier$002EIModifier = declare(function Fulma_Modifier_IModifier(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Modifier$002EIModifier$reflection() {
  return union_type("Fulma.Modifier.IModifier", [], Modifier$002EIModifier, () => [["BackgroundColor", [["Item", Color$002EIColor$reflection()]]], ["TextColor", [["Item", Color$002EIColor$reflection()]]], ["TextWeight", [["Item", TextWeight$002EOption$reflection()]]], ["TextSize", [["Item1", Screen$reflection()], ["Item2", TextSize$002EOption$reflection()]]], ["TextSizeOnly", [["Item1", Screen$reflection()], ["Item2", TextSize$002EOption$reflection()]]], ["TextAlignment", [["Item1", Screen$reflection()], ["Item2", TextAlignment$002EOption$reflection()]]], ["TextAlignmentOnly", [["Item1", Screen$reflection()], ["Item2", TextAlignment$002EOption$reflection()]]], ["TextTransform", [["Item", TextTransform$002EOption$reflection()]]], ["Display", [["Item1", Screen$reflection()], ["Item2", Display$002EOption$reflection()]]], ["DisplayOnly", [["Item1", Screen$reflection()], ["Item2", Display$002EOption$reflection()]]], "is-clearfix", "is-pulled-left", "is-pulled-right", "is-marginless", "is-paddingless", "is-overlay", "is-clipped", "is-radiusless", "is-shadowless", "is-unselectable", ["IsInvisible", [["Item1", Screen$reflection()], ["Item2", bool_type]]], ["IsHidden", [["Item1", Screen$reflection()], ["Item2", bool_type]]], ["IsInvisibleOnly", [["Item1", Screen$reflection()], ["Item2", bool_type]]], ["IsHiddenOnly", [["Item1", Screen$reflection()], ["Item2", bool_type]]], "IsSrOnly", "IsScreenReaderOnly"]);
}
export function Modifier$$$parseModifiers(options) {
  const state = new List();
  return fold(function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          return new List(Modifier$$$ofText(option.fields[0]), result);
        }

      case 2:
        {
          return new List(Reflection$$$getCaseName(option.fields[0]), result);
        }

      case 3:
        {
          return new List("is-size-" + TextSize$002EOption$$$ToString$$Z2E0B9453(option.fields[1]) + Screen$$$ToString$$2D2414B4(option.fields[0]), result);
        }

      case 4:
        {
          return new List(option.fields[0].tag === 2 ? "is-size-" + TextSize$002EOption$$$ToString$$Z2E0B9453(option.fields[1]) + Screen$$$ToString$$2D2414B4(option.fields[0]) + "-only" : option.fields[0].tag === 1 ? "is-size-" + TextSize$002EOption$$$ToString$$Z2E0B9453(option.fields[1]) + Screen$$$ToString$$2D2414B4(option.fields[0]) + "-only" : option.fields[0].tag === 4 ? "is-size-" + TextSize$002EOption$$$ToString$$Z2E0B9453(option.fields[1]) + Screen$$$ToString$$2D2414B4(option.fields[0]) + "-only" : (console.warn(some("Screen `%s` does not support `is-size-xxx-only`." + String(option.fields[0]))), ""), result);
        }

      case 5:
        {
          return new List(Reflection$$$getCaseName(option.fields[1]) + Screen$$$ToString$$2D2414B4(option.fields[0]), result);
        }

      case 6:
        {
          return new List(option.fields[0].tag === 2 ? Reflection$$$getCaseName(option.fields[1]) + Screen$$$ToString$$2D2414B4(option.fields[0]) + "-only" : option.fields[0].tag === 1 ? Reflection$$$getCaseName(option.fields[1]) + Screen$$$ToString$$2D2414B4(option.fields[0]) + "-only" : option.fields[0].tag === 4 ? Reflection$$$getCaseName(option.fields[1]) + Screen$$$ToString$$2D2414B4(option.fields[0]) + "-only" : (console.warn(some("Screen `%s` does not support `is-size-xxx-only`." + String(option.fields[0]))), ""), result);
        }

      case 7:
        {
          return new List(Reflection$$$getCaseName(option.fields[0]), result);
        }

      case 8:
        {
          return new List(Display$$$toDisplayClass(option.fields[0], option.fields[1]), result);
        }

      case 9:
        {
          return new List(Display$$$toDisplayOnlyClass(option.fields[0], option.fields[1]), result);
        }

      case 20:
        {
          if (option.fields[1]) {
            return new List(Modifier$$$ofInvisible(option.fields[0]), result);
          } else {
            return result;
          }
        }

      case 22:
        {
          if (option.fields[1]) {
            return new List(Modifier$$$ofInvisibleOnly(option.fields[0]), result);
          } else {
            return result;
          }
        }

      case 21:
        {
          if (option.fields[1]) {
            return new List(Modifier$$$ofHidden(option.fields[0]), result);
          } else {
            return result;
          }
        }

      case 23:
        {
          if (option.fields[1]) {
            return new List(Modifier$$$ofHiddenOnly(option.fields[0]), result);
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
          return new List(Modifier$$$ofBackground(option.fields[0]), result);
        }
    }
  }, state, options);
}
export const Common$002EGenericOption = declare(function Fulma_Common_GenericOption(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Common$002EGenericOption$reflection() {
  return union_type("Fulma.Common.GenericOption", [], Common$002EGenericOption, () => [["CustomClass", [["Item", string_type]]], ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["Modifiers", [["Item", list_type(Modifier$002EIModifier$reflection())]]]]);
}
export const Common$002EGenericOptions = declare(function Fulma_Common_GenericOptions(Props, Classes) {
  this.Props = Props;
  this.Classes = Classes;
}, Record);
export function Common$002EGenericOptions$reflection() {
  return record_type("Fulma.Common.GenericOptions", [], Common$002EGenericOptions, () => [["Props", list_type(class_type("Fable.React.Props.IHTMLProp"))], ["Classes", list_type(string_type)]]);
}
export function Common$002EGenericOptions$$$get_Empty() {
  return new Common$002EGenericOptions(new List(), new List());
}
export function Common$002EGenericOptions$$$Parse$$9AE2F7C(options$$1, parser, baseClass, baseProps) {
  let result$$1;
  const state$$1 = Common$002EGenericOptions$$$get_Empty();
  result$$1 = fold(parser, state$$1, options$$1);
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
  const Classes = new List(cl, this$$$2.Classes);
  return new Common$002EGenericOptions(this$$$2.Props, Classes);
}
export function Common$002EGenericOptions$$RemoveClass$$Z721C83C5(this$$$3, cl$$1) {
  let classes;
  classes = filter(function predicate(cls) {
    return cls !== cl$$1;
  }, this$$$3.Classes);
  return new Common$002EGenericOptions(this$$$3.Props, classes);
}
export function Common$002EGenericOptions$$AddCaseName$$1505(this$$$4, case$$$2) {
  const arg00 = Reflection$$$getCaseName(case$$$2);
  return Common$002EGenericOptions$$AddClass$$Z721C83C5(this$$$4, arg00);
}
export function Common$002EGenericOptions$$AddModifiers$$5BB435D5(this$$$5, modifiers) {
  const Classes$$1 = append((Modifier$$$parseModifiers(modifiers)), this$$$5.Classes);
  return new Common$002EGenericOptions(this$$$5.Props, Classes$$1);
}
export function Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7(this$$$6, el, children) {
  var arg0;
  const children$$1 = defaultArg(children, new List());
  const classes$$1 = (arg0 = join(" ", this$$$6.Classes), (new HTMLAttr(24, "ClassName", arg0)));
  return el(new List(classes$$1, this$$$6.Props), children$$1);
}
export function Common$002EGenericOptions$$ToReactElement$$Z46A53D36(this$$$7, el$$1) {
  var arg0$$1;
  const classes$$2 = (arg0$$1 = join(" ", this$$$7.Classes), (new HTMLAttr(24, "ClassName", arg0$$1)));
  return el$$1(new List(classes$$2, this$$$7.Props));
}
export function Common$$$parseOptions(result$$3, option$$1) {
  switch (option$$1.tag) {
    case 0:
      {
        return Common$002EGenericOptions$$AddClass$$Z721C83C5(result$$3, option$$1.fields[0]);
      }

    case 2:
      {
        return Common$002EGenericOptions$$AddModifiers$$5BB435D5(result$$3, option$$1.fields[0]);
      }

    default:
      {
        return Common$002EGenericOptions$$AddProps$$416C4D0B(result$$3, option$$1.fields[0]);
      }
  }
}
export function Common$002EHelpers$$$classes(std, options$$3, booleans) {
  var arg0$$2;
  let std$$1;
  std$$1 = fold(function folder(complete, option$$2) {
    if (option$$2 == null) {
      return complete;
    } else {
      const name = option$$2;
      return complete + " " + name;
    }
  }, std, options$$3);
  return arg0$$2 = (fold(function folder$$1(complete$$1, tupledArg) {
    if (tupledArg[1]) {
      return complete$$1 + " " + tupledArg[0];
    } else {
      return complete$$1;
    }
  }, std$$1, booleans)), (new HTMLAttr(24, "ClassName", arg0$$2));
}
export function Text$$$p(options$$4, children$$2) {
  return Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7(Common$002EGenericOptions$$$Parse$$9AE2F7C(options$$4, Common$$$parseOptions), function (props$$2, children$$3) {
    const props$$3 = props$$2;
    const children$$4 = children$$3;
    return React.createElement("p", createObj(props$$3, 1), ...children$$4);
  }, children$$2);
}
export function Text$$$div(options$$5, children$$6) {
  return Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7(Common$002EGenericOptions$$$Parse$$9AE2F7C(options$$5, Common$$$parseOptions), function (props$$5, children$$7) {
    const props$$6 = props$$5;
    const children$$8 = children$$7;
    return React.createElement("div", createObj(props$$6, 1), ...children$$8);
  }, children$$6);
}
export function Text$$$span(options$$6, children$$10) {
  return Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7(Common$002EGenericOptions$$$Parse$$9AE2F7C(options$$6, Common$$$parseOptions), function (props$$8, children$$11) {
    const props$$9 = props$$8;
    const children$$12 = children$$11;
    return React.createElement("span", createObj(props$$9, 1), ...children$$12);
  }, children$$10);
}
