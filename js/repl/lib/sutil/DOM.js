import { Sveltish_Logging_log } from "./Logging.js";
import { Sveltish_Helpers_disposable, Sveltish_Helpers_makeIdGenerator } from "./Helpers.js";
import { Record, Union, toString } from "../../fable-library/Types.js";
import { trim, split, endsWith, substring, printf, interpolate, toText } from "../../fable-library/String.js";
import { int32_type, unit_type, lambda_type, class_type, option_type, record_type, tuple_type, obj_type, union_type, list_type, string_type } from "../../fable-library/Reflection.js";
import { cons as cons_1, ofSeq, map as map_1, filter, ofArray, empty, singleton, iterate, fold } from "../../fable-library/List.js";
import { map } from "../../fable-library/Array.js";
import { iterate as iterate_1, collect, empty as empty_1, singleton as singleton_1, append, delay, getEnumerator, rangeNumber } from "../../fable-library/Seq.js";
import { some, value as value_5 } from "../../fable-library/Option.js";
import { equals } from "../../fable-library/Util.js";
import { parse } from "../../fable-library/Int32.js";

export const Sveltish_DOM_log = (message) => {
    Sveltish_Logging_log("dom", message);
};

export const Sveltish_DOM_domId = Sveltish_Helpers_makeIdGenerator();

export function Sveltish_DOM_isTextNode(n) {
    return n.nodeType === 3;
}

export function Sveltish_DOM_isElementNode(n) {
    return n.nodeType === 1;
}

export function Sveltish_DOM_documentOf(n) {
    return n.ownerDocument;
}

export const Sveltish_DOM_SvIdKey = "_svid";

export function Sveltish_DOM_setSvId(n, id) {
    n[Sveltish_DOM_SvIdKey] = id;
    if (Sveltish_DOM_isElementNode(n)) {
        n.setAttribute(Sveltish_DOM_SvIdKey, toString(id));
    }
}

export function Sveltish_DOM_svId(n) {
    return n[Sveltish_DOM_SvIdKey];
}

export function Sveltish_DOM_hasSvId(n) {
    return n.hasOwnProperty(Sveltish_DOM_SvIdKey);
}

export function Sveltish_DOM_rectStr(r) {
    return toText(interpolate("%P(),%P() -\u003e %P(),%P()", [r.left, r.top, r.right, r.bottom]));
}

export function Sveltish_DOM_nodeStr(node) {
    if (node == null) {
        return "null";
    }
    else {
        const matchValue = node.nodeType;
        switch (matchValue) {
            case 1: {
                return toText(interpolate("\u003c%P()\u003e#%P() \"%P()\"", [node.tagName.toLocaleLowerCase(), Sveltish_DOM_svId(node), node.textContent]));
            }
            case 3: {
                return toText(interpolate("\"%P()\"#%P()", [node.textContent, Sveltish_DOM_svId(node)]));
            }
            default: {
                return toText(interpolate("?\u0027%P()\u0027#%P()", [node.textContent, Sveltish_DOM_svId(node)]));
            }
        }
    }
}

export const Sveltish_DOM_Event_ElementReady = "sveltish-element-ready";

export const Sveltish_DOM_Event_Show = "sveltish-show";

export const Sveltish_DOM_Event_Hide = "sveltish-hide";

export const Sveltish_DOM_Event_Updated = "sveltish-updated";

export function Sveltish_DOM_Event_notifyEvent(doc, name, data) {
    const value = doc.dispatchEvent(new CustomEvent(name, data));
    void value;
}

export function Sveltish_DOM_Event_notifyUpdated(doc) {
    Sveltish_DOM_log("notify document");
    Sveltish_DOM_Event_notifyEvent(doc, Sveltish_DOM_Event_Updated, {});
}

export function Sveltish_DOM_listen(event, e, fn) {
    e.addEventListener(event, fn);
    return () => {
        const value = e.removeEventListener(event, fn);
        void undefined;
    };
}

export function Sveltish_DOM_raf(f) {
    return window.requestAnimationFrame(f);
}

export function Sveltish_DOM_once(event, target, fn) {
    const inner = (e) => {
        target.removeEventListener(event, inner);
        fn(e);
    };
    return Sveltish_DOM_listen(event, target, inner);
}

export class Sveltish_DOM_CssSelector extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Tag", "Cls", "Id", "All", "Any", "Attr", "NotImplemented"];
    }
}

export function Sveltish_DOM_CssSelector$reflection() {
    return union_type("Sveltish.DOM.CssSelector", [], Sveltish_DOM_CssSelector, () => [[["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", list_type(Sveltish_DOM_CssSelector$reflection())]], [["Item", list_type(Sveltish_DOM_CssSelector$reflection())]], [["Item1", Sveltish_DOM_CssSelector$reflection()], ["Item2", string_type], ["Item3", string_type]], []]);
}

export function Sveltish_DOM_CssSelector__Match_4C3D2741(this$, el) {
    switch (this$.tag) {
        case 0: {
            return el.tagName === this$.fields[0];
        }
        case 1: {
            return el.classList.contains(this$.fields[0]);
        }
        case 2: {
            return el.id === this$.fields[0];
        }
        case 5: {
            if (Sveltish_DOM_CssSelector__Match_4C3D2741(this$.fields[0], el)) {
                return el.getAttribute(this$.fields[1]) === this$.fields[2];
            }
            else {
                return false;
            }
        }
        case 3: {
            return fold((a, r) => {
                if (a) {
                    return Sveltish_DOM_CssSelector__Match_4C3D2741(r, el);
                }
                else {
                    return false;
                }
            }, true, this$.fields[0]);
        }
        case 4: {
            return fold((a_1, r_1) => {
                if (a_1) {
                    return true;
                }
                else {
                    return Sveltish_DOM_CssSelector__Match_4C3D2741(r_1, el);
                }
            }, false, this$.fields[0]);
        }
        default: {
            return false;
        }
    }
}

export class Sveltish_DOM_StyleRule extends Record {
    constructor(SelectorSpec, Selector, Style) {
        super();
        this.SelectorSpec = SelectorSpec;
        this.Selector = Selector;
        this.Style = Style;
    }
}

export function Sveltish_DOM_StyleRule$reflection() {
    return record_type("Sveltish.DOM.StyleRule", [], Sveltish_DOM_StyleRule, () => [["SelectorSpec", string_type], ["Selector", Sveltish_DOM_CssSelector$reflection()], ["Style", list_type(tuple_type(string_type, obj_type))]]);
}

export class Sveltish_DOM_NamedStyleSheet extends Record {
    constructor(Name, StyleSheet, Parent) {
        super();
        this.Name = Name;
        this.StyleSheet = StyleSheet;
        this.Parent = Parent;
    }
}

export function Sveltish_DOM_NamedStyleSheet$reflection() {
    return record_type("Sveltish.DOM.NamedStyleSheet", [], Sveltish_DOM_NamedStyleSheet, () => [["Name", string_type], ["StyleSheet", list_type(Sveltish_DOM_StyleRule$reflection())], ["Parent", option_type(Sveltish_DOM_NamedStyleSheet$reflection())]]);
}

export class Sveltish_DOM_NodeRef extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["RealNode", "VirtualNode"];
    }
}

export function Sveltish_DOM_NodeRef$reflection() {
    return union_type("Sveltish.DOM.NodeRef", [], Sveltish_DOM_NodeRef, () => [[["Item", class_type("Browser.Types.Node")]], [["Item", class_type("Sveltish.DOM.INode")]]]);
}

export function Sveltish_DOM_NodeRef__get_Node(this$) {
    if (this$.tag === 1) {
        return this$.fields[0].Node;
    }
    else {
        return this$.fields[0];
    }
}

export function Sveltish_DOM_NodeRef__Remove(this$) {
    if (this$.tag === 1) {
        this$.fields[0].Remove();
    }
    else {
        const n = this$.fields[0];
        const value = n.parentNode.removeChild(n);
        void value;
    }
}

export function Sveltish_DOM_NodeRef__Append_171AE942(this$, parent) {
    if (this$.tag === 1) {
        this$.fields[0].Append(parent);
    }
    else {
        const value = parent.appendChild(this$.fields[0]);
        void value;
    }
}

export function Sveltish_DOM_NodeRef__Replace_Z129D0740(this$, parent, newChild) {
    if (this$.tag === 1) {
        this$.fields[0].Replace(parent, newChild);
    }
    else {
        const value = parent.replaceChild(this$.fields[0], newChild);
        void value;
    }
}

export class Sveltish_DOM_BuildResult extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Unit", "Solitary", "Fragment", "Binding"];
    }
}

export function Sveltish_DOM_BuildResult$reflection() {
    return union_type("Sveltish.DOM.BuildResult", [], Sveltish_DOM_BuildResult, () => [[], [["Item", class_type("Browser.Types.Node")]], [["Item", list_type(class_type("Browser.Types.Node"))]], [["Item", Sveltish_DOM_NodeRef$reflection()]]]);
}

export class Sveltish_DOM_DomAction extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Append", "Replace", "After", "Before"];
    }
}

export function Sveltish_DOM_DomAction$reflection() {
    return union_type("Sveltish.DOM.DomAction", [], Sveltish_DOM_DomAction, () => [[], [["Item", class_type("Browser.Types.Node")]], [["Item", class_type("Browser.Types.Node")]], [["Item", class_type("Browser.Types.Node")]]]);
}

export class Sveltish_DOM_BuildContext extends Record {
    constructor(Parent, Action, MakeName, StyleSheet, AppendChild, ReplaceChild, SetAttribute) {
        super();
        this.Parent = Parent;
        this.Action = Action;
        this.MakeName = MakeName;
        this.StyleSheet = StyleSheet;
        this.AppendChild = AppendChild;
        this.ReplaceChild = ReplaceChild;
        this.SetAttribute = SetAttribute;
    }
}

export function Sveltish_DOM_BuildContext$reflection() {
    return record_type("Sveltish.DOM.BuildContext", [], Sveltish_DOM_BuildContext, () => [["Parent", class_type("Browser.Types.Node")], ["Action", Sveltish_DOM_DomAction$reflection()], ["MakeName", lambda_type(string_type, string_type)], ["StyleSheet", option_type(Sveltish_DOM_NamedStyleSheet$reflection())], ["AppendChild", lambda_type(class_type("Browser.Types.Node"), lambda_type(class_type("Browser.Types.Node"), class_type("Browser.Types.Node")))], ["ReplaceChild", lambda_type(class_type("Browser.Types.Node"), lambda_type(class_type("Browser.Types.Node"), lambda_type(class_type("Browser.Types.Node"), class_type("Browser.Types.Node"))))], ["SetAttribute", lambda_type(class_type("Browser.Types.Element"), lambda_type(string_type, lambda_type(string_type, unit_type)))]]);
}

export function Sveltish_DOM_BuildContext__get_Document(this$) {
    return Sveltish_DOM_documentOf(this$.Parent);
}

export function Sveltish_DOM_BuildContext__get_ParentElement(this$) {
    return this$.Parent;
}

export function Sveltish_DOM_build(f, ctx) {
    return f(ctx);
}

export function Sveltish_DOM_makeContext(parent) {
    const gen = Sveltish_Helpers_makeIdGenerator();
    return new Sveltish_DOM_BuildContext(parent, new Sveltish_DOM_DomAction(0), (baseName) => {
        const arg20 = gen() | 0;
        return toText(printf("%s-%d"))(baseName)(arg20);
    }, void 0, (parent_1, child) => parent_1.appendChild(child), (parent_2, newChild, oldChild) => parent_2.replaceChild(newChild, oldChild), (parent_3, name, value) => {
        parent_3.setAttribute(name, value);
    });
}

export function Sveltish_DOM_withStyleSheet(sheet, ctx) {
    return new Sveltish_DOM_BuildContext(ctx.Parent, ctx.Action, ctx.MakeName, sheet, ctx.AppendChild, ctx.ReplaceChild, ctx.SetAttribute);
}

export function Sveltish_DOM_withParent(parent, ctx) {
    return new Sveltish_DOM_BuildContext(parent, new Sveltish_DOM_DomAction(0), ctx.MakeName, ctx.StyleSheet, ctx.AppendChild, ctx.ReplaceChild, ctx.SetAttribute);
}

export function Sveltish_DOM_withReplace(toReplace, ctx) {
    return new Sveltish_DOM_BuildContext(ctx.Parent, (toReplace == null) ? (new Sveltish_DOM_DomAction(0)) : (new Sveltish_DOM_DomAction(1, toReplace)), ctx.MakeName, ctx.StyleSheet, ctx.AppendChild, ctx.ReplaceChild, ctx.SetAttribute);
}

export function Sveltish_DOM_withAfter(after, ctx) {
    return new Sveltish_DOM_BuildContext(ctx.Parent, new Sveltish_DOM_DomAction(2, after), ctx.MakeName, ctx.StyleSheet, ctx.AppendChild, ctx.ReplaceChild, ctx.SetAttribute);
}

export function Sveltish_DOM_withBefore(before, ctx) {
    return new Sveltish_DOM_BuildContext(ctx.Parent, new Sveltish_DOM_DomAction(3, before), ctx.MakeName, ctx.StyleSheet, ctx.AppendChild, ctx.ReplaceChild, ctx.SetAttribute);
}

export function Sveltish_DOM_nodeResult(node) {
    return new Sveltish_DOM_BuildResult(1, node);
}

export function Sveltish_DOM_fragmentResult(nodes) {
    return new Sveltish_DOM_BuildResult(2, nodes);
}

export function Sveltish_DOM_unitResult() {
    return new Sveltish_DOM_BuildResult(0);
}

export function Sveltish_DOM_bindResult(r) {
    return new Sveltish_DOM_BuildResult(3, r);
}

export function Sveltish_DOM_errorNode(parent, message) {
    const doc = Sveltish_DOM_documentOf(parent);
    const d = doc.createElement("div");
    const value = d.appendChild(doc.createTextNode(toText(interpolate("sveltish-error: %P()", [message]))));
    void value;
    const value_1 = parent.appendChild(d);
    void value_1;
    d.setAttribute("style", "color: red; padding: 4px; font-size: 10px;");
    return d;
}

export function Sveltish_DOM_expectSolitary(f, ctx) {
    const matchValue = Sveltish_DOM_build(f, ctx);
    switch (matchValue.tag) {
        case 3: {
            return Sveltish_DOM_NodeRef__get_Node(matchValue.fields[0]);
        }
        case 0: {
            return Sveltish_DOM_errorNode(ctx.Parent, "Expected single node, none found");
        }
        case 2: {
            const tmpDiv = Sveltish_DOM_BuildContext__get_Document(ctx).createElement("div");
            const value = tmpDiv.appendChild(Sveltish_DOM_errorNode(tmpDiv, "\u0027fragment\u0027 not allowed as root for \u0027each\u0027 blocks"));
            void value;
            const value_1 = ctx.Parent.appendChild(tmpDiv);
            void value_1;
            iterate((arg) => {
                const value_2 = tmpDiv.appendChild(arg);
                void value_2;
            }, matchValue.fields[0]);
            return tmpDiv;
        }
        default: {
            return matchValue.fields[0];
        }
    }
}

export function Sveltish_DOM_collectFragment(result) {
    switch (result.tag) {
        case 3: {
            return singleton(Sveltish_DOM_NodeRef__get_Node(result.fields[0]));
        }
        case 0: {
            return empty();
        }
        case 2: {
            return result.fields[0];
        }
        default: {
            return singleton(result.fields[0]);
        }
    }
}

export function Sveltish_DOM_buildSolitary(f, ctx) {
    return Sveltish_DOM_expectSolitary(f, ctx);
}

export function Sveltish_DOM_appendAttribute(e, attrName, attrValue) {
    if (attrValue !== "") {
        const currentValue = e.getAttribute(attrName);
        e.setAttribute(attrName, ((currentValue == null) ? true : (currentValue === "")) ? attrValue : toText(printf("%s %s"))(currentValue)(attrValue));
    }
}

export function Sveltish_DOM_parseSelector(source) {
    const parseSingle = (token) => {
        if (token.indexOf(".") === 0) {
            return new Sveltish_DOM_CssSelector(1, substring(token, 1));
        }
        else if (token.indexOf("#") === 0) {
            return new Sveltish_DOM_CssSelector(2, substring(token, 1));
        }
        else if (((token.indexOf(":") >= 0) ? true : (token.indexOf("\u003e") >= 0)) ? true : (token.indexOf("[") >= 0)) {
            return new Sveltish_DOM_CssSelector(6);
        }
        else {
            return new Sveltish_DOM_CssSelector(0, token.toLocaleUpperCase());
        }
    };
    const parseAttr = (token_1) => {
        if ((token_1.indexOf("[") >= 0) ? endsWith(token_1, "]") : false) {
            const i = token_1.indexOf("[") | 0;
            const single = parseSingle(substring(token_1, 0, i).trim());
            const attrTokens = split(substring(token_1, i + 1, (token_1.length - i) - 2), ["="], 2);
            if (attrTokens.length === 2) {
                return new Sveltish_DOM_CssSelector(5, single, attrTokens[0].trim(), trim(attrTokens[1].trim(), "\u0027", "\""));
            }
            else {
                return new Sveltish_DOM_CssSelector(6);
            }
        }
        else {
            return parseSingle(token_1);
        }
    };
    const parseAll = (token_2) => {
        const spacedItems = split(token_2, [" "], null, 1);
        if (spacedItems.length === 1) {
            return parseAttr(spacedItems[0]);
        }
        else {
            return new Sveltish_DOM_CssSelector(4, ofArray(map(parseAttr, spacedItems)));
        }
    };
    const items = source.split(",");
    if (items.length === 1) {
        return parseAll(items[0]);
    }
    else {
        return new Sveltish_DOM_CssSelector(3, ofArray(map(parseAll, items)));
    }
}

export function Sveltish_DOM_ruleMatchEl(el, rule) {
    return Sveltish_DOM_CssSelector__Match_4C3D2741(rule.Selector, el);
}

export function Sveltish_DOM_rootStyle(sheet_mut) {
    Sveltish_DOM_rootStyle:
    while (true) {
        const sheet = sheet_mut;
        const matchValue = sheet.Parent;
        if (matchValue != null) {
            sheet_mut = matchValue;
            continue Sveltish_DOM_rootStyle;
        }
        else {
            return sheet;
        }
        break;
    }
}

export function Sveltish_DOM_rootStyleName(sheet) {
    return Sveltish_DOM_rootStyle(sheet).Name;
}

export function Sveltish_DOM_getSveltishClasses(e) {
    return filter((cls) => (cls.indexOf("sveltish") === 0), map_1((i) => (e.classList[i]), ofSeq(rangeNumber(0, 1, e.classList.length - 1))));
}

export function Sveltish_DOM_applyCustomRules(e, namedSheet) {
    let copyOfStruct, copyOfStruct_1;
    const enumerator = getEnumerator(filter((rule) => Sveltish_DOM_ruleMatchEl(e, rule), namedSheet.StyleSheet));
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const enumerator_1 = getEnumerator(filter((tupledArg) => (tupledArg[0].indexOf("sveltish") === 0), enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]().Style));
            try {
                while (enumerator_1["System.Collections.IEnumerator.MoveNext"]()) {
                    const custom = enumerator_1["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    if (custom[0] === "sveltish-use-global") {
                        const root = Sveltish_DOM_rootStyle(namedSheet);
                        if (root.Name !== namedSheet.Name) {
                            (copyOfStruct = e, copyOfStruct.classList).add(root.Name);
                            Sveltish_DOM_applyCustomRules(e, root);
                        }
                    }
                    else if (custom[0] === "sveltish-use-parent") {
                    }
                    else if (custom[0] === "sveltish-add-class") {
                        (copyOfStruct_1 = e, copyOfStruct_1.classList).add(toString(custom[1]));
                    }
                    else {
                        Sveltish_DOM_log(toText(interpolate("Unimplemented: %P()", [custom[0]])));
                    }
                }
            }
            finally {
                enumerator_1.Dispose();
            }
        }
    }
    finally {
        enumerator.Dispose();
    }
}

export function Sveltish_DOM_appendReplaceChild(node, ctx) {
    Sveltish_DOM_log(toText(interpolate("appendReplaceChild %P()", [ctx.Action])));
    const matchValue = ctx.Action;
    switch (matchValue.tag) {
        case 3: {
            const next = matchValue.fields[0];
            Sveltish_DOM_log(toText(interpolate("insert %P() before %P() on %P()", [Sveltish_DOM_nodeStr(node), Sveltish_DOM_nodeStr(next), Sveltish_DOM_nodeStr(ctx.Parent)])));
            const value_1 = ctx.Parent.insertBefore(node, next);
            void value_1;
            break;
        }
        case 2: {
            const prev = matchValue.fields[0];
            Sveltish_DOM_log(toText(interpolate("insert %P() after %P() on %P()", [Sveltish_DOM_nodeStr(node), Sveltish_DOM_nodeStr(prev), Sveltish_DOM_nodeStr(ctx.Parent)])));
            const value_2 = ctx.Parent.insertBefore(node, (prev == null) ? ctx.Parent.firstChild : prev.nextSibling);
            void value_2;
            break;
        }
        case 1: {
            const existing = matchValue.fields[0];
            if (!ctx.Parent.isSameNode(existing.parentNode)) {
                Sveltish_DOM_log(toText(interpolate("reinstate %P() to %P() - existing %P() has different parent", [Sveltish_DOM_nodeStr(node), Sveltish_DOM_nodeStr(ctx.Parent), Sveltish_DOM_nodeStr(existing)])));
                const value_3 = ctx.AppendChild(ctx.Parent, node);
                void value_3;
            }
            else {
                Sveltish_DOM_log(toText(interpolate("replace %P() with %P() on %P()", [Sveltish_DOM_nodeStr(existing), Sveltish_DOM_nodeStr(node), Sveltish_DOM_nodeStr(ctx.Parent)])));
                const value_4 = ctx.ReplaceChild(ctx.Parent, node, existing);
                void value_4;
            }
            Sveltish_DOM_setSvId(node, Sveltish_DOM_svId(existing));
            break;
        }
        default: {
            Sveltish_DOM_log(toText(interpolate("append %P() to %P()", [Sveltish_DOM_nodeStr(node), Sveltish_DOM_nodeStr(ctx.Parent)])));
            const value = ctx.AppendChild(ctx.Parent, node);
            void value;
        }
    }
    return node;
}

export function Sveltish_DOM_el(tag, xs, ctx) {
    const e = Sveltish_DOM_BuildContext__get_Document(ctx).createElement(tag);
    const id = Sveltish_DOM_domId() | 0;
    Sveltish_DOM_log(toText(interpolate("create \u003c%P()\u003e #%P()", [tag, id])));
    Sveltish_DOM_setSvId(e, id);
    Sveltish_DOM_log(toText(interpolate("1. el ctx %P()", [ctx.Action])));
    const enumerator = getEnumerator(xs);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const value = Sveltish_DOM_build(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"](), Sveltish_DOM_withParent(e, ctx));
            void value;
        }
    }
    finally {
        enumerator.Dispose();
    }
    const matchValue = ctx.StyleSheet;
    if (matchValue == null) {
    }
    else {
        const namedSheet = matchValue;
        e.classList.add(namedSheet.Name);
        Sveltish_DOM_applyCustomRules(e, namedSheet);
    }
    const value_1 = Sveltish_DOM_appendReplaceChild(e, ctx);
    void value_1;
    const value_2 = e.dispatchEvent(new CustomEvent(Sveltish_DOM_Event_ElementReady, {}));
    void value_2;
    return Sveltish_DOM_nodeResult(e);
}

export function Sveltish_DOM_buildSolitaryElement(f, ctx) {
    Sveltish_DOM_log(toText(interpolate("buildSolitaryElement: %P()", [ctx.Action])));
    const node = Sveltish_DOM_expectSolitary(f, ctx);
    if (Sveltish_DOM_isElementNode(node)) {
        return node;
    }
    else {
        return Sveltish_DOM_expectSolitary((ctx_1) => Sveltish_DOM_el("span", [(_arg1) => Sveltish_DOM_nodeResult(node)], ctx_1), ctx);
    }
}

export function Sveltish_DOM_findSvIdElement(doc, id) {
    return doc.querySelector(toText(interpolate("[_svid=\u0027%P()\u0027]", [id])));
}

export function Sveltish_DOM_splitBySpace(s) {
    return split(s, [" "], null, 1);
}

export function Sveltish_DOM_addToClasslist(e, classes) {
    e.classList.add(...Sveltish_DOM_splitBySpace(classes));
}

export function Sveltish_DOM_removeFromClasslist(e, classes) {
    e.classList.remove(...Sveltish_DOM_splitBySpace(classes));
}

export function Sveltish_DOM_attr(name, value, ctx) {
    let arg40, arg30;
    const parent = ctx.Parent;
    try {
        const e = ctx.Parent;
        if (name === "class") {
            Sveltish_DOM_addToClasslist(e, toString(value));
        }
        else if (name === "class-") {
            Sveltish_DOM_removeFromClasslist(e, toString(value));
        }
        else {
            ctx.SetAttribute(e, name, toString(value));
        }
        if (name === "value") {
            e["__value"] = value;
        }
        const matchValue = ctx.StyleSheet;
        if (matchValue == null) {
        }
        else {
            Sveltish_DOM_applyCustomRules(e, matchValue);
        }
    }
    catch (matchValue_1) {
        throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, toText(printf("Cannot set attribute %s on a %A %f %s"))(name)(parent)(arg30)(arg40)))));
    }
    return Sveltish_DOM_unitResult();
}

export function Sveltish_DOM_textNode(doc, value) {
    const id = Sveltish_DOM_domId() | 0;
    Sveltish_DOM_log(toText(interpolate("create \"%P()\" #%P()", [value, id])));
    const n = doc.createTextNode(value);
    Sveltish_DOM_setSvId(n, id);
    return n;
}

export function Sveltish_DOM_text(value, ctx) {
    return Sveltish_DOM_nodeResult(Sveltish_DOM_appendReplaceChild(Sveltish_DOM_textNode(Sveltish_DOM_BuildContext__get_Document(ctx), value), ctx));
}

export const Sveltish_DOM_idSelector = (() => {
    const clo1 = toText(printf("#%s"));
    return clo1;
})();

export const Sveltish_DOM_classSelector = (() => {
    const clo1 = toText(printf(".%s"));
    return clo1;
})();

export function Sveltish_DOM_findElement(doc, selector) {
    return doc.querySelector(selector);
}

export function Sveltish_DOM_visitChildren(parent, f) {
    let child = parent.firstChild;
    while (!(child == null)) {
        if (f(child)) {
            Sveltish_DOM_visitChildren(child, f);
            child = child.nextSibling;
        }
        else {
            child = null;
        }
    }
}

export function Sveltish_DOM_findNode(parent, f) {
    let child = parent.firstChild;
    let result = void 0;
    while (!(child == null)) {
        result = f(child);
        if (result == null) {
            result = Sveltish_DOM_findNode(child, f);
        }
        if (result != null) {
            const x = value_5(result);
            child = null;
        }
        else {
            child = child.nextSibling;
        }
    }
    return result;
}

export function Sveltish_DOM_prevSibling(node) {
    if (equals(node, null)) {
        return null;
    }
    else {
        return node.previousSibling;
    }
}

export function Sveltish_DOM_lastSibling(node_mut) {
    Sveltish_DOM_lastSibling:
    while (true) {
        const node = node_mut;
        if ((node == null) ? true : (node.nextSibling == null)) {
            return node;
        }
        else {
            node_mut = node.nextSibling;
            continue Sveltish_DOM_lastSibling;
        }
        break;
    }
}

export function Sveltish_DOM_lastChild(node) {
    return Sveltish_DOM_lastSibling(node.firstChild);
}

export function Sveltish_DOM_firstSiblingWhere(node_mut, condition_mut) {
    Sveltish_DOM_firstSiblingWhere:
    while (true) {
        const node = node_mut, condition = condition_mut;
        if ((node == null) ? true : condition(node)) {
            return node;
        }
        else {
            node_mut = node.nextSibling;
            condition_mut = condition;
            continue Sveltish_DOM_firstSiblingWhere;
        }
        break;
    }
}

export function Sveltish_DOM_firstChildWhere(node, condition) {
    return Sveltish_DOM_firstSiblingWhere(node.firstChild, condition);
}

export function Sveltish_DOM_lastSiblingWhere(node_mut, condition_mut) {
    Sveltish_DOM_lastSiblingWhere:
    while (true) {
        const node = node_mut, condition = condition_mut;
        if ((node == null) ? true : (condition(node) ? ((node.nextSibling == null) ? true : (!condition(node.nextSibling))) : false)) {
            return node;
        }
        else {
            node_mut = node.nextSibling;
            condition_mut = condition;
            continue Sveltish_DOM_lastSiblingWhere;
        }
        break;
    }
}

export function Sveltish_DOM_lastChildWhere(node, condition) {
    return Sveltish_DOM_lastSiblingWhere(node.firstChild, condition);
}

export function Sveltish_DOM_visitElementChildren(parent, f) {
    Sveltish_DOM_visitChildren(parent, (child) => {
        if (child.nodeType === 1) {
            f(child);
        }
        return true;
    });
}

export function Sveltish_DOM_findNodeWithSvId(doc, id) {
    return Sveltish_DOM_findNode(doc.body, (n) => {
        if (equals(Sveltish_DOM_svId(n), id)) {
            return some(n);
        }
        else {
            return void 0;
        }
    });
}

export function Sveltish_DOM_html(text, ctx) {
    const el = ctx.Parent;
    el.innerHTML = text;
    const matchValue = ctx.StyleSheet;
    if (matchValue != null) {
        const ns = matchValue;
        Sveltish_DOM_visitElementChildren(el, (ch) => {
            ch.classList.add(ns.Name);
            Sveltish_DOM_applyCustomRules(ch, ns);
        });
    }
    return Sveltish_DOM_nodeResult(el);
}

export function Sveltish_DOM_mountElementOnDocument(doc, id, app) {
    const value = app(Sveltish_DOM_makeContext(doc.querySelector(toText(interpolate("#%P()", [id])))));
    void value;
}

export function Sveltish_DOM_mountElement(id, app) {
    Sveltish_DOM_mountElementOnDocument(document, id, app);
}

export function Sveltish_DOM_children(node) {
    const visit = (child) => delay(() => ((!(child == null)) ? append(singleton_1(child), delay(() => visit(child.nextSibling))) : empty_1()));
    return visit(node.firstChild);
}

export function Sveltish_DOM_descendants(node) {
    return delay(() => collect((child) => append(singleton_1(child), delay(() => Sveltish_DOM_descendants(child))), Sveltish_DOM_children(node)));
}

export function Sveltish_DOM_clearWithDispose(node, dispose) {
    iterate_1((arg) => {
        dispose(node.removeChild(arg));
    }, Sveltish_DOM_children(node));
}

export function Sveltish_DOM_clear(node) {
    Sveltish_DOM_clearWithDispose(node, (value) => {
        void value;
    });
}

export function Sveltish_DOM_exclusive(f, ctx) {
    Sveltish_DOM_clear(ctx.Parent);
    return Sveltish_DOM_build(f, ctx);
}

export function Sveltish_DOM_hookContext(hook, ctx) {
    hook(ctx);
    return Sveltish_DOM_unitResult();
}

export function Sveltish_DOM_hookParent(hook, ctx) {
    hook(ctx.Parent);
    return Sveltish_DOM_unitResult();
}

export function Sveltish_DOM_addTransform(node, a) {
    const b = node.getBoundingClientRect();
    if ((a.left !== b.left) ? true : (a.top !== b.top)) {
        const s = window.getComputedStyle(node);
        const transform = (s.transform === "none") ? "" : s.transform;
        const arg30 = a.top - b.top;
        const arg20 = a.left - b.left;
        (node.style).transform = toText(printf("%s translate(%fpx, %fpx)"))(transform)(arg20)(arg30);
        Sveltish_DOM_log((node.style).transform);
    }
}

export function Sveltish_DOM_fixPosition(node) {
    const s = window.getComputedStyle(node);
    if ((s.position !== "absolute") ? (s.position !== "fixed") : false) {
        Sveltish_DOM_log(toText(interpolate("fixPosition %P()", [Sveltish_DOM_nodeStr(node)])));
        const width = s.width;
        const height = s.height;
        const a = node.getBoundingClientRect();
        (node.style).position = "absolute";
        (node.style).width = width;
        (node.style).height = height;
        Sveltish_DOM_addTransform(node, a);
    }
}

export function Sveltish_DOM_asEl(node) {
    return node;
}

export function Sveltish_DOM_clientRect(el) {
    return Sveltish_DOM_asEl(el).getBoundingClientRect();
}

export function Sveltish_DOM_removeNode(node) {
    let arg10, copyOfStruct, copyOfStruct_1;
    Sveltish_DOM_log((arg10 = (copyOfStruct = node, copyOfStruct.textContent), toText(printf("removing node %A"))(arg10)));
    const value = (copyOfStruct_1 = node, copyOfStruct_1.parentNode).removeChild(node);
    void value;
}

export function Sveltish_DOM_fragment(elements, ctx) {
    return Sveltish_DOM_fragmentResult(ofSeq(collect((e) => Sveltish_DOM_collectFragment(e(ctx)), elements)));
}

export const Sveltish_DOM_isCrossOrigin = false;

class Sveltish_DOM_ResizeSubscriber extends Record {
    constructor(Callback, Id) {
        super();
        this.Callback = Callback;
        this.Id = (Id | 0);
    }
}

function Sveltish_DOM_ResizeSubscriber$reflection() {
    return record_type("Sveltish.DOM.ResizeSubscriber", [], Sveltish_DOM_ResizeSubscriber, () => [["Callback", lambda_type(unit_type, unit_type)], ["Id", int32_type]]);
}

export class Sveltish_DOM_ResizeObserver {
    constructor(el) {
        this.iframe = null;
        this.subId = 0;
        this.unsubscribe = null;
        this.subscribers = empty();
        const computedStyle = window.getComputedStyle(el);
        const zIndex = ((() => {
            try {
                return parse(computedStyle.zIndex, 511, false, 32) | 0;
            }
            catch (matchValue) {
                return 0;
            }
        })() - 1) | 0;
        if (computedStyle.position === "static") {
            (el.style).position = "relative";
        }
        this.iframe = Sveltish_DOM_documentOf(el).createElement("iframe");
        this.iframe.setAttribute("style", toText(printf("%sz-index: %i;"))("display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none;")(zIndex));
        this.iframe.setAttribute("aria-hidden", "true");
        this.iframe.setAttribute("tabindex", "-1");
        if (Sveltish_DOM_isCrossOrigin) {
            this.iframe.setAttribute("src", "data:text/html,\u003cscript\u003eonresize=function(){parent.postMessage(0,\u0027*\u0027)}\u003c/script\u003e");
            const clo3 = Sveltish_DOM_listen("message", window, (e) => {
                if ((e["source"]) === this.iframe.contentWindow) {
                    Sveltish_DOM_ResizeObserver__notify_1505(this, e);
                }
            });
            this.unsubscribe = (() => {
                clo3();
            });
        }
        else {
            this.iframe.setAttribute("src", "about:blank");
            this.iframe.onload = ((e_1) => {
                const clo3_1 = Sveltish_DOM_listen("resize", this.iframe.contentWindow, (_arg1) => {
                    Sveltish_DOM_ResizeObserver__notify_1505(this, _arg1);
                });
                this.unsubscribe = (() => {
                    clo3_1();
                });
            });
        }
        const value = el.appendChild(this.iframe);
        void value;
    }
    Dispose() {
        const this$ = this;
        Sveltish_DOM_ResizeObserver__Dispose(this$);
    }
}

export function Sveltish_DOM_ResizeObserver$reflection() {
    return class_type("Sveltish.DOM.ResizeObserver", void 0, Sveltish_DOM_ResizeObserver);
}

export function Sveltish_DOM_ResizeObserver_$ctor_4C3D2741(el) {
    return new Sveltish_DOM_ResizeObserver(el);
}

export function Sveltish_DOM_ResizeObserver__Subscribe_3A5B6456(_, callback) {
    const sub = new Sveltish_DOM_ResizeSubscriber(callback, _.subId);
    _.subId = (_.subId + 1);
    _.subscribers = cons_1(sub, _.subscribers);
    return Sveltish_Helpers_disposable(() => {
        _.subscribers = filter((s) => (s.Id !== sub.Id), _.subscribers);
    });
}

export function Sveltish_DOM_ResizeObserver__Dispose(_) {
    try {
        _.unsubscribe();
    }
    catch (matchValue) {
    }
    if (!(_.iframe == null)) {
        Sveltish_DOM_removeNode(_.iframe);
    }
}

function Sveltish_DOM_ResizeObserver__notify_1505(this$, _arg1) {
    iterate((sub) => {
        sub.Callback();
    }, this$.subscribers);
}

export const Sveltish_DOM_NodeKey_Disposables = "__sveltish_disposables";

export const Sveltish_DOM_NodeKey_ResizeObserver = "__sveltish_resizeObserver";

export function Sveltish_DOM_NodeKey_get(node, key) {
    const v = node[key];
    if (v == null) {
        return void 0;
    }
    else {
        return some(v);
    }
}

export function Sveltish_DOM_NodeKey_getCreate(node, key, cons) {
    const matchValue = Sveltish_DOM_NodeKey_get(node, key);
    if (matchValue == null) {
        const newVal = cons();
        node[key] = newVal;
        return newVal;
    }
    else {
        return value_5(matchValue);
    }
}

export function Sveltish_DOM_registerUnsubscribe(node, d) {
    const disposables = Sveltish_DOM_NodeKey_getCreate(node, Sveltish_DOM_NodeKey_Disposables, empty);
    node[Sveltish_DOM_NodeKey_Disposables] = cons_1(d, disposables);
}

export function Sveltish_DOM_registerDisposable(node, d) {
    Sveltish_DOM_registerUnsubscribe(node, () => {
        d.Dispose();
    });
}

export function Sveltish_DOM_hasDisposables(node) {
    return node.hasOwnProperty(Sveltish_DOM_NodeKey_Disposables);
}

export function Sveltish_DOM_getResizer(el) {
    return Sveltish_DOM_NodeKey_getCreate(el, Sveltish_DOM_NodeKey_ResizeObserver, () => Sveltish_DOM_ResizeObserver_$ctor_4C3D2741(el));
}

export function Sveltish_DOM_updateCustom(el, name, property, value) {
    const r = Sveltish_DOM_NodeKey_getCreate(el, name, () => ({}));
    r[property] = value;
    el[name] = r;
}

