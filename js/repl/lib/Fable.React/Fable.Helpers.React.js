import { L, Record, declare, Union } from "../../fable-core/Types.js";
import { createObj } from "../../fable-core/Util.js";
import { ofList as ofList$$1 } from "../../fable-core/Array.js";
import { fold } from "../../fable-core/List.js";
const Fragment = React.Fragment,
      createElement$$1 = React.createElement;
const render = ReactDOM.render;
export const Props$002EFragmentProp = declare(function Props$002EFragmentProp(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002EProp = declare(function Props$002EProp(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002EDangerousHtml = declare(function Props$002EDangerousHtml(arg1) {
  this.__html = arg1;
}, Record);
export const Props$002EDOMAttr = declare(function Props$002EDOMAttr(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002ESVGAttr = declare(function Props$002ESVGAttr(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002EHTMLAttr = declare(function Props$002EHTMLAttr(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002ECSSProp = declare(function Props$002ECSSProp(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
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
export function ofFloat(f$$4) {
  return f$$4;
}
export function ofList(els) {
  return ofList$$1(els, Array);
}
export function ofArray(els$$1) {
  return els$$1;
}
export function domEl(tag$$1, props$$6, children$$6) {
  return createElement$$1(tag$$1, createObj(props$$6, 1), ...children$$6);
}
export function voidEl(tag$$2, props$$7) {
  return createElement$$1(tag$$2, createObj(props$$7, 1), ...L());
}
export function svgEl(tag$$3, props$$8, children$$7) {
  return createElement$$1(tag$$3, createObj(props$$8, 1), ...children$$7);
}
export function fragment(props$$9, children$$8) {
  return createElement$$1(Fragment, createObj(props$$9, 1), ...children$$8);
}
export function a(b$$1, c) {
  return createElement$$1("a", createObj(b$$1, 1), ...c);
}
export function abbr(b$$2, c$$1) {
  return createElement$$1("abbr", createObj(b$$2, 1), ...c$$1);
}
export function address(b$$3, c$$2) {
  return createElement$$1("address", createObj(b$$3, 1), ...c$$2);
}
export function article(b$$4, c$$3) {
  return createElement$$1("article", createObj(b$$4, 1), ...c$$3);
}
export function aside(b$$5, c$$4) {
  return createElement$$1("aside", createObj(b$$5, 1), ...c$$4);
}
export function audio(b$$6, c$$5) {
  return createElement$$1("audio", createObj(b$$6, 1), ...c$$5);
}
export function b(b$0027, c$$6) {
  return createElement$$1("b", createObj(b$0027, 1), ...c$$6);
}
export function bdi(b$$7, c$$7) {
  return createElement$$1("bdi", createObj(b$$7, 1), ...c$$7);
}
export function bdo(b$$8, c$$8) {
  return createElement$$1("bdo", createObj(b$$8, 1), ...c$$8);
}
export function big(b$$9, c$$9) {
  return createElement$$1("big", createObj(b$$9, 1), ...c$$9);
}
export function blockquote(b$$10, c$$10) {
  return createElement$$1("blockquote", createObj(b$$10, 1), ...c$$10);
}
export function body(b$$11, c$$11) {
  return createElement$$1("body", createObj(b$$11, 1), ...c$$11);
}
export function button(b$$12, c$$12) {
  return createElement$$1("button", createObj(b$$12, 1), ...c$$12);
}
export function canvas(b$$13, c$$13) {
  return createElement$$1("canvas", createObj(b$$13, 1), ...c$$13);
}
export function caption(b$$14, c$$14) {
  return createElement$$1("caption", createObj(b$$14, 1), ...c$$14);
}
export function cite(b$$15, c$$15) {
  return createElement$$1("cite", createObj(b$$15, 1), ...c$$15);
}
export function code(b$$16, c$$16) {
  return createElement$$1("code", createObj(b$$16, 1), ...c$$16);
}
export function colgroup(b$$17, c$$17) {
  return createElement$$1("colgroup", createObj(b$$17, 1), ...c$$17);
}
export function data(b$$18, c$$18) {
  return createElement$$1("data", createObj(b$$18, 1), ...c$$18);
}
export function datalist(b$$19, c$$19) {
  return createElement$$1("datalist", createObj(b$$19, 1), ...c$$19);
}
export function dd(b$$20, c$$20) {
  return createElement$$1("dd", createObj(b$$20, 1), ...c$$20);
}
export function del(b$$21, c$$21) {
  return createElement$$1("del", createObj(b$$21, 1), ...c$$21);
}
export function details(b$$22, c$$22) {
  return createElement$$1("details", createObj(b$$22, 1), ...c$$22);
}
export function dfn(b$$23, c$$23) {
  return createElement$$1("dfn", createObj(b$$23, 1), ...c$$23);
}
export function dialog(b$$24, c$$24) {
  return createElement$$1("dialog", createObj(b$$24, 1), ...c$$24);
}
export function div(b$$25, c$$25) {
  return createElement$$1("div", createObj(b$$25, 1), ...c$$25);
}
export function dl(b$$26, c$$26) {
  return createElement$$1("dl", createObj(b$$26, 1), ...c$$26);
}
export function dt(b$$27, c$$27) {
  return createElement$$1("dt", createObj(b$$27, 1), ...c$$27);
}
export function em(b$$28, c$$28) {
  return createElement$$1("em", createObj(b$$28, 1), ...c$$28);
}
export function fieldset(b$$29, c$$29) {
  return createElement$$1("fieldset", createObj(b$$29, 1), ...c$$29);
}
export function figcaption(b$$30, c$$30) {
  return createElement$$1("figcaption", createObj(b$$30, 1), ...c$$30);
}
export function figure(b$$31, c$$31) {
  return createElement$$1("figure", createObj(b$$31, 1), ...c$$31);
}
export function footer(b$$32, c$$32) {
  return createElement$$1("footer", createObj(b$$32, 1), ...c$$32);
}
export function form(b$$33, c$$33) {
  return createElement$$1("form", createObj(b$$33, 1), ...c$$33);
}
export function h1(b$$34, c$$34) {
  return createElement$$1("h1", createObj(b$$34, 1), ...c$$34);
}
export function h2(b$$35, c$$35) {
  return createElement$$1("h2", createObj(b$$35, 1), ...c$$35);
}
export function h3(b$$36, c$$36) {
  return createElement$$1("h3", createObj(b$$36, 1), ...c$$36);
}
export function h4(b$$37, c$$37) {
  return createElement$$1("h4", createObj(b$$37, 1), ...c$$37);
}
export function h5(b$$38, c$$38) {
  return createElement$$1("h5", createObj(b$$38, 1), ...c$$38);
}
export function h6(b$$39, c$$39) {
  return createElement$$1("h6", createObj(b$$39, 1), ...c$$39);
}
export function head(b$$40, c$$40) {
  return createElement$$1("head", createObj(b$$40, 1), ...c$$40);
}
export function header(b$$41, c$$41) {
  return createElement$$1("header", createObj(b$$41, 1), ...c$$41);
}
export function hgroup(b$$42, c$$42) {
  return createElement$$1("hgroup", createObj(b$$42, 1), ...c$$42);
}
export function html(b$$43, c$$43) {
  return createElement$$1("html", createObj(b$$43, 1), ...c$$43);
}
export function i(b$$44, c$$44) {
  return createElement$$1("i", createObj(b$$44, 1), ...c$$44);
}
export function iframe(b$$45, c$$45) {
  return createElement$$1("iframe", createObj(b$$45, 1), ...c$$45);
}
export function ins(b$$46, c$$46) {
  return createElement$$1("ins", createObj(b$$46, 1), ...c$$46);
}
export function kbd(b$$47, c$$47) {
  return createElement$$1("kbd", createObj(b$$47, 1), ...c$$47);
}
export function label(b$$48, c$$48) {
  return createElement$$1("label", createObj(b$$48, 1), ...c$$48);
}
export function legend(b$$49, c$$49) {
  return createElement$$1("legend", createObj(b$$49, 1), ...c$$49);
}
export function li(b$$50, c$$50) {
  return createElement$$1("li", createObj(b$$50, 1), ...c$$50);
}
export function main(b$$51, c$$51) {
  return createElement$$1("main", createObj(b$$51, 1), ...c$$51);
}
export function map(b$$52, c$$52) {
  return createElement$$1("map", createObj(b$$52, 1), ...c$$52);
}
export function mark(b$$53, c$$53) {
  return createElement$$1("mark", createObj(b$$53, 1), ...c$$53);
}
export function menu(b$$54, c$$54) {
  return createElement$$1("menu", createObj(b$$54, 1), ...c$$54);
}
export function meter(b$$55, c$$55) {
  return createElement$$1("meter", createObj(b$$55, 1), ...c$$55);
}
export function nav(b$$56, c$$56) {
  return createElement$$1("nav", createObj(b$$56, 1), ...c$$56);
}
export function noscript(b$$57, c$$57) {
  return createElement$$1("noscript", createObj(b$$57, 1), ...c$$57);
}
export function object(b$$58, c$$58) {
  return createElement$$1("object", createObj(b$$58, 1), ...c$$58);
}
export function ol(b$$59, c$$59) {
  return createElement$$1("ol", createObj(b$$59, 1), ...c$$59);
}
export function optgroup(b$$60, c$$60) {
  return createElement$$1("optgroup", createObj(b$$60, 1), ...c$$60);
}
export function option(b$$61, c$$61) {
  return createElement$$1("option", createObj(b$$61, 1), ...c$$61);
}
export function output(b$$62, c$$62) {
  return createElement$$1("output", createObj(b$$62, 1), ...c$$62);
}
export function p(b$$63, c$$63) {
  return createElement$$1("p", createObj(b$$63, 1), ...c$$63);
}
export function picture(b$$64, c$$64) {
  return createElement$$1("picture", createObj(b$$64, 1), ...c$$64);
}
export function pre(b$$65, c$$65) {
  return createElement$$1("pre", createObj(b$$65, 1), ...c$$65);
}
export function progress(b$$66, c$$66) {
  return createElement$$1("progress", createObj(b$$66, 1), ...c$$66);
}
export function q(b$$67, c$$67) {
  return createElement$$1("q", createObj(b$$67, 1), ...c$$67);
}
export function rp(b$$68, c$$68) {
  return createElement$$1("rp", createObj(b$$68, 1), ...c$$68);
}
export function rt(b$$69, c$$69) {
  return createElement$$1("rt", createObj(b$$69, 1), ...c$$69);
}
export function ruby(b$$70, c$$70) {
  return createElement$$1("ruby", createObj(b$$70, 1), ...c$$70);
}
export function s(b$$71, c$$71) {
  return createElement$$1("s", createObj(b$$71, 1), ...c$$71);
}
export function samp(b$$72, c$$72) {
  return createElement$$1("samp", createObj(b$$72, 1), ...c$$72);
}
export function script(b$$73, c$$73) {
  return createElement$$1("script", createObj(b$$73, 1), ...c$$73);
}
export function section(b$$74, c$$74) {
  return createElement$$1("section", createObj(b$$74, 1), ...c$$74);
}
export function select(b$$75, c$$75) {
  return createElement$$1("select", createObj(b$$75, 1), ...c$$75);
}
export function small(b$$76, c$$76) {
  return createElement$$1("small", createObj(b$$76, 1), ...c$$76);
}
export function span(b$$77, c$$77) {
  return createElement$$1("span", createObj(b$$77, 1), ...c$$77);
}
export function strong(b$$78, c$$78) {
  return createElement$$1("strong", createObj(b$$78, 1), ...c$$78);
}
export function style(b$$79, c$$79) {
  return createElement$$1("style", createObj(b$$79, 1), ...c$$79);
}
export function sub(b$$80, c$$80) {
  return createElement$$1("sub", createObj(b$$80, 1), ...c$$80);
}
export function summary(b$$81, c$$81) {
  return createElement$$1("summary", createObj(b$$81, 1), ...c$$81);
}
export function sup(b$$82, c$$82) {
  return createElement$$1("sup", createObj(b$$82, 1), ...c$$82);
}
export function table(b$$83, c$$83) {
  return createElement$$1("table", createObj(b$$83, 1), ...c$$83);
}
export function tbody(b$$84, c$$84) {
  return createElement$$1("tbody", createObj(b$$84, 1), ...c$$84);
}
export function td(b$$85, c$$85) {
  return createElement$$1("td", createObj(b$$85, 1), ...c$$85);
}
export function textarea(b$$86, c$$86) {
  return createElement$$1("textarea", createObj(b$$86, 1), ...c$$86);
}
export function tfoot(b$$87, c$$87) {
  return createElement$$1("tfoot", createObj(b$$87, 1), ...c$$87);
}
export function th(b$$88, c$$88) {
  return createElement$$1("th", createObj(b$$88, 1), ...c$$88);
}
export function thead(b$$89, c$$89) {
  return createElement$$1("thead", createObj(b$$89, 1), ...c$$89);
}
export function time(b$$90, c$$90) {
  return createElement$$1("time", createObj(b$$90, 1), ...c$$90);
}
export function title(b$$91, c$$91) {
  return createElement$$1("title", createObj(b$$91, 1), ...c$$91);
}
export function tr(b$$92, c$$92) {
  return createElement$$1("tr", createObj(b$$92, 1), ...c$$92);
}
export function u(b$$93, c$$93) {
  return createElement$$1("u", createObj(b$$93, 1), ...c$$93);
}
export function ul(b$$94, c$$94) {
  return createElement$$1("ul", createObj(b$$94, 1), ...c$$94);
}
export function var$(b$$95, c$$95) {
  return createElement$$1("var", createObj(b$$95, 1), ...c$$95);
}
export function video(b$$96, c$$96) {
  return createElement$$1("video", createObj(b$$96, 1), ...c$$96);
}
export function area(b$$97) {
  return createElement$$1("area", createObj(b$$97, 1), ...L());
}
export function base(b$$98) {
  return createElement$$1("base", createObj(b$$98, 1), ...L());
}
export function br(b$$99) {
  return createElement$$1("br", createObj(b$$99, 1), ...L());
}
export function col(b$$100) {
  return createElement$$1("col", createObj(b$$100, 1), ...L());
}
export function embed(b$$101) {
  return createElement$$1("embed", createObj(b$$101, 1), ...L());
}
export function hr(b$$102) {
  return createElement$$1("hr", createObj(b$$102, 1), ...L());
}
export function img(b$$103) {
  return createElement$$1("img", createObj(b$$103, 1), ...L());
}
export function input(b$$104) {
  return createElement$$1("input", createObj(b$$104, 1), ...L());
}
export function keygen(b$$105) {
  return createElement$$1("keygen", createObj(b$$105, 1), ...L());
}
export function link(b$$106) {
  return createElement$$1("link", createObj(b$$106, 1), ...L());
}
export function menuitem(b$$107) {
  return createElement$$1("menuitem", createObj(b$$107, 1), ...L());
}
export function meta(b$$108) {
  return createElement$$1("meta", createObj(b$$108, 1), ...L());
}
export function param(b$$109) {
  return createElement$$1("param", createObj(b$$109, 1), ...L());
}
export function source(b$$110) {
  return createElement$$1("source", createObj(b$$110, 1), ...L());
}
export function track(b$$111) {
  return createElement$$1("track", createObj(b$$111, 1), ...L());
}
export function wbr(b$$112) {
  return createElement$$1("wbr", createObj(b$$112, 1), ...L());
}
export function svg(b$$113, c$$97) {
  return createElement$$1("svg", createObj(b$$113, 1), ...c$$97);
}
export function circle(b$$114, c$$98) {
  return createElement$$1("circle", createObj(b$$114, 1), ...c$$98);
}
export function clipPath(b$$115, c$$99) {
  return createElement$$1("clipPath", createObj(b$$115, 1), ...c$$99);
}
export function defs(b$$116, c$$100) {
  return createElement$$1("defs", createObj(b$$116, 1), ...c$$100);
}
export function ellipse(b$$117, c$$101) {
  return createElement$$1("ellipse", createObj(b$$117, 1), ...c$$101);
}
export function g(b$$118, c$$102) {
  return createElement$$1("g", createObj(b$$118, 1), ...c$$102);
}
export function image(b$$119, c$$103) {
  return createElement$$1("image", createObj(b$$119, 1), ...c$$103);
}
export function line(b$$120, c$$104) {
  return createElement$$1("line", createObj(b$$120, 1), ...c$$104);
}
export function linearGradient(b$$121, c$$105) {
  return createElement$$1("linearGradient", createObj(b$$121, 1), ...c$$105);
}
export function mask(b$$122, c$$106) {
  return createElement$$1("mask", createObj(b$$122, 1), ...c$$106);
}
export function path(b$$123, c$$107) {
  return createElement$$1("path", createObj(b$$123, 1), ...c$$107);
}
export function pattern(b$$124, c$$108) {
  return createElement$$1("pattern", createObj(b$$124, 1), ...c$$108);
}
export function polygon(b$$125, c$$109) {
  return createElement$$1("polygon", createObj(b$$125, 1), ...c$$109);
}
export function polyline(b$$126, c$$110) {
  return createElement$$1("polyline", createObj(b$$126, 1), ...c$$110);
}
export function radialGradient(b$$127, c$$111) {
  return createElement$$1("radialGradient", createObj(b$$127, 1), ...c$$111);
}
export function rect(b$$128, c$$112) {
  return createElement$$1("rect", createObj(b$$128, 1), ...c$$112);
}
export function stop(b$$129, c$$113) {
  return createElement$$1("stop", createObj(b$$129, 1), ...c$$113);
}
export function text(b$$130, c$$114) {
  return createElement$$1("text", createObj(b$$130, 1), ...c$$114);
}
export function tspan(b$$131, c$$115) {
  return createElement$$1("tspan", createObj(b$$131, 1), ...c$$115);
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
  render(reactEl, document.getElementById(domElId));
}
export function mountBySelector(domElSelector, reactEl$$1) {
  render(reactEl$$1, document.querySelector(domElSelector));
}
export function FormEvent$002Eget_Value(this$) {
  return this$.target.value;
}
