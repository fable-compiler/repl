namespace Feliz

open System

type HtmlEngine<'Node>
    /// <summary>Customizable HTML generator API.</summary>
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

    member _.a (children: seq<'Node>) = mk "a" children

    member _.abbr (value: float) = mk "abbr" [Util.asString value |> ofStr]
    member _.abbr (value: int) = mk "abbr" [Util.asString value |> ofStr]
    member _.abbr (value: 'Node) = mk "abbr" [value]
    member _.abbr (value: string) = mk "abbr" [ofStr value]
    member _.abbr (children: seq<'Node>) = mk "abbr" children

    member _.address (value: float) = mk "address" [Util.asString value |> ofStr]
    member _.address (value: int) = mk "address" [Util.asString value |> ofStr]
    member _.address (value: 'Node) = mk "address" [value]
    member _.address (value: string) = mk "address" [ofStr value]
    member _.address (children: seq<'Node>) = mk "address" children

    member _.anchor (children: seq<'Node>) = mk "a" children

    member _.area (children: seq<'Node>) = mk "area" children

    member _.article (children: seq<'Node>) = mk "article" children

    member _.aside (children: seq<'Node>) = mk "aside" children

    member _.audio (children: seq<'Node>) = mk "audio" children

    member _.b (value: float) = mk "b" [Util.asString value |> ofStr]
    member _.b (value: int) = mk "b" [Util.asString value |> ofStr]
    member _.b (value: 'Node) = mk "b" [value]
    member _.b (value: string) = mk "b" [ofStr value]
    member _.b (children: seq<'Node>) = mk "b" children

    member _.base' (children: seq<'Node>) = mk "base" children

    member _.bdi (value: float) = mk "bdi" [Util.asString value |> ofStr]
    member _.bdi (value: int) = mk "bdi" [Util.asString value |> ofStr]
    member _.bdi (value: 'Node) = mk "bdi" [value]
    member _.bdi (value: string) = mk "bdi" [ofStr value]
    member _.bdi (children: seq<'Node>) = mk "bdi" children

    member _.bdo (value: float) = mk "bdo" [Util.asString value |> ofStr]
    member _.bdo (value: int) = mk "bdo" [Util.asString value |> ofStr]
    member _.bdo (value: 'Node) = mk "bdo" [value]
    member _.bdo (value: string) = mk "bdo" [ofStr value]
    member _.bdo (children: seq<'Node>) = mk "bdo" children

    member _.blockquote (value: float) = mk "blockquote" [Util.asString value |> ofStr]
    member _.blockquote (value: int) = mk "blockquote" [Util.asString value |> ofStr]
    member _.blockquote (value: 'Node) = mk "blockquote" [value]
    member _.blockquote (value: string) = mk "blockquote" [ofStr value]
    member _.blockquote (children: seq<'Node>) = mk "blockquote" children

    member _.body (value: float) = mk "body" [Util.asString value |> ofStr]
    member _.body (value: int) = mk "body" [Util.asString value |> ofStr]
    member _.body (value: 'Node) = mk "body" [value]
    member _.body (value: string) = mk "body" [ofStr value]
    member _.body (children: seq<'Node>) = mk "body" children

    member _.br (children: seq<'Node>) = mk "br" children

    member _.button (children: seq<'Node>) = mk "button" children

    member _.canvas (children: seq<'Node>) = mk "canvas" children

    member _.caption (value: float) = mk "caption" [Util.asString value |> ofStr]
    member _.caption (value: int) = mk "caption" [Util.asString value |> ofStr]
    member _.caption (value: 'Node) = mk "caption" [value]
    member _.caption (value: string) = mk "caption" [ofStr value]
    member _.caption (children: seq<'Node>) = mk "caption" children

    member _.cite (value: float) = mk "cite" [Util.asString value |> ofStr]
    member _.cite (value: int) = mk "cite" [Util.asString value |> ofStr]
    member _.cite (value: 'Node) = mk "cite" [value]
    member _.cite (value: string) = mk "cite" [ofStr value]
    member _.cite (children: seq<'Node>) = mk "cite" children

    // member _.code (value: bool) = mk "code" value
    member _.code (value: float) = mk "code" [Util.asString value |> ofStr]
    member _.code (value: int) = mk "code" [Util.asString value |> ofStr]
    member _.code (value: 'Node) = mk "code" [value]
    member _.code (value: string) = mk "code" [ofStr value]
    member _.code (children: seq<'Node>) = mk "code" children

    member _.col (children: seq<'Node>) = mk "col" children

    member _.colgroup (children: seq<'Node>) = mk "colgroup" children

    member _.data (value: float) = mk "data" [Util.asString value |> ofStr]
    member _.data (value: int) = mk "data" [Util.asString value |> ofStr]
    member _.data (value: 'Node) = mk "data" [value]
    member _.data (value: string) = mk "data" [ofStr value]
    member _.data (children: seq<'Node>) = mk "data" children

    member _.datalist (value: float) = mk "datalist" [Util.asString value |> ofStr]
    member _.datalist (value: int) = mk "datalist" [Util.asString value |> ofStr]
    member _.datalist (value: 'Node) = mk "datalist" [value]
    member _.datalist (value: string) = mk "datalist" [ofStr value]
    member _.datalist (children: seq<'Node>) = mk "datalist" children

    member _.dd (value: float) = mk "dd" [Util.asString value |> ofStr]
    member _.dd (value: int) = mk "dd" [Util.asString value |> ofStr]
    member _.dd (value: 'Node) = mk "dd" [value]
    member _.dd (value: string) = mk "dd" [ofStr value]
    member _.dd (children: seq<'Node>) = mk "dd" children

    member _.del (value: float) = mk "del" [Util.asString value |> ofStr]
    member _.del (value: int) = mk "del" [Util.asString value |> ofStr]
    member _.del (value: 'Node) = mk "del" [value]
    member _.del (value: string) = mk "del" [ofStr value]
    member _.del (children: seq<'Node>) = mk "del" children

    member _.details (children: seq<'Node>) = mk "details" children

    member _.dfn (value: float) = mk "dfn" [Util.asString value |> ofStr]
    member _.dfn (value: int) = mk "dfn" [Util.asString value |> ofStr]
    member _.dfn (value: 'Node) = mk "dfn" [value]
    member _.dfn (value: string) = mk "dfn" [ofStr value]
    member _.dfn (children: seq<'Node>) = mk "dfn" children

    member _.dialog (value: float) = mk "dialog" [Util.asString value |> ofStr]
    member _.dialog (value: int) = mk "dialog" [Util.asString value |> ofStr]
    member _.dialog (value: 'Node) = mk "dialog" [value]
    member _.dialog (value: string) = mk "dialog" [ofStr value]
    member _.dialog (children: seq<'Node>) = mk "dialog" children

    member _.div (value: float) = mk "div" [Util.asString value |> ofStr]
    member _.div (value: int) = mk "div" [Util.asString value |> ofStr]
    member _.div (value: 'Node) = mk "div" [value]
    member _.div (value: string) = mk "div" [ofStr value]
    /// The `<div>` tag defines a division or a section in an HTML document
    member _.div (children: seq<'Node>) = mk "div" children

    member _.dl (children: seq<'Node>) = mk "dl" children

    member _.dt (value: float) = mk "dt" [Util.asString value |> ofStr]
    member _.dt (value: int) = mk "dt" [Util.asString value |> ofStr]
    member _.dt (value: 'Node) = mk "dt" [value]
    member _.dt (value: string) = mk "dt" [ofStr value]
    member _.dt (children: seq<'Node>) = mk "dt" children

    member _.em (value: float) = mk "em" [Util.asString value |> ofStr]
    member _.em (value: int) = mk "em" [Util.asString value |> ofStr]
    member _.em (value: 'Node) = mk "em" [value]
    member _.em (value: string) = mk "em" [ofStr value]
    member _.em (children: seq<'Node>) = mk "em" children

    member _.fieldSet (children: seq<'Node>) = mk "fieldset" children

    member _.figcaption (children: seq<'Node>) = mk "figcaption" children

    member _.figure (children: seq<'Node>) = mk "figure" children

    member _.footer (children: seq<'Node>) = mk "footer" children

    member _.form (children: seq<'Node>) = mk "form" children

    member _.h1 (value: float) = mk "h1" [Util.asString value |> ofStr]
    member _.h1 (value: int) = mk "h1" [Util.asString value |> ofStr]
    member _.h1 (value: 'Node) = mk "h1" [value]
    member _.h1 (value: string) = mk "h1" [ofStr value]
    member _.h1 (children: seq<'Node>) = mk "h1" children
    member _.h2 (value: float) = mk "h2" [Util.asString value |> ofStr]
    member _.h2 (value: int) = mk "h2" [Util.asString value |> ofStr]
    member _.h2 (value: 'Node) = mk "h2" [value]
    member _.h2 (value: string) = mk "h2" [ofStr value]
    member _.h2 (children: seq<'Node>) = mk "h2" children

    member _.h3 (value: float) = mk "h3" [Util.asString value |> ofStr]
    member _.h3 (value: int) = mk "h3" [Util.asString value |> ofStr]
    member _.h3 (value: 'Node) = mk "h3" [value]
    member _.h3 (value: string) = mk "h3" [ofStr value]
    member _.h3 (children: seq<'Node>) = mk "h3" children

    member _.h4 (value: float) = mk "h4" [Util.asString value |> ofStr]
    member _.h4 (value: int) = mk "h4" [Util.asString value |> ofStr]
    member _.h4 (value: 'Node) = mk "h4" [value]
    member _.h4 (value: string) = mk "h4" [ofStr value]
    member _.h4 (children: seq<'Node>) = mk "h4" children

    member _.h5 (value: float) = mk "h5" [Util.asString value |> ofStr]
    member _.h5 (value: int) = mk "h5" [Util.asString value |> ofStr]
    member _.h5 (value: 'Node) = mk "h5" [value]
    member _.h5 (value: string) = mk "h5" [ofStr value]
    member _.h5 (children: seq<'Node>) = mk "h5" children

    member _.h6 (value: float) = mk "h6" [Util.asString value |> ofStr]
    member _.h6 (value: int) = mk "h6" [Util.asString value |> ofStr]
    member _.h6 (value: 'Node) = mk "h6" [value]
    member _.h6 (value: string) = mk "h6" [ofStr value]
    member _.h6 (children: seq<'Node>) = mk "h6" children

    member _.head (children: seq<'Node>) = mk "head" children

    member _.header (children: seq<'Node>) = mk "header" children

    member _.hr (children: seq<'Node>) = mk "hr" children

    member _.html (children: seq<'Node>) = mk "html" children

    member _.i (value: float) = mk "i" [Util.asString value |> ofStr]
    member _.i (value: int) = mk "i" [Util.asString value |> ofStr]
    member _.i (value: 'Node) = mk "i" [value]
    member _.i (value: string) = mk "i" [ofStr value]
    member _.i (children: seq<'Node>) = mk "i" children

    member _.iframe (children: seq<'Node>) = mk "iframe" children

    member _.img (children: seq<'Node>) = mk "img" children

    member _.input (children: seq<'Node>) = mk "input" children

    member _.ins (value: float) = mk "ins" [Util.asString value |> ofStr]
    member _.ins (value: int) = mk "ins" [Util.asString value |> ofStr]
    member _.ins (value: 'Node) = mk "ins" [value]
    member _.ins (value: string) = mk "ins" [ofStr value]
    member _.ins (children: seq<'Node>) = mk "ins" children

    member _.kbd (value: float) = mk "kbd" [Util.asString value |> ofStr]
    member _.kbd (value: int) = mk "kbd" [Util.asString value |> ofStr]
    member _.kbd (value: 'Node) = mk "kbd" [value]
    member _.kbd (value: string) = mk "kbd" [ofStr value]
    member _.kbd (children: seq<'Node>) = mk "kbd" children

    member _.label (children: seq<'Node>) = mk "label" children

    member _.legend (value: float) = mk "legend" [Util.asString value |> ofStr]
    member _.legend (value: int) = mk "legend" [Util.asString value |> ofStr]
    member _.legend (value: 'Node) = mk "legend" [value]
    member _.legend (value: string) = mk "legend" [ofStr value]
    member _.legend (children: seq<'Node>) = mk "legend" children

    member _.li (value: float) = mk "li" [Util.asString value |> ofStr]
    member _.li (value: int) = mk "li" [Util.asString value |> ofStr]
    member _.li (value: 'Node) = mk "li" [value]
    member _.li (value: string) = mk "li" [ofStr value]
    member _.li (children: seq<'Node>) = mk "li" children

    member _.listItem (value: float) = mk "li" [Util.asString value |> ofStr]
    member _.listItem (value: int) = mk "li" [Util.asString value |> ofStr]
    member _.listItem (value: 'Node) = mk "li" [value]
    member _.listItem (value: string) = mk "li" [ofStr value]
    member _.listItem (children: seq<'Node>) = mk "li" children

    member _.main (children: seq<'Node>) = mk "main" children

    member _.map (children: seq<'Node>) = mk "map" children

    member _.mark (value: float) = mk "mark" [Util.asString value |> ofStr]
    member _.mark (value: int) = mk "mark" [Util.asString value |> ofStr]
    member _.mark (value: 'Node) = mk "mark" [value]
    member _.mark (value: string) = mk "mark" [ofStr value]
    member _.mark (children: seq<'Node>) = mk "mark" children

    member _.metadata (children: seq<'Node>) = mk "metadata" children

    member _.meter (value: float) = mk "meter" [Util.asString value |> ofStr]
    member _.meter (value: int) = mk "meter" [Util.asString value |> ofStr]
    member _.meter (value: 'Node) = mk "meter" [value]
    member _.meter (value: string) = mk "meter" [ofStr value]
    member _.meter (children: seq<'Node>) = mk "meter" children

    member _.nav (children: seq<'Node>) = mk "nav" children

    member _.noscript (children: seq<'Node>) = mk "noscript" children

    member _.object (children: seq<'Node>) = mk "object" children

    member _.ol (children: seq<'Node>) = mk "ol" children

    member _.option (value: float) = mk "option" [Util.asString value |> ofStr]
    member _.option (value: int) = mk "option" [Util.asString value |> ofStr]
    member _.option (value: 'Node) = mk "option" [value]
    member _.option (value: string) = mk "option" [ofStr value]
    member _.option (children: seq<'Node>) = mk "option" children

    member _.optgroup (children: seq<'Node>) = mk "optgroup" children

    member _.orderedList (children: seq<'Node>) = mk "ol" children

    member _.output (value: float) = mk "output" [Util.asString value |> ofStr]
    member _.output (value: int) = mk "output" [Util.asString value |> ofStr]
    member _.output (value: 'Node) = mk "output" [value]
    member _.output (value: string) = mk "output" [ofStr value]
    member _.output (children: seq<'Node>) = mk "output" children

    member _.p (value: float) = mk "p" [Util.asString value |> ofStr]
    member _.p (value: int) = mk "p" [Util.asString value |> ofStr]
    member _.p (value: 'Node) = mk "p" [value]
    member _.p (value: string) = mk "p" [ofStr value]
    member _.p (children: seq<'Node>) = mk "p" children

    member _.paragraph (value: float) = mk "p" [Util.asString value |> ofStr]
    member _.paragraph (value: int) = mk "p" [Util.asString value |> ofStr]
    member _.paragraph (value: 'Node) = mk "p" [value]
    member _.paragraph (value: string) = mk "p" [ofStr value]
    member _.paragraph (children: seq<'Node>) = mk "p" children

    member _.picture (children: seq<'Node>) = mk "picture" children

    // member _.pre (value: bool) = mk "pre" value
    member _.pre (value: float) = mk "pre" [Util.asString value |> ofStr]
    member _.pre (value: int) = mk "pre" [Util.asString value |> ofStr]
    member _.pre (value: 'Node) = mk "pre" [value]
    member _.pre (value: string) = mk "pre" [ofStr value]
    member _.pre (children: seq<'Node>) = mk "pre" children

    member _.progress (children: seq<'Node>) = mk "progress" children

    member _.q (children: seq<'Node>) = mk "q" children

    member _.rb (value: float) = mk "rb" [Util.asString value |> ofStr]
    member _.rb (value: int) = mk "rb" [Util.asString value |> ofStr]
    member _.rb (value: 'Node) = mk "rb" [value]
    member _.rb (value: string) = mk "rb" [ofStr value]
    member _.rb (children: seq<'Node>) = mk "rb" children

    member _.rp (value: float) = mk "rp" [Util.asString value |> ofStr]
    member _.rp (value: int) = mk "rp" [Util.asString value |> ofStr]
    member _.rp (value: 'Node) = mk "rp" [value]
    member _.rp (value: string) = mk "rp" [ofStr value]
    member _.rp (children: seq<'Node>) = mk "rp" children

    member _.rt (value: float) = mk "rt" [Util.asString value |> ofStr]
    member _.rt (value: int) = mk "rt" [Util.asString value |> ofStr]
    member _.rt (value: 'Node) = mk "rt" [value]
    member _.rt (value: string) = mk "rt" [ofStr value]
    member _.rt (children: seq<'Node>) = mk "rt" children

    member _.rtc (value: float) = mk "rtc" [Util.asString value |> ofStr]
    member _.rtc (value: int) = mk "rtc" [Util.asString value |> ofStr]
    member _.rtc (value: 'Node) = mk "rtc" [value]
    member _.rtc (value: string) = mk "rtc" [ofStr value]
    member _.rtc (children: seq<'Node>) = mk "rtc" children

    member _.ruby (value: float) = mk "ruby" [Util.asString value |> ofStr]
    member _.ruby (value: int) = mk "ruby" [Util.asString value |> ofStr]
    member _.ruby (value: 'Node) = mk "ruby" [value]
    member _.ruby (value: string) = mk "ruby" [ofStr value]
    member _.ruby (children: seq<'Node>) = mk "ruby" children

    member _.s (value: float) = mk "s" [Util.asString value |> ofStr]
    member _.s (value: int) = mk "s" [Util.asString value |> ofStr]
    member _.s (value: 'Node) = mk "s" [value]
    member _.s (value: string) = mk "s" [ofStr value]
    member _.s (children: seq<'Node>) = mk "s" children

    member _.samp (value: float) = mk "samp" [Util.asString value |> ofStr]
    member _.samp (value: int) = mk "samp" [Util.asString value |> ofStr]
    member _.samp (value: 'Node) = mk "samp" [value]
    member _.samp (value: string) = mk "samp" [ofStr value]
    member _.samp (children: seq<'Node>) = mk "samp" children

    member _.script (children: seq<'Node>) = mk "script" children

    member _.section (children: seq<'Node>) = mk "section" children

    member _.select (children: seq<'Node>) = mk "select" children
    member _.small (value: float) = mk "small" [Util.asString value |> ofStr]
    member _.small (value: int) = mk "small" [Util.asString value |> ofStr]
    member _.small (value: 'Node) = mk "small" [value]
    member _.small (value: string) = mk "small" [ofStr value]
    member _.small (children: seq<'Node>) = mk "small" children

    member _.source (children: seq<'Node>) = mk "source" children

    member _.span (value: float) = mk "span" [Util.asString value |> ofStr]
    member _.span (value: int) = mk "span" [Util.asString value |> ofStr]
    member _.span (value: 'Node) = mk "span" [value]
    member _.span (value: string) = mk "span" [ofStr value]
    member _.span (children: seq<'Node>) = mk "span" children

    member _.strong (value: float) = mk "strong" [Util.asString value |> ofStr]
    member _.strong (value: int) = mk "strong" [Util.asString value |> ofStr]
    member _.strong (value: 'Node) = mk "strong" [value]
    member _.strong (value: string) = mk "strong" [ofStr value]
    member _.strong (children: seq<'Node>) = mk "strong" children

    member _.style (value: string) = mk "style" [ofStr value]

    member _.sub (value: float) = mk "sub" [Util.asString value |> ofStr]
    member _.sub (value: int) = mk "sub" [Util.asString value |> ofStr]
    member _.sub (value: 'Node) = mk "sub" [value]
    member _.sub (value: string) = mk "sub" [ofStr value]
    member _.sub (children: seq<'Node>) = mk "sub" children

    member _.summary (value: float) = mk "summary" [Util.asString value |> ofStr]
    member _.summary (value: int) = mk "summary" [Util.asString value |> ofStr]
    member _.summary (value: 'Node) = mk "summary" [value]
    member _.summary (value: string) = mk "summary" [ofStr value]
    member _.summary (children: seq<'Node>) = mk "summary" children

    member _.sup (value: float) = mk "sup" [Util.asString value |> ofStr]
    member _.sup (value: int) = mk "sup" [Util.asString value |> ofStr]
    member _.sup (value: 'Node) = mk "sup" [value]
    member _.sup (value: string) = mk "sup" [ofStr value]
    member _.sup (children: seq<'Node>) = mk "sup" children

    member _.table (children: seq<'Node>) = mk "table" children

    member _.tableBody (children: seq<'Node>) = mk "tbody" children

    member _.tableCell (children: seq<'Node>) = mk "td" children

    member _.tableHeader (children: seq<'Node>) = mk "th" children

    member _.tableRow (children: seq<'Node>) = mk "tr" children

    member _.tbody (children: seq<'Node>) = mk "tbody" children

    member _.td (value: float) = mk "td" [Util.asString value |> ofStr]
    member _.td (value: int) = mk "td" [Util.asString value |> ofStr]
    member _.td (value: 'Node) = mk "td" [value]
    member _.td (value: string) = mk "td" [ofStr value]
    member _.td (children: seq<'Node>) = mk "td" children

    member _.template (children: seq<'Node>) = mk "template" children

    member _.text (value: float) : 'Node = Util.asString value |> ofStr
    member _.text (value: int) : 'Node = Util.asString value |> ofStr
    member _.text (value: string) : 'Node = ofStr value
    member _.text (value: System.Guid) : 'Node = Util.asString value |> ofStr

    member this.textf fmt = Printf.kprintf this.text fmt

    member _.textarea (children: seq<'Node>) = mk "textarea" children

    member _.tfoot (children: seq<'Node>) = mk "tfoot" children

    member _.th (value: float) = mk "th" [Util.asString value |> ofStr]
    member _.th (value: int) = mk "th" [Util.asString value |> ofStr]
    member _.th (value: 'Node) = mk "th" [value]
    member _.th (value: string) = mk "th" [ofStr value]
    member _.th (children: seq<'Node>) = mk "th" children

    member _.thead (children: seq<'Node>) = mk "thead" children

    member _.time (children: seq<'Node>) = mk "time" children

    member _.tr (children: seq<'Node>) = mk "tr" children

    member _.track (children: seq<'Node>) = mk "track" children

    member _.u (value: float) = mk "u" [Util.asString value |> ofStr]
    member _.u (value: int) = mk "u" [Util.asString value |> ofStr]
    member _.u (value: 'Node) = mk "u" [value]
    member _.u (value: string) = mk "u" [ofStr value]
    member _.u (children: seq<'Node>) = mk "u" children

    member _.ul (children: seq<'Node>) = mk "ul" children

    member _.unorderedList (children: seq<'Node>) = mk "ul" children

    member _.var (value: float) = mk "var" [Util.asString value |> ofStr]
    member _.var (value: int) = mk "var" [Util.asString value |> ofStr]
    member _.var (value: 'Node) = mk "var" [value]
    member _.var (value: string) = mk "var" [ofStr value]
    member _.var (children: seq<'Node>) = mk "var" children

    member _.video (children: seq<'Node>) = mk "video" children

    member _.wbr (children: seq<'Node>) = mk "wbr" children
