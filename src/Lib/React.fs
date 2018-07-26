module Fable.Repl.Lib.React

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import

type [<AllowNullLiteral>] ReactElement =
    interface end

type IReactDOM =
    abstract render: ReactElement * Browser.Element -> unit

type IReact =
    abstract createElement: comp: obj * props: obj * [<ParamList>] children: ReactElement seq -> ReactElement

let [<Global>] React = Unchecked.defaultof<IReact>
let [<Global("ReactDOM")>] ReactDom = Unchecked.defaultof<IReactDOM>


module rec Props =
    type IProp =
        interface end

    type IHTMLProp =
        inherit IProp

    type IFragmentProp =
        inherit IProp

    type FragmentProp =
        | Key of string
        interface IFragmentProp

    type Prop =
        | Key of string
        | Ref of (Browser.Element->unit)
        interface IHTMLProp

    type DangerousHtml = {
        __html: string
    }

    type DOMAttr =
        | DangerouslySetInnerHTML of DangerousHtml
        | OnCut of (Browser.Event -> unit)
        | OnPaste of (Browser.Event -> unit)
        | OnCompositionEnd of (Browser.Event -> unit)
        | OnCompositionStart of (Browser.Event -> unit)
        | OnCopy of (Browser.Event -> unit)
        | OnCompositionUpdate of (Browser.Event -> unit)
        | OnFocus of (Browser.Event -> unit)
        | OnBlur of (Browser.Event -> unit)
        | OnChange of (Browser.Event -> unit)
        | OnInput of (Browser.Event -> unit)
        | OnSubmit of (Browser.Event -> unit)
        | OnReset of (Browser.Event -> unit)
        | OnLoad of (Browser.Event -> unit)
        | OnError of (Browser.Event -> unit)
        | OnKeyDown of (Browser.Event -> unit)
        | OnKeyPress of (Browser.Event -> unit)
        | OnKeyUp of (Browser.Event -> unit)
        | OnAbort of (Browser.Event -> unit)
        | OnCanPlay of (Browser.Event -> unit)
        | OnCanPlayThrough of (Browser.Event -> unit)
        | OnDurationChange of (Browser.Event -> unit)
        | OnEmptied of (Browser.Event -> unit)
        | OnEncrypted of (Browser.Event -> unit)
        | OnEnded of (Browser.Event -> unit)
        | OnLoadedData of (Browser.Event -> unit)
        | OnLoadedMetadata of (Browser.Event -> unit)
        | OnLoadStart of (Browser.Event -> unit)
        | OnPause of (Browser.Event -> unit)
        | OnPlay of (Browser.Event -> unit)
        | OnPlaying of (Browser.Event -> unit)
        | OnProgress of (Browser.Event -> unit)
        | OnRateChange of (Browser.Event -> unit)
        | OnSeeked of (Browser.Event -> unit)
        | OnSeeking of (Browser.Event -> unit)
        | OnStalled of (Browser.Event -> unit)
        | OnSuspend of (Browser.Event -> unit)
        | OnTimeUpdate of (Browser.Event -> unit)
        | OnVolumeChange of (Browser.Event -> unit)
        | OnWaiting of (Browser.Event -> unit)
        | OnClick of (Browser.Event -> unit)
        | OnContextMenu of (Browser.Event -> unit)
        | OnDoubleClick of (Browser.Event -> unit)
        | OnDrag of (Browser.Event -> unit)
        | OnDragEnd of (Browser.Event -> unit)
        | OnDragEnter of (Browser.Event -> unit)
        | OnDragExit of (Browser.Event -> unit)
        | OnDragLeave of (Browser.Event -> unit)
        | OnDragOver of (Browser.Event -> unit)
        | OnDragStart of (Browser.Event -> unit)
        | OnDrop of (Browser.Event -> unit)
        | OnMouseDown of (Browser.Event -> unit)
        | OnMouseEnter of (Browser.Event -> unit)
        | OnMouseLeave of (Browser.Event -> unit)
        | OnMouseMove of (Browser.Event -> unit)
        | OnMouseOut of (Browser.Event -> unit)
        | OnMouseOver of (Browser.Event -> unit)
        | OnMouseUp of (Browser.Event -> unit)
        | OnSelect of (Browser.Event -> unit)
        | OnTouchCancel of (Browser.Event -> unit)
        | OnTouchEnd of (Browser.Event -> unit)
        | OnTouchMove of (Browser.Event -> unit)
        | OnTouchStart of (Browser.Event -> unit)
        | OnScroll of (Browser.Event -> unit)
        | OnWheel of (Browser.Event -> unit)
        | OnAnimationStart of (Browser.Event -> unit)
        | OnAnimationEnd of (Browser.Event -> unit)
        | OnAnimationIteration of (Browser.Event -> unit)
        | OnTransitionEnd of (Browser.Event -> unit)
        interface IHTMLProp

    type SVGAttr =
        | ClipPath of string
        | Cx of obj
        | Cy of obj
        | D of string
        | Dx of obj
        | Dy of obj
        | Fill of string
        | FillOpacity of obj
        | FontFamily of string
        | FontSize of obj
        | Fx of obj
        | Fy of obj
        | GradientTransform of string
        | GradientUnits of string
        | Height of obj
        | MarkerEnd of string
        | MarkerMid of string
        | MarkerStart of string
        | Offset of obj
        | Opacity of obj
        | PatternContentUnits of string
        | PatternUnits of string
        | Points of string
        | PreserveAspectRatio of string
        | R of obj
        | Rx of obj
        | Ry of obj
        | SpreadMethod of string
        | StopColor of string
        | StopOpacity of obj
        | Stroke of string
        | StrokeDasharray of string
        | StrokeLinecap of string
        | StrokeMiterlimit of string
        | StrokeOpacity of obj
        | StrokeWidth of obj
        | TextAnchor of string
        | Transform of string
        | Version of string
        | ViewBox of string
        | Width of obj
        | X1 of obj
        | X2 of obj
        | X of obj
        | XlinkActuate of string
        | XlinkArcrole of string
        | XlinkHref of string
        | XlinkRole of string
        | XlinkShow of string
        | XlinkTitle of string
        | XlinkType of string
        | XmlBase of string
        | XmlLang of string
        | XmlSpace of string
        | Y1 of obj
        | Y2 of obj
        | Y of obj
        /// If you are searching for a way to provide a value not supported by this DSL then use something like: CSSProp.Custom ("align-content", "center")
        | [<Erase>] Custom of string * obj
        interface IProp

    type HTMLAttr =
        | DefaultChecked of bool
        | DefaultValue of string
        | Accept of string
        | AcceptCharset of string
        | AccessKey of string
        | Action of string
        | AllowFullScreen of bool
        | AllowTransparency of bool
        | Alt of string
        | [<CompiledName("aria-haspopup")>] AriaHasPopup of bool
        | [<CompiledName("aria-expanded")>] AriaExpanded of bool
        | Async of bool
        | AutoComplete of string
        | AutoFocus of bool
        | AutoPlay of bool
        | Capture of bool
        | CellPadding of obj
        | CellSpacing of obj
        | CharSet of string
        | Challenge of string
        | Checked of bool
        | ClassID of string
        | ClassName of string
        /// Alias of ClassName
        | [<CompiledName("className")>] Class of string
        | Cols of float
        | ColSpan of float
        | Content of string
        | ContentEditable of bool
        | ContextMenu of string
        | Controls of bool
        | Coords of string
        | CrossOrigin of string
        // | Data of string
        | [<CompiledName("data-toggle")>] DataToggle of string
        | DateTime of string
        | Default of bool
        | Defer of bool
        | Dir of string
        | Disabled of bool
        | Download of obj
        | Draggable of bool
        | EncType of string
        | Form of string
        | FormAction of string
        | FormEncType of string
        | FormMethod of string
        | FormNoValidate of bool
        | FormTarget of string
        | FrameBorder of obj
        | Headers of string
        | Height of obj
        | Hidden of bool
        | High of float
        | Href of string
        | HrefLang of string
        | HtmlFor of string
        | HttpEquiv of string
        | Icon of string
        | Id of string
        | InputMode of string
        | Integrity of string
        | Is of string
        | KeyParams of string
        | KeyType of string
        | Kind of string
        | Label of string
        | Lang of string
        | List of string
        | Loop of bool
        | Low of float
        | Manifest of string
        | MarginHeight of float
        | MarginWidth of float
        | Max of obj
        | MaxLength of float
        | Media of string
        | MediaGroup of string
        | Method of string
        | Min of obj
        | MinLength of float
        | Multiple of bool
        | Muted of bool
        | Name of string
        | NoValidate of bool
        | Open of bool
        | Optimum of float
        | Pattern of string
        | Placeholder of string
        | Poster of string
        | Preload of string
        | RadioGroup of string
        | ReadOnly of bool
        | Rel of string
        | Required of bool
        | Role of string
        | Rows of float
        | RowSpan of float
        | Sandbox of string
        | Scope of string
        | Scoped of bool
        | Scrolling of string
        | Seamless of bool
        | Selected of bool
        | Shape of string
        | Size of float
        | Sizes of string
        | Span of float
        | SpellCheck of bool
        | Src of string
        | SrcDoc of string
        | SrcLang of string
        | SrcSet of string
        | Start of float
        | Step of obj
        | Summary of string
        | TabIndex of float
        | Target of string
        | Title of string
        | Type of string
        | UseMap of string
        | Value of string
        | Width of obj
        | Wmode of string
        | Wrap of string
        | About of string
        | Datatype of string
        | Inlist of obj
        | Prefix of string
        | Property of string
        | Resource of string
        | Typeof of string
        | Vocab of string
        | AutoCapitalize of string
        | AutoCorrect of string
        | AutoSave of string
        // | Color of string // Conflicts with CSSProp, shouldn't be used in HTML5
        | ItemProp of string
        | ItemScope of bool
        | ItemType of string
        | ItemID of string
        | ItemRef of string
        | Results of float
        | Security of string
        | Unselectable of bool
        | [<Erase>] Custom of string * obj
        interface IHTMLProp

    type CSSProp =
        | AlignContent of obj
        | AlignItems of obj
        | AlignSelf of obj
        | AlignmentAdjust of obj
        | AlignmentBaseline of obj
        | All of obj
        | Animation of obj
        | AnimationDelay of obj
        | AnimationDirection of obj
        | AnimationDuration of obj
        | AnimationFillMode of obj
        | AnimationIterationCount of obj
        | AnimationName of obj
        | AnimationPlayState of obj
        | AnimationTimingFunction of obj
        | Appearance of obj
        | BackfaceVisibility of obj
        | Background of obj
        | BackgroundAttachment of obj
        | BackgroundBlendMode of obj
        | BackgroundClip of obj
        | BackgroundColor of obj
        | BackgroundComposite of obj
        | BackgroundImage of obj
        | BackgroundOrigin of obj
        | BackgroundPosition of obj
        | BackgroundPositionX of obj
        | BackgroundPositionY of obj
        | BackgroundRepeat of obj
        | BackgroundSize of obj
        | BaselineShift of obj
        | Behavior of obj
        | BlockSize of obj
        | Border of obj
        | BorderBlockEnd of obj
        | BorderBlockEndColor of obj
        | BorderBlockEndStyle of obj
        | BorderBlockEndWidth of obj
        | BorderBlockStart of obj
        | BorderBlockStartColor of obj
        | BorderBlockStartStyle of obj
        | BorderBlockStartWidth of obj
        | BorderBottom of obj
        | BorderBottomColor of obj
        | BorderBottomLeftRadius of obj
        | BorderBottomRightRadius of obj
        | BorderBottomStyle of obj
        | BorderBottomWidth of obj
        | BorderCollapse of obj
        | BorderColor of obj
        | BorderCornerShape of obj
        | BorderImage of obj
        | BorderImageOutset of obj
        | BorderImageRepeat of obj
        | BorderImageSlice of obj
        | BorderImageSource of obj
        | BorderImageWidth of obj
        | BorderInlineEnd of obj
        | BorderInlineEndColor of obj
        | BorderInlineEndStyle of obj
        | BorderInlineEndWidth of obj
        | BorderInlineStart of obj
        | BorderInlineStartColor of obj
        | BorderInlineStartStyle of obj
        | BorderInlineStartWidth of obj
        | BorderLeft of obj
        | BorderLeftColor of obj
        | BorderLeftStyle of obj
        | BorderLeftWidth of obj
        | BorderRadius of obj
        | BorderRight of obj
        | BorderRightColor of obj
        | BorderRightStyle of obj
        | BorderRightWidth of obj
        | BorderSpacing of obj
        | BorderStyle of obj
        | BorderTop of obj
        | BorderTopColor of obj
        | BorderTopLeftRadius of obj
        | BorderTopRightRadius of obj
        | BorderTopStyle of obj
        | BorderTopWidth of obj
        | BorderWidth of obj
        | Bottom of obj
        | BoxAlign of obj
        | BoxDecorationBreak of obj
        | BoxDirection of obj
        | BoxFlex of obj
        | BoxFlexGroup of obj
        | BoxLineProgression of obj
        | BoxLines of obj
        | BoxOrdinalGroup of obj
        | BoxShadow of obj
        | BoxSizing of obj
        | BreakAfter of obj
        | BreakBefore of obj
        | BreakInside of obj
        | CaptionSide of obj
        | CaretColor of obj
        | Clear of obj
        | Clip of obj
        | ClipPath of obj
        | ClipRule of obj
        | Color of obj
        | ColorInterpolation of obj
        | ColorInterpolationFilters of obj
        | ColorProfile of obj
        | ColorRendering of obj
        | ColumnCount of obj
        | ColumnFill of obj
        | ColumnGap of obj
        | ColumnRule of obj
        | ColumnRuleColor of obj
        | ColumnRuleStyle of obj
        | ColumnRuleWidth of obj
        | ColumnSpan of obj
        | ColumnWidth of obj
        | Columns of obj
        | Content of obj
        | CounterIncrement of obj
        | CounterReset of obj
        | Cue of obj
        | CueAfter of obj
        | Cursor of obj
        | Direction of obj
        | Display of obj
        | DominantBaseline of obj
        | EmptyCells of obj
        | EnableBackground of obj
        | Fill of obj
        | FillOpacity of obj
        | FillRule of obj
        | Filter of obj
        | Flex of obj
        | FlexAlign of obj
        | FlexBasis of obj
        | FlexDirection of obj
        | FlexFlow of obj
        | FlexGrow of obj
        | FlexItemAlign of obj
        | FlexLinePack of obj
        | FlexOrder of obj
        | FlexShrink of obj
        | FlexWrap of obj
        | Float of obj
        | FloodColor of obj
        | FloodOpacity of obj
        | FlowFrom of obj
        | Font of obj
        | FontFamily of obj
        | FontFeatureSettings of obj
        | FontKerning of obj
        | FontLanguageOverride of obj
        | FontSize of obj
        | FontSizeAdjust of obj
        | FontStretch of obj
        | FontStyle of obj
        | FontSynthesis of obj
        | FontVariant of obj
        | FontVariantAlternates of obj
        | FontVariantCaps of obj
        | FontVariantEastAsian of obj
        | FontVariantLigatures of obj
        | FontVariantNumeric of obj
        | FontVariantPosition of obj
        | FontWeight of obj
        | GlyphOrientationHorizontal of obj
        | GlyphOrientationVertical of obj
        | Grid of obj
        | GridArea of obj
        | GridAutoColumns of obj
        | GridAutoFlow of obj
        | GridAutoRows of obj
        | GridColumn of obj
        | GridColumnEnd of obj
        | GridColumnGap of obj
        | GridColumnStart of obj
        | GridGap of obj
        | GridRow of obj
        | GridRowEnd of obj
        | GridRowGap of obj
        | GridRowPosition of obj
        | GridRowSpan of obj
        | GridRowStart of obj
        | GridTemplate of obj
        | GridTemplateAreas of obj
        | GridTemplateColumns of obj
        | GridTemplateRows of obj
        | HangingPunctuation of obj
        | Height of obj
        | HyphenateLimitChars of obj
        | HyphenateLimitLines of obj
        | HyphenateLimitZone of obj
        | Hyphens of obj
        | ImageOrientation of obj
        | ImageRendering of obj
        | ImageResolution of obj
        | ImeMode of obj
        | InlineSize of obj
        | Isolation of obj
        | JustifyContent of obj
        | Kerning of obj
        | LayoutGrid of obj
        | LayoutGridChar of obj
        | LayoutGridLine of obj
        | LayoutGridMode of obj
        | LayoutGridType of obj
        | Left of obj
        | LetterSpacing of obj
        | LightingColor of obj
        | LineBreak of obj
        | LineClamp of obj
        | LineHeight of obj
        | ListStyle of obj
        | ListStyleImage of obj
        | ListStylePosition of obj
        | ListStyleType of obj
        | Margin of obj
        | MarginBlockEnd of obj
        | MarginBlockStart of obj
        | MarginBottom of obj
        | MarginInlineEnd of obj
        | MarginInlineStart of obj
        | MarginLeft of obj
        | MarginRight of obj
        | MarginTop of obj
        | MarkerEnd of obj
        | MarkerMid of obj
        | MarkerStart of obj
        | MarqueeDirection of obj
        | MarqueeStyle of obj
        | Mask of obj
        | MaskBorder of obj
        | MaskBorderRepeat of obj
        | MaskBorderSlice of obj
        | MaskBorderSource of obj
        | MaskBorderWidth of obj
        | MaskClip of obj
        | MaskComposite of obj
        | MaskImage of obj
        | MaskMode of obj
        | MaskOrigin of obj
        | MaskPosition of obj
        | MaskRepeat of obj
        | MaskSize of obj
        | MaskType of obj
        | MaxFontSize of obj
        | MaxHeight of obj
        | MaxWidth of obj
        | MinBlockSize of obj
        | MinHeight of obj
        | MinInlineSize of obj
        | MinWidth of obj
        | MixBlendMode of obj
        | ObjectFit of obj
        | ObjectPosition of obj
        | OffsetBlockEnd of obj
        | OffsetBlockStart of obj
        | OffsetInlineEnd of obj
        | OffsetInlineStart of obj
        | Opacity of obj
        | Order of obj
        | Orphans of obj
        | Outline of obj
        | OutlineColor of obj
        | OutlineOffset of obj
        | OutlineStyle of obj
        | OutlineWidth of obj
        | Overflow of obj
        | OverflowStyle of obj
        | OverflowWrap of obj
        | OverflowX of obj
        | OverflowY of obj
        | Padding of obj
        | PaddingBlockEnd of obj
        | PaddingBlockStart of obj
        | PaddingBottom of obj
        | PaddingInlineEnd of obj
        | PaddingInlineStart of obj
        | PaddingLeft of obj
        | PaddingRight of obj
        | PaddingTop of obj
        | PageBreakAfter of obj
        | PageBreakBefore of obj
        | PageBreakInside of obj
        | Pause of obj
        | PauseAfter of obj
        | PauseBefore of obj
        | Perspective of obj
        | PerspectiveOrigin of obj
        | PointerEvents of obj
        | Position of obj
        | PunctuationTrim of obj
        | Quotes of obj
        | RegionFragment of obj
        | Resize of obj
        | RestAfter of obj
        | RestBefore of obj
        | Right of obj
        | RubyAlign of obj
        | RubyMerge of obj
        | RubyPosition of obj
        | ScrollBehavior of obj
        | ScrollSnapCoordinate of obj
        | ScrollSnapDestination of obj
        | ScrollSnapType of obj
        | ShapeImageThreshold of obj
        | ShapeInside of obj
        | ShapeMargin of obj
        | ShapeOutside of obj
        | ShapeRendering of obj
        | Speak of obj
        | SpeakAs of obj
        | StopColor of obj
        | StopOpacity of obj
        | Stroke of obj
        | StrokeDasharray of obj
        | StrokeDashoffset of obj
        | StrokeLinecap of obj
        | StrokeLinejoin of obj
        | StrokeMiterlimit of obj
        | StrokeOpacity of obj
        | StrokeWidth of obj
        | TabSize of obj
        | TableLayout of obj
        | TextAlign of obj
        | TextAlignLast of obj
        | TextAnchor of obj
        | TextCombineUpright of obj
        | TextDecoration of obj
        | TextDecorationColor of obj
        | TextDecorationLine of obj
        | TextDecorationLineThrough of obj
        | TextDecorationNone of obj
        | TextDecorationOverline of obj
        | TextDecorationSkip of obj
        | TextDecorationStyle of obj
        | TextDecorationUnderline of obj
        | TextEmphasis of obj
        | TextEmphasisColor of obj
        | TextEmphasisPosition of obj
        | TextEmphasisStyle of obj
        | TextHeight of obj
        | TextIndent of obj
        | TextJustify of obj
        | TextJustifyTrim of obj
        | TextKashidaSpace of obj
        | TextLineThrough of obj
        | TextLineThroughColor of obj
        | TextLineThroughMode of obj
        | TextLineThroughStyle of obj
        | TextLineThroughWidth of obj
        | TextOrientation of obj
        | TextOverflow of obj
        | TextOverline of obj
        | TextOverlineColor of obj
        | TextOverlineMode of obj
        | TextOverlineStyle of obj
        | TextOverlineWidth of obj
        | TextRendering of obj
        | TextScript of obj
        | TextShadow of obj
        | TextTransform of obj
        | TextUnderlinePosition of obj
        | TextUnderlineStyle of obj
        | Top of obj
        | TouchAction of obj
        | Transform of obj
        | TransformBox of obj
        | TransformOrigin of obj
        | TransformOriginZ of obj
        | TransformStyle of obj
        | Transition of obj
        | TransitionDelay of obj
        | TransitionDuration of obj
        | TransitionProperty of obj
        | TransitionTimingFunction of obj
        | UnicodeBidi of obj
        | UnicodeRange of obj
        | UserFocus of obj
        | UserInput of obj
        | VerticalAlign of obj
        | Visibility of obj
        | VoiceBalance of obj
        | VoiceDuration of obj
        | VoiceFamily of obj
        | VoicePitch of obj
        | VoiceRange of obj
        | VoiceRate of obj
        | VoiceStress of obj
        | VoiceVolume of obj
        | WhiteSpace of obj
        | WhiteSpaceTreatment of obj
        | Widows of obj
        | Width of obj
        | WillChange of obj
        | WordBreak of obj
        | WordSpacing of obj
        | WordWrap of obj
        | WrapFlow of obj
        | WrapMargin of obj
        | WrapOption of obj
        | WritingMode of obj
        | ZIndex of obj
        | Zoom of obj
        /// If you are searching for a way to provide a value not supported by this DSL then use something like: CSSProp.Custom ("align-content", "center")
        | [<Erase>] Custom of string * obj

    let Style (css: CSSProp seq): HTMLAttr =
        !!("style", keyValueList CaseRules.LowerFirst css)

    let Data (key: string, value: obj): IHTMLProp =
        !!("data-" + key, value)

open Props

// /// Instantiate an imported React component
// let from<'P> (com: ComponentClass<'P>) (props: 'P) (children: ReactElement seq): ReactElement =
//     createElement(com, props, children)

/// Instantiate a stateless component from a function
/// Example:
/// ```
/// let Hello (p: MyProps) = div [] [ofString ("Hello " + p.name)]
/// ofFunction Hello { name = "Maxime" } []
/// ```
let ofFunction<'P> (f: 'P -> ReactElement) (props: 'P) (children: ReactElement seq): ReactElement =
    React.createElement(f, props, children)

// /// Instantiate an imported React component. The first two arguments must be string literals, "default" can be used for the first one.
// /// Example: `ofImport "Map" "leaflet" { x = 10; y = 50 } []`
// let ofImport<'P> (importMember: string) (importPath: string) (props: 'P) (children: ReactElement seq): ReactElement =
//     React.createElement(import importMember importPath, props, children)

/// Alias of `ofString`
let str (s: string): ReactElement = unbox s

/// Cast a string to a React element (erased in runtime)
let ofString (s: string): ReactElement = unbox s

/// Cast an option value to a React element (erased in runtime)
let ofOption (o: ReactElement option): ReactElement =
    match o with Some o -> o | None -> null // Option.toObj(o)

/// Cast an int to a React element (erased in runtime)
let ofInt (i: int): ReactElement = unbox i

/// Cast a float to a React element (erased in runtime)
let ofFloat (f: float): ReactElement = unbox f

/// Returns a list **from .render() method**
let ofList (els: ReactElement list): ReactElement = unbox(List.toArray els)

/// Returns an array **from .render() method**
let ofArray (els: ReactElement array): ReactElement = unbox els

/// Instantiate a DOM React element
let domEl (tag: string) (props: IHTMLProp seq) (children: ReactElement seq): ReactElement =
    React.createElement(tag, keyValueList CaseRules.LowerFirst props, children)

/// Instantiate a DOM React element (void)
let voidEl (tag: string) (props: IHTMLProp seq) : ReactElement =
    React.createElement(tag, keyValueList CaseRules.LowerFirst props, [])

/// Instantiate an SVG React element
let svgEl (tag: string) (props: IProp seq) (children: ReactElement seq): ReactElement =
    React.createElement(tag, keyValueList CaseRules.LowerFirst props, children)

// /// Instantiate a React fragment
// let fragment (props: IFragmentProp seq) (children: ReactElement seq): ReactElement =
//     createElement(jsConstructor<Fragment>, keyValueList CaseRules.LowerFirst props, children)

// Standard elements
let a b c = domEl "a" b c
let abbr b c = domEl "abbr" b c
let address b c = domEl "address" b c
let article b c = domEl "article" b c
let aside b c = domEl "aside" b c
let audio b c = domEl "audio" b c
let b b' c = domEl "b" b' c
let bdi b c = domEl "bdi" b c
let bdo b c = domEl "bdo" b c
let big b c = domEl "big" b c
let blockquote b c = domEl "blockquote" b c
let body b c = domEl "body" b c
let button b c = domEl "button" b c
let canvas b c = domEl "canvas" b c
let caption b c = domEl "caption" b c
let cite b c = domEl "cite" b c
let code b c = domEl "code" b c
let colgroup b c = domEl "colgroup" b c
let data b c = domEl "data" b c
let datalist b c = domEl "datalist" b c
let dd b c = domEl "dd" b c
let del b c = domEl "del" b c
let details b c = domEl "details" b c
let dfn b c = domEl "dfn" b c
let dialog b c = domEl "dialog" b c
let div b c = domEl "div" b c
let dl b c = domEl "dl" b c
let dt b c = domEl "dt" b c
let em b c = domEl "em" b c
let fieldset b c = domEl "fieldset" b c
let figcaption b c = domEl "figcaption" b c
let figure b c = domEl "figure" b c
let footer b c = domEl "footer" b c
let form b c = domEl "form" b c
let h1 b c = domEl "h1" b c
let h2 b c = domEl "h2" b c
let h3 b c = domEl "h3" b c
let h4 b c = domEl "h4" b c
let h5 b c = domEl "h5" b c
let h6 b c = domEl "h6" b c
let head b c = domEl "head" b c
let header b c = domEl "header" b c
let hgroup b c = domEl "hgroup" b c
let html b c = domEl "html" b c
let i b c = domEl "i" b c
let iframe b c = domEl "iframe" b c
let ins b c = domEl "ins" b c
let kbd b c = domEl "kbd" b c
let label b c = domEl "label" b c
let legend b c = domEl "legend" b c
let li b c = domEl "li" b c
let main b c = domEl "main" b c
let map b c = domEl "map" b c
let mark b c = domEl "mark" b c
let menu b c = domEl "menu" b c
let meter b c = domEl "meter" b c
let nav b c = domEl "nav" b c
let noscript b c = domEl "noscript" b c
let ``object`` b c = domEl "object" b c
let ol b c = domEl "ol" b c
let optgroup b c = domEl "optgroup" b c
let option b c = domEl "option" b c
let output b c = domEl "output" b c
let p b c = domEl "p" b c
let picture b c = domEl "picture" b c
let pre b c = domEl "pre" b c
let progress b c = domEl "progress" b c
let q b c = domEl "q" b c
let rp b c = domEl "rp" b c
let rt b c = domEl "rt" b c
let ruby b c = domEl "ruby" b c
let s b c = domEl "s" b c
let samp b c = domEl "samp" b c
let script b c = domEl "script" b c
let section b c = domEl "section" b c
let select b c = domEl "select" b c
let small b c = domEl "small" b c
let span b c = domEl "span" b c
let strong b c = domEl "strong" b c
let style b c = domEl "style" b c
let sub b c = domEl "sub" b c
let summary b c = domEl "summary" b c
let sup b c = domEl "sup" b c
let table b c = domEl "table" b c
let tbody b c = domEl "tbody" b c
let td b c = domEl "td" b c
let textarea b c = domEl "textarea" b c
let tfoot b c = domEl "tfoot" b c
let th b c = domEl "th" b c
let thead b c = domEl "thead" b c
let time b c = domEl "time" b c
let title b c = domEl "title" b c
let tr b c = domEl "tr" b c
let u b c = domEl "u" b c
let ul b c = domEl "ul" b c
let var b c = domEl "var" b c
let video b c = domEl "video" b c

// Void element
let area b = voidEl "area" b
let ``base`` b = voidEl "base" b
let br b = voidEl "br" b
let col b = voidEl "col" b
let embed b = voidEl "embed" b
let hr b = voidEl "hr" b
let img b = voidEl "img" b
let input b = voidEl "input" b
let keygen b = voidEl "keygen" b
let link b = voidEl "link" b
let menuitem b = voidEl "menuitem" b
let meta b = voidEl "meta" b
let param b = voidEl "param" b
let source b = voidEl "source" b
let track b = voidEl "track" b
let wbr b = voidEl "wbr" b

// SVG elements
let svg b c = svgEl "svg" b c
let circle b c = svgEl "circle" b c
let clipPath b c = svgEl "clipPath" b c
let defs b c = svgEl "defs" b c
let ellipse b c = svgEl "ellipse" b c
let g b c = svgEl "g" b c
let image b c = svgEl "image" b c
let line b c = svgEl "line" b c
let linearGradient b c = svgEl "linearGradient" b c
let mask b c = svgEl "mask" b c
let path b c = svgEl "path" b c
let pattern b c = svgEl "pattern" b c
let polygon b c = svgEl "polygon" b c
let polyline b c = svgEl "polyline" b c
let radialGradient b c = svgEl "radialGradient" b c
let rect b c = svgEl "rect" b c
let stop b c = svgEl "stop" b c
let text b c = svgEl "text" b c
let tspan b c = svgEl "tspan" b c

// Class list helpers
let classBaseList std classes =
    classes
    |> List.fold (fun complete -> function | (name,true) -> complete + " " + name | _ -> complete) std
    |> ClassName

let classList classes = classBaseList "" classes

/// Finds a DOM element by its ID and mounts the React element there
let mountById (domElId: string) (reactEl: ReactElement): unit =
    ReactDom.render(reactEl, Browser.document.getElementById(domElId))

/// Finds the first DOM element matching a CSS selector and mounts the React element there
let mountBySelector (domElSelector: string) (reactEl: ReactElement): unit =
    ReactDom.render(reactEl, Browser.document.querySelector(domElSelector))

// type Fable.Import.React.FormEvent with
//     /// Access the value from target
//     /// Equivalent to `unbox<string> this.target?value`
//     member this.Value =
//         unbox<string> this.target?value

// // Helpers for ReactiveComponents (see #44)
// module ReactiveComponents =
//     type Props<'P, 'S, 'Msg> = {
//         key: string
//         props: 'P
//         update: 'Msg -> 'S -> 'S
//         view: Model<'P, 'S> -> ('Msg->unit) -> ReactElement
//         init: 'P -> 'S
//     }

//     and State<'T> = {
//         value: 'T
//     }

//     and Model<'P, 'S> = {
//         props: 'P
//         state: 'S
//         children: ReactElement[]
//     }

// open ReactiveComponents

// type ReactiveCom<'P, 'S, 'Msg>(initProps) =
//     inherit Component<Props<'P, 'S, 'Msg>, State<'S>>(initProps)
//     do base.setInitState { value = initProps.init(initProps.props) }

//     override this.render() =
//         let model =
//             { props = this.props.props
//               state = this.state.value
//               children = this.children }
//         this.props.view model (fun msg ->
//             let newState = this.props.update msg this.state.value
//             this.setState({ value = newState }))

// /// Renders a stateful React component from functions similar to Elmish
// ///  * `init` - Initializes component state with given props
// ///  * `update` - Updates the state when `dispatch` is triggered
// ///  * `view` - Render function, receives a `ReactiveComponents.Model` object and a `dispatch` function
// ///  * `key` - The key is necessary to identify React elements in a list, an empty string can be passed otherwise
// ///  * `props` - External properties passed to the component each time it's rendered, usually from its parent
// ///  * `children` - A list of children React elements
// let reactiveCom<'P, 'S, 'Msg>
//         (init: 'P -> 'S)
//         (update: 'Msg -> 'S -> 'S)
//         (view: Model<'P, 'S> -> ('Msg->unit) -> ReactElement)
//         (key: string)
//         (props: 'P)
//         (children: ReactElement seq): ReactElement =
//     ofType<ReactiveCom<'P, 'S, 'Msg>, Props<'P, 'S, 'Msg>, State<'S>>
//         { key=key; props=props; update=update; view=view; init=init }
//         children