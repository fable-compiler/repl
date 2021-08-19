namespace Feliz

open System
open Feliz.Styles

type AttrEngine<'Node>
    /// <summary>Customizable HTML Attribute generator API.</summary>
    ///
    /// <param name="mk">Make a node with attribute name and value.</param>
    /// <param name="mkBool">Make a node for boolean attribute with name and value.</param>
    (mk: string -> string -> 'Node, mkBool: string -> bool -> 'Node) =

    /// Create a custom attribute
    ///
    /// You generally shouldn't need to use this, if you notice an attribute missing please submit an issue.
    member _.custom (key: string, value: string) = mk key value

    /// List of types the server accepts, typically a file type.
    member _.accept (value: string) = mk "accept" value

    /// List of supported charsets.
    member _.acceptCharset (value: string) = mk "accept-charset" value

    /// Defines a keyboard shortcut to activate or add focus to the element.
    member _.accessKey (value: string) = mk "accesskey" value

    /// The URI of a program that processes the information submitted via the form.
    member _.action (value: string) = mk "action" value

    /// Alternative text in case an image can't be displayed.
    member _.alt (value: string) = mk "alt" value

    /// Controls the amplitude of the gamma function of a component transfer element when
    /// its type attribute is gamma.
    member _.amplitude (value: float) = mk "amplitude" (Util.asString value)

    /// Controls the amplitude of the gamma function of a component transfer element when
    /// its type attribute is gamma.
    member _.amplitude (value: int) = mk "amplitude" (Util.asString value)

    /// Identifies the currently active descendant of a `composite` widget.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-activedescendant
    member _.ariaActiveDescendant (id: string) = mk "aria-activedescendant" id

    /// Indicates whether assistive technologies will present all, or only parts
    /// of, the changed region based on the change notifications defined by the
    /// `aria-relevant` attribute.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-atomic
    member _.ariaAtomic (value: bool) = mkBool "aria-atomic" value

    /// Indicates whether an element, and its subtree, are currently being
    /// updated.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-busy
    member _.ariaBusy (value: bool) = mkBool "aria-busy" value

    /// Indicates the current "checked" state of checkboxes, radio buttons, and
    /// other widgets. See related `aria-pressed` and `aria-selected`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-checked
    member _.ariaChecked (value: bool) = mkBool "aria-checked" value

    /// Identifies the element (or elements) whose contents or presence are
    /// controlled by the current element. See related `aria-owns`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-controls
    member _.ariaControls ([<ParamArray>] ids: string[]) = mk "aria-controls" (String.concat " " ids)

    /// Specifies a URI referencing content that describes the object. See
    /// related `aria-describedby`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-describedat

    member _.ariaDescribedAt (uri: string) = mk "aria-describedat" uri
    /// Identifies the element (or elements) that describes the object. See
    /// related `aria-describedat` and `aria-labelledby`.
    ///
    /// The `aria-labelledby` attribute is similar to `aria-describedby` in that
    /// both reference other elements to calculate a text alternative, but a
    /// label should be concise, where a description is intended to provide more
    /// verbose information.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-describedby

    member _.ariaDescribedBy ([<ParamArray>] ids: string[]) = mk "aria-describedby" (String.concat " " ids)
    /// Indicates that the element is perceivable but disabled, so it is not
    /// editable or otherwise operable. See related `aria-hidden` and
    /// `aria-readonly`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-disabled
    member _.ariaDisabled (value: bool) = mkBool "aria-disabled" value

    // /// Indicates what functions can be performed when the dragged object is
    // /// released on the drop target. This allows assistive technologies to
    // /// convey the possible drag options available to users, including whether a
    // /// pop-up menu of choices is provided by the application. Typically, drop
    // /// effect functions can only be provided once an object has been grabbed
    // /// for a drag operation as the drop effect functions available are
    // /// dependent on the object being dragged.
    // ///
    // /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-dropeffect
    // member _.ariaDropEffect ([<ParamArray>] values: AriaDropEffect []) = mk "aria-dropeffect" values |> Array.map Util.asString |> String.concat " "

    /// Indicates whether the element, or another grouping element it controls,
    /// is currently expanded or collapsed.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-expanded
    member _.ariaExpanded (value: bool) = mkBool "aria-expanded" value

    /// Identifies the next element (or elements) in an alternate reading order
    /// of content which, at the user's discretion, allows assistive technology
    /// to override the general default of reading in document source order.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-flowto
    member _.ariaFlowTo ([<ParamArray>] ids: string[]) = mk "aria-flowto" (String.concat " " ids)

    /// Indicates an element's "grabbed" state in a drag-and-drop operation.
    ///
    /// When it is set to true it has been selected for dragging, false
    /// indicates that the element can be grabbed for a drag-and-drop operation,
    /// but is not currently grabbed, and undefined (or no value) indicates the
    /// element cannot be grabbed (default).
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-grabbed
    member _.ariaGrabbed (value: bool) = mkBool "aria-grabbed" value

    /// Indicates that the element has a popup context menu or sub-level menu.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-haspopup
    member _.ariaHasPopup (value: bool) = mkBool "aria-haspopup" value

    /// Indicates that the element and all of its descendants are not visible or
    /// perceivable to any user as implemented by the author. See related
    /// `aria-disabled`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-hidden
    member _.ariaHidden (value: bool) = mkBool "aria-hidden" value

    /// Indicates the entered value does not conform to the format expected by
    /// the application.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-invalid
    member _.ariaInvalid (value: bool) = mkBool "aria-invalid" value

    /// Defines a (Util.asString value) that labels the current element. See related
    /// `aria-labelledby`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-label
    member _.ariaLabel (value: string) = mk "aria-label" value
    /// Defines the hierarchical level of an element within a structure.
    ///
    /// This can be applied inside trees to tree items, to headings inside a
    /// document, to nested grids, nested tablists and to other structural items
    /// that may appear inside a container or participate in an ownership
    /// hierarchy. The value for `aria-level` is an integer greater than or
    /// equal to 1.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-level
    member _.ariaLevel (value: int) = mk "aria-level" (Util.asString value)

    /// Identifies the element (or elements) that labels the current element.
    /// See related `aria-label` and `aria-describedby`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-labelledby
    member _.ariaLabelledBy ([<ParamArray>] ids: string[]) = mk "aria-labelledby" (String.concat " " ids)

    /// Indicates whether a text box accepts multiple lines of input or only a
    /// single line.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-multiline
    member _.ariaMultiLine (value: bool) = mkBool "aria-multiline" value

    /// Indicates that the user may select more than one item from the current
    /// selectable descendants.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-multiselectable
    member _.ariaMultiSelectable (value: bool) = mkBool "aria-multiselectable" value

    /// Identifies an element (or elements) in order to define a visual,
    /// functional, or contextual parent/child relationship between DOM elements
    /// where the DOM hierarchy cannot be used to represent the relationship.
    /// See related `aria-controls`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-owns
    member _.ariaOwns ([<ParamArray>] ids: string[]) = mk "aria-owns" (String.concat " " ids)

    /// Indicates the current "pressed" state of toggle buttons. See related
    /// `aria-checked` and `aria-selected`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-pressed
    member _.ariaPressed (value: bool) = mkBool "aria-pressed" value

    /// Defines an element's number or position in the current set of listitems
    /// or treeitems. Not required if all elements in the set are present in the
    /// DOM. See related `aria-setsize`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-posinset
    member _.ariaPosInSet (value: int) = mk "aria-posinset" (Util.asString value)

    /// Indicates that the element is not editable, but is otherwise operable.
    /// See related `aria-disabled`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-readonly
    member _.ariaReadOnly (value: bool) = mkBool "aria-readonly" value

    // /// Indicates what user agent change notifications (additions, removals,
    // /// etc.) assistive technologies will receive within a live region. See
    // /// related `aria-atomic`.
    // ///
    // /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-relevant
    // member _.ariaRelevant ([<ParamArray>] values: AriaRelevant []) = mk "aria-relevant" values |> Array.map Util.asString |> String.concat " "

    /// Indicates that user input is required on the element before a form may
    /// be submitted.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-required
    member _.ariaRequired (value: bool) = mkBool "aria-required" value

    /// Indicates the current "selected" state of various widgets. See related
    /// `aria-checked` and `aria-pressed`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-selected
    member _.ariaSelected (value: bool) = mkBool "aria-selected" value

    /// Defines the maximum allowed value for a range widget.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuemax
    member _.ariaValueMax (value: float) = mk "aria-valuemax" (Util.asString value)
    /// Defines the maximum allowed value for a range widget.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuemax
    member _.ariaValueMax (value: int) = mk "aria-valuemax" (Util.asString value)

    /// Defines the minimum allowed value for a range widget.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuemin
    member _.ariaValueMin (value: float) = mk "aria-valuemin" (Util.asString value)
    /// Defines the minimum allowed value for a range widget.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuemin
    member _.ariaValueMin (value: int) = mk "aria-valuemin" (Util.asString value)

    /// Defines the current value for a range widget. See related
    /// `aria-valuetext`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuenow
    member _.ariaValueNow (value: float) = mk "aria-valuenow" (Util.asString value)
    /// Defines the current value for a range widget. See related
    /// `aria-valuetext`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuenow
    member _.ariaValueNow (value: int) = mk "aria-valuenow" (Util.asString value)

    /// Defines the human readable text alternative of `aria-valuenow` for a
    /// range widget.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuetext
    member _.ariaValueText (value: string) = mk "aria-valuetext" value

    /// Defines the number of items in the current set of listitems or
    /// treeitems. Not required if all elements in the set are present in the
    /// DOM. See related `aria-posinset`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-setsize
    member _.ariaSetSize (value: int) = mk "aria-setsize" (Util.asString value)

    /// Indicates that the script should be executed asynchronously.
    member _.async (value: bool) = mkBool "async" value

    /// Indicates the name of the CSS property or attribute of the target element
    /// that is going to be changed during an animation.
    member _.attributeName (value: string) = mk "attributeName" value

    /// Indicates whether controls in this form can by default have their values
    /// automatically completed by the browser.
    member _.autoComplete (value: string) = mk "autocomplete" value

    /// The element should be automatically focused after the page loaded.
    member _.autoFocus (value: bool) = mkBool "autofocus" value

    /// The audio or video should play as soon as possible.
    member _.autoPlay (value: bool) = mkBool "autoplay" value

    /// Specifies the direction angle for the light source on the XY plane (clockwise),
    /// in degrees from the x axis.
    member _.azimuth (value: float) = mk "azimuth" (Util.asString value)
    /// Specifies the direction angle for the light source on the XY plane (clockwise),
    /// in degrees from the x axis.
    member _.azimuth (value: int) = mk "azimuth" (Util.asString value)

    /// Represents the base frequency parameter for the noise function of the
    /// <feTurbulence> filter primitive.
    member _.baseFrequency (value: float) = mk "baseFrequency" (Util.asString value)
    /// Represents the base frequency parameter for the noise function of the
    /// <feTurbulence> filter primitive.
    member _.baseFrequency (value: int) = mk "baseFrequency" (Util.asString value)
    /// Represents the base frequency parameter for the noise function of the
    /// <feTurbulence> filter primitive.
    member _.baseFrequency (horizontal: float, vertical: float) = mk "baseFrequency" (Util.asString horizontal + "," + Util.asString vertical)
    /// Represents the base frequency parameter for the noise function of the
    /// <feTurbulence> filter primitive.
    member _.baseFrequency (horizontal: int, vertical: int) = mk "baseFrequency" (Util.asString horizontal + "," + Util.asString vertical)
    /// Represents the base frequency parameter for the noise function of the
    /// <feTurbulence> filter primitive.

    /// Defines when an animation should begin or when an element should be discarded.
    member _.begin' (value: string) = mk "begin" value

    /// Shifts the range of the filter. After applying the kernelMatrix of the <feConvolveMatrix>
    /// element to the input image to yield a number and applied the divisor attribute, the bias
    /// attribute is added to each component. This allows representation of values that would
    /// otherwise be clamped to 0 or 1.
    member _.bias (value: float) = mk "bias" (Util.asString value)
    /// Shifts the range of the filter. After applying the kernelMatrix of the <feConvolveMatrix>
    /// element to the input image to yield a number and applied the divisor attribute, the bias
    /// attribute is added to each component. This allows representation of values that would
    /// otherwise be clamped to 0 or 1.
    member _.bias (value: int) = mk "bias" (Util.asString value)

    /// Specifies a relative offset value for an attribute that will be modified during an animation.
    member _.by (value: float) = mk "by" (Util.asString value)
    /// Specifies a relative offset value for an attribute that will be modified during an animation.
    member _.by (value: int) = mk "by" (Util.asString value)
    /// Specifies a relative offset value for an attribute that will be modified during an animation.
    member _.by (value: string) = mk "by" value

    member _.capture (value: bool) = mkBool "capture" value

    /// This attribute declares the document's character encoding. Must be used in the meta tag.
    member _.charset (value: string) = mk "charset" value

    /// A URL that designates a source document or message for the information quoted. This attribute is intended to
    /// point to information explaining the context or the reference for the quote.
    member _.cite (value: string) = mk "cite" value

    /// Specifies a CSS class for this element.
    member _.className (value: string) = mk "class" value
    /// Takes a `seq<string>` and joins them using a space to combine the classses into a single class property.
    ///
    /// `prop.className [ "one"; "two" ]`
    ///
    /// is the same as
    ///
    /// `prop.className "one two"`
    member _.className (names: seq<string>) = mk "class" (String.concat " " names)

    /// Takes a `seq<string>` and joins them using a space to combine the classses into a single class property.
    ///
    /// `prop.classes [ "one"; "two" ]` => `prop.className "one two"`
    member _.classes (names: seq<string>) = mk "class" (String.concat " " names)

    member _.classes (names: seq<bool * string>) =
        let class' = names |> Seq.choose (function false, _ -> None | true, c -> Some c) |> String.concat " "
        mk "class" class'

    /// Defines the number of columns in a textarea.
    member _.cols (value: int) = mk "cols" (Util.asString value)

    /// Defines the number of columns a cell should span.
    member _.colSpan (value: int) = mk "colspan" (Util.asString value)

    /// A value associated with http-equiv or name depending on the context.
    member _.content (value: string) = mk "content" value

    /// Indicates whether the element's content is editable.
    member _.contentEditable (value: bool) = mkBool "contenteditable" value

    /// If true, the browser will offer controls to allow the user to control video playback,
    /// including volume, seeking, and pause/resume playback.
    member _.controls (value: bool) = mkBool "controls" value

    /// The SVG cx attribute define the x-axis coordinate of a center point.
    ///
    /// Three elements are using this attribute: <circle>, <ellipse>, and <radialGradient>
    member _.cx (value: ICssUnit) = mk "cx" (Util.asString value)
    /// The SVG cx attribute define the x-axis coordinate of a center point.
    ///
    /// Three elements are using this attribute: <circle>, <ellipse>, and <radialGradient>
    member _.cx (value: int) = mk "cx" (Util.asString value)

    /// The SVG cy attribute define the y-axis coordinate of a center point.
    ///
    /// Three elements are using this attribute: <circle>, <ellipse>, and <radialGradient>
    member _.cy (value: ICssUnit) = mk "cy" (Util.asString value)
    /// The SVG cy attribute define the y-axis coordinate of a center point.
    ///
    /// Three elements are using this attribute: <circle>, <ellipse>, and <radialGradient>
    member _.cy (value: int) = mk "cy" (Util.asString value)

    // TODO
    // /// Defines a SVG path to be drawn.
    // member _.d (path: seq<char * (float list list)>) =
    //     PropHelpers.createSvgPathFloat path
    //     |> h.MakeAttr("d",)
    // /// Defines a SVG path to be drawn.
    // member _.d (path: seq<char * (int list list)>) =
    //     PropHelpers.createSvgPathInt path
    //     |> h.MakeAttr("d",)
    /// Defines a SVG path to be drawn.
    member _.d (path: string) = mk "d" path

    // /// Sets the inner Html content of the element.
    // member _.dangerouslySetInnerHTML (content: string) = mk "dangerouslySetInnerHTML" (createObj [ "__html" ==> content ])

    /// This attribute indicates the time and/or date of the element.
    member _.dateTime (value: string) = mk "datetime" value

    /// Indicates to a browser that the script is meant to be executed after the document
    /// has been parsed, but before firing DOMContentLoaded.
    ///
    /// Scripts with the defer attribute will prevent the DOMContentLoaded event from
    /// firing until the script has loaded and finished evaluating.
    ///
    /// This attribute must not be used if the src attribute is absent (i.e. for inline scripts),
    /// in this case it would have no effect.
    member _.defer (value: bool) = mkBool "defer" value

    /// Represents the kd value in the Phong lighting model.
    ///
    /// In SVG, this can be any non-negative number.
    member _.diffuseConstant (value: float) = mk "diffuseConstant" (Util.asString value)
    /// Represents the kd value in the Phong lighting model.
    ///
    /// In SVG, this can be any non-negative number.
    member _.diffuseConstant (value: int) = mk "diffuseConstant" (Util.asString value)

    /// Sets the directionality of the element.
    member _.dirName (value: string) = mk "dirName" value

    /// Indicates whether the user can interact with the element.
    member _.disabled (value: bool) = mkBool "disabled" value

    /// Specifies the value by which the resulting number of applying the kernelMatrix
    /// of a <feConvolveMatrix> element to the input image color value is divided to
    /// yield the destination color value.
    ///
    /// A divisor that is the sum of all the matrix values tends to have an evening
    /// effect on the overall color intensity of the result.
    member _.divisor (value: float) = mk "divisor" (Util.asString value)
    /// Specifies the value by which the resulting number of applying the kernelMatrix
    /// of a <feConvolveMatrix> element to the input image color value is divided to
    /// yield the destination color value.
    ///
    /// A divisor that is the sum of all the matrix values tends to have an evening
    /// effect on the overall color intensity of the result.
    member _.divisor (value: int) = mk "divisor" (Util.asString value)

    /// This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a resource.
    member _.download (value: bool) = mkBool "download" value

    /// Indicates whether the the element can be dragged.
    member _.draggable (value: bool) = mkBool "draggable" value

    /// SVG attribute to indicate a shift along the x-axis on the position of an element or its content.
    member _.dx (value: float) = mk "dx" (Util.asString value)
    /// SVG attribute to indicate a shift along the x-axis on the position of an element or its content.
    member _.dx (value: int) = mk "dx" (Util.asString value)

    /// SVG attribute to indicate a shift along the y-axis on the position of an element or its content.
    member _.dy (value: float) = mk "dy" (Util.asString value)
    /// SVG attribute to indicate a shift along the y-axis on the position of an element or its content.
    member _.dy (value: int) = mk "dy" (Util.asString value)

    /// SVG attribute that specifies the direction angle for the light source from the XY plane towards
    /// the Z-axis, in degrees.
    ///
    /// Note that the positive Z-axis points towards the viewer of the content.
    member _.elevation (value: float) = mk "elevation" (Util.asString value)
    /// SVG attribute that specifies the direction angle for the light source from the XY plane towards
    /// the Z-axis, in degrees.
    ///
    /// Note that the positive Z-axis points towards the viewer of the content.
    member _.elevation (value: int) = mk "elevation" (Util.asString value)

    /// Defines an end value for the animation that can constrain the active duration.
    member _.end' (value: string) = mk "end" value
    /// Defines an end value for the animation that can constrain the active duration.
    member _.end' (values: seq<string>) = mk "end" (String.concat ";" values)
    /// Defines the exponent of the gamma function.
    member _.exponent (value: float) = mk "exponent" (Util.asString value)
    /// Defines the exponent of the gamma function.
    member _.exponent (value: int) = mk "exponent" (Util.asString value)

    // /// Defines the files that will be uploaded when using an input element of the file type.
    // member _.files (value: FileList) = mk "files" value

    /// SVG attribute to define the opacity of the paint server (color, gradient, pattern, etc) applied to a shape.
    member _.fillOpacity (value: float) = mk "fill-opacity" (Util.asString value)
    /// SVG attribute to define the opacity of the paint server (color, gradient, pattern, etc) applied to a shape.
    member _.fillOpacity (value: int) = mk "fill-opacity" (Util.asString value)

    /// SVG attribute to define the size of the font from baseline to baseline when multiple
    /// lines of text are set solid in a multiline layout environment.
    member _.fontSize (value: float) = mk "font-size" (Util.asString value)
    /// SVG attribute to define the size of the font from baseline to baseline when multiple
    /// lines of text are set solid in a multiline layout environment.
    member _.fontSize (value: int) = mk "font-size" (Util.asString value)

    /// A space-separated list of other elements’ ids, indicating that those elements contributed input
    /// values to (or otherwise affected) the calculation.
    member _.for' (value: string) = mk "for" value
    /// A space-separated list of other elements’ ids, indicating that those elements contributed input
    /// values to (or otherwise affected) the calculation.
    member _.for' (ids: #seq<string>) = mk "for" (ids |> String.concat " ")

    /// The <form> element to associate the <meter> element with (its form owner). The value of this
    /// attribute must be the id of a <form> in the same document. If this attribute is not set, the
    /// <button> is associated with its ancestor <form> element, if any. This attribute is only used
    /// if the <meter> element is being used as a form-associated element, such as one displaying a
    /// range corresponding to an <input type="number">.
    member _.form (value: string) = mk "form" value

    /// Indicates the initial value of the attribute that will be modified during the animation.
    ///
    /// When used with the `to` attribute, the animation will change the modified attribute from
    /// the from value to the to value.
    ///
    /// When used with the `by` attribute, the animation will change the attribute relatively
    /// from the from value by the value specified in by.
    member _.from (value: float) = mk "from" (Util.asString value)
    /// Indicates the initial value of the attribute that will be modified during the animation.
    ///
    /// When used with the `to` attribute, the animation will change the modified attribute from
    /// the from value to the to value.
    ///
    /// When used with the `by` attribute, the animation will change the attribute relatively
    /// from the from value by the value specified in by.
    member _.from (values: seq<float>) = mk "from" (values |> Seq.map Util.asString |> String.concat " ")
    /// Indicates the initial value of the attribute that will be modified during the animation.
    ///
    /// When used with the `to` attribute, the animation will change the modified attribute from
    /// the from value to the to value.
    ///
    /// When used with the `by` attribute, the animation will change the attribute relatively
    /// from the from value by the value specified in by.
    member _.from (value: int) = mk "from" (Util.asString value)
    /// Indicates the initial value of the attribute that will be modified during the animation.
    ///
    /// When used with the `to` attribute, the animation will change the modified attribute from
    /// the from value to the to value.
    ///
    /// When used with the `by` attribute, the animation will change the attribute relatively
    /// from the from value by the value specified in by.
    member _.from (values: seq<int>) = mk "from" (values |> Seq.map Util.asString |> String.concat " ")
    /// Indicates the initial value of the attribute that will be modified during the animation.
    ///
    /// When used with the `to` attribute, the animation will change the modified attribute from
    /// the from value to the to value.
    ///
    /// When used with the `by` attribute, the animation will change the attribute relatively
    /// from the from value by the value specified in by.
    member _.from (value: string) = mk "from" value
    /// Indicates the initial value of the attribute that will be modified during the animation.
    ///
    /// When used with the `to` attribute, the animation will change the modified attribute from
    /// the from value to the to value.
    ///
    /// When used with the `by` attribute, the animation will change the attribute relatively
    /// from the from value by the value specified in by.
    member _.from (values: seq<string>) = mk "from" (values |> String.concat " ")

    /// Defines the radius of the focal point for the radial gradient.
    member _.fr (value: int) = mk "fr" (Util.asString value)
    /// Defines the radius of the focal point for the radial gradient.
    member _.fr (value: ICssUnit) = mk "fr" (Util.asString value)

    /// Defines the x-axis coordinate of the focal point for a radial gradient.
    member _.fx (value: int) = mk "fx" (Util.asString value)
    /// Defines the x-axis coordinate of the focal point for a radial gradient.
    member _.fx (value: ICssUnit) = mk "fx" (Util.asString value)

    /// Defines the y-axis coordinate of the focal point for a radial gradient.
    member _.fy (value: int) = mk "fy" (Util.asString value)
    /// Defines the y-axis coordinate of the focal point for a radial gradient.
    member _.fy (value: ICssUnit) = mk "fy" (Util.asString value)

    /// Defines an optional additional transformation from the gradient coordinate system
    /// onto the target coordinate system (i.e., userSpaceOnUse or objectBoundingBox).
    ///
    /// This allows for things such as skewing the gradient. This additional transformation
    /// matrix is post-multiplied to (i.e., inserted to the right of) any previously defined
    /// transformations, including the implicit transformation necessary to convert from object
    /// bounding box units to user space.
    member _.gradientTransform (transform: ITransformProperty) =
        mk "gradientTransform" (Util.asString transform)
    /// Defines optional additional transformation(s) from the gradient coordinate system
    /// onto the target coordinate system (i.e., userSpaceOnUse or objectBoundingBox).
    ///
    /// This allows for things such as skewing the gradient. This additional transformation
    /// matrix is post-multiplied to (i.e., inserted to the right of) any previously defined
    /// transformations, including the implicit transformation necessary to convert from object
    /// bounding box units to user space.
    member _.gradientTransform (transforms: seq<ITransformProperty>) =
        mk "gradientTransform" (transforms |> Seq.map Util.asString |> String.concat " ")

    /// Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
    member _.hidden (value: bool) = mkBool "hidden" value

    /// Specifies the height of elements listed here. For all other elements, use the CSS height property.
    ///
    /// HTML: <canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>
    ///
    /// SVG: <feBlend>, <feColorMatrix>, <feComponentTransfer>, <feComposite>, <feConvolveMatrix>,
    /// <feDiffuseLighting>, <feDisplacementMap>, <feDropShadow>, <feFlood>, <feGaussianBlur>, <feImage>,
    /// <feMerge>, <feMorphology>, <feOffset>, <feSpecularLighting>, <feTile>, <feTurbulence>, <filter>,
    /// <mask>, <pattern>
    member _.height (value: ICssUnit) = mk "height" (Util.asString value)
    /// Specifies the height of elements listed here. For all other elements, use the CSS height property.
    ///
    /// HTML: <canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>
    ///
    /// SVG: <feBlend>, <feColorMatrix>, <feComponentTransfer>, <feComposite>, <feConvolveMatrix>,
    /// <feDiffuseLighting>, <feDisplacementMap>, <feDropShadow>, <feFlood>, <feGaussianBlur>, <feImage>,
    /// <feMerge>, <feMorphology>, <feOffset>, <feSpecularLighting>, <feTile>, <feTurbulence>, <filter>,
    /// <mask>, <pattern>
    member _.height (value: int) = mk "height" (Util.asString value)

    /// The lower numeric bound of the high end of the measured range. This must be less than the
    /// maximum value (max attribute), and it also must be greater than the low value and minimum
    /// value (low attribute and min attribute, respectively), if any are specified. If unspecified,
    /// or if greater than the maximum value, the high value is equal to the maximum value.
    member _.high (value: float) = mk "high" (Util.asString value)
    /// The lower numeric bound of the high end of the measured range. This must be less than the
    /// maximum value (max attribute), and it also must be greater than the low value and minimum
    /// value (low attribute and min attribute, respectively), if any are specified. If unspecified,
    /// or if greater than the maximum value, the high value is equal to the maximum value.
    member _.high (value: int) = mk "high" (Util.asString value)

    /// The URL of a linked resource.
    member _.href (value: string) = mk "href" value

    /// Indicates the language of the linked resource. Allowed values are determined by BCP47.
    ///
    /// Use this attribute only if the href attribute is present.
    member _.hrefLang (value: string) = mk "hreflang" value

    member _.htmlFor (value: string) = mk "for" value

    /// Often used with CSS to style a specific element. The value of this attribute must be unique.
    member _.id (value: int) = mk "id" ((Util.asString value))
    /// Often used with CSS to style a specific element. The value of this attribute must be unique.
    member _.id (value: string) = mk "id" value

    // /// Alias for `dangerouslySetInnerHTML`, sets the inner Html content of the element.
    // member _.innerHtml (content: string) = mk "dangerouslySetInnerHTML" (createObj [ "__html" ==> content ])

    /// Contains inline metadata that a user agent can use to verify that a fetched resource
    /// has been delivered free of unexpected manipulation.
    member _.integrity (value: string) = mk "integrity" value

    /// Defines the intercept of the linear function of color component transfers when the type
    /// attribute is set to linear.
    member _.intercept (value: float) = mk "intercept" (Util.asString value)
    /// Defines the intercept of the linear function of color component transfers when the type
    /// attribute is set to linear.
    member _.intercept (value: int) = mk "intercept" (Util.asString value)

    /// Sets the checked attribute for an element.
    member _.isChecked (value: bool) = mkBool "checked" value

    /// Sets the open attribute for an element.
    member _.isOpen (value: bool) = mkBool "open" value

    /// Defines one of the values to be used within the the arithmetic operation of the
    /// <feComposite> filter primitive.
    member _.k1 (value: float) = mk "k1" (Util.asString value)
    /// Defines one of the values to be used within the the arithmetic operation of the
    /// <feComposite> filter primitive.
    member _.k1 (value: int) = mk "k1" (Util.asString value)

    /// Defines one of the values to be used within the the arithmetic operation of the
    /// <feComposite> filter primitive.
    member _.k2 (value: float) = mk "k2" (Util.asString value)
    /// Defines one of the values to be used within the the arithmetic operation of the
    /// <feComposite> filter primitive.
    member _.k2 (value: int) = mk "k2" (Util.asString value)

    /// Defines one of the values to be used within the the arithmetic operation of the
    /// <feComposite> filter primitive.
    member _.k3 (value: float) = mk "k3" (Util.asString value)
    /// Defines one of the values to be used within the the arithmetic operation of the
    /// <feComposite> filter primitive.
    member _.k3 (value: int) = mk "k3" (Util.asString value)

    /// Defines one of the values to be used within the the arithmetic operation of the
    /// <feComposite> filter primitive.
    member _.k4 (value: float) = mk "k4" (Util.asString value)
    /// Defines one of the values to be used within the the arithmetic operation of the
    /// <feComposite> filter primitive.
    member _.k4 (value: int) = mk "k4" (Util.asString value)

    /// Defines the list of numbers that make up the kernel matrix for the
    /// <feConvolveMatrix> element.
    member _.kernelMatrix (values: seq<float>) = mk "kernelMatrix" (values |> Seq.map Util.asString |> String.concat " ")
    /// Defines the list of numbers that make up the kernel matrix for the
    /// <feConvolveMatrix> element.
    member _.kernelMatrix (values: seq<int>) = mk "kernelMatrix" (values |> Seq.map Util.asString  |> String.concat " ")

    /// Indicates the simple duration of an animation.
    member _.keyPoints (values: seq<float>) =
        mk "keyPoints" (values |> Seq.map Util.asString  |> String.concat ";")

    // /// Indicates the simple duration of an animation.
    // ///
    // /// Each control point description is a set of four values: x1 y1 x2 y2, describing the Bézier
    // /// control points for one time segment.
    // ///
    // /// The keyTimes values that define the associated segment are the Bézier "anchor points",
    // /// and the keySplines values are the control points. Thus, there must be one fewer sets of
    // /// control points than there are keyTimes.
    // ///
    // /// The values of x1 y1 x2 y2 must all be in the range 0 to 1.
    // member _.keySplines (values: seq<float * float * float * float>) =
    //     PropHelpers.createKeySplines(values)
    //     |> h.MakeAttr("keySplines",)

    /// Indicates the simple duration of an animation.
    member _.keyTimes (values: seq<float>) =
        mk "keyTimes" (values |> Seq.map Util.asString |> String.concat ";")

    /// Helps define the language of an element: the language that non-editable elements are
    /// written in, or the language that the editable elements should be written in by the user.
    member _.lang (value: string) = mk "lang" value

    /// Defines the color of the light source for lighting filter primitives.
    member _.lightingColor (value: string) = mk "lighting-color" value

    /// Represents the angle in degrees between the spot light axis (i.e. the axis between the
    /// light source and the point to which it is pointing at) and the spot light cone. So it
    /// defines a limiting cone which restricts the region where the light is projected.
    ///
    /// No light is projected outside the cone.
    member _.limitingConeAngle (value: float) = mk "limitingConeAngle" (Util.asString value)
    /// Represents the angle in degrees between the spot light axis (i.e. the axis between the
    /// light source and the point to which it is pointing at) and the spot light cone. So it
    /// defines a limiting cone which restricts the region where the light is projected.
    ///
    /// No light is projected outside the cone.
    member _.limitingConeAngle (value: int) = mk "limitingConeAngle" (Util.asString value)

    /// If true, the browser will automatically seek back to the start upon reaching the end of the video.
    member _.loop (value: bool) = mkBool "loop" value

    /// The upper numeric bound of the low end of the measured range. This must be greater than
    /// the minimum value (min attribute), and it also must be less than the high value and
    /// maximum value (high attribute and max attribute, respectively), if any are specified.
    /// If unspecified, or if less than the minimum value, the low value is equal to the minimum value.
    member _.low (value: float) = mk "low" (Util.asString value)
    /// The upper numeric bound of the low end of the measured range. This must be greater than
    /// the minimum value (min attribute), and it also must be less than the high value and
    /// maximum value (high attribute and max attribute, respectively), if any are specified.
    /// If unspecified, or if less than the minimum value, the low value is equal to the minimum value.
    member _.low (value: int) = mk "low" (Util.asString value)
    /// Indicates the maximum value allowed.
    member _.max (value: float) = mk "max" (Util.asString value)
    /// Indicates the maximum value allowed.
    member _.max (value: int) = mk "max" (Util.asString value)
    /// Indicates the maximum value allowed.
    member _.max (value: DateTime) = mk "max" (value.ToString("yyyy-MM-dd"))

    /// Defines the maximum number of characters allowed in the element.
    member _.maxLength (value: int) = mk "maxlength" (Util.asString value)

    /// This attribute specifies the media that the linked resource applies to.
    /// Its value must be a media type / media query. This attribute is mainly useful
    /// when linking to external stylesheets — it allows the user agent to pick the
    /// best adapted one for the device it runs on.
    ///
    /// In HTML 4, this can only be a simple white-space-separated list of media
    /// description literals, i.e., media types and groups, where defined and allowed
    /// as values for this attribute, such as print, screen, aural, braille. HTML5
    /// extended this to any kind of media queries, which are a superset of the allowed
    /// values of HTML 4.
    ///
    /// Browsers not supporting CSS3 Media Queries won't necessarily recognize the adequate
    /// link; do not forget to set fallback links, the restricted set of media queries
    /// defined in HTML 4.
    member _.media (value: string) = mk "media" value

    /// Defines which HTTP method to use when submitting the form. Can be GET (default) or POST.
    member _.method (value: string) = mk "method" value

    /// Indicates the minimum value allowed.
    member _.min (value: float) = mk "min" (Util.asString value)
    /// Indicates the minimum value allowed.
    member _.min (value: int) = mk "min" (Util.asString value)
    /// Indicates the minimum value allowed.
    member _.min (value: DateTime) = mk "min" (value.ToString("yyyy-MM-dd"))

    /// Defines the minimum number of characters allowed in the element.
    member _.minLength (value: int) = mk "minlength" (Util.asString value)

    /// Indicates whether multiple values can be entered in an input of the type email or file.
    member _.multiple (value: bool) = mkBool "multiple" value

    /// Indicates whether the audio will be initially silenced on page load.
    member _.muted (value: bool) = mkBool "muted" value

    /// Name of the element.
    ///
    /// For example used by the server to identify the fields in form submits.
    member _.name (value: string) = mk "name" value

    /// This Boolean attribute is set to indicate that the script should not be executed in
    /// browsers that support ES2015 modules — in effect, this can be used to serve fallback
    /// scripts to older browsers that do not support modular JavaScript code.
    member _.nomodule (value: bool) = mkBool "nomodule" value

    /// A cryptographic nonce (number used once) to whitelist scripts in a script-src
    /// Content-Security-Policy. The server must generate a unique nonce value each time
    /// it transmits a policy. It is critical to provide a nonce that cannot be guessed
    /// as bypassing a resource's policy is otherwise trivial.
    member _.nonce (value: string) = mk "nonce" value

    /// Defines the number of octaves for the noise function of the <feTurbulence> primitive.
    member _.numOctaves (value: int) = mk "numOctaves" (Util.asString value)

    /// SVG attribute to define where the gradient color will begin or end.
    member _.offset (value: ICssUnit) = mk "offset" (Util.asString value)
    /// SVG attribute to define where the gradient color will begin or end.
    member _.offset (value: int) = mk "offset" (Util.asString value)

    /// This attribute indicates the optimal numeric value. It must be within the range (as defined by the min
    /// attribute and max attribute). When used with the low attribute and high attribute, it gives an indication
    /// where along the range is considered preferable. For example, if it is between the min attribute and the
    /// low attribute, then the lower range is considered preferred.
    member _.optimum (value: float) = mk "optimum" (Util.asString value)
    /// This attribute indicates the optimal numeric value. It must be within the range (as defined by the min
    /// attribute and max attribute). When used with the low attribute and high attribute, it gives an indication
    /// where along the range is considered preferable. For example, if it is between the min attribute and the
    /// low attribute, then the lower range is considered preferred.
    member _.optimum (value: int) = mk "optimum" (Util.asString value)

    /// Indicates the minimum value allowed.
    member _.order (value: int) = mk "order" (Util.asString value)
    /// Indicates the minimum value allowed.
    member _.order (values: seq<int>) = mk "order" (values |> Seq.map Util.asString |> String.concat " ")

    /// Represents the ideal vertical position of the overline.
    ///
    /// The overline position is expressed in the font's coordinate system.
    member _.overlinePosition (value: float) = mk "overline-position" (Util.asString value)
    /// Represents the ideal vertical position of the overline.
    ///
    /// The overline position is expressed in the font's coordinate system.
    member _.overlinePosition (value: int) = mk "overline-position" (Util.asString value)

    /// Represents the ideal thickness of the overline.
    ///
    /// The overline thickness is expressed in the font's coordinate system.
    member _.overlineThickness (value: float) = mk "overline-thickness" (Util.asString value)
    /// Represents the ideal thickness of the overline.
    ///
    /// The overline thickness is expressed in the font's coordinate system.
    member _.overlineThickness (value: int) = mk "overline-thickness" (Util.asString value)

    // /// It either defines a text path along which the characters of a text are rendered, or a motion
    // /// path along which a referenced element is animated.
    // member _.path (path: seq<char * (float list list)>) =
    //     PropHelpers.createSvgPathFloat path
    //     |> h.MakeAttr("path")
    // /// It either defines a text path along which the characters of a text are rendered, or a motion
    // /// path along which a referenced element is animated.
    // member _.path (path: seq<char * (int list list)>) =
    //     PropHelpers.createSvgPathInt path
    //     |> h.MakeAttr("path")
    /// It either defines a text path along which the characters of a text are rendered, or a motion
    /// path along which a referenced element is animated.
    member _.path (path: string) = mk "path" path
    /// The part global attribute contains a space-separated list of the part names of the element.
    /// Part names allows CSS to select and style specific elements in a shadow tree
    member _.part(value: string) = mk "part" value
    /// The part global attribute contains a space-separated list of the part names of the element.
    /// Part names allows CSS to select and style specific elements in a shadow tree
    member _.part(values: #seq<string>) = mk "part" (String.concat " " values)
    /// Specifies a total length for the path, in user units.
    ///
    /// This value is then used to calibrate the browser's distance calculations with those of the
    /// author, by scaling all distance computations using the ratio pathLength/(computed value of
    /// path length).
    ///
    /// This can affect the actual rendered lengths of paths; including text paths, animation paths,
    /// and various stroke operations. Basically, all computations that require the length of the path.
    member _.pathLength (value: int) = mk "pathLength" (Util.asString value)

    /// Sets the input field allowed input.
    ///
    /// This attribute only applies when the value of the type attribute is text, search, tel, url or email.
    member _.pattern (value: string) = mk "pattern" value

    /// Defines a list of transform definitions that are applied to a pattern tile.
    member _.patternTransform (transform: ITransformProperty) =
        mk "patternTransform" (Util.asString transform)
    /// Defines a list of transform definitions that are applied to a pattern tile.
    member _.patternTransform (transforms: seq<ITransformProperty>) =
        mk "patternTransform" (transforms |> Seq.map Util.asString |> String.concat " ")

    /// Provides a hint to the user of what can be entered in the field.
    member _.placeholder (value: string) = mk "placeholder" value

    /// Indicating that the video is to be played "inline", that is within the element's playback area.
    ///
    /// Note that the absence of this attribute does not imply that the video will always be played in fullscreen.
    member _.playsInline (value: bool) = mkBool "playsinline" value

    /// Contains a space-separated list of URLs to which, when the hyperlink is followed,
    /// POST requests with the body PING will be sent by the browser (in the background).
    ///
    /// Typically used for tracking.
    member _.ping (value: string) = mk "ping" value
    /// Contains a space-separated list of URLs to which, when the hyperlink is followed,
    /// POST requests with the body PING will be sent by the browser (in the background).
    ///
    /// Typically used for tracking.
    member _.ping (urls: #seq<string>) = mk "ping" (urls |> String.concat " ")

    // /// Defines a list of points.
    // ///
    // /// Each point is defined by a pair of numbers representing a X and a Y coordinate in
    // /// the user coordinate system.
    // member _.points (coordinates: seq<float * float>) =
    //     PropHelpers.createPointsFloat(coordinates)
    //     |> h.MakeAttr("points")
    // /// Defines a list of points.
    // ///
    // /// Each point is defined by a pair of numbers representing a X and a Y coordinate in
    // /// the user coordinate system.
    // member _.points (coordinates: seq<int * int>) =
    //     PropHelpers.createPointsInt(coordinates)
    //     |> h.MakeAttr("points")

    /// Defines a list of points.
    ///
    /// Each point is defined by a pair of numbers representing a X and a Y coordinate in
    /// the user coordinate system.
    member _.points (coordinates: string) = mk "points" coordinates

    /// Represents the x location in the coordinate system established by attribute primitiveUnits
    /// on the <filter> element of the point at which the light source is pointing.
    member _.pointsAtX (value: float) = mk "pointsAtX" (Util.asString value)
    /// Represents the x location in the coordinate system established by attribute primitiveUnits
    /// on the <filter> element of the point at which the light source is pointing.
    member _.pointsAtX (value: int) = mk "pointsAtX" (Util.asString value)

    /// Represents the y location in the coordinate system established by attribute primitiveUnits
    /// on the <filter> element of the point at which the light source is pointing.
    member _.pointsAtY (value: float) = mk "pointsAtY" (Util.asString value)
    /// Represents the y location in the coordinate system established by attribute primitiveUnits
    /// on the <filter> element of the point at which the light source is pointing.
    member _.pointsAtY (value: int) = mk "pointsAtY" (Util.asString value)

    /// Represents the y location in the coordinate system established by attribute primitiveUnits
    /// on the <filter> element of the point at which the light source is pointing, assuming that,
    /// in the initial local coordinate system, the positive z-axis comes out towards the person
    /// viewing the content and assuming that one unit along the z-axis equals one unit in x and y.
    member _.pointsAtZ (value: float) = mk "pointsAtZ" (Util.asString value)
    /// Represents the y location in the coordinate system established by attribute primitiveUnits
    /// on the <filter> element of the point at which the light source is pointing, assuming that,
    /// in the initial local coordinate system, the positive z-axis comes out towards the person
    /// viewing the content and assuming that one unit along the z-axis equals one unit in x and y.
    member _.pointsAtZ (value: int) = mk "pointsAtZ" (Util.asString value)

    /// Indicates how a <feConvolveMatrix> element handles alpha transparency.
    member _.preserveAlpha (value: bool) = mkBool "preserveAlpha" value

    /// A URL for an image to be shown while the video is downloading. If this attribute isn't specified, nothing
    /// is displayed until the first frame is available, then the first frame is shown as the poster frame.
    member _.poster (value: string) = mk "poster" value

    /// SVG attribute to define the radius of a circle.
    member _.r (value: ICssUnit) = mk "r" (Util.asString value)
    /// SVG attribute to define the radius of a circle.
    member _.r (value: int) = mk "r" (Util.asString value)

    /// Represents the radius (or radii) for the operation on a given <feMorphology> filter primitive.
    member _.radius (value: float) = mk "radius" (Util.asString value)
    /// Represents the radius (or radii) for the operation on a given <feMorphology> filter primitive.
    member _.radius (value: int) = mk "radius" (Util.asString value)
    /// Represents the radius (or radii) for the operation on a given <feMorphology> filter primitive.
    member _.radius (xRadius: float, yRadius: float) = mk "radius" (Util.asString xRadius  + "," + Util.asString yRadius)
    /// Represents the radius (or radii) for the operation on a given <feMorphology> filter primitive.
    member _.radius (xRadius: int, yRadius: int) = mk "radius" (Util.asString xRadius  + "," + Util.asString yRadius)

    /// Indicates whether the element can be edited.
    member _.readOnly (value: bool) = mkBool "readOnly" value

    // /// Used to reference a DOM element or class component from within a parent component.
    // member _.ref (handler: Element -> unit) = mk "ref" handler
    // /// Used to reference a DOM element or class component from within a parent component.
    // member _.ref (ref: IRefValue<#HTMLElement option>) = mk "ref" ref

    /// For anchors containing the href attribute, this attribute specifies the relationship
    /// of the target object to the link object. The value is a space-separated list of link
    /// types values. The values and their semantics will be registered by some authority that
    /// might have meaning to the document author. The default relationship, if no other is
    /// given, is void.
    ///
    /// Use this attribute only if the href attribute is present.
    member _.rel (value: string) = mk "rel" value

    /// Indicates whether this element is required to fill out or not.
    member _.required (value: bool) = mkBool "required" value

    /// Defines the assigned name for this filter primitive.
    ///
    /// If supplied, then graphics that result from processing this filter primitive can be
    /// referenced by an in attribute on a subsequent filter primitive within the same
    /// <filter> element.
    ///
    /// If no value is provided, the output will only be available for re-use as the implicit
    /// input into the next filter primitive if that filter primitive provides no value for
    /// its in attribute.
    member _.result (value: string) = mk "result" value

    /// Sets the aria role
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles
    member _.role ([<System.ParamArray>] roles: string[]) = mk "role" (String.concat " " roles)

    /// Defines the number of rows in a text area.
    member _.rows (value: int) = mk "rows" (Util.asString value)

    /// Defines the number of rows a table cell should span over.
    member _.rowSpan (value: int) = mk "rowspan" (Util.asString value)

    /// The SVG rx attribute defines a radius on the x-axis.
    ///
    /// Two elements are using this attribute: <ellipse>, and <rect>
    member _.rx (value: ICssUnit) = mk "rx" (Util.asString value)
    /// The SVG rx attribute defines a radius on the x-axis.
    ///
    /// Two elements are using this attribute: <ellipse>, and <rect>
    member _.rx (value: int) = mk "rx" (Util.asString value)

    /// The SVG ry attribute defines a radius on the y-axis.
    ///
    /// Two elements are using this attribute: <ellipse>, and <rect>
    member _.ry (value: ICssUnit) = mk "ry" (Util.asString value)
    /// The SVG ry attribute defines a radius on the y-axis.
    ///
    /// Two elements are using this attribute: <ellipse>, and <rect>
    member _.ry (value: int) = mk "ry" (Util.asString value)

    /// Applies extra restrictions to the content in the frame.
    ///
    /// The value of the attribute can either be empty to apply all restrictions,
    /// or space-separated tokens to lift particular restrictions
    member _.sandbox (values: #seq<string>) = mk "sandbox" (values |> String.concat " ")

    /// Defines the displacement scale factor to be used on a <feDisplacementMap> filter primitive.
    ///
    /// The amount is expressed in the coordinate system established by the primitiveUnits attribute
    /// on the <filter> element.
    member _.scale (value: float) = mk "scale" (Util.asString value)
    /// Defines the displacement scale factor to be used on a <feDisplacementMap> filter primitive.
    ///
    /// The amount is expressed in the coordinate system established by the primitiveUnits attribute
    /// on the <filter> element.
    member _.scale (value: int) = mk "scale" (Util.asString value)

    /// Represents the starting number for the pseudo random number generator of the <feTurbulence>
    /// filter primitive.
    member _.seed (value: float) = mk "seed" (Util.asString value)
    /// Represents the starting number for the pseudo random number generator of the <feTurbulence>
    /// filter primitive.
    member _.seed (value: int) = mk "seed" (Util.asString value)

    /// Defines a value which will be selected on page load.
    member _.selected (value: bool) = mkBool "selected" value

    /// Sets the beginning index of the selected text.
    ///
    /// When nothing is selected, this returns the position of the text input cursor (caret) inside of the <input> element.
    member _.selectionStart (value: int) = mk "selectionStart" (Util.asString value)

    /// Sets the end index of the selected text.
    ///
    /// When there's no selection, this returns the offset of the character immediately following the current text input cursor position.
    member _.selectionEnd (value: int) = mk "selectionStart" (Util.asString value)

    /// Sets the *visual* size of the control.
    ///
    /// The value is in pixels unless the value of type is text or password, in which case, it is the number of characters.
    ///
    /// This attribute only applies when type is set to text, search, tel, url, email, or password.
    member _.size (value: int) = mk "size" (Util.asString value)

    /// Defines the sizes of the icons for visual media contained in the resource.
    /// It must be present only if the rel contains a value of icon or a non-standard
    /// type such as Apple's apple-touch-icon.
    ///
    /// It may have the following values:
    ///
    /// `any`, meaning that the icon can be scaled to any size as it is in a vector
    /// format, like image/svg+xml.
    ///
    /// A white-space separated list of sizes, each in the format `<width in pixels>x<height in pixels>`
    /// or `<width in pixels>X<height in pixels>`. Each of these sizes must be contained in the resource.
    member _.sizes (value: string) = mk "sizes" value

    /// This attribute contains a positive integer indicating the number of consecutive
    /// columns the <col> element spans. If not present, its default value is 1.
    member _.spam (value: int) = mk "span" (Util.asString value)

    /// Defines whether the element may be checked for spelling errors.
    member _.spellcheck (value: bool) = mkBool "spellcheck" value

    /// Controls the ratio of reflection of the specular lighting.
    ///
    /// It represents the ks value in the Phong lighting model. The bigger the value the stronger the reflection.
    member _.specularConstant (value: float) = mk "specularConstant" (Util.asString value)
    /// Controls the ratio of reflection of the specular lighting.
    ///
    /// It represents the ks value in the Phong lighting model. The bigger the value the stronger the reflection.
    member _.specularConstant (value: int) = mk "specularConstant" (Util.asString value)

    /// For <feSpecularLighting>, specularExponent defines the exponent value for the specular term.
    ///
    /// For <feSpotLight>, specularExponent defines the exponent value controlling the focus for the light source.
    member _.specularExponent (value: float) = mk "specularExponent" (Util.asString value)
    /// For <feSpecularLighting>, specularExponent defines the exponent value for the specular term.
    ///
    /// For <feSpotLight>, specularExponent defines the exponent value controlling the focus for the light source.
    member _.specularExponent (value: int) = mk "specularExponent" (Util.asString value)

    /// The URL of the embeddable content.
    member _.src (value: string) = mk "src" value

    /// Language of the track text data. It must be a valid BCP 47 language tag.
    ///
    /// If the kind attribute is set to subtitles, then srclang must be defined.
    member _.srcLang (value: string) = mk "srclang" value

    /// One or more responsive image candidates.
    member _.srcset (value: string) = mk "srcset" value

    /// Defines the first number if other than 1.
    member _.start (value: string) = mk "start" value

    /// Defines the standard deviation for the blur operation.
    member _.stdDeviation (value: float) = mk "stdDeviation" (Util.asString value)
    /// Defines the standard deviation for the blur operation.
    member _.stdDeviation (value: int) = mk "stdDeviation" (Util.asString value)
    /// Defines the standard deviation for the blur operation.
    member _.stdDeviation (xAxis: float, yAxis: float) = mk "stdDeviation" (Util.asString xAxis  + "," + Util.asString yAxis)
    /// Defines the standard deviation for the blur operation.
    member _.stdDeviation (xAxis: int, yAxis: int) = mk "stdDeviation" (Util.asString xAxis  + "," + Util.asString yAxis)

    /// Indicates the stepping interval.
    member _.step (value: float) = mk "step" (Util.asString value)
    /// Indicates the stepping interval.
    member _.step (value: int) = mk "step" (Util.asString value)
    /// The slot global attribute assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the slot element whose name attribute's value matches that slot attribute's value.
    member _.slot(value: string) = mk "slot" value
    /// SVG attribute to indicate what color to use at a gradient stop.
    member _.stopColor (value: string) = mk "stop-color" value

    /// SVG attribute to define the opacity of a given color gradient stop.
    member _.stopOpacity (value: float) = mk "stop-opacity" (Util.asString value)
    /// SVG attribute to define the opacity of a given color gradient stop.
    member _.stopOpacity (value: int) = mk "stop-opacity" (Util.asString value)

    /// Represents the ideal vertical position of the strikethrough.
    ///
    /// The strikethrough position is expressed in the font's coordinate system.
    member _.strikethroughPosition (value: float) = mk "strikethrough-position" (Util.asString value)
    /// Represents the ideal vertical position of the strikethrough.
    ///
    /// The strikethrough position is expressed in the font's coordinate system.
    member _.strikethroughPosition (value: int) = mk "strikethrough-position" (Util.asString value)

    /// Represents the ideal vertical position of the strikethrough.
    ///
    /// The strikethrough position is expressed in the font's coordinate system.
    member _.strikethroughThickness (value: float) = mk "strikethrough-thickness" (Util.asString value)
    /// Represents the ideal thickness of the strikethrough.
    ///
    /// The strikethrough thickness is expressed in the font's coordinate system.
    member _.strikethroughThickness (value: int) = mk "strikethrough-thickness" (Util.asString value)

    /// SVG attribute to define the color (or any SVG paint servers like gradients or patterns) used to paint the outline of the shape.
    member _.stroke (color: string) = mk "stroke" color

    /// SVG attribute to define the width of the stroke to be applied to the shape.
    member _.strokeWidth (value: ICssUnit) = mk "stroke-width" (Util.asString value)
    /// SVG attribute to define the width of the stroke to be applied to the shape.
    member _.strokeWidth (value: int) = mk "stroke-width" (Util.asString value + "px")

    member _.style (css: string) = mk "style" css
    // member _.style (properties: #IStyleAttribute list) = mk "style" (createObj !!properties)

    /// Represents the height of the surface for a light filter primitive.
    member _.surfaceScale (value: float) = mk "surfaceScale" (Util.asString value)
    /// Represents the height of the surface for a light filter primitive.
    member _.surfaceScale (value: int) = mk "surfaceScale" (Util.asString value)

    /// Represents a list of supported language tags.
    ///
    /// This list is matched against the language defined in the user preferences.
    member _.systemLanguage (value: string) = mk "systemLanguage" value

    /// The `tabindex` global attribute indicates that its element can be focused,
    /// and where it participates in sequential keyboard navigation (usually with the Tab key, hence the name).
    member _.tabIndex (index: int) = mk "tabindex" (Util.asString index)

    /// Controls browser behavior when opening a link.
    member _.target (frameName: string) = mk "target" frameName

    /// Determines the positioning in horizontal direction of the convolution matrix relative to a
    /// given target pixel in the input image.
    ///
    /// The leftmost column of the matrix is column number zero.
    ///
    /// The value must be such that:
    ///
    /// 0 <= targetX < orderX.
    member _.targetX (index: int) = mk "targetX" (Util.asString index)

    /// Determines the positioning in vertical direction of the convolution matrix relative to a
    /// given target pixel in the input image.
    ///
    /// The topmost row of the matrix is row number zero.
    ///
    /// The value must be such that:
    ///
    /// 0 <= targetY < orderY.
    member _.targetY (index: int) = mk "targetY" (Util.asString index)

    /// A shorthand for using custom("data-testid", value). Useful for referencing elements when testing code.
    member _.testId(value: string) = mk "data-testid" value

    // /// Defines the text content of the element. Alias for `children [ Html.text (sprintf ...) ]`
    // member _.textf fmt = Printf.kprintf prop.text fmt

    /// Specifies the width of the space into which the text will draw.
    ///
    /// The user agent will ensure that the text does not extend farther than that distance, using the method or methods
    /// specified by the lengthAdjust attribute.
    member _.textLength (value: ICssUnit) = mk "textLength" (Util.asString value)
    /// Specifies the width of the space into which the text will draw.
    ///
    /// The user agent will ensure that the text does not extend farther than that distance, using the method or methods
    /// specified by the lengthAdjust attribute.
    member _.textLength (value: int) = mk "textLength" (Util.asString value)

    /// The title global attribute contains text representing advisory information related to the element it belongs to.
    member _.title (value: string) = mk "title" value

    /// Indicates the initial value of the attribute that will be modified during the animation.
    ///
    /// When used with the `to` attribute, the animation will change the modified attribute from
    /// the from value to the to value.
    ///
    /// When used with the `by` attribute, the animation will change the attribute relatively
    /// from the from value by the value specified in by.
    member _.to' (value: float) = mk "to" (Util.asString value)
    /// Indicates the initial value of the attribute that will be modified during the animation.
    ///
    /// When used with the `to` attribute, the animation will change the modified attribute from
    /// the from value to the to value.
    ///
    /// When used with the `by` attribute, the animation will change the attribute relatively
    /// from the from value by the value specified in by.
    member _.to' (values: seq<float>) = mk "to" (values |> Seq.map Util.asString |> String.concat " ")
    /// Indicates the initial value of the attribute that will be modified during the animation.
    ///
    /// When used with the `to` attribute, the animation will change the modified attribute from
    /// the from value to the to value.
    ///
    /// When used with the `by` attribute, the animation will change the attribute relatively
    /// from the from value by the value specified in by.
    member _.to' (value: int) = mk "to" (Util.asString value)
    /// Indicates the initial value of the attribute that will be modified during the animation.
    ///
    /// When used with the `to` attribute, the animation will change the modified attribute from
    /// the from value to the to value.
    ///
    /// When used with the `by` attribute, the animation will change the attribute relatively
    /// from the from value by the value specified in by.
    member _.to' (values: seq<int>) = mk "to" (values |> Seq.map Util.asString |> String.concat " ")
    /// Indicates the initial value of the attribute that will be modified during the animation.
    ///
    /// When used with the `to` attribute, the animation will change the modified attribute from
    /// the from value to the to value.
    ///
    /// When used with the `by` attribute, the animation will change the attribute relatively
    /// from the from value by the value specified in by.
    member _.to' (value: string) = mk "to" value
    /// Indicates the initial value of the attribute that will be modified during the animation.
    ///
    /// When used with the `to` attribute, the animation will change the modified attribute from
    /// the from value to the to value.
    ///
    /// When used with the `by` attribute, the animation will change the attribute relatively
    /// from the from value by the value specified in by.
    member _.to' (values: seq<string>) = mk "to" (values |> String.concat " ")

    /// Defines a list of transform definitions that are applied to an element and the element's children.
    member _.transform (transform: ITransformProperty) =
        mk "transform" (Util.asString transform)
    /// Defines a list of transform definitions that are applied to an element and the element's children.
    member _.transform (transforms: seq<ITransformProperty>) =
        let unitList = [ "px" ; "deg" ]
        let removeUnits (s : string) =
            List.fold (fun (ins:string) toReplace -> ins.Replace(toReplace,"")) s unitList
        mk "transform" (transforms |> Seq.map Util.asString |> Seq.map removeUnits |> String.concat " ")

    /// Sets the `type` attribute for the element.
    member _.type' (value: string) = mk "type" value

    /// Represents the ideal vertical position of the underline.
    ///
    /// The underline position is expressed in the font's coordinate system.
    member _.underlinePosition (value: float) = mk "underline-position" (Util.asString value)
    /// Represents the ideal vertical position of the underline.
    ///
    /// The underline position is expressed in the font's coordinate system.
    member _.underlinePosition (value: int) = mk "underline-position" (Util.asString value)

    /// Represents the ideal thickness of the underline.
    ///
    /// The underline thickness is expressed in the font's coordinate system.
    member _.underlineThickness (value: float) = mk "underline-thickness" (Util.asString value)
    /// Represents the ideal thickness of the underline.
    ///
    /// The underline thickness is expressed in the font's coordinate system.
    member _.underlineThickness (value: int) = mk "underline-thickness" (Util.asString value)

    /// A hash-name reference to a <map> element; that is a '#' followed by the value of a name of a map element.
    member _.usemap (value: string) = mk "usemap" value

    member _.value (value: string) = mk "value" value

    /// The values attribute has different meanings, depending upon the context where itʼs used,
    /// either it defines a sequence of values used over the course of an animation, or itʼs a
    /// list of numbers for a color matrix, which is interpreted differently depending on the
    /// type of color change to be performed. See: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values
    member _.values (value: string) = mk "values" value

    /// Specifies the width of elements listed here. For all other elements, use the CSS height property.
    ///
    /// HTML: <canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>
    ///
    /// SVG: <feBlend>, <feColorMatrix>, <feComponentTransfer>, <feComposite>, <feConvolveMatrix>,
    /// <feDiffuseLighting>, <feDisplacementMap>, <feDropShadow>, <feFlood>, <feGaussianBlur>, <feImage>,
    /// <feMerge>, <feMorphology>, <feOffset>, <feSpecularLighting>, <feTile>, <feTurbulence>, <filter>,
    /// <mask>, <pattern>
    member _.width (value: ICssUnit) = mk "width" (Util.asString value)
    /// Specifies the width of elements listed here. For all other elements, use the CSS height property.
    ///
    /// HTML: <canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>
    ///
    /// SVG: <feBlend>, <feColorMatrix>, <feComponentTransfer>, <feComposite>, <feConvolveMatrix>,
    /// <feDiffuseLighting>, <feDisplacementMap>, <feDropShadow>, <feFlood>, <feGaussianBlur>, <feImage>,
    /// <feMerge>, <feMorphology>, <feOffset>, <feSpecularLighting>, <feTile>, <feTurbulence>, <filter>,
    /// <mask>, <pattern>
    member _.width (value: int) = mk "width" (Util.asString value)

    /// SVG attribute to define a x-axis coordinate in the user coordinate system.
    member _.x (value: ICssUnit) = mk "x" (Util.asString value)
    /// SVG attribute to define a x-axis coordinate in the user coordinate system.
    member _.x (value: int) = mk "x" (Util.asString value)

    /// The x1 attribute is used to specify the first x-coordinate for drawing an SVG element that
    /// requires more than one coordinate. Elements that only need one coordinate use the x attribute instead.
    ///
    /// Two elements are using this attribute: <line>, and <linearGradient>
    member _.x1 (value: ICssUnit) = mk "x1" (Util.asString value)
    /// The x1 attribute is used to specify the first x-coordinate for drawing an SVG element that
    /// requires more than one coordinate. Elements that only need one coordinate use the x attribute instead.
    ///
    /// Two elements are using this attribute: <line>, and <linearGradient>
    member _.x1 (value: int) = mk "x1" (Util.asString value)

    /// The x2 attribute is used to specify the second x-coordinate for drawing an SVG element that requires
    /// more than one coordinate. Elements that only need one coordinate use the x attribute instead.
    ///
    /// Two elements are using this attribute: <line>, and <linearGradient>
    member _.x2 (value: ICssUnit) = mk "x2" (Util.asString value)
    /// The x2 attribute is used to specify the second x-coordinate for drawing an SVG element that requires
    /// more than one coordinate. Elements that only need one coordinate use the x attribute instead.
    ///
    /// Two elements are using this attribute: <line>, and <linearGradient>
    member _.x2 (value: int) = mk "x2" (Util.asString value)

    /// Specifies the XML Namespace of the document.
    ///
    /// Default value is "http://www.w3.org/1999/xhtml".
    ///
    /// This is required in documents parsed with XML parsers, and optional in text/html documents.
    member _.xmlns (value: string) = mk "xmlns" value

    /// SVG attribute to define a y-axis coordinate in the user coordinate system.
    member _.y (value: ICssUnit) = mk "y" (Util.asString value)
    /// SVG attribute to define a y-axis coordinate in the user coordinate system.
    member _.y (value: int) = mk "y" (Util.asString value)

    /// The y1 attribute is used to specify the first y-coordinate for drawing an SVG element that requires
    /// more than one coordinate. Elements that only need one coordinate use the y attribute instead.
    ///
    /// Two elements are using this attribute: <line>, and <linearGradient>
    member _.y1 (value: ICssUnit) = mk "y1" (Util.asString value)
    /// The y1 attribute is used to specify the first y-coordinate for drawing an SVG element that requires
    /// more than one coordinate. Elements that only need one coordinate use the y attribute instead.
    ///
    /// Two elements are using this attribute: <line>, and <linearGradient>
    member _.y1 (value: int) = mk "y1" (Util.asString value)

    /// The y2 attribute is used to specify the second y-coordinate for drawing an SVG element that requires
    /// more than one coordinate. Elements that only need one coordinate use the y attribute instead.
    ///
    /// Two elements are using this attribute: <line>, and <linearGradient>
    member _.y2 (value: ICssUnit) = mk "y2" (Util.asString value)
    /// The y2 attribute is used to specify the second y-coordinate for drawing an SVG element that requires
    /// more than one coordinate. Elements that only need one coordinate use the y attribute instead.
    ///
    /// Two elements are using this attribute: <line>, and <linearGradient>
    member _.y2 (value: int) = mk "y2" (Util.asString value)

    /// Defines the location along the z-axis for a light source in the coordinate system established by the
    /// primitiveUnits attribute on the <filter> element, assuming that, in the initial coordinate system,
    /// the positive z-axis comes out towards the person viewing the content and assuming that one unit along
    /// the z-axis equals one unit in x and y.
    member _.z (value: ICssUnit) = mk "z" (Util.asString value)
    /// Defines the location along the z-axis for a light source in the coordinate system established by the
    /// primitiveUnits attribute on the <filter> element, assuming that, in the initial coordinate system,
    /// the positive z-axis comes out towards the person viewing the content and assuming that one unit along
    /// the z-axis equals one unit in x and y.
    member _.z (value: int) = mk "z" (Util.asString value)

    /// Specifies that repeat iterations are not cumulative.
    member _.accumulateNone = mk "accumulate" "none"
    /// Specifies that each repeat iteration after the first builds upon
    /// the last value of the previous iteration.
    member _.accumulateSum = mk "accumulate" "sum"

    /// Specifies that the animation will override the underlying value of
    /// the attribute and other lower priority animations.
    member _.additiveReplace = mk "additive" "replace"
    /// Specifies that the animation will add to the underlying value of
    /// the attribute and other lower priority animations.
    member _.additiveSum = mk "additive" "sum"

    /// Uses the dominant baseline choice of the parent. Matches the box’s
    /// corresponding baseline to that of its parent.
    member _.alignmentBaselineAlphabetic = mk "alignment-baseline" "alphabetic"
    /// Uses the dominant baseline choice of the parent. Matches the box’s
    /// corresponding baseline to that of its parent.
    member _.alignmentBaselineBaseline = mk "alignment-baseline" "baseline"
    /// Uses the dominant baseline choice of the parent. Matches the box’s
    /// corresponding baseline to that of its parent.
    member _.alignmentBaselineBottom = mk "alignment-baseline" "bottom"
    /// Specifies that the animation will add to the underlying value of
    /// the attribute and other lower priority animations.
    member _.alignmentBaselineCenter = mk "alignment-baseline" "center"
    /// Uses the dominant baseline choice of the parent. Matches the box’s
    /// corresponding baseline to that of its parent.
    member _.alignmentBaselineCentral = mk "alignment-baseline" "central"
    /// Specifies that the animation will add to the underlying value of
    /// the attribute and other lower priority animations.
    member _.alignmentBaselineHanging = mk "alignment-baseline" "hanging"
    /// Specifies that the animation will add to the underlying value of
    /// the attribute and other lower priority animations.
    member _.alignmentBaselineIdeographic = mk "alignment-baseline" "ideographic"
    /// Uses the dominant baseline choice of the parent. Matches the box’s
    /// corresponding baseline to that of its parent.
    member _.alignmentBaselineMathematical = mk "alignment-baseline" "mathematical"
    /// Specifies that the animation will add to the underlying value of
    /// the attribute and other lower priority animations.
    member _.alignmentBaselineMiddle = mk "alignment-baseline" "middle"
    /// Uses the dominant baseline choice of the parent. Matches the box’s
    /// corresponding baseline to that of its parent.
    member _.alignmentBaselineTextAfterEdge = mk "alignment-baseline" "text-after-edge"
    /// Uses the dominant baseline choice of the parent. Matches the box’s
    /// corresponding baseline to that of its parent.
    member _.alignmentBaselineTextBeforeEdge = mk "alignment-baseline" "text-before-edge"
    /// Specifies that the animation will add to the underlying value of
    /// the attribute and other lower priority animations.
    member _.alignmentBaselineTextBottom = mk "alignment-baseline" "text-bottom"
    /// Specifies that the animation will add to the underlying value of
    /// the attribute and other lower priority animations.
    member _.alignmentBaselineTextTop = mk "alignment-baseline" "text-top"
    /// Specifies that the animation will add to the underlying value of
    /// the attribute and other lower priority animations.
    member _.alignmentBaselineTop = mk "alignment-baseline" "top"

    /// Controls whether the current document is allowed to gather information about the acceleration of
    /// the device through the Accelerometer interface.
    member _.allowAccelerometer = mk "allow" "accelerometer"
    /// Controls whether the current document is allowed to gather information about the amount of light
    /// in the environment around the device through the AmbientLightSensor interface.
    member _.allowAmbientLightSensor = mk "allow" "ambient-light-sensor"
    /// Controls whether the current document is allowed to autoplay media requested through the
    /// HTMLMediaElement interface.
    ///
    /// When this policy is disabled and there were no user gestures, the Promise returned by
    /// HTMLMediaElement.play() will reject with a DOMException. The autoplay attribute on <audio> and
    /// <video> elements will be ignored.
    member _.allowAutoplay = mk "allow" "autoplay"
    /// Controls whether the use of the Battery Status API is allowed.
    ///
    /// When this policy is disabled, the  Promise returned by Navigator.getBattery() will reject with
    /// a NotAllowedError DOMException.
    member _.allowBattery = mk "allow" "battery"
    /// Controls whether the current document is allowed to use video input devices.
    ///
    /// When this policy is disabled, the Promise returned by getUserMedia() will reject with a
    /// NotAllowedError DOMException.
    member _.allowCamera = mk "allow" "camera"
    /// Controls whether or not the current document is permitted to use the getDisplayMedia() method to
    /// capture screen contents.
    ///
    /// When this policy is disabled, the promise returned by getDisplayMedia() will reject with a
    /// NotAllowedError if permission is not obtained to capture the display's contents.
    member _.allowDisplayCapture = mk "allow" "display-capture"
    /// Controls whether the current document is allowed to set document.domain.
    ///
    /// When this policy is disabled, attempting to set document.domain will fail and cause a SecurityError
    /// DOMException to be be thrown.
    member _.allowDocumentDomain = mk "allow" "document-domain"
    /// Controls whether the current document is allowed to use the Encrypted Media Extensions API (EME).
    ///
    /// When this policy is disabled, the Promise returned by Navigator.requestMediaKeySystemAccess() will
    /// reject with a DOMException.
    member _.allowEncryptedMedia = mk "allow" "encrypted-media"
    /// Controls whether tasks should execute in frames while they're not being rendered (e.g. if an iframe
    /// is hidden or display: none).
    member _.allowExecutionWhileNotRendered = mk "allow" "execution-while-not-rendered"
    /// Controls whether tasks should execute in frames while they're outside of the visible viewport.
    member _.allowExecutionWhileOutOfViewport = mk "allow" "execution-while-out-of-viewport"
    /// Controls whether the current document is allowed to use Element.requestFullScreen().
    ///
    /// When this policy is disabled, the returned Promise rejects with a TypeError DOMException.
    member _.allowFullscreen = mk "allow" "fullscreen"
    /// Controls whether the current document is allowed to use the Geolocation Interface.
    ///
    /// When this policy is disabled, calls to getCurrentPosition() and watchPosition() will cause those
    /// functions' callbacks to be invoked with a PositionError code of PERMISSION_DENIED.
    member _.allowGeolocation = mk "allow" "geolocation"
    /// Controls whether the current document is allowed to gather information about the orientation of the
    /// device through the Gyroscope interface.
    member _.allowGyroscope = mk "allow" "gyroscope"
    /// Controls whether the current document is allowed to show layout animations.
    member _.allowLayoutAnimations = mk "allow" "layout-animations"
    /// Controls whether the current document is allowed to display images in legacy formats.
    member _.allowLegacyImageFormats = mk "allow" "legacy-image-formats"
    /// Controls whether the current document is allowed to gather information about the orientation of the
    /// device through the Magnetometer interface.
    member _.allowMagnetometer = mk "allow" "magnetometer"
    /// Controls whether the current document is allowed to use audio input devices.
    ///
    /// When this policy is disabled, the Promise returned by MediaDevices.getUserMedia() will reject
    /// with a NotAllowedError.
    member _.allowMicrophone = mk "allow" "microphone"
    /// Controls whether the current document is allowed to use the Web MIDI API.
    ///
    /// When this policy is disabled, the Promise returned by Navigator.requestMIDIAccess() will reject
    /// with a DOMException.
    member _.allowMidi = mk "allow" "midi"
    /// Controls the availability of mechanisms that enables the page author to take control over the behavior
    /// of spatial navigation, or to cancel it outright.
    member _.allowNavigationOverride = mk "allow" "navigation-override"
    /// Controls whether the current document is allowed to download and display large images.
    member _.allowOversizedImages = mk "allow" "oversized-images"
    /// Controls whether the current document is allowed to use the Payment Request API.
    ///
    /// When this policy is enabled, the PaymentRequest() constructor will throw a SecurityError DOMException.
    member _.allowPayment = mk "allow" "payment"
    /// Controls whether the current document is allowed to play a video in a Picture-in-Picture mode via
    /// the corresponding API.
    member _.allowPictureInPicture = mk "allow" "picture-in-picture"
    /// Controls whether the current document is allowed to use the Web Authentication API to create, store,
    /// and retreive public-key credentials.
    member _.allowPublickeyCredentials = mk "allow" "publickey-credentials"
    /// Controls whether the current document is allowed to make synchronous XMLHttpRequest requests.
    member _.allowSyncXhr = mk "allow" "sync-xhr"
    /// Controls whether the current document is allowed to use the WebUSB API.
    member _.allowUsb = mk "allow" "usb"
    /// Controls whether the current document is allowed to use Wake Lock API to indicate that
    /// device should not enter power-saving mode.
    member _.allowWakeLock = mk "allow" "wake-lock"
    /// Controls whether or not the current document is allowed to use the WebXR Device API to interact
    /// with a WebXR session.
    member _.allowXrSpatialTracking = mk "allow" "xr-spatial-tracking"

    /// A list of choices appears and the currently selected suggestion also
    /// appears inline.
    member _.ariaAutocompleteBoth = mk "aria-autocomplete" "both"
    /// The system provides text after the caret as a suggestion for how to
    /// complete the field.
    member _.ariaAutocompleteInlinedAfterCaret = mk "aria-autocomplete" "inline"
    /// A list of choices appears from which the user can choose.
    member _.ariaAutocompleteList = mk "aria-autocomplete" "list"
    /// No input completion suggestions are provided.
    member _.ariaAutocompleteNone = mk "aria-autocomplete" "none"

    /// Indicates a mixed mode value for a tri-state checkbox or
    /// `menuitemcheckbox`.
    member _.ariaCheckedMixed = mk "aria-checked" "mixed"

    /// A duplicate of the source object will be dropped into the target.
    member _.ariaDropEffectCopy = mk "aria-dropeffect" "copy"
    /// A function supported by the drop target is executed, using the drag
    /// source as an input.
    member _.ariaDropEffectExecute = mk "aria-dropeffect" "execute"
    /// A reference or shortcut to the dragged object will be created in the
    /// target object.
    member _.ariaDropEffectLink = mk "aria-dropeffect" "link"
    /// The source object will be removed from its current location and
    /// dropped into the target.
    member _.ariaDropEffectMove = mk "aria-dropeffect" "move"
    /// No operation can be performed; effectively cancels the drag
    /// operation if an attempt is made to drop on this object. Ignored if
    /// combined with any other token value. e.g. 'none copy' is equivalent
    /// to a 'copy' value.
    member _.ariaDropEffectNone = mk "aria-dropeffect" "none"
    /// There is a popup menu or dialog that allows the user to choose one
    /// of the drag operations (copy, move, link, execute) and any other
    /// drag functionality, such as cancel.
    member _.ariaDropEffectPopup = mk "aria-dropeffect" "popup"

    /// A grammatical error was detected.
    member _.ariaInvalidGrammar = mk "aria-invalid" "grammar"
    /// A spelling error was detected.
    member _.ariaInvalidSpelling = mk "aria-invalid" "spelling"

    /// Indicates that updates to the region have the highest priority and
    /// should be presented the user immediately.
    member _.ariaLiveAssertive = mk "aria-live" "assertive"
    /// Indicates that updates to the region should not be presented to the
    /// user unless the used is currently focused on that region.
    member _.ariaLiveOff = mk "aria-live" "off"
    /// Indicates that updates to the region should be presented at the next
    /// graceful opportunity, such as at the end of speaking the current
    /// sentence or when the user pauses typing.
    member _.ariaLivePolite = mk "aria-live" "polite"

    /// The element is oriented horizontally.
    member _.ariaOrientationHorizontal = mk "aria-orientation" "horizontal"
    /// The element is oriented vertically.
    member _.ariaOrientationVertical = mk "aria-orientation" "vertical"

    /// Indicates a mixed mode value for a tri-state toggle button.
    member _.ariaPressedMixed = mk "aria-pressed" "mixed"

    /// Element nodes are added to the DOM within the live region.
    member _.ariaRelevantAdditions = mk "aria-relevant" "additions"
    /// Equivalent to the combination of all values, "additions removals
    /// text".
    member _.ariaRelevantAll = mk "aria-relevant" "all"
    /// Text or element nodes within the live region are removed from the
    /// DOM.
    member _.ariaRelevantRemovals = mk "aria-relevant" "removals"
    /// Text is added to any DOM descendant nodes of the live region.
    member _.ariaRelevantText = mk "aria-relevant" "text"

    /// Items are sorted in ascending order by this column.
    member _.ariaSortAscending = mk "aria-sort" "ascending"
    /// Items are sorted in descending order by this column.
    member _.ariaSortDescending = mk "aria-sort" "descending"
    /// There is no defined sort applied to the column.
    member _.ariaSortNone = mk "aria-sort" "none"
    /// A sort algorithm other than ascending or descending has been
    /// applied.
    member _.ariaSortOther = mk "aria-sort" "other"

    /// Applies to <audio> elements.
    member _.asAudio = mk "as" "audio"
    /// Applies to <iframe> and <frame> elements.
    member _.asDocument = mk "as" "document"
    /// Applies to <embed> elements.
    member _.asEmbed = mk "as" "embed"
    /// Applies to fetch and XHR.
    ///
    /// This value also requires <link> to contain the crossorigin attribute.
    member _.asFetch = mk "as" "fetch"
    /// Applies to CSS @font-face.
    member _.asFont = mk "as" "font"
    /// Applies to <img> and <picture> elements with srcset or imageset attributes,
    /// SVG <image> elements, and CSS *-image rules.
    member _.asImage = mk "as" "image"
    /// Applies to <object> elements.
    member _.asObject = mk "as" "object"
    /// Applies to <script> elements, Worker importScripts.
    member _.asScript = mk "as" "script"
    /// Applies to <link rel=stylesheet> elements, and CSS @import.
    member _.asStyle = mk "as" "style"
    /// Applies to <track> elements.
    member _.asTrack = mk "as" "track"
    /// Applies to <video> elements.
    member _.asVideo = mk "as" "video"
    /// Applies to Worker and SharedWorker.
    member _.asWorker = mk "as" "worker"

    /// All letters should default to uppercase
    member _.autoCapitalizeCharacters = mk "autocapitalize" "characters"
    /// No autocapitalization is applied (all letters default to lowercase)
    member _.autoCapitalizeOff = mk "autocapitalize" "off"
    /// The first letter of each sentence defaults to a capital letter; all other letters default to lowercase
    member _.autoCapitalizeOn' = mk "autocapitalize" "on"
    /// The first letter of each word defaults to a capital letter; all other letters default to lowercase
    member _.autoCapitalizeWords = mk "autocapitalize" "words"

    /// Specifies that the animation function will jump from one value to the next
    /// without any interpolation.
    member _.calcModeDiscrete = mk "calcMode" "discrete"
    /// Simple linear interpolation between values is used to calculate the animation
    /// function. Except for <animateMotion>, this is the default value.
    member _.calcModeLinear = mk "calcMode" "linear"
    /// Defines interpolation to produce an even pace of change across the animation.
    ///
    /// This is only supported for values that define a linear numeric range, and for
    /// which some notion of "distance" between points can be calculated (e.g. position,
    /// width, height, etc.).
    ///
    /// If paced is specified, any keyTimes or keySplines will be ignored.
    ///
    /// For <animateMotion>, this is the default value.
    member _.calcModePaced = mk "calcMode" "paced"
    /// Interpolates from one value in the values list to the next according to a time
    /// function defined by a cubic Bézier spline.
    ///
    /// The points of the spline are defined in the keyTimes attribute, and the control
    /// points for each interval are defined in the keySplines attribute.
    member _.calcModeSpline = mk "calcMode" "spline"

    member _.charsetUtf8 = mk "charset" "UTF-8"

    /// Indicates that all coordinates inside the <clipPath> element refer to the user
    /// coordinate system as defined when the clipping path was created.
    member _.clipPathUserSpaceOnUse = mk "clip-path" "userSpaceOnUse"
    /// Indicates that all coordinates inside the <clipPath> element are relative to
    /// the bounding box of the element the clipping path is applied to.
    ///
    /// It means that the origin of the coordinate system is the top left corner of the
    /// object bounding box and the width and height of the object bounding box are
    /// considered to have a length of 1 unit value.
    member _.clipPathObjectBoundingBox = mk "clip-path" "objectBoundingBox"

    /// Determines the "insideness" of a point in the shape by drawing a ray from that
    /// point to infinity in any direction and counting the number of path segments
    /// from the given shape that the ray crosses.
    ///
    /// If this number is odd, the point is inside; if even, the point is outside.
    member _.clipRuleEvenodd = mk "clip-rule" "evenodd"
    member _.clipRuleInheritFromParent = mk "clip-rule" "inherit"
    /// Determines the "insideness" of a point in the shape by drawing a ray from that
    /// point to infinity in any direction, and then examining the places where a
    /// segment of the shape crosses the ray.
    member _.clipRuleNonzero = mk "clip-rule" "nonzero"

    /// Indicates that the user agent can choose either the sRGB or linearRGB spaces
    /// for color interpolation. This option indicates that the author doesn't require
    /// that color interpolation occur in a particular color space.
    member _.colorInterpolationAuto = mk "color-interpolation" "auto"
    /// Indicates that color interpolation should occur in the linearized RGB color
    /// space as described in the sRGB specification.
    member _.colorInterpolationLinearRGB = mk "color-interpolation" "linearRGB"
    /// Indicates that color interpolation should occur in the sRGB color space.
    member _.colorInterpolationSRGB = mk "color-interpolation" "sRGB"

    /// Indicates that the user agent can choose either the sRGB or linearRGB spaces
    /// for color interpolation. This option indicates that the author doesn't require
    /// that color interpolation occur in a particular color space.
    member _.colorInterpolationFiltersAuto = mk "color-interpolation-filters" "auto"
    /// Indicates that color interpolation should occur in the linearized RGB color
    /// space as described in the sRGB specification.
    member _.colorInterpolationFiltersLinearRGB = mk "color-interpolation-filters" "linearRGB"
    /// Indicates that color interpolation should occur in the sRGB color space.
    member _.colorInterpolationFiltersSRGB = mk "color-interpolation-filters" "sRGB"

    member _.coordsRect (left: int, top: int, right: int, bottom: int) =
        mk "coords"
            ((Util.asString left) + "," +
             (Util.asString top) + "," +
             (Util.asString right) + "," +
             (Util.asString bottom))
    member _.coordsCircle (x: int, y: int, r: int) =
        mk "coords"
            ((Util.asString x) + "," +
             (Util.asString y) + "," +
             (Util.asString r))
    member _.coordsPoly (x1: int, y1: int, x2: int, y2: int, x3: int, y3: int) =
        mk "coords"
            ((Util.asString x1) + "," +
             (Util.asString y1) + "," +
             (Util.asString x2) + "," +
             (Util.asString y2) + "," +
             (Util.asString x3) + "," +
             (Util.asString y3))

    /// A cross-origin request (i.e. with an Origin HTTP header) is performed, but no credential
    /// is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication). If the server
    /// does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin
    /// HTTP header) the resource will be tainted and its usage restricted.
    member _.crossOriginAnonymous = mk "crossorigin" "anonymous"
    /// A cross-origin request (i.e. with an Origin HTTP header) is performed along with a credential
    /// sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed). If the server
    /// does not give credentials to the origin site (through Access-Control-Allow-Credentials HTTP
    /// header), the resource will be tainted and its usage restricted.
    member _.crossOriginUseCredentials = mk "crossorigin" "use-credentials"

    /// Lets the user agent decide.
    member _.dirAuto = mk "dir" "auto"
    /// Left to right - for languages that are written from left to right.
    member _.dirLtr = mk "dir" "ltr"
    /// Right to left - for languages that are written from right to left.
    member _.dirRtl = mk "dir" "rtl"

    /// The baseline-identifier for the dominant-baseline is set to be alphabetic, the derived baseline-table is constructed
    /// using the alphabetic baseline-table in the font, and the baseline-table font-size is changed to the value of the
    /// font-size attribute on this element.
    member _.dominantBaselineAlphabetic = mk "dominant-baseline" "alphabetic"
    /// If this property occurs on a <text> element, then the computed value depends on the value of the writing-mode attribute.
    ///
    /// If the writing-mode is horizontal, then the value of the dominant-baseline component is alphabetic, else if the writing-mode
    /// is vertical, then the value of the dominant-baseline component is central.
    ///
    /// If this property occurs on a <tspan>, <tref>,
    /// <altGlyph> or <textPath> element, then the dominant-baseline and the baseline-table components remain the same as those of
    /// the parent text content element.
    ///
    /// If the computed baseline-shift value actually shifts the baseline, then the baseline-table
    /// font-size component is set to the value of the font-size attribute on the element on which the dominant-baseline attribute
    /// occurs, otherwise the baseline-table font-size remains the same as that of the element.
    ///
    /// If there is no parent text content
    /// element, the scaled-baseline-table value is constructed as above for <text> elements.
    member _.dominantBaselineAuto = mk "dominant-baseline" "auto"
    /// The baseline-identifier for the dominant-baseline is set to be central. The derived baseline-table is constructed from the
    /// defined baselines in a baseline-table in the font. That font baseline-table is chosen using the following priority order of
    /// baseline-table names: ideographic, alphabetic, hanging, mathematical. The baseline-table font-size is changed to the value
    /// of the font-size attribute on this element.
    member _.dominantBaselineCentral = mk "dominant-baseline" "central"
    /// The baseline-identifier for the dominant-baseline is set to be hanging, the derived baseline-table is constructed using the
    /// hanging baseline-table in the font, and the baseline-table font-size is changed to the value of the font-size attribute on
    /// this element.
    member _.dominantBaselineHanging = mk "dominant-baseline" "hanging"
    /// The baseline-identifier for the dominant-baseline is set to be ideographic, the derived baseline-table is constructed using
    /// the ideographic baseline-table in the font, and the baseline-table font-size is changed to the value of the font-size
    /// attribute on this element.
    member _.dominantBaselineIdeographic = mk "dominant-baseline" "ideographic"
    /// The baseline-identifier for the dominant-baseline is set to be mathematical, the derived baseline-table is constructed using
    /// the mathematical baseline-table in the font, and the baseline-table font-size is changed to the value of the font-size
    /// attribute on this element.
    member _.dominantBaselineMathematical = mk "dominant-baseline" "mathematical"
    /// The baseline-identifier for the dominant-baseline is set to be middle. The derived baseline-table is constructed from the
    /// defined baselines in a baseline-table in the font. That font baseline-table is chosen using the following priority order
    /// of baseline-table names: alphabetic, ideographic, hanging, mathematical. The baseline-table font-size is changed to the value
    /// of the font-size attribute on this element.
    member _.dominantBaselineMiddle = mk "dominant-baseline" "middle"
    /// The baseline-identifier for the dominant-baseline is set to be text-after-edge. The derived baseline-table is constructed
    /// from the defined baselines in a baseline-table in the font. The choice of which font baseline-table to use from the
    /// baseline-tables in the font is browser dependent. The baseline-table font-size is changed to the value of the font-size
    /// attribute on this element.
    member _.dominantBaselineTextAfterEdge = mk "dominant-baseline" "text-after-edge"
    /// The baseline-identifier for the dominant-baseline is set to be text-before-edge. The derived baseline-table is constructed
    /// from the defined baselines in a baseline-table in the font. The choice of which baseline-table to use from the baseline-tables
    /// in the font is browser dependent. The baseline-table font-size is changed to the value of the font-size attribute on this element.
    member _.dominantBaselineTextBeforeEdge = mk "dominant-baseline" "text-before-edge"
    /// This value uses the top of the em box as the baseline.
    member _.dominantBaselineTextTop = mk "dominant-baseline" "text-top"

    // /// This value specifies the length of the simple duration.
    // static member clockValue (duration: System.TimeSpan) =
    //     PropHelpers.createClockValue(duration)
    //     |> Interop.mkAttr "dur"
    /// This value specifies the simple duration as indefinite.
    member _.durIndefinite = mk "dur" "indefinite"
    /// This value specifies the simple duration as the intrinsic media duration.
    ///
    /// This is only valid for elements that define media.
    member _.durMedia = mk "dur" "media"

    /// Indicates that the input image is extended along each of its borders as
    /// necessary by duplicating the color values at the given edge of the input image.
    member _.edgeModeDuplicate = mk "edgeMode" "duplicate"
    /// Indicates that the input image is extended with pixel values of zero for
    /// R, G, B and A.
    member _.edgeModeNone = mk "edgeMode" "none"
    /// Indicates that the input image is extended by taking the color values
    /// from the opposite edge of the image.
    member _.edgeModeWrap = mk "edgeMode" "wrap"

    /// Keep the state of the last animation frame.
    member _.fillFreeze = mk "fill" "freeze"
    /// Keep the state of the first animation frame.
    member _.fillRemove = mk "fill" "remove"

    /// x, y, width and height represent values in the current coordinate system that results from
    /// taking the current user coordinate system in place at the time when the <filter> element is
    /// referenced (i.e., the user coordinate system for the element referencing the <filter> element
    /// via a filter attribute).
    member _.filterUnitsUserSpaceOnUse = mk "filterUnits" "userSpaceOnUse"
    /// x, y, width and height represent fractions or percentages of the bounding box on the referencing
    /// element.
    member _.filterUnitsObjectBoundingBox = mk "filterUnits" "objectBoundingBox"

    /// Indicates that the attributes represent values in the coordinate system that results from
    /// taking the current user coordinate system in place at the time when the gradient element
    /// is referenced (i.e., the user coordinate system for the element referencing the gradient
    /// element via a fill or stroke property) and then applying the transform specified by
    /// attribute gradientTransform.
    ///
    /// Percentages represent values relative to the current SVG viewport.
    member _.gradientUnitsUserSpaceOnUse = mk "gradientUnits" "userSpaceOnUse"
    /// Indicates that the user coordinate system for the attributes is established using the
    /// bounding box of the element to which the gradient is applied and then applying the
    /// transform specified by attribute gradientTransform.
    ///
    /// Percentages represent values relative to the bounding box for the object.
    member _.gradientUnitsObjectBoundingBox = mk "gradientUnits" "objectBoundingBox"

    /// Allows page authors to define a content policy for the current page.
    ///
    /// Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site
    /// scripting attacks.
    member _.httpEquivContentSecurityPolicy = mk "http-equiv" "content-security-policy"
    /// If specified, the content attribute must have the value "text/html; charset=utf-8".
    ///
    /// Note: Can only be used in documents served with a text/html MIME type — not in documents served with an XML MIME type.
    member _.httpEquivContentType = mk "http-equiv" "content-type"
    /// Sets the name of the default CSS style sheet set.
    member _.httpEquivDefaultStyle = mk "http-equiv" "default-style"
    /// This instruction specifies:
    ///
    /// The number of seconds until the page should be reloaded - only if the content attribute contains a positive integer.
    ///
    /// The number of seconds until the page should redirect to another - only if the content attribute contains a positive integer followed by the string ';url=', and a valid URL.
    member _.httpEquivRefresh = mk "http-equiv" "refresh"
    /// If specified, the content attribute must have the value "IE=edge". User agents are required to ignore this pragma.
    member _.httpEquivXUaCompatible = mk "http-equiv" "x-ua-compatible"

    /// Represents an image snapshot of the SVG document under the filter region at the time that the
    /// <filter> element was invoked, except only the alpha channel is used.
    member _.inBackgroundAlpha = mk "in" "BackgroundAlpha"
    /// Represents an image snapshot of the SVG document under the filter region at the time that the
    /// <filter> element was invoked.
    member _.inBackgroundImage = mk "in" "BackgroundImage"
    /// An assigned name for the filter primitive.
    ///
    /// If supplied, then graphics that result from processing this filter primitive can be referenced
    /// by an in attribute on a subsequent filter primitive within the same filter element.
    member _.inCustom (name: string) = mk "in" name
    /// Represents the value of the fill property on the target element for the filter effect.
    ///
    /// In many cases, the FillPaint is opaque everywhere, but that might not be the case if a shape is
    /// painted with a gradient or pattern which itself includes transparent or semi-transparent parts.
    member _.inFillPaint = mk "in" "FillPaint"
    /// Represents the graphics elements that were the original input into the <filter> element, except
    /// that only the alpha channel is used.
    member _.inSourceAlpha = mk "in" "SourceAlpha"
    /// Represents the graphics elements that were the original input into the <filter> element.
    member _.inSourceGraphic = mk "in" "SourceGraphic"
    /// Represents the value of the stroke property on the target element for the filter effect.
    ///
    /// In many cases, the StrokePaint is opaque everywhere, but that might not be the case if a shape
    /// is painted with a gradient or pattern which itself includes transparent or semi-transparent parts.
    member _.inStrokePaint = mk "in" "StrokePaint"

    /// Represents an image snapshot of the SVG document under the filter region at the time that the
    /// <filter> element was invoked, except only the alpha channel is used.
    member _.in2BackgroundAlpha = mk "in2" "BackgroundAlpha"
    /// Represents an image snapshot of the SVG document under the filter region at the time that the
    /// <filter> element was invoked.
    member _.in2BackgroundImage = mk "in2" "BackgroundImage"
    /// An assigned name for the filter primitive.
    ///
    /// If supplied, then graphics that result from processing this filter primitive can be referenced
    /// by an in attribute on a subsequent filter primitive within the same filter element.
    member _.in2Custom (name: string) = mk "in2" name
    /// Represents the value of the fill property on the target element for the filter effect.
    ///
    /// In many cases, the FillPaint is opaque everywhere, but that might not be the case if a shape is
    /// painted with a gradient or pattern which itself includes transparent or semi-transparent parts.
    member _.in2FillPaint = mk "in2" "FillPaint"
    /// Represents the graphics elements that were the original input into the <filter> element, except
    /// that only the alpha channel is used.
    member _.in2SourceAlpha = mk "in2" "SourceAlpha"
    /// Represents the graphics elements that were the original input into the <filter> element.
    member _.in2SourceGraphic = mk "in2" "SourceGraphic"
    /// Represents the value of the stroke property on the target element for the filter effect.
    ///
    /// In many cases, the StrokePaint is opaque everywhere, but that might not be the case if a shape
    /// is painted with a gradient or pattern which itself includes transparent or semi-transparent parts.
    member _.in2StrokePaint = mk "in2" "StrokePaint"

    member _.inputModeDecimal = mk "inputmode" "decimal"
    member _.inputModeEmail = mk "inputmode" "email"
    member _.inputModeNone = mk "inputmode" "none"
    member _.inputModeNumeric = mk "inputmode" "numeric"
    member _.inputModeSearch = mk "inputmode" "search"
    member _.inputModeTel = mk "inputmode" "tel"
    member _.inputModeUrl = mk "inputmode" "url"

    /// Subtitles provide translation of content that cannot be understood by the viewer. For example dialogue
    /// or text that is not English in an English language film.
    ///
    /// Subtitles may contain additional content, usually extra background information. For example the text
    /// at the beginning of the Star Wars films, or the date, time, and location of a scene.
    member _.kindSubtitles = mk "kind" "subtitles"
    /// Closed captions provide a transcription and possibly a translation of audio.
    ///
    /// It may include important non-verbal information such as music cues or sound effects.
    /// It may indicate the cue's source (e.g. music, text, character).
    ///
    /// Suitable for users who are deaf or when the sound is muted.
    member _.kindCaptions = mk "kind" "captions"
    /// Textual description of the video content.
    ///
    /// Suitable for users who are blind or where the video cannot be seen.
    member _.kindDescriptions = mk "kind" "descriptions"
    /// Chapter titles are intended to be used when the user is navigating the media resource.
    member _.kindChapters = mk "kind" "chapters"
    /// Tracks used by scripts. Not visible to the user.
    member _.kindMetadata = mk "kind" "metadata"

    member _.lengthAdjustSpacing = mk "lengthAdjust" "spacing"
    member _.lengthAdjustSpacingAndGlyphs = mk "lengthAdjust" "spacingAndGlyphs"

    /// Specifies that the markerWidth and markerUnits attributes and the contents of the <marker> element represent
    /// values in a coordinate system which has a single unit equal the size in user units of the current stroke width
    /// (see the stroke-width attribute) in place for the graphic object referencing the marker.
    member _.markerUnitsStrokeWidth = mk "markerUnits" "strokeWidth"
    /// Specifies that the markerWidth and markerUnits attributes and the contents of the <marker> element represent
    /// values in the current user coordinate system in place for the graphic object referencing the marker (i.e.,
    /// the user coordinate system for the element referencing the <marker> element via a marker, marker-start,
    /// marker-mid, or marker-end property).
    member _.markerUnitsUserSpaceOnUse = mk "markerUnits" "userSpaceOnUse"

    /// Indicates that all coordinates inside the <mask> element are relative to the bounding box of the element the
    /// mask is applied to.
    ///
    /// A bounding box could be considered the same as if the content of the <mask> were bound to mk "0 0 1 1" viewbox.
    member _.maskContentUnitsObjectBoundingBox = mk "maskContentUnits" "strokeWidth"
    /// Indicates that all coordinates inside the <mask> element refer to the user coordinate system as defined
    /// when the mask was created.
    member _.maskContentUnitsUserSpaceOnUse = mk "maskContentUnits" "userSpaceOnUse"

    /// Indicates that all coordinates for the geometry attributes represent fractions or percentages of the bounding box
    /// of the element to which the mask is applied.
    ///
    /// A bounding box could be considered the same as if the content of the <mask> were bound to mk "0 0 1 1" viewbox.
    member _.maskUnitsObjectBoundingBox = mk "maskUnits" "strokeWidth"
    /// Indicates that all coordinates for the geometry attributes refer to the user coordinate system as defined
    /// when the mask was created.
    member _.maskUnitsUserSpaceOnUse = mk "maskUnits" "userSpaceOnUse"

    /// The final color has the hue and saturation of the top color, while using the luminosity of the
    /// bottom color.
    ///
    /// The effect preserves gray levels and can be used to colorize the foreground.
    member _.modeColor = mk "mode" "color"
    /// The final color is the result of inverting the bottom color, dividing the value by the top
    /// color, and inverting that value.
    ///
    /// A white foreground leads to no change. A foreground with the inverse color of the backdrop
    /// leads to a black final image.
    ///
    /// This blend mode is similar to multiply, but the foreground need only be as dark as the inverse
    /// of the backdrop to make the final image black.
    member _.modeColorBurn = mk "mode" "color-burn"
    /// The final color is the result of dividing the bottom color by the inverse of the top color.
    ///
    /// A black foreground leads to no change. A foreground with the inverse color of the backdrop
    /// leads to a fully lit color.
    ///
    /// This blend mode is similar to screen, but the foreground need only be as light as the inverse
    /// of the backdrop to create a fully lit color.
    member _.modeColorDodge = mk "mode" "color-dodge"
    /// The final color is composed of the darkest values of each color channel.
    member _.modeDarken = mk "mode" "darken"
    /// The final color is the result of subtracting the darker of the two colors from the lighter
    /// one.
    ///
    /// A black layer has no effect, while a white layer inverts the other layer's color.
    member _.modeDifference = mk "mode" "difference"
    /// The final color is similar to difference, but with less contrast.
    ///
    /// As with difference, a black layer has no effect, while a white layer inverts the other
    /// layer's color.
    member _.modeExclusion = mk "mode" "exclusion"
    /// The final color is the result of multiply if the top color is darker, or screen if the top
    /// color is lighter.
    ///
    /// This blend mode is equivalent to overlay but with the layers swapped.
    ///
    /// The effect is similar to shining a harsh spotlight on the backdrop.
    member _.modeHardLight = mk "mode" "hard-light"
    /// The final color has the hue of the top color, while using the saturation and luminosity of the
    /// bottom color.
    member _.modeHue = mk "mode" "hue"
    /// The final color is composed of the lightest values of each color channel.
    member _.modeLighten = mk "mode" "lighten"
    /// The final color has the luminosity of the top color, while using the hue and saturation of the
    /// bottom color.
    ///
    /// This blend mode is equivalent to color, but with the layers swapped.
    member _.modeLuminosity = mk "mode" "luminosity"
    /// The final color is the result of multiplying the top and bottom colors.
    ///
    /// A black layer leads to a black final layer, and a white layer leads to no change.
    ///
    /// The effect is like two images printed on transparent film overlapping.
    member _.modeMultiply = mk "mode" "multiply"
    /// The final color is the top color, regardless of what the bottom color is.
    ///
    /// The effect is like two opaque pieces of paper overlapping.
    member _.modeNormal = mk "mode" "normal"
    /// The final color is the result of multiply if the bottom color is darker, or screen if the
    /// bottom color is lighter.
    ///
    /// This blend mode is equivalent to hard-light but with the layers swapped.
    member _.modeOverlay = mk "mode" "overlay"
    /// The final color has the saturation of the top color, while using the hue and luminosity of the
    /// bottom color.
    ///
    /// A pure gray backdrop, having no saturation, will have no effect.
    member _.modeSaturation = mk "mode" "saturation"
    /// The final color is the result of inverting the colors, multiplying them, and inverting
    /// that value.
    ///
    /// A black layer leads to no change, and a white layer leads to a white final layer.
    ///
    /// The effect is like two images shone onto a projection screen.
    member _.modeScreen = mk "mode" "screen"
    /// The final color is similar to hard-light, but softer.
    ///
    /// This blend mode behaves similar to hard-light.
    ///
    /// The effect is similar to shining a diffused spotlight on the backdrop.
    member _.modeSoftLight = mk "mode" "soft-light"

    /// This value indicates that the source graphic defined in the in attribute and the
    /// destination graphic defined in the in2 attribute are combined using the following
    /// formula:
    ///
    /// result = k1*i1*i2 + k2*i1 + k3*i2 + k4
    ///
    /// where:
    ///
    /// i1 and i2 indicate the corresponding pixel channel values of the input image, which
    /// map to in and in2 respectively, and k1,k2,k3,and k4 indicate the values of the
    /// attributes with the same name.
    ///
    /// Used with <feComposite>
    member _.operatorArithmetic = mk "operator" "arithmetic"
    /// Indicates that the parts of the source graphic defined in the in attribute, which overlap
    /// the destination graphic defined in the in2 attribute, replace the destination graphic.
    ///
    /// The parts of the destination graphic that do not overlap with the source graphic stay untouched.
    ///
    /// Used with <feComposite>
    member _.operatorAtop = mk "operator" "atop"
    /// Fattens the source graphic defined in the in attribute.
    ///
    /// Used with <feMorphology>
    member _.operatorDilate = mk "operator" "dilate"
    /// Thins the source graphic defined in the in attribute.
    ///
    /// Used with <feMorphology>
    member _.operatorErode = mk "operator" "erode"
    /// Indicates that the parts of the source graphic defined in the in attribute that overlap the
    /// destination graphic defined in the in2 attribute, replace the destination graphic.
    ///
    /// Used with <feComposite>
    member _.operatorIn' = mk "operator" "in"
    /// Indicates that the sum of the source graphic defined in the in attribute and the destination
    /// graphic defined in the in2 attribute is displayed.
    ///
    /// Used with <feComposite>
    member _.operatorLighter = mk "operator" "lighter"
    /// Indicates that the parts of the source graphic defined in the in attribute that fall outside
    /// the destination graphic defined in the in2 attribute, are displayed.
    ///
    /// Used with <feComposite>
    member _.operatorOut = mk "operator" "out"
    /// Indicates that the source graphic defined in the in attribute is placed over the destination
    /// graphic defined in the in2 attribute.
    ///
    /// Used with <feComposite>
    member _.operatorOver = mk "operator" "over"
    /// Indicates that the non-overlapping regions of the source graphic defined in the in attribute
    /// and the destination graphic defined in the in2 attribute are combined.
    ///
    /// Used with <feComposite>
    member _.operatorXor = mk "operator" "xor"

    /// Indicates that all coordinates inside the <pattern> element are relative to the bounding box of the element
    /// the pattern is applied to.
    ///
    /// A bounding box could be considered the same as if the content of the <pattern> were bound to mk "0 0 1 1"
    /// viewbox for a pattern tile of width and height of 100%.
    member _.patternContentUnitsObjectBoundingBox = mk "patternContentUnits" "objectBoundingBox"
    /// Indicates that all coordinates inside the <pattern> element refer to the user coordinate system as defined
    /// when the pattern tile was created.
    member _.patternContentUnitsUserSpaceOnUse = mk "patternContentUnits" "userSpaceOnUse"

    /// Indicates that all coordinates for the geometry properties represent fractions or percentages of the bounding
    /// box of the element to which the mask is applied.
    ///
    /// A bounding box could be considered the same as if the content of the <mask> were bound to mk "0 0 1 1" viewbox.
    member _.patternUnitsObjectBoundingBox = mk "patternUnits" "objectBoundingBox"
    /// Indicates that all coordinates for the geometry properties refer to the user coordinate system as defined
    /// when the pattern was applied.
    member _.patternUnitsUserSpaceOnUse = mk "patternUnits" "userSpaceOnUse"

    /// Indicates that the whole video file can be downloaded, even if the user is not expected to use it.
    member _.preloadAuto = mk "preload" "auto"
    /// Indicates that only video metadata (e.g. length) is fetched.
    member _.preloadMetadata = mk "preload" "metadata"
    /// Indicates that the video should not be preloaded.
    member _.preloadNone = mk "preload" "none"

    /// Do not force uniform scaling.
    ///
    /// Scale the graphic content of the given element non-uniformly if necessary such that the element's
    /// bounding box exactly matches the viewport rectangle. Note that if <align> is none, then the optional
    /// <meetOrSlice> value is ignored.
    member _.preserveAspectRatioNone = mk "preserveAspectRatio" "none"

    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewBox is visible within the viewport.
    ///
    /// The viewBox is scaled up as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the graphic does not match the viewport, some of
    /// the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
    /// the viewBox will draw will be smaller than the viewport).
    member _.preserveAspectRatioXMinYMinMeet = mk "preserveAspectRatio" "xMinYMin meet"
    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewport is covered by the viewBox.
    ///
    /// The viewBox is scaled down as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
    /// viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
    /// viewBox will draw is larger than the viewport).
    member _.preserveAspectRatioXMinYMinSlice = mk "preserveAspectRatio" "xMinYMin slice"

    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewBox is visible within the viewport.
    ///
    /// The viewBox is scaled up as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the graphic does not match the viewport, some of
    /// the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
    /// the viewBox will draw will be smaller than the viewport).
    member _.preserveAspectRatioXMidYMinMeet = mk "preserveAspectRatio" "xMidYMin meet"
    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewport is covered by the viewBox.
    ///
    /// The viewBox is scaled down as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
    /// viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
    /// viewBox will draw is larger than the viewport).
    member _.preserveAspectRatioXMidYMinSlice = mk "preserveAspectRatio" "xMidYMin slice"

    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewBox is visible within the viewport.
    ///
    /// The viewBox is scaled up as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the graphic does not match the viewport, some of
    /// the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
    /// the viewBox will draw will be smaller than the viewport).
    member _.preserveAspectRatioXMaxYMinMeet = mk "preserveAspectRatio" "xMaxYMin meet"
    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewport is covered by the viewBox.
    ///
    /// The viewBox is scaled down as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
    /// viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
    /// viewBox will draw is larger than the viewport).
    member _.preserveAspectRatioXMaxYMinSlice = mk "preserveAspectRatio" "xMaxYMin slice"

    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewBox is visible within the viewport.
    ///
    /// The viewBox is scaled up as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the graphic does not match the viewport, some of
    /// the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
    /// the viewBox will draw will be smaller than the viewport).
    member _.preserveAspectRatioXMinYMidMeet = mk "preserveAspectRatio" "xMinYMid meet"
    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewport is covered by the viewBox.
    ///
    /// The viewBox is scaled down as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
    /// viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
    /// viewBox will draw is larger than the viewport).
    member _.preserveAspectRatioXMinYMidSlice = mk "preserveAspectRatio" "xMinYMid slice"

    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewBox is visible within the viewport.
    ///
    /// The viewBox is scaled up as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the graphic does not match the viewport, some of
    /// the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
    /// the viewBox will draw will be smaller than the viewport).
    member _.preserveAspectRatioXMidYMidMeet = mk "preserveAspectRatio" "xMidYMid meet"
    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewport is covered by the viewBox.
    ///
    /// The viewBox is scaled down as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
    /// viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
    /// viewBox will draw is larger than the viewport).
    member _.preserveAspectRatioXMidYMidSlice = mk "preserveAspectRatio" "xMidYMid slice"

    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewBox is visible within the viewport.
    ///
    /// The viewBox is scaled up as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the graphic does not match the viewport, some of
    /// the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
    /// the viewBox will draw will be smaller than the viewport).
    member _.preserveAspectRatioXMaxYMidMeet = mk "preserveAspectRatio" "xMaxYMid meet"
    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewport is covered by the viewBox.
    ///
    /// The viewBox is scaled down as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
    /// viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
    /// viewBox will draw is larger than the viewport).
    member _.preserveAspectRatioXMaxYMidSlice = mk "preserveAspectRatio" "xMaxYMid slice"

    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewBox is visible within the viewport.
    ///
    /// The viewBox is scaled up as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the graphic does not match the viewport, some of
    /// the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
    /// the viewBox will draw will be smaller than the viewport).
    member _.preserveAspectRatioXMinYMaxMeet = mk "preserveAspectRatio" "xMinYMax meet"
    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewport is covered by the viewBox.
    ///
    /// The viewBox is scaled down as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
    /// viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
    /// viewBox will draw is larger than the viewport).
    member _.preserveAspectRatioXMinYMaxSlice = mk "preserveAspectRatio" "xMinYMax slice"

    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewBox is visible within the viewport.
    ///
    /// The viewBox is scaled up as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the graphic does not match the viewport, some of
    /// the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
    /// the viewBox will draw will be smaller than the viewport).
    member _.preserveAspectRatioXMidYMaxMeet = mk "preserveAspectRatio" "xMidYMax meet"
    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewport is covered by the viewBox.
    ///
    /// The viewBox is scaled down as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
    /// viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
    /// viewBox will draw is larger than the viewport).
    member _.preserveAspectRatioXMidYMaxSlice = mk "preserveAspectRatio" "xMidYMax slice"

    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewBox is visible within the viewport.
    ///
    /// The viewBox is scaled up as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the graphic does not match the viewport, some of
    /// the viewport will extend beyond the bounds of the viewBox (i.e., the area into which
    /// the viewBox will draw will be smaller than the viewport).
    member _.preserveAspectRatioXMaxYMaxMeet = mk "preserveAspectRatio" "xMaxYMax meet"
    /// Scale the graphic such that:
    ///
    /// Aspect ratio is preserved.
    ///
    /// The entire viewport is covered by the viewBox.
    ///
    /// The viewBox is scaled down as much as possible, while still meeting the other criteria.
    ///
    /// In this case, if the aspect ratio of the viewBox does not match the viewport, some of the
    /// viewBox will extend beyond the bounds of the viewport (i.e., the area into which the
    /// viewBox will draw is larger than the viewport).
    member _.preserveAspectRatioXMaxYMaxSlice = mk "preserveAspectRatio" "xMaxYMax slice"

    /// Indicates that any length values within the filter definitions represent fractions or
    /// percentages of the bounding box on the referencing element.
    member _.primitiveUnitsObjectBoundingBox = mk "primitiveUnits" "objectBoundingBox"
    /// Indicates that any length values within the filter definitions represent values in the current user coordinate
    /// system in place at the time when the <filter> element is referenced (i.e., the user coordinate system for the
    /// element referencing the <filter> element via a filter attribute).
    member _.primitiveUnitsUserSpaceOnUse = mk "primitiveUnits" "userSpaceOnUse"

    /// The Referer header will not be sent.
    member _.referrerPolicyNoReferrer = mk "referrerpolicy" "no-referrer"
    /// The Referer header will not be sent to origins without TLS (HTTPS).
    member _.referrerPolicyNoReferrerWhenDowngrade = mk "referrerpolicy" "no-referrer-when-downgrade"
    /// The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.
    member _.referrerPolicyOrigin = mk "referrerpolicy" "origin"
    /// The referrer sent to other origins will be limited to the scheme, the host, and the port.
    /// Navigations on the same origin will still include the path.
    member _.referrerPolicyOriginWhenCrossOrigin = mk "referrerpolicy" "origin-when-cross-origin"
    /// A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.
    member _.referrerPolicySameOrigin = mk "referrerpolicy" "same-origin"
    /// Only send the origin of the document as the referrer when the protocol security level stays the same
    /// (e.g. HTTPS→HTTPS), but don't send it to a less secure destination (e.g. HTTPS→HTTP).
    member _.referrerPolicyStrictOrigin = mk "referrerpolicy" "strict-origin"
    /// Send a full URL when performing a same-origin request, but only send the origin when the protocol security
    /// level stays the same (e.g.HTTPS→HTTPS), and send no header to a less secure destination (e.g. HTTPS→HTTP).
    member _.referrerPolicyStrictOriginWhenCrossOrigin = mk "referrerpolicy" "strict-origin-when-cross-origin"
    /// The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe,
    /// because it leaks origins and paths from TLS-protected resources to insecure origins.
    member _.referrerPolicyUnsafeUrl = mk "referrerpolicy" "unsafe-url"

    /// Lengths are interpreted as being in the coordinate system of the marker contents, after application
    /// of the viewBox and preserveAspectRatio attributes.
    member _.refXLength (value: ICssUnit) = mk "refX" (Util.asString value)
    /// Numbers are interpreted as being in the coordinate system of the marker contents, after application of the
    /// viewBox and preserveAspectRatio attributes.
    member _.refXLength (value: int) = mk "refX" (Util.asString value)
    /// The reference point of the marker is placed at the left edge of the shape.
    member _.refXLeft = mk "refX" "left"
    /// The reference point of the marker is placed at the horizontal center of the shape.
    member _.refXCenter = mk "refX" "center"
    /// The reference point of the marker is placed at the right edge of the shape.
    member _.refXRight = mk "refX" "right"

    /// Lengths are interpreted as being in the coordinate system of the marker contents, after application of the
    /// viewBox and preserveAspectRatio attributes.
    ///
    /// Percentage values are interpreted as being a percentage of the viewBox height.
    member _.refYLength (value: ICssUnit) = mk "refY" (Util.asString value)
    /// Numbers are interpreted as being in the coordinate system of the marker contents, after application of the
    /// viewBox and preserveAspectRatio attributes.
    member _.refYLength (value: int) = mk "refY" (Util.asString value)
    /// The reference point of the marker is placed at the top edge of the shape.
    member _.refYTop = mk "refY" "top"
    /// The reference point of the marker is placed at the vertical center of the shape.
    member _.refYCenter = mk "refY" "center"
    /// The reference point of the marker is placed at the bottom edge of the shape.
    member _.refYBottom = mk "refY" "bottom"

    /// Provides a link to an alternate version of the document (i.e. print page, translated or mirror).
    ///
    /// Example: <link rel="alternate" type="application/atom+xml" title="W3Schools News" href="/blog/news/atom">
    member _.relAlternate = mk "rel" "alternate"
    /// Provides a link to the author of the document.
    member _.relAuthor = mk "rel" "author"
    /// Permalink for the nearest ancestor section.
    member _.relBookmark = mk "rel" "bookmark"
    /// Preferred URL for the current document.
    member _.relCanonical = mk "rel" "canonical"
    /// Specifies that the browser should preemptively perform DNS resolution for the target resource's origin.
    member _.relDnsPrefetch = mk "rel" "dns-prefetch"
    /// The referenced document is not part of the same site as the current document.
    member _.relExternal = mk "rel" "external"
    /// Provides a link to a help document. Example: <link rel="help" href="/help/">
    member _.relHelp = mk "rel" "help"
    /// Imports an icon to represent the document.
    ///
    /// Example: <link rel="icon" href="/favicon.ico" type="image/x-icon">
    member _.relIcon = mk "rel" "icon"
    /// Provides a link to copyright information for the document.
    member _.relLicense = mk "rel" "license"
    /// Web app manifest.
    member _.relManifest = mk "rel" "manifest"
    /// Tells to browser to preemptively fetch the script and store it in the document's module map for later
    /// evaluation. Optionally, the module's dependencies can be fetched as well.
    member _.relModulepreload = mk "rel" "modulepreload"
    /// Provides a link to the next document in the series.
    member _.relNext = mk "rel" "next"
    /// Indicates that the current document's original author or publisher does not endorse the referenced document.
    member _.relNofollow = mk "rel" "nofollow"
    /// Creates a top-level browsing context that is not an auxiliary browsing context if the hyperlink would create
    /// either of those, to begin with (i.e., has an appropriate target attribute value).
    member _.relNoopener = mk "rel" "noopener"
    /// No Referer header will be included. Additionally, has the same effect as noopener.
    member _.relNoreferrer = mk "rel" "noreferrer"
    /// Creates an auxiliary browsing context if the hyperlink would otherwise create a top-level browsing context
    /// that is not an auxiliary browsing context (i.e., has "_blank" as target attribute value).
    member _.relOpener = mk "rel" "opener"
    /// Provides the address of the pingback server that handles pingbacks to the current document.
    member _.relPingback = mk "rel" "pingback"
    /// Specifies that the browser should preemptively connect to the target resource's origin.
    member _.relPreconnect = mk "rel" "preconnect"
    /// Specifies that the browser should preemptively fetch and cache the target resource as it is likely to be
    /// required for a follow-up navigation.
    member _.relPrefetch = mk "rel" "prefetch"
    /// Specifies that the browser agent must preemptively fetch and cache the target resource for current navigation
    /// according to the destination given by the "as" attribute (and the priority associated with that destination).
    member _.relPreload = mk "rel" "preload"
    /// Specifies that the browser should pre-render (load) the specified webpage in the background. So, if the user
    /// navigates to this page, it speeds up the page load (because the page is already loaded).
    ///
    /// Warning! This wastes the user's bandwidth!
    ///
    /// Only use prerender if it is absolutely sure that the webpage is required at some point in the user journey.
    member _.relPrerender = mk "rel" "prerender"
    /// Indicates that the document is a part of a series, and that the previous document in the series is the referenced document.
    member _.relPrev = mk "rel" "prev"
    /// Provides a link to a resource that can be used to search through the current document and its related pages.
    member _.relSearch = mk "rel" "search"
    /// Imports a style sheet.
    member _.relStylesheet = mk "rel" "stylesheet"
    /// Gives a tag (identified by the given address) that applies to the current document.
    member _.relTag = mk "rel" "tag"

    /// Specifies the number of iterations.
    ///
    /// It can include partial iterations expressed as fraction values.
    ///
    /// A fractional value describes a portion of the simple duration.
    ///
    /// Values must be greater than 0.
    member _.repeatCountIterations (value: float) = mk "repeatCount" (Util.asString value)
    /// Specifies the number of iterations.
    ///
    /// It can include partial iterations expressed as fraction values.
    ///
    /// A fractional value describes a portion of the simple duration.
    ///
    /// Values must be greater than 0.
    member _.repeatCountIterations (value: int) = mk "repeatCount" (Util.asString value)
    /// Indicates that the animation will be repeated indefinitely (i.e. until the document ends).
    member _.repeatCountIndefinite = mk "repeatCount" "indefinite"

    // /// This value specifies the duration in presentation time to repeat the animation.
    // static member clockValue (duration: System.TimeSpan) =
    //     PropHelpers.createClockValue(duration)
    //     |> Interop.mkAttr "repeatDur"
    /// Indicates that the animation will be repeated indefinitely (i.e. until the document ends).
    member _.repeatDurIndefinite = mk "repeatDur" "indefinite"

    /// Indicates that the animation can be restarted at any time.
    member _.restartAlways = mk "restart" "always"
    /// Indicates that the animation cannot be restarted for the time the document is loaded.
    member _.restartNever = mk "restart" "never"
    /// Indicates that the animation can only be restarted when it is not active (i.e. after the active end).
    ///
    /// Attempts to restart the animation during its active duration are ignored.
    member _.restartWhenNotActive = mk "restart" "whenNotActive"

    /// A message with important, and usually time-sensitive, information.
    /// See related `alertdialog` and `status`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#alert
    member _.roleAlert = mk "role" "alert"
    /// A type of dialog that contains an alert message, where initial focus
    /// goes to an element within the dialog. See related `alert` and
    /// `dialog`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#alertdialog
    member _.roleAlertDialog = mk "role" "alertdialog"
    /// A region declared as a web application, as opposed to a web
    /// `document`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#application
    member _.roleApplication = mk "role" "application"
    /// A section of a page that consists of a composition that forms an
    /// independent part of a document, page, or site.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#article
    member _.roleArticle = mk "role" "article"
    /// A region that contains mostly site-oriented content, rather than
    /// page-specific content.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#banner
    member _.roleBanner = mk "role" "banner"
    /// An input that allows for user-triggered actions when clicked or
    /// pressed. See related `link`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#button
    member _.roleButton = mk "role" "button"
    /// A checkable input that has three possible values: `true`, `false`,
    /// or `mixed`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#checkbox
    member _.roleCheckbox = mk "role" "checkbox"
    /// A cell containing header information for a column.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#columnheader
    member _.roleColumnHeader = mk "role" "columnheader"
    /// A presentation of a `select`; usually similar to a `textbox` where
    /// users can type ahead to select an option, or type to enter arbitrary
    /// text as a new item in the list. See related `listbox`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#combobox
    member _.roleComboBox = mk "role" "combobox"
    /// A supporting section of the document, designed to be complementary
    /// to the main content at a similar level in the DOM hierarchy, but
    /// remains meaningful when separated from the main content.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#complementary
    member _.roleComplementary = mk "role" "complementary"
    /// A large perceivable region that contains information about the
    /// parent document.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#contentinfo
    member _.roleContentInfo = mk "role" "contentinfo"
    /// A definition of a term or concept.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#definition
    member _.roleDefinition = mk "role" "definition"
    /// A dialog is an application window that is designed to interrupt the
    /// current processing of an application in order to prompt the user to
    /// enter information or require a response. See related `alertdialog`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#dialog
    member _.roleDialog = mk "role" "dialog"
    /// A list of references to members of a group, such as a static table
    /// of contents.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#directory
    member _.roleDirectory = mk "role" "directory"
    /// A region containing related information that is declared as document
    /// content, as opposed to a web application.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#document
    member _.roleDocument = mk "role" "document"
    /// A `landmark` region that contains a collection of items and objects
    /// that, as a whole, combine to create a form. See related search.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#form
    member _.roleForm = mk "role" "form"
    /// A grid is an interactive control which contains cells of tabular
    /// data arranged in rows and columns, like a table.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#grid
    member _.roleGrid = mk "role" "grid"
    /// A cell in a grid or treegrid.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#gridcell
    member _.roleGridCell = mk "role" "gridcell"
    /// A set of user interface objects which are not intended to be
    /// included in a page summary or table of contents by assistive
    /// technologies.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#group
    member _.roleGroup = mk "role" "group"
    /// A heading for a section of the page.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#heading
    member _.roleHeading = mk "role" "heading"
    /// A container for a collection of elements that form an image.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#img
    member _.roleImg = mk "role" "img"
    /// An interactive reference to an internal or external resource that,
    /// when activated, causes the user agent to navigate to that resource.
    /// See related `button`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#link
    member _.roleLink = mk "role" "link"
    /// A group of non-interactive list items. See related `listbox`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#list
    member _.roleList = mk "role" "list"
    /// A widget that allows the user to select one or more items from a
    /// list of choices. See related `combobox` and `list`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#listbox
    member _.roleListBox = mk "role" "listbox"
    /// A single item in a list or directory.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#listitem
    member _.roleListItem = mk "role" "listitem"
    /// A type of live region where new information is added in meaningful
    /// order and old information may disappear. See related `marquee`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#log
    member _.roleLog = mk "role" "log"
    /// The main content of a document.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#main
    member _.roleMain = mk "role" "main"
    /// A type of live region where non-essential information changes
    /// frequently. See related `log`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#marquee
    member _.roleMarquee = mk "role" "marquee"
    /// Content that represents a mathematical expression.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#math
    member _.roleMath = mk "role" "math"
    /// A type of widget that offers a list of choices to the user.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#menu
    member _.roleMenu = mk "role" "menu"
    /// A presentation of `menu` that usually remains visible and is usually
    /// presented horizontally.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#menubar
    member _.roleMenuBar = mk "role" "menubar"
    /// An option in a set of choices contained by a `menu` or `menubar`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#menuitem
    member _.roleMenuItem = mk "role" "menuitem"
    /// A `menuitem` with a checkable state whose possible values are
    /// `true`, `false`, or `mixed`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#menuitemcheckbox
    member _.roleMenuItemCheckbox = mk "role" "menuitemcheckbox"
    /// A checkable menuitem in a set of elements with role `menuitemradio`,
    /// only one of which can be checked at a time.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#menuitemradio
    member _.roleMenuItemRadio = mk "role" "menuitemradio"
    /// A collection of navigational elements (usually links) for navigating
    /// the document or related documents.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#navigation
    member _.roleNavigation = mk "role" "navigation"
    /// A section whose content is parenthetic or ancillary to the main
    /// content of the resource.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#note
    member _.roleNote = mk "role" "note"
    /// A selectable item in a `select` list.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#option
    member _.roleOption = mk "role" "option"
    /// An element whose implicit native role semantics will not be mapped
    /// to the accessibility API.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#presentation
    member _.rolePresentation = mk "role" "presentation"
    /// An element that displays the progress status for tasks that take a
    /// long time.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#progressbar
    member _.roleProgressBar = mk "role" "progressbar"
    /// A checkable input in a group of elements with role radio, only one
    /// of which can be checked at a time.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#radio
    member _.roleRadio = mk "role" "radio"
    /// A group of radio buttons.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#radiogroup
    member _.roleRadioGroup = mk "role" "radiogroup"
    /// A large perceivable section of a web page or document, that is
    /// important enough to be included in a page summary or table of
    /// contents, for example, an area of the page containing live sporting
    /// event statistics.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#region
    member _.roleRegion = mk "role" "region"
    /// A row of cells in a grid.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#row
    member _.roleRow = mk "role" "row"
    /// A group containing one or more row elements in a grid.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#rowgroup
    member _.roleRowGroup = mk "role" "rowgroup"
    /// A cell containing header information for a row in a grid.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#rowheader
    member _.roleRowHeader = mk "role" "rowheader"
    /// A graphical object that controls the scrolling of content within a
    /// viewing area, regardless of whether the content is fully displayed
    /// within the viewing area.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#scrollbar
    member _.roleScrollBar = mk "role" "scrollbar"
    /// A divider that separates and distinguishes sections of content or
    /// groups of menuitems.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#separator
    member _.roleSeparator = mk "role" "separator"
    /// A `landmark` region that contains a collection of items and objects
    /// that, as a whole, combine to create a search facility. See related
    /// `form`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#search
    member _.roleSearch = mk "role" "search"
    /// A user input where the user selects a value from within a given
    /// range.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#slider
    member _.roleSlider = mk "role" "slider"
    /// A form of `range` that expects the user to select from among
    /// discrete choices.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#spinbutton
    member _.roleSpinButton = mk "role" "spinbutton"
    /// A container whose content is advisory information for the user but
    /// is not important enough to justify an alert, often but not
    /// necessarily presented as a status bar. See related `alert`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#status
    member _.roleStatus = mk "role" "status"
    /// A grouping label providing a mechanism for selecting the tab content
    /// that is to be rendered to the user.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#tab
    member _.roleTab = mk "role" "tab"
    /// A list of `tab` elements, which are references to `tabpanel`
    /// elements.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#tablist
    member _.roleTabList = mk "role" "tablist"
    /// A container for the resources associated with a `tab`, where each
    /// `tab` is contained in a `tablist`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#tabpanel
    member _.roleTabPanel = mk "role" "tabpanel"
    /// Input that allows free-form text as its value.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#textbox
    member _.roleTextBox = mk "role" "textbox"
    /// A type of live region containing a numerical counter which indicates
    /// an amount of elapsed time from a start point, or the time remaining
    /// until an end point.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#timer
    member _.roleTimer = mk "role" "timer"
    /// A collection of commonly used function buttons or controls
    /// represented in compact visual form.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#toolbar
    member _.roleToolbar = mk "role" "toolbar"
    /// A contextual popup that displays a description for an element.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#tooltip
    member _.roleTooltip = mk "role" "tooltip"
    /// A type of `list` that may contain sub-level nested groups that can
    /// be collapsed and expanded.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#tree
    member _.roleTree = mk "role" "tree"
    /// A `grid` whose rows can be expanded and collapsed in the same manner
    /// as for a `tree`.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#treegrid
    member _.roleTreeGrid = mk "role" "treegrid"
    /// An option item of a `tree`. This is an element within a tree that
    /// may be expanded or collapsed if it contains a sub-level group of
    /// `treeitem` elements.
    ///
    /// https://www.w3.org/WAI/PF/aria-1.1/roles#treeitem
    member _.roleTreeItem = mk "role" "treeitem"

    // /// For the opposite direction.
    // member _.selectionDirectionBackward = mk "selectionDirection" "backward"
    // /// If selection was performed in the start-to-end direction of the current locale.
    // member _.selectionDirectionForward = mk "selectionDirection" "forward"
    // /// If the direction is unknown.
    // member _.selectionDirectionNone = mk "selectionDirection" "none"

    member _.shapeRect = mk "shape" "rect"
    member _.shapeCircle = mk "shape" "circle"
    member _.shapePoly = mk "shape" "poly"

    /// Indicates that the user agent should use text-on-a-path layout algorithms to adjust
    /// the spacing between typographic characters in order to achieve visually appealing results.
    member _.spacingAuto = mk "spacing" "auto"
    /// Indicates that the typographic characters should be rendered exactly according to the
    /// spacing rules as specified by the layout rules for text-on-a-path.
    member _.spacingExact = mk "spacing" "exact"

    /// Indicates that the final color of the gradient fills the shape beyond the gradient's edges.
    member _.spreadMethodPad = mk "spreadMethod" "pad"
    /// Indicates that the gradient repeats in reverse beyond its edges.
    member _.spreadMethodReflect = mk "spreadMethod" "reflect"
    /// Specifies that the gradient repeats in the original order beyond its edges.
    member _.spreadMethodRepeat = mk "spreadMethod" "repeat"

    /// Indicates that no attempt is made to achieve smooth transitions at the border of tiles which
    /// contain a turbulence function.
    ///
    /// Sometimes the result will show clear discontinuities at the tile borders.
    member _.stitchTilesNoStitch = mk "stitchTiles" "noStitch"
    /// Indicates that the user agent will automatically adjust the x and y values of the base
    /// frequency such that the <feTurbulence> node’s width and height (i.e., the width and
    /// height of the current subregion) contain an integral number of the tile width and height
    /// for the first octave.
    member _.stitchTilesStitch = mk "stitchTiles" "stitch"

    /// Opens the linked document in a new window or tab.
    member _.targetBlank = mk "target" "_blank"
    /// Opens the linked document in the parent frame.
    member _.targetParent = mk "target" "_parent"
    /// Opens the linked document in the same frame as it was clicked (this is default).
    member _.targetSelf = mk "target" "_self"
    /// Opens the linked document in the full body of the window.
    member _.targetTop = mk "target" "_top"

    /// The rendered characters are shifted such that the end of the
    /// resulting rendered text (final current text position before applying
    /// the `text-anchor` property) is at the initial current text position.
    /// For an element with a `direction` property value of `ltr` (typical
    /// for most European languages), the right side of the text is rendered
    /// at the initial text position. For an element with a `direction`
    /// property value of `rtl` (typical for Arabic and Hebrew), the left
    /// side of the text is rendered at the initial text position. For an
    /// element with a vertical primary text direction (often typical for
    /// Asian text), the bottom of the text is rendered at the initial text
    /// position.
    member _.textAnchorEndOfText = mk "text-anchor" "end"
    /// The rendered characters are aligned such that the middle of the text
    /// string is at the current text position. (For text on a path,
    /// conceptually the text string is first laid out in a straight line.
    /// The midpoint between the start of the text string and the end of the
    /// text string is determined. Then, the text string is mapped onto the
    /// path with this midpoint placed at the current text position.)
    member _.textAnchorMiddle = mk "text-anchor" "middle"
    /// The rendered characters are aligned such that the start of the text
    /// string is at the initial current text position. For an element with
    /// a `direction` property value of `ltr` (typical for most European
    /// languages), the left side of the text is rendered at the initial
    /// text position. For an element with a `direction` property value of
    /// `rtl` (typical for Arabic and Hebrew), the right side of the text is
    /// rendered at the initial text position. For an element with a
    /// vertical primary text direction (often typical for Asian text), the
    /// top side of the text is rendered at the initial text position.
    member _.textAnchorStartOfText = mk "text-anchor" "start"

    /// Defines a clickable button (mostly used with a JavaScript code to activate a script)
    member _.typeButton = mk "type" "button"
    /// Defines a checkbox
    member _.typeCheckbox = mk "type" "checkbox"
    /// Defines a color picker
    member _.typeColor = mk "type" "color"
    /// Defines a date control with year, month and day (no time)
    member _.typeDate = mk "type" "date"
    /// Defines a date and time control (year, month, day, time (no timezone)
    member _.typeDateTimeLocal = mk "type" "datetime-local"
    /// Defines a field for an e-mail address
    member _.typeEmail = mk "type" "email"
    /// Defines a file-select field and mk "Browse" button (for file uploads)
    member _.typeFile = mk "type" "file"
    /// Defines a hidden input field
    member _.typeHidden = mk "type" "hidden"
    /// Defines an image as the submit button
    member _.typeImage = mk "type" "image"
    /// Defines a month and year control (no timezone)
    member _.typeMonth = mk "type" "month"
    /// Defines a field for entering a number
    member _.typeNumber = mk "type" "number"
    /// Defines a password field
    member _.typePassword = mk "type" "password"
    /// Defines a radio button
    member _.typeRadio = mk "type" "radio"
    /// Defines a range control (like a slider control)
    member _.typeRange = mk "type" "range"
    /// Defines a reset button
    member _.typeReset = mk "type" "reset"
    /// Defines a text field for entering a search string
    member _.typeSearch = mk "type" "search"
    /// Defines a submit button
    member _.typeSubmit = mk "type" "submit"
    /// Defines a field for entering a telephone number
    member _.typeTel = mk "type" "tel"
    /// Default. Defines a single-line text field
    member _.typeText = mk "type" "text"
    /// Defines a control for entering a time (no timezone)
    member _.typeTime = mk "type" "time"
    /// Defines a field for entering a URL
    member _.typeUrl = mk "type" "url"
    /// Defines a week and year control (no timezone)
    member _.typeWeek = mk "type" "week"

    /// The browser ensures that all line breaks in the value consist of a CR+LF pair,
    /// but does not insert any additional line breaks.
    member _.wrapSoft = mk "wrap" "soft"
    /// The browser automatically inserts line breaks (CR+LF)
    /// so that each line has no more than the width of the control;
    /// the cols attribute must also be specified for this to take effect.
    member _.wrapHard = mk "wrap" "hard"
    /// Like soft but changes appearance to white-space: pre
    /// so line segments exceeding cols are not wrapped and the `<textarea>` becomes horizontally scrollable.
    /// WARNING: This API has not been standardized.
    member _.wrapOff = mk "wrap" "off"

    /// Specifies that the alpha channel of the input image defined in in2 will be used to displace
    /// the pixels of the input image defined in in along the x-axis.
    member _.xChannelSelectorA = mk "xChannelSelector" "A"
    /// Specifies that the blue color channel of the input image defined in in2 will be used to
    /// displace the pixels of the input image defined in in along the x-axis.
    member _.xChannelSelectorB = mk "xChannelSelector" "B"
    /// Specifies that the green color channel of the input image defined in in2 will be used to
    /// displace the pixels of the input image defined in in along the x-axis.
    member _.xChannelSelectorG = mk "xChannelSelector" "G"
    /// Specifies that the red color channel of the input image defined in in2 will be used to
    /// displace the pixels of the input image defined in in along the x-axis.
    member _.xChannelSelectorR = mk "xChannelSelector" "R"

    /// Specifies that the alpha channel of the input image defined in in2 will be used to displace
    /// the pixels of the input image defined in in along the y-axis.
    member _.yChannelSelectorA = mk "yChannelSelector" "A"
    /// Specifies that the blue color channel of the input image defined in in2 will be used to
    /// displace the pixels of the input image defined in in along the y-axis.
    member _.yChannelSelectorB = mk "yChannelSelector" "B"
    /// Specifies that the green color channel of the input image defined in in2 will be used to
    /// displace the pixels of the input image defined in in along the y-axis.
    member _.yChannelSelectorG = mk "yChannelSelector" "G"
    /// Specifies that the red color channel of the input image defined in in2 will be used to
    /// displace the pixels of the input image defined in in along the y-axis.
    member _.yChannelSelectorR = mk "yChannelSelector" "R"
