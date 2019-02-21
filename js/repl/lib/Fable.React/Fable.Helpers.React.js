import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { array, float64, int32, bool, obj, record, lambda, unit, type, union, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { uncurry, createObj } from "../fable-library.2.2.0-beta-010/Util.js";
import { ofList as ofList$$1 } from "../fable-library.2.2.0-beta-010/Array.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
const Fragment = React.Fragment,
      memo = React.memo,
      createElement$$1 = React.createElement;
const render$$4 = ReactDOM.render;
export const Props$002EFragmentProp = declare(function Fable_Helpers_React_Props_FragmentProp(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002EFragmentProp$reflection() {
  return union("Fable.Helpers.React.Props.FragmentProp", [], Props$002EFragmentProp, () => [["Key", [string]]]);
}
export const Props$002EProp = declare(function Fable_Helpers_React_Props_Prop(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002EProp$reflection() {
  return union("Fable.Helpers.React.Props.Prop", [], Props$002EProp, () => [["Key", [string]], ["Ref", [lambda(type("Fable.Import.Browser.Element"), unit)]]]);
}
export const Props$002EDangerousHtml = declare(function Fable_Helpers_React_Props_DangerousHtml(arg1) {
  this.__html = arg1;
}, Record);
export function Props$002EDangerousHtml$reflection() {
  return record("Fable.Helpers.React.Props.DangerousHtml", [], Props$002EDangerousHtml, () => [["__html", string]]);
}
export const Props$002EDOMAttr = declare(function Fable_Helpers_React_Props_DOMAttr(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002EDOMAttr$reflection() {
  return union("Fable.Helpers.React.Props.DOMAttr", [], Props$002EDOMAttr, () => [["DangerouslySetInnerHTML", [Props$002EDangerousHtml$reflection()]], ["OnCut", [lambda(type("Fable.Import.React.ClipboardEvent"), unit)]], ["OnPaste", [lambda(type("Fable.Import.React.ClipboardEvent"), unit)]], ["OnCompositionEnd", [lambda(type("Fable.Import.React.CompositionEvent"), unit)]], ["OnCompositionStart", [lambda(type("Fable.Import.React.CompositionEvent"), unit)]], ["OnCopy", [lambda(type("Fable.Import.React.ClipboardEvent"), unit)]], ["OnCompositionUpdate", [lambda(type("Fable.Import.React.CompositionEvent"), unit)]], ["OnFocus", [lambda(type("Fable.Import.React.FocusEvent"), unit)]], ["OnBlur", [lambda(type("Fable.Import.React.FocusEvent"), unit)]], ["OnChange", [lambda(type("Fable.Import.React.FormEvent"), unit)]], ["OnInput", [lambda(type("Fable.Import.React.FormEvent"), unit)]], ["OnSubmit", [lambda(type("Fable.Import.React.FormEvent"), unit)]], ["OnReset", [lambda(type("Fable.Import.React.FormEvent"), unit)]], ["OnLoad", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnError", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnKeyDown", [lambda(type("Fable.Import.React.KeyboardEvent"), unit)]], ["OnKeyPress", [lambda(type("Fable.Import.React.KeyboardEvent"), unit)]], ["OnKeyUp", [lambda(type("Fable.Import.React.KeyboardEvent"), unit)]], ["OnAbort", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnCanPlay", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnCanPlayThrough", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnDurationChange", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnEmptied", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnEncrypted", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnEnded", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnLoadedData", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnLoadedMetadata", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnLoadStart", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnPause", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnPlay", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnPlaying", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnProgress", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnRateChange", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnSeeked", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnSeeking", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnStalled", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnSuspend", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnTimeUpdate", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnVolumeChange", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnWaiting", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnClick", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnContextMenu", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnDoubleClick", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnDrag", [lambda(type("Fable.Import.React.DragEvent"), unit)]], ["OnDragEnd", [lambda(type("Fable.Import.React.DragEvent"), unit)]], ["OnDragEnter", [lambda(type("Fable.Import.React.DragEvent"), unit)]], ["OnDragExit", [lambda(type("Fable.Import.React.DragEvent"), unit)]], ["OnDragLeave", [lambda(type("Fable.Import.React.DragEvent"), unit)]], ["OnDragOver", [lambda(type("Fable.Import.React.DragEvent"), unit)]], ["OnDragStart", [lambda(type("Fable.Import.React.DragEvent"), unit)]], ["OnDrop", [lambda(type("Fable.Import.React.DragEvent"), unit)]], ["OnMouseDown", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseEnter", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseLeave", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseMove", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseOut", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseOver", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseUp", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnSelect", [lambda(type("Fable.Import.React.SyntheticEvent"), unit)]], ["OnTouchCancel", [lambda(type("Fable.Import.React.TouchEvent"), unit)]], ["OnTouchEnd", [lambda(type("Fable.Import.React.TouchEvent"), unit)]], ["OnTouchMove", [lambda(type("Fable.Import.React.TouchEvent"), unit)]], ["OnTouchStart", [lambda(type("Fable.Import.React.TouchEvent"), unit)]], ["OnScroll", [lambda(type("Fable.Import.React.UIEvent"), unit)]], ["OnWheel", [lambda(type("Fable.Import.React.WheelEvent"), unit)]], ["OnAnimationStart", [lambda(type("Fable.Import.React.AnimationEvent"), unit)]], ["OnAnimationEnd", [lambda(type("Fable.Import.React.AnimationEvent"), unit)]], ["OnAnimationIteration", [lambda(type("Fable.Import.React.AnimationEvent"), unit)]], ["OnTransitionEnd", [lambda(type("Fable.Import.React.TransitionEvent"), unit)]]]);
}
export const Props$002ESVGAttr = declare(function Fable_Helpers_React_Props_SVGAttr(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002ESVGAttr$reflection() {
  return union("Fable.Helpers.React.Props.SVGAttr", [], Props$002ESVGAttr, () => [["ClipPath", [string]], ["Cx", [obj]], ["Cy", [obj]], ["D", [string]], ["Dx", [obj]], ["Dy", [obj]], ["Fill", [string]], ["FillOpacity", [obj]], ["FontFamily", [string]], ["FontSize", [obj]], ["Fx", [obj]], ["Fy", [obj]], ["GradientTransform", [string]], ["GradientUnits", [string]], ["Height", [obj]], ["MarkerEnd", [string]], ["MarkerMid", [string]], ["MarkerStart", [string]], ["Offset", [obj]], ["Opacity", [obj]], ["PatternContentUnits", [string]], ["PatternUnits", [string]], ["Points", [string]], ["PreserveAspectRatio", [string]], ["R", [obj]], ["Rx", [obj]], ["Ry", [obj]], ["SpreadMethod", [string]], ["StopColor", [string]], ["StopOpacity", [obj]], ["Stroke", [string]], ["StrokeDasharray", [string]], ["StrokeLinecap", [string]], ["StrokeMiterlimit", [string]], ["StrokeOpacity", [obj]], ["StrokeWidth", [obj]], ["TextAnchor", [string]], ["Transform", [string]], ["Version", [string]], ["ViewBox", [string]], ["Width", [obj]], ["X1", [obj]], ["X2", [obj]], ["X", [obj]], ["XlinkActuate", [string]], ["XlinkArcrole", [string]], ["XlinkHref", [string]], ["XlinkRole", [string]], ["XlinkShow", [string]], ["XlinkTitle", [string]], ["XlinkType", [string]], ["XmlBase", [string]], ["XmlLang", [string]], ["XmlSpace", [string]], ["Y1", [obj]], ["Y2", [obj]], ["Y", [obj]], ["Custom", [string, obj]]]);
}
export const Props$002EHTMLAttr = declare(function Fable_Helpers_React_Props_HTMLAttr(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002EHTMLAttr$reflection() {
  return union("Fable.Helpers.React.Props.HTMLAttr", [], Props$002EHTMLAttr, () => [["DefaultChecked", [bool]], ["DefaultValue", [obj]], ["Accept", [string]], ["AcceptCharset", [string]], ["AccessKey", [string]], ["Action", [string]], ["AllowFullScreen", [bool]], ["AllowTransparency", [bool]], ["Alt", [string]], ["aria-haspopup", [bool]], ["aria-expanded", [bool]], ["Async", [bool]], ["AutoComplete", [string]], ["AutoFocus", [bool]], ["AutoPlay", [bool]], ["Capture", [bool]], ["CellPadding", [obj]], ["CellSpacing", [obj]], ["CharSet", [string]], ["Challenge", [string]], ["Checked", [bool]], ["ClassID", [string]], ["ClassName", [string]], ["className", [string]], ["Cols", [int32]], ["ColSpan", [int32]], ["Content", [string]], ["ContentEditable", [bool]], ["ContextMenu", [string]], ["Controls", [bool]], ["Coords", [string]], ["CrossOrigin", [string]], ["data-toggle", [string]], ["DateTime", [string]], ["Default", [bool]], ["Defer", [bool]], ["Dir", [string]], ["Disabled", [bool]], ["Download", [obj]], ["Draggable", [bool]], ["EncType", [string]], ["Form", [string]], ["FormAction", [string]], ["FormEncType", [string]], ["FormMethod", [string]], ["FormNoValidate", [bool]], ["FormTarget", [string]], ["FrameBorder", [obj]], ["Headers", [string]], ["Height", [obj]], ["Hidden", [bool]], ["High", [float64]], ["Href", [string]], ["HrefLang", [string]], ["HtmlFor", [string]], ["HttpEquiv", [string]], ["Icon", [string]], ["Id", [string]], ["InputMode", [string]], ["Integrity", [string]], ["Is", [string]], ["KeyParams", [string]], ["KeyType", [string]], ["Kind", [string]], ["Label", [string]], ["Lang", [string]], ["List", [string]], ["Loop", [bool]], ["Low", [float64]], ["Manifest", [string]], ["MarginHeight", [float64]], ["MarginWidth", [float64]], ["Max", [obj]], ["MaxLength", [float64]], ["Media", [string]], ["MediaGroup", [string]], ["Method", [string]], ["Min", [obj]], ["MinLength", [float64]], ["Multiple", [bool]], ["Muted", [bool]], ["Name", [string]], ["NoValidate", [bool]], ["Open", [bool]], ["Optimum", [float64]], ["Pattern", [string]], ["Placeholder", [string]], ["Poster", [string]], ["Preload", [string]], ["RadioGroup", [string]], ["ReadOnly", [bool]], ["Rel", [string]], ["Required", [bool]], ["Role", [string]], ["Rows", [int32]], ["RowSpan", [int32]], ["Sandbox", [string]], ["Scope", [string]], ["Scoped", [bool]], ["Scrolling", [string]], ["Seamless", [bool]], ["Selected", [bool]], ["Shape", [string]], ["Size", [float64]], ["Sizes", [string]], ["Span", [float64]], ["SpellCheck", [bool]], ["Src", [string]], ["SrcDoc", [string]], ["SrcLang", [string]], ["SrcSet", [string]], ["Start", [float64]], ["Step", [obj]], ["Summary", [string]], ["TabIndex", [int32]], ["Target", [string]], ["Title", [string]], ["Type", [string]], ["UseMap", [string]], ["Value", [obj]], ["value", [array(string)]], ["Width", [obj]], ["Wmode", [string]], ["Wrap", [string]], ["About", [string]], ["Datatype", [string]], ["Inlist", [obj]], ["Prefix", [string]], ["Property", [string]], ["Resource", [string]], ["Typeof", [string]], ["Vocab", [string]], ["AutoCapitalize", [string]], ["AutoCorrect", [string]], ["AutoSave", [string]], ["ItemProp", [string]], ["ItemScope", [bool]], ["ItemType", [string]], ["ItemID", [string]], ["ItemRef", [string]], ["Results", [float64]], ["Security", [string]], ["Unselectable", [bool]], ["Custom", [string, obj]]]);
}
export const Props$002ECSSProp = declare(function Fable_Helpers_React_Props_CSSProp(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002ECSSProp$reflection() {
  return union("Fable.Helpers.React.Props.CSSProp", [], Props$002ECSSProp, () => [["AlignContent", [obj]], ["AlignItems", [obj]], ["AlignSelf", [obj]], ["AlignmentAdjust", [obj]], ["AlignmentBaseline", [obj]], ["All", [obj]], ["Animation", [obj]], ["AnimationDelay", [obj]], ["AnimationDirection", [obj]], ["AnimationDuration", [obj]], ["AnimationFillMode", [obj]], ["AnimationIterationCount", [obj]], ["AnimationName", [obj]], ["AnimationPlayState", [obj]], ["AnimationTimingFunction", [obj]], ["Appearance", [obj]], ["BackfaceVisibility", [obj]], ["Background", [obj]], ["BackgroundAttachment", [obj]], ["BackgroundBlendMode", [obj]], ["BackgroundClip", [obj]], ["BackgroundColor", [obj]], ["BackgroundComposite", [obj]], ["BackgroundImage", [obj]], ["BackgroundOrigin", [obj]], ["BackgroundPosition", [obj]], ["BackgroundPositionX", [obj]], ["BackgroundPositionY", [obj]], ["BackgroundRepeat", [obj]], ["BackgroundSize", [obj]], ["BaselineShift", [obj]], ["Behavior", [obj]], ["BlockSize", [obj]], ["Border", [obj]], ["BorderBlockEnd", [obj]], ["BorderBlockEndColor", [obj]], ["BorderBlockEndStyle", [obj]], ["BorderBlockEndWidth", [obj]], ["BorderBlockStart", [obj]], ["BorderBlockStartColor", [obj]], ["BorderBlockStartStyle", [obj]], ["BorderBlockStartWidth", [obj]], ["BorderBottom", [obj]], ["BorderBottomColor", [obj]], ["BorderBottomLeftRadius", [obj]], ["BorderBottomRightRadius", [obj]], ["BorderBottomStyle", [obj]], ["BorderBottomWidth", [obj]], ["BorderCollapse", [obj]], ["BorderColor", [obj]], ["BorderCornerShape", [obj]], ["BorderImage", [obj]], ["BorderImageOutset", [obj]], ["BorderImageRepeat", [obj]], ["BorderImageSlice", [obj]], ["BorderImageSource", [obj]], ["BorderImageWidth", [obj]], ["BorderInlineEnd", [obj]], ["BorderInlineEndColor", [obj]], ["BorderInlineEndStyle", [obj]], ["BorderInlineEndWidth", [obj]], ["BorderInlineStart", [obj]], ["BorderInlineStartColor", [obj]], ["BorderInlineStartStyle", [obj]], ["BorderInlineStartWidth", [obj]], ["BorderLeft", [obj]], ["BorderLeftColor", [obj]], ["BorderLeftStyle", [obj]], ["BorderLeftWidth", [obj]], ["BorderRadius", [obj]], ["BorderRight", [obj]], ["BorderRightColor", [obj]], ["BorderRightStyle", [obj]], ["BorderRightWidth", [obj]], ["BorderSpacing", [obj]], ["BorderStyle", [obj]], ["BorderTop", [obj]], ["BorderTopColor", [obj]], ["BorderTopLeftRadius", [obj]], ["BorderTopRightRadius", [obj]], ["BorderTopStyle", [obj]], ["BorderTopWidth", [obj]], ["BorderWidth", [obj]], ["Bottom", [obj]], ["BoxAlign", [obj]], ["BoxDecorationBreak", [obj]], ["BoxDirection", [obj]], ["BoxFlex", [obj]], ["BoxFlexGroup", [obj]], ["BoxLineProgression", [obj]], ["BoxLines", [obj]], ["BoxOrdinalGroup", [obj]], ["BoxShadow", [obj]], ["BoxSizing", [obj]], ["BreakAfter", [obj]], ["BreakBefore", [obj]], ["BreakInside", [obj]], ["CaptionSide", [obj]], ["CaretColor", [obj]], ["Clear", [obj]], ["Clip", [obj]], ["ClipPath", [obj]], ["ClipRule", [obj]], ["Color", [obj]], ["ColorInterpolation", [obj]], ["ColorInterpolationFilters", [obj]], ["ColorProfile", [obj]], ["ColorRendering", [obj]], ["ColumnCount", [obj]], ["ColumnFill", [obj]], ["ColumnGap", [obj]], ["ColumnRule", [obj]], ["ColumnRuleColor", [obj]], ["ColumnRuleStyle", [obj]], ["ColumnRuleWidth", [obj]], ["ColumnSpan", [obj]], ["ColumnWidth", [obj]], ["Columns", [obj]], ["Content", [obj]], ["CounterIncrement", [obj]], ["CounterReset", [obj]], ["Cue", [obj]], ["CueAfter", [obj]], ["Cursor", [obj]], ["Direction", [obj]], ["Display", [obj]], ["DominantBaseline", [obj]], ["EmptyCells", [obj]], ["EnableBackground", [obj]], ["Fill", [obj]], ["FillOpacity", [obj]], ["FillRule", [obj]], ["Filter", [obj]], ["Flex", [obj]], ["FlexAlign", [obj]], ["FlexBasis", [obj]], ["FlexDirection", [obj]], ["FlexFlow", [obj]], ["FlexGrow", [obj]], ["FlexItemAlign", [obj]], ["FlexLinePack", [obj]], ["FlexOrder", [obj]], ["FlexShrink", [obj]], ["FlexWrap", [obj]], ["Float", [obj]], ["FloodColor", [obj]], ["FloodOpacity", [obj]], ["FlowFrom", [obj]], ["Font", [obj]], ["FontFamily", [obj]], ["FontFeatureSettings", [obj]], ["FontKerning", [obj]], ["FontLanguageOverride", [obj]], ["FontSize", [obj]], ["FontSizeAdjust", [obj]], ["FontStretch", [obj]], ["FontStyle", [obj]], ["FontSynthesis", [obj]], ["FontVariant", [obj]], ["FontVariantAlternates", [obj]], ["FontVariantCaps", [obj]], ["FontVariantEastAsian", [obj]], ["FontVariantLigatures", [obj]], ["FontVariantNumeric", [obj]], ["FontVariantPosition", [obj]], ["FontWeight", [obj]], ["GlyphOrientationHorizontal", [obj]], ["GlyphOrientationVertical", [obj]], ["Grid", [obj]], ["GridArea", [obj]], ["GridAutoColumns", [obj]], ["GridAutoFlow", [obj]], ["GridAutoRows", [obj]], ["GridColumn", [obj]], ["GridColumnEnd", [obj]], ["GridColumnGap", [obj]], ["GridColumnStart", [obj]], ["GridGap", [obj]], ["GridRow", [obj]], ["GridRowEnd", [obj]], ["GridRowGap", [obj]], ["GridRowPosition", [obj]], ["GridRowSpan", [obj]], ["GridRowStart", [obj]], ["GridTemplate", [obj]], ["GridTemplateAreas", [obj]], ["GridTemplateColumns", [obj]], ["GridTemplateRows", [obj]], ["HangingPunctuation", [obj]], ["Height", [obj]], ["HyphenateLimitChars", [obj]], ["HyphenateLimitLines", [obj]], ["HyphenateLimitZone", [obj]], ["Hyphens", [obj]], ["ImageOrientation", [obj]], ["ImageRendering", [obj]], ["ImageResolution", [obj]], ["ImeMode", [obj]], ["InlineSize", [obj]], ["Isolation", [obj]], ["JustifyContent", [obj]], ["Kerning", [obj]], ["LayoutGrid", [obj]], ["LayoutGridChar", [obj]], ["LayoutGridLine", [obj]], ["LayoutGridMode", [obj]], ["LayoutGridType", [obj]], ["Left", [obj]], ["LetterSpacing", [obj]], ["LightingColor", [obj]], ["LineBreak", [obj]], ["LineClamp", [obj]], ["LineHeight", [obj]], ["ListStyle", [obj]], ["ListStyleImage", [obj]], ["ListStylePosition", [obj]], ["ListStyleType", [obj]], ["Margin", [obj]], ["MarginBlockEnd", [obj]], ["MarginBlockStart", [obj]], ["MarginBottom", [obj]], ["MarginInlineEnd", [obj]], ["MarginInlineStart", [obj]], ["MarginLeft", [obj]], ["MarginRight", [obj]], ["MarginTop", [obj]], ["MarkerEnd", [obj]], ["MarkerMid", [obj]], ["MarkerStart", [obj]], ["MarqueeDirection", [obj]], ["MarqueeStyle", [obj]], ["Mask", [obj]], ["MaskBorder", [obj]], ["MaskBorderRepeat", [obj]], ["MaskBorderSlice", [obj]], ["MaskBorderSource", [obj]], ["MaskBorderWidth", [obj]], ["MaskClip", [obj]], ["MaskComposite", [obj]], ["MaskImage", [obj]], ["MaskMode", [obj]], ["MaskOrigin", [obj]], ["MaskPosition", [obj]], ["MaskRepeat", [obj]], ["MaskSize", [obj]], ["MaskType", [obj]], ["MaxFontSize", [obj]], ["MaxHeight", [obj]], ["MaxWidth", [obj]], ["MinBlockSize", [obj]], ["MinHeight", [obj]], ["MinInlineSize", [obj]], ["MinWidth", [obj]], ["MixBlendMode", [obj]], ["ObjectFit", [obj]], ["ObjectPosition", [obj]], ["OffsetBlockEnd", [obj]], ["OffsetBlockStart", [obj]], ["OffsetInlineEnd", [obj]], ["OffsetInlineStart", [obj]], ["Opacity", [obj]], ["Order", [obj]], ["Orphans", [obj]], ["Outline", [obj]], ["OutlineColor", [obj]], ["OutlineOffset", [obj]], ["OutlineStyle", [obj]], ["OutlineWidth", [obj]], ["Overflow", [obj]], ["OverflowStyle", [obj]], ["OverflowWrap", [obj]], ["OverflowX", [obj]], ["OverflowY", [obj]], ["Padding", [obj]], ["PaddingBlockEnd", [obj]], ["PaddingBlockStart", [obj]], ["PaddingBottom", [obj]], ["PaddingInlineEnd", [obj]], ["PaddingInlineStart", [obj]], ["PaddingLeft", [obj]], ["PaddingRight", [obj]], ["PaddingTop", [obj]], ["PageBreakAfter", [obj]], ["PageBreakBefore", [obj]], ["PageBreakInside", [obj]], ["Pause", [obj]], ["PauseAfter", [obj]], ["PauseBefore", [obj]], ["Perspective", [obj]], ["PerspectiveOrigin", [obj]], ["PointerEvents", [obj]], ["Position", [obj]], ["PunctuationTrim", [obj]], ["Quotes", [obj]], ["RegionFragment", [obj]], ["Resize", [obj]], ["RestAfter", [obj]], ["RestBefore", [obj]], ["Right", [obj]], ["RubyAlign", [obj]], ["RubyMerge", [obj]], ["RubyPosition", [obj]], ["ScrollBehavior", [obj]], ["ScrollSnapCoordinate", [obj]], ["ScrollSnapDestination", [obj]], ["ScrollSnapType", [obj]], ["ShapeImageThreshold", [obj]], ["ShapeInside", [obj]], ["ShapeMargin", [obj]], ["ShapeOutside", [obj]], ["ShapeRendering", [obj]], ["Speak", [obj]], ["SpeakAs", [obj]], ["StopColor", [obj]], ["StopOpacity", [obj]], ["Stroke", [obj]], ["StrokeDasharray", [obj]], ["StrokeDashoffset", [obj]], ["StrokeLinecap", [obj]], ["StrokeLinejoin", [obj]], ["StrokeMiterlimit", [obj]], ["StrokeOpacity", [obj]], ["StrokeWidth", [obj]], ["TabSize", [obj]], ["TableLayout", [obj]], ["TextAlign", [obj]], ["TextAlignLast", [obj]], ["TextAnchor", [obj]], ["TextCombineUpright", [obj]], ["TextDecoration", [obj]], ["TextDecorationColor", [obj]], ["TextDecorationLine", [obj]], ["TextDecorationLineThrough", [obj]], ["TextDecorationNone", [obj]], ["TextDecorationOverline", [obj]], ["TextDecorationSkip", [obj]], ["TextDecorationStyle", [obj]], ["TextDecorationUnderline", [obj]], ["TextEmphasis", [obj]], ["TextEmphasisColor", [obj]], ["TextEmphasisPosition", [obj]], ["TextEmphasisStyle", [obj]], ["TextHeight", [obj]], ["TextIndent", [obj]], ["TextJustify", [obj]], ["TextJustifyTrim", [obj]], ["TextKashidaSpace", [obj]], ["TextLineThrough", [obj]], ["TextLineThroughColor", [obj]], ["TextLineThroughMode", [obj]], ["TextLineThroughStyle", [obj]], ["TextLineThroughWidth", [obj]], ["TextOrientation", [obj]], ["TextOverflow", [obj]], ["TextOverline", [obj]], ["TextOverlineColor", [obj]], ["TextOverlineMode", [obj]], ["TextOverlineStyle", [obj]], ["TextOverlineWidth", [obj]], ["TextRendering", [obj]], ["TextScript", [obj]], ["TextShadow", [obj]], ["TextTransform", [obj]], ["TextUnderlinePosition", [obj]], ["TextUnderlineStyle", [obj]], ["Top", [obj]], ["TouchAction", [obj]], ["Transform", [obj]], ["TransformBox", [obj]], ["TransformOrigin", [obj]], ["TransformOriginZ", [obj]], ["TransformStyle", [obj]], ["Transition", [obj]], ["TransitionDelay", [obj]], ["TransitionDuration", [obj]], ["TransitionProperty", [obj]], ["TransitionTimingFunction", [obj]], ["UnicodeBidi", [obj]], ["UnicodeRange", [obj]], ["UserFocus", [obj]], ["UserInput", [obj]], ["VerticalAlign", [obj]], ["Visibility", [obj]], ["VoiceBalance", [obj]], ["VoiceDuration", [obj]], ["VoiceFamily", [obj]], ["VoicePitch", [obj]], ["VoiceRange", [obj]], ["VoiceRate", [obj]], ["VoiceStress", [obj]], ["VoiceVolume", [obj]], ["WhiteSpace", [obj]], ["WhiteSpaceTreatment", [obj]], ["Widows", [obj]], ["Width", [obj]], ["WillChange", [obj]], ["WordBreak", [obj]], ["WordSpacing", [obj]], ["WordWrap", [obj]], ["WrapFlow", [obj]], ["WrapMargin", [obj]], ["WrapOption", [obj]], ["WritingMode", [obj]], ["ZIndex", [obj]], ["Zoom", [obj]], ["Custom", [string, obj]]]);
}
export function Props$$$Style(css) {
  return ["style", createObj(css, 1)];
}
export function Props$$$Data(key, value) {
  return ["data-" + key, value];
}
export const createElement = createElement$$1;
export function ServerRenderingInternal$$$createServerElement(tag, props, children, elementType) {
  return createElement$$1(tag, props, ...children);
}
export function ServerRenderingInternal$$$createServerElementByFn(f, props$$1, children$$1) {
  return createElement$$1(f, props$$1, ...children$$1);
}
export function from(com, props$$2, children$$2) {
  return createElement$$1(com, props$$2, ...children$$2);
}
export function ofFunction(f$$1, props$$3, children$$3) {
  return createElement$$1(f$$1, props$$3, ...children$$3);
}
export function fn(f$$2, props$$4, children$$4) {
  return createElement$$1(f$$2, props$$4, ...children$$4);
}
export function ReactElementType$$$ofFunction(f$$4) {
  return f$$4;
}
export function ReactElementType$$$ofHtmlElement(name) {
  return name;
}
export function ReactElementType$$$create(comp, props$$6, children$$6) {
  return createElement$$1(comp, props$$6, ...children$$6);
}
const ReactElementType$$$reactMemo = memo;
export function ReactElementType$$$memo(render) {
  return memo(render, uncurry(2, null));
}
export function ReactElementType$$$memoWith(areEqual, render$$1) {
  return memo(render$$1, areEqual);
}
export function memoBuilder(name$$1, render$$2) {
  render$$2.displayName = name$$1;
  const memoType = ReactElementType$$$memo(render$$2);
  return function (props$$7) {
    return createElement$$1(memoType, props$$7, ...[]);
  };
}
export function memoBuilderWith(name$$2, areEqual$$1, render$$3) {
  render$$3.displayName = name$$2;
  const memoType$$1 = ReactElementType$$$memoWith(areEqual$$1, render$$3);
  return function (props$$9) {
    return createElement$$1(memoType$$1, props$$9, ...[]);
  };
}
export function str(s$$1) {
  return s$$1;
}
export function ofString(s$$2) {
  return s$$2;
}
export function ofOption(o) {
  if (o == null) {
    return null;
  } else {
    const o$$1 = o;
    return o$$1;
  }
}
export function opt(o$$2) {
  if (o$$2 == null) {
    return null;
  } else {
    const o$$4 = o$$2;
    return o$$4;
  }
}
export function ofInt(i$$1) {
  return i$$1;
}
export function ofFloat(f$$5) {
  return f$$5;
}
export function ofList(els) {
  return ofList$$1(els, Array);
}
export function ofArray(els$$1) {
  return els$$1;
}
export function domEl(tag$$1, props$$11, children$$9) {
  return createElement$$1(tag$$1, createObj(props$$11, 1), ...children$$9);
}
export function voidEl(tag$$2, props$$12) {
  return createElement$$1(tag$$2, createObj(props$$12, 1), ...new List());
}
export function svgEl(tag$$3, props$$13, children$$10) {
  return createElement$$1(tag$$3, createObj(props$$13, 1), ...children$$10);
}
export function fragment(props$$14, children$$11) {
  return createElement$$1(Fragment, createObj(props$$14, 1), ...children$$11);
}
export function a(props$$15, children$$12) {
  return createElement$$1("a", createObj(props$$15, 1), ...children$$12);
}
export function abbr(props$$17, children$$14) {
  return createElement$$1("abbr", createObj(props$$17, 1), ...children$$14);
}
export function address(props$$19, children$$16) {
  return createElement$$1("address", createObj(props$$19, 1), ...children$$16);
}
export function article(props$$21, children$$18) {
  return createElement$$1("article", createObj(props$$21, 1), ...children$$18);
}
export function aside(props$$23, children$$20) {
  return createElement$$1("aside", createObj(props$$23, 1), ...children$$20);
}
export function audio(props$$25, children$$22) {
  return createElement$$1("audio", createObj(props$$25, 1), ...children$$22);
}
export function b(props$$27, children$$24) {
  return createElement$$1("b", createObj(props$$27, 1), ...children$$24);
}
export function bdi(props$$29, children$$26) {
  return createElement$$1("bdi", createObj(props$$29, 1), ...children$$26);
}
export function bdo(props$$31, children$$28) {
  return createElement$$1("bdo", createObj(props$$31, 1), ...children$$28);
}
export function big(props$$33, children$$30) {
  return createElement$$1("big", createObj(props$$33, 1), ...children$$30);
}
export function blockquote(props$$35, children$$32) {
  return createElement$$1("blockquote", createObj(props$$35, 1), ...children$$32);
}
export function body(props$$37, children$$34) {
  return createElement$$1("body", createObj(props$$37, 1), ...children$$34);
}
export function button(props$$39, children$$36) {
  return createElement$$1("button", createObj(props$$39, 1), ...children$$36);
}
export function canvas(props$$41, children$$38) {
  return createElement$$1("canvas", createObj(props$$41, 1), ...children$$38);
}
export function caption(props$$43, children$$40) {
  return createElement$$1("caption", createObj(props$$43, 1), ...children$$40);
}
export function cite(props$$45, children$$42) {
  return createElement$$1("cite", createObj(props$$45, 1), ...children$$42);
}
export function code(props$$47, children$$44) {
  return createElement$$1("code", createObj(props$$47, 1), ...children$$44);
}
export function colgroup(props$$49, children$$46) {
  return createElement$$1("colgroup", createObj(props$$49, 1), ...children$$46);
}
export function data(props$$51, children$$48) {
  return createElement$$1("data", createObj(props$$51, 1), ...children$$48);
}
export function datalist(props$$53, children$$50) {
  return createElement$$1("datalist", createObj(props$$53, 1), ...children$$50);
}
export function dd(props$$55, children$$52) {
  return createElement$$1("dd", createObj(props$$55, 1), ...children$$52);
}
export function del(props$$57, children$$54) {
  return createElement$$1("del", createObj(props$$57, 1), ...children$$54);
}
export function details(props$$59, children$$56) {
  return createElement$$1("details", createObj(props$$59, 1), ...children$$56);
}
export function dfn(props$$61, children$$58) {
  return createElement$$1("dfn", createObj(props$$61, 1), ...children$$58);
}
export function dialog(props$$63, children$$60) {
  return createElement$$1("dialog", createObj(props$$63, 1), ...children$$60);
}
export function div(props$$65, children$$62) {
  return createElement$$1("div", createObj(props$$65, 1), ...children$$62);
}
export function dl(props$$67, children$$64) {
  return createElement$$1("dl", createObj(props$$67, 1), ...children$$64);
}
export function dt(props$$69, children$$66) {
  return createElement$$1("dt", createObj(props$$69, 1), ...children$$66);
}
export function em(props$$71, children$$68) {
  return createElement$$1("em", createObj(props$$71, 1), ...children$$68);
}
export function fieldset(props$$73, children$$70) {
  return createElement$$1("fieldset", createObj(props$$73, 1), ...children$$70);
}
export function figcaption(props$$75, children$$72) {
  return createElement$$1("figcaption", createObj(props$$75, 1), ...children$$72);
}
export function figure(props$$77, children$$74) {
  return createElement$$1("figure", createObj(props$$77, 1), ...children$$74);
}
export function footer(props$$79, children$$76) {
  return createElement$$1("footer", createObj(props$$79, 1), ...children$$76);
}
export function form(props$$81, children$$78) {
  return createElement$$1("form", createObj(props$$81, 1), ...children$$78);
}
export function h1(props$$83, children$$80) {
  return createElement$$1("h1", createObj(props$$83, 1), ...children$$80);
}
export function h2(props$$85, children$$82) {
  return createElement$$1("h2", createObj(props$$85, 1), ...children$$82);
}
export function h3(props$$87, children$$84) {
  return createElement$$1("h3", createObj(props$$87, 1), ...children$$84);
}
export function h4(props$$89, children$$86) {
  return createElement$$1("h4", createObj(props$$89, 1), ...children$$86);
}
export function h5(props$$91, children$$88) {
  return createElement$$1("h5", createObj(props$$91, 1), ...children$$88);
}
export function h6(props$$93, children$$90) {
  return createElement$$1("h6", createObj(props$$93, 1), ...children$$90);
}
export function head(props$$95, children$$92) {
  return createElement$$1("head", createObj(props$$95, 1), ...children$$92);
}
export function header(props$$97, children$$94) {
  return createElement$$1("header", createObj(props$$97, 1), ...children$$94);
}
export function hgroup(props$$99, children$$96) {
  return createElement$$1("hgroup", createObj(props$$99, 1), ...children$$96);
}
export function html(props$$101, children$$98) {
  return createElement$$1("html", createObj(props$$101, 1), ...children$$98);
}
export function i(props$$103, children$$100) {
  return createElement$$1("i", createObj(props$$103, 1), ...children$$100);
}
export function iframe(props$$105, children$$102) {
  return createElement$$1("iframe", createObj(props$$105, 1), ...children$$102);
}
export function ins(props$$107, children$$104) {
  return createElement$$1("ins", createObj(props$$107, 1), ...children$$104);
}
export function kbd(props$$109, children$$106) {
  return createElement$$1("kbd", createObj(props$$109, 1), ...children$$106);
}
export function label(props$$111, children$$108) {
  return createElement$$1("label", createObj(props$$111, 1), ...children$$108);
}
export function legend(props$$113, children$$110) {
  return createElement$$1("legend", createObj(props$$113, 1), ...children$$110);
}
export function li(props$$115, children$$112) {
  return createElement$$1("li", createObj(props$$115, 1), ...children$$112);
}
export function main(props$$117, children$$114) {
  return createElement$$1("main", createObj(props$$117, 1), ...children$$114);
}
export function map(props$$119, children$$116) {
  return createElement$$1("map", createObj(props$$119, 1), ...children$$116);
}
export function mark(props$$121, children$$118) {
  return createElement$$1("mark", createObj(props$$121, 1), ...children$$118);
}
export function menu(props$$123, children$$120) {
  return createElement$$1("menu", createObj(props$$123, 1), ...children$$120);
}
export function meter(props$$125, children$$122) {
  return createElement$$1("meter", createObj(props$$125, 1), ...children$$122);
}
export function nav(props$$127, children$$124) {
  return createElement$$1("nav", createObj(props$$127, 1), ...children$$124);
}
export function noscript(props$$129, children$$126) {
  return createElement$$1("noscript", createObj(props$$129, 1), ...children$$126);
}
export function object(props$$131, children$$128, b$$1, c) {
  return createElement$$1("object", createObj(props$$131, 1), ...children$$128);
}
export function ol(props$$133, children$$130) {
  return createElement$$1("ol", createObj(props$$133, 1), ...children$$130);
}
export function optgroup(props$$135, children$$132) {
  return createElement$$1("optgroup", createObj(props$$135, 1), ...children$$132);
}
export function option(props$$137, children$$134) {
  return createElement$$1("option", createObj(props$$137, 1), ...children$$134);
}
export function output(props$$139, children$$136) {
  return createElement$$1("output", createObj(props$$139, 1), ...children$$136);
}
export function p(props$$141, children$$138) {
  return createElement$$1("p", createObj(props$$141, 1), ...children$$138);
}
export function picture(props$$143, children$$140) {
  return createElement$$1("picture", createObj(props$$143, 1), ...children$$140);
}
export function pre(props$$145, children$$142) {
  return createElement$$1("pre", createObj(props$$145, 1), ...children$$142);
}
export function progress(props$$147, children$$144) {
  return createElement$$1("progress", createObj(props$$147, 1), ...children$$144);
}
export function q(props$$149, children$$146) {
  return createElement$$1("q", createObj(props$$149, 1), ...children$$146);
}
export function rp(props$$151, children$$148) {
  return createElement$$1("rp", createObj(props$$151, 1), ...children$$148);
}
export function rt(props$$153, children$$150) {
  return createElement$$1("rt", createObj(props$$153, 1), ...children$$150);
}
export function ruby(props$$155, children$$152) {
  return createElement$$1("ruby", createObj(props$$155, 1), ...children$$152);
}
export function s(props$$157, children$$154) {
  return createElement$$1("s", createObj(props$$157, 1), ...children$$154);
}
export function samp(props$$159, children$$156) {
  return createElement$$1("samp", createObj(props$$159, 1), ...children$$156);
}
export function script(props$$161, children$$158) {
  return createElement$$1("script", createObj(props$$161, 1), ...children$$158);
}
export function section(props$$163, children$$160) {
  return createElement$$1("section", createObj(props$$163, 1), ...children$$160);
}
export function select(props$$165, children$$162) {
  return createElement$$1("select", createObj(props$$165, 1), ...children$$162);
}
export function small(props$$167, children$$164) {
  return createElement$$1("small", createObj(props$$167, 1), ...children$$164);
}
export function span(props$$169, children$$166) {
  return createElement$$1("span", createObj(props$$169, 1), ...children$$166);
}
export function strong(props$$171, children$$168) {
  return createElement$$1("strong", createObj(props$$171, 1), ...children$$168);
}
export function style(props$$173, children$$170) {
  return createElement$$1("style", createObj(props$$173, 1), ...children$$170);
}
export function sub(props$$175, children$$172) {
  return createElement$$1("sub", createObj(props$$175, 1), ...children$$172);
}
export function summary(props$$177, children$$174) {
  return createElement$$1("summary", createObj(props$$177, 1), ...children$$174);
}
export function sup(props$$179, children$$176) {
  return createElement$$1("sup", createObj(props$$179, 1), ...children$$176);
}
export function table(props$$181, children$$178) {
  return createElement$$1("table", createObj(props$$181, 1), ...children$$178);
}
export function tbody(props$$183, children$$180) {
  return createElement$$1("tbody", createObj(props$$183, 1), ...children$$180);
}
export function td(props$$185, children$$182) {
  return createElement$$1("td", createObj(props$$185, 1), ...children$$182);
}
export function textarea(props$$187, children$$184) {
  return createElement$$1("textarea", createObj(props$$187, 1), ...children$$184);
}
export function tfoot(props$$189, children$$186) {
  return createElement$$1("tfoot", createObj(props$$189, 1), ...children$$186);
}
export function th(props$$191, children$$188) {
  return createElement$$1("th", createObj(props$$191, 1), ...children$$188);
}
export function thead(props$$193, children$$190) {
  return createElement$$1("thead", createObj(props$$193, 1), ...children$$190);
}
export function time(props$$195, children$$192) {
  return createElement$$1("time", createObj(props$$195, 1), ...children$$192);
}
export function title(props$$197, children$$194) {
  return createElement$$1("title", createObj(props$$197, 1), ...children$$194);
}
export function tr(props$$199, children$$196) {
  return createElement$$1("tr", createObj(props$$199, 1), ...children$$196);
}
export function u(props$$201, children$$198) {
  return createElement$$1("u", createObj(props$$201, 1), ...children$$198);
}
export function ul(props$$203, children$$200) {
  return createElement$$1("ul", createObj(props$$203, 1), ...children$$200);
}
export function var$(props$$205, children$$202) {
  return createElement$$1("var", createObj(props$$205, 1), ...children$$202);
}
export function video(props$$207, children$$204) {
  return createElement$$1("video", createObj(props$$207, 1), ...children$$204);
}
export function area(props$$209) {
  return createElement$$1("area", createObj(props$$209, 1), ...new List());
}
export function base(props$$211) {
  return createElement$$1("base", createObj(props$$211, 1), ...new List());
}
export function br(props$$213) {
  return createElement$$1("br", createObj(props$$213, 1), ...new List());
}
export function col(props$$215) {
  return createElement$$1("col", createObj(props$$215, 1), ...new List());
}
export function embed(props$$217) {
  return createElement$$1("embed", createObj(props$$217, 1), ...new List());
}
export function hr(props$$219) {
  return createElement$$1("hr", createObj(props$$219, 1), ...new List());
}
export function img(props$$221) {
  return createElement$$1("img", createObj(props$$221, 1), ...new List());
}
export function input(props$$223) {
  return createElement$$1("input", createObj(props$$223, 1), ...new List());
}
export function keygen(props$$225) {
  return createElement$$1("keygen", createObj(props$$225, 1), ...new List());
}
export function link(props$$227) {
  return createElement$$1("link", createObj(props$$227, 1), ...new List());
}
export function menuitem(props$$229) {
  return createElement$$1("menuitem", createObj(props$$229, 1), ...new List());
}
export function meta(props$$231) {
  return createElement$$1("meta", createObj(props$$231, 1), ...new List());
}
export function param(props$$233) {
  return createElement$$1("param", createObj(props$$233, 1), ...new List());
}
export function source(props$$235) {
  return createElement$$1("source", createObj(props$$235, 1), ...new List());
}
export function track(props$$237) {
  return createElement$$1("track", createObj(props$$237, 1), ...new List());
}
export function wbr(props$$239) {
  return createElement$$1("wbr", createObj(props$$239, 1), ...new List());
}
export function svg(props$$241, children$$206) {
  return createElement$$1("svg", createObj(props$$241, 1), ...children$$206);
}
export function circle(props$$243, children$$208) {
  return createElement$$1("circle", createObj(props$$243, 1), ...children$$208);
}
export function clipPath(props$$245, children$$210) {
  return createElement$$1("clipPath", createObj(props$$245, 1), ...children$$210);
}
export function defs(props$$247, children$$212) {
  return createElement$$1("defs", createObj(props$$247, 1), ...children$$212);
}
export function ellipse(props$$249, children$$214) {
  return createElement$$1("ellipse", createObj(props$$249, 1), ...children$$214);
}
export function g(props$$251, children$$216) {
  return createElement$$1("g", createObj(props$$251, 1), ...children$$216);
}
export function image(props$$253, children$$218) {
  return createElement$$1("image", createObj(props$$253, 1), ...children$$218);
}
export function line(props$$255, children$$220) {
  return createElement$$1("line", createObj(props$$255, 1), ...children$$220);
}
export function linearGradient(props$$257, children$$222) {
  return createElement$$1("linearGradient", createObj(props$$257, 1), ...children$$222);
}
export function mask(props$$259, children$$224) {
  return createElement$$1("mask", createObj(props$$259, 1), ...children$$224);
}
export function path(props$$261, children$$226) {
  return createElement$$1("path", createObj(props$$261, 1), ...children$$226);
}
export function pattern(props$$263, children$$228) {
  return createElement$$1("pattern", createObj(props$$263, 1), ...children$$228);
}
export function polygon(props$$265, children$$230) {
  return createElement$$1("polygon", createObj(props$$265, 1), ...children$$230);
}
export function polyline(props$$267, children$$232) {
  return createElement$$1("polyline", createObj(props$$267, 1), ...children$$232);
}
export function radialGradient(props$$269, children$$234) {
  return createElement$$1("radialGradient", createObj(props$$269, 1), ...children$$234);
}
export function rect(props$$271, children$$236) {
  return createElement$$1("rect", createObj(props$$271, 1), ...children$$236);
}
export function stop(props$$273, children$$238) {
  return createElement$$1("stop", createObj(props$$273, 1), ...children$$238);
}
export function text(props$$275, children$$240) {
  return createElement$$1("text", createObj(props$$275, 1), ...children$$240);
}
export function tspan(props$$277, children$$242) {
  return createElement$$1("tspan", createObj(props$$277, 1), ...children$$242);
}
export function classBaseList(std, classes) {
  return new Props$002EHTMLAttr(22, "ClassName", fold(function folder(complete, _arg1) {
    if (_arg1[1]) {
      return complete + " " + _arg1[0];
    } else {
      return complete;
    }
  }, std, classes));
}
export function classList(classes$$1) {
  return classBaseList("", classes$$1);
}
export function mountById(domElId, reactEl) {
  render$$4(reactEl, document.getElementById(domElId));
}
export function mountBySelector(domElSelector, reactEl$$1) {
  render$$4(reactEl$$1, document.querySelector(domElSelector));
}
export function Fable$002EImport$002EReact$002EFormEvent$$FormEvent$002Eget_Value(this$) {
  return this$.target.value;
}
export function Fable$002EImport$002EReact$002EFormEvent$$FormEvent$002Eget_Checked(this$$$1) {
  return this$$$1.target.checked;
}
