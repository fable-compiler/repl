import { Sutil_DOM_attr, Sutil_DOM_elns } from "./DOM.js";

export function Sutil_Svg_svgel(tag, xs) {
    return Sutil_DOM_elns("http://www.w3.org/2000/svg", tag, xs);
}

export function Sutil_Svg_svg(xs) {
    return Sutil_Svg_svgel("svg", xs);
}

export function Sutil_Svg_g(xs) {
    return Sutil_Svg_svgel("g", xs);
}

export function Sutil_Svg_rect(xs) {
    return Sutil_Svg_svgel("rect", xs);
}

export function Sutil_Svg_text(xs) {
    return Sutil_Svg_svgel("text", xs);
}

export function Sutil_Svg_line(xs) {
    return Sutil_Svg_svgel("line", xs);
}

export function Sutil_Svg_x(obj) {
    return Sutil_DOM_attr("x", obj);
}

export function Sutil_Svg_y(obj) {
    return Sutil_DOM_attr("y", obj);
}

export function Sutil_Svg_x1(obj) {
    return Sutil_DOM_attr("x1", obj);
}

export function Sutil_Svg_y1(obj) {
    return Sutil_DOM_attr("y1", obj);
}

export function Sutil_Svg_x2(obj) {
    return Sutil_DOM_attr("x2", obj);
}

export function Sutil_Svg_y2(obj) {
    return Sutil_DOM_attr("y2", obj);
}

export function Sutil_Svg_width(obj) {
    return Sutil_DOM_attr("width", obj);
}

export function Sutil_Svg_height(obj) {
    return Sutil_DOM_attr("height", obj);
}

export function Sutil_Svg_transform(obj) {
    return Sutil_DOM_attr("transform", obj);
}

