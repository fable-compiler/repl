import { class_type } from "../../fable-library/Reflection.js";
import { singleton } from "../../fable-library/List.js";
import { int32ToString } from "../../fable-library/Util.js";

export class Feliz_HtmlEngine$1 {
    constructor(mk, ofStr, empty) {
        this.mk = mk;
        this.ofStr = ofStr;
        this.empty = empty;
    }
}

export function Feliz_HtmlEngine$1$reflection(gen0) {
    return class_type("Feliz.HtmlEngine`1", [gen0], Feliz_HtmlEngine$1);
}

export function Feliz_HtmlEngine$1_$ctor_Z780DA98D(mk, ofStr, empty) {
    return new Feliz_HtmlEngine$1(mk, ofStr, empty);
}

export function Feliz_HtmlEngine$1__custom_4AE854A1(_, key, children) {
    return _.mk(key, children);
}

export function Feliz_HtmlEngine$1__get_none(_) {
    return _.empty();
}

export function Feliz_HtmlEngine$1__a_BB573A(_, children) {
    return _.mk("a", children);
}

export function Feliz_HtmlEngine$1__abbr_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("abbr", arg10);
}

export function Feliz_HtmlEngine$1__abbr_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("abbr", arg10);
}

export function Feliz_HtmlEngine$1__abbr_2B595(_, value) {
    return _.mk("abbr", [value]);
}

export function Feliz_HtmlEngine$1__abbr_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("abbr", arg10);
}

export function Feliz_HtmlEngine$1__abbr_BB573A(_, children) {
    return _.mk("abbr", children);
}

export function Feliz_HtmlEngine$1__address_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("address", arg10);
}

export function Feliz_HtmlEngine$1__address_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("address", arg10);
}

export function Feliz_HtmlEngine$1__address_2B595(_, value) {
    return _.mk("address", [value]);
}

export function Feliz_HtmlEngine$1__address_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("address", arg10);
}

export function Feliz_HtmlEngine$1__address_BB573A(_, children) {
    return _.mk("address", children);
}

export function Feliz_HtmlEngine$1__anchor_BB573A(_, children) {
    return _.mk("a", children);
}

export function Feliz_HtmlEngine$1__area_BB573A(_, children) {
    return _.mk("area", children);
}

export function Feliz_HtmlEngine$1__article_BB573A(_, children) {
    return _.mk("article", children);
}

export function Feliz_HtmlEngine$1__aside_BB573A(_, children) {
    return _.mk("aside", children);
}

export function Feliz_HtmlEngine$1__audio_BB573A(_, children) {
    return _.mk("audio", children);
}

export function Feliz_HtmlEngine$1__b_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("b", arg10);
}

export function Feliz_HtmlEngine$1__b_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("b", arg10);
}

export function Feliz_HtmlEngine$1__b_2B595(_, value) {
    return _.mk("b", [value]);
}

export function Feliz_HtmlEngine$1__b_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("b", arg10);
}

export function Feliz_HtmlEngine$1__b_BB573A(_, children) {
    return _.mk("b", children);
}

export function Feliz_HtmlEngine$1__base$0027_BB573A(_, children) {
    return _.mk("base", children);
}

export function Feliz_HtmlEngine$1__bdi_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("bdi", arg10);
}

export function Feliz_HtmlEngine$1__bdi_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("bdi", arg10);
}

export function Feliz_HtmlEngine$1__bdi_2B595(_, value) {
    return _.mk("bdi", [value]);
}

export function Feliz_HtmlEngine$1__bdi_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("bdi", arg10);
}

export function Feliz_HtmlEngine$1__bdi_BB573A(_, children) {
    return _.mk("bdi", children);
}

export function Feliz_HtmlEngine$1__bdo_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("bdo", arg10);
}

export function Feliz_HtmlEngine$1__bdo_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("bdo", arg10);
}

export function Feliz_HtmlEngine$1__bdo_2B595(_, value) {
    return _.mk("bdo", [value]);
}

export function Feliz_HtmlEngine$1__bdo_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("bdo", arg10);
}

export function Feliz_HtmlEngine$1__bdo_BB573A(_, children) {
    return _.mk("bdo", children);
}

export function Feliz_HtmlEngine$1__blockquote_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("blockquote", arg10);
}

export function Feliz_HtmlEngine$1__blockquote_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("blockquote", arg10);
}

export function Feliz_HtmlEngine$1__blockquote_2B595(_, value) {
    return _.mk("blockquote", [value]);
}

export function Feliz_HtmlEngine$1__blockquote_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("blockquote", arg10);
}

export function Feliz_HtmlEngine$1__blockquote_BB573A(_, children) {
    return _.mk("blockquote", children);
}

export function Feliz_HtmlEngine$1__body_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("body", arg10);
}

export function Feliz_HtmlEngine$1__body_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("body", arg10);
}

export function Feliz_HtmlEngine$1__body_2B595(_, value) {
    return _.mk("body", [value]);
}

export function Feliz_HtmlEngine$1__body_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("body", arg10);
}

export function Feliz_HtmlEngine$1__body_BB573A(_, children) {
    return _.mk("body", children);
}

export function Feliz_HtmlEngine$1__br_BB573A(_, children) {
    return _.mk("br", children);
}

export function Feliz_HtmlEngine$1__button_BB573A(_, children) {
    return _.mk("button", children);
}

export function Feliz_HtmlEngine$1__canvas_BB573A(_, children) {
    return _.mk("canvas", children);
}

export function Feliz_HtmlEngine$1__caption_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("caption", arg10);
}

export function Feliz_HtmlEngine$1__caption_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("caption", arg10);
}

export function Feliz_HtmlEngine$1__caption_2B595(_, value) {
    return _.mk("caption", [value]);
}

export function Feliz_HtmlEngine$1__caption_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("caption", arg10);
}

export function Feliz_HtmlEngine$1__caption_BB573A(_, children) {
    return _.mk("caption", children);
}

export function Feliz_HtmlEngine$1__cite_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("cite", arg10);
}

export function Feliz_HtmlEngine$1__cite_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("cite", arg10);
}

export function Feliz_HtmlEngine$1__cite_2B595(_, value) {
    return _.mk("cite", [value]);
}

export function Feliz_HtmlEngine$1__cite_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("cite", arg10);
}

export function Feliz_HtmlEngine$1__cite_BB573A(_, children) {
    return _.mk("cite", children);
}

export function Feliz_HtmlEngine$1__code_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("code", arg10);
}

export function Feliz_HtmlEngine$1__code_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("code", arg10);
}

export function Feliz_HtmlEngine$1__code_2B595(_, value) {
    return _.mk("code", [value]);
}

export function Feliz_HtmlEngine$1__code_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("code", arg10);
}

export function Feliz_HtmlEngine$1__code_BB573A(_, children) {
    return _.mk("code", children);
}

export function Feliz_HtmlEngine$1__col_BB573A(_, children) {
    return _.mk("col", children);
}

export function Feliz_HtmlEngine$1__colgroup_BB573A(_, children) {
    return _.mk("colgroup", children);
}

export function Feliz_HtmlEngine$1__data_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("data", arg10);
}

export function Feliz_HtmlEngine$1__data_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("data", arg10);
}

export function Feliz_HtmlEngine$1__data_2B595(_, value) {
    return _.mk("data", [value]);
}

export function Feliz_HtmlEngine$1__data_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("data", arg10);
}

export function Feliz_HtmlEngine$1__data_BB573A(_, children) {
    return _.mk("data", children);
}

export function Feliz_HtmlEngine$1__datalist_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("datalist", arg10);
}

export function Feliz_HtmlEngine$1__datalist_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("datalist", arg10);
}

export function Feliz_HtmlEngine$1__datalist_2B595(_, value) {
    return _.mk("datalist", [value]);
}

export function Feliz_HtmlEngine$1__datalist_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("datalist", arg10);
}

export function Feliz_HtmlEngine$1__datalist_BB573A(_, children) {
    return _.mk("datalist", children);
}

export function Feliz_HtmlEngine$1__dd_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("dd", arg10);
}

export function Feliz_HtmlEngine$1__dd_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("dd", arg10);
}

export function Feliz_HtmlEngine$1__dd_2B595(_, value) {
    return _.mk("dd", [value]);
}

export function Feliz_HtmlEngine$1__dd_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("dd", arg10);
}

export function Feliz_HtmlEngine$1__dd_BB573A(_, children) {
    return _.mk("dd", children);
}

export function Feliz_HtmlEngine$1__del_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("del", arg10);
}

export function Feliz_HtmlEngine$1__del_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("del", arg10);
}

export function Feliz_HtmlEngine$1__del_2B595(_, value) {
    return _.mk("del", [value]);
}

export function Feliz_HtmlEngine$1__del_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("del", arg10);
}

export function Feliz_HtmlEngine$1__del_BB573A(_, children) {
    return _.mk("del", children);
}

export function Feliz_HtmlEngine$1__details_BB573A(_, children) {
    return _.mk("details", children);
}

export function Feliz_HtmlEngine$1__dfn_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("dfn", arg10);
}

export function Feliz_HtmlEngine$1__dfn_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("dfn", arg10);
}

export function Feliz_HtmlEngine$1__dfn_2B595(_, value) {
    return _.mk("dfn", [value]);
}

export function Feliz_HtmlEngine$1__dfn_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("dfn", arg10);
}

export function Feliz_HtmlEngine$1__dfn_BB573A(_, children) {
    return _.mk("dfn", children);
}

export function Feliz_HtmlEngine$1__dialog_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("dialog", arg10);
}

export function Feliz_HtmlEngine$1__dialog_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("dialog", arg10);
}

export function Feliz_HtmlEngine$1__dialog_2B595(_, value) {
    return _.mk("dialog", [value]);
}

export function Feliz_HtmlEngine$1__dialog_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("dialog", arg10);
}

export function Feliz_HtmlEngine$1__dialog_BB573A(_, children) {
    return _.mk("dialog", children);
}

export function Feliz_HtmlEngine$1__div_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("div", arg10);
}

export function Feliz_HtmlEngine$1__div_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("div", arg10);
}

export function Feliz_HtmlEngine$1__div_2B595(_, value) {
    return _.mk("div", [value]);
}

export function Feliz_HtmlEngine$1__div_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("div", arg10);
}

export function Feliz_HtmlEngine$1__div_BB573A(_, children) {
    return _.mk("div", children);
}

export function Feliz_HtmlEngine$1__dl_BB573A(_, children) {
    return _.mk("dl", children);
}

export function Feliz_HtmlEngine$1__dt_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("dt", arg10);
}

export function Feliz_HtmlEngine$1__dt_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("dt", arg10);
}

export function Feliz_HtmlEngine$1__dt_2B595(_, value) {
    return _.mk("dt", [value]);
}

export function Feliz_HtmlEngine$1__dt_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("dt", arg10);
}

export function Feliz_HtmlEngine$1__dt_BB573A(_, children) {
    return _.mk("dt", children);
}

export function Feliz_HtmlEngine$1__em_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("em", arg10);
}

export function Feliz_HtmlEngine$1__em_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("em", arg10);
}

export function Feliz_HtmlEngine$1__em_2B595(_, value) {
    return _.mk("em", [value]);
}

export function Feliz_HtmlEngine$1__em_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("em", arg10);
}

export function Feliz_HtmlEngine$1__em_BB573A(_, children) {
    return _.mk("em", children);
}

export function Feliz_HtmlEngine$1__fieldSet_BB573A(_, children) {
    return _.mk("fieldset", children);
}

export function Feliz_HtmlEngine$1__figcaption_BB573A(_, children) {
    return _.mk("figcaption", children);
}

export function Feliz_HtmlEngine$1__figure_BB573A(_, children) {
    return _.mk("figure", children);
}

export function Feliz_HtmlEngine$1__footer_BB573A(_, children) {
    return _.mk("footer", children);
}

export function Feliz_HtmlEngine$1__form_BB573A(_, children) {
    return _.mk("form", children);
}

export function Feliz_HtmlEngine$1__h1_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("h1", arg10);
}

export function Feliz_HtmlEngine$1__h1_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("h1", arg10);
}

export function Feliz_HtmlEngine$1__h1_2B595(_, value) {
    return _.mk("h1", [value]);
}

export function Feliz_HtmlEngine$1__h1_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("h1", arg10);
}

export function Feliz_HtmlEngine$1__h1_BB573A(_, children) {
    return _.mk("h1", children);
}

export function Feliz_HtmlEngine$1__h2_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("h2", arg10);
}

export function Feliz_HtmlEngine$1__h2_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("h2", arg10);
}

export function Feliz_HtmlEngine$1__h2_2B595(_, value) {
    return _.mk("h2", [value]);
}

export function Feliz_HtmlEngine$1__h2_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("h2", arg10);
}

export function Feliz_HtmlEngine$1__h2_BB573A(_, children) {
    return _.mk("h2", children);
}

export function Feliz_HtmlEngine$1__h3_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("h3", arg10);
}

export function Feliz_HtmlEngine$1__h3_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("h3", arg10);
}

export function Feliz_HtmlEngine$1__h3_2B595(_, value) {
    return _.mk("h3", [value]);
}

export function Feliz_HtmlEngine$1__h3_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("h3", arg10);
}

export function Feliz_HtmlEngine$1__h3_BB573A(_, children) {
    return _.mk("h3", children);
}

export function Feliz_HtmlEngine$1__h4_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("h4", arg10);
}

export function Feliz_HtmlEngine$1__h4_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("h4", arg10);
}

export function Feliz_HtmlEngine$1__h4_2B595(_, value) {
    return _.mk("h4", [value]);
}

export function Feliz_HtmlEngine$1__h4_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("h4", arg10);
}

export function Feliz_HtmlEngine$1__h4_BB573A(_, children) {
    return _.mk("h4", children);
}

export function Feliz_HtmlEngine$1__h5_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("h5", arg10);
}

export function Feliz_HtmlEngine$1__h5_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("h5", arg10);
}

export function Feliz_HtmlEngine$1__h5_2B595(_, value) {
    return _.mk("h5", [value]);
}

export function Feliz_HtmlEngine$1__h5_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("h5", arg10);
}

export function Feliz_HtmlEngine$1__h5_BB573A(_, children) {
    return _.mk("h5", children);
}

export function Feliz_HtmlEngine$1__h6_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("h6", arg10);
}

export function Feliz_HtmlEngine$1__h6_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("h6", arg10);
}

export function Feliz_HtmlEngine$1__h6_2B595(_, value) {
    return _.mk("h6", [value]);
}

export function Feliz_HtmlEngine$1__h6_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("h6", arg10);
}

export function Feliz_HtmlEngine$1__h6_BB573A(_, children) {
    return _.mk("h6", children);
}

export function Feliz_HtmlEngine$1__head_BB573A(_, children) {
    return _.mk("head", children);
}

export function Feliz_HtmlEngine$1__header_BB573A(_, children) {
    return _.mk("header", children);
}

export function Feliz_HtmlEngine$1__hr_BB573A(_, children) {
    return _.mk("hr", children);
}

export function Feliz_HtmlEngine$1__html_BB573A(_, children) {
    return _.mk("html", children);
}

export function Feliz_HtmlEngine$1__i_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("i", arg10);
}

export function Feliz_HtmlEngine$1__i_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("i", arg10);
}

export function Feliz_HtmlEngine$1__i_2B595(_, value) {
    return _.mk("i", [value]);
}

export function Feliz_HtmlEngine$1__i_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("i", arg10);
}

export function Feliz_HtmlEngine$1__i_BB573A(_, children) {
    return _.mk("i", children);
}

export function Feliz_HtmlEngine$1__iframe_BB573A(_, children) {
    return _.mk("iframe", children);
}

export function Feliz_HtmlEngine$1__img_BB573A(_, children) {
    return _.mk("img", children);
}

export function Feliz_HtmlEngine$1__input_BB573A(_, children) {
    return _.mk("input", children);
}

export function Feliz_HtmlEngine$1__ins_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("ins", arg10);
}

export function Feliz_HtmlEngine$1__ins_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("ins", arg10);
}

export function Feliz_HtmlEngine$1__ins_2B595(_, value) {
    return _.mk("ins", [value]);
}

export function Feliz_HtmlEngine$1__ins_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("ins", arg10);
}

export function Feliz_HtmlEngine$1__ins_BB573A(_, children) {
    return _.mk("ins", children);
}

export function Feliz_HtmlEngine$1__kbd_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("kbd", arg10);
}

export function Feliz_HtmlEngine$1__kbd_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("kbd", arg10);
}

export function Feliz_HtmlEngine$1__kbd_2B595(_, value) {
    return _.mk("kbd", [value]);
}

export function Feliz_HtmlEngine$1__kbd_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("kbd", arg10);
}

export function Feliz_HtmlEngine$1__kbd_BB573A(_, children) {
    return _.mk("kbd", children);
}

export function Feliz_HtmlEngine$1__label_BB573A(_, children) {
    return _.mk("label", children);
}

export function Feliz_HtmlEngine$1__legend_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("legend", arg10);
}

export function Feliz_HtmlEngine$1__legend_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("legend", arg10);
}

export function Feliz_HtmlEngine$1__legend_2B595(_, value) {
    return _.mk("legend", [value]);
}

export function Feliz_HtmlEngine$1__legend_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("legend", arg10);
}

export function Feliz_HtmlEngine$1__legend_BB573A(_, children) {
    return _.mk("legend", children);
}

export function Feliz_HtmlEngine$1__li_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("li", arg10);
}

export function Feliz_HtmlEngine$1__li_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("li", arg10);
}

export function Feliz_HtmlEngine$1__li_2B595(_, value) {
    return _.mk("li", [value]);
}

export function Feliz_HtmlEngine$1__li_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("li", arg10);
}

export function Feliz_HtmlEngine$1__li_BB573A(_, children) {
    return _.mk("li", children);
}

export function Feliz_HtmlEngine$1__listItem_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("li", arg10);
}

export function Feliz_HtmlEngine$1__listItem_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("li", arg10);
}

export function Feliz_HtmlEngine$1__listItem_2B595(_, value) {
    return _.mk("li", [value]);
}

export function Feliz_HtmlEngine$1__listItem_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("li", arg10);
}

export function Feliz_HtmlEngine$1__listItem_BB573A(_, children) {
    return _.mk("li", children);
}

export function Feliz_HtmlEngine$1__main_BB573A(_, children) {
    return _.mk("main", children);
}

export function Feliz_HtmlEngine$1__map_BB573A(_, children) {
    return _.mk("map", children);
}

export function Feliz_HtmlEngine$1__mark_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("mark", arg10);
}

export function Feliz_HtmlEngine$1__mark_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("mark", arg10);
}

export function Feliz_HtmlEngine$1__mark_2B595(_, value) {
    return _.mk("mark", [value]);
}

export function Feliz_HtmlEngine$1__mark_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("mark", arg10);
}

export function Feliz_HtmlEngine$1__mark_BB573A(_, children) {
    return _.mk("mark", children);
}

export function Feliz_HtmlEngine$1__metadata_BB573A(_, children) {
    return _.mk("metadata", children);
}

export function Feliz_HtmlEngine$1__meter_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("meter", arg10);
}

export function Feliz_HtmlEngine$1__meter_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("meter", arg10);
}

export function Feliz_HtmlEngine$1__meter_2B595(_, value) {
    return _.mk("meter", [value]);
}

export function Feliz_HtmlEngine$1__meter_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("meter", arg10);
}

export function Feliz_HtmlEngine$1__meter_BB573A(_, children) {
    return _.mk("meter", children);
}

export function Feliz_HtmlEngine$1__nav_BB573A(_, children) {
    return _.mk("nav", children);
}

export function Feliz_HtmlEngine$1__noscript_BB573A(_, children) {
    return _.mk("noscript", children);
}

export function Feliz_HtmlEngine$1__object_BB573A(_, children) {
    return _.mk("object", children);
}

export function Feliz_HtmlEngine$1__ol_BB573A(_, children) {
    return _.mk("ol", children);
}

export function Feliz_HtmlEngine$1__option_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("option", arg10);
}

export function Feliz_HtmlEngine$1__option_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("option", arg10);
}

export function Feliz_HtmlEngine$1__option_2B595(_, value) {
    return _.mk("option", [value]);
}

export function Feliz_HtmlEngine$1__option_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("option", arg10);
}

export function Feliz_HtmlEngine$1__option_BB573A(_, children) {
    return _.mk("option", children);
}

export function Feliz_HtmlEngine$1__optgroup_BB573A(_, children) {
    return _.mk("optgroup", children);
}

export function Feliz_HtmlEngine$1__orderedList_BB573A(_, children) {
    return _.mk("ol", children);
}

export function Feliz_HtmlEngine$1__output_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("output", arg10);
}

export function Feliz_HtmlEngine$1__output_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("output", arg10);
}

export function Feliz_HtmlEngine$1__output_2B595(_, value) {
    return _.mk("output", [value]);
}

export function Feliz_HtmlEngine$1__output_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("output", arg10);
}

export function Feliz_HtmlEngine$1__output_BB573A(_, children) {
    return _.mk("output", children);
}

export function Feliz_HtmlEngine$1__p_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("p", arg10);
}

export function Feliz_HtmlEngine$1__p_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("p", arg10);
}

export function Feliz_HtmlEngine$1__p_2B595(_, value) {
    return _.mk("p", [value]);
}

export function Feliz_HtmlEngine$1__p_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("p", arg10);
}

export function Feliz_HtmlEngine$1__p_BB573A(_, children) {
    return _.mk("p", children);
}

export function Feliz_HtmlEngine$1__paragraph_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("p", arg10);
}

export function Feliz_HtmlEngine$1__paragraph_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("p", arg10);
}

export function Feliz_HtmlEngine$1__paragraph_2B595(_, value) {
    return _.mk("p", [value]);
}

export function Feliz_HtmlEngine$1__paragraph_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("p", arg10);
}

export function Feliz_HtmlEngine$1__paragraph_BB573A(_, children) {
    return _.mk("p", children);
}

export function Feliz_HtmlEngine$1__picture_BB573A(_, children) {
    return _.mk("picture", children);
}

export function Feliz_HtmlEngine$1__pre_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("pre", arg10);
}

export function Feliz_HtmlEngine$1__pre_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("pre", arg10);
}

export function Feliz_HtmlEngine$1__pre_2B595(_, value) {
    return _.mk("pre", [value]);
}

export function Feliz_HtmlEngine$1__pre_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("pre", arg10);
}

export function Feliz_HtmlEngine$1__pre_BB573A(_, children) {
    return _.mk("pre", children);
}

export function Feliz_HtmlEngine$1__progress_BB573A(_, children) {
    return _.mk("progress", children);
}

export function Feliz_HtmlEngine$1__q_BB573A(_, children) {
    return _.mk("q", children);
}

export function Feliz_HtmlEngine$1__rb_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("rb", arg10);
}

export function Feliz_HtmlEngine$1__rb_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("rb", arg10);
}

export function Feliz_HtmlEngine$1__rb_2B595(_, value) {
    return _.mk("rb", [value]);
}

export function Feliz_HtmlEngine$1__rb_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("rb", arg10);
}

export function Feliz_HtmlEngine$1__rb_BB573A(_, children) {
    return _.mk("rb", children);
}

export function Feliz_HtmlEngine$1__rp_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("rp", arg10);
}

export function Feliz_HtmlEngine$1__rp_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("rp", arg10);
}

export function Feliz_HtmlEngine$1__rp_2B595(_, value) {
    return _.mk("rp", [value]);
}

export function Feliz_HtmlEngine$1__rp_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("rp", arg10);
}

export function Feliz_HtmlEngine$1__rp_BB573A(_, children) {
    return _.mk("rp", children);
}

export function Feliz_HtmlEngine$1__rt_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("rt", arg10);
}

export function Feliz_HtmlEngine$1__rt_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("rt", arg10);
}

export function Feliz_HtmlEngine$1__rt_2B595(_, value) {
    return _.mk("rt", [value]);
}

export function Feliz_HtmlEngine$1__rt_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("rt", arg10);
}

export function Feliz_HtmlEngine$1__rt_BB573A(_, children) {
    return _.mk("rt", children);
}

export function Feliz_HtmlEngine$1__rtc_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("rtc", arg10);
}

export function Feliz_HtmlEngine$1__rtc_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("rtc", arg10);
}

export function Feliz_HtmlEngine$1__rtc_2B595(_, value) {
    return _.mk("rtc", [value]);
}

export function Feliz_HtmlEngine$1__rtc_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("rtc", arg10);
}

export function Feliz_HtmlEngine$1__rtc_BB573A(_, children) {
    return _.mk("rtc", children);
}

export function Feliz_HtmlEngine$1__ruby_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("ruby", arg10);
}

export function Feliz_HtmlEngine$1__ruby_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("ruby", arg10);
}

export function Feliz_HtmlEngine$1__ruby_2B595(_, value) {
    return _.mk("ruby", [value]);
}

export function Feliz_HtmlEngine$1__ruby_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("ruby", arg10);
}

export function Feliz_HtmlEngine$1__ruby_BB573A(_, children) {
    return _.mk("ruby", children);
}

export function Feliz_HtmlEngine$1__s_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("s", arg10);
}

export function Feliz_HtmlEngine$1__s_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("s", arg10);
}

export function Feliz_HtmlEngine$1__s_2B595(_, value) {
    return _.mk("s", [value]);
}

export function Feliz_HtmlEngine$1__s_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("s", arg10);
}

export function Feliz_HtmlEngine$1__s_BB573A(_, children) {
    return _.mk("s", children);
}

export function Feliz_HtmlEngine$1__samp_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("samp", arg10);
}

export function Feliz_HtmlEngine$1__samp_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("samp", arg10);
}

export function Feliz_HtmlEngine$1__samp_2B595(_, value) {
    return _.mk("samp", [value]);
}

export function Feliz_HtmlEngine$1__samp_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("samp", arg10);
}

export function Feliz_HtmlEngine$1__samp_BB573A(_, children) {
    return _.mk("samp", children);
}

export function Feliz_HtmlEngine$1__script_BB573A(_, children) {
    return _.mk("script", children);
}

export function Feliz_HtmlEngine$1__section_BB573A(_, children) {
    return _.mk("section", children);
}

export function Feliz_HtmlEngine$1__select_BB573A(_, children) {
    return _.mk("select", children);
}

export function Feliz_HtmlEngine$1__small_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("small", arg10);
}

export function Feliz_HtmlEngine$1__small_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("small", arg10);
}

export function Feliz_HtmlEngine$1__small_2B595(_, value) {
    return _.mk("small", [value]);
}

export function Feliz_HtmlEngine$1__small_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("small", arg10);
}

export function Feliz_HtmlEngine$1__small_BB573A(_, children) {
    return _.mk("small", children);
}

export function Feliz_HtmlEngine$1__source_BB573A(_, children) {
    return _.mk("source", children);
}

export function Feliz_HtmlEngine$1__span_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("span", arg10);
}

export function Feliz_HtmlEngine$1__span_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("span", arg10);
}

export function Feliz_HtmlEngine$1__span_2B595(_, value) {
    return _.mk("span", [value]);
}

export function Feliz_HtmlEngine$1__span_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("span", arg10);
}

export function Feliz_HtmlEngine$1__span_BB573A(_, children) {
    return _.mk("span", children);
}

export function Feliz_HtmlEngine$1__strong_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("strong", arg10);
}

export function Feliz_HtmlEngine$1__strong_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("strong", arg10);
}

export function Feliz_HtmlEngine$1__strong_2B595(_, value) {
    return _.mk("strong", [value]);
}

export function Feliz_HtmlEngine$1__strong_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("strong", arg10);
}

export function Feliz_HtmlEngine$1__strong_BB573A(_, children) {
    return _.mk("strong", children);
}

export function Feliz_HtmlEngine$1__style_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("style", arg10);
}

export function Feliz_HtmlEngine$1__sub_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("sub", arg10);
}

export function Feliz_HtmlEngine$1__sub_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("sub", arg10);
}

export function Feliz_HtmlEngine$1__sub_2B595(_, value) {
    return _.mk("sub", [value]);
}

export function Feliz_HtmlEngine$1__sub_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("sub", arg10);
}

export function Feliz_HtmlEngine$1__sub_BB573A(_, children) {
    return _.mk("sub", children);
}

export function Feliz_HtmlEngine$1__summary_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("summary", arg10);
}

export function Feliz_HtmlEngine$1__summary_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("summary", arg10);
}

export function Feliz_HtmlEngine$1__summary_2B595(_, value) {
    return _.mk("summary", [value]);
}

export function Feliz_HtmlEngine$1__summary_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("summary", arg10);
}

export function Feliz_HtmlEngine$1__summary_BB573A(_, children) {
    return _.mk("summary", children);
}

export function Feliz_HtmlEngine$1__sup_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("sup", arg10);
}

export function Feliz_HtmlEngine$1__sup_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("sup", arg10);
}

export function Feliz_HtmlEngine$1__sup_2B595(_, value) {
    return _.mk("sup", [value]);
}

export function Feliz_HtmlEngine$1__sup_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("sup", arg10);
}

export function Feliz_HtmlEngine$1__sup_BB573A(_, children) {
    return _.mk("sup", children);
}

export function Feliz_HtmlEngine$1__table_BB573A(_, children) {
    return _.mk("table", children);
}

export function Feliz_HtmlEngine$1__tableBody_BB573A(_, children) {
    return _.mk("tbody", children);
}

export function Feliz_HtmlEngine$1__tableCell_BB573A(_, children) {
    return _.mk("td", children);
}

export function Feliz_HtmlEngine$1__tableHeader_BB573A(_, children) {
    return _.mk("th", children);
}

export function Feliz_HtmlEngine$1__tableRow_BB573A(_, children) {
    return _.mk("tr", children);
}

export function Feliz_HtmlEngine$1__tbody_BB573A(_, children) {
    return _.mk("tbody", children);
}

export function Feliz_HtmlEngine$1__td_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("td", arg10);
}

export function Feliz_HtmlEngine$1__td_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("td", arg10);
}

export function Feliz_HtmlEngine$1__td_2B595(_, value) {
    return _.mk("td", [value]);
}

export function Feliz_HtmlEngine$1__td_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("td", arg10);
}

export function Feliz_HtmlEngine$1__td_BB573A(_, children) {
    return _.mk("td", children);
}

export function Feliz_HtmlEngine$1__template_BB573A(_, children) {
    return _.mk("template", children);
}

export function Feliz_HtmlEngine$1__text_5E38073B(_, value) {
    return _.ofStr(value.toString());
}

export function Feliz_HtmlEngine$1__text_Z524259A4(_, value) {
    return _.ofStr(int32ToString(value));
}

export function Feliz_HtmlEngine$1__text_Z721C83C5(_, value) {
    return _.ofStr(value);
}

export function Feliz_HtmlEngine$1__text_244AC511(_, value) {
    return _.ofStr(value);
}

export function Feliz_HtmlEngine$1__textf_Z2D245C79(this$, fmt) {
    return fmt.cont((arg00) => Feliz_HtmlEngine$1__text_Z721C83C5(this$, arg00));
}

export function Feliz_HtmlEngine$1__textarea_BB573A(_, children) {
    return _.mk("textarea", children);
}

export function Feliz_HtmlEngine$1__tfoot_BB573A(_, children) {
    return _.mk("tfoot", children);
}

export function Feliz_HtmlEngine$1__th_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("th", arg10);
}

export function Feliz_HtmlEngine$1__th_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("th", arg10);
}

export function Feliz_HtmlEngine$1__th_2B595(_, value) {
    return _.mk("th", [value]);
}

export function Feliz_HtmlEngine$1__th_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("th", arg10);
}

export function Feliz_HtmlEngine$1__th_BB573A(_, children) {
    return _.mk("th", children);
}

export function Feliz_HtmlEngine$1__thead_BB573A(_, children) {
    return _.mk("thead", children);
}

export function Feliz_HtmlEngine$1__time_BB573A(_, children) {
    return _.mk("time", children);
}

export function Feliz_HtmlEngine$1__tr_BB573A(_, children) {
    return _.mk("tr", children);
}

export function Feliz_HtmlEngine$1__track_BB573A(_, children) {
    return _.mk("track", children);
}

export function Feliz_HtmlEngine$1__u_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("u", arg10);
}

export function Feliz_HtmlEngine$1__u_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("u", arg10);
}

export function Feliz_HtmlEngine$1__u_2B595(_, value) {
    return _.mk("u", [value]);
}

export function Feliz_HtmlEngine$1__u_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("u", arg10);
}

export function Feliz_HtmlEngine$1__u_BB573A(_, children) {
    return _.mk("u", children);
}

export function Feliz_HtmlEngine$1__ul_BB573A(_, children) {
    return _.mk("ul", children);
}

export function Feliz_HtmlEngine$1__unorderedList_BB573A(_, children) {
    return _.mk("ul", children);
}

export function Feliz_HtmlEngine$1__var_5E38073B(_, value) {
    const arg10 = singleton(_.ofStr(value.toString()));
    return _.mk("var", arg10);
}

export function Feliz_HtmlEngine$1__var_Z524259A4(_, value) {
    const arg10 = singleton(_.ofStr(int32ToString(value)));
    return _.mk("var", arg10);
}

export function Feliz_HtmlEngine$1__var_2B595(_, value) {
    return _.mk("var", [value]);
}

export function Feliz_HtmlEngine$1__var_Z721C83C5(_, value) {
    const arg10 = singleton(_.ofStr(value));
    return _.mk("var", arg10);
}

export function Feliz_HtmlEngine$1__var_BB573A(_, children) {
    return _.mk("var", children);
}

export function Feliz_HtmlEngine$1__video_BB573A(_, children) {
    return _.mk("video", children);
}

export function Feliz_HtmlEngine$1__wbr_BB573A(_, children) {
    return _.mk("wbr", children);
}

