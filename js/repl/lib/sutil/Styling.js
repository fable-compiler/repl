import { Sveltish_Logging_log } from "./Logging.js";
import { chunkBySize, map, collect } from "../../fable-library/Array.js";
import { interpolate, printf, toText, join, split } from "../../fable-library/String.js";
import { filter, map as map_1, getEnumerator } from "../../fable-library/Seq.js";
import { Sveltish_DOM_Event_Hide, Sveltish_DOM_Event_Show, Sveltish_DOM_StyleRule, Sveltish_DOM_parseSelector, Sveltish_DOM_NamedStyleSheet, Sveltish_DOM_withStyleSheet, Sveltish_DOM_unitResult, Sveltish_DOM_BuildContext__get_Document } from "./DOM.js";

export function Sveltish_Styling_log(s) {
    Sveltish_Logging_log("style", s);
}

export function Sveltish_Styling_findElement(doc, selector) {
    return doc.querySelector(selector);
}

export function Sveltish_Styling_parseStyleAttr(style) {
    return collect((entry) => map((pair) => [pair[0].trim(), pair[1].trim()], chunkBySize(2, split(entry, [":"], 2))), split(style, [";"], null, 1));
}

export function Sveltish_Styling_emitStyleAttr(keyValues) {
    return join("", map((tupledArg) => toText(printf("%s:%s;"))(tupledArg[0])(tupledArg[1]), keyValues));
}

export function Sveltish_Styling_filterStyleAttr(name, style) {
    return Sveltish_Styling_emitStyleAttr(Sveltish_Styling_parseStyleAttr(style).filter((tupledArg) => (tupledArg[0] !== name)));
}

export function Sveltish_Styling_getStyleAttr(el) {
    const matchValue = el.getAttribute("style");
    if (matchValue === null) {
        return "";
    }
    else {
        return matchValue;
    }
}

export function Sveltish_Styling_addStyleAttr(el, name, value) {
    const style_1 = Sveltish_Styling_filterStyleAttr(name, Sveltish_Styling_getStyleAttr(el));
    el.setAttribute("style", toText(printf("%s%s:%s;"))(style_1)(name)(value));
}

export function Sveltish_Styling_removeStyleAttr(el, name) {
    let arg30, arg20;
    Sveltish_Styling_log((arg30 = Sveltish_Styling_filterStyleAttr(name, Sveltish_Styling_getStyleAttr(el)), (arg20 = Sveltish_Styling_getStyleAttr(el), toText(printf("filter by %s: %A -\u003e %A"))(name)(arg20)(arg30))));
    el.setAttribute("style", Sveltish_Styling_filterStyleAttr(name, Sveltish_Styling_getStyleAttr(el)));
}

export function Sveltish_Styling_newStyleElement(doc) {
    const head = Sveltish_Styling_findElement(doc, "head");
    const style = doc.createElement("style");
    const value = head.appendChild(style);
    void value;
    return style;
}

export function Sveltish_Styling_splitMapJoin(delim, f, s) {
    return join(delim, map(f, split(s, [delim], null, 1)));
}

export function Sveltish_Styling_isPseudo(s) {
    if ((((((s === "hover") ? true : (s === "active")) ? true : (s === "visited")) ? true : (s === "link")) ? true : (s === "before")) ? true : (s === "after")) {
        return true;
    }
    else {
        return s === "checked";
    }
}

export function Sveltish_Styling_isGlobal(s) {
    if (s === "body") {
        return true;
    }
    else {
        return s === "html";
    }
}

export function Sveltish_Styling_specifySelector(styleName, selectors) {
    return Sveltish_Styling_splitMapJoin(",", (s_2) => Sveltish_Styling_splitMapJoin(" ", (s_1) => Sveltish_Styling_splitMapJoin(":", (s) => {
        if (Sveltish_Styling_isPseudo(s) ? true : Sveltish_Styling_isGlobal(s)) {
            return s;
        }
        else {
            return toText(printf("%s.%s"))(s)(styleName);
        }
    }, s_1), s_2), selectors);
}

export function Sveltish_Styling_addStyleSheet(doc, styleName, styleSheet) {
    const style = Sveltish_Styling_newStyleElement(doc);
    const enumerator = getEnumerator(styleSheet);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const rule = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const styleText = join("", map_1((tupledArg_1) => toText(interpolate("%P(): %P();", [tupledArg_1[0], tupledArg_1[1]])), filter((arg) => (!(arg[0].indexOf("sveltish") === 0)), rule.Style)));
            const value_1 = style.appendChild(doc.createTextNode(join("", [Sveltish_Styling_specifySelector(styleName, rule.SelectorSpec), " {", styleText, "}"])));
            void value_1;
        }
    }
    finally {
        enumerator.Dispose();
    }
}

export function Sveltish_Styling_headStylesheet(url, ctx) {
    const doc = Sveltish_DOM_BuildContext__get_Document(ctx);
    const head = Sveltish_Styling_findElement(doc, "head");
    const styleEl = doc.createElement("link");
    const value = head.appendChild(styleEl);
    void value;
    styleEl.setAttribute("rel", "stylesheet");
    const value_1 = styleEl.setAttribute("href", url);
    void undefined;
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Styling_headScript(url, ctx) {
    const doc = Sveltish_DOM_BuildContext__get_Document(ctx);
    const head = Sveltish_Styling_findElement(doc, "head");
    const el = doc.createElement("script");
    const value = head.appendChild(el);
    void value;
    const value_1 = el.setAttribute("src", url);
    void undefined;
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Styling_headEmbedScript(source, ctx) {
    const doc = Sveltish_DOM_BuildContext__get_Document(ctx);
    const head = Sveltish_Styling_findElement(doc, "head");
    const el = doc.createElement("script");
    const value = head.appendChild(el);
    void value;
    const value_1 = el.appendChild(doc.createTextNode(source));
    void value_1;
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Styling_headTitle(title, ctx) {
    const doc = Sveltish_DOM_BuildContext__get_Document(ctx);
    const head = Sveltish_Styling_findElement(doc, "head");
    const existingTitle = Sveltish_Styling_findElement(doc, "head\u003etitle");
    if (!(existingTitle == null)) {
        const value = head.removeChild(existingTitle);
        void value;
    }
    const titleEl = doc.createElement("title");
    const value_1 = titleEl.appendChild(doc.createTextNode(title));
    void value_1;
    const value_2 = head.appendChild(titleEl);
    void value_2;
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Styling_withStyle(styleSheet, element, ctx) {
    const name = ctx.MakeName("sveltish");
    Sveltish_Styling_addStyleSheet(Sveltish_DOM_BuildContext__get_Document(ctx), name, styleSheet);
    return element(Sveltish_DOM_withStyleSheet(new Sveltish_DOM_NamedStyleSheet(name, styleSheet, ctx.StyleSheet), ctx));
}

export function Sveltish_Styling_rule(selector, style) {
    const result = new Sveltish_DOM_StyleRule(selector, Sveltish_DOM_parseSelector(selector), style);
    Sveltish_Styling_log(toText(interpolate("%s%P() -\u003e %A%P()", [selector, result.Selector])));
    return result;
}

export function Sveltish_Styling_showEl(el, isVisible) {
    if (isVisible) {
        Sveltish_Styling_removeStyleAttr(el, "display");
    }
    else {
        Sveltish_Styling_addStyleAttr(el, "display", "none");
    }
    const value = el.dispatchEvent(new CustomEvent((isVisible ? Sveltish_DOM_Event_Show : Sveltish_DOM_Event_Hide), {}));
    void value;
}

