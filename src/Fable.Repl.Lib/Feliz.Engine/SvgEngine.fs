namespace Feliz

open System

type SvgEngine<'Node>
    /// <summary>Customizable SVG generator API.</summary>
    ///
    /// <param name="mk">Make a node with tag name and children.</param>
    /// <param name="ofStr">Make a node from a string.</param>
    /// <param name="empty">Make an empty node.</param>
    (mk: string -> 'Node seq -> 'Node, ofStr: string -> 'Node, empty: unit -> 'Node) =

    /// Create a custom element
    ///
    /// You generally shouldn't need to use this, if you notice an element missing please submit an issue.
    member _.custom (key: string, children: seq<'Node>) = mk key children
    /// The empty element, renders nothing on screen
    member _.none : 'Node = empty()

    /// SVG Image element, not to be confused with HTML img alias.
    member _.image (children: seq<'Node>) = mk "image" children
    /// The svg element is a container that defines a new coordinate system and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.
    member _.svg (children: seq<'Node>) = mk "svg" children
    member _.circle (children: seq<'Node>) = mk "circle" children
    member _.clipPath (children: seq<'Node>) = mk "clipPath" children
    /// The <defs> element is used to store graphical objects that will be used at a later time. Objects created inside a <defs> element are not rendered directly. To display them you have to reference them (with a <use> element for example). https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs
    member _.defs (children: seq<'Node>) = mk "defs" children
    /// The <desc> element provides an accessible, long-text description of any SVG container element or graphics element.
    member _.desc (value: string) = mk "desc" [ofStr value]
    member _.ellipse (children: seq<'Node>) = mk "ellipse" children
    member _.feBlend (children: seq<'Node>) = mk "feBlend" children
    member _.feColorMatrix (children: seq<'Node>) = mk "feColorMatrix" children
    member _.feComponentTransfer (children: seq<'Node>) = mk "feComponentTransfer" children
    member _.feComposite (children: seq<'Node>) = mk "feComposite" children
    member _.feConvolveMatrix (children: seq<'Node>) = mk "feConvolveMatrix" children
    member _.feDiffuseLighting (children: seq<'Node>) = mk "feDiffuseLighting" children
    member _.feDisplacementMap (children: seq<'Node>) = mk "feDisplacementMap" children
    member _.feDistantLight (children: seq<'Node>) = mk "feDistantLight" children
    member _.feDropShadow (children: seq<'Node>) = mk "feDropShadow" children
    member _.feFlood (children: seq<'Node>) = mk "feFlood" children
    member _.feFuncA (children: seq<'Node>) = mk "feFuncA" children
    member _.feFuncB (children: seq<'Node>) = mk "feFuncB" children
    member _.feFuncG (children: seq<'Node>) = mk "feFuncG" children
    member _.feFuncR (children: seq<'Node>) = mk "feFuncR" children
    member _.feGaussianBlur (children: seq<'Node>) = mk "feGaussianBlur" children
    member _.feImage (children: seq<'Node>) = mk "feImage" children
    member _.feMerge (children: seq<'Node>) = mk "feMerge" children
    member _.feMergeNode (children: seq<'Node>) = mk "feMergeNode" children
    member _.feMorphology (children: seq<'Node>) = mk "feMorphology" children
    member _.feOffset (children: seq<'Node>) = mk "feOffset" children
    member _.fePointLight (children: seq<'Node>) = mk "fePointLight" children
    member _.feSpecularLighting (children: seq<'Node>) = mk "feSpecularLighting" children
    member _.feSpotLight (children: seq<'Node>) = mk "feSpotLight" children
    member _.feTile (children: seq<'Node>) = mk "feTile" children
    member _.feTurbulence (children: seq<'Node>) = mk "feTurbulence" children
    member _.filter (children: seq<'Node>) = mk "filter" children
    member _.foreignObject (children: seq<'Node>) = mk "foreignObject" children
    /// The <g> SVG element is a container used to group other SVG elements.
    ///
    /// Transformations applied to the <g> element are performed on its child elements, and its attributes are inherited by its children. It can also group multiple elements to be referenced later with the <use> element.
    member _.g (children: seq<'Node>) = mk "g" children
    member _.line (children: seq<'Node>) = mk "line" children
    member _.linearGradient (children: seq<'Node>) = mk "linearGradient" children
    /// The <marker> element defines the graphic that is to be used for drawing arrowheads or polymarkers on a given <path>, <line>, <polyline> or <polygon> element.
    member _.marker (children: seq<'Node>) = mk "marker" children
    member _.mask (children: seq<'Node>) = mk "marker" children
    member _.mpath (children: seq<'Node>) = mk "mpath" children
    member _.path (children: seq<'Node>) = mk "path" children
    member _.pattern (children: seq<'Node>) = mk "pattern" children
    member _.polygon (children: seq<'Node>) = mk "polygon" children
    member _.polyline (children: seq<'Node>) = mk "polyline" children
    member _.set (children: seq<'Node>) = mk "set" children
    member _.stop (children: seq<'Node>) = mk "stop" children
    member _.style (value: string) = mk "style" [ofStr value]
    member _.switch (children: seq<'Node>) = mk "switch" children
    member _.symbol (children: seq<'Node>) = mk "symbol" children
    member _.text (content: string) = mk "text" [ofStr content]
    member _.title (content: string) = mk "title" [ofStr content]
    member _.textPath (children: seq<'Node>) = mk "textPath" children
    member _.tspan (children: seq<'Node>) = mk "tspan" children
    member _.use' (children: seq<'Node>) = mk "use" children
    member _.radialGradient (children: seq<'Node>) = mk "radialGradient" children
    member _.rect (children: seq<'Node>) = mk "rect" children
    member _.view (children: seq<'Node>) = mk "view" children
