import { class_type } from "../../fable-library/Reflection.js";
import { map, delay, toList } from "../../fable-library/Seq.js";
import { rangeDouble } from "../../fable-library/Range.js";

export class Feliz_EventEngine$1 {
    constructor(mk) {
        this.mk = mk;
    }
}

export function Feliz_EventEngine$1$reflection(gen0) {
    return class_type("Feliz.EventEngine`1", [gen0], Feliz_EventEngine$1);
}

export function Feliz_EventEngine$1_$ctor_4C3D226A(mk) {
    return new Feliz_EventEngine$1(mk);
}

export function Feliz_EventEngine$1__onAbort_7DDE0344(_, handler) {
    return _.mk("abort", handler);
}

export function Feliz_EventEngine$1__onAnimationCancel_2312512(_, handler) {
    return _.mk("animationCancel", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onAnimationEnd_2312512(_, handler) {
    return _.mk("animationEnd", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onAnimationIteration_2312512(_, handler) {
    return _.mk("animationIteration", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onAnimationStart_2312512(_, handler) {
    return _.mk("animationStart", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onBlur_13C15648(_, handler) {
    return _.mk("blur", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onCancel_7DDE0344(_, handler) {
    return _.mk("cancel", handler);
}

export function Feliz_EventEngine$1__onCanPlay_7DDE0344(_, handler) {
    return _.mk("canPlay", handler);
}

export function Feliz_EventEngine$1__onCanPlayThrough_7DDE0344(_, handler) {
    return _.mk("canPlayThrough", handler);
}

export function Feliz_EventEngine$1__onChange_7DDE0344(_, handler) {
    return _.mk("change", handler);
}

export function Feliz_EventEngine$1__onChange_50F94480(_, handler) {
    return _.mk("change", (ev) => {
        handler(ev.target.checked);
    });
}

export function Feliz_EventEngine$1__onChange_ZB305852(_, handler) {
    return _.mk("change", (ev) => {
        const files = ev.target.files;
        if ((!(files == null)) ? (files.length > 0) : false) {
            handler(files.item(0));
        }
    });
}

export function Feliz_EventEngine$1__onChange_51EFD9E4(_, handler) {
    return _.mk("change", (ev) => {
        const fileList = ev.target.files;
        if (!(fileList == null)) {
            handler(toList(delay(() => map((i) => fileList.item(i), rangeDouble(0, 1, fileList.length - 1)))));
        }
    });
}

export function Feliz_EventEngine$1__onChange_41EFD311(_, handler) {
    return _.mk("change", (ev) => {
        handler(ev.target.value);
    });
}

export function Feliz_EventEngine$1__onCheckedChange_50F94480(_, handler) {
    return _.mk("change", (ev) => {
        handler(ev.target.checked);
    });
}

export function Feliz_EventEngine$1__onClick_58BC8925(_, handler) {
    return _.mk("click", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onCompositionEnd_2A4605FC(_, handler) {
    return _.mk("compositionEnd", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onCompositionStart_2A4605FC(_, handler) {
    return _.mk("compositionStart", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onCompositionUpdate_2A4605FC(_, handler) {
    return _.mk("compositionUpdate", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onContextMenu_58BC8925(_, handler) {
    return _.mk("contextMenu", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onCueChange_7DDE0344(_, handler) {
    return _.mk("cueChange", handler);
}

export function Feliz_EventEngine$1__onCopy_650C9FE8(_, handler) {
    return _.mk("copy", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onCut_650C9FE8(_, handler) {
    return _.mk("cut", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onDblClick_58BC8925(_, handler) {
    return _.mk("dblClick", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onDrag_Z3384A56C(_, handler) {
    return _.mk("drag", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onDragEnd_Z3384A56C(_, handler) {
    return _.mk("dragEnd", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onDragEnter_Z3384A56C(_, handler) {
    return _.mk("dragEnter", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onDragExit_Z3384A56C(_, handler) {
    return _.mk("dragExit", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onDragLeave_Z3384A56C(_, handler) {
    return _.mk("dragLeave", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onDragOver_Z3384A56C(_, handler) {
    return _.mk("dragOver", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onDragStart_Z3384A56C(_, handler) {
    return _.mk("dragStart", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onDrop_Z3384A56C(_, handler) {
    return _.mk("drop", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onDurationChange_7DDE0344(_, handler) {
    return _.mk("durationChange", handler);
}

export function Feliz_EventEngine$1__onEmptied_7DDE0344(_, handler) {
    return _.mk("emptied", handler);
}

export function Feliz_EventEngine$1__onEncrypted_7DDE0344(_, handler) {
    return _.mk("encrypted", handler);
}

export function Feliz_EventEngine$1__onEnded_7DDE0344(_, handler) {
    return _.mk("ended", handler);
}

export function Feliz_EventEngine$1__onError_7DDE0344(_, handler) {
    return _.mk("error", handler);
}

export function Feliz_EventEngine$1__onError_746D9E38(_, handler) {
    return _.mk("error", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onFocus_13C15648(_, handler) {
    return _.mk("focus", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onGotPointerCapture_20E144FF(_, handler) {
    return _.mk("gotPointerCapture", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onInput_7DDE0344(_, handler) {
    return _.mk("input", handler);
}

export function Feliz_EventEngine$1__onInvalid_7DDE0344(_, handler) {
    return _.mk("invalid", handler);
}

export function Feliz_EventEngine$1__onKeyDown_Z2153A397(_, handler) {
    return _.mk("keyDown", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onKeyPress_Z2153A397(_, handler) {
    return _.mk("keyPress", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onKeyUp_Z2153A397(_, handler) {
    return _.mk("keyUp", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onLoad_7DDE0344(_, handler) {
    return _.mk("load", handler);
}

export function Feliz_EventEngine$1__onLoadedData_7DDE0344(_, handler) {
    return _.mk("loadedData", handler);
}

export function Feliz_EventEngine$1__onLoadedMetadata_7DDE0344(_, handler) {
    return _.mk("loadedMetadata", handler);
}

export function Feliz_EventEngine$1__onLoadEnd_7DDE0344(_, handler) {
    return _.mk("loadEnd", handler);
}

export function Feliz_EventEngine$1__onLoadStart_7DDE0344(_, handler) {
    return _.mk("loadStart", handler);
}

export function Feliz_EventEngine$1__onLostPointerCapture_20E144FF(_, handler) {
    return _.mk("lostPointerCapture", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onMouseDown_58BC8925(_, handler) {
    return _.mk("mouseDown", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onMouseEnter_58BC8925(_, handler) {
    return _.mk("mouseEnter", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onMouseLeave_58BC8925(_, handler) {
    return _.mk("mouseLeave", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onMouseMove_58BC8925(_, handler) {
    return _.mk("mouseMove", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onMouseOut_58BC8925(_, handler) {
    return _.mk("mouseOut", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onMouseOver_58BC8925(_, handler) {
    return _.mk("mouseOver", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onMouseUp_58BC8925(_, handler) {
    return _.mk("mouseUp", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onPaste_650C9FE8(_, handler) {
    return _.mk("paste", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onPause_7DDE0344(_, handler) {
    return _.mk("pause", handler);
}

export function Feliz_EventEngine$1__onPlay_7DDE0344(_, handler) {
    return _.mk("play", handler);
}

export function Feliz_EventEngine$1__onPlaying_7DDE0344(_, handler) {
    return _.mk("playing", handler);
}

export function Feliz_EventEngine$1__onPointerCancel_20E144FF(_, handler) {
    return _.mk("pointerCancel", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onPointerDown_20E144FF(_, handler) {
    return _.mk("pointerDown", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onPointerEnter_20E144FF(_, handler) {
    return _.mk("pointerEnter", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onPointerLeave_20E144FF(_, handler) {
    return _.mk("pointerLeave", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onPointerMove_20E144FF(_, handler) {
    return _.mk("pointerMove", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onPointerOut_20E144FF(_, handler) {
    return _.mk("pointerOut", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onPointerOver_20E144FF(_, handler) {
    return _.mk("pointerOver", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onPointerUp_20E144FF(_, handler) {
    return _.mk("pointerUp", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onProgress_7DDE0344(_, handler) {
    return _.mk("progress", handler);
}

export function Feliz_EventEngine$1__onRateChange_7DDE0344(_, handler) {
    return _.mk("rateChange", handler);
}

export function Feliz_EventEngine$1__onReset_7DDE0344(_, handler) {
    return _.mk("reset", handler);
}

export function Feliz_EventEngine$1__onResize_746D9E38(_, handler) {
    return _.mk("resize", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onScroll_7DDE0344(_, handler) {
    return _.mk("scroll", handler);
}

export function Feliz_EventEngine$1__onSeeked_7DDE0344(_, handler) {
    return _.mk("seeked", handler);
}

export function Feliz_EventEngine$1__onSeeking_7DDE0344(_, handler) {
    return _.mk("seeking", handler);
}

export function Feliz_EventEngine$1__onSelect_7DDE0344(_, handler) {
    return _.mk("select", handler);
}

export function Feliz_EventEngine$1__onSelect_746D9E38(_, handler) {
    return _.mk("select", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onStalled_7DDE0344(_, handler) {
    return _.mk("stalled", handler);
}

export function Feliz_EventEngine$1__onSuspend_7DDE0344(_, handler) {
    return _.mk("suspend", handler);
}

export function Feliz_EventEngine$1__onSubmit_7DDE0344(_, handler) {
    return _.mk("submit", handler);
}

export function Feliz_EventEngine$1__onTextChange_41EFD311(_, handler) {
    return _.mk("change", (ev) => {
        handler(ev.target.value);
    });
}

export function Feliz_EventEngine$1__onTextInput_41EFD311(_, handler) {
    return _.mk("input", (ev) => {
        handler(ev.target.value);
    });
}

export function Feliz_EventEngine$1__onTimeUpdate_7DDE0344(_, handler) {
    return _.mk("timeUpdate", handler);
}

export function Feliz_EventEngine$1__onTouchCancel_Z2CA827DF(_, handler) {
    return _.mk("touchCancel", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onTouchEnd_Z2CA827DF(_, handler) {
    return _.mk("touchEnd", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onTouchMove_Z2CA827DF(_, handler) {
    return _.mk("touchMove", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onTouchStart_Z2CA827DF(_, handler) {
    return _.mk("touchStart", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onTransitionEnd_Z2B826A95(_, handler) {
    return _.mk("transitionEnd", (arg10) => {
        handler(arg10);
    });
}

export function Feliz_EventEngine$1__onVolumeChange_7DDE0344(_, handler) {
    return _.mk("volumeChange", handler);
}

export function Feliz_EventEngine$1__onWaiting_7DDE0344(_, handler) {
    return _.mk("waiting", handler);
}

export function Feliz_EventEngine$1__onWheel_4B7763D7(_, handler) {
    return _.mk("wheel", (arg10) => {
        handler(arg10);
    });
}

