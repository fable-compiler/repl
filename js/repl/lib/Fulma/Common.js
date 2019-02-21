import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { list as list$$4, type, record, option, bool, string, union } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { ofArray, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { Props$002EHTMLAttr as Props$0024002EHTMLAttr } from "../Fable.React/Fable.Helpers.React.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Screen = declare(function Fulma_Screen(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Screen$reflection() {
  return union("Fulma.Screen", [], Screen, () => ["All", "Desktop", "Tablet", "Mobile", "WideScreen", "Touch", "FullHD"]);
}
export function Screen$$$get_toString() {
  return function (_arg1) {
    return _arg1.tag === 1 ? "-desktop" : _arg1.tag === 2 ? "-tablet" : _arg1.tag === 3 ? "-mobile" : _arg1.tag === 4 ? "-widescreen" : _arg1.tag === 5 ? "-touch" : _arg1.tag === 6 ? "-fullhd" : "";
  };
}
export const Color$002EIColor = declare(function Fulma_Color_IColor(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Color$002EIColor$reflection() {
  return union("Fulma.Color.IColor", [], Color$002EIColor, () => ["IsBlack", "IsDark", "IsLight", "IsWhite", "IsPrimary", "IsInfo", "IsSuccess", "IsWarning", "IsDanger", "IsLink", "IsBlackBis", "IsBlackTer", "IsGreyDarker", "IsGreyDark", "IsGrey", "IsGreyLight", "IsGreyLighter", "IsWhiteTer", "IsWhiteBis", ["IsCustomColor", [string]], "NoColor"]);
}
export function Color$$$ofColor(level) {
  switch (level.tag) {
    case 1:
      {
        return "is-dark";
      }

    case 2:
      {
        return "is-light";
      }

    case 3:
      {
        return "is-white";
      }

    case 4:
      {
        return "is-primary";
      }

    case 5:
      {
        return "is-info";
      }

    case 6:
      {
        return "is-success";
      }

    case 7:
      {
        return "is-warning";
      }

    case 8:
      {
        return "is-danger";
      }

    case 9:
      {
        return "is-link";
      }

    case 10:
      {
        return "is-black-bis";
      }

    case 11:
      {
        return "is-black-ter";
      }

    case 12:
      {
        return "is-grey-darker";
      }

    case 13:
      {
        return "is-grey-dark";
      }

    case 14:
      {
        return "is-grey";
      }

    case 15:
      {
        return "is-grey-light";
      }

    case 16:
      {
        return "is-grey-lighter";
      }

    case 17:
      {
        return "is-white-ter";
      }

    case 18:
      {
        return "is-white-bis";
      }

    case 19:
      {
        const color = level.fields[0];
        return "is-" + color;
      }

    case 20:
      {
        return "";
      }

    default:
      {
        return "is-black";
      }
  }
}
export const Size$002EISize = declare(function Fulma_Size_ISize(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Size$002EISize$reflection() {
  return union("Fulma.Size.ISize", [], Size$002EISize, () => ["IsSmall", "IsMedium", "IsLarge"]);
}
export function Size$$$ofSize(size) {
  switch (size.tag) {
    case 1:
      {
        return "is-medium";
      }

    case 2:
      {
        return "is-large";
      }

    default:
      {
        return "is-small";
      }
  }
}
export const TextSize$002EOption = declare(function Fulma_TextSize_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function TextSize$002EOption$reflection() {
  return union("Fulma.TextSize.Option", [], TextSize$002EOption, () => ["Is1", "Is2", "Is3", "Is4", "Is5", "Is6", "Is7"]);
}
export function TextSize$002EOption$$$get_toString() {
  return function (_arg1$$1) {
    return _arg1$$1.tag === 1 ? "2" : _arg1$$1.tag === 2 ? "3" : _arg1$$1.tag === 3 ? "4" : _arg1$$1.tag === 4 ? "5" : _arg1$$1.tag === 5 ? "6" : _arg1$$1.tag === 6 ? "7" : "1";
  };
}
export function TextSize$$$generic(screen, size$$1) {
  return "is-size-" + TextSize$002EOption$$$get_toString()(size$$1) + Screen$$$get_toString()(screen);
}
export function TextSize$$$only(screen$$1, size$$2) {
  switch (screen$$1.tag) {
    case 2:
    case 1:
    case 4:
      {
        return "is-size-" + TextSize$002EOption$$$get_toString()(size$$2) + Screen$$$get_toString()(screen$$1) + "-only";
      }

    default:
      {
        const x = screen$$1;
        console.warn("Screen `%s` does not support `is-size-xxx-only`." + String(x));
        return "";
      }
  }
}
export const TextAlignment$002EOption = declare(function Fulma_TextAlignment_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function TextAlignment$002EOption$reflection() {
  return union("Fulma.TextAlignment.Option", [], TextAlignment$002EOption, () => ["Centered", "Justified", "Left", "Right"]);
}
export function TextAlignment$002EOption$$$get_toString() {
  return function (_arg1$$2) {
    return _arg1$$2.tag === 1 ? "has-text-justified" : _arg1$$2.tag === 2 ? "has-text-left" : _arg1$$2.tag === 3 ? "has-text-right" : "has-text-centered";
  };
}
export function TextAlignment$$$generic(screen$$2, alignment) {
  return TextAlignment$002EOption$$$get_toString()(alignment) + Screen$$$get_toString()(screen$$2);
}
export function TextAlignment$$$only(screen$$3, alignment$$1) {
  switch (screen$$3.tag) {
    case 2:
    case 1:
    case 4:
      {
        return TextAlignment$002EOption$$$get_toString()(alignment$$1) + Screen$$$get_toString()(screen$$3) + "-only";
      }

    default:
      {
        const x$$1 = screen$$3;
        console.warn("Screen `%s` does not support `is-size-xxx-only`." + String(x$$1));
        return "";
      }
  }
}
export const TextWeight$002EOption = declare(function Fulma_TextWeight_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function TextWeight$002EOption$reflection() {
  return union("Fulma.TextWeight.Option", [], TextWeight$002EOption, () => ["Light", "Normal", "SemiBold", "Bold"]);
}
export function TextWeight$$$ofOption(_arg1$$3) {
  switch (_arg1$$3.tag) {
    case 1:
      {
        return "has-text-weight-normal";
      }

    case 2:
      {
        return "has-text-weight-semibold";
      }

    case 3:
      {
        return "has-text-weight-bold";
      }

    default:
      {
        return "has-text-weight-light";
      }
  }
}
export const TextTransform$002EOption = declare(function Fulma_TextTransform_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function TextTransform$002EOption$reflection() {
  return union("Fulma.TextTransform.Option", [], TextTransform$002EOption, () => ["Capitalized", "LowerCase", "UpperCase", "Italic"]);
}
export function TextTransform$002EOption$$$get_toClass() {
  return function (_arg1$$4) {
    return _arg1$$4.tag === 1 ? "is-lowercase" : _arg1$$4.tag === 2 ? "is-uppercase" : _arg1$$4.tag === 3 ? "is-italic" : "is-capitalized";
  };
}
export const Display$002EOption = declare(function Fulma_Display_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Display$002EOption$reflection() {
  return union("Fulma.Display.Option", [], Display$002EOption, () => ["Block", "Flex", "Inline", "InlineBlock", "InlineFlex"]);
}
export function Display$002EOption$$$get_toClass() {
  return function (_arg1$$5) {
    return _arg1$$5.tag === 1 ? "flex" : _arg1$$5.tag === 2 ? "inline" : _arg1$$5.tag === 3 ? "inline-block" : _arg1$$5.tag === 4 ? "inline-flex" : "block";
  };
}
export function Display$$$toDisplayClass(screen$$4, display) {
  const display$$1 = display.tag === 1 ? "flex" : display.tag === 2 ? "inline" : display.tag === 3 ? "inline-block" : display.tag === 4 ? "inline-flex" : "block";
  const screen$$5 = Screen$$$get_toString()(screen$$4);
  return "is-" + display$$1 + screen$$5;
}
export function Display$$$toDisplayOnlyClass(screen$$6, display$$2) {
  switch (screen$$6.tag) {
    case 2:
    case 1:
    case 4:
      {
        const display$$3 = display$$2.tag === 1 ? "flex" : display$$2.tag === 2 ? "inline" : display$$2.tag === 3 ? "inline-block" : display$$2.tag === 4 ? "inline-flex" : "block";
        const screen$$7 = Screen$$$get_toString()(screen$$6);
        return "is-" + display$$3 + screen$$7 + "-only";
      }

    default:
      {
        const x$$2 = screen$$6;
        console.warn("Screen `%s` does not support display only." + String(x$$2));
        return "";
      }
  }
}
export function Modifier$$$ofBackground(level$$1) {
  switch (level$$1.tag) {
    case 1:
      {
        return "has-background-dark";
      }

    case 2:
      {
        return "has-background-light";
      }

    case 3:
      {
        return "has-background-white";
      }

    case 4:
      {
        return "has-background-primary";
      }

    case 5:
      {
        return "has-background-info";
      }

    case 6:
      {
        return "has-background-success";
      }

    case 7:
      {
        return "has-background-warning";
      }

    case 8:
      {
        return "has-background-danger";
      }

    case 9:
      {
        return "has-background-link";
      }

    case 10:
      {
        return "has-background-black-bis";
      }

    case 11:
      {
        return "has-background-black-ter";
      }

    case 12:
      {
        return "has-background-grey-darker";
      }

    case 13:
      {
        return "has-background-grey-dark";
      }

    case 14:
      {
        return "has-background-grey";
      }

    case 15:
      {
        return "has-background-grey-light";
      }

    case 16:
      {
        return "has-background-grey-lighter";
      }

    case 17:
      {
        return "has-background-white-ter";
      }

    case 18:
      {
        return "has-background-white-bis";
      }

    case 19:
      {
        const color$$1 = level$$1.fields[0];
        return "has-background-" + color$$1;
      }

    case 20:
      {
        return "";
      }

    default:
      {
        return "has-background-black";
      }
  }
}
export function Modifier$$$ofText(level$$2) {
  switch (level$$2.tag) {
    case 1:
      {
        return "has-text-dark";
      }

    case 2:
      {
        return "has-text-light";
      }

    case 3:
      {
        return "has-text-white";
      }

    case 4:
      {
        return "has-text-primary";
      }

    case 5:
      {
        return "has-text-info";
      }

    case 6:
      {
        return "has-text-success";
      }

    case 7:
      {
        return "has-text-warning";
      }

    case 8:
      {
        return "has-text-danger";
      }

    case 9:
      {
        return "has-text-link";
      }

    case 10:
      {
        return "has-text-black-bis";
      }

    case 11:
      {
        return "has-text-black-ter";
      }

    case 12:
      {
        return "has-text-grey-darker";
      }

    case 13:
      {
        return "has-text-grey-dark";
      }

    case 14:
      {
        return "has-text-grey";
      }

    case 15:
      {
        return "has-text-grey-light";
      }

    case 16:
      {
        return "has-text-grey-lighter";
      }

    case 17:
      {
        return "has-text-white-ter";
      }

    case 18:
      {
        return "has-text-white-bis";
      }

    case 19:
      {
        const color$$2 = level$$2.fields[0];
        return "has-text-" + color$$2;
      }

    case 20:
      {
        return "";
      }

    default:
      {
        return "has-text-black";
      }
  }
}
export function Modifier$$$ofInvisible(screen$$8) {
  return "is-invisible" + Screen$$$get_toString()(screen$$8);
}
export function Modifier$$$ofHidden(screen$$9) {
  return "is-hidden" + Screen$$$get_toString()(screen$$9);
}
export function Modifier$$$ofInvisibleOnly(screen$$10) {
  switch (screen$$10.tag) {
    case 2:
    case 1:
    case 4:
      {
        return "is-invisible" + Screen$$$get_toString()(screen$$10) + "-only";
      }

    default:
      {
        const x$$3 = screen$$10;
        console.warn("Screen `%s` does not support `is-invisible-xxx-only`." + String(x$$3));
        return "";
      }
  }
}
export function Modifier$$$ofHiddenOnly(screen$$11) {
  switch (screen$$11.tag) {
    case 2:
    case 1:
    case 4:
      {
        return "is-hidden" + Screen$$$get_toString()(screen$$11) + "-only";
      }

    default:
      {
        const x$$4 = screen$$11;
        console.warn("Screen `%s` does not support `is-hidden-xxx-only`." + String(x$$4));
        return "";
      }
  }
}
export const Modifier$002EIModifier = declare(function Fulma_Modifier_IModifier(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Modifier$002EIModifier$reflection() {
  return union("Fulma.Modifier.IModifier", [], Modifier$002EIModifier, () => [["BackgroundColor", [Color$002EIColor$reflection()]], ["TextColor", [Color$002EIColor$reflection()]], ["TextWeight", [TextWeight$002EOption$reflection()]], ["TextSize", [Screen$reflection(), TextSize$002EOption$reflection()]], ["TextSizeOnly", [Screen$reflection(), TextSize$002EOption$reflection()]], ["TextAlignment", [Screen$reflection(), TextAlignment$002EOption$reflection()]], ["TextAlignmentOnly", [Screen$reflection(), TextAlignment$002EOption$reflection()]], ["TextTransform", [TextTransform$002EOption$reflection()]], ["Display", [Screen$reflection(), Display$002EOption$reflection()]], ["DisplayOnly", [Screen$reflection(), Display$002EOption$reflection()]], "IsClearfix", "IsPulledLeft", "IsPulledRight", "IsMarginless", "IsPaddingless", "IsOverlay", "IsClipped", "IsRadiusless", "IsShadowless", "IsUnselectable", ["IsInvisible", [Screen$reflection(), bool]], ["IsHidden", [Screen$reflection(), bool]], ["IsInvisibleOnly", [Screen$reflection(), bool]], ["IsHiddenOnly", [Screen$reflection(), bool]]]);
}
export const Modifier$002EOptions = declare(function Fulma_Modifier_Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24) {
  this.BackgroundColor = arg1;
  this.TextColor = arg2;
  this.TextWeight = arg3;
  this.TextSize = arg4;
  this.TextSizeOnly = arg5;
  this.TextAlignment = arg6;
  this.TextAlignmentOnly = arg7;
  this.TextTransform = arg8;
  this.IsClearfix = arg9;
  this.IsPulledLeft = arg10;
  this.IsPulledRight = arg11;
  this.IsMarginless = arg12;
  this.IsPaddingless = arg13;
  this.IsOverlay = arg14;
  this.IsClipped = arg15;
  this.IsRadiusless = arg16;
  this.IsShadowless = arg17;
  this.IsUnselectable = arg18;
  this.IsInvisible = arg19;
  this.IsHidden = arg20;
  this.IsInvisibleOnly = arg21;
  this.IsHiddenOnly = arg22;
  this.Display = arg23;
  this.DisplayOnly = arg24;
}, Record);
export function Modifier$002EOptions$reflection() {
  return record("Fulma.Modifier.Options", [], Modifier$002EOptions, () => [["BackgroundColor", option(string)], ["TextColor", option(string)], ["TextWeight", option(string)], ["TextSize", string], ["TextSizeOnly", string], ["TextAlignment", string], ["TextAlignmentOnly", string], ["TextTransform", string], ["IsClearfix", option(string)], ["IsPulledLeft", option(string)], ["IsPulledRight", option(string)], ["IsMarginless", option(string)], ["IsPaddingless", option(string)], ["IsOverlay", option(string)], ["IsClipped", option(string)], ["IsRadiusless", option(string)], ["IsShadowless", option(string)], ["IsUnselectable", option(string)], ["IsInvisible", string], ["IsHidden", string], ["IsInvisibleOnly", string], ["IsHiddenOnly", string], ["Display", string], ["DisplayOnly", string]]);
}
export function Modifier$002EOptions$$$get_Empty() {
  return new Modifier$002EOptions(null, null, null, "", "", "", "", "", null, null, null, null, null, null, null, null, null, null, "", "", "", "", "", "");
}
export function Modifier$$$parseModifiers(options) {
  const parseOption = function parseOption(result, opt) {
    var x$$5, x$$6;

    if (opt.tag === 1) {
      return new Modifier$002EOptions(result.BackgroundColor, Modifier$$$ofText(opt.fields[0]), result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 2) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, TextWeight$$$ofOption(opt.fields[0]), result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 3) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize + " " + ("is-size-" + TextSize$002EOption$$$get_toString()(opt.fields[1]) + Screen$$$get_toString()(opt.fields[0])), result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 4) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize + " " + (opt.fields[0].tag === 2 ? "is-size-" + TextSize$002EOption$$$get_toString()(opt.fields[1]) + Screen$$$get_toString()(opt.fields[0]) + "-only" : opt.fields[0].tag === 1 ? "is-size-" + TextSize$002EOption$$$get_toString()(opt.fields[1]) + Screen$$$get_toString()(opt.fields[0]) + "-only" : opt.fields[0].tag === 4 ? "is-size-" + TextSize$002EOption$$$get_toString()(opt.fields[1]) + Screen$$$get_toString()(opt.fields[0]) + "-only" : (x$$5 = opt.fields[0], (console.warn("Screen `%s` does not support `is-size-xxx-only`." + String(x$$5)), ""))), result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 5) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment + " " + (TextAlignment$002EOption$$$get_toString()(opt.fields[1]) + Screen$$$get_toString()(opt.fields[0])), result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 6) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment + " " + (opt.fields[0].tag === 2 ? TextAlignment$002EOption$$$get_toString()(opt.fields[1]) + Screen$$$get_toString()(opt.fields[0]) + "-only" : opt.fields[0].tag === 1 ? TextAlignment$002EOption$$$get_toString()(opt.fields[1]) + Screen$$$get_toString()(opt.fields[0]) + "-only" : opt.fields[0].tag === 4 ? TextAlignment$002EOption$$$get_toString()(opt.fields[1]) + Screen$$$get_toString()(opt.fields[0]) + "-only" : (x$$6 = opt.fields[0], (console.warn("Screen `%s` does not support `is-size-xxx-only`." + String(x$$6)), ""))), result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 7) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform + " " + (opt.fields[0].tag === 1 ? "is-lowercase" : opt.fields[0].tag === 2 ? "is-uppercase" : opt.fields[0].tag === 3 ? "is-italic" : "is-capitalized"), result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 8) {
      const cls = Display$$$toDisplayClass(opt.fields[0], opt.fields[1]);
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display + " " + cls, result.DisplayOnly);
    } else if (opt.tag === 9) {
      const cls$$1 = Display$$$toDisplayOnlyClass(opt.fields[0], opt.fields[1]);
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly + " " + cls$$1);
    } else if (opt.tag === 10) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, "is-clearfix", result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 11) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, "is-pulled-left", result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 12) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, "is-pulled-right", result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 13) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, "is-marginless", result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 14) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, "is-paddingless", result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 15) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, "is-overlay", result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 16) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, "is-clipped", result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 17) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, "is-radiusless", result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 18) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, "is-shadowless", result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 19) {
      return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, "is-unselectable", result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    } else if (opt.tag === 20) {
      if (opt.fields[1]) {
        return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible + " " + Modifier$$$ofInvisible(opt.fields[0]), result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
      } else {
        return result;
      }
    } else if (opt.tag === 21) {
      if (opt.fields[1]) {
        return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden + " " + Modifier$$$ofHidden(opt.fields[0]), result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
      } else {
        return result;
      }
    } else if (opt.tag === 22) {
      if (opt.fields[1]) {
        return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly + " " + Modifier$$$ofInvisible(opt.fields[0]), result.IsHiddenOnly, result.Display, result.DisplayOnly);
      } else {
        return result;
      }
    } else if (opt.tag === 23) {
      if (opt.fields[1]) {
        return new Modifier$002EOptions(result.BackgroundColor, result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly + " " + Modifier$$$ofHidden(opt.fields[0]), result.Display, result.DisplayOnly);
      } else {
        return result;
      }
    } else {
      return new Modifier$002EOptions(Modifier$$$ofBackground(opt.fields[0]), result.TextColor, result.TextWeight, result.TextSize, result.TextSizeOnly, result.TextAlignment, result.TextAlignmentOnly, result.TextTransform, result.IsClearfix, result.IsPulledLeft, result.IsPulledRight, result.IsMarginless, result.IsPaddingless, result.IsOverlay, result.IsClipped, result.IsRadiusless, result.IsShadowless, result.IsUnselectable, result.IsInvisible, result.IsHidden, result.IsInvisibleOnly, result.IsHiddenOnly, result.Display, result.DisplayOnly);
    }
  };

  const opts = fold(parseOption, Modifier$002EOptions$$$get_Empty(), options);
  return ofArray([opts.BackgroundColor, opts.TextColor, opts.TextWeight, opts.TextSize, opts.TextSizeOnly, opts.TextAlignment, opts.TextAlignmentOnly, opts.TextTransform, opts.IsClearfix, opts.IsPulledLeft, opts.IsPulledRight, opts.IsMarginless, opts.IsPaddingless, opts.IsOverlay, opts.IsClipped, opts.IsRadiusless, opts.IsShadowless, opts.IsUnselectable, opts.IsInvisible, opts.IsHidden, opts.IsInvisibleOnly, opts.IsHiddenOnly, opts.Display, opts.DisplayOnly]);
}
export const Common$002EGenericOption = declare(function Fulma_Common_GenericOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Common$002EGenericOption$reflection() {
  return union("Fulma.Common.GenericOption", [], Common$002EGenericOption, () => [["CustomClass", [string]], ["Props", [list$$4(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$4(Modifier$002EIModifier$reflection())]]]);
}
export const Common$002EGenericOptions = declare(function Fulma_Common_GenericOptions(arg1, arg2, arg3) {
  this.CustomClass = arg1;
  this.Props = arg2;
  this.Modifiers = arg3;
}, Record);
export function Common$002EGenericOptions$reflection() {
  return record("Fulma.Common.GenericOptions", [], Common$002EGenericOptions, () => [["CustomClass", option(string)], ["Props", list$$4(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$4(option(string))]]);
}
export function Common$002EGenericOptions$$$get_Empty() {
  return new Common$002EGenericOptions(null, new List(), new List());
}
export function Common$$$genericParse(options$$1) {
  const parseOptions = function parseOptions(result$$1, opt$$1) {
    switch (opt$$1.tag) {
      case 0:
        {
          const customClass = opt$$1.fields[0];
          return new Common$002EGenericOptions(customClass, result$$1.Props, result$$1.Modifiers);
        }

      case 2:
        {
          const modifiers = opt$$1.fields[0];
          return new Common$002EGenericOptions(result$$1.CustomClass, result$$1.Props, Modifier$$$parseModifiers(modifiers));
        }

      default:
        {
          const props = opt$$1.fields[0];
          return new Common$002EGenericOptions(result$$1.CustomClass, props, result$$1.Modifiers);
        }
    }
  };

  return fold(parseOptions, Common$002EGenericOptions$$$get_Empty(), options$$1);
}
export function Common$002EHelpers$$$classes(std, options$$3, booleans) {
  const std$$1 = fold(function folder(complete, opt$$2) {
    if (opt$$2 == null) {
      return complete;
    } else {
      const name = opt$$2;
      return complete + " " + name;
    }
  }, std, options$$3);
  return new Props$0024002EHTMLAttr(22, "ClassName", fold(function folder$$1(complete$$1, tupledArg) {
    if (tupledArg[1]) {
      return complete$$1 + " " + tupledArg[0];
    } else {
      return complete$$1;
    }
  }, std$$1, booleans));
}
export function Text$$$p(options$$4, children) {
  const opts$$1 = Common$$$genericParse(options$$4);
  const classes = Common$002EHelpers$$$classes("", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List());
  return createElement("p", createObj(new List(classes, opts$$1.Props), 1), ...children);
}
export function Text$$$div(options$$5, children$$3) {
  const opts$$2 = Common$$$genericParse(options$$5);
  const classes$$1 = Common$002EHelpers$$$classes("", new List(opts$$2.CustomClass, opts$$2.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$1, opts$$2.Props), 1), ...children$$3);
}
export function Text$$$span(options$$6, children$$6) {
  const opts$$3 = Common$$$genericParse(options$$6);
  const classes$$2 = Common$002EHelpers$$$classes("", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List());
  return createElement("span", createObj(new List(classes$$2, opts$$3.Props), 1), ...children$$6);
}
