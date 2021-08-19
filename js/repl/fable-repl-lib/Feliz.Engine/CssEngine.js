import { class_type } from "../../fable-library/Reflection.js";
import { int32ToString } from "../../fable-library/Util.js";
import { join } from "../../fable-library/String.js";
import { map } from "../../fable-library/List.js";
import { map as map_1 } from "../../fable-library/Seq.js";
import { map as map_2 } from "../../fable-library/Array.js";

export class Feliz_Util {
    constructor() {
    }
}

export function Feliz_Util$reflection() {
    return class_type("Feliz.Util", void 0, Feliz_Util);
}

export class Feliz_CssEngine$1 {
    constructor(mk) {
        this.mk = mk;
    }
}

export function Feliz_CssEngine$1$reflection(gen0) {
    return class_type("Feliz.CssEngine`1", [gen0], Feliz_CssEngine$1);
}

export function Feliz_CssEngine$1_$ctor_Z19E9258B(mk) {
    return new Feliz_CssEngine$1(mk);
}

export function Feliz_CssEngine$1__custom_Z384F8060(_, key, value) {
    return _.mk(key, value);
}

export function Feliz_CssEngine$1__get_allInitial(_) {
    return _.mk("all", "initial");
}

export function Feliz_CssEngine$1__get_allInherit(_) {
    return _.mk("all", "inherit");
}

export function Feliz_CssEngine$1__get_allUnset(_) {
    return _.mk("all", "unset");
}

export function Feliz_CssEngine$1__get_allRevert(_) {
    return _.mk("all", "revert");
}

export function Feliz_CssEngine$1__boxShadow_Z721C83C5(_, value) {
    return _.mk("box-shadow", value);
}

export function Feliz_CssEngine$1__boxShadow_6F29BBBB(_, horizontalOffset, verticalOffset, color) {
    return _.mk("box-shadow", (((int32ToString(horizontalOffset) + "px ") + int32ToString(verticalOffset)) + "px ") + color);
}

export function Feliz_CssEngine$1__boxShadow_Z4C7F1E99(_, horizontalOffset, verticalOffset, blur, color) {
    return _.mk("box-shadow", (((((int32ToString(horizontalOffset) + "px ") + int32ToString(verticalOffset)) + "px ") + int32ToString(blur)) + "px ") + color);
}

export function Feliz_CssEngine$1__boxShadow_Z7DB918C5(_, horizontalOffset, verticalOffset, blur, spread, color) {
    return _.mk("box-shadow", (((((((int32ToString(horizontalOffset) + "px ") + int32ToString(verticalOffset)) + "px ") + int32ToString(blur)) + "px ") + int32ToString(spread)) + "px ") + color);
}

export function Feliz_CssEngine$1__get_boxShadowNone(_) {
    return _.mk("box-shadow", "none");
}

export function Feliz_CssEngine$1__get_boxShadowInheritFromParent(_) {
    return _.mk("box-shadow", "inherit");
}

export function Feliz_CssEngine$1__height_Z524259A4(_, value) {
    return _.mk("height", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__height_Z445F6BAF(_, value) {
    return _.mk("height", value);
}

export function Feliz_CssEngine$1__get_heightInheritFromParent(_) {
    return _.mk("height", "inherit");
}

export function Feliz_CssEngine$1__get_heightInitial(_) {
    return _.mk("height", "initial");
}

export function Feliz_CssEngine$1__get_heightMaxContent(_) {
    return _.mk("height", "max-content");
}

export function Feliz_CssEngine$1__get_heightMinContent(_) {
    return _.mk("height", "min-content");
}

export function Feliz_CssEngine$1__maxHeight_Z524259A4(_, value) {
    return _.mk("max-height", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__maxHeight_Z445F6BAF(_, value) {
    return _.mk("max-height", value);
}

export function Feliz_CssEngine$1__get_maxHeightInheritFromParent(_) {
    return _.mk("max-height", "inherit");
}

export function Feliz_CssEngine$1__get_maxHeightInitial(_) {
    return _.mk("max-height", "initial");
}

export function Feliz_CssEngine$1__get_maxHeightMaxContent(_) {
    return _.mk("height", "max-content");
}

export function Feliz_CssEngine$1__get_maxHeightMinContent(_) {
    return _.mk("height", "min-content");
}

export function Feliz_CssEngine$1__minHeight_Z524259A4(_, value) {
    return _.mk("min-height", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__minHeight_Z445F6BAF(_, value) {
    return _.mk("min-height", value);
}

export function Feliz_CssEngine$1__get_minHeightInheritFromParent(_) {
    return _.mk("min-height", "inherit");
}

export function Feliz_CssEngine$1__get_minHeightInitial(_) {
    return _.mk("min-height", "initial");
}

export function Feliz_CssEngine$1__get_minHeightMaxContent(_) {
    return _.mk("height", "max-content");
}

export function Feliz_CssEngine$1__get_minHeightMinContent(_) {
    return _.mk("height", "min-content");
}

export function Feliz_CssEngine$1__get_textJustifyAuto(_) {
    return _.mk("text-justify", "auto");
}

export function Feliz_CssEngine$1__get_textJustifyInterWord(_) {
    return _.mk("text-justify", "inter-word");
}

export function Feliz_CssEngine$1__get_textJustifyInterCharacter(_) {
    return _.mk("text-justify", "inter-character");
}

export function Feliz_CssEngine$1__get_textJustifyNone(_) {
    return _.mk("text-justify", "none");
}

export function Feliz_CssEngine$1__get_textJustifyInitial(_) {
    return _.mk("text-justify", "initial");
}

export function Feliz_CssEngine$1__get_textJustifyInheritFromParent(_) {
    return _.mk("text-justify", "inherit");
}

export function Feliz_CssEngine$1__get_whiteSpaceNormal(_) {
    return _.mk("white-space", "normal");
}

export function Feliz_CssEngine$1__get_whiteSpaceNowrap(_) {
    return _.mk("white-space", "nowrap");
}

export function Feliz_CssEngine$1__get_whiteSpacePre(_) {
    return _.mk("white-space", "pre");
}

export function Feliz_CssEngine$1__get_whiteSpacePreLine(_) {
    return _.mk("white-space", "pre-line");
}

export function Feliz_CssEngine$1__get_whiteSpacePreWrap(_) {
    return _.mk("white-space", "pre-wrap");
}

export function Feliz_CssEngine$1__get_whiteSpaceInitial(_) {
    return _.mk("white-space", "initial");
}

export function Feliz_CssEngine$1__get_whiteSpaceInheritFromParent(_) {
    return _.mk("white-space", "inherit");
}

export function Feliz_CssEngine$1__get_wordbreakNormal(_) {
    return _.mk("word-break", "normal");
}

export function Feliz_CssEngine$1__get_wordbreakBreakAll(_) {
    return _.mk("word-break", "break-all");
}

export function Feliz_CssEngine$1__get_wordbreakKeepAll(_) {
    return _.mk("word-break", "keep-all");
}

export function Feliz_CssEngine$1__get_wordbreakBreakWord(_) {
    return _.mk("word-break", "break-word");
}

export function Feliz_CssEngine$1__get_wordbreakInitial(_) {
    return _.mk("word-break", "initial");
}

export function Feliz_CssEngine$1__get_wordbreakInheritFromParent(_) {
    return _.mk("word-break", "inherit");
}

export function Feliz_CssEngine$1__get_scrollBehaviorAuto(_) {
    return _.mk("scroll-behavior", "auto");
}

export function Feliz_CssEngine$1__get_scrollBehaviorSmooth(_) {
    return _.mk("scroll-behavior", "smooth");
}

export function Feliz_CssEngine$1__get_scrollBehaviorInitial(_) {
    return _.mk("scroll-behavior", "initial");
}

export function Feliz_CssEngine$1__get_scrollBehaviorInheritFromParent(_) {
    return _.mk("scroll-behavior", "inherit");
}

export function Feliz_CssEngine$1__get_overflowVisible(_) {
    return _.mk("overflow", "visibile");
}

export function Feliz_CssEngine$1__get_overflowHidden(_) {
    return _.mk("overflow", "hidden");
}

export function Feliz_CssEngine$1__get_overflowScroll(_) {
    return _.mk("overflow", "scroll");
}

export function Feliz_CssEngine$1__get_overflowAuto(_) {
    return _.mk("overflow", "auto");
}

export function Feliz_CssEngine$1__get_overflowInitial(_) {
    return _.mk("overflow", "initial");
}

export function Feliz_CssEngine$1__get_overflowInheritFromParent(_) {
    return _.mk("overflow", "inherit");
}

export function Feliz_CssEngine$1__get_overflowXVisible(_) {
    return _.mk("overflow-x", "visibile");
}

export function Feliz_CssEngine$1__get_overflowXHidden(_) {
    return _.mk("overflow-x", "hidden");
}

export function Feliz_CssEngine$1__get_overflowXScroll(_) {
    return _.mk("overflow-x", "scroll");
}

export function Feliz_CssEngine$1__get_overflowXAuto(_) {
    return _.mk("overflow-x", "auto");
}

export function Feliz_CssEngine$1__get_overflowXInitial(_) {
    return _.mk("overflow-x", "initial");
}

export function Feliz_CssEngine$1__get_overflowXInheritFromParent(_) {
    return _.mk("overflow-x", "inherit");
}

export function Feliz_CssEngine$1__get_overflowYVisible(_) {
    return _.mk("overflow-y", "visibile");
}

export function Feliz_CssEngine$1__get_overflowYHidden(_) {
    return _.mk("overflow-y", "hidden");
}

export function Feliz_CssEngine$1__get_overflowYScroll(_) {
    return _.mk("overflow-y", "scroll");
}

export function Feliz_CssEngine$1__get_overflowYAuto(_) {
    return _.mk("overflow-y", "auto");
}

export function Feliz_CssEngine$1__get_overflowYInitial(_) {
    return _.mk("overflow-y", "initial");
}

export function Feliz_CssEngine$1__get_overflowYInheritFromParent(_) {
    return _.mk("overflow-y", "inherit");
}

export function Feliz_CssEngine$1__get_visibilityHidden(_) {
    return _.mk("visibility", "hidden");
}

export function Feliz_CssEngine$1__get_visibilityVisible(_) {
    return _.mk("visibility", "visible");
}

export function Feliz_CssEngine$1__get_visibilityCollapse(_) {
    return _.mk("visibility", "collapse");
}

export function Feliz_CssEngine$1__get_visibilityInitial(_) {
    return _.mk("visibility", "initial");
}

export function Feliz_CssEngine$1__get_visibilityInheritFromParent(_) {
    return _.mk("visibility", "inherit");
}

export function Feliz_CssEngine$1__get_flexBasisAuto(_) {
    return _.mk("flex-basis", "auto");
}

export function Feliz_CssEngine$1__get_flexBasisInitial(_) {
    return _.mk("flex-basis", "initial");
}

export function Feliz_CssEngine$1__get_flexBasisInheritFromParent(_) {
    return _.mk("flex-basis", "inherit");
}

export function Feliz_CssEngine$1__get_flexDirectionRow(_) {
    return _.mk("flex-direction", "row");
}

export function Feliz_CssEngine$1__get_flexDirectionRowReverse(_) {
    return _.mk("flex-direction", "row-reverse");
}

export function Feliz_CssEngine$1__get_flexDirectionColumn(_) {
    return _.mk("flex-direction", "column");
}

export function Feliz_CssEngine$1__get_flexDirectionColumnReverse(_) {
    return _.mk("flex-direction", "column-reverse");
}

export function Feliz_CssEngine$1__get_flexDirectionInitial(_) {
    return _.mk("flex-basis", "initial");
}

export function Feliz_CssEngine$1__get_flexDirectionInheritFromParent(_) {
    return _.mk("flex-basis", "inherit");
}

export function Feliz_CssEngine$1__get_flexWrapNowrap(_) {
    return _.mk("flex-wrap", "nowrap");
}

export function Feliz_CssEngine$1__get_flexWrapWrap(_) {
    return _.mk("flex-wrap", "wrap");
}

export function Feliz_CssEngine$1__get_flexWrapWrapReverse(_) {
    return _.mk("flex-wrap", "wrap-reverse");
}

export function Feliz_CssEngine$1__get_flexWrapInitial(_) {
    return _.mk("flex-wrap", "initial");
}

export function Feliz_CssEngine$1__get_flexWrapInheritFromParent(_) {
    return _.mk("flex-wrap", "inherit");
}

export function Feliz_CssEngine$1__get_floatLeft(_) {
    return _.mk("float", "left");
}

export function Feliz_CssEngine$1__get_floatRight(_) {
    return _.mk("float", "right");
}

export function Feliz_CssEngine$1__get_floatNone(_) {
    return _.mk("float", "none");
}

export function Feliz_CssEngine$1__get_fontDisplayAuto(_) {
    return _.mk("font-display", "auto");
}

export function Feliz_CssEngine$1__get_fontDisplayBlock(_) {
    return _.mk("font-display", "block");
}

export function Feliz_CssEngine$1__get_fontDisplaySwap(_) {
    return _.mk("font-display", "swap");
}

export function Feliz_CssEngine$1__get_fontDisplayFallback(_) {
    return _.mk("font-display", "fallback");
}

export function Feliz_CssEngine$1__get_fontDisplayOptional(_) {
    return _.mk("font-display", "optional");
}

export function Feliz_CssEngine$1__get_fontKerningAuto(_) {
    return _.mk("font-kerning", "auto");
}

export function Feliz_CssEngine$1__get_fontKerningNormal(_) {
    return _.mk("font-kerning", "normal");
}

export function Feliz_CssEngine$1__get_fontKerningNone(_) {
    return _.mk("font-kerning", "none");
}

export function Feliz_CssEngine$1__fontWeight_Z524259A4(_, weight) {
    return _.mk("font-weight", int32ToString(weight));
}

export function Feliz_CssEngine$1__get_fontWeightNormal(_) {
    return _.mk("font-weight", "normal");
}

export function Feliz_CssEngine$1__get_fontWeightBold(_) {
    return _.mk("font-weight", "bold");
}

export function Feliz_CssEngine$1__get_fontWeightBolder(_) {
    return _.mk("font-weight", "bolder");
}

export function Feliz_CssEngine$1__get_fontWeightLighter(_) {
    return _.mk("font-weight", "lighter");
}

export function Feliz_CssEngine$1__get_fontWeightInitial(_) {
    return _.mk("font-weight", "initial");
}

export function Feliz_CssEngine$1__get_fontWeightInheritFromParent(_) {
    return _.mk("font-weight", "inherit");
}

export function Feliz_CssEngine$1__get_fontStyleNormal(_) {
    return _.mk("font-style", "normal");
}

export function Feliz_CssEngine$1__get_fontStyleItalic(_) {
    return _.mk("font-style", "italic");
}

export function Feliz_CssEngine$1__get_fontStyleOblique(_) {
    return _.mk("font-style", "oblique");
}

export function Feliz_CssEngine$1__get_fontStyleInitial(_) {
    return _.mk("font-style", "initial");
}

export function Feliz_CssEngine$1__get_fontStyleInheritFromParent(_) {
    return _.mk("font-style", "inherit");
}

export function Feliz_CssEngine$1__get_fontVariantNormal(_) {
    return _.mk("font-variant", "normal");
}

export function Feliz_CssEngine$1__get_fontVariantSmallCaps(_) {
    return _.mk("font-variant", "small-caps");
}

export function Feliz_CssEngine$1__get_fontVariantInitial(_) {
    return _.mk("font-variant", "initial");
}

export function Feliz_CssEngine$1__get_fontVariantInheritFromParent(_) {
    return _.mk("font-variant", "inherit");
}

export function Feliz_CssEngine$1__get_wordWrapNormal(_) {
    return _.mk("word-wrap", "normal");
}

export function Feliz_CssEngine$1__get_wordWrapBreakWord(_) {
    return _.mk("word-wrap", "break-word");
}

export function Feliz_CssEngine$1__get_wordWrapInitial(_) {
    return _.mk("word-wrap", "initial");
}

export function Feliz_CssEngine$1__get_wordWrapInheritFromParent(_) {
    return _.mk("word-wrap", "inherit");
}

export function Feliz_CssEngine$1__get_alignSelfAuto(_) {
    return _.mk("align-self", "auto");
}

export function Feliz_CssEngine$1__get_alignSelfStretch(_) {
    return _.mk("align-self", "stretch");
}

export function Feliz_CssEngine$1__get_alignSelfCenter(_) {
    return _.mk("align-self", "center");
}

export function Feliz_CssEngine$1__get_alignSelfFlexStart(_) {
    return _.mk("align-self", "flex-start");
}

export function Feliz_CssEngine$1__get_alignSelfFlexEnd(_) {
    return _.mk("align-self", "flex-end");
}

export function Feliz_CssEngine$1__get_alignSelfBaseline(_) {
    return _.mk("align-self", "baseline");
}

export function Feliz_CssEngine$1__get_alignSelfInitial(_) {
    return _.mk("align-self", "initial");
}

export function Feliz_CssEngine$1__get_alignSelfInheritFromParent(_) {
    return _.mk("align-self", "inherit");
}

export function Feliz_CssEngine$1__get_alignItemsStretch(_) {
    return _.mk("align-items", "stretch");
}

export function Feliz_CssEngine$1__get_alignItemsCenter(_) {
    return _.mk("align-items", "center");
}

export function Feliz_CssEngine$1__get_alignItemsFlexStart(_) {
    return _.mk("align-items", "flex-start");
}

export function Feliz_CssEngine$1__get_alignItemsFlexEnd(_) {
    return _.mk("align-items", "flex-end");
}

export function Feliz_CssEngine$1__get_alignItemsBaseline(_) {
    return _.mk("align-items", "baseline");
}

export function Feliz_CssEngine$1__get_alignItemsInitial(_) {
    return _.mk("align-items", "initial");
}

export function Feliz_CssEngine$1__get_alignItemsInheritFromParent(_) {
    return _.mk("align-items", "inherit");
}

export function Feliz_CssEngine$1__get_alignContentStretch(_) {
    return _.mk("align-content", "stretch");
}

export function Feliz_CssEngine$1__get_alignContentCenter(_) {
    return _.mk("align-content", "center");
}

export function Feliz_CssEngine$1__get_alignContentFlexStart(_) {
    return _.mk("align-content", "flex-start");
}

export function Feliz_CssEngine$1__get_alignContentFlexEnd(_) {
    return _.mk("align-content", "flex-end");
}

export function Feliz_CssEngine$1__get_alignContentSpaceBetween(_) {
    return _.mk("align-content", "space-between");
}

export function Feliz_CssEngine$1__get_alignContentSpaceAround(_) {
    return _.mk("align-content", "space-around");
}

export function Feliz_CssEngine$1__get_alignContentInitial(_) {
    return _.mk("align-content", "initial");
}

export function Feliz_CssEngine$1__get_alignContentInheritFromParent(_) {
    return _.mk("align-content", "inherit");
}

export function Feliz_CssEngine$1__get_justifyContentFlexStart(_) {
    return _.mk("justify-content", "flex-start");
}

export function Feliz_CssEngine$1__get_justifyContentFlexEnd(_) {
    return _.mk("justify-content", "flex-end");
}

export function Feliz_CssEngine$1__get_justifyContentCenter(_) {
    return _.mk("justify-content", "center");
}

export function Feliz_CssEngine$1__get_justifyContentSpaceBetween(_) {
    return _.mk("justify-content", "space-between");
}

export function Feliz_CssEngine$1__get_justifyContentSpaceAround(_) {
    return _.mk("justify-content", "space-around");
}

export function Feliz_CssEngine$1__get_justifyContentInitial(_) {
    return _.mk("justify-content", "initial");
}

export function Feliz_CssEngine$1__get_justifyContentInheritFromParent(_) {
    return _.mk("justify-content", "inherit");
}

export function Feliz_CssEngine$1__outlineWidth_Z524259A4(_, width) {
    return _.mk("outline-width", int32ToString(width) + "px");
}

export function Feliz_CssEngine$1__outlineWidth_Z445F6BAF(_, width) {
    return _.mk("outline-width", width);
}

export function Feliz_CssEngine$1__get_outlineWidthMedium(_) {
    return _.mk("outline-width", "medium");
}

export function Feliz_CssEngine$1__get_outlineWidthThin(_) {
    return _.mk("outline-width", "thin");
}

export function Feliz_CssEngine$1__get_outlineWidthThick(_) {
    return _.mk("outline-width", "thick");
}

export function Feliz_CssEngine$1__get_outlineWidthInitial(_) {
    return _.mk("outline-width", "initial");
}

export function Feliz_CssEngine$1__get_outlineWidthInheritFromParent(_) {
    return _.mk("outline-width", "inherit");
}

export function Feliz_CssEngine$1__get_listStyleTypeDisc(_) {
    return _.mk("list-style-type", "disc");
}

export function Feliz_CssEngine$1__get_listStyleTypeArmenian(_) {
    return _.mk("list-style-type", "armenian");
}

export function Feliz_CssEngine$1__get_listStyleTypeCircle(_) {
    return _.mk("list-style-type", "circle");
}

export function Feliz_CssEngine$1__get_listStyleTypeCjkIdeographic(_) {
    return _.mk("list-style-type", "cjk-ideographic");
}

export function Feliz_CssEngine$1__get_listStyleTypeDecimal(_) {
    return _.mk("list-style-type", "decimal");
}

export function Feliz_CssEngine$1__get_listStyleTypeDecimalLeadingZero(_) {
    return _.mk("list-style-type", "decimal-leading-zero");
}

export function Feliz_CssEngine$1__get_listStyleTypeGeorgian(_) {
    return _.mk("list-style-type", "georgian");
}

export function Feliz_CssEngine$1__get_listStyleTypeHebrew(_) {
    return _.mk("list-style-type", "hebrew");
}

export function Feliz_CssEngine$1__get_listStyleTypeHiragana(_) {
    return _.mk("list-style-type", "hiragana");
}

export function Feliz_CssEngine$1__get_listStyleTypeHiraganaIroha(_) {
    return _.mk("list-style-type", "hiragana-iroha");
}

export function Feliz_CssEngine$1__get_listStyleTypeKatakana(_) {
    return _.mk("list-style-type", "katakana");
}

export function Feliz_CssEngine$1__get_listStyleTypeKatakanaIroha(_) {
    return _.mk("list-style-type", "katakana-iroha");
}

export function Feliz_CssEngine$1__get_listStyleTypeLowerAlpha(_) {
    return _.mk("list-style-type", "lower-alpha");
}

export function Feliz_CssEngine$1__get_listStyleTypeLowerGreek(_) {
    return _.mk("list-style-type", "lower-greek");
}

export function Feliz_CssEngine$1__get_listStyleTypeLowerLatin(_) {
    return _.mk("list-style-type", "lower-latin");
}

export function Feliz_CssEngine$1__get_listStyleTypeLowerRoman(_) {
    return _.mk("list-style-type", "lower-roman");
}

export function Feliz_CssEngine$1__get_listStyleTypeNone(_) {
    return _.mk("list-style-type", "none");
}

export function Feliz_CssEngine$1__get_listStyleTypeSquare(_) {
    return _.mk("list-style-type", "square");
}

export function Feliz_CssEngine$1__get_listStyleTypeUpperAlpha(_) {
    return _.mk("list-style-type", "upper-alpha");
}

export function Feliz_CssEngine$1__get_listStyleTypeUpperGreek(_) {
    return _.mk("list-style-type", "upper-greek");
}

export function Feliz_CssEngine$1__get_listStyleTypeUpperLatin(_) {
    return _.mk("list-style-type", "upper-latin");
}

export function Feliz_CssEngine$1__get_listStyleTypeUpperRoman(_) {
    return _.mk("list-style-type", "upper-roman");
}

export function Feliz_CssEngine$1__get_listStyleTypeInitial(_) {
    return _.mk("list-style-type", "initial");
}

export function Feliz_CssEngine$1__get_listStyleTypeInheritFromParent(_) {
    return _.mk("list-style-type", "inherit");
}

export function Feliz_CssEngine$1__get_propertyNone(_) {
    return _.mk("list-style-image", "none");
}

export function Feliz_CssEngine$1__propertyUrl_Z721C83C5(_, path) {
    return _.mk("list-style-image", ("url(\u0027" + path) + "\u0027)");
}

export function Feliz_CssEngine$1__get_propertyInitial(_) {
    return _.mk("list-style-image", "initial");
}

export function Feliz_CssEngine$1__get_propertyInheritFromParent(_) {
    return _.mk("list-style-image", "inherit");
}

export function Feliz_CssEngine$1__get_listStylePositionInside(_) {
    return _.mk("list-style-position", "inside");
}

export function Feliz_CssEngine$1__get_listStylePositionOutside(_) {
    return _.mk("list-style-position", "outside");
}

export function Feliz_CssEngine$1__get_listStylePositionInitial(_) {
    return _.mk("list-style-position", "initial");
}

export function Feliz_CssEngine$1__get_listStylePositionInheritFromParent(_) {
    return _.mk("list-style-position", "inherit");
}

export function Feliz_CssEngine$1__textDecorationLine_60978065(_, line) {
    return _.mk("text-decoration-line", line);
}

export function Feliz_CssEngine$1__get_textDecorationLineNone(_) {
    return _.mk("text-decoration-line", "none");
}

export function Feliz_CssEngine$1__get_textDecorationLineUnderline(_) {
    return _.mk("text-decoration-line", "underline");
}

export function Feliz_CssEngine$1__get_textDecorationLineOverline(_) {
    return _.mk("text-decoration-line", "overline");
}

export function Feliz_CssEngine$1__get_textDecorationLineLineThrough(_) {
    return _.mk("text-decoration-line", "line-through");
}

export function Feliz_CssEngine$1__get_textDecorationLineInitial(_) {
    return _.mk("text-decoration-line", "initial");
}

export function Feliz_CssEngine$1__get_textDecorationLineInheritFromParent(_) {
    return _.mk("text-decoration-line", "inherit");
}

export function Feliz_CssEngine$1__textDecoration_60978065(_, line) {
    return _.mk("text-decoration", line);
}

export function Feliz_CssEngine$1__textDecoration_13100D60(_, bottom, top) {
    return _.mk("text-decoration", (bottom + " ") + top);
}

export function Feliz_CssEngine$1__textDecoration_5CC65D2B(_, bottom, top, style) {
    return _.mk("text-decoration", (((bottom + " ") + top) + " ") + style);
}

export function Feliz_CssEngine$1__textDecoration_78717EB0(_, bottom, top, style, color) {
    return _.mk("text-decoration", (((((bottom + " ") + top) + " ") + style) + " ") + color);
}

export function Feliz_CssEngine$1__get_textDecorationNone(_) {
    return _.mk("text-decoration", "none");
}

export function Feliz_CssEngine$1__get_textDecorationUnderline(_) {
    return _.mk("text-decoration", "underline");
}

export function Feliz_CssEngine$1__get_textDecorationOverline(_) {
    return _.mk("text-decoration", "overline");
}

export function Feliz_CssEngine$1__get_textDecorationLineThrough(_) {
    return _.mk("text-decoration", "line-through");
}

export function Feliz_CssEngine$1__get_textDecorationInitial(_) {
    return _.mk("text-decoration", "initial");
}

export function Feliz_CssEngine$1__get_textDecorationInheritFromParent(_) {
    return _.mk("text-decoration", "inherit");
}

export function Feliz_CssEngine$1__get_transformStyleFlat(_) {
    return _.mk("transform-style", "flat");
}

export function Feliz_CssEngine$1__get_transformStylePreserve3D(_) {
    return _.mk("transform-style", "preserve-3d");
}

export function Feliz_CssEngine$1__get_transformStyleInitial(_) {
    return _.mk("transform-style", "initial");
}

export function Feliz_CssEngine$1__get_transformStyleInheritFromParent(_) {
    return _.mk("transform-style", "inherit");
}

export function Feliz_CssEngine$1__get_textTransformNone(_) {
    return _.mk("text-transform", "none");
}

export function Feliz_CssEngine$1__get_textTransformCapitalize(_) {
    return _.mk("text-transform", "capitalize");
}

export function Feliz_CssEngine$1__get_textTransformUppercase(_) {
    return _.mk("text-transform", "uppercase");
}

export function Feliz_CssEngine$1__get_textTransformLowercase(_) {
    return _.mk("text-transform", "lowercase");
}

export function Feliz_CssEngine$1__get_textTransformInitial(_) {
    return _.mk("text-transform", "initial");
}

export function Feliz_CssEngine$1__get_textTransformInheritFromParent(_) {
    return _.mk("text-transform", "inherit");
}

export function Feliz_CssEngine$1__get_textOverflowClip(_) {
    return _.mk("text-overflow", "clip");
}

export function Feliz_CssEngine$1__get_textOverflowEllipsis(_) {
    return _.mk("text-overflow", "ellipsis");
}

export function Feliz_CssEngine$1__get_textOverflowInitial(_) {
    return _.mk("text-overflow", "initial");
}

export function Feliz_CssEngine$1__get_textOverflowInheritFromParent(_) {
    return _.mk("text-overflow", "inherit");
}

export function Feliz_CssEngine$1__get_filterNone(_) {
    return _.mk("filter", "none");
}

export function Feliz_CssEngine$1__filterBlur_Z524259A4(_, value) {
    return _.mk("filter", "blur(" + (int32ToString(value) + "%)"));
}

export function Feliz_CssEngine$1__filterBlur_5E38073B(_, value) {
    return _.mk("filter", "blur(" + (value.toString() + ")"));
}

export function Feliz_CssEngine$1__filterBrightness_Z524259A4(_, value) {
    return _.mk("filter", "brightness(" + (int32ToString(value) + "%)"));
}

export function Feliz_CssEngine$1__filterBrightness_5E38073B(_, value) {
    return _.mk("filter", "brightness(" + (value.toString() + ")"));
}

export function Feliz_CssEngine$1__filterContrast_Z524259A4(_, value) {
    return _.mk("filter", "contrast(" + (int32ToString(value) + "%)"));
}

export function Feliz_CssEngine$1__filterContrast_5E38073B(_, value) {
    return _.mk("filter", "contrast(" + (value.toString() + ")"));
}

export function Feliz_CssEngine$1__filterDropShadow_Z7DB918C5(_, horizontalOffset, verticalOffset, blur, spread, color) {
    return _.mk("filter", ((((((((("drop-shadow(" + int32ToString(horizontalOffset)) + "px ") + int32ToString(verticalOffset)) + "px ") + int32ToString(blur)) + "px ") + int32ToString(spread)) + "px ") + color) + ")");
}

export function Feliz_CssEngine$1__filterDropShadow_Z4C7F1E99(_, horizontalOffset, verticalOffset, blur, color) {
    return _.mk("filter", ((((((("drop-shadow(" + int32ToString(horizontalOffset)) + "px ") + int32ToString(verticalOffset)) + "px ") + int32ToString(blur)) + "px ") + color) + ")");
}

export function Feliz_CssEngine$1__filterDropShadow_6F29BBBB(_, horizontalOffset, verticalOffset, color) {
    return _.mk("filter", ((((("drop-shadow(" + int32ToString(horizontalOffset)) + "px ") + int32ToString(verticalOffset)) + "px ") + color) + ")");
}

export function Feliz_CssEngine$1__filterGrayscale_Z524259A4(_, value) {
    return _.mk("filter", "grayscale(" + (int32ToString(value) + "%)"));
}

export function Feliz_CssEngine$1__filterGrayscale_5E38073B(_, value) {
    return _.mk("filter", "grayscale(" + (value.toString() + ")"));
}

export function Feliz_CssEngine$1__filterHueRotate_Z524259A4(_, degrees) {
    return _.mk("filter", ("hue-rotate(" + int32ToString(degrees)) + "deg)");
}

export function Feliz_CssEngine$1__filterInvert_Z524259A4(_, value) {
    return _.mk("filter", "invert(" + (int32ToString(value) + "%)"));
}

export function Feliz_CssEngine$1__filterInvert_5E38073B(_, value) {
    return _.mk("filter", "invert(" + (value.toString() + ")"));
}

export function Feliz_CssEngine$1__filterOpacity_Z524259A4(_, value) {
    return _.mk("filter", "opacity(" + (int32ToString(value) + "%)"));
}

export function Feliz_CssEngine$1__filterOpacity_5E38073B(_, value) {
    return _.mk("filter", "opacity(" + (value.toString() + ")"));
}

export function Feliz_CssEngine$1__filterSaturate_Z524259A4(_, value) {
    return _.mk("filter", "saturate(" + (int32ToString(value) + "%)"));
}

export function Feliz_CssEngine$1__filterSaturate_5E38073B(_, value) {
    return _.mk("filter", "saturate(" + (value.toString() + ")"));
}

export function Feliz_CssEngine$1__filterSepia_Z524259A4(_, value) {
    return _.mk("filter", "sepia(" + (int32ToString(value) + "%)"));
}

export function Feliz_CssEngine$1__filterSepia_5E38073B(_, value) {
    return _.mk("filter", "sepia(" + (value.toString() + ")"));
}

export function Feliz_CssEngine$1__filterUrl_Z721C83C5(_, value) {
    return _.mk("filter", ("url(" + value) + ")");
}

export function Feliz_CssEngine$1__get_filterInitial(_) {
    return _.mk("filter", "initial");
}

export function Feliz_CssEngine$1__get_filterInheritFromParent(_) {
    return _.mk("filter", "inherit");
}

export function Feliz_CssEngine$1__get_borderCollapseSeparate(_) {
    return _.mk("border-collapse", "separate");
}

export function Feliz_CssEngine$1__get_borderCollapseCollapse(_) {
    return _.mk("border-collapse", "collapse");
}

export function Feliz_CssEngine$1__get_borderCollapseInitial(_) {
    return _.mk("border-collapse", "initial");
}

export function Feliz_CssEngine$1__get_borderCollapseInheritFromParent(_) {
    return _.mk("border-collapse", "inherit");
}

export function Feliz_CssEngine$1__borderSpacing_18A029B5(_, horizontal, vertical) {
    let x_1;
    return _.mk("border-spacing", (horizontal + " ") + ((x_1 = vertical, (x_1 == null) ? "" : x_1)));
}

export function Feliz_CssEngine$1__get_borderSpacingInitial(_) {
    return _.mk("border-spacing", "initial");
}

export function Feliz_CssEngine$1__get_borderSpacingInheritFromParent(_) {
    return _.mk("border-spacing", "inherit");
}

export function Feliz_CssEngine$1__backgroundSize_Z721C83C5(_, value) {
    return _.mk("background-size", value);
}

export function Feliz_CssEngine$1__backgroundSize_Z445F6BAF(_, value) {
    return _.mk("background-size", value);
}

export function Feliz_CssEngine$1__backgroundSize_Z6BEC75E0(_, width, height) {
    return _.mk("background-size", (width + " ") + height);
}

export function Feliz_CssEngine$1__get_backgroundSizeAuto(_) {
    return _.mk("background-size", "auto");
}

export function Feliz_CssEngine$1__get_backgroundSizeCover(_) {
    return _.mk("background-size", "cover");
}

export function Feliz_CssEngine$1__get_backgroundSizeContain(_) {
    return _.mk("background-size", "contain");
}

export function Feliz_CssEngine$1__get_backgroundSizeInitial(_) {
    return _.mk("background-size", "initial");
}

export function Feliz_CssEngine$1__get_backgroundSizeInheritFromParent(_) {
    return _.mk("background-size", "inherit");
}

export function Feliz_CssEngine$1__get_textDecorationStyleSolid(_) {
    return _.mk("text-decoration-style", "solid");
}

export function Feliz_CssEngine$1__get_textDecorationStyleDouble(_) {
    return _.mk("text-decoration-style", "double");
}

export function Feliz_CssEngine$1__get_textDecorationStyleDotted(_) {
    return _.mk("text-decoration-style", "dotted");
}

export function Feliz_CssEngine$1__get_textDecorationStyleDashed(_) {
    return _.mk("text-decoration-style", "dashed");
}

export function Feliz_CssEngine$1__get_textDecorationStyleWavy(_) {
    return _.mk("text-decoration-style", "wavy");
}

export function Feliz_CssEngine$1__get_textDecorationStyleInitial(_) {
    return _.mk("text-decoration-style", "initial");
}

export function Feliz_CssEngine$1__get_textDecorationStyleInheritFromParent(_) {
    return _.mk("text-decoration-style", "inherit");
}

export function Feliz_CssEngine$1__get_fontStretchUltraCondensed(_) {
    return _.mk("font-stretch", "ultra-condensed");
}

export function Feliz_CssEngine$1__get_fontStretchExtraCondensed(_) {
    return _.mk("font-stretch", "extra-condensed");
}

export function Feliz_CssEngine$1__get_fontStretchCondensed(_) {
    return _.mk("font-stretch", "condensed");
}

export function Feliz_CssEngine$1__get_fontStretchSemiCondensed(_) {
    return _.mk("font-stretch", "semi-condensed");
}

export function Feliz_CssEngine$1__get_fontStretchNormal(_) {
    return _.mk("font-stretch", "normal");
}

export function Feliz_CssEngine$1__get_fontStretchSemiExpanded(_) {
    return _.mk("font-stretch", "semi-expanded");
}

export function Feliz_CssEngine$1__get_fontStretchExpanded(_) {
    return _.mk("font-stretch", "expanded");
}

export function Feliz_CssEngine$1__get_fontStretchExtraExpanded(_) {
    return _.mk("font-stretch", "extra-expanded");
}

export function Feliz_CssEngine$1__get_fontStretchUltraExpanded(_) {
    return _.mk("font-stretch", "ultra-expanded");
}

export function Feliz_CssEngine$1__get_fontStretchInitial(_) {
    return _.mk("font-stretch", "initial");
}

export function Feliz_CssEngine$1__get_fontStretchInheritFromParent(_) {
    return _.mk("font-stretch", "inherit");
}

export function Feliz_CssEngine$1__get_floatStyleNone(_) {
    return _.mk("float", "none");
}

export function Feliz_CssEngine$1__get_floatStyleLeft(_) {
    return _.mk("float", "left");
}

export function Feliz_CssEngine$1__get_floatStyleRight(_) {
    return _.mk("float", "right");
}

export function Feliz_CssEngine$1__get_floatStyleInitial(_) {
    return _.mk("float", "initial");
}

export function Feliz_CssEngine$1__get_floatStyleInheritFromParent(_) {
    return _.mk("float", "inherit");
}

export function Feliz_CssEngine$1__get_verticalAlignBaseline(_) {
    return _.mk("vertical-align", "baseline");
}

export function Feliz_CssEngine$1__get_verticalAlignSub(_) {
    return _.mk("vertical-align", "sup");
}

export function Feliz_CssEngine$1__get_verticalAlignSuper(_) {
    return _.mk("vertical-align", "super");
}

export function Feliz_CssEngine$1__get_verticalAlignTop(_) {
    return _.mk("vertical-align", "top");
}

export function Feliz_CssEngine$1__get_verticalAlignTextTop(_) {
    return _.mk("vertical-align", "text-top");
}

export function Feliz_CssEngine$1__get_verticalAlignMiddle(_) {
    return _.mk("vertical-align", "middle");
}

export function Feliz_CssEngine$1__get_verticalAlignBottom(_) {
    return _.mk("vertical-align", "bottom");
}

export function Feliz_CssEngine$1__get_verticalAlignTextBottom(_) {
    return _.mk("vertical-align", "text-bottom");
}

export function Feliz_CssEngine$1__get_verticalAlignInitial(_) {
    return _.mk("vertical-align", "initial");
}

export function Feliz_CssEngine$1__get_verticalAlignInheritFromParent(_) {
    return _.mk("vertical-align", "inherit");
}

export function Feliz_CssEngine$1__get_writingModeHorizontalTopBottom(_) {
    return _.mk("writing-mode", "horizontal-tb");
}

export function Feliz_CssEngine$1__get_writingModeVerticalRightLeft(_) {
    return _.mk("writing-mode", "vertical-rl");
}

export function Feliz_CssEngine$1__get_writingModeVerticalLeftRight(_) {
    return _.mk("writing-mode", "vertical-lr");
}

export function Feliz_CssEngine$1__get_writingModeInitial(_) {
    return _.mk("writing-mode", "initial");
}

export function Feliz_CssEngine$1__get_writingModeInheritFromParent(_) {
    return _.mk("writing-mode", "inherit");
}

export function Feliz_CssEngine$1__get_animationTimingFunctionEase(_) {
    return _.mk("animation-timing-function", "ease");
}

export function Feliz_CssEngine$1__get_animationTimingFunctionLinear(_) {
    return _.mk("animation-timing-function", "linear");
}

export function Feliz_CssEngine$1__get_animationTimingFunctionEaseIn(_) {
    return _.mk("animation-timing-function", "ease-in");
}

export function Feliz_CssEngine$1__get_animationTimingFunctionEaseOut(_) {
    return _.mk("animation-timing-function", "ease-out");
}

export function Feliz_CssEngine$1__get_animationTimingFunctionEaseInOut(_) {
    return _.mk("animation-timing-function", "ease-in-out");
}

export function Feliz_CssEngine$1__animationTimingFunctionCubicBezier_77D16AC0(_, n1, n2, n3, n4) {
    return _.mk("animation-timing-function", ((((((("cubic-bezier(" + n1.toString()) + ",") + n2.toString()) + ",") + n3.toString()) + ", ") + n4.toString()) + ")");
}

export function Feliz_CssEngine$1__get_animationTimingFunctionInitial(_) {
    return _.mk("animation-timing-function", "initial");
}

export function Feliz_CssEngine$1__get_animationTimingFunctionInheritFromParent(_) {
    return _.mk("animation-timing-function", "inherit");
}

export function Feliz_CssEngine$1__get_transitionTimingFunctionEase(_) {
    return _.mk("transition-timing-function", "ease");
}

export function Feliz_CssEngine$1__get_transitionTimingFunctionLinear(_) {
    return _.mk("transition-timing-function", "linear");
}

export function Feliz_CssEngine$1__get_transitionTimingFunctionEaseIn(_) {
    return _.mk("transition-timing-function", "ease-in");
}

export function Feliz_CssEngine$1__get_transitionTimingFunctionEaseOut(_) {
    return _.mk("transition-timing-function", "ease-out");
}

export function Feliz_CssEngine$1__get_transitionTimingFunctionEaseInOut(_) {
    return _.mk("transition-timing-function", "ease-in-out");
}

export function Feliz_CssEngine$1__get_transitionTimingFunctionStepStart(_) {
    return _.mk("transition-timing-function", "step-start");
}

export function Feliz_CssEngine$1__get_transitionTimingFunctionStepEnd(_) {
    return _.mk("transition-timing-function", "step-end");
}

export function Feliz_CssEngine$1__transitionTimingFunctionCubicBezier_77D16AC0(_, n1, n2, n3, n4) {
    return _.mk("transition-timing-function", ((((((("cubic-bezier(" + n1.toString()) + ",") + n2.toString()) + ",") + n3.toString()) + ", ") + n4.toString()) + ")");
}

export function Feliz_CssEngine$1__get_transitionTimingFunctionInitial(_) {
    return _.mk("transition-timing-function", "initial");
}

export function Feliz_CssEngine$1__get_transitionTimingFunctionInheritFromParent(_) {
    return _.mk("transition-timing-function", "inherit");
}

export function Feliz_CssEngine$1__get_userSelectAuto(_) {
    return _.mk("user-select", "auto");
}

export function Feliz_CssEngine$1__get_userSelectNone(_) {
    return _.mk("user-select", "none");
}

export function Feliz_CssEngine$1__get_userSelectText(_) {
    return _.mk("user-select", "text");
}

export function Feliz_CssEngine$1__get_userSelectAll(_) {
    return _.mk("user-select", "all");
}

export function Feliz_CssEngine$1__get_userSelectInitial(_) {
    return _.mk("user-select", "initial");
}

export function Feliz_CssEngine$1__get_userSelectInheritFromParent(_) {
    return _.mk("user-select", "inherit");
}

export function Feliz_CssEngine$1__borderStyle_61CE138F(_, style) {
    return _.mk("border-style", style);
}

export function Feliz_CssEngine$1__borderStyle_Z5A16920(_, vertical, horizontal) {
    return _.mk("border-style", (vertical + " ") + horizontal);
}

export function Feliz_CssEngine$1__borderStyle_46259CC0(_, top, right, bottom, left) {
    return _.mk("border-style", (((((top + " ") + right) + " ") + bottom) + " ") + left);
}

export function Feliz_CssEngine$1__get_borderStyleDotted(_) {
    return _.mk("border-style", "dotted");
}

export function Feliz_CssEngine$1__get_borderStyleDashed(_) {
    return _.mk("border-style", "dashed");
}

export function Feliz_CssEngine$1__get_borderStyleSolid(_) {
    return _.mk("border-style", "solid");
}

export function Feliz_CssEngine$1__get_borderStyleDouble(_) {
    return _.mk("border-style", "double");
}

export function Feliz_CssEngine$1__get_borderStyleGroove(_) {
    return _.mk("border-style", "groove");
}

export function Feliz_CssEngine$1__get_borderStyleRidge(_) {
    return _.mk("border-style", "ridge");
}

export function Feliz_CssEngine$1__get_borderStyleInset(_) {
    return _.mk("border-style", "inset");
}

export function Feliz_CssEngine$1__get_borderStyleOutset(_) {
    return _.mk("border-style", "outset");
}

export function Feliz_CssEngine$1__get_borderStyleNone(_) {
    return _.mk("border-style", "none");
}

export function Feliz_CssEngine$1__get_borderStyleHidden(_) {
    return _.mk("border-style", "hidden");
}

export function Feliz_CssEngine$1__get_borderStyleInitial(_) {
    return _.mk("border-style", "initial");
}

export function Feliz_CssEngine$1__get_borderStyleInheritFromParent(_) {
    return _.mk("border-style", "inherit");
}

export function Feliz_CssEngine$1__get_tableLayoutAuto(_) {
    return _.mk("table-layout", "auto");
}

export function Feliz_CssEngine$1__get_tableLayoutFixed$0027(_) {
    return _.mk("table-layout", "fixed");
}

export function Feliz_CssEngine$1__get_tableLayoutInitial(_) {
    return _.mk("table-layout", "initial");
}

export function Feliz_CssEngine$1__get_tableLayoutInheritFromParent(_) {
    return _.mk("table-layout", "inherit");
}

export function Feliz_CssEngine$1__cursor_Z721C83C5(_, value) {
    return _.mk("cursor", value);
}

export function Feliz_CssEngine$1__get_cursorAuto(_) {
    return _.mk("cursor", "auto");
}

export function Feliz_CssEngine$1__get_cursorAlias(_) {
    return _.mk("cursor", "alias");
}

export function Feliz_CssEngine$1__get_cursorDefaultCursor(_) {
    return _.mk("cursor", "default");
}

export function Feliz_CssEngine$1__get_cursorNone(_) {
    return _.mk("cursor", "none");
}

export function Feliz_CssEngine$1__get_cursorContextMenu(_) {
    return _.mk("cursor", "context-menu");
}

export function Feliz_CssEngine$1__get_cursorHelp(_) {
    return _.mk("cursor", "help");
}

export function Feliz_CssEngine$1__get_cursorPointer(_) {
    return _.mk("cursor", "pointer");
}

export function Feliz_CssEngine$1__get_cursorProgress(_) {
    return _.mk("cursor", "progress");
}

export function Feliz_CssEngine$1__get_cursorWait(_) {
    return _.mk("cursor", "wait");
}

export function Feliz_CssEngine$1__get_cursorCell(_) {
    return _.mk("cursor", "cell");
}

export function Feliz_CssEngine$1__get_cursorCrosshair(_) {
    return _.mk("cursor", "crosshair");
}

export function Feliz_CssEngine$1__get_cursorText(_) {
    return _.mk("cursor", "text");
}

export function Feliz_CssEngine$1__get_cursorVerticalText(_) {
    return _.mk("cursor", "vertical-text");
}

export function Feliz_CssEngine$1__get_cursorCopy(_) {
    return _.mk("cursor", "copy");
}

export function Feliz_CssEngine$1__get_cursorMove(_) {
    return _.mk("cursor", "move");
}

export function Feliz_CssEngine$1__get_cursorNoDrop(_) {
    return _.mk("cursor", "no-drop");
}

export function Feliz_CssEngine$1__get_cursorNotAllowed(_) {
    return _.mk("cursor", "not-allowed");
}

export function Feliz_CssEngine$1__get_cursorGrab(_) {
    return _.mk("cursor", "grab");
}

export function Feliz_CssEngine$1__get_cursorGrabbing(_) {
    return _.mk("cursor", "grabbing");
}

export function Feliz_CssEngine$1__get_cursorAllScroll(_) {
    return _.mk("cursor", "all-scroll");
}

export function Feliz_CssEngine$1__get_cursorColumnResize(_) {
    return _.mk("cursor", "col-resize");
}

export function Feliz_CssEngine$1__get_cursorRowResize(_) {
    return _.mk("cursor", "row-resize");
}

export function Feliz_CssEngine$1__get_cursorNorthResize(_) {
    return _.mk("cursor", "n-resize");
}

export function Feliz_CssEngine$1__get_cursorEastResize(_) {
    return _.mk("cursor", "e-resize");
}

export function Feliz_CssEngine$1__get_cursorSouthResize(_) {
    return _.mk("cursor", "s-resize");
}

export function Feliz_CssEngine$1__get_cursorWestResize(_) {
    return _.mk("cursor", "w-resize");
}

export function Feliz_CssEngine$1__get_cursorNorthEastResize(_) {
    return _.mk("cursor", "ne-resize");
}

export function Feliz_CssEngine$1__get_cursorNorthWestResize(_) {
    return _.mk("cursor", "nw-resize");
}

export function Feliz_CssEngine$1__get_cursorSouthEastResize(_) {
    return _.mk("cursor", "se-resize");
}

export function Feliz_CssEngine$1__get_cursorSouthWestResize(_) {
    return _.mk("cursor", "sw-resize");
}

export function Feliz_CssEngine$1__get_cursorEastWestResize(_) {
    return _.mk("cursor", "ew-resize");
}

export function Feliz_CssEngine$1__get_cursorNorthSouthResize(_) {
    return _.mk("cursor", "ns-resize");
}

export function Feliz_CssEngine$1__get_cursorNorthEastSouthWestResize(_) {
    return _.mk("cursor", "nesw-resize");
}

export function Feliz_CssEngine$1__get_cursorNorthWestSouthEastResize(_) {
    return _.mk("cursor", "nwse-resize");
}

export function Feliz_CssEngine$1__get_cursorZoomIn(_) {
    return _.mk("cursor", "zoom-in");
}

export function Feliz_CssEngine$1__get_cursorZoomOut(_) {
    return _.mk("cursor", "zoom-out");
}

export function Feliz_CssEngine$1__get_outlineStyleAuto(_) {
    return _.mk("outline-style", "auto");
}

export function Feliz_CssEngine$1__get_outlineStyleNone(_) {
    return _.mk("outline-style", "none");
}

export function Feliz_CssEngine$1__get_outlineStyleHidden(_) {
    return _.mk("outline-style", "hidden");
}

export function Feliz_CssEngine$1__get_outlineStyleDotted(_) {
    return _.mk("outline-style", "dotted");
}

export function Feliz_CssEngine$1__get_outlineStyleDashed(_) {
    return _.mk("outline-style", "dashed");
}

export function Feliz_CssEngine$1__get_outlineStyleSolid(_) {
    return _.mk("outline-style", "solid");
}

export function Feliz_CssEngine$1__get_outlineStyleDouble(_) {
    return _.mk("outline-style", "double");
}

export function Feliz_CssEngine$1__get_outlineStyleGroove(_) {
    return _.mk("outline-style", "groove");
}

export function Feliz_CssEngine$1__get_outlineStyleRidge(_) {
    return _.mk("outline-style", "ridge");
}

export function Feliz_CssEngine$1__get_outlineStyleInset(_) {
    return _.mk("outline-style", "inset");
}

export function Feliz_CssEngine$1__get_outlineStyleOutset(_) {
    return _.mk("outline-style", "outset");
}

export function Feliz_CssEngine$1__get_outlineStyleInitial(_) {
    return _.mk("outline-style", "initial");
}

export function Feliz_CssEngine$1__get_outlineStyleInheritFromParent(_) {
    return _.mk("outline-style", "inherit");
}

export function Feliz_CssEngine$1__backgroundPosition_Z721C83C5(_, position) {
    return _.mk("background-position", position);
}

export function Feliz_CssEngine$1__get_backgroundPositionScroll(_) {
    return _.mk("background-position", "scroll");
}

export function Feliz_CssEngine$1__get_backgroundPositionFixedNoScroll(_) {
    return _.mk("background-position", "fixed");
}

export function Feliz_CssEngine$1__get_backgroundPositionLocal(_) {
    return _.mk("background-position", "local");
}

export function Feliz_CssEngine$1__get_backgroundPositionInitial(_) {
    return _.mk("background-position", "initial");
}

export function Feliz_CssEngine$1__get_backgroundPositionInheritFromParent(_) {
    return _.mk("background-position", "inherit");
}

export function Feliz_CssEngine$1__get_backgroundBlendModeNormal(_) {
    return _.mk("background-blend-mode", "normal");
}

export function Feliz_CssEngine$1__get_backgroundBlendModeScreen(_) {
    return _.mk("background-blend-mode", "screen");
}

export function Feliz_CssEngine$1__get_backgroundBlendModeOverlay(_) {
    return _.mk("background-blend-mode", "overlay");
}

export function Feliz_CssEngine$1__get_backgroundBlendModeDarken(_) {
    return _.mk("background-blend-mode", "darken");
}

export function Feliz_CssEngine$1__get_backgroundBlendModeLighten(_) {
    return _.mk("background-blend-mode", "lighten");
}

export function Feliz_CssEngine$1__get_backgroundBlendModeCollorDodge(_) {
    return _.mk("background-blend-mode", "color-dodge");
}

export function Feliz_CssEngine$1__get_backgroundBlendModeSaturation(_) {
    return _.mk("background-blend-mode", "saturation");
}

export function Feliz_CssEngine$1__get_backgroundBlendModeColor(_) {
    return _.mk("background-blend-mode", "color");
}

export function Feliz_CssEngine$1__get_backgroundBlendModeLuminosity(_) {
    return _.mk("background-blend-mode", "luminosity");
}

export function Feliz_CssEngine$1__get_backgroundClipBorderBox(_) {
    return _.mk("background-clip", "border-box");
}

export function Feliz_CssEngine$1__get_backgroundClipPaddingBox(_) {
    return _.mk("background-clip", "padding-box");
}

export function Feliz_CssEngine$1__get_backgroundClipContentBox(_) {
    return _.mk("background-clip", "content-box");
}

export function Feliz_CssEngine$1__get_backgroundClipInitial(_) {
    return _.mk("background-clip", "initial");
}

export function Feliz_CssEngine$1__get_backgroundClipInheritFromParent(_) {
    return _.mk("background-clip", "inherit");
}

export function Feliz_CssEngine$1__transform_124E45BF(_, transformation) {
    return _.mk("transform", transformation);
}

export function Feliz_CssEngine$1__transform_Z4456198B(_, transformations) {
    return _.mk("transform", join(" ", map((arg00) => arg00, transformations)));
}

export function Feliz_CssEngine$1__get_transformNone(_) {
    return _.mk("transform", "none");
}

export function Feliz_CssEngine$1__transformMatrix_48A24E80(_, x1, y1, z1, x2, y2, z2) {
    return _.mk("transform", ((((((((((("matrix(" + int32ToString(x1)) + ",") + int32ToString(y1)) + ",") + int32ToString(z1)) + ",") + int32ToString(x2)) + ",") + int32ToString(y2)) + ", ") + int32ToString(z2)) + ")");
}

export function Feliz_CssEngine$1__transformTranslate_Z37302880(_, x, y) {
    return _.mk("transform", ((("translate(" + int32ToString(x)) + "px,") + int32ToString(y)) + "px)");
}

export function Feliz_CssEngine$1__transformTranslate_Z6BEC75E0(_, x, y) {
    return _.mk("transform", ((("translate(" + x) + ", ") + y) + ")");
}

export function Feliz_CssEngine$1__transformTranslate3D_4F7761DC(_, x, y, z) {
    return _.mk("transform", ((((("translate3d(" + int32ToString(x)) + "px,") + int32ToString(y)) + "px,") + int32ToString(z)) + "px)");
}

export function Feliz_CssEngine$1__transformTranslate3D_Z52DBA58F(_, x, y, z) {
    return _.mk("transform", ((((("translate3d(" + x) + ",") + y) + ", ") + z) + ")");
}

export function Feliz_CssEngine$1__transformTranslateX_Z524259A4(_, x) {
    return _.mk("transform", ("translateX(" + int32ToString(x)) + "px)");
}

export function Feliz_CssEngine$1__transformTranslateX_Z445F6BAF(_, x) {
    return _.mk("transform", ("translateX(" + x) + ")");
}

export function Feliz_CssEngine$1__transformTranslateY_Z524259A4(_, y) {
    return _.mk("transform", ("translateY(" + int32ToString(y)) + "px)");
}

export function Feliz_CssEngine$1__transformTranslateY_Z445F6BAF(_, y) {
    return _.mk("transform", ("translateY(" + y) + ")");
}

export function Feliz_CssEngine$1__transformTranslateZ_Z445F6BAF(_, z) {
    return _.mk("transform", ("translateZ(" + z) + ")");
}

export function Feliz_CssEngine$1__transformScale_Z37302880(_, x, y) {
    return _.mk("transform", ((("scale(" + int32ToString(x)) + ", ") + int32ToString(y)) + ")");
}

export function Feliz_CssEngine$1__transformScale_5E38073B(_, n) {
    return _.mk("transform", ("scale(" + n.toString()) + ")");
}

export function Feliz_CssEngine$1__transformScale3D_4F7761DC(_, x, y, z) {
    return _.mk("transform", ((((("scale3d(" + int32ToString(x)) + ",") + int32ToString(y)) + ", ") + int32ToString(z)) + ")");
}

export function Feliz_CssEngine$1__transformScaleX_Z524259A4(_, x) {
    return _.mk("transform", ("scaleX(" + int32ToString(x)) + ")");
}

export function Feliz_CssEngine$1__transformScaleY_Z524259A4(_, y) {
    return _.mk("transform", ("scaleY(" + int32ToString(y)) + ")");
}

export function Feliz_CssEngine$1__transformScaleZ_Z524259A4(_, z) {
    return _.mk("transform", ("scaleZ(" + int32ToString(z)) + ")");
}

export function Feliz_CssEngine$1__transformRotate_Z524259A4(_, deg) {
    return _.mk("transform", ("rotate(" + int32ToString(deg)) + "deg)");
}

export function Feliz_CssEngine$1__transformRotate_5E38073B(_, deg) {
    return _.mk("transform", ("rotate(" + deg.toString()) + "deg)");
}

export function Feliz_CssEngine$1__transformRotateX_5E38073B(_, deg) {
    return _.mk("transform", ("rotateX(" + deg.toString()) + "deg)");
}

export function Feliz_CssEngine$1__transformRotateX_Z524259A4(_, deg) {
    return _.mk("transform", ("rotateX(" + int32ToString(deg)) + "deg)");
}

export function Feliz_CssEngine$1__transformRotateY_5E38073B(_, deg) {
    return _.mk("transform", ("rotateY(" + deg.toString()) + "deg)");
}

export function Feliz_CssEngine$1__transformRotateY_Z524259A4(_, deg) {
    return _.mk("transform", ("rotateY(" + int32ToString(deg)) + "deg)");
}

export function Feliz_CssEngine$1__transformRotateZ_5E38073B(_, deg) {
    return _.mk("transform", ("rotateZ(" + deg.toString()) + "deg)");
}

export function Feliz_CssEngine$1__transformRotateZ_Z524259A4(_, deg) {
    return _.mk("transform", ("rotateZ(" + int32ToString(deg)) + "deg)");
}

export function Feliz_CssEngine$1__transformSkew_Z37302880(_, xAngle, yAngle) {
    return _.mk("transform", ((("skew(" + int32ToString(xAngle)) + "deg,") + int32ToString(yAngle)) + "deg)");
}

export function Feliz_CssEngine$1__transformSkew_7B00E9A0(_, xAngle, yAngle) {
    return _.mk("transform", ((("skew(" + xAngle.toString()) + "deg,") + yAngle.toString()) + "deg)");
}

export function Feliz_CssEngine$1__transformSkewX_Z524259A4(_, xAngle) {
    return _.mk("transform", ("skewX(" + int32ToString(xAngle)) + "deg)");
}

export function Feliz_CssEngine$1__transformSkewX_5E38073B(_, xAngle) {
    return _.mk("transform", ("skewX(" + xAngle.toString()) + "deg)");
}

export function Feliz_CssEngine$1__transformSkewY_Z524259A4(_, xAngle) {
    return _.mk("transform", ("skewY(" + int32ToString(xAngle)) + "deg)");
}

export function Feliz_CssEngine$1__transformSkewY_5E38073B(_, xAngle) {
    return _.mk("transform", ("skewY(" + xAngle.toString()) + "deg)");
}

export function Feliz_CssEngine$1__transformPerspective_Z524259A4(_, n) {
    return _.mk("transform", ("perspective(" + int32ToString(n)) + ")");
}

export function Feliz_CssEngine$1__get_transformInitial(_) {
    return _.mk("transform", "initial");
}

export function Feliz_CssEngine$1__get_transformInheritFromParent(_) {
    return _.mk("transform", "inherit");
}

export function Feliz_CssEngine$1__get_directionRightToLeft(_) {
    return _.mk("direction", "rtl");
}

export function Feliz_CssEngine$1__get_directionLeftToRight(_) {
    return _.mk("direction", "ltr");
}

export function Feliz_CssEngine$1__get_directionInitial(_) {
    return _.mk("direction", "initial");
}

export function Feliz_CssEngine$1__get_directionInheritFromParent(_) {
    return _.mk("direction", "inherit");
}

export function Feliz_CssEngine$1__get_emptyCellsShow(_) {
    return _.mk("empty-cells", "show");
}

export function Feliz_CssEngine$1__get_emptyCellsHide(_) {
    return _.mk("empty-cells", "hide");
}

export function Feliz_CssEngine$1__get_emptyCellsInitial(_) {
    return _.mk("empty-cells", "initial");
}

export function Feliz_CssEngine$1__get_emptyCellsInheritFromParent(_) {
    return _.mk("empty-cells", "inherit");
}

export function Feliz_CssEngine$1__get_animationDirectionNormal(_) {
    return _.mk("animation-direction", "normal");
}

export function Feliz_CssEngine$1__get_animationDirectionReverse(_) {
    return _.mk("animation-direction", "reverse");
}

export function Feliz_CssEngine$1__get_animationDirectionAlternate(_) {
    return _.mk("animation-direction", "alternate");
}

export function Feliz_CssEngine$1__get_animationDirectionAlternateReverse(_) {
    return _.mk("animation-direction", "alternate-reverse");
}

export function Feliz_CssEngine$1__get_animationDirectionInitial(_) {
    return _.mk("animation-direction", "initial");
}

export function Feliz_CssEngine$1__get_animationDirectionInheritFromParent(_) {
    return _.mk("animation-direction", "inherit");
}

export function Feliz_CssEngine$1__get_animationPlayStateRunning(_) {
    return _.mk("animation-play-state", "running");
}

export function Feliz_CssEngine$1__get_animationPlayStatePaused(_) {
    return _.mk("animation-play-state", "paused");
}

export function Feliz_CssEngine$1__get_animationPlayStateInitial(_) {
    return _.mk("animation-play-state", "initial");
}

export function Feliz_CssEngine$1__get_animationPlayStateInheritFromParent(_) {
    return _.mk("animation-play-state", "inherit");
}

export function Feliz_CssEngine$1__get_animationIterationCountInfinite(_) {
    return _.mk("animation-iteration-count", "infinite");
}

export function Feliz_CssEngine$1__get_animationIterationCountInitial(_) {
    return _.mk("animation-iteration-count", "initial");
}

export function Feliz_CssEngine$1__get_animationIterationCountInheritFromParent(_) {
    return _.mk("animation-iteration-count", "inherit");
}

export function Feliz_CssEngine$1__get_animationFillModeNone(_) {
    return _.mk("animation-fill-mode", "none");
}

export function Feliz_CssEngine$1__get_animationFillModeForwards(_) {
    return _.mk("animation-fill-mode", "forwards");
}

export function Feliz_CssEngine$1__get_animationFillModeBackwards(_) {
    return _.mk("animation-fill-mode", "backwards");
}

export function Feliz_CssEngine$1__get_animationFillModeBoth(_) {
    return _.mk("animation-fill-mode", "both");
}

export function Feliz_CssEngine$1__get_animationFillModeInitial(_) {
    return _.mk("animation-fill-mode", "initial");
}

export function Feliz_CssEngine$1__get_animationFillModeInheritFromParent(_) {
    return _.mk("animation-fill-mode", "inherit");
}

export function Feliz_CssEngine$1__backgroundRepeat_Z4821AA33(_, repeat) {
    return _.mk("background-repeat", repeat);
}

export function Feliz_CssEngine$1__get_backgroundRepeatRepeat(_) {
    return _.mk("background-repeat", "repeat");
}

export function Feliz_CssEngine$1__get_backgroundRepeatRepeatX(_) {
    return _.mk("background-repeat", "repeat-x");
}

export function Feliz_CssEngine$1__get_backgroundRepeatRepeatY(_) {
    return _.mk("background-repeat", "repeat-y");
}

export function Feliz_CssEngine$1__get_backgroundRepeatNoRepeat(_) {
    return _.mk("background-repeat", "no-repeat");
}

export function Feliz_CssEngine$1__get_backgroundRepeatInitial(_) {
    return _.mk("background-repeat", "initial");
}

export function Feliz_CssEngine$1__get_backgroundRepeatInheritFromParent(_) {
    return _.mk("background-repeat", "inherit");
}

export function Feliz_CssEngine$1__get_positionDefaultStatic(_) {
    return _.mk("position", "static");
}

export function Feliz_CssEngine$1__get_positionAbsolute(_) {
    return _.mk("position", "absolute");
}

export function Feliz_CssEngine$1__get_positionFixed(_) {
    return _.mk("position", "fixed");
}

export function Feliz_CssEngine$1__get_positionRelative(_) {
    return _.mk("position", "relative");
}

export function Feliz_CssEngine$1__get_positionSticky(_) {
    return _.mk("position", "sticky");
}

export function Feliz_CssEngine$1__get_positionInitial(_) {
    return _.mk("position", "initial");
}

export function Feliz_CssEngine$1__get_positionInheritFromParent(_) {
    return _.mk("position", "inherit");
}

export function Feliz_CssEngine$1__get_boxSizingContentBox(_) {
    return _.mk("box-sizing", "content-box");
}

export function Feliz_CssEngine$1__get_boxSizingBorderBox(_) {
    return _.mk("box-sizing", "border-box");
}

export function Feliz_CssEngine$1__get_boxSizingInitial(_) {
    return _.mk("box-sizing", "initial");
}

export function Feliz_CssEngine$1__get_boxSizingInheritFromParent(_) {
    return _.mk("box-sizing", "inherit");
}

export function Feliz_CssEngine$1__get_resizeNone(_) {
    return _.mk("resize", "none");
}

export function Feliz_CssEngine$1__get_resizeBoth(_) {
    return _.mk("resize", "both");
}

export function Feliz_CssEngine$1__get_resizeHorizontal(_) {
    return _.mk("resize", "horizontal");
}

export function Feliz_CssEngine$1__get_resizeVertical(_) {
    return _.mk("resize", "vertical");
}

export function Feliz_CssEngine$1__get_resizeBlock(_) {
    return _.mk("resize", "block");
}

export function Feliz_CssEngine$1__get_resizeInline$0027(_) {
    return _.mk("resize", "inline");
}

export function Feliz_CssEngine$1__get_resizeInitial(_) {
    return _.mk("resize", "initial");
}

export function Feliz_CssEngine$1__get_resizeInheritFromParent(_) {
    return _.mk("resize", "inherit");
}

export function Feliz_CssEngine$1__get_textAlignLeft(_) {
    return _.mk("text-align", "left");
}

export function Feliz_CssEngine$1__get_textAlignRight(_) {
    return _.mk("text-align", "right");
}

export function Feliz_CssEngine$1__get_textAlignCenter(_) {
    return _.mk("text-align", "center");
}

export function Feliz_CssEngine$1__get_textAlignJustify(_) {
    return _.mk("text-align", "justify");
}

export function Feliz_CssEngine$1__get_textAlignInitial(_) {
    return _.mk("text-align", "initial");
}

export function Feliz_CssEngine$1__get_textAlignInheritFromParent(_) {
    return _.mk("text-align", "inherit");
}

export function Feliz_CssEngine$1__get_displayInlineElement(_) {
    return _.mk("display", "inline");
}

export function Feliz_CssEngine$1__get_displayBlock(_) {
    return _.mk("display", "block");
}

export function Feliz_CssEngine$1__get_displayContents(_) {
    return _.mk("display", "contents");
}

export function Feliz_CssEngine$1__get_displayFlex(_) {
    return _.mk("display", "flex");
}

export function Feliz_CssEngine$1__get_displayFlowRoot(_) {
    return _.mk("display", "flow-root");
}

export function Feliz_CssEngine$1__get_displayGrid(_) {
    return _.mk("display", "grid");
}

export function Feliz_CssEngine$1__get_displayInlineBlock(_) {
    return _.mk("display", "inline-block");
}

export function Feliz_CssEngine$1__get_displayInlineFlex(_) {
    return _.mk("display", "inline-flex");
}

export function Feliz_CssEngine$1__get_displayInlineGrid(_) {
    return _.mk("display", "inline-grid");
}

export function Feliz_CssEngine$1__get_displayInlineTable(_) {
    return _.mk("display", "inline-table");
}

export function Feliz_CssEngine$1__get_displayListItem(_) {
    return _.mk("display", "list-item");
}

export function Feliz_CssEngine$1__get_displayRunIn(_) {
    return _.mk("display", "run-in");
}

export function Feliz_CssEngine$1__get_displayTable(_) {
    return _.mk("display", "table");
}

export function Feliz_CssEngine$1__get_displayTableCaption(_) {
    return _.mk("display", "table-caption");
}

export function Feliz_CssEngine$1__get_displayTableColumnGroup(_) {
    return _.mk("display", "table-column-group");
}

export function Feliz_CssEngine$1__get_displayTableHeaderGroup(_) {
    return _.mk("display", "table-header-group");
}

export function Feliz_CssEngine$1__get_displayTableFooterGroup(_) {
    return _.mk("display", "table-footer-group");
}

export function Feliz_CssEngine$1__get_displayTableRowGroup(_) {
    return _.mk("display", "table-row-group");
}

export function Feliz_CssEngine$1__get_displayTableCell(_) {
    return _.mk("display", "table-cell");
}

export function Feliz_CssEngine$1__get_displayTableColumn(_) {
    return _.mk("display", "table-column");
}

export function Feliz_CssEngine$1__get_displayTableRow(_) {
    return _.mk("display", "table-row");
}

export function Feliz_CssEngine$1__get_displayNone(_) {
    return _.mk("display", "none");
}

export function Feliz_CssEngine$1__get_displayInitial(_) {
    return _.mk("display", "initial");
}

export function Feliz_CssEngine$1__get_displayInheritFromParent(_) {
    return _.mk("display", "inherit");
}

export function Feliz_CssEngine$1__zIndex_Z524259A4(_, value) {
    return _.mk("z-index", int32ToString(value));
}

export function Feliz_CssEngine$1__margin_Z524259A4(_, value) {
    return _.mk("margin", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__margin_Z445F6BAF(_, value) {
    return _.mk("margin", value);
}

export function Feliz_CssEngine$1__margin_Z37302880(_, vertical, horizonal) {
    return _.mk("margin", ((int32ToString(vertical) + "px ") + int32ToString(horizonal)) + "px");
}

export function Feliz_CssEngine$1__margin_Z6BEC75E0(_, vertical, horizonal) {
    return _.mk("margin", (vertical + " ") + horizonal);
}

export function Feliz_CssEngine$1__margin_Z6C21C500(_, top, right, bottom, left) {
    return _.mk("margin", ((((((int32ToString(top) + "px ") + int32ToString(right)) + "px ") + int32ToString(bottom)) + "px ") + int32ToString(left)) + "px");
}

export function Feliz_CssEngine$1__margin_Z15F0C340(_, top, right, bottom, left) {
    return _.mk("margin", (((((top + " ") + right) + " ") + bottom) + " ") + left);
}

export function Feliz_CssEngine$1__marginLeft_Z524259A4(_, value) {
    return _.mk("margin-left", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__marginLeft_Z445F6BAF(_, value) {
    return _.mk("margin-left", value);
}

export function Feliz_CssEngine$1__marginRight_Z524259A4(_, value) {
    return _.mk("margin-right", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__marginRight_Z445F6BAF(_, value) {
    return _.mk("margin-right", value);
}

export function Feliz_CssEngine$1__marginTop_Z524259A4(_, value) {
    return _.mk("margin-top", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__marginTop_Z445F6BAF(_, value) {
    return _.mk("margin-top", value);
}

export function Feliz_CssEngine$1__marginBottom_Z524259A4(_, value) {
    return _.mk("margin-bottom", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__marginBottom_Z445F6BAF(_, value) {
    return _.mk("margin-bottom", value);
}

export function Feliz_CssEngine$1__padding_Z524259A4(_, value) {
    return _.mk("padding", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__padding_Z445F6BAF(_, value) {
    return _.mk("padding", value);
}

export function Feliz_CssEngine$1__padding_Z6BEC75E0(_, vertical, horizontal) {
    return _.mk("padding", (vertical + " ") + horizontal);
}

export function Feliz_CssEngine$1__padding_Z15F0C340(_, top, right, bottom, left) {
    return _.mk("padding", (((((top + " ") + right) + " ") + bottom) + " ") + left);
}

export function Feliz_CssEngine$1__paddingBottom_Z524259A4(_, value) {
    return _.mk("padding-bottom", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__paddingBottom_Z445F6BAF(_, value) {
    return _.mk("padding-bottom", value);
}

export function Feliz_CssEngine$1__paddingLeft_Z524259A4(_, value) {
    return _.mk("padding-left", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__paddingLeft_Z445F6BAF(_, value) {
    return _.mk("padding-left", value);
}

export function Feliz_CssEngine$1__paddingRight_Z524259A4(_, value) {
    return _.mk("padding-right", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__paddingRight_Z445F6BAF(_, value) {
    return _.mk("padding-right", value);
}

export function Feliz_CssEngine$1__paddingTop_Z524259A4(_, value) {
    return _.mk("padding-top", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__paddingTop_Z445F6BAF(_, value) {
    return _.mk("padding-top", value);
}

export function Feliz_CssEngine$1__flexShrink_Z524259A4(_, value) {
    return _.mk("flex-shrink", int32ToString(value));
}

export function Feliz_CssEngine$1__flexBasis_Z524259A4(_, value) {
    return _.mk("flex-basis", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__flexBasis_Z445F6BAF(_, value) {
    return _.mk("flex-basis", value);
}

export function Feliz_CssEngine$1__flexGrow_Z524259A4(_, value) {
    return _.mk("flex-grow", int32ToString(value));
}

export function Feliz_CssEngine$1__flex_Z471D752F(_, grow, shrink, basis) {
    let x_1, x_4;
    return _.mk("flex", (((int32ToString(grow) + " ") + ((x_1 = shrink, (x_1 == null) ? "" : int32ToString(x_1)))) + " ") + ((x_4 = basis, (x_4 == null) ? "" : x_4)));
}

export function Feliz_CssEngine$1__flex_Z721C83C5(_, value) {
    return _.mk("flex", value);
}

export function Feliz_CssEngine$1__gridTemplateColumns_Z5D8246D(_, value) {
    return _.mk("grid-template-columns", join(" ", map_1((arg) => (int32ToString(arg) + "px"), value)));
}

export function Feliz_CssEngine$1__gridTemplateColumns_Z3A80A702(_, value) {
    return _.mk("grid-template-columns", join(" ", map_1((arg00) => arg00, value)));
}

export function Feliz_CssEngine$1__gridTemplateColumns_Z40D2EFDA(_, value) {
    return _.mk("grid-template-columns", join(" ", map_1((arg00) => arg00, value)));
}

export function Feliz_CssEngine$1__gridTemplateColumns_Z6447C5FD(_, count, size, areaName) {
    const areaName_1 = (areaName == null) ? "" : ((" [" + areaName) + "]");
    return _.mk("grid-template-columns", (((("repeat(" + int32ToString(count)) + ", ") + size) + areaName_1) + ")");
}

export function Feliz_CssEngine$1__gridTemplateRows_Z5D8246D(_, value) {
    return _.mk("grid-template-rows", join(" ", map_1((arg) => (int32ToString(arg) + "px"), value)));
}

export function Feliz_CssEngine$1__gridTemplateRows_Z3A80A702(_, value) {
    return _.mk("grid-template-rows", join(" ", map_1((arg00) => arg00, value)));
}

export function Feliz_CssEngine$1__gridTemplateRows_Z40D2EFDA(_, value) {
    return _.mk("grid-template-rows", join(" ", map_1((arg00) => arg00, value)));
}

export function Feliz_CssEngine$1__gridTemplateRows_Z6447C5FD(_, count, size, areaName) {
    const areaName_1 = (areaName == null) ? "" : ((" [" + areaName) + "]");
    return _.mk("grid-template-rows", (((("repeat(" + int32ToString(count)) + ", ") + size) + areaName_1) + ")");
}

export function Feliz_CssEngine$1__gridTemplateAreas_Z7F4D45E5(_, value) {
    return _.mk("grid-template-areas", join("\n", map((arg) => (("\u0027" + join(" ", arg)) + "\u0027"), value)));
}

export function Feliz_CssEngine$1__gridTemplateAreas_Z707F2385(_, value) {
    return _.mk("grid-template-areas", join("\n", map_2((arg) => (("\u0027" + join(" ", arg)) + "\u0027"), value)));
}

export function Feliz_CssEngine$1__gridTemplateAreas_5D66A394(_, value) {
    return _.mk("grid-template-areas", ("\u0027" + join(" ", value)) + "\u0027");
}

export function Feliz_CssEngine$1__columnGap_Z524259A4(_, value) {
    return _.mk("column-gap", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__columnGap_Z445F6BAF(_, value) {
    return _.mk("column-gap", value);
}

export function Feliz_CssEngine$1__rowGap_Z524259A4(_, value) {
    return _.mk("row-gap", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__rowGap_Z445F6BAF(_, value) {
    return _.mk("row-gap", value);
}

export function Feliz_CssEngine$1__gap_Z6BEC75E0(_, rowGap, columnGap) {
    return _.mk("gap", (rowGap + " ") + columnGap);
}

export function Feliz_CssEngine$1__gap_Z445F6BAF(_, rowColumnGap) {
    return _.mk("gap", (rowColumnGap + " ") + rowColumnGap);
}

export function Feliz_CssEngine$1__gridColumnStart_4E529C32(_, value, count) {
    let x_1;
    return _.mk("grid-column-start", (value + " ") + ((x_1 = count, (x_1 == null) ? "" : int32ToString(x_1))));
}

export function Feliz_CssEngine$1__gridColumnStart_Z524259A4(_, value) {
    return _.mk("grid-column-start", int32ToString(value));
}

export function Feliz_CssEngine$1__gridColumnStart_1E159F80(_, value) {
    return _.mk("grid-column-start", value);
}

export function Feliz_CssEngine$1__gridColumnEnd_4E529C32(_, value, count) {
    let x_1;
    return _.mk("grid-column-end", (value + " ") + ((x_1 = count, (x_1 == null) ? "" : int32ToString(x_1))));
}

export function Feliz_CssEngine$1__gridColumnEnd_Z524259A4(_, value) {
    return _.mk("grid-column-end", int32ToString(value));
}

export function Feliz_CssEngine$1__gridColumnEnd_1E159F80(_, value) {
    return _.mk("grid-column-end", value);
}

export function Feliz_CssEngine$1__gridRowStart_4E529C32(_, value, count) {
    let x_1;
    return _.mk("grid-row-start", (value + " ") + ((x_1 = count, (x_1 == null) ? "" : int32ToString(x_1))));
}

export function Feliz_CssEngine$1__gridRowStart_Z524259A4(_, value) {
    return _.mk("grid-row-start", int32ToString(value));
}

export function Feliz_CssEngine$1__gridRowStart_1E159F80(_, value) {
    return _.mk("grid-row-start", value);
}

export function Feliz_CssEngine$1__gridRowEnd_4E529C32(_, value, count) {
    let x_1;
    return _.mk("grid-row-end", (value + " ") + ((x_1 = count, (x_1 == null) ? "" : int32ToString(x_1))));
}

export function Feliz_CssEngine$1__gridRowEnd_Z524259A4(_, value) {
    return _.mk("grid-row-end", int32ToString(value));
}

export function Feliz_CssEngine$1__gridRowEnd_1E159F80(_, value) {
    return _.mk("grid-row-end", value);
}

export function Feliz_CssEngine$1__gridColumn_Z384F8060(_, start, end$0027) {
    return _.mk("grid-column", (start + " / ") + end$0027);
}

export function Feliz_CssEngine$1__gridColumn_Z37302880(_, start, end$0027) {
    return _.mk("grid-column", (int32ToString(start) + " / ") + int32ToString(end$0027));
}

export function Feliz_CssEngine$1__gridColumn_Z123F000(_, start, end$0027) {
    return _.mk("grid-column", (start + " / ") + end$0027);
}

export function Feliz_CssEngine$1__gridRow_Z384F8060(_, start, end$0027) {
    return _.mk("grid-row", (start + " / ") + end$0027);
}

export function Feliz_CssEngine$1__gridRow_Z37302880(_, start, end$0027) {
    return _.mk("grid-row", (int32ToString(start) + " / ") + int32ToString(end$0027));
}

export function Feliz_CssEngine$1__gridRow_Z123F000(_, start, end$0027) {
    return _.mk("grid-row", (start + " / ") + end$0027);
}

export function Feliz_CssEngine$1__gridArea_Z721C83C5(_, value) {
    return _.mk("grid-area", value);
}

export function Feliz_CssEngine$1__gridTemplate_Z721C83C5(_, value) {
    return _.mk("grid-template", value);
}

export function Feliz_CssEngine$1__transition_Z721C83C5(_, value) {
    return _.mk("transition", value);
}

export function Feliz_CssEngine$1__transitionDuration_Z342822E9(_, timespan) {
    return _.mk("transition-duration", timespan.toString() + "ms");
}

export function Feliz_CssEngine$1__transitionDurationSeconds_5E38073B(_, n) {
    return _.mk("transition-duration", n.toString() + "s");
}

export function Feliz_CssEngine$1__transitionDurationMilliseconds_5E38073B(_, n) {
    return _.mk("transition-duration", n.toString() + "ms");
}

export function Feliz_CssEngine$1__transitionDurationSeconds_Z524259A4(_, n) {
    return _.mk("transition-duration", int32ToString(n) + "s");
}

export function Feliz_CssEngine$1__transitionDurationMilliseconds_Z524259A4(_, n) {
    return _.mk("transition-duration", int32ToString(n) + "ms");
}

export function Feliz_CssEngine$1__transitionDelay_Z342822E9(_, timespan) {
    return _.mk("transition-delay", timespan.toString() + "ms");
}

export function Feliz_CssEngine$1__transitionDelaySeconds_5E38073B(_, n) {
    return _.mk("transition-delay", n.toString() + "s");
}

export function Feliz_CssEngine$1__transitionDelayMilliseconds_5E38073B(_, n) {
    return _.mk("transition-delay", n.toString() + "ms");
}

export function Feliz_CssEngine$1__transitionDelaySeconds_Z524259A4(_, n) {
    return _.mk("transition-delay", int32ToString(n) + "s");
}

export function Feliz_CssEngine$1__transitionDelayMilliseconds_Z524259A4(_, n) {
    return _.mk("transition-delay", int32ToString(n) + "ms");
}

export function Feliz_CssEngine$1__transitionProperty_2178599A(_, ...properties) {
    return _.mk("transition-property", join(",", map_2((arg00) => arg00, properties)));
}

export function Feliz_CssEngine$1__transitionProperty_4627EF76(_, properties) {
    return _.mk("transition-property", join(",", map((arg00) => arg00, properties)));
}

export function Feliz_CssEngine$1__transitionProperty_419E153C(_, property) {
    return _.mk("transition-property", property);
}

export function Feliz_CssEngine$1__transitionProperty_Z721C83C5(_, property) {
    return _.mk("transition-property", property);
}

export function Feliz_CssEngine$1__fontSize_Z524259A4(_, size) {
    return _.mk("font-size", int32ToString(size) + "px");
}

export function Feliz_CssEngine$1__fontSize_Z445F6BAF(_, size) {
    return _.mk("font-size", size);
}

export function Feliz_CssEngine$1__lineHeight_Z524259A4(_, size) {
    return _.mk("line-height", int32ToString(size) + "px");
}

export function Feliz_CssEngine$1__lineHeight_Z445F6BAF(_, size) {
    return _.mk("line-height", size);
}

export function Feliz_CssEngine$1__backgroundColor_Z721C83C5(_, color) {
    return _.mk("background-color", color);
}

export function Feliz_CssEngine$1__caretColor_Z721C83C5(_, color) {
    return _.mk("caret-color", color);
}

export function Feliz_CssEngine$1__color_Z721C83C5(_, color) {
    return _.mk("color", color);
}

export function Feliz_CssEngine$1__top_Z524259A4(_, value) {
    return _.mk("top", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__top_Z445F6BAF(_, value) {
    return _.mk("top", value);
}

export function Feliz_CssEngine$1__bottom_Z524259A4(_, value) {
    return _.mk("bottom", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__bottom_Z445F6BAF(_, value) {
    return _.mk("bottom", value);
}

export function Feliz_CssEngine$1__left_Z524259A4(_, value) {
    return _.mk("left", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__left_Z445F6BAF(_, value) {
    return _.mk("left", value);
}

export function Feliz_CssEngine$1__right_Z524259A4(_, value) {
    return _.mk("right", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__right_Z445F6BAF(_, value) {
    return _.mk("right", value);
}

export function Feliz_CssEngine$1__borderBottom_Z6C024E7B(_, width, style, color) {
    return _.mk("border-bottom", (((width + " ") + style) + " ") + color);
}

export function Feliz_CssEngine$1__outlineOffset_Z524259A4(_, offset) {
    return _.mk("outline-width", int32ToString(offset) + "px");
}

export function Feliz_CssEngine$1__outlineOffset_Z445F6BAF(_, offset) {
    return _.mk("outline-width", offset);
}

export function Feliz_CssEngine$1__outlineColor_Z721C83C5(_, color) {
    return _.mk("outline-color", color);
}

export function Feliz_CssEngine$1__borderLeft_Z6C024E7B(_, width, style, color) {
    return _.mk("border-left", (((width + " ") + style) + " ") + color);
}

export function Feliz_CssEngine$1__borderRight_Z6C024E7B(_, width, style, color) {
    return _.mk("border-right", (((width + " ") + style) + " ") + color);
}

export function Feliz_CssEngine$1__borderTop_Z6C024E7B(_, width, style, color) {
    return _.mk("border-top", (((width + " ") + style) + " ") + color);
}

export function Feliz_CssEngine$1__borderBottomStyle_61CE138F(_, style) {
    return _.mk("border-bottom-style", style);
}

export function Feliz_CssEngine$1__borderBottomWidth_Z524259A4(_, width) {
    return _.mk("border-bottom-width", int32ToString(width) + "px");
}

export function Feliz_CssEngine$1__borderBottomWidth_Z445F6BAF(_, width) {
    return _.mk("border-bottom-width", width);
}

export function Feliz_CssEngine$1__borderBottomColor_Z721C83C5(_, color) {
    return _.mk("border-bottom-color", color);
}

export function Feliz_CssEngine$1__borderTopStyle_61CE138F(_, style) {
    return _.mk("border-top-style", style);
}

export function Feliz_CssEngine$1__borderTopWidth_Z524259A4(_, width) {
    return _.mk("border-top-width", int32ToString(width) + "px");
}

export function Feliz_CssEngine$1__borderTopWidth_Z445F6BAF(_, width) {
    return _.mk("border-top-width", width);
}

export function Feliz_CssEngine$1__borderTopColor_Z721C83C5(_, color) {
    return _.mk("border-top-color", color);
}

export function Feliz_CssEngine$1__borderRightStyle_61CE138F(_, style) {
    return _.mk("border-right-style", style);
}

export function Feliz_CssEngine$1__borderRightWidth_Z524259A4(_, width) {
    return _.mk("border-right-width", int32ToString(width) + "px");
}

export function Feliz_CssEngine$1__borderRightWidth_Z445F6BAF(_, width) {
    return _.mk("border-right-width", width);
}

export function Feliz_CssEngine$1__borderRightColor_Z721C83C5(_, color) {
    return _.mk("border-right-color", color);
}

export function Feliz_CssEngine$1__borderLeftStyle_61CE138F(_, style) {
    return _.mk("border-left-style", style);
}

export function Feliz_CssEngine$1__borderLeftWidth_Z524259A4(_, width) {
    return _.mk("border-left-width", int32ToString(width) + "px");
}

export function Feliz_CssEngine$1__borderLeftWidth_Z445F6BAF(_, width) {
    return _.mk("border-left-width", width);
}

export function Feliz_CssEngine$1__borderLeftColor_Z721C83C5(_, color) {
    return _.mk("border-left-color", color);
}

export function Feliz_CssEngine$1__border_Z6C024E7B(_, width, style, color) {
    return _.mk("border", (((width + " ") + style) + " ") + color);
}

export function Feliz_CssEngine$1__border_12DC6EAF(_, width, style, color) {
    return _.mk("border", (((width + " ") + style) + " ") + color);
}

export function Feliz_CssEngine$1__borderColor_Z721C83C5(_, color) {
    return _.mk("border-color", color);
}

export function Feliz_CssEngine$1__borderRadius_Z524259A4(_, radius) {
    return _.mk("border-radius", int32ToString(radius) + "px");
}

export function Feliz_CssEngine$1__borderRadius_Z445F6BAF(_, radius) {
    return _.mk("border-radius", radius);
}

export function Feliz_CssEngine$1__borderWidth_Z524259A4(_, width) {
    return _.mk("border-width", int32ToString(width) + "px");
}

export function Feliz_CssEngine$1__borderWidth_18A029B5(_, top, right) {
    return _.mk("border-width", top + ((right == null) ? "" : (" " + right)));
}

export function Feliz_CssEngine$1__borderWidth_66BC9F55(_, top, right, bottom, left) {
    return _.mk("border-width", ((((top + " ") + right) + " ") + bottom) + ((left == null) ? "" : (" " + left)));
}

export function Feliz_CssEngine$1__animationName_Z721C83C5(_, keyframeName) {
    return _.mk("animation-name", keyframeName);
}

export function Feliz_CssEngine$1__animationDuration_Z342822E9(_, timespan) {
    return _.mk("animation-duration", timespan.toString() + "ms");
}

export function Feliz_CssEngine$1__animationDuration_Z524259A4(_, seconds) {
    return _.mk("animation-duration", int32ToString(seconds) + "s");
}

export function Feliz_CssEngine$1__animationDelay_Z342822E9(_, timespan) {
    return _.mk("animation-delay", timespan.toString() + "ms");
}

export function Feliz_CssEngine$1__animationDelay_Z524259A4(_, seconds) {
    return _.mk("animation-delay", int32ToString(seconds) + "s");
}

export function Feliz_CssEngine$1__animationDurationCount_Z524259A4(_, count) {
    return _.mk("animation-duration-count", int32ToString(count));
}

export function Feliz_CssEngine$1__fontFamily_Z721C83C5(_, family) {
    return _.mk("font-family", family);
}

export function Feliz_CssEngine$1__textDecorationColor_Z721C83C5(_, color) {
    return _.mk("text-decoration-color", color);
}

export function Feliz_CssEngine$1__textIndent_Z524259A4(_, value) {
    return _.mk("text-indent", int32ToString(value));
}

export function Feliz_CssEngine$1__textIndent_Z721C83C5(_, value) {
    return _.mk("text-indent", value);
}

export function Feliz_CssEngine$1__opacity_5E38073B(_, value) {
    return _.mk("opacity", value.toString());
}

export function Feliz_CssEngine$1__minWidth_Z524259A4(_, value) {
    return _.mk("min-width", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__minWidth_Z445F6BAF(_, value) {
    return _.mk("min-width", value);
}

export function Feliz_CssEngine$1__minWidth_Z721C83C5(_, value) {
    return _.mk("min-width", value);
}

export function Feliz_CssEngine$1__maxWidth_Z524259A4(_, value) {
    return _.mk("max-width", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__maxWidth_Z445F6BAF(_, value) {
    return _.mk("max-width", value);
}

export function Feliz_CssEngine$1__width_Z524259A4(_, value) {
    return _.mk("width", int32ToString(value) + "px");
}

export function Feliz_CssEngine$1__width_Z445F6BAF(_, value) {
    return _.mk("width", value);
}

export function Feliz_CssEngine$1__backgroundImage_Z721C83C5(_, value) {
    return _.mk("background-image", value);
}

export function Feliz_CssEngine$1__backgroundImageUrl_Z721C83C5(_, value) {
    return _.mk("background-image", ("url(\u0027" + value) + "\u0027)");
}

export function Feliz_CssEngine$1__fill_Z721C83C5(_, color) {
    return _.mk("fill", color);
}

export function Feliz_color_hsl(hue, saturation, lightness) {
    return ((((("hsl(" + hue.toString()) + ",") + saturation.toString()) + "%,") + lightness.toString()) + "%)";
}

export function Feliz_color_rgb(r, g, b) {
    return ((((("rgb(" + int32ToString(r)) + ",") + int32ToString(g)) + ",") + int32ToString(b)) + ")";
}

export function Feliz_color_rgba(r, g, b, a) {
    return ((((((("rgba(" + int32ToString(r)) + ",") + int32ToString(g)) + ",") + int32ToString(b)) + ",") + a.toString()) + ")";
}

export class Feliz_length {
    constructor() {
    }
}

export function Feliz_length$reflection() {
    return class_type("Feliz.length", void 0, Feliz_length);
}

export function Feliz_length_get_zero() {
    return "0";
}

export function Feliz_length_px_Z524259A4(value) {
    return int32ToString(value) + "px";
}

export function Feliz_length_px_5E38073B(value) {
    return value.toString() + "px";
}

export function Feliz_length_cm_Z524259A4(value) {
    return int32ToString(value) + "cm";
}

export function Feliz_length_cm_5E38073B(value) {
    return value.toString() + "cm";
}

export function Feliz_length_mm_Z524259A4(value) {
    return int32ToString(value) + "mm";
}

export function Feliz_length_mm_5E38073B(value) {
    return value.toString() + "mm";
}

export function Feliz_length_inch_Z524259A4(value) {
    return int32ToString(value) + "in";
}

export function Feliz_length_inch_5E38073B(value) {
    return value.toString() + "in";
}

export function Feliz_length_pt_Z524259A4(value) {
    return int32ToString(value) + "pt";
}

export function Feliz_length_pt_5E38073B(value) {
    return value.toString() + "pt";
}

export function Feliz_length_pc_Z524259A4(value) {
    return int32ToString(value) + "pc";
}

export function Feliz_length_pc_5E38073B(value) {
    return value.toString() + "pc";
}

export function Feliz_length_em_Z524259A4(value) {
    return int32ToString(value) + "em";
}

export function Feliz_length_em_5E38073B(value) {
    return value.toString() + "em";
}

export function Feliz_length_ex_Z524259A4(value) {
    return int32ToString(value) + "ex";
}

export function Feliz_length_ex_5E38073B(value) {
    return value.toString() + "ex";
}

export function Feliz_length_ch_Z524259A4(value) {
    return int32ToString(value) + "ch";
}

export function Feliz_length_rem_5E38073B(value) {
    return value.toString() + "rem";
}

export function Feliz_length_rem_Z524259A4(value) {
    return int32ToString(value) + "rem";
}

export function Feliz_length_vh_Z524259A4(value) {
    return int32ToString(value) + "vh";
}

export function Feliz_length_vh_5E38073B(value) {
    return value.toString() + "vh";
}

export function Feliz_length_vw_Z524259A4(value) {
    return int32ToString(value) + "vw";
}

export function Feliz_length_vw_5E38073B(value) {
    return value.toString() + "vw";
}

export function Feliz_length_vmin_5E38073B(value) {
    return value.toString() + "vmin";
}

export function Feliz_length_vmin_Z524259A4(value) {
    return int32ToString(value) + "vmin";
}

export function Feliz_length_vmax_5E38073B(value) {
    return value.toString() + "vmax";
}

export function Feliz_length_vmax_Z524259A4(value) {
    return int32ToString(value) + "vmax";
}

export function Feliz_length_perc_Z524259A4(value) {
    return int32ToString(value) + "%";
}

export function Feliz_length_perc_5E38073B(value) {
    return value.toString() + "%";
}

export function Feliz_length_percent_Z524259A4(value) {
    return int32ToString(value) + "%";
}

export function Feliz_length_percent_5E38073B(value) {
    return value.toString() + "%";
}

export function Feliz_length_get_auto() {
    return "auto";
}

export function Feliz_length_calc_Z721C83C5(value) {
    return ("calc(" + value) + ")";
}

export function Feliz_length_fr_Z524259A4(value) {
    return int32ToString(value) + "fr";
}

export class Feliz_borderStyle {
    constructor() {
    }
}

export function Feliz_borderStyle$reflection() {
    return class_type("Feliz.borderStyle", void 0, Feliz_borderStyle);
}

export function Feliz_borderStyle_get_dashed() {
    return "dashed";
}

export function Feliz_borderStyle_get_dotted() {
    return "dotted";
}

export function Feliz_borderStyle_get_double() {
    return "double";
}

export function Feliz_borderStyle_get_groove() {
    return "groove";
}

export function Feliz_borderStyle_get_hidden() {
    return "hidden";
}

export function Feliz_borderStyle_get_inheritFromParent() {
    return "inherit";
}

export function Feliz_borderStyle_get_initial() {
    return "initial";
}

export function Feliz_borderStyle_get_inset() {
    return "inset";
}

export function Feliz_borderStyle_get_none() {
    return "none";
}

export function Feliz_borderStyle_get_outset() {
    return "outset";
}

export function Feliz_borderStyle_get_ridge() {
    return "ridge";
}

export function Feliz_borderStyle_get_solid() {
    return "solid";
}

export class Feliz_gridColumn {
    constructor() {
    }
}

export function Feliz_gridColumn$reflection() {
    return class_type("Feliz.gridColumn", void 0, Feliz_gridColumn);
}

export function Feliz_gridColumn_span_Z721C83C5(value) {
    return "span " + value;
}

export function Feliz_gridColumn_span_Z18115A39(value, count) {
    return (("span " + value) + " ") + int32ToString(count);
}

export function Feliz_gridColumn_span_Z524259A4(value) {
    return "span " + int32ToString(value);
}

export class Feliz_gridRow {
    constructor() {
    }
}

export function Feliz_gridRow$reflection() {
    return class_type("Feliz.gridRow", void 0, Feliz_gridRow);
}

export function Feliz_gridRow_span_Z721C83C5(value) {
    return "span " + value;
}

export function Feliz_gridRow_span_Z18115A39(value, count) {
    return (("span " + value) + " ") + int32ToString(count);
}

export function Feliz_gridRow_span_Z524259A4(value) {
    return "span " + int32ToString(value);
}

export class Feliz_grid {
    constructor() {
    }
}

export function Feliz_grid$reflection() {
    return class_type("Feliz.grid", void 0, Feliz_grid);
}

export function Feliz_grid_namedLine_Z721C83C5(value) {
    return ("[" + value) + "]";
}

export function Feliz_grid_namedLines_Z6B4C8463(value) {
    return ("[" + join(" ", value)) + "]";
}

export function Feliz_grid_namedLines_1334CEF1(value) {
    return ("[" + join(" ", value)) + "]";
}

export function Feliz_grid_templateWidth_Z445F6BAF(value) {
    return value;
}

export function Feliz_grid_templateWidth_Z524259A4(value) {
    return int32ToString(value) + "px";
}

export function Feliz_grid_templateWidth_5E38073B(value) {
    return value.toString() + "px";
}

export class Feliz_textDecorationLine {
    constructor() {
    }
}

export function Feliz_textDecorationLine$reflection() {
    return class_type("Feliz.textDecorationLine", void 0, Feliz_textDecorationLine);
}

export function Feliz_textDecorationLine_get_none() {
    return "none";
}

export function Feliz_textDecorationLine_get_underline() {
    return "underline";
}

export function Feliz_textDecorationLine_get_overline() {
    return "overline";
}

export function Feliz_textDecorationLine_get_lineThrough() {
    return "line-through";
}

export function Feliz_textDecorationLine_get_initial() {
    return "initial";
}

export function Feliz_textDecorationLine_get_inheritFromParent() {
    return "inherit";
}

export class Feliz_textDecorationStyle {
    constructor() {
    }
}

export function Feliz_textDecorationStyle$reflection() {
    return class_type("Feliz.textDecorationStyle", void 0, Feliz_textDecorationStyle);
}

export function Feliz_textDecorationStyle_get_solid() {
    return "solid";
}

export function Feliz_textDecorationStyle_get_double() {
    return "double";
}

export function Feliz_textDecorationStyle_get_dotted() {
    return "dotted";
}

export function Feliz_textDecorationStyle_get_dashed() {
    return "dashed";
}

export function Feliz_textDecorationStyle_get_wavy() {
    return "wavy";
}

export function Feliz_textDecorationStyle_get_initial() {
    return "initial";
}

export function Feliz_textDecorationStyle_get_inheritFromParent() {
    return "inherit";
}

export class Feliz_transform {
    constructor() {
    }
}

export function Feliz_transform$reflection() {
    return class_type("Feliz.transform", void 0, Feliz_transform);
}

export function Feliz_transform_get_none() {
    return "none";
}

export function Feliz_transform_matrix_48A24E80(x1, y1, z1, x2, y2, z2) {
    return ((((((((((("matrix(" + int32ToString(x1)) + ",") + int32ToString(y1)) + ",") + int32ToString(z1)) + ",") + int32ToString(x2)) + ",") + int32ToString(y2)) + ",") + int32ToString(z2)) + ")";
}

export function Feliz_transform_translate_Z37302880(x, y) {
    return ((("translate(" + int32ToString(x)) + "px,") + int32ToString(y)) + "px)";
}

export function Feliz_transform_translate_Z6BEC75E0(x, y) {
    return ((("translate(" + x) + ",") + y) + ")";
}

export function Feliz_transform_translate3D_4F7761DC(x, y, z) {
    return ((((("translate3d(" + int32ToString(x)) + "px,") + int32ToString(y)) + "px,") + int32ToString(z)) + "px)";
}

export function Feliz_transform_translate3D_Z52DBA58F(x, y, z) {
    return ((((("translate3d(" + x) + ",") + y) + ",") + z) + ")";
}

export function Feliz_transform_translateX_Z524259A4(x) {
    return ("translateX(" + int32ToString(x)) + "px)";
}

export function Feliz_transform_translateX_Z445F6BAF(x) {
    return ("translateX(" + x) + ")";
}

export function Feliz_transform_translateY_Z524259A4(y) {
    return ("translateY(" + int32ToString(y)) + "px)";
}

export function Feliz_transform_translateY_Z445F6BAF(y) {
    return ("translateY(" + y) + ")";
}

export function Feliz_transform_translateZ_Z524259A4(z) {
    return ("translateZ(" + int32ToString(z)) + "px)";
}

export function Feliz_transform_translateZ_Z445F6BAF(z) {
    return ("translateZ(" + z) + ")";
}

export function Feliz_transform_scale_Z37302880(x, y) {
    return ((("scale(" + int32ToString(x)) + ",") + int32ToString(y)) + ")";
}

export function Feliz_transform_scale_7B00E9A0(x, y) {
    return ((("scale(" + x.toString()) + ",") + y.toString()) + ")";
}

export function Feliz_transform_scale_Z524259A4(n) {
    return ("scale(" + int32ToString(n)) + ")";
}

export function Feliz_transform_scale_5E38073B(n) {
    return ("scale(" + n.toString()) + ")";
}

export function Feliz_transform_scale3D_4F7761DC(x, y, z) {
    return ((((("scale3d(" + int32ToString(x)) + ",") + int32ToString(y)) + ",") + int32ToString(z)) + ")";
}

export function Feliz_transform_scale3D_Z7AD9E565(x, y, z) {
    return ((((("scale3d(" + x.toString()) + ",") + y.toString()) + ",") + z.toString()) + ")";
}

export function Feliz_transform_scaleX_Z524259A4(x) {
    return ("scaleX(" + int32ToString(x)) + ")";
}

export function Feliz_transform_scaleX_5E38073B(x) {
    return ("scaleX(" + x.toString()) + ")";
}

export function Feliz_transform_scaleY_Z524259A4(y) {
    return ("scaleY(" + int32ToString(y)) + ")";
}

export function Feliz_transform_scaleY_5E38073B(y) {
    return ("scaleY(" + y.toString()) + ")";
}

export function Feliz_transform_scaleZ_Z524259A4(z) {
    return ("scaleZ(" + int32ToString(z)) + ")";
}

export function Feliz_transform_scaleZ_5E38073B(z) {
    return ("scaleZ(" + z.toString()) + ")";
}

export function Feliz_transform_rotate_Z524259A4(deg) {
    return ("rotate(" + int32ToString(deg)) + "deg)";
}

export function Feliz_transform_rotate_5E38073B(deg) {
    return ("rotate(" + deg.toString()) + "deg)";
}

export function Feliz_transform_rotateX_5E38073B(deg) {
    return ("rotateX(" + deg.toString()) + "deg)";
}

export function Feliz_transform_rotateX_Z524259A4(deg) {
    return ("rotateX(" + int32ToString(deg)) + "deg)";
}

export function Feliz_transform_rotateY_5E38073B(deg) {
    return ("rotateY(" + deg.toString()) + "deg)";
}

export function Feliz_transform_rotateY_Z524259A4(deg) {
    return ("rotateY(" + int32ToString(deg)) + "deg)";
}

export function Feliz_transform_rotateZ_5E38073B(deg) {
    return ("rotateZ(" + deg.toString()) + "deg)";
}

export function Feliz_transform_rotateZ_Z524259A4(deg) {
    return ("rotateZ(" + int32ToString(deg)) + "deg)";
}

export function Feliz_transform_skew_Z37302880(xAngle, yAngle) {
    return ((("skew(" + int32ToString(xAngle)) + "deg,") + int32ToString(yAngle)) + "deg)";
}

export function Feliz_transform_skew_7B00E9A0(xAngle, yAngle) {
    return ((("skew(" + xAngle.toString()) + "deg,") + yAngle.toString()) + "deg)";
}

export function Feliz_transform_skewX_Z524259A4(xAngle) {
    return ("skewX(" + int32ToString(xAngle)) + "deg)";
}

export function Feliz_transform_skewX_5E38073B(xAngle) {
    return ("skewX(" + xAngle.toString()) + "deg)";
}

export function Feliz_transform_skewY_Z524259A4(xAngle) {
    return ("skewY(" + int32ToString(xAngle)) + "deg)";
}

export function Feliz_transform_skewY_5E38073B(xAngle) {
    return ("skewY(" + xAngle.toString()) + "deg)";
}

export function Feliz_transform_perspective_Z524259A4(n) {
    return ("perspective(" + int32ToString(n)) + ")";
}

export class Feliz_transitionProperty {
    constructor() {
    }
}

export function Feliz_transitionProperty$reflection() {
    return class_type("Feliz.transitionProperty", void 0, Feliz_transitionProperty);
}

export function Feliz_transitionProperty_get_all() {
    return "all";
}

export function Feliz_transitionProperty_get_backdropFilter() {
    return "backdrop-filter";
}

export function Feliz_transitionProperty_get_background() {
    return "background";
}

export function Feliz_transitionProperty_get_backgroundColor() {
    return "background-color";
}

export function Feliz_transitionProperty_get_backgroundPosition() {
    return "background-position";
}

export function Feliz_transitionProperty_get_backgroundSize() {
    return "background-size";
}

export function Feliz_transitionProperty_get_border() {
    return "border";
}

export function Feliz_transitionProperty_get_borderBottom() {
    return "border-bottom";
}

export function Feliz_transitionProperty_get_borderBottomColor() {
    return "border-bottom-color";
}

export function Feliz_transitionProperty_get_borderBottomLeftRadius() {
    return "border-bottom-left-radius";
}

export function Feliz_transitionProperty_get_borderBottomRightRadius() {
    return "border-bottom-right-radius";
}

export function Feliz_transitionProperty_get_borderBottomWidth() {
    return "border-bottom-width";
}

export function Feliz_transitionProperty_get_borderColor() {
    return "border-color";
}

export function Feliz_transitionProperty_get_borderEndEndRadius() {
    return "border-end-end-radius";
}

export function Feliz_transitionProperty_get_borderEndStartRadius() {
    return "border-end-start-radius";
}

export function Feliz_transitionProperty_get_borderLeft() {
    return "border-left";
}

export function Feliz_transitionProperty_get_borderLeftColor() {
    return "border-left-color";
}

export function Feliz_transitionProperty_get_borderLeftWidth() {
    return "border-left-width";
}

export function Feliz_transitionProperty_get_borderRadius() {
    return "border-radius";
}

export function Feliz_transitionProperty_get_borderRight() {
    return "border-right";
}

export function Feliz_transitionProperty_get_borderRightColor() {
    return "border-right-color";
}

export function Feliz_transitionProperty_get_borderRightWidth() {
    return "border-right-width";
}

export function Feliz_transitionProperty_get_borderStartEndRadius() {
    return "border-start-end-radius";
}

export function Feliz_transitionProperty_get_borderStartStartRadius() {
    return "border-start-start-radius";
}

export function Feliz_transitionProperty_get_borderTop() {
    return "border-top";
}

export function Feliz_transitionProperty_get_borderTopColor() {
    return "border-top-color";
}

export function Feliz_transitionProperty_get_borderTopLeftRadius() {
    return "border-top-left-radius";
}

export function Feliz_transitionProperty_get_borderTopRightRadius() {
    return "border-top-right-radius";
}

export function Feliz_transitionProperty_get_borderTopWidth() {
    return "border-top-width";
}

export function Feliz_transitionProperty_get_borderWidth() {
    return "border-width";
}

export function Feliz_transitionProperty_get_bottom() {
    return "bottom";
}

export function Feliz_transitionProperty_get_boxShadow() {
    return "box-shadow";
}

export function Feliz_transitionProperty_get_caretColor() {
    return "caret-color";
}

export function Feliz_transitionProperty_get_clip() {
    return "clip";
}

export function Feliz_transitionProperty_get_clipPath() {
    return "clip-path";
}

export function Feliz_transitionProperty_get_color() {
    return "color";
}

export function Feliz_transitionProperty_get_columnCount() {
    return "column-count";
}

export function Feliz_transitionProperty_get_columnGap() {
    return "column-gap";
}

export function Feliz_transitionProperty_get_columnRule() {
    return "column-rule";
}

export function Feliz_transitionProperty_get_columnRuleColor() {
    return "column-rule-color";
}

export function Feliz_transitionProperty_get_columnRuleWidth() {
    return "column-rule-width";
}

export function Feliz_transitionProperty_get_columnWidth() {
    return "column-width";
}

export function Feliz_transitionProperty_get_columns() {
    return "columns";
}

export function Feliz_transitionProperty_get_filter() {
    return "filter";
}

export function Feliz_transitionProperty_get_flex() {
    return "flex";
}

export function Feliz_transitionProperty_get_flexBasis() {
    return "flex-basis";
}

export function Feliz_transitionProperty_get_flexGrow() {
    return "flex-grow";
}

export function Feliz_transitionProperty_get_flexShrink() {
    return "flex-shrink";
}

export function Feliz_transitionProperty_get_font() {
    return "font";
}

export function Feliz_transitionProperty_get_fontSize() {
    return "font-size";
}

export function Feliz_transitionProperty_get_fontSizeAdjust() {
    return "font-size-adjust";
}

export function Feliz_transitionProperty_get_fontStretch() {
    return "font-stretch";
}

export function Feliz_transitionProperty_get_fontVariationSettings() {
    return "font-variation-settings";
}

export function Feliz_transitionProperty_get_fontWeight() {
    return "font-weight";
}

export function Feliz_transitionProperty_get_gap() {
    return "gap";
}

export function Feliz_transitionProperty_get_gridColumnGap() {
    return "grid-column-gap";
}

export function Feliz_transitionProperty_get_gridGap() {
    return "grid-gap";
}

export function Feliz_transitionProperty_get_gridRowGap() {
    return "grid-row-gap";
}

export function Feliz_transitionProperty_get_gridTemplateColumns() {
    return "grid-template-columns";
}

export function Feliz_transitionProperty_get_gridTemplateRows() {
    return "grid-template-rows";
}

export function Feliz_transitionProperty_get_height() {
    return "height";
}

export function Feliz_transitionProperty_get_inset() {
    return "inset";
}

export function Feliz_transitionProperty_get_insetBlock() {
    return "inset-block";
}

export function Feliz_transitionProperty_get_insetBlockEnd() {
    return "inset-block-end";
}

export function Feliz_transitionProperty_get_insetBlockStart() {
    return "inset-block-start";
}

export function Feliz_transitionProperty_get_insetInline() {
    return "inset-inline";
}

export function Feliz_transitionProperty_get_insetInlineEnd() {
    return "inset-inline-end";
}

export function Feliz_transitionProperty_get_insetInlineStart() {
    return "inset-inline-start";
}

export function Feliz_transitionProperty_get_left() {
    return "left";
}

export function Feliz_transitionProperty_get_letterSpacing() {
    return "letter-spacing";
}

export function Feliz_transitionProperty_get_lineClamp() {
    return "line-clamp";
}

export function Feliz_transitionProperty_get_lineHeight() {
    return "line-height";
}

export function Feliz_transitionProperty_get_margin() {
    return "margin";
}

export function Feliz_transitionProperty_get_marginBottom() {
    return "margin-bottom";
}

export function Feliz_transitionProperty_get_marginLeft() {
    return "margin-left";
}

export function Feliz_transitionProperty_get_marginRight() {
    return "margin-right";
}

export function Feliz_transitionProperty_get_marginTop() {
    return "margin-top";
}

export function Feliz_transitionProperty_get_mask() {
    return "mask";
}

export function Feliz_transitionProperty_get_maskBorder() {
    return "mask-border";
}

export function Feliz_transitionProperty_get_maskPosition() {
    return "mask-position";
}

export function Feliz_transitionProperty_get_maskSize() {
    return "mask-size";
}

export function Feliz_transitionProperty_get_maxHeight() {
    return "max-height";
}

export function Feliz_transitionProperty_get_maxLines() {
    return "max-lines";
}

export function Feliz_transitionProperty_get_maxWidth() {
    return "max-width";
}

export function Feliz_transitionProperty_get_minHeight() {
    return "min-height";
}

export function Feliz_transitionProperty_get_minWidth() {
    return "min-width";
}

export function Feliz_transitionProperty_get_objectPosition() {
    return "object-position";
}

export function Feliz_transitionProperty_get_offset() {
    return "offset";
}

export function Feliz_transitionProperty_get_offsetAnchor() {
    return "offset-anchor";
}

export function Feliz_transitionProperty_get_offsetDistance() {
    return "offset-distance";
}

export function Feliz_transitionProperty_get_offsetPath() {
    return "offset-path";
}

export function Feliz_transitionProperty_get_offsetPosition() {
    return "offset-position";
}

export function Feliz_transitionProperty_get_offsetRotate() {
    return "offset-rotate";
}

export function Feliz_transitionProperty_get_opacity() {
    return "opacity";
}

export function Feliz_transitionProperty_get_order() {
    return "order";
}

export function Feliz_transitionProperty_get_outline() {
    return "outline";
}

export function Feliz_transitionProperty_get_outlineColor() {
    return "outline-color";
}

export function Feliz_transitionProperty_get_outlineOffset() {
    return "outline-offset";
}

export function Feliz_transitionProperty_get_outlineWidth() {
    return "outline-width";
}

export function Feliz_transitionProperty_get_padding() {
    return "padding";
}

export function Feliz_transitionProperty_get_paddingBottom() {
    return "padding-bottom";
}

export function Feliz_transitionProperty_get_paddingLeft() {
    return "padding-left";
}

export function Feliz_transitionProperty_get_paddingRight() {
    return "padding-right";
}

export function Feliz_transitionProperty_get_paddingTop() {
    return "padding-top";
}

export function Feliz_transitionProperty_get_perspective() {
    return "perspective";
}

export function Feliz_transitionProperty_get_perspectiveOrigin() {
    return "perspective-origin";
}

export function Feliz_transitionProperty_get_right() {
    return "right";
}

export function Feliz_transitionProperty_get_rotate() {
    return "rotate";
}

export function Feliz_transitionProperty_get_rowGap() {
    return "row-gap";
}

export function Feliz_transitionProperty_get_scale() {
    return "scale";
}

export function Feliz_transitionProperty_get_scrollMargin() {
    return "scroll-margin";
}

export function Feliz_transitionProperty_get_scrollMarginBlock() {
    return "scroll-margin-block";
}

export function Feliz_transitionProperty_get_scrollMarginBlockEnd() {
    return "scroll-margin-block-end";
}

export function Feliz_transitionProperty_get_scrollMarginBlockStart() {
    return "scroll-margin-block-start";
}

export function Feliz_transitionProperty_get_scrollMarginBottom() {
    return "scroll-margin-bottom";
}

export function Feliz_transitionProperty_get_scrollMarginInline() {
    return "scroll-margin-inline";
}

export function Feliz_transitionProperty_get_scrollMarginInlineEnd() {
    return "scroll-margin-inline-end";
}

export function Feliz_transitionProperty_get_scrollMarginInlineStart() {
    return "scroll-margin-inline-start";
}

export function Feliz_transitionProperty_get_scrollMarginLeft() {
    return "scroll-margin-left";
}

export function Feliz_transitionProperty_get_scrollMarginRight() {
    return "scroll-margin-right";
}

export function Feliz_transitionProperty_get_scrollMarginTop() {
    return "scroll-margin-top";
}

export function Feliz_transitionProperty_get_scrollPadding() {
    return "scroll-padding";
}

export function Feliz_transitionProperty_get_scrollPaddingBlock() {
    return "scroll-padding-block";
}

export function Feliz_transitionProperty_get_scrollPaddingBlockEnd() {
    return "scroll-padding-block-end";
}

export function Feliz_transitionProperty_get_scrollPaddingBlockStart() {
    return "scroll-padding-block-start";
}

export function Feliz_transitionProperty_get_scrollPaddingBottom() {
    return "scroll-padding-bottom";
}

export function Feliz_transitionProperty_get_scrollPaddingInline() {
    return "scroll-padding-inline";
}

export function Feliz_transitionProperty_get_scrollPaddingInlineEnd() {
    return "scroll-padding-inline-end";
}

export function Feliz_transitionProperty_get_scrollPaddingInlineStart() {
    return "scroll-padding-inline-start";
}

export function Feliz_transitionProperty_get_scrollPaddingLeft() {
    return "scroll-padding-left";
}

export function Feliz_transitionProperty_get_scrollPaddingRight() {
    return "scroll-padding-right";
}

export function Feliz_transitionProperty_get_scrollPaddingTop() {
    return "scroll-padding-top";
}

export function Feliz_transitionProperty_get_scrollSnapCoordinate() {
    return "scroll-snap-coordinate";
}

export function Feliz_transitionProperty_get_scrollSnapDestination() {
    return "scroll-snap-destination";
}

export function Feliz_transitionProperty_get_scrollbarColor() {
    return "scrollbar-color";
}

export function Feliz_transitionProperty_get_shapeImageThreshold() {
    return "shape-image-threshold";
}

export function Feliz_transitionProperty_get_shapeMargin() {
    return "shape-margin";
}

export function Feliz_transitionProperty_get_shapeOutside() {
    return "shape-outside";
}

export function Feliz_transitionProperty_get_tabSize() {
    return "tab-size";
}

export function Feliz_transitionProperty_get_textDecoration() {
    return "text-decoration";
}

export function Feliz_transitionProperty_get_textDecorationColor() {
    return "text-decoration-color";
}

export function Feliz_transitionProperty_get_textEmphasis() {
    return "text-emphasis";
}

export function Feliz_transitionProperty_get_textEmphasisColor() {
    return "text-emphasis-color";
}

export function Feliz_transitionProperty_get_textIndent() {
    return "text-indent";
}

export function Feliz_transitionProperty_get_textShadow() {
    return "text-shadow";
}

export function Feliz_transitionProperty_get_top() {
    return "top";
}

export function Feliz_transitionProperty_get_transform() {
    return "transform";
}

export function Feliz_transitionProperty_get_transformOrigin() {
    return "transform-origin";
}

export function Feliz_transitionProperty_get_translate() {
    return "translate";
}

export function Feliz_transitionProperty_get_verticalAlign() {
    return "vertical-align";
}

export function Feliz_transitionProperty_get_visibility() {
    return "visibility";
}

export function Feliz_transitionProperty_get_width() {
    return "width";
}

export function Feliz_transitionProperty_get_wordSpacing() {
    return "word-spacing";
}

export function Feliz_transitionProperty_get_zIndex() {
    return "z-index";
}

export function Feliz_transitionProperty_get_zoom() {
    return "zoom";
}

