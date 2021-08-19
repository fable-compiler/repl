import { class_type } from "../../fable-library/Reflection.js";
import { singleton } from "../../fable-library/List.js";

export class Feliz_SvgEngine$1 {
    constructor(mk, ofStr, empty) {
        this.mk = mk;
        this.ofStr = ofStr;
        this.empty = empty;
    }
}

export function Feliz_SvgEngine$1$reflection(gen0) {
    return class_type("Feliz.SvgEngine`1", [gen0], Feliz_SvgEngine$1);
}

export function Feliz_SvgEngine$1_$ctor_Z780DA98D(mk, ofStr, empty) {
    return new Feliz_SvgEngine$1(mk, ofStr, empty);
}

export function Feliz_SvgEngine$1__custom_4AE854A1(_, key, children) {
    return _.mk(key, children);
}

export function Feliz_SvgEngine$1__get_none(_) {
    return _.empty();
}

export function Feliz_SvgEngine$1__image_BB573A(_, children) {
    return _.mk("image", children);
}

export function Feliz_SvgEngine$1__svg_BB573A(_, children) {
    return _.mk("svg", children);
}

export function Feliz_SvgEngine$1__circle_BB573A(_, children) {
    return _.mk("circle", children);
}

export function Feliz_SvgEngine$1__clipPath_BB573A(_, children) {
    return _.mk("clipPath", children);
}

export function Feliz_SvgEngine$1__defs_BB573A(_, children) {
    return _.mk("defs", children);
}

export function Feliz_SvgEngine$1__desc_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("desc", arg10);
}

export function Feliz_SvgEngine$1__ellipse_BB573A(_, children) {
    return _.mk("ellipse", children);
}

export function Feliz_SvgEngine$1__feBlend_BB573A(_, children) {
    return _.mk("feBlend", children);
}

export function Feliz_SvgEngine$1__feColorMatrix_BB573A(_, children) {
    return _.mk("feColorMatrix", children);
}

export function Feliz_SvgEngine$1__feComponentTransfer_BB573A(_, children) {
    return _.mk("feComponentTransfer", children);
}

export function Feliz_SvgEngine$1__feComposite_BB573A(_, children) {
    return _.mk("feComposite", children);
}

export function Feliz_SvgEngine$1__feConvolveMatrix_BB573A(_, children) {
    return _.mk("feConvolveMatrix", children);
}

export function Feliz_SvgEngine$1__feDiffuseLighting_BB573A(_, children) {
    return _.mk("feDiffuseLighting", children);
}

export function Feliz_SvgEngine$1__feDisplacementMap_BB573A(_, children) {
    return _.mk("feDisplacementMap", children);
}

export function Feliz_SvgEngine$1__feDistantLight_BB573A(_, children) {
    return _.mk("feDistantLight", children);
}

export function Feliz_SvgEngine$1__feDropShadow_BB573A(_, children) {
    return _.mk("feDropShadow", children);
}

export function Feliz_SvgEngine$1__feFlood_BB573A(_, children) {
    return _.mk("feFlood", children);
}

export function Feliz_SvgEngine$1__feFuncA_BB573A(_, children) {
    return _.mk("feFuncA", children);
}

export function Feliz_SvgEngine$1__feFuncB_BB573A(_, children) {
    return _.mk("feFuncB", children);
}

export function Feliz_SvgEngine$1__feFuncG_BB573A(_, children) {
    return _.mk("feFuncG", children);
}

export function Feliz_SvgEngine$1__feFuncR_BB573A(_, children) {
    return _.mk("feFuncR", children);
}

export function Feliz_SvgEngine$1__feGaussianBlur_BB573A(_, children) {
    return _.mk("feGaussianBlur", children);
}

export function Feliz_SvgEngine$1__feImage_BB573A(_, children) {
    return _.mk("feImage", children);
}

export function Feliz_SvgEngine$1__feMerge_BB573A(_, children) {
    return _.mk("feMerge", children);
}

export function Feliz_SvgEngine$1__feMergeNode_BB573A(_, children) {
    return _.mk("feMergeNode", children);
}

export function Feliz_SvgEngine$1__feMorphology_BB573A(_, children) {
    return _.mk("feMorphology", children);
}

export function Feliz_SvgEngine$1__feOffset_BB573A(_, children) {
    return _.mk("feOffset", children);
}

export function Feliz_SvgEngine$1__fePointLight_BB573A(_, children) {
    return _.mk("fePointLight", children);
}

export function Feliz_SvgEngine$1__feSpecularLighting_BB573A(_, children) {
    return _.mk("feSpecularLighting", children);
}

export function Feliz_SvgEngine$1__feSpotLight_BB573A(_, children) {
    return _.mk("feSpotLight", children);
}

export function Feliz_SvgEngine$1__feTile_BB573A(_, children) {
    return _.mk("feTile", children);
}

export function Feliz_SvgEngine$1__feTurbulence_BB573A(_, children) {
    return _.mk("feTurbulence", children);
}

export function Feliz_SvgEngine$1__filter_BB573A(_, children) {
    return _.mk("filter", children);
}

export function Feliz_SvgEngine$1__foreignObject_BB573A(_, children) {
    return _.mk("foreignObject", children);
}

export function Feliz_SvgEngine$1__g_BB573A(_, children) {
    return _.mk("g", children);
}

export function Feliz_SvgEngine$1__line_BB573A(_, children) {
    return _.mk("line", children);
}

export function Feliz_SvgEngine$1__linearGradient_BB573A(_, children) {
    return _.mk("linearGradient", children);
}

export function Feliz_SvgEngine$1__marker_BB573A(_, children) {
    return _.mk("marker", children);
}

export function Feliz_SvgEngine$1__mask_BB573A(_, children) {
    return _.mk("marker", children);
}

export function Feliz_SvgEngine$1__mpath_BB573A(_, children) {
    return _.mk("mpath", children);
}

export function Feliz_SvgEngine$1__path_BB573A(_, children) {
    return _.mk("path", children);
}

export function Feliz_SvgEngine$1__pattern_BB573A(_, children) {
    return _.mk("pattern", children);
}

export function Feliz_SvgEngine$1__polygon_BB573A(_, children) {
    return _.mk("polygon", children);
}

export function Feliz_SvgEngine$1__polyline_BB573A(_, children) {
    return _.mk("polyline", children);
}

export function Feliz_SvgEngine$1__set_BB573A(_, children) {
    return _.mk("set", children);
}

export function Feliz_SvgEngine$1__stop_BB573A(_, children) {
    return _.mk("stop", children);
}

export function Feliz_SvgEngine$1__style_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("style", arg10);
}

export function Feliz_SvgEngine$1__switch_BB573A(_, children) {
    return _.mk("switch", children);
}

export function Feliz_SvgEngine$1__symbol_BB573A(_, children) {
    return _.mk("symbol", children);
}

export function Feliz_SvgEngine$1__text_Z721C83C5(_, content) {
    const arg10 = singleton(_.ofStr(content));
    return _.mk("text", arg10);
}

export function Feliz_SvgEngine$1__title_Z721C83C5(_, content) {
    const arg10 = singleton(_.ofStr(content));
    return _.mk("title", arg10);
}

export function Feliz_SvgEngine$1__textPath_BB573A(_, children) {
    return _.mk("textPath", children);
}

export function Feliz_SvgEngine$1__tspan_BB573A(_, children) {
    return _.mk("tspan", children);
}

export function Feliz_SvgEngine$1__use$0027_BB573A(_, children) {
    return _.mk("use", children);
}

export function Feliz_SvgEngine$1__radialGradient_BB573A(_, children) {
    return _.mk("radialGradient", children);
}

export function Feliz_SvgEngine$1__rect_BB573A(_, children) {
    return _.mk("rect", children);
}

export function Feliz_SvgEngine$1__view_BB573A(_, children) {
    return _.mk("view", children);
}

