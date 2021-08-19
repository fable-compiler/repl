import { Sutil_Interop_Window_removeEventListener_378D00DF, Sutil_Interop_Window_addEventListener_378D00DF, Sutil_Interop_Window_get_location } from "./Interop.js";
import { Sutil_Store_set, Sutil_Store_make } from "./Store.js";
import { Sutil_DOM_disposeOnUnmount, Sutil_DOM_fragment } from "./DOM.js";
import { Sutil_Helpers_disposable } from "./Helpers.js";
import { ofArray } from "../../fable-library/List.js";

export function Sutil_Navigable_listenLocation(parser, dispatch) {
    let clo1, clo1_1;
    let onChangeRef = (_arg1) => {
        throw (new Error("`onChangeRef` has not been initialized.\nPlease make sure you used Elmish.Navigation.Program.Internal.subscribe"));
    };
    let lastLocation = void 0;
    const onChange = (_arg1_1) => {
        let value;
        let pattern_matching_result;
        if (lastLocation != null) {
            if (lastLocation === Sutil_Interop_Window_get_location().href) {
                pattern_matching_result = 0;
            }
            else {
                pattern_matching_result = 1;
            }
        }
        else {
            pattern_matching_result = 1;
        }
        switch (pattern_matching_result) {
            case 0: {
                value = (void 0);
                break;
            }
            case 1: {
                lastLocation = Sutil_Interop_Window_get_location().href;
                value = dispatch(parser(Sutil_Interop_Window_get_location()));
                break;
            }
        }
        return void 0;
    };
    onChangeRef = onChange;
    Sutil_Interop_Window_addEventListener_378D00DF("popstate", (clo1 = onChangeRef, (arg10) => {
        clo1(arg10);
    }));
    Sutil_Interop_Window_addEventListener_378D00DF("hashchange", (clo1_1 = onChangeRef, (arg10_1) => {
        clo1_1(arg10_1);
    }));
    void onChange();
    return () => {
        let clo1_2, clo1_3;
        Sutil_Interop_Window_removeEventListener_378D00DF("popstate", (clo1_2 = onChangeRef, (arg10_2) => {
            clo1_2(arg10_2);
        }));
        Sutil_Interop_Window_removeEventListener_378D00DF("hashchange", (clo1_3 = onChangeRef, (arg10_3) => {
            clo1_3(arg10_3);
        }));
    };
}

export function Sutil_Navigable_navigable(parser, app) {
    const store = Sutil_Store_make(parser(Sutil_Interop_Window_get_location()));
    return Sutil_DOM_fragment([Sutil_DOM_disposeOnUnmount(ofArray([store, Sutil_Helpers_disposable(Sutil_Navigable_listenLocation(parser, (newValue) => {
        Sutil_Store_set(store, newValue);
    }))])), app(store)]);
}

