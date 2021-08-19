import { class_type } from "../../fable-library/Reflection.js";
import { int32ToString } from "../../fable-library/Util.js";
import { replace, join } from "../../fable-library/String.js";
import { map, choose } from "../../fable-library/Seq.js";
import { toString } from "../../fable-library/Date.js";
import { ofArray, fold } from "../../fable-library/List.js";

export class Feliz_AttrEngine$1 {
    constructor(mk, mkBool) {
        this.mk = mk;
        this.mkBool = mkBool;
    }
}

export function Feliz_AttrEngine$1$reflection(gen0) {
    return class_type("Feliz.AttrEngine`1", [gen0], Feliz_AttrEngine$1);
}

export function Feliz_AttrEngine$1_$ctor_22B537B1(mk, mkBool) {
    return new Feliz_AttrEngine$1(mk, mkBool);
}

export function Feliz_AttrEngine$1__custom_Z384F8060(_, key, value) {
    return _.mk(key, value);
}

export function Feliz_AttrEngine$1__accept_Z721C83C5(_, value) {
    return _.mk("accept", value);
}

export function Feliz_AttrEngine$1__acceptCharset_Z721C83C5(_, value) {
    return _.mk("accept-charset", value);
}

export function Feliz_AttrEngine$1__accessKey_Z721C83C5(_, value) {
    return _.mk("accesskey", value);
}

export function Feliz_AttrEngine$1__action_Z721C83C5(_, value) {
    return _.mk("action", value);
}

export function Feliz_AttrEngine$1__alt_Z721C83C5(_, value) {
    return _.mk("alt", value);
}

export function Feliz_AttrEngine$1__amplitude_5E38073B(_, value) {
    return _.mk("amplitude", value.toString());
}

export function Feliz_AttrEngine$1__amplitude_Z524259A4(_, value) {
    return _.mk("amplitude", int32ToString(value));
}

export function Feliz_AttrEngine$1__ariaActiveDescendant_Z721C83C5(_, id) {
    return _.mk("aria-activedescendant", id);
}

export function Feliz_AttrEngine$1__ariaAtomic_Z1FBCCD16(_, value) {
    return _.mkBool("aria-atomic", value);
}

export function Feliz_AttrEngine$1__ariaBusy_Z1FBCCD16(_, value) {
    return _.mkBool("aria-busy", value);
}

export function Feliz_AttrEngine$1__ariaChecked_Z1FBCCD16(_, value) {
    return _.mkBool("aria-checked", value);
}

export function Feliz_AttrEngine$1__ariaControls_Z6B4C8463(_, ...ids) {
    return _.mk("aria-controls", join(" ", ids));
}

export function Feliz_AttrEngine$1__ariaDescribedAt_Z721C83C5(_, uri) {
    return _.mk("aria-describedat", uri);
}

export function Feliz_AttrEngine$1__ariaDescribedBy_Z6B4C8463(_, ...ids) {
    return _.mk("aria-describedby", join(" ", ids));
}

export function Feliz_AttrEngine$1__ariaDisabled_Z1FBCCD16(_, value) {
    return _.mkBool("aria-disabled", value);
}

export function Feliz_AttrEngine$1__ariaExpanded_Z1FBCCD16(_, value) {
    return _.mkBool("aria-expanded", value);
}

export function Feliz_AttrEngine$1__ariaFlowTo_Z6B4C8463(_, ...ids) {
    return _.mk("aria-flowto", join(" ", ids));
}

export function Feliz_AttrEngine$1__ariaGrabbed_Z1FBCCD16(_, value) {
    return _.mkBool("aria-grabbed", value);
}

export function Feliz_AttrEngine$1__ariaHasPopup_Z1FBCCD16(_, value) {
    return _.mkBool("aria-haspopup", value);
}

export function Feliz_AttrEngine$1__ariaHidden_Z1FBCCD16(_, value) {
    return _.mkBool("aria-hidden", value);
}

export function Feliz_AttrEngine$1__ariaInvalid_Z1FBCCD16(_, value) {
    return _.mkBool("aria-invalid", value);
}

export function Feliz_AttrEngine$1__ariaLabel_Z721C83C5(_, value) {
    return _.mk("aria-label", value);
}

export function Feliz_AttrEngine$1__ariaLevel_Z524259A4(_, value) {
    return _.mk("aria-level", int32ToString(value));
}

export function Feliz_AttrEngine$1__ariaLabelledBy_Z6B4C8463(_, ...ids) {
    return _.mk("aria-labelledby", join(" ", ids));
}

export function Feliz_AttrEngine$1__ariaMultiLine_Z1FBCCD16(_, value) {
    return _.mkBool("aria-multiline", value);
}

export function Feliz_AttrEngine$1__ariaMultiSelectable_Z1FBCCD16(_, value) {
    return _.mkBool("aria-multiselectable", value);
}

export function Feliz_AttrEngine$1__ariaOwns_Z6B4C8463(_, ...ids) {
    return _.mk("aria-owns", join(" ", ids));
}

export function Feliz_AttrEngine$1__ariaPressed_Z1FBCCD16(_, value) {
    return _.mkBool("aria-pressed", value);
}

export function Feliz_AttrEngine$1__ariaPosInSet_Z524259A4(_, value) {
    return _.mk("aria-posinset", int32ToString(value));
}

export function Feliz_AttrEngine$1__ariaReadOnly_Z1FBCCD16(_, value) {
    return _.mkBool("aria-readonly", value);
}

export function Feliz_AttrEngine$1__ariaRequired_Z1FBCCD16(_, value) {
    return _.mkBool("aria-required", value);
}

export function Feliz_AttrEngine$1__ariaSelected_Z1FBCCD16(_, value) {
    return _.mkBool("aria-selected", value);
}

export function Feliz_AttrEngine$1__ariaValueMax_5E38073B(_, value) {
    return _.mk("aria-valuemax", value.toString());
}

export function Feliz_AttrEngine$1__ariaValueMax_Z524259A4(_, value) {
    return _.mk("aria-valuemax", int32ToString(value));
}

export function Feliz_AttrEngine$1__ariaValueMin_5E38073B(_, value) {
    return _.mk("aria-valuemin", value.toString());
}

export function Feliz_AttrEngine$1__ariaValueMin_Z524259A4(_, value) {
    return _.mk("aria-valuemin", int32ToString(value));
}

export function Feliz_AttrEngine$1__ariaValueNow_5E38073B(_, value) {
    return _.mk("aria-valuenow", value.toString());
}

export function Feliz_AttrEngine$1__ariaValueNow_Z524259A4(_, value) {
    return _.mk("aria-valuenow", int32ToString(value));
}

export function Feliz_AttrEngine$1__ariaValueText_Z721C83C5(_, value) {
    return _.mk("aria-valuetext", value);
}

export function Feliz_AttrEngine$1__ariaSetSize_Z524259A4(_, value) {
    return _.mk("aria-setsize", int32ToString(value));
}

export function Feliz_AttrEngine$1__async_Z1FBCCD16(_, value) {
    return _.mkBool("async", value);
}

export function Feliz_AttrEngine$1__attributeName_Z721C83C5(_, value) {
    return _.mk("attributeName", value);
}

export function Feliz_AttrEngine$1__autoComplete_Z721C83C5(_, value) {
    return _.mk("autocomplete", value);
}

export function Feliz_AttrEngine$1__autoFocus_Z1FBCCD16(_, value) {
    return _.mkBool("autofocus", value);
}

export function Feliz_AttrEngine$1__autoPlay_Z1FBCCD16(_, value) {
    return _.mkBool("autoplay", value);
}

export function Feliz_AttrEngine$1__azimuth_5E38073B(_, value) {
    return _.mk("azimuth", value.toString());
}

export function Feliz_AttrEngine$1__azimuth_Z524259A4(_, value) {
    return _.mk("azimuth", int32ToString(value));
}

export function Feliz_AttrEngine$1__baseFrequency_5E38073B(_, value) {
    return _.mk("baseFrequency", value.toString());
}

export function Feliz_AttrEngine$1__baseFrequency_Z524259A4(_, value) {
    return _.mk("baseFrequency", int32ToString(value));
}

export function Feliz_AttrEngine$1__baseFrequency_7B00E9A0(_, horizontal, vertical) {
    return _.mk("baseFrequency", (horizontal.toString() + ",") + vertical.toString());
}

export function Feliz_AttrEngine$1__baseFrequency_Z37302880(_, horizontal, vertical) {
    return _.mk("baseFrequency", (int32ToString(horizontal) + ",") + int32ToString(vertical));
}

export function Feliz_AttrEngine$1__begin$0027_Z721C83C5(_, value) {
    return _.mk("begin", value);
}

export function Feliz_AttrEngine$1__bias_5E38073B(_, value) {
    return _.mk("bias", value.toString());
}

export function Feliz_AttrEngine$1__bias_Z524259A4(_, value) {
    return _.mk("bias", int32ToString(value));
}

export function Feliz_AttrEngine$1__by_5E38073B(_, value) {
    return _.mk("by", value.toString());
}

export function Feliz_AttrEngine$1__by_Z524259A4(_, value) {
    return _.mk("by", int32ToString(value));
}

export function Feliz_AttrEngine$1__by_Z721C83C5(_, value) {
    return _.mk("by", value);
}

export function Feliz_AttrEngine$1__capture_Z1FBCCD16(_, value) {
    return _.mkBool("capture", value);
}

export function Feliz_AttrEngine$1__charset_Z721C83C5(_, value) {
    return _.mk("charset", value);
}

export function Feliz_AttrEngine$1__cite_Z721C83C5(_, value) {
    return _.mk("cite", value);
}

export function Feliz_AttrEngine$1__className_Z721C83C5(_, value) {
    return _.mk("class", value);
}

export function Feliz_AttrEngine$1__className_5D66A394(_, names) {
    return _.mk("class", join(" ", names));
}

export function Feliz_AttrEngine$1__classes_5D66A394(_, names) {
    return _.mk("class", join(" ", names));
}

export function Feliz_AttrEngine$1__classes_Z5EF0466F(_, names) {
    return _.mk("class", join(" ", choose((_arg1) => {
        if (_arg1[0]) {
            return _arg1[1];
        }
        else {
            return void 0;
        }
    }, names)));
}

export function Feliz_AttrEngine$1__cols_Z524259A4(_, value) {
    return _.mk("cols", int32ToString(value));
}

export function Feliz_AttrEngine$1__colSpan_Z524259A4(_, value) {
    return _.mk("colspan", int32ToString(value));
}

export function Feliz_AttrEngine$1__content_Z721C83C5(_, value) {
    return _.mk("content", value);
}

export function Feliz_AttrEngine$1__contentEditable_Z1FBCCD16(_, value) {
    return _.mkBool("contenteditable", value);
}

export function Feliz_AttrEngine$1__controls_Z1FBCCD16(_, value) {
    return _.mkBool("controls", value);
}

export function Feliz_AttrEngine$1__cx_Z445F6BAF(_, value) {
    return _.mk("cx", value);
}

export function Feliz_AttrEngine$1__cx_Z524259A4(_, value) {
    return _.mk("cx", int32ToString(value));
}

export function Feliz_AttrEngine$1__cy_Z445F6BAF(_, value) {
    return _.mk("cy", value);
}

export function Feliz_AttrEngine$1__cy_Z524259A4(_, value) {
    return _.mk("cy", int32ToString(value));
}

export function Feliz_AttrEngine$1__d_Z721C83C5(_, path) {
    return _.mk("d", path);
}

export function Feliz_AttrEngine$1__dateTime_Z721C83C5(_, value) {
    return _.mk("datetime", value);
}

export function Feliz_AttrEngine$1__defer_Z1FBCCD16(_, value) {
    return _.mkBool("defer", value);
}

export function Feliz_AttrEngine$1__diffuseConstant_5E38073B(_, value) {
    return _.mk("diffuseConstant", value.toString());
}

export function Feliz_AttrEngine$1__diffuseConstant_Z524259A4(_, value) {
    return _.mk("diffuseConstant", int32ToString(value));
}

export function Feliz_AttrEngine$1__dirName_Z721C83C5(_, value) {
    return _.mk("dirName", value);
}

export function Feliz_AttrEngine$1__disabled_Z1FBCCD16(_, value) {
    return _.mkBool("disabled", value);
}

export function Feliz_AttrEngine$1__divisor_5E38073B(_, value) {
    return _.mk("divisor", value.toString());
}

export function Feliz_AttrEngine$1__divisor_Z524259A4(_, value) {
    return _.mk("divisor", int32ToString(value));
}

export function Feliz_AttrEngine$1__download_Z1FBCCD16(_, value) {
    return _.mkBool("download", value);
}

export function Feliz_AttrEngine$1__draggable_Z1FBCCD16(_, value) {
    return _.mkBool("draggable", value);
}

export function Feliz_AttrEngine$1__dx_5E38073B(_, value) {
    return _.mk("dx", value.toString());
}

export function Feliz_AttrEngine$1__dx_Z524259A4(_, value) {
    return _.mk("dx", int32ToString(value));
}

export function Feliz_AttrEngine$1__dy_5E38073B(_, value) {
    return _.mk("dy", value.toString());
}

export function Feliz_AttrEngine$1__dy_Z524259A4(_, value) {
    return _.mk("dy", int32ToString(value));
}

export function Feliz_AttrEngine$1__elevation_5E38073B(_, value) {
    return _.mk("elevation", value.toString());
}

export function Feliz_AttrEngine$1__elevation_Z524259A4(_, value) {
    return _.mk("elevation", int32ToString(value));
}

export function Feliz_AttrEngine$1__end$0027_Z721C83C5(_, value) {
    return _.mk("end", value);
}

export function Feliz_AttrEngine$1__end$0027_5D66A394(_, values) {
    return _.mk("end", join(";", values));
}

export function Feliz_AttrEngine$1__exponent_5E38073B(_, value) {
    return _.mk("exponent", value.toString());
}

export function Feliz_AttrEngine$1__exponent_Z524259A4(_, value) {
    return _.mk("exponent", int32ToString(value));
}

export function Feliz_AttrEngine$1__fillOpacity_5E38073B(_, value) {
    return _.mk("fill-opacity", value.toString());
}

export function Feliz_AttrEngine$1__fillOpacity_Z524259A4(_, value) {
    return _.mk("fill-opacity", int32ToString(value));
}

export function Feliz_AttrEngine$1__fontSize_5E38073B(_, value) {
    return _.mk("font-size", value.toString());
}

export function Feliz_AttrEngine$1__fontSize_Z524259A4(_, value) {
    return _.mk("font-size", int32ToString(value));
}

export function Feliz_AttrEngine$1__for$0027_Z721C83C5(_, value) {
    return _.mk("for", value);
}

export function Feliz_AttrEngine$1__for$0027_30810B50(_, ids) {
    return _.mk("for", join(" ", ids));
}

export function Feliz_AttrEngine$1__form_Z721C83C5(_, value) {
    return _.mk("form", value);
}

export function Feliz_AttrEngine$1__from_5E38073B(_, value) {
    return _.mk("from", value.toString());
}

export function Feliz_AttrEngine$1__from_508CA214(_, values) {
    return _.mk("from", join(" ", map((arg00) => arg00.toString(), values)));
}

export function Feliz_AttrEngine$1__from_Z524259A4(_, value) {
    return _.mk("from", int32ToString(value));
}

export function Feliz_AttrEngine$1__from_Z5D8246D(_, values) {
    return _.mk("from", join(" ", map((arg00) => int32ToString(arg00), values)));
}

export function Feliz_AttrEngine$1__from_Z721C83C5(_, value) {
    return _.mk("from", value);
}

export function Feliz_AttrEngine$1__from_5D66A394(_, values) {
    return _.mk("from", join(" ", values));
}

export function Feliz_AttrEngine$1__fr_Z524259A4(_, value) {
    return _.mk("fr", int32ToString(value));
}

export function Feliz_AttrEngine$1__fr_Z445F6BAF(_, value) {
    return _.mk("fr", value);
}

export function Feliz_AttrEngine$1__fx_Z524259A4(_, value) {
    return _.mk("fx", int32ToString(value));
}

export function Feliz_AttrEngine$1__fx_Z445F6BAF(_, value) {
    return _.mk("fx", value);
}

export function Feliz_AttrEngine$1__fy_Z524259A4(_, value) {
    return _.mk("fy", int32ToString(value));
}

export function Feliz_AttrEngine$1__fy_Z445F6BAF(_, value) {
    return _.mk("fy", value);
}

export function Feliz_AttrEngine$1__gradientTransform_124E45BF(_, transform) {
    return _.mk("gradientTransform", transform);
}

export function Feliz_AttrEngine$1__gradientTransform_45017D10(_, transforms) {
    return _.mk("gradientTransform", join(" ", map((arg00) => arg00, transforms)));
}

export function Feliz_AttrEngine$1__hidden_Z1FBCCD16(_, value) {
    return _.mkBool("hidden", value);
}

export function Feliz_AttrEngine$1__height_Z445F6BAF(_, value) {
    return _.mk("height", value);
}

export function Feliz_AttrEngine$1__height_Z524259A4(_, value) {
    return _.mk("height", int32ToString(value));
}

export function Feliz_AttrEngine$1__high_5E38073B(_, value) {
    return _.mk("high", value.toString());
}

export function Feliz_AttrEngine$1__high_Z524259A4(_, value) {
    return _.mk("high", int32ToString(value));
}

export function Feliz_AttrEngine$1__href_Z721C83C5(_, value) {
    return _.mk("href", value);
}

export function Feliz_AttrEngine$1__hrefLang_Z721C83C5(_, value) {
    return _.mk("hreflang", value);
}

export function Feliz_AttrEngine$1__htmlFor_Z721C83C5(_, value) {
    return _.mk("for", value);
}

export function Feliz_AttrEngine$1__id_Z524259A4(_, value) {
    return _.mk("id", int32ToString(value));
}

export function Feliz_AttrEngine$1__id_Z721C83C5(_, value) {
    return _.mk("id", value);
}

export function Feliz_AttrEngine$1__integrity_Z721C83C5(_, value) {
    return _.mk("integrity", value);
}

export function Feliz_AttrEngine$1__intercept_5E38073B(_, value) {
    return _.mk("intercept", value.toString());
}

export function Feliz_AttrEngine$1__intercept_Z524259A4(_, value) {
    return _.mk("intercept", int32ToString(value));
}

export function Feliz_AttrEngine$1__isChecked_Z1FBCCD16(_, value) {
    return _.mkBool("checked", value);
}

export function Feliz_AttrEngine$1__isOpen_Z1FBCCD16(_, value) {
    return _.mkBool("open", value);
}

export function Feliz_AttrEngine$1__k1_5E38073B(_, value) {
    return _.mk("k1", value.toString());
}

export function Feliz_AttrEngine$1__k1_Z524259A4(_, value) {
    return _.mk("k1", int32ToString(value));
}

export function Feliz_AttrEngine$1__k2_5E38073B(_, value) {
    return _.mk("k2", value.toString());
}

export function Feliz_AttrEngine$1__k2_Z524259A4(_, value) {
    return _.mk("k2", int32ToString(value));
}

export function Feliz_AttrEngine$1__k3_5E38073B(_, value) {
    return _.mk("k3", value.toString());
}

export function Feliz_AttrEngine$1__k3_Z524259A4(_, value) {
    return _.mk("k3", int32ToString(value));
}

export function Feliz_AttrEngine$1__k4_5E38073B(_, value) {
    return _.mk("k4", value.toString());
}

export function Feliz_AttrEngine$1__k4_Z524259A4(_, value) {
    return _.mk("k4", int32ToString(value));
}

export function Feliz_AttrEngine$1__kernelMatrix_508CA214(_, values) {
    return _.mk("kernelMatrix", join(" ", map((arg00) => arg00.toString(), values)));
}

export function Feliz_AttrEngine$1__kernelMatrix_Z5D8246D(_, values) {
    return _.mk("kernelMatrix", join(" ", map((arg00) => int32ToString(arg00), values)));
}

export function Feliz_AttrEngine$1__keyPoints_508CA214(_, values) {
    return _.mk("keyPoints", join(";", map((arg00) => arg00.toString(), values)));
}

export function Feliz_AttrEngine$1__keyTimes_508CA214(_, values) {
    return _.mk("keyTimes", join(";", map((arg00) => arg00.toString(), values)));
}

export function Feliz_AttrEngine$1__lang_Z721C83C5(_, value) {
    return _.mk("lang", value);
}

export function Feliz_AttrEngine$1__lightingColor_Z721C83C5(_, value) {
    return _.mk("lighting-color", value);
}

export function Feliz_AttrEngine$1__limitingConeAngle_5E38073B(_, value) {
    return _.mk("limitingConeAngle", value.toString());
}

export function Feliz_AttrEngine$1__limitingConeAngle_Z524259A4(_, value) {
    return _.mk("limitingConeAngle", int32ToString(value));
}

export function Feliz_AttrEngine$1__loop_Z1FBCCD16(_, value) {
    return _.mkBool("loop", value);
}

export function Feliz_AttrEngine$1__low_5E38073B(_, value) {
    return _.mk("low", value.toString());
}

export function Feliz_AttrEngine$1__low_Z524259A4(_, value) {
    return _.mk("low", int32ToString(value));
}

export function Feliz_AttrEngine$1__max_5E38073B(_, value) {
    return _.mk("max", value.toString());
}

export function Feliz_AttrEngine$1__max_Z524259A4(_, value) {
    return _.mk("max", int32ToString(value));
}

export function Feliz_AttrEngine$1__max_7F9DDECF(_, value) {
    return _.mk("max", toString(value, "yyyy-MM-dd"));
}

export function Feliz_AttrEngine$1__maxLength_Z524259A4(_, value) {
    return _.mk("maxlength", int32ToString(value));
}

export function Feliz_AttrEngine$1__media_Z721C83C5(_, value) {
    return _.mk("media", value);
}

export function Feliz_AttrEngine$1__method_Z721C83C5(_, value) {
    return _.mk("method", value);
}

export function Feliz_AttrEngine$1__min_5E38073B(_, value) {
    return _.mk("min", value.toString());
}

export function Feliz_AttrEngine$1__min_Z524259A4(_, value) {
    return _.mk("min", int32ToString(value));
}

export function Feliz_AttrEngine$1__min_7F9DDECF(_, value) {
    return _.mk("min", toString(value, "yyyy-MM-dd"));
}

export function Feliz_AttrEngine$1__minLength_Z524259A4(_, value) {
    return _.mk("minlength", int32ToString(value));
}

export function Feliz_AttrEngine$1__multiple_Z1FBCCD16(_, value) {
    return _.mkBool("multiple", value);
}

export function Feliz_AttrEngine$1__muted_Z1FBCCD16(_, value) {
    return _.mkBool("muted", value);
}

export function Feliz_AttrEngine$1__name_Z721C83C5(_, value) {
    return _.mk("name", value);
}

export function Feliz_AttrEngine$1__nomodule_Z1FBCCD16(_, value) {
    return _.mkBool("nomodule", value);
}

export function Feliz_AttrEngine$1__nonce_Z721C83C5(_, value) {
    return _.mk("nonce", value);
}

export function Feliz_AttrEngine$1__numOctaves_Z524259A4(_, value) {
    return _.mk("numOctaves", int32ToString(value));
}

export function Feliz_AttrEngine$1__offset_Z445F6BAF(_, value) {
    return _.mk("offset", value);
}

export function Feliz_AttrEngine$1__offset_Z524259A4(_, value) {
    return _.mk("offset", int32ToString(value));
}

export function Feliz_AttrEngine$1__optimum_5E38073B(_, value) {
    return _.mk("optimum", value.toString());
}

export function Feliz_AttrEngine$1__optimum_Z524259A4(_, value) {
    return _.mk("optimum", int32ToString(value));
}

export function Feliz_AttrEngine$1__order_Z524259A4(_, value) {
    return _.mk("order", int32ToString(value));
}

export function Feliz_AttrEngine$1__order_Z5D8246D(_, values) {
    return _.mk("order", join(" ", map((arg00) => int32ToString(arg00), values)));
}

export function Feliz_AttrEngine$1__overlinePosition_5E38073B(_, value) {
    return _.mk("overline-position", value.toString());
}

export function Feliz_AttrEngine$1__overlinePosition_Z524259A4(_, value) {
    return _.mk("overline-position", int32ToString(value));
}

export function Feliz_AttrEngine$1__overlineThickness_5E38073B(_, value) {
    return _.mk("overline-thickness", value.toString());
}

export function Feliz_AttrEngine$1__overlineThickness_Z524259A4(_, value) {
    return _.mk("overline-thickness", int32ToString(value));
}

export function Feliz_AttrEngine$1__path_Z721C83C5(_, path) {
    return _.mk("path", path);
}

export function Feliz_AttrEngine$1__part_Z721C83C5(_, value) {
    return _.mk("part", value);
}

export function Feliz_AttrEngine$1__part_30810B50(_, values) {
    return _.mk("part", join(" ", values));
}

export function Feliz_AttrEngine$1__pathLength_Z524259A4(_, value) {
    return _.mk("pathLength", int32ToString(value));
}

export function Feliz_AttrEngine$1__pattern_Z721C83C5(_, value) {
    return _.mk("pattern", value);
}

export function Feliz_AttrEngine$1__patternTransform_124E45BF(_, transform) {
    return _.mk("patternTransform", transform);
}

export function Feliz_AttrEngine$1__patternTransform_45017D10(_, transforms) {
    return _.mk("patternTransform", join(" ", map((arg00) => arg00, transforms)));
}

export function Feliz_AttrEngine$1__placeholder_Z721C83C5(_, value) {
    return _.mk("placeholder", value);
}

export function Feliz_AttrEngine$1__playsInline_Z1FBCCD16(_, value) {
    return _.mkBool("playsinline", value);
}

export function Feliz_AttrEngine$1__ping_Z721C83C5(_, value) {
    return _.mk("ping", value);
}

export function Feliz_AttrEngine$1__ping_30810B50(_, urls) {
    return _.mk("ping", join(" ", urls));
}

export function Feliz_AttrEngine$1__points_Z721C83C5(_, coordinates) {
    return _.mk("points", coordinates);
}

export function Feliz_AttrEngine$1__pointsAtX_5E38073B(_, value) {
    return _.mk("pointsAtX", value.toString());
}

export function Feliz_AttrEngine$1__pointsAtX_Z524259A4(_, value) {
    return _.mk("pointsAtX", int32ToString(value));
}

export function Feliz_AttrEngine$1__pointsAtY_5E38073B(_, value) {
    return _.mk("pointsAtY", value.toString());
}

export function Feliz_AttrEngine$1__pointsAtY_Z524259A4(_, value) {
    return _.mk("pointsAtY", int32ToString(value));
}

export function Feliz_AttrEngine$1__pointsAtZ_5E38073B(_, value) {
    return _.mk("pointsAtZ", value.toString());
}

export function Feliz_AttrEngine$1__pointsAtZ_Z524259A4(_, value) {
    return _.mk("pointsAtZ", int32ToString(value));
}

export function Feliz_AttrEngine$1__preserveAlpha_Z1FBCCD16(_, value) {
    return _.mkBool("preserveAlpha", value);
}

export function Feliz_AttrEngine$1__poster_Z721C83C5(_, value) {
    return _.mk("poster", value);
}

export function Feliz_AttrEngine$1__r_Z445F6BAF(_, value) {
    return _.mk("r", value);
}

export function Feliz_AttrEngine$1__r_Z524259A4(_, value) {
    return _.mk("r", int32ToString(value));
}

export function Feliz_AttrEngine$1__radius_5E38073B(_, value) {
    return _.mk("radius", value.toString());
}

export function Feliz_AttrEngine$1__radius_Z524259A4(_, value) {
    return _.mk("radius", int32ToString(value));
}

export function Feliz_AttrEngine$1__radius_7B00E9A0(_, xRadius, yRadius) {
    return _.mk("radius", (xRadius.toString() + ",") + yRadius.toString());
}

export function Feliz_AttrEngine$1__radius_Z37302880(_, xRadius, yRadius) {
    return _.mk("radius", (int32ToString(xRadius) + ",") + int32ToString(yRadius));
}

export function Feliz_AttrEngine$1__readOnly_Z1FBCCD16(_, value) {
    return _.mkBool("readOnly", value);
}

export function Feliz_AttrEngine$1__rel_Z721C83C5(_, value) {
    return _.mk("rel", value);
}

export function Feliz_AttrEngine$1__required_Z1FBCCD16(_, value) {
    return _.mkBool("required", value);
}

export function Feliz_AttrEngine$1__result_Z721C83C5(_, value) {
    return _.mk("result", value);
}

export function Feliz_AttrEngine$1__role_Z6B4C8463(_, ...roles) {
    return _.mk("role", join(" ", roles));
}

export function Feliz_AttrEngine$1__rows_Z524259A4(_, value) {
    return _.mk("rows", int32ToString(value));
}

export function Feliz_AttrEngine$1__rowSpan_Z524259A4(_, value) {
    return _.mk("rowspan", int32ToString(value));
}

export function Feliz_AttrEngine$1__rx_Z445F6BAF(_, value) {
    return _.mk("rx", value);
}

export function Feliz_AttrEngine$1__rx_Z524259A4(_, value) {
    return _.mk("rx", int32ToString(value));
}

export function Feliz_AttrEngine$1__ry_Z445F6BAF(_, value) {
    return _.mk("ry", value);
}

export function Feliz_AttrEngine$1__ry_Z524259A4(_, value) {
    return _.mk("ry", int32ToString(value));
}

export function Feliz_AttrEngine$1__sandbox_30810B50(_, values) {
    return _.mk("sandbox", join(" ", values));
}

export function Feliz_AttrEngine$1__scale_5E38073B(_, value) {
    return _.mk("scale", value.toString());
}

export function Feliz_AttrEngine$1__scale_Z524259A4(_, value) {
    return _.mk("scale", int32ToString(value));
}

export function Feliz_AttrEngine$1__seed_5E38073B(_, value) {
    return _.mk("seed", value.toString());
}

export function Feliz_AttrEngine$1__seed_Z524259A4(_, value) {
    return _.mk("seed", int32ToString(value));
}

export function Feliz_AttrEngine$1__selected_Z1FBCCD16(_, value) {
    return _.mkBool("selected", value);
}

export function Feliz_AttrEngine$1__selectionStart_Z524259A4(_, value) {
    return _.mk("selectionStart", int32ToString(value));
}

export function Feliz_AttrEngine$1__selectionEnd_Z524259A4(_, value) {
    return _.mk("selectionStart", int32ToString(value));
}

export function Feliz_AttrEngine$1__size_Z524259A4(_, value) {
    return _.mk("size", int32ToString(value));
}

export function Feliz_AttrEngine$1__sizes_Z721C83C5(_, value) {
    return _.mk("sizes", value);
}

export function Feliz_AttrEngine$1__spam_Z524259A4(_, value) {
    return _.mk("span", int32ToString(value));
}

export function Feliz_AttrEngine$1__spellcheck_Z1FBCCD16(_, value) {
    return _.mkBool("spellcheck", value);
}

export function Feliz_AttrEngine$1__specularConstant_5E38073B(_, value) {
    return _.mk("specularConstant", value.toString());
}

export function Feliz_AttrEngine$1__specularConstant_Z524259A4(_, value) {
    return _.mk("specularConstant", int32ToString(value));
}

export function Feliz_AttrEngine$1__specularExponent_5E38073B(_, value) {
    return _.mk("specularExponent", value.toString());
}

export function Feliz_AttrEngine$1__specularExponent_Z524259A4(_, value) {
    return _.mk("specularExponent", int32ToString(value));
}

export function Feliz_AttrEngine$1__src_Z721C83C5(_, value) {
    return _.mk("src", value);
}

export function Feliz_AttrEngine$1__srcLang_Z721C83C5(_, value) {
    return _.mk("srclang", value);
}

export function Feliz_AttrEngine$1__srcset_Z721C83C5(_, value) {
    return _.mk("srcset", value);
}

export function Feliz_AttrEngine$1__start_Z721C83C5(_, value) {
    return _.mk("start", value);
}

export function Feliz_AttrEngine$1__stdDeviation_5E38073B(_, value) {
    return _.mk("stdDeviation", value.toString());
}

export function Feliz_AttrEngine$1__stdDeviation_Z524259A4(_, value) {
    return _.mk("stdDeviation", int32ToString(value));
}

export function Feliz_AttrEngine$1__stdDeviation_7B00E9A0(_, xAxis, yAxis) {
    return _.mk("stdDeviation", (xAxis.toString() + ",") + yAxis.toString());
}

export function Feliz_AttrEngine$1__stdDeviation_Z37302880(_, xAxis, yAxis) {
    return _.mk("stdDeviation", (int32ToString(xAxis) + ",") + int32ToString(yAxis));
}

export function Feliz_AttrEngine$1__step_5E38073B(_, value) {
    return _.mk("step", value.toString());
}

export function Feliz_AttrEngine$1__step_Z524259A4(_, value) {
    return _.mk("step", int32ToString(value));
}

export function Feliz_AttrEngine$1__slot_Z721C83C5(_, value) {
    return _.mk("slot", value);
}

export function Feliz_AttrEngine$1__stopColor_Z721C83C5(_, value) {
    return _.mk("stop-color", value);
}

export function Feliz_AttrEngine$1__stopOpacity_5E38073B(_, value) {
    return _.mk("stop-opacity", value.toString());
}

export function Feliz_AttrEngine$1__stopOpacity_Z524259A4(_, value) {
    return _.mk("stop-opacity", int32ToString(value));
}

export function Feliz_AttrEngine$1__strikethroughPosition_5E38073B(_, value) {
    return _.mk("strikethrough-position", value.toString());
}

export function Feliz_AttrEngine$1__strikethroughPosition_Z524259A4(_, value) {
    return _.mk("strikethrough-position", int32ToString(value));
}

export function Feliz_AttrEngine$1__strikethroughThickness_5E38073B(_, value) {
    return _.mk("strikethrough-thickness", value.toString());
}

export function Feliz_AttrEngine$1__strikethroughThickness_Z524259A4(_, value) {
    return _.mk("strikethrough-thickness", int32ToString(value));
}

export function Feliz_AttrEngine$1__stroke_Z721C83C5(_, color) {
    return _.mk("stroke", color);
}

export function Feliz_AttrEngine$1__strokeWidth_Z445F6BAF(_, value) {
    return _.mk("stroke-width", value);
}

export function Feliz_AttrEngine$1__strokeWidth_Z524259A4(_, value) {
    return _.mk("stroke-width", int32ToString(value) + "px");
}

export function Feliz_AttrEngine$1__style_Z721C83C5(_, css) {
    return _.mk("style", css);
}

export function Feliz_AttrEngine$1__surfaceScale_5E38073B(_, value) {
    return _.mk("surfaceScale", value.toString());
}

export function Feliz_AttrEngine$1__surfaceScale_Z524259A4(_, value) {
    return _.mk("surfaceScale", int32ToString(value));
}

export function Feliz_AttrEngine$1__systemLanguage_Z721C83C5(_, value) {
    return _.mk("systemLanguage", value);
}

export function Feliz_AttrEngine$1__tabIndex_Z524259A4(_, index) {
    return _.mk("tabindex", int32ToString(index));
}

export function Feliz_AttrEngine$1__target_Z721C83C5(_, frameName) {
    return _.mk("target", frameName);
}

export function Feliz_AttrEngine$1__targetX_Z524259A4(_, index) {
    return _.mk("targetX", int32ToString(index));
}

export function Feliz_AttrEngine$1__targetY_Z524259A4(_, index) {
    return _.mk("targetY", int32ToString(index));
}

export function Feliz_AttrEngine$1__testId_Z721C83C5(_, value) {
    return _.mk("data-testid", value);
}

export function Feliz_AttrEngine$1__textLength_Z445F6BAF(_, value) {
    return _.mk("textLength", value);
}

export function Feliz_AttrEngine$1__textLength_Z524259A4(_, value) {
    return _.mk("textLength", int32ToString(value));
}

export function Feliz_AttrEngine$1__title_Z721C83C5(_, value) {
    return _.mk("title", value);
}

export function Feliz_AttrEngine$1__to$0027_5E38073B(_, value) {
    return _.mk("to", value.toString());
}

export function Feliz_AttrEngine$1__to$0027_508CA214(_, values) {
    return _.mk("to", join(" ", map((arg00) => arg00.toString(), values)));
}

export function Feliz_AttrEngine$1__to$0027_Z524259A4(_, value) {
    return _.mk("to", int32ToString(value));
}

export function Feliz_AttrEngine$1__to$0027_Z5D8246D(_, values) {
    return _.mk("to", join(" ", map((arg00) => int32ToString(arg00), values)));
}

export function Feliz_AttrEngine$1__to$0027_Z721C83C5(_, value) {
    return _.mk("to", value);
}

export function Feliz_AttrEngine$1__to$0027_5D66A394(_, values) {
    return _.mk("to", join(" ", values));
}

export function Feliz_AttrEngine$1__transform_124E45BF(_, transform) {
    return _.mk("transform", transform);
}

export function Feliz_AttrEngine$1__transform_45017D10(_, transforms) {
    return _.mk("transform", join(" ", map((s) => fold((ins, toReplace) => replace(ins, toReplace, ""), s, ofArray(["px", "deg"])), map((arg00) => arg00, transforms))));
}

export function Feliz_AttrEngine$1__type$0027_Z721C83C5(_, value) {
    return _.mk("type", value);
}

export function Feliz_AttrEngine$1__underlinePosition_5E38073B(_, value) {
    return _.mk("underline-position", value.toString());
}

export function Feliz_AttrEngine$1__underlinePosition_Z524259A4(_, value) {
    return _.mk("underline-position", int32ToString(value));
}

export function Feliz_AttrEngine$1__underlineThickness_5E38073B(_, value) {
    return _.mk("underline-thickness", value.toString());
}

export function Feliz_AttrEngine$1__underlineThickness_Z524259A4(_, value) {
    return _.mk("underline-thickness", int32ToString(value));
}

export function Feliz_AttrEngine$1__usemap_Z721C83C5(_, value) {
    return _.mk("usemap", value);
}

export function Feliz_AttrEngine$1__value_Z721C83C5(_, value) {
    return _.mk("value", value);
}

export function Feliz_AttrEngine$1__values_Z721C83C5(_, value) {
    return _.mk("values", value);
}

export function Feliz_AttrEngine$1__width_Z445F6BAF(_, value) {
    return _.mk("width", value);
}

export function Feliz_AttrEngine$1__width_Z524259A4(_, value) {
    return _.mk("width", int32ToString(value));
}

export function Feliz_AttrEngine$1__x_Z445F6BAF(_, value) {
    return _.mk("x", value);
}

export function Feliz_AttrEngine$1__x_Z524259A4(_, value) {
    return _.mk("x", int32ToString(value));
}

export function Feliz_AttrEngine$1__x1_Z445F6BAF(_, value) {
    return _.mk("x1", value);
}

export function Feliz_AttrEngine$1__x1_Z524259A4(_, value) {
    return _.mk("x1", int32ToString(value));
}

export function Feliz_AttrEngine$1__x2_Z445F6BAF(_, value) {
    return _.mk("x2", value);
}

export function Feliz_AttrEngine$1__x2_Z524259A4(_, value) {
    return _.mk("x2", int32ToString(value));
}

export function Feliz_AttrEngine$1__xmlns_Z721C83C5(_, value) {
    return _.mk("xmlns", value);
}

export function Feliz_AttrEngine$1__y_Z445F6BAF(_, value) {
    return _.mk("y", value);
}

export function Feliz_AttrEngine$1__y_Z524259A4(_, value) {
    return _.mk("y", int32ToString(value));
}

export function Feliz_AttrEngine$1__y1_Z445F6BAF(_, value) {
    return _.mk("y1", value);
}

export function Feliz_AttrEngine$1__y1_Z524259A4(_, value) {
    return _.mk("y1", int32ToString(value));
}

export function Feliz_AttrEngine$1__y2_Z445F6BAF(_, value) {
    return _.mk("y2", value);
}

export function Feliz_AttrEngine$1__y2_Z524259A4(_, value) {
    return _.mk("y2", int32ToString(value));
}

export function Feliz_AttrEngine$1__z_Z445F6BAF(_, value) {
    return _.mk("z", value);
}

export function Feliz_AttrEngine$1__z_Z524259A4(_, value) {
    return _.mk("z", int32ToString(value));
}

export function Feliz_AttrEngine$1__get_accumulateNone(_) {
    return _.mk("accumulate", "none");
}

export function Feliz_AttrEngine$1__get_accumulateSum(_) {
    return _.mk("accumulate", "sum");
}

export function Feliz_AttrEngine$1__get_additiveReplace(_) {
    return _.mk("additive", "replace");
}

export function Feliz_AttrEngine$1__get_additiveSum(_) {
    return _.mk("additive", "sum");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineAlphabetic(_) {
    return _.mk("alignment-baseline", "alphabetic");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineBaseline(_) {
    return _.mk("alignment-baseline", "baseline");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineBottom(_) {
    return _.mk("alignment-baseline", "bottom");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineCenter(_) {
    return _.mk("alignment-baseline", "center");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineCentral(_) {
    return _.mk("alignment-baseline", "central");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineHanging(_) {
    return _.mk("alignment-baseline", "hanging");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineIdeographic(_) {
    return _.mk("alignment-baseline", "ideographic");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineMathematical(_) {
    return _.mk("alignment-baseline", "mathematical");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineMiddle(_) {
    return _.mk("alignment-baseline", "middle");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineTextAfterEdge(_) {
    return _.mk("alignment-baseline", "text-after-edge");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineTextBeforeEdge(_) {
    return _.mk("alignment-baseline", "text-before-edge");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineTextBottom(_) {
    return _.mk("alignment-baseline", "text-bottom");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineTextTop(_) {
    return _.mk("alignment-baseline", "text-top");
}

export function Feliz_AttrEngine$1__get_alignmentBaselineTop(_) {
    return _.mk("alignment-baseline", "top");
}

export function Feliz_AttrEngine$1__get_allowAccelerometer(_) {
    return _.mk("allow", "accelerometer");
}

export function Feliz_AttrEngine$1__get_allowAmbientLightSensor(_) {
    return _.mk("allow", "ambient-light-sensor");
}

export function Feliz_AttrEngine$1__get_allowAutoplay(_) {
    return _.mk("allow", "autoplay");
}

export function Feliz_AttrEngine$1__get_allowBattery(_) {
    return _.mk("allow", "battery");
}

export function Feliz_AttrEngine$1__get_allowCamera(_) {
    return _.mk("allow", "camera");
}

export function Feliz_AttrEngine$1__get_allowDisplayCapture(_) {
    return _.mk("allow", "display-capture");
}

export function Feliz_AttrEngine$1__get_allowDocumentDomain(_) {
    return _.mk("allow", "document-domain");
}

export function Feliz_AttrEngine$1__get_allowEncryptedMedia(_) {
    return _.mk("allow", "encrypted-media");
}

export function Feliz_AttrEngine$1__get_allowExecutionWhileNotRendered(_) {
    return _.mk("allow", "execution-while-not-rendered");
}

export function Feliz_AttrEngine$1__get_allowExecutionWhileOutOfViewport(_) {
    return _.mk("allow", "execution-while-out-of-viewport");
}

export function Feliz_AttrEngine$1__get_allowFullscreen(_) {
    return _.mk("allow", "fullscreen");
}

export function Feliz_AttrEngine$1__get_allowGeolocation(_) {
    return _.mk("allow", "geolocation");
}

export function Feliz_AttrEngine$1__get_allowGyroscope(_) {
    return _.mk("allow", "gyroscope");
}

export function Feliz_AttrEngine$1__get_allowLayoutAnimations(_) {
    return _.mk("allow", "layout-animations");
}

export function Feliz_AttrEngine$1__get_allowLegacyImageFormats(_) {
    return _.mk("allow", "legacy-image-formats");
}

export function Feliz_AttrEngine$1__get_allowMagnetometer(_) {
    return _.mk("allow", "magnetometer");
}

export function Feliz_AttrEngine$1__get_allowMicrophone(_) {
    return _.mk("allow", "microphone");
}

export function Feliz_AttrEngine$1__get_allowMidi(_) {
    return _.mk("allow", "midi");
}

export function Feliz_AttrEngine$1__get_allowNavigationOverride(_) {
    return _.mk("allow", "navigation-override");
}

export function Feliz_AttrEngine$1__get_allowOversizedImages(_) {
    return _.mk("allow", "oversized-images");
}

export function Feliz_AttrEngine$1__get_allowPayment(_) {
    return _.mk("allow", "payment");
}

export function Feliz_AttrEngine$1__get_allowPictureInPicture(_) {
    return _.mk("allow", "picture-in-picture");
}

export function Feliz_AttrEngine$1__get_allowPublickeyCredentials(_) {
    return _.mk("allow", "publickey-credentials");
}

export function Feliz_AttrEngine$1__get_allowSyncXhr(_) {
    return _.mk("allow", "sync-xhr");
}

export function Feliz_AttrEngine$1__get_allowUsb(_) {
    return _.mk("allow", "usb");
}

export function Feliz_AttrEngine$1__get_allowWakeLock(_) {
    return _.mk("allow", "wake-lock");
}

export function Feliz_AttrEngine$1__get_allowXrSpatialTracking(_) {
    return _.mk("allow", "xr-spatial-tracking");
}

export function Feliz_AttrEngine$1__get_ariaAutocompleteBoth(_) {
    return _.mk("aria-autocomplete", "both");
}

export function Feliz_AttrEngine$1__get_ariaAutocompleteInlinedAfterCaret(_) {
    return _.mk("aria-autocomplete", "inline");
}

export function Feliz_AttrEngine$1__get_ariaAutocompleteList(_) {
    return _.mk("aria-autocomplete", "list");
}

export function Feliz_AttrEngine$1__get_ariaAutocompleteNone(_) {
    return _.mk("aria-autocomplete", "none");
}

export function Feliz_AttrEngine$1__get_ariaCheckedMixed(_) {
    return _.mk("aria-checked", "mixed");
}

export function Feliz_AttrEngine$1__get_ariaDropEffectCopy(_) {
    return _.mk("aria-dropeffect", "copy");
}

export function Feliz_AttrEngine$1__get_ariaDropEffectExecute(_) {
    return _.mk("aria-dropeffect", "execute");
}

export function Feliz_AttrEngine$1__get_ariaDropEffectLink(_) {
    return _.mk("aria-dropeffect", "link");
}

export function Feliz_AttrEngine$1__get_ariaDropEffectMove(_) {
    return _.mk("aria-dropeffect", "move");
}

export function Feliz_AttrEngine$1__get_ariaDropEffectNone(_) {
    return _.mk("aria-dropeffect", "none");
}

export function Feliz_AttrEngine$1__get_ariaDropEffectPopup(_) {
    return _.mk("aria-dropeffect", "popup");
}

export function Feliz_AttrEngine$1__get_ariaInvalidGrammar(_) {
    return _.mk("aria-invalid", "grammar");
}

export function Feliz_AttrEngine$1__get_ariaInvalidSpelling(_) {
    return _.mk("aria-invalid", "spelling");
}

export function Feliz_AttrEngine$1__get_ariaLiveAssertive(_) {
    return _.mk("aria-live", "assertive");
}

export function Feliz_AttrEngine$1__get_ariaLiveOff(_) {
    return _.mk("aria-live", "off");
}

export function Feliz_AttrEngine$1__get_ariaLivePolite(_) {
    return _.mk("aria-live", "polite");
}

export function Feliz_AttrEngine$1__get_ariaOrientationHorizontal(_) {
    return _.mk("aria-orientation", "horizontal");
}

export function Feliz_AttrEngine$1__get_ariaOrientationVertical(_) {
    return _.mk("aria-orientation", "vertical");
}

export function Feliz_AttrEngine$1__get_ariaPressedMixed(_) {
    return _.mk("aria-pressed", "mixed");
}

export function Feliz_AttrEngine$1__get_ariaRelevantAdditions(_) {
    return _.mk("aria-relevant", "additions");
}

export function Feliz_AttrEngine$1__get_ariaRelevantAll(_) {
    return _.mk("aria-relevant", "all");
}

export function Feliz_AttrEngine$1__get_ariaRelevantRemovals(_) {
    return _.mk("aria-relevant", "removals");
}

export function Feliz_AttrEngine$1__get_ariaRelevantText(_) {
    return _.mk("aria-relevant", "text");
}

export function Feliz_AttrEngine$1__get_ariaSortAscending(_) {
    return _.mk("aria-sort", "ascending");
}

export function Feliz_AttrEngine$1__get_ariaSortDescending(_) {
    return _.mk("aria-sort", "descending");
}

export function Feliz_AttrEngine$1__get_ariaSortNone(_) {
    return _.mk("aria-sort", "none");
}

export function Feliz_AttrEngine$1__get_ariaSortOther(_) {
    return _.mk("aria-sort", "other");
}

export function Feliz_AttrEngine$1__get_asAudio(_) {
    return _.mk("as", "audio");
}

export function Feliz_AttrEngine$1__get_asDocument(_) {
    return _.mk("as", "document");
}

export function Feliz_AttrEngine$1__get_asEmbed(_) {
    return _.mk("as", "embed");
}

export function Feliz_AttrEngine$1__get_asFetch(_) {
    return _.mk("as", "fetch");
}

export function Feliz_AttrEngine$1__get_asFont(_) {
    return _.mk("as", "font");
}

export function Feliz_AttrEngine$1__get_asImage(_) {
    return _.mk("as", "image");
}

export function Feliz_AttrEngine$1__get_asObject(_) {
    return _.mk("as", "object");
}

export function Feliz_AttrEngine$1__get_asScript(_) {
    return _.mk("as", "script");
}

export function Feliz_AttrEngine$1__get_asStyle(_) {
    return _.mk("as", "style");
}

export function Feliz_AttrEngine$1__get_asTrack(_) {
    return _.mk("as", "track");
}

export function Feliz_AttrEngine$1__get_asVideo(_) {
    return _.mk("as", "video");
}

export function Feliz_AttrEngine$1__get_asWorker(_) {
    return _.mk("as", "worker");
}

export function Feliz_AttrEngine$1__get_autoCapitalizeCharacters(_) {
    return _.mk("autocapitalize", "characters");
}

export function Feliz_AttrEngine$1__get_autoCapitalizeOff(_) {
    return _.mk("autocapitalize", "off");
}

export function Feliz_AttrEngine$1__get_autoCapitalizeOn$0027(_) {
    return _.mk("autocapitalize", "on");
}

export function Feliz_AttrEngine$1__get_autoCapitalizeWords(_) {
    return _.mk("autocapitalize", "words");
}

export function Feliz_AttrEngine$1__get_calcModeDiscrete(_) {
    return _.mk("calcMode", "discrete");
}

export function Feliz_AttrEngine$1__get_calcModeLinear(_) {
    return _.mk("calcMode", "linear");
}

export function Feliz_AttrEngine$1__get_calcModePaced(_) {
    return _.mk("calcMode", "paced");
}

export function Feliz_AttrEngine$1__get_calcModeSpline(_) {
    return _.mk("calcMode", "spline");
}

export function Feliz_AttrEngine$1__get_charsetUtf8(_) {
    return _.mk("charset", "UTF-8");
}

export function Feliz_AttrEngine$1__get_clipPathUserSpaceOnUse(_) {
    return _.mk("clip-path", "userSpaceOnUse");
}

export function Feliz_AttrEngine$1__get_clipPathObjectBoundingBox(_) {
    return _.mk("clip-path", "objectBoundingBox");
}

export function Feliz_AttrEngine$1__get_clipRuleEvenodd(_) {
    return _.mk("clip-rule", "evenodd");
}

export function Feliz_AttrEngine$1__get_clipRuleInheritFromParent(_) {
    return _.mk("clip-rule", "inherit");
}

export function Feliz_AttrEngine$1__get_clipRuleNonzero(_) {
    return _.mk("clip-rule", "nonzero");
}

export function Feliz_AttrEngine$1__get_colorInterpolationAuto(_) {
    return _.mk("color-interpolation", "auto");
}

export function Feliz_AttrEngine$1__get_colorInterpolationLinearRGB(_) {
    return _.mk("color-interpolation", "linearRGB");
}

export function Feliz_AttrEngine$1__get_colorInterpolationSRGB(_) {
    return _.mk("color-interpolation", "sRGB");
}

export function Feliz_AttrEngine$1__get_colorInterpolationFiltersAuto(_) {
    return _.mk("color-interpolation-filters", "auto");
}

export function Feliz_AttrEngine$1__get_colorInterpolationFiltersLinearRGB(_) {
    return _.mk("color-interpolation-filters", "linearRGB");
}

export function Feliz_AttrEngine$1__get_colorInterpolationFiltersSRGB(_) {
    return _.mk("color-interpolation-filters", "sRGB");
}

export function Feliz_AttrEngine$1__coordsRect_Z6C21C500(_, left, top, right, bottom) {
    return _.mk("coords", (((((int32ToString(left) + ",") + int32ToString(top)) + ",") + int32ToString(right)) + ",") + int32ToString(bottom));
}

export function Feliz_AttrEngine$1__coordsCircle_4F7761DC(_, x, y, r) {
    return _.mk("coords", (((int32ToString(x) + ",") + int32ToString(y)) + ",") + int32ToString(r));
}

export function Feliz_AttrEngine$1__coordsPoly_48A24E80(_, x1, y1, x2, y2, x3, y3) {
    return _.mk("coords", (((((((((int32ToString(x1) + ",") + int32ToString(y1)) + ",") + int32ToString(x2)) + ",") + int32ToString(y2)) + ",") + int32ToString(x3)) + ",") + int32ToString(y3));
}

export function Feliz_AttrEngine$1__get_crossOriginAnonymous(_) {
    return _.mk("crossorigin", "anonymous");
}

export function Feliz_AttrEngine$1__get_crossOriginUseCredentials(_) {
    return _.mk("crossorigin", "use-credentials");
}

export function Feliz_AttrEngine$1__get_dirAuto(_) {
    return _.mk("dir", "auto");
}

export function Feliz_AttrEngine$1__get_dirLtr(_) {
    return _.mk("dir", "ltr");
}

export function Feliz_AttrEngine$1__get_dirRtl(_) {
    return _.mk("dir", "rtl");
}

export function Feliz_AttrEngine$1__get_dominantBaselineAlphabetic(_) {
    return _.mk("dominant-baseline", "alphabetic");
}

export function Feliz_AttrEngine$1__get_dominantBaselineAuto(_) {
    return _.mk("dominant-baseline", "auto");
}

export function Feliz_AttrEngine$1__get_dominantBaselineCentral(_) {
    return _.mk("dominant-baseline", "central");
}

export function Feliz_AttrEngine$1__get_dominantBaselineHanging(_) {
    return _.mk("dominant-baseline", "hanging");
}

export function Feliz_AttrEngine$1__get_dominantBaselineIdeographic(_) {
    return _.mk("dominant-baseline", "ideographic");
}

export function Feliz_AttrEngine$1__get_dominantBaselineMathematical(_) {
    return _.mk("dominant-baseline", "mathematical");
}

export function Feliz_AttrEngine$1__get_dominantBaselineMiddle(_) {
    return _.mk("dominant-baseline", "middle");
}

export function Feliz_AttrEngine$1__get_dominantBaselineTextAfterEdge(_) {
    return _.mk("dominant-baseline", "text-after-edge");
}

export function Feliz_AttrEngine$1__get_dominantBaselineTextBeforeEdge(_) {
    return _.mk("dominant-baseline", "text-before-edge");
}

export function Feliz_AttrEngine$1__get_dominantBaselineTextTop(_) {
    return _.mk("dominant-baseline", "text-top");
}

export function Feliz_AttrEngine$1__get_durIndefinite(_) {
    return _.mk("dur", "indefinite");
}

export function Feliz_AttrEngine$1__get_durMedia(_) {
    return _.mk("dur", "media");
}

export function Feliz_AttrEngine$1__get_edgeModeDuplicate(_) {
    return _.mk("edgeMode", "duplicate");
}

export function Feliz_AttrEngine$1__get_edgeModeNone(_) {
    return _.mk("edgeMode", "none");
}

export function Feliz_AttrEngine$1__get_edgeModeWrap(_) {
    return _.mk("edgeMode", "wrap");
}

export function Feliz_AttrEngine$1__get_fillFreeze(_) {
    return _.mk("fill", "freeze");
}

export function Feliz_AttrEngine$1__get_fillRemove(_) {
    return _.mk("fill", "remove");
}

export function Feliz_AttrEngine$1__get_filterUnitsUserSpaceOnUse(_) {
    return _.mk("filterUnits", "userSpaceOnUse");
}

export function Feliz_AttrEngine$1__get_filterUnitsObjectBoundingBox(_) {
    return _.mk("filterUnits", "objectBoundingBox");
}

export function Feliz_AttrEngine$1__get_gradientUnitsUserSpaceOnUse(_) {
    return _.mk("gradientUnits", "userSpaceOnUse");
}

export function Feliz_AttrEngine$1__get_gradientUnitsObjectBoundingBox(_) {
    return _.mk("gradientUnits", "objectBoundingBox");
}

export function Feliz_AttrEngine$1__get_httpEquivContentSecurityPolicy(_) {
    return _.mk("http-equiv", "content-security-policy");
}

export function Feliz_AttrEngine$1__get_httpEquivContentType(_) {
    return _.mk("http-equiv", "content-type");
}

export function Feliz_AttrEngine$1__get_httpEquivDefaultStyle(_) {
    return _.mk("http-equiv", "default-style");
}

export function Feliz_AttrEngine$1__get_httpEquivRefresh(_) {
    return _.mk("http-equiv", "refresh");
}

export function Feliz_AttrEngine$1__get_httpEquivXUaCompatible(_) {
    return _.mk("http-equiv", "x-ua-compatible");
}

export function Feliz_AttrEngine$1__get_inBackgroundAlpha(_) {
    return _.mk("in", "BackgroundAlpha");
}

export function Feliz_AttrEngine$1__get_inBackgroundImage(_) {
    return _.mk("in", "BackgroundImage");
}

export function Feliz_AttrEngine$1__inCustom_Z721C83C5(_, name) {
    return _.mk("in", name);
}

export function Feliz_AttrEngine$1__get_inFillPaint(_) {
    return _.mk("in", "FillPaint");
}

export function Feliz_AttrEngine$1__get_inSourceAlpha(_) {
    return _.mk("in", "SourceAlpha");
}

export function Feliz_AttrEngine$1__get_inSourceGraphic(_) {
    return _.mk("in", "SourceGraphic");
}

export function Feliz_AttrEngine$1__get_inStrokePaint(_) {
    return _.mk("in", "StrokePaint");
}

export function Feliz_AttrEngine$1__get_in2BackgroundAlpha(_) {
    return _.mk("in2", "BackgroundAlpha");
}

export function Feliz_AttrEngine$1__get_in2BackgroundImage(_) {
    return _.mk("in2", "BackgroundImage");
}

export function Feliz_AttrEngine$1__in2Custom_Z721C83C5(_, name) {
    return _.mk("in2", name);
}

export function Feliz_AttrEngine$1__get_in2FillPaint(_) {
    return _.mk("in2", "FillPaint");
}

export function Feliz_AttrEngine$1__get_in2SourceAlpha(_) {
    return _.mk("in2", "SourceAlpha");
}

export function Feliz_AttrEngine$1__get_in2SourceGraphic(_) {
    return _.mk("in2", "SourceGraphic");
}

export function Feliz_AttrEngine$1__get_in2StrokePaint(_) {
    return _.mk("in2", "StrokePaint");
}

export function Feliz_AttrEngine$1__get_inputModeDecimal(_) {
    return _.mk("inputmode", "decimal");
}

export function Feliz_AttrEngine$1__get_inputModeEmail(_) {
    return _.mk("inputmode", "email");
}

export function Feliz_AttrEngine$1__get_inputModeNone(_) {
    return _.mk("inputmode", "none");
}

export function Feliz_AttrEngine$1__get_inputModeNumeric(_) {
    return _.mk("inputmode", "numeric");
}

export function Feliz_AttrEngine$1__get_inputModeSearch(_) {
    return _.mk("inputmode", "search");
}

export function Feliz_AttrEngine$1__get_inputModeTel(_) {
    return _.mk("inputmode", "tel");
}

export function Feliz_AttrEngine$1__get_inputModeUrl(_) {
    return _.mk("inputmode", "url");
}

export function Feliz_AttrEngine$1__get_kindSubtitles(_) {
    return _.mk("kind", "subtitles");
}

export function Feliz_AttrEngine$1__get_kindCaptions(_) {
    return _.mk("kind", "captions");
}

export function Feliz_AttrEngine$1__get_kindDescriptions(_) {
    return _.mk("kind", "descriptions");
}

export function Feliz_AttrEngine$1__get_kindChapters(_) {
    return _.mk("kind", "chapters");
}

export function Feliz_AttrEngine$1__get_kindMetadata(_) {
    return _.mk("kind", "metadata");
}

export function Feliz_AttrEngine$1__get_lengthAdjustSpacing(_) {
    return _.mk("lengthAdjust", "spacing");
}

export function Feliz_AttrEngine$1__get_lengthAdjustSpacingAndGlyphs(_) {
    return _.mk("lengthAdjust", "spacingAndGlyphs");
}

export function Feliz_AttrEngine$1__get_markerUnitsStrokeWidth(_) {
    return _.mk("markerUnits", "strokeWidth");
}

export function Feliz_AttrEngine$1__get_markerUnitsUserSpaceOnUse(_) {
    return _.mk("markerUnits", "userSpaceOnUse");
}

export function Feliz_AttrEngine$1__get_maskContentUnitsObjectBoundingBox(_) {
    return _.mk("maskContentUnits", "strokeWidth");
}

export function Feliz_AttrEngine$1__get_maskContentUnitsUserSpaceOnUse(_) {
    return _.mk("maskContentUnits", "userSpaceOnUse");
}

export function Feliz_AttrEngine$1__get_maskUnitsObjectBoundingBox(_) {
    return _.mk("maskUnits", "strokeWidth");
}

export function Feliz_AttrEngine$1__get_maskUnitsUserSpaceOnUse(_) {
    return _.mk("maskUnits", "userSpaceOnUse");
}

export function Feliz_AttrEngine$1__get_modeColor(_) {
    return _.mk("mode", "color");
}

export function Feliz_AttrEngine$1__get_modeColorBurn(_) {
    return _.mk("mode", "color-burn");
}

export function Feliz_AttrEngine$1__get_modeColorDodge(_) {
    return _.mk("mode", "color-dodge");
}

export function Feliz_AttrEngine$1__get_modeDarken(_) {
    return _.mk("mode", "darken");
}

export function Feliz_AttrEngine$1__get_modeDifference(_) {
    return _.mk("mode", "difference");
}

export function Feliz_AttrEngine$1__get_modeExclusion(_) {
    return _.mk("mode", "exclusion");
}

export function Feliz_AttrEngine$1__get_modeHardLight(_) {
    return _.mk("mode", "hard-light");
}

export function Feliz_AttrEngine$1__get_modeHue(_) {
    return _.mk("mode", "hue");
}

export function Feliz_AttrEngine$1__get_modeLighten(_) {
    return _.mk("mode", "lighten");
}

export function Feliz_AttrEngine$1__get_modeLuminosity(_) {
    return _.mk("mode", "luminosity");
}

export function Feliz_AttrEngine$1__get_modeMultiply(_) {
    return _.mk("mode", "multiply");
}

export function Feliz_AttrEngine$1__get_modeNormal(_) {
    return _.mk("mode", "normal");
}

export function Feliz_AttrEngine$1__get_modeOverlay(_) {
    return _.mk("mode", "overlay");
}

export function Feliz_AttrEngine$1__get_modeSaturation(_) {
    return _.mk("mode", "saturation");
}

export function Feliz_AttrEngine$1__get_modeScreen(_) {
    return _.mk("mode", "screen");
}

export function Feliz_AttrEngine$1__get_modeSoftLight(_) {
    return _.mk("mode", "soft-light");
}

export function Feliz_AttrEngine$1__get_operatorArithmetic(_) {
    return _.mk("operator", "arithmetic");
}

export function Feliz_AttrEngine$1__get_operatorAtop(_) {
    return _.mk("operator", "atop");
}

export function Feliz_AttrEngine$1__get_operatorDilate(_) {
    return _.mk("operator", "dilate");
}

export function Feliz_AttrEngine$1__get_operatorErode(_) {
    return _.mk("operator", "erode");
}

export function Feliz_AttrEngine$1__get_operatorIn$0027(_) {
    return _.mk("operator", "in");
}

export function Feliz_AttrEngine$1__get_operatorLighter(_) {
    return _.mk("operator", "lighter");
}

export function Feliz_AttrEngine$1__get_operatorOut(_) {
    return _.mk("operator", "out");
}

export function Feliz_AttrEngine$1__get_operatorOver(_) {
    return _.mk("operator", "over");
}

export function Feliz_AttrEngine$1__get_operatorXor(_) {
    return _.mk("operator", "xor");
}

export function Feliz_AttrEngine$1__get_patternContentUnitsObjectBoundingBox(_) {
    return _.mk("patternContentUnits", "objectBoundingBox");
}

export function Feliz_AttrEngine$1__get_patternContentUnitsUserSpaceOnUse(_) {
    return _.mk("patternContentUnits", "userSpaceOnUse");
}

export function Feliz_AttrEngine$1__get_patternUnitsObjectBoundingBox(_) {
    return _.mk("patternUnits", "objectBoundingBox");
}

export function Feliz_AttrEngine$1__get_patternUnitsUserSpaceOnUse(_) {
    return _.mk("patternUnits", "userSpaceOnUse");
}

export function Feliz_AttrEngine$1__get_preloadAuto(_) {
    return _.mk("preload", "auto");
}

export function Feliz_AttrEngine$1__get_preloadMetadata(_) {
    return _.mk("preload", "metadata");
}

export function Feliz_AttrEngine$1__get_preloadNone(_) {
    return _.mk("preload", "none");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioNone(_) {
    return _.mk("preserveAspectRatio", "none");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMinYMinMeet(_) {
    return _.mk("preserveAspectRatio", "xMinYMin meet");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMinYMinSlice(_) {
    return _.mk("preserveAspectRatio", "xMinYMin slice");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMidYMinMeet(_) {
    return _.mk("preserveAspectRatio", "xMidYMin meet");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMidYMinSlice(_) {
    return _.mk("preserveAspectRatio", "xMidYMin slice");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMaxYMinMeet(_) {
    return _.mk("preserveAspectRatio", "xMaxYMin meet");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMaxYMinSlice(_) {
    return _.mk("preserveAspectRatio", "xMaxYMin slice");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMinYMidMeet(_) {
    return _.mk("preserveAspectRatio", "xMinYMid meet");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMinYMidSlice(_) {
    return _.mk("preserveAspectRatio", "xMinYMid slice");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMidYMidMeet(_) {
    return _.mk("preserveAspectRatio", "xMidYMid meet");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMidYMidSlice(_) {
    return _.mk("preserveAspectRatio", "xMidYMid slice");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMaxYMidMeet(_) {
    return _.mk("preserveAspectRatio", "xMaxYMid meet");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMaxYMidSlice(_) {
    return _.mk("preserveAspectRatio", "xMaxYMid slice");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMinYMaxMeet(_) {
    return _.mk("preserveAspectRatio", "xMinYMax meet");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMinYMaxSlice(_) {
    return _.mk("preserveAspectRatio", "xMinYMax slice");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMidYMaxMeet(_) {
    return _.mk("preserveAspectRatio", "xMidYMax meet");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMidYMaxSlice(_) {
    return _.mk("preserveAspectRatio", "xMidYMax slice");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMaxYMaxMeet(_) {
    return _.mk("preserveAspectRatio", "xMaxYMax meet");
}

export function Feliz_AttrEngine$1__get_preserveAspectRatioXMaxYMaxSlice(_) {
    return _.mk("preserveAspectRatio", "xMaxYMax slice");
}

export function Feliz_AttrEngine$1__get_primitiveUnitsObjectBoundingBox(_) {
    return _.mk("primitiveUnits", "objectBoundingBox");
}

export function Feliz_AttrEngine$1__get_primitiveUnitsUserSpaceOnUse(_) {
    return _.mk("primitiveUnits", "userSpaceOnUse");
}

export function Feliz_AttrEngine$1__get_referrerPolicyNoReferrer(_) {
    return _.mk("referrerpolicy", "no-referrer");
}

export function Feliz_AttrEngine$1__get_referrerPolicyNoReferrerWhenDowngrade(_) {
    return _.mk("referrerpolicy", "no-referrer-when-downgrade");
}

export function Feliz_AttrEngine$1__get_referrerPolicyOrigin(_) {
    return _.mk("referrerpolicy", "origin");
}

export function Feliz_AttrEngine$1__get_referrerPolicyOriginWhenCrossOrigin(_) {
    return _.mk("referrerpolicy", "origin-when-cross-origin");
}

export function Feliz_AttrEngine$1__get_referrerPolicySameOrigin(_) {
    return _.mk("referrerpolicy", "same-origin");
}

export function Feliz_AttrEngine$1__get_referrerPolicyStrictOrigin(_) {
    return _.mk("referrerpolicy", "strict-origin");
}

export function Feliz_AttrEngine$1__get_referrerPolicyStrictOriginWhenCrossOrigin(_) {
    return _.mk("referrerpolicy", "strict-origin-when-cross-origin");
}

export function Feliz_AttrEngine$1__get_referrerPolicyUnsafeUrl(_) {
    return _.mk("referrerpolicy", "unsafe-url");
}

export function Feliz_AttrEngine$1__refXLength_Z445F6BAF(_, value) {
    return _.mk("refX", value);
}

export function Feliz_AttrEngine$1__refXLength_Z524259A4(_, value) {
    return _.mk("refX", int32ToString(value));
}

export function Feliz_AttrEngine$1__get_refXLeft(_) {
    return _.mk("refX", "left");
}

export function Feliz_AttrEngine$1__get_refXCenter(_) {
    return _.mk("refX", "center");
}

export function Feliz_AttrEngine$1__get_refXRight(_) {
    return _.mk("refX", "right");
}

export function Feliz_AttrEngine$1__refYLength_Z445F6BAF(_, value) {
    return _.mk("refY", value);
}

export function Feliz_AttrEngine$1__refYLength_Z524259A4(_, value) {
    return _.mk("refY", int32ToString(value));
}

export function Feliz_AttrEngine$1__get_refYTop(_) {
    return _.mk("refY", "top");
}

export function Feliz_AttrEngine$1__get_refYCenter(_) {
    return _.mk("refY", "center");
}

export function Feliz_AttrEngine$1__get_refYBottom(_) {
    return _.mk("refY", "bottom");
}

export function Feliz_AttrEngine$1__get_relAlternate(_) {
    return _.mk("rel", "alternate");
}

export function Feliz_AttrEngine$1__get_relAuthor(_) {
    return _.mk("rel", "author");
}

export function Feliz_AttrEngine$1__get_relBookmark(_) {
    return _.mk("rel", "bookmark");
}

export function Feliz_AttrEngine$1__get_relCanonical(_) {
    return _.mk("rel", "canonical");
}

export function Feliz_AttrEngine$1__get_relDnsPrefetch(_) {
    return _.mk("rel", "dns-prefetch");
}

export function Feliz_AttrEngine$1__get_relExternal(_) {
    return _.mk("rel", "external");
}

export function Feliz_AttrEngine$1__get_relHelp(_) {
    return _.mk("rel", "help");
}

export function Feliz_AttrEngine$1__get_relIcon(_) {
    return _.mk("rel", "icon");
}

export function Feliz_AttrEngine$1__get_relLicense(_) {
    return _.mk("rel", "license");
}

export function Feliz_AttrEngine$1__get_relManifest(_) {
    return _.mk("rel", "manifest");
}

export function Feliz_AttrEngine$1__get_relModulepreload(_) {
    return _.mk("rel", "modulepreload");
}

export function Feliz_AttrEngine$1__get_relNext(_) {
    return _.mk("rel", "next");
}

export function Feliz_AttrEngine$1__get_relNofollow(_) {
    return _.mk("rel", "nofollow");
}

export function Feliz_AttrEngine$1__get_relNoopener(_) {
    return _.mk("rel", "noopener");
}

export function Feliz_AttrEngine$1__get_relNoreferrer(_) {
    return _.mk("rel", "noreferrer");
}

export function Feliz_AttrEngine$1__get_relOpener(_) {
    return _.mk("rel", "opener");
}

export function Feliz_AttrEngine$1__get_relPingback(_) {
    return _.mk("rel", "pingback");
}

export function Feliz_AttrEngine$1__get_relPreconnect(_) {
    return _.mk("rel", "preconnect");
}

export function Feliz_AttrEngine$1__get_relPrefetch(_) {
    return _.mk("rel", "prefetch");
}

export function Feliz_AttrEngine$1__get_relPreload(_) {
    return _.mk("rel", "preload");
}

export function Feliz_AttrEngine$1__get_relPrerender(_) {
    return _.mk("rel", "prerender");
}

export function Feliz_AttrEngine$1__get_relPrev(_) {
    return _.mk("rel", "prev");
}

export function Feliz_AttrEngine$1__get_relSearch(_) {
    return _.mk("rel", "search");
}

export function Feliz_AttrEngine$1__get_relStylesheet(_) {
    return _.mk("rel", "stylesheet");
}

export function Feliz_AttrEngine$1__get_relTag(_) {
    return _.mk("rel", "tag");
}

export function Feliz_AttrEngine$1__repeatCountIterations_5E38073B(_, value) {
    return _.mk("repeatCount", value.toString());
}

export function Feliz_AttrEngine$1__repeatCountIterations_Z524259A4(_, value) {
    return _.mk("repeatCount", int32ToString(value));
}

export function Feliz_AttrEngine$1__get_repeatCountIndefinite(_) {
    return _.mk("repeatCount", "indefinite");
}

export function Feliz_AttrEngine$1__get_repeatDurIndefinite(_) {
    return _.mk("repeatDur", "indefinite");
}

export function Feliz_AttrEngine$1__get_restartAlways(_) {
    return _.mk("restart", "always");
}

export function Feliz_AttrEngine$1__get_restartNever(_) {
    return _.mk("restart", "never");
}

export function Feliz_AttrEngine$1__get_restartWhenNotActive(_) {
    return _.mk("restart", "whenNotActive");
}

export function Feliz_AttrEngine$1__get_roleAlert(_) {
    return _.mk("role", "alert");
}

export function Feliz_AttrEngine$1__get_roleAlertDialog(_) {
    return _.mk("role", "alertdialog");
}

export function Feliz_AttrEngine$1__get_roleApplication(_) {
    return _.mk("role", "application");
}

export function Feliz_AttrEngine$1__get_roleArticle(_) {
    return _.mk("role", "article");
}

export function Feliz_AttrEngine$1__get_roleBanner(_) {
    return _.mk("role", "banner");
}

export function Feliz_AttrEngine$1__get_roleButton(_) {
    return _.mk("role", "button");
}

export function Feliz_AttrEngine$1__get_roleCheckbox(_) {
    return _.mk("role", "checkbox");
}

export function Feliz_AttrEngine$1__get_roleColumnHeader(_) {
    return _.mk("role", "columnheader");
}

export function Feliz_AttrEngine$1__get_roleComboBox(_) {
    return _.mk("role", "combobox");
}

export function Feliz_AttrEngine$1__get_roleComplementary(_) {
    return _.mk("role", "complementary");
}

export function Feliz_AttrEngine$1__get_roleContentInfo(_) {
    return _.mk("role", "contentinfo");
}

export function Feliz_AttrEngine$1__get_roleDefinition(_) {
    return _.mk("role", "definition");
}

export function Feliz_AttrEngine$1__get_roleDialog(_) {
    return _.mk("role", "dialog");
}

export function Feliz_AttrEngine$1__get_roleDirectory(_) {
    return _.mk("role", "directory");
}

export function Feliz_AttrEngine$1__get_roleDocument(_) {
    return _.mk("role", "document");
}

export function Feliz_AttrEngine$1__get_roleForm(_) {
    return _.mk("role", "form");
}

export function Feliz_AttrEngine$1__get_roleGrid(_) {
    return _.mk("role", "grid");
}

export function Feliz_AttrEngine$1__get_roleGridCell(_) {
    return _.mk("role", "gridcell");
}

export function Feliz_AttrEngine$1__get_roleGroup(_) {
    return _.mk("role", "group");
}

export function Feliz_AttrEngine$1__get_roleHeading(_) {
    return _.mk("role", "heading");
}

export function Feliz_AttrEngine$1__get_roleImg(_) {
    return _.mk("role", "img");
}

export function Feliz_AttrEngine$1__get_roleLink(_) {
    return _.mk("role", "link");
}

export function Feliz_AttrEngine$1__get_roleList(_) {
    return _.mk("role", "list");
}

export function Feliz_AttrEngine$1__get_roleListBox(_) {
    return _.mk("role", "listbox");
}

export function Feliz_AttrEngine$1__get_roleListItem(_) {
    return _.mk("role", "listitem");
}

export function Feliz_AttrEngine$1__get_roleLog(_) {
    return _.mk("role", "log");
}

export function Feliz_AttrEngine$1__get_roleMain(_) {
    return _.mk("role", "main");
}

export function Feliz_AttrEngine$1__get_roleMarquee(_) {
    return _.mk("role", "marquee");
}

export function Feliz_AttrEngine$1__get_roleMath(_) {
    return _.mk("role", "math");
}

export function Feliz_AttrEngine$1__get_roleMenu(_) {
    return _.mk("role", "menu");
}

export function Feliz_AttrEngine$1__get_roleMenuBar(_) {
    return _.mk("role", "menubar");
}

export function Feliz_AttrEngine$1__get_roleMenuItem(_) {
    return _.mk("role", "menuitem");
}

export function Feliz_AttrEngine$1__get_roleMenuItemCheckbox(_) {
    return _.mk("role", "menuitemcheckbox");
}

export function Feliz_AttrEngine$1__get_roleMenuItemRadio(_) {
    return _.mk("role", "menuitemradio");
}

export function Feliz_AttrEngine$1__get_roleNavigation(_) {
    return _.mk("role", "navigation");
}

export function Feliz_AttrEngine$1__get_roleNote(_) {
    return _.mk("role", "note");
}

export function Feliz_AttrEngine$1__get_roleOption(_) {
    return _.mk("role", "option");
}

export function Feliz_AttrEngine$1__get_rolePresentation(_) {
    return _.mk("role", "presentation");
}

export function Feliz_AttrEngine$1__get_roleProgressBar(_) {
    return _.mk("role", "progressbar");
}

export function Feliz_AttrEngine$1__get_roleRadio(_) {
    return _.mk("role", "radio");
}

export function Feliz_AttrEngine$1__get_roleRadioGroup(_) {
    return _.mk("role", "radiogroup");
}

export function Feliz_AttrEngine$1__get_roleRegion(_) {
    return _.mk("role", "region");
}

export function Feliz_AttrEngine$1__get_roleRow(_) {
    return _.mk("role", "row");
}

export function Feliz_AttrEngine$1__get_roleRowGroup(_) {
    return _.mk("role", "rowgroup");
}

export function Feliz_AttrEngine$1__get_roleRowHeader(_) {
    return _.mk("role", "rowheader");
}

export function Feliz_AttrEngine$1__get_roleScrollBar(_) {
    return _.mk("role", "scrollbar");
}

export function Feliz_AttrEngine$1__get_roleSeparator(_) {
    return _.mk("role", "separator");
}

export function Feliz_AttrEngine$1__get_roleSearch(_) {
    return _.mk("role", "search");
}

export function Feliz_AttrEngine$1__get_roleSlider(_) {
    return _.mk("role", "slider");
}

export function Feliz_AttrEngine$1__get_roleSpinButton(_) {
    return _.mk("role", "spinbutton");
}

export function Feliz_AttrEngine$1__get_roleStatus(_) {
    return _.mk("role", "status");
}

export function Feliz_AttrEngine$1__get_roleTab(_) {
    return _.mk("role", "tab");
}

export function Feliz_AttrEngine$1__get_roleTabList(_) {
    return _.mk("role", "tablist");
}

export function Feliz_AttrEngine$1__get_roleTabPanel(_) {
    return _.mk("role", "tabpanel");
}

export function Feliz_AttrEngine$1__get_roleTextBox(_) {
    return _.mk("role", "textbox");
}

export function Feliz_AttrEngine$1__get_roleTimer(_) {
    return _.mk("role", "timer");
}

export function Feliz_AttrEngine$1__get_roleToolbar(_) {
    return _.mk("role", "toolbar");
}

export function Feliz_AttrEngine$1__get_roleTooltip(_) {
    return _.mk("role", "tooltip");
}

export function Feliz_AttrEngine$1__get_roleTree(_) {
    return _.mk("role", "tree");
}

export function Feliz_AttrEngine$1__get_roleTreeGrid(_) {
    return _.mk("role", "treegrid");
}

export function Feliz_AttrEngine$1__get_roleTreeItem(_) {
    return _.mk("role", "treeitem");
}

export function Feliz_AttrEngine$1__get_shapeRect(_) {
    return _.mk("shape", "rect");
}

export function Feliz_AttrEngine$1__get_shapeCircle(_) {
    return _.mk("shape", "circle");
}

export function Feliz_AttrEngine$1__get_shapePoly(_) {
    return _.mk("shape", "poly");
}

export function Feliz_AttrEngine$1__get_spacingAuto(_) {
    return _.mk("spacing", "auto");
}

export function Feliz_AttrEngine$1__get_spacingExact(_) {
    return _.mk("spacing", "exact");
}

export function Feliz_AttrEngine$1__get_spreadMethodPad(_) {
    return _.mk("spreadMethod", "pad");
}

export function Feliz_AttrEngine$1__get_spreadMethodReflect(_) {
    return _.mk("spreadMethod", "reflect");
}

export function Feliz_AttrEngine$1__get_spreadMethodRepeat(_) {
    return _.mk("spreadMethod", "repeat");
}

export function Feliz_AttrEngine$1__get_stitchTilesNoStitch(_) {
    return _.mk("stitchTiles", "noStitch");
}

export function Feliz_AttrEngine$1__get_stitchTilesStitch(_) {
    return _.mk("stitchTiles", "stitch");
}

export function Feliz_AttrEngine$1__get_targetBlank(_) {
    return _.mk("target", "_blank");
}

export function Feliz_AttrEngine$1__get_targetParent(_) {
    return _.mk("target", "_parent");
}

export function Feliz_AttrEngine$1__get_targetSelf(_) {
    return _.mk("target", "_self");
}

export function Feliz_AttrEngine$1__get_targetTop(_) {
    return _.mk("target", "_top");
}

export function Feliz_AttrEngine$1__get_textAnchorEndOfText(_) {
    return _.mk("text-anchor", "end");
}

export function Feliz_AttrEngine$1__get_textAnchorMiddle(_) {
    return _.mk("text-anchor", "middle");
}

export function Feliz_AttrEngine$1__get_textAnchorStartOfText(_) {
    return _.mk("text-anchor", "start");
}

export function Feliz_AttrEngine$1__get_typeButton(_) {
    return _.mk("type", "button");
}

export function Feliz_AttrEngine$1__get_typeCheckbox(_) {
    return _.mk("type", "checkbox");
}

export function Feliz_AttrEngine$1__get_typeColor(_) {
    return _.mk("type", "color");
}

export function Feliz_AttrEngine$1__get_typeDate(_) {
    return _.mk("type", "date");
}

export function Feliz_AttrEngine$1__get_typeDateTimeLocal(_) {
    return _.mk("type", "datetime-local");
}

export function Feliz_AttrEngine$1__get_typeEmail(_) {
    return _.mk("type", "email");
}

export function Feliz_AttrEngine$1__get_typeFile(_) {
    return _.mk("type", "file");
}

export function Feliz_AttrEngine$1__get_typeHidden(_) {
    return _.mk("type", "hidden");
}

export function Feliz_AttrEngine$1__get_typeImage(_) {
    return _.mk("type", "image");
}

export function Feliz_AttrEngine$1__get_typeMonth(_) {
    return _.mk("type", "month");
}

export function Feliz_AttrEngine$1__get_typeNumber(_) {
    return _.mk("type", "number");
}

export function Feliz_AttrEngine$1__get_typePassword(_) {
    return _.mk("type", "password");
}

export function Feliz_AttrEngine$1__get_typeRadio(_) {
    return _.mk("type", "radio");
}

export function Feliz_AttrEngine$1__get_typeRange(_) {
    return _.mk("type", "range");
}

export function Feliz_AttrEngine$1__get_typeReset(_) {
    return _.mk("type", "reset");
}

export function Feliz_AttrEngine$1__get_typeSearch(_) {
    return _.mk("type", "search");
}

export function Feliz_AttrEngine$1__get_typeSubmit(_) {
    return _.mk("type", "submit");
}

export function Feliz_AttrEngine$1__get_typeTel(_) {
    return _.mk("type", "tel");
}

export function Feliz_AttrEngine$1__get_typeText(_) {
    return _.mk("type", "text");
}

export function Feliz_AttrEngine$1__get_typeTime(_) {
    return _.mk("type", "time");
}

export function Feliz_AttrEngine$1__get_typeUrl(_) {
    return _.mk("type", "url");
}

export function Feliz_AttrEngine$1__get_typeWeek(_) {
    return _.mk("type", "week");
}

export function Feliz_AttrEngine$1__get_wrapSoft(_) {
    return _.mk("wrap", "soft");
}

export function Feliz_AttrEngine$1__get_wrapHard(_) {
    return _.mk("wrap", "hard");
}

export function Feliz_AttrEngine$1__get_wrapOff(_) {
    return _.mk("wrap", "off");
}

export function Feliz_AttrEngine$1__get_xChannelSelectorA(_) {
    return _.mk("xChannelSelector", "A");
}

export function Feliz_AttrEngine$1__get_xChannelSelectorB(_) {
    return _.mk("xChannelSelector", "B");
}

export function Feliz_AttrEngine$1__get_xChannelSelectorG(_) {
    return _.mk("xChannelSelector", "G");
}

export function Feliz_AttrEngine$1__get_xChannelSelectorR(_) {
    return _.mk("xChannelSelector", "R");
}

export function Feliz_AttrEngine$1__get_yChannelSelectorA(_) {
    return _.mk("yChannelSelector", "A");
}

export function Feliz_AttrEngine$1__get_yChannelSelectorB(_) {
    return _.mk("yChannelSelector", "B");
}

export function Feliz_AttrEngine$1__get_yChannelSelectorG(_) {
    return _.mk("yChannelSelector", "G");
}

export function Feliz_AttrEngine$1__get_yChannelSelectorR(_) {
    return _.mk("yChannelSelector", "R");
}

