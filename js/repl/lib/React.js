import { Record, declare, Union } from "../fable-core/Types.js";
import { createObj } from "../fable-core/Util.js";
import { ofList as ofList$$1 } from "../fable-core/Array.js";
import { fold } from "../fable-core/List.js";
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
export function ofFunction(f, props, children) {
  return React.createElement(f, props, ...children);
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
export function ofInt(i$$1) {
  return i$$1;
}
export function ofFloat(f$$1) {
  return f$$1;
}
export function ofList(els) {
  return ofList$$1(els, Array);
}
export function ofArray(els$$1) {
  return els$$1;
}
export function domEl(tag, props$$1, children$$1) {
  return React.createElement(tag, createObj(props$$1, 1), ...children$$1);
}
export function voidEl(tag$$1, props$$2) {
  return React.createElement(tag$$1, createObj(props$$2, 1), ...[]);
}
export function svgEl(tag$$2, props$$3, children$$2) {
  return React.createElement(tag$$2, createObj(props$$3, 1), ...children$$2);
}
export function a(b$$1, c) {
  return domEl("a", b$$1, c);
}
export function abbr(b$$2, c$$1) {
  return domEl("abbr", b$$2, c$$1);
}
export function address(b$$3, c$$2) {
  return domEl("address", b$$3, c$$2);
}
export function article(b$$4, c$$3) {
  return domEl("article", b$$4, c$$3);
}
export function aside(b$$5, c$$4) {
  return domEl("aside", b$$5, c$$4);
}
export function audio(b$$6, c$$5) {
  return domEl("audio", b$$6, c$$5);
}
export function b(b$0027, c$$6) {
  return domEl("b", b$0027, c$$6);
}
export function bdi(b$$7, c$$7) {
  return domEl("bdi", b$$7, c$$7);
}
export function bdo(b$$8, c$$8) {
  return domEl("bdo", b$$8, c$$8);
}
export function big(b$$9, c$$9) {
  return domEl("big", b$$9, c$$9);
}
export function blockquote(b$$10, c$$10) {
  return domEl("blockquote", b$$10, c$$10);
}
export function body(b$$11, c$$11) {
  return domEl("body", b$$11, c$$11);
}
export function button(b$$12, c$$12) {
  return domEl("button", b$$12, c$$12);
}
export function canvas(b$$13, c$$13) {
  return domEl("canvas", b$$13, c$$13);
}
export function caption(b$$14, c$$14) {
  return domEl("caption", b$$14, c$$14);
}
export function cite(b$$15, c$$15) {
  return domEl("cite", b$$15, c$$15);
}
export function code(b$$16, c$$16) {
  return domEl("code", b$$16, c$$16);
}
export function colgroup(b$$17, c$$17) {
  return domEl("colgroup", b$$17, c$$17);
}
export function data(b$$18, c$$18) {
  return domEl("data", b$$18, c$$18);
}
export function datalist(b$$19, c$$19) {
  return domEl("datalist", b$$19, c$$19);
}
export function dd(b$$20, c$$20) {
  return domEl("dd", b$$20, c$$20);
}
export function del(b$$21, c$$21) {
  return domEl("del", b$$21, c$$21);
}
export function details(b$$22, c$$22) {
  return domEl("details", b$$22, c$$22);
}
export function dfn(b$$23, c$$23) {
  return domEl("dfn", b$$23, c$$23);
}
export function dialog(b$$24, c$$24) {
  return domEl("dialog", b$$24, c$$24);
}
export function div(b$$25, c$$25) {
  return domEl("div", b$$25, c$$25);
}
export function dl(b$$26, c$$26) {
  return domEl("dl", b$$26, c$$26);
}
export function dt(b$$27, c$$27) {
  return domEl("dt", b$$27, c$$27);
}
export function em(b$$28, c$$28) {
  return domEl("em", b$$28, c$$28);
}
export function fieldset(b$$29, c$$29) {
  return domEl("fieldset", b$$29, c$$29);
}
export function figcaption(b$$30, c$$30) {
  return domEl("figcaption", b$$30, c$$30);
}
export function figure(b$$31, c$$31) {
  return domEl("figure", b$$31, c$$31);
}
export function footer(b$$32, c$$32) {
  return domEl("footer", b$$32, c$$32);
}
export function form(b$$33, c$$33) {
  return domEl("form", b$$33, c$$33);
}
export function h1(b$$34, c$$34) {
  return domEl("h1", b$$34, c$$34);
}
export function h2(b$$35, c$$35) {
  return domEl("h2", b$$35, c$$35);
}
export function h3(b$$36, c$$36) {
  return domEl("h3", b$$36, c$$36);
}
export function h4(b$$37, c$$37) {
  return domEl("h4", b$$37, c$$37);
}
export function h5(b$$38, c$$38) {
  return domEl("h5", b$$38, c$$38);
}
export function h6(b$$39, c$$39) {
  return domEl("h6", b$$39, c$$39);
}
export function head(b$$40, c$$40) {
  return domEl("head", b$$40, c$$40);
}
export function header(b$$41, c$$41) {
  return domEl("header", b$$41, c$$41);
}
export function hgroup(b$$42, c$$42) {
  return domEl("hgroup", b$$42, c$$42);
}
export function html(b$$43, c$$43) {
  return domEl("html", b$$43, c$$43);
}
export function i(b$$44, c$$44) {
  return domEl("i", b$$44, c$$44);
}
export function iframe(b$$45, c$$45) {
  return domEl("iframe", b$$45, c$$45);
}
export function ins(b$$46, c$$46) {
  return domEl("ins", b$$46, c$$46);
}
export function kbd(b$$47, c$$47) {
  return domEl("kbd", b$$47, c$$47);
}
export function label(b$$48, c$$48) {
  return domEl("label", b$$48, c$$48);
}
export function legend(b$$49, c$$49) {
  return domEl("legend", b$$49, c$$49);
}
export function li(b$$50, c$$50) {
  return domEl("li", b$$50, c$$50);
}
export function main(b$$51, c$$51) {
  return domEl("main", b$$51, c$$51);
}
export function map(b$$52, c$$52) {
  return domEl("map", b$$52, c$$52);
}
export function mark(b$$53, c$$53) {
  return domEl("mark", b$$53, c$$53);
}
export function menu(b$$54, c$$54) {
  return domEl("menu", b$$54, c$$54);
}
export function meter(b$$55, c$$55) {
  return domEl("meter", b$$55, c$$55);
}
export function nav(b$$56, c$$56) {
  return domEl("nav", b$$56, c$$56);
}
export function noscript(b$$57, c$$57) {
  return domEl("noscript", b$$57, c$$57);
}
export function object(b$$58, c$$58) {
  return domEl("object", b$$58, c$$58);
}
export function ol(b$$59, c$$59) {
  return domEl("ol", b$$59, c$$59);
}
export function optgroup(b$$60, c$$60) {
  return domEl("optgroup", b$$60, c$$60);
}
export function option(b$$61, c$$61) {
  return domEl("option", b$$61, c$$61);
}
export function output(b$$62, c$$62) {
  return domEl("output", b$$62, c$$62);
}
export function p(b$$63, c$$63) {
  return domEl("p", b$$63, c$$63);
}
export function picture(b$$64, c$$64) {
  return domEl("picture", b$$64, c$$64);
}
export function pre(b$$65, c$$65) {
  return domEl("pre", b$$65, c$$65);
}
export function progress(b$$66, c$$66) {
  return domEl("progress", b$$66, c$$66);
}
export function q(b$$67, c$$67) {
  return domEl("q", b$$67, c$$67);
}
export function rp(b$$68, c$$68) {
  return domEl("rp", b$$68, c$$68);
}
export function rt(b$$69, c$$69) {
  return domEl("rt", b$$69, c$$69);
}
export function ruby(b$$70, c$$70) {
  return domEl("ruby", b$$70, c$$70);
}
export function s(b$$71, c$$71) {
  return domEl("s", b$$71, c$$71);
}
export function samp(b$$72, c$$72) {
  return domEl("samp", b$$72, c$$72);
}
export function script(b$$73, c$$73) {
  return domEl("script", b$$73, c$$73);
}
export function section(b$$74, c$$74) {
  return domEl("section", b$$74, c$$74);
}
export function select(b$$75, c$$75) {
  return domEl("select", b$$75, c$$75);
}
export function small(b$$76, c$$76) {
  return domEl("small", b$$76, c$$76);
}
export function span(b$$77, c$$77) {
  return domEl("span", b$$77, c$$77);
}
export function strong(b$$78, c$$78) {
  return domEl("strong", b$$78, c$$78);
}
export function style(b$$79, c$$79) {
  return domEl("style", b$$79, c$$79);
}
export function sub(b$$80, c$$80) {
  return domEl("sub", b$$80, c$$80);
}
export function summary(b$$81, c$$81) {
  return domEl("summary", b$$81, c$$81);
}
export function sup(b$$82, c$$82) {
  return domEl("sup", b$$82, c$$82);
}
export function table(b$$83, c$$83) {
  return domEl("table", b$$83, c$$83);
}
export function tbody(b$$84, c$$84) {
  return domEl("tbody", b$$84, c$$84);
}
export function td(b$$85, c$$85) {
  return domEl("td", b$$85, c$$85);
}
export function textarea(b$$86, c$$86) {
  return domEl("textarea", b$$86, c$$86);
}
export function tfoot(b$$87, c$$87) {
  return domEl("tfoot", b$$87, c$$87);
}
export function th(b$$88, c$$88) {
  return domEl("th", b$$88, c$$88);
}
export function thead(b$$89, c$$89) {
  return domEl("thead", b$$89, c$$89);
}
export function time(b$$90, c$$90) {
  return domEl("time", b$$90, c$$90);
}
export function title(b$$91, c$$91) {
  return domEl("title", b$$91, c$$91);
}
export function tr(b$$92, c$$92) {
  return domEl("tr", b$$92, c$$92);
}
export function u(b$$93, c$$93) {
  return domEl("u", b$$93, c$$93);
}
export function ul(b$$94, c$$94) {
  return domEl("ul", b$$94, c$$94);
}
export function var$(b$$95, c$$95) {
  return domEl("var", b$$95, c$$95);
}
export function video(b$$96, c$$96) {
  return domEl("video", b$$96, c$$96);
}
export function area(b$$97) {
  return voidEl("area", b$$97);
}
export function base(b$$98) {
  return voidEl("base", b$$98);
}
export function br(b$$99) {
  return voidEl("br", b$$99);
}
export function col(b$$100) {
  return voidEl("col", b$$100);
}
export function embed(b$$101) {
  return voidEl("embed", b$$101);
}
export function hr(b$$102) {
  return voidEl("hr", b$$102);
}
export function img(b$$103) {
  return voidEl("img", b$$103);
}
export function input(b$$104) {
  return voidEl("input", b$$104);
}
export function keygen(b$$105) {
  return voidEl("keygen", b$$105);
}
export function link(b$$106) {
  return voidEl("link", b$$106);
}
export function menuitem(b$$107) {
  return voidEl("menuitem", b$$107);
}
export function meta(b$$108) {
  return voidEl("meta", b$$108);
}
export function param(b$$109) {
  return voidEl("param", b$$109);
}
export function source(b$$110) {
  return voidEl("source", b$$110);
}
export function track(b$$111) {
  return voidEl("track", b$$111);
}
export function wbr(b$$112) {
  return voidEl("wbr", b$$112);
}
export function svg(b$$113, c$$97) {
  return svgEl("svg", b$$113, c$$97);
}
export function circle(b$$114, c$$98) {
  return svgEl("circle", b$$114, c$$98);
}
export function clipPath(b$$115, c$$99) {
  return svgEl("clipPath", b$$115, c$$99);
}
export function defs(b$$116, c$$100) {
  return svgEl("defs", b$$116, c$$100);
}
export function ellipse(b$$117, c$$101) {
  return svgEl("ellipse", b$$117, c$$101);
}
export function g(b$$118, c$$102) {
  return svgEl("g", b$$118, c$$102);
}
export function image(b$$119, c$$103) {
  return svgEl("image", b$$119, c$$103);
}
export function line(b$$120, c$$104) {
  return svgEl("line", b$$120, c$$104);
}
export function linearGradient(b$$121, c$$105) {
  return svgEl("linearGradient", b$$121, c$$105);
}
export function mask(b$$122, c$$106) {
  return svgEl("mask", b$$122, c$$106);
}
export function path(b$$123, c$$107) {
  return svgEl("path", b$$123, c$$107);
}
export function pattern(b$$124, c$$108) {
  return svgEl("pattern", b$$124, c$$108);
}
export function polygon(b$$125, c$$109) {
  return svgEl("polygon", b$$125, c$$109);
}
export function polyline(b$$126, c$$110) {
  return svgEl("polyline", b$$126, c$$110);
}
export function radialGradient(b$$127, c$$111) {
  return svgEl("radialGradient", b$$127, c$$111);
}
export function rect(b$$128, c$$112) {
  return svgEl("rect", b$$128, c$$112);
}
export function stop(b$$129, c$$113) {
  return svgEl("stop", b$$129, c$$113);
}
export function text(b$$130, c$$114) {
  return svgEl("text", b$$130, c$$114);
}
export function tspan(b$$131, c$$115) {
  return svgEl("tspan", b$$131, c$$115);
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
  ReactDOM.render(reactEl, document.getElementById(domElId));
}
export function mountBySelector(domElSelector, reactEl$$1) {
  ReactDOM.render(reactEl$$1, document.querySelector(domElSelector));
}
