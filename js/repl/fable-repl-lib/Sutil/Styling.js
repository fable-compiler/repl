import { Sutil_Logging_log } from "./Logging.js";
import { chunkBySize, map, collect } from "../../fable-library/Array.js";
import { interpolate, printf, toText, join, split } from "../../fable-library/String.js";
import { getEnumerator } from "../../fable-library/Util.js";
import { filter, map as map_1 } from "../../fable-library/Seq.js";
import { Sutil_DOM_Event_Hide, Sutil_DOM_Event_Show, Sutil_DOM_StyleRule, Sutil_DOM_parseSelector, Sutil_DOM_NamedStyleSheet, Sutil_DOM_ContextHelpers_withStyleSheet, Sutil_DOM_build, Sutil_DOM_unitResult, Sutil_DOM_nodeFactory } from "./DOM.js";

function Sutil_Styling_log(s) {
    Sutil_Logging_log("style", s);
}

function Sutil_Styling_findElement(doc, selector) {
    return doc.querySelector(selector);
}

export function Sutil_Styling_parseStyleAttr(style) {
    return collect((entry) => map((pair) => [pair[0].trim(), pair[1].trim()], chunkBySize(2, split(entry, [":"], 2))), split(style, [";"], null, 1));
}

export function Sutil_Styling_emitStyleAttr(keyValues) {
    return join("", map((tupledArg) => toText(printf("%s:%s;"))(tupledArg[0])(tupledArg[1]), keyValues));
}

export function Sutil_Styling_filterStyleAttr(name, style) {
    return Sutil_Styling_emitStyleAttr(Sutil_Styling_parseStyleAttr(style).filter((tupledArg) => (tupledArg[0] !== name)));
}

export function Sutil_Styling_getStyleAttr(el) {
    const matchValue = el.getAttribute("style");
    if (matchValue === null) {
        return "";
    }
    else {
        return matchValue;
    }
}

export function Sutil_Styling_addStyleAttr(el, name, value) {
    const style_1 = Sutil_Styling_filterStyleAttr(name, Sutil_Styling_getStyleAttr(el));
    el.setAttribute("style", toText(printf("%s%s:%s;"))(style_1)(name)(value));
}

export function Sutil_Styling_removeStyleAttr(el, name) {
    let arg30, arg20;
    Sutil_Styling_log((arg30 = Sutil_Styling_filterStyleAttr(name, Sutil_Styling_getStyleAttr(el)), (arg20 = Sutil_Styling_getStyleAttr(el), toText(printf("filter by %s: %A -\u003e %A"))(name)(arg20)(arg30))));
    el.setAttribute("style", Sutil_Styling_filterStyleAttr(name, Sutil_Styling_getStyleAttr(el)));
}

export function Sutil_Styling_newStyleElement(doc) {
    const head = Sutil_Styling_findElement(doc, "head");
    const style = doc.createElement("style");
    void head.appendChild(style);
    return style;
}

export function Sutil_Styling_splitMapJoin(delim, f, s) {
    return join(delim, map(f, split(s, [delim], null, 1)));
}

export function Sutil_Styling_isPseudo(s) {
    if ((((((s === "hover") ? true : (s === "active")) ? true : (s === "visited")) ? true : (s === "link")) ? true : (s === "before")) ? true : (s === "after")) {
        return true;
    }
    else {
        return s === "checked";
    }
}

export function Sutil_Styling_isGlobal(s) {
    if (s === "body") {
        return true;
    }
    else {
        return s === "html";
    }
}

export function Sutil_Styling_specifySelector(styleName, selectors) {
    return Sutil_Styling_splitMapJoin(",", (s_2) => Sutil_Styling_splitMapJoin(" ", (s_1) => Sutil_Styling_splitMapJoin(":", (s) => {
        if (Sutil_Styling_isPseudo(s) ? true : Sutil_Styling_isGlobal(s)) {
            return s;
        }
        else {
            return toText(printf("%s.%s"))(s)(styleName);
        }
    }, s_1), s_2), selectors);
}

export function Sutil_Styling_addStyleSheet(doc, styleName, styleSheet) {
    const style = Sutil_Styling_newStyleElement(doc);
    const enumerator = getEnumerator(styleSheet);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const rule = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const styleText = join("", map_1((tupledArg_1) => toText(interpolate("%P(): %P();", [tupledArg_1[0], tupledArg_1[1]])), filter((arg) => (!(arg[0].indexOf("sutil") === 0)), rule.Style)));
            void style.appendChild(doc.createTextNode(join("", [Sutil_Styling_specifySelector(styleName, rule.SelectorSpec), " {", styleText, "}"])));
        }
    }
    finally {
        enumerator.Dispose();
    }
}

export function Sutil_Styling_headStylesheet(url) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const doc = ctx.Document;
        const head = Sutil_Styling_findElement(doc, "head");
        const styleEl = doc.createElement("link");
        void head.appendChild(styleEl);
        styleEl.setAttribute("rel", "stylesheet");
        const value_1 = styleEl.setAttribute("href", url);
        return Sutil_DOM_unitResult(ctx, "headStylesheet");
    });
}

export function Sutil_Styling_headScript(url) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const doc = ctx.Document;
        const head = Sutil_Styling_findElement(doc, "head");
        const el = doc.createElement("script");
        void head.appendChild(el);
        const value_1 = el.setAttribute("src", url);
        return Sutil_DOM_unitResult(ctx, "headScript");
    });
}

export function Sutil_Styling_headEmbedScript(source) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const doc = ctx.Document;
        const head = Sutil_Styling_findElement(doc, "head");
        const el = doc.createElement("script");
        void head.appendChild(el);
        void el.appendChild(doc.createTextNode(source));
        return Sutil_DOM_unitResult(ctx, "headEmbedScript");
    });
}

export function Sutil_Styling_headTitle(title) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const doc = ctx.Document;
        const head = Sutil_Styling_findElement(doc, "head");
        const existingTitle = Sutil_Styling_findElement(doc, "head\u003etitle");
        if (!(existingTitle == null)) {
            void head.removeChild(existingTitle);
        }
        const titleEl = doc.createElement("title");
        void titleEl.appendChild(doc.createTextNode(title));
        void head.appendChild(titleEl);
        return Sutil_DOM_unitResult(ctx, "headTitle");
    });
}

export function Sutil_Styling_withStyle(styleSheet, element) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const name = ctx.MakeName("sutil");
        Sutil_Styling_addStyleSheet(ctx.Document, name, styleSheet);
        return Sutil_DOM_build(element, Sutil_DOM_ContextHelpers_withStyleSheet(new Sutil_DOM_NamedStyleSheet(name, styleSheet, ctx.StyleSheet), ctx));
    });
}

export function Sutil_Styling_withStyleAppend(styleSheet, element) {
    return Sutil_DOM_nodeFactory((ctx) => {
        let matchValue;
        Sutil_Styling_addStyleSheet(ctx.Document, (matchValue = ctx.StyleSheet, (matchValue != null) ? matchValue.Name : ""), styleSheet);
        return Sutil_DOM_build(element, ctx);
    });
}

export function Sutil_Styling_rule(selector, style) {
    const result = new Sutil_DOM_StyleRule(selector, Sutil_DOM_parseSelector(selector), style);
    Sutil_Styling_log(toText(interpolate("%s%P() -\u003e %A%P()", [selector, result.Selector])));
    return result;
}

export function Sutil_Styling_showEl(el, isVisible) {
    if (isVisible) {
        Sutil_Styling_removeStyleAttr(el, "display");
    }
    else {
        Sutil_Styling_addStyleAttr(el, "display", "none");
    }
    void el.dispatchEvent(new CustomEvent((isVisible ? Sutil_DOM_Event_Show : Sutil_DOM_Event_Hide), {}));
}

