import { declare, Union } from "../fable-library.2.3.7/Types.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Color$$$ofColor as Color$0024$0024$0024ofColor, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { union, lambda, unit, list, type, string, bool } from "../fable-library.2.3.7/Reflection.js";
import { DOMAttr, Prop, HTMLAttr } from "../src/Fable.React.Props.js";
import { createObj, equals } from "../fable-library.2.3.7/Util.js";
export const Option = declare(function Fulma_Textarea_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Textarea.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], "is-fullwidth", "is-inline", ["is-loading", [bool]], ["is-focused", [bool]], ["is-active", [bool]], ["IsReadOnly", [bool]], ["Color", [Color$0024002EIColor$0024reflection()]], ["Id", [string]], ["Disabled", [bool]], ["Value", [string]], ["DefaultValue", [string]], ["ValueOrDefault", [string]], ["Placeholder", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["OnChange", [lambda(type("Browser.Types.Event"), unit)]], ["Ref", [lambda(type("Browser.Types.Element"), unit)]], ["CustomClass", [string]], "has-fixed-size", ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function textarea(options, children) {
  const parseOptions = function parseOptions(result, option) {
    var $target$$1, state;

    switch (option.tag) {
      case 7:
        $target$$1 = 1;
        break;

      case 1:
      case 18:
      case 2:
        $target$$1 = 2;
        break;

      case 3:
        $target$$1 = 3;
        state = option.fields[0];
        break;

      case 4:
        $target$$1 = 3;
        state = option.fields[0];
        break;

      case 5:
        $target$$1 = 3;
        state = option.fields[0];
        break;

      case 8:
        $target$$1 = 4;
        break;

      case 9:
        $target$$1 = 5;
        break;

      case 6:
        $target$$1 = 6;
        break;

      case 10:
        $target$$1 = 7;
        break;

      case 11:
        $target$$1 = 8;
        break;

      case 12:
        $target$$1 = 9;
        break;

      case 13:
        $target$$1 = 10;
        break;

      case 15:
        $target$$1 = 11;
        break;

      case 16:
        $target$$1 = 12;
        break;

      case 14:
        $target$$1 = 13;
        break;

      case 17:
        $target$$1 = 14;
        break;

      case 19:
        $target$$1 = 15;
        break;

      default:
        $target$$1 = 0;
    }

    switch ($target$$1) {
      case 0:
        {
          const size = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, Reflection$0024$0024$0024getCaseName(size));
        }

      case 1:
        {
          const color = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, Color$0024$0024$0024ofColor(color));
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 3:
        {
          if (state) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
          } else {
            return result;
          }
        }

      case 4:
        {
          const id = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new HTMLAttr(59, "Id", id));
        }

      case 5:
        {
          const disabled = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new HTMLAttr(39, "Disabled", disabled));
        }

      case 6:
        {
          const state$$1 = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new HTMLAttr(92, "ReadOnly", state$$1));
        }

      case 7:
        {
          const value = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new HTMLAttr(121, "Value", value));
        }

      case 8:
        {
          const defaultValue = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new HTMLAttr(1, "DefaultValue", defaultValue));
        }

      case 9:
        {
          const valueOrDefault = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new Prop(1, "Ref", function (e) {
            if (!(e == null) ? !equals(e.value, valueOrDefault) : false) {
              e.value = valueOrDefault;
            }
          }));
        }

      case 10:
        {
          const placeholder = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new HTMLAttr(88, "Placeholder", placeholder));
        }

      case 11:
        {
          const cb = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new DOMAttr(9, "OnChange", cb));
        }

      case 12:
        {
          const ref = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, new Prop(1, "Ref", ref));
        }

      case 13:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 14:
        {
          const customClass = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 15:
        {
          const modifiers = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, modifiers);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "textarea"), function (props$$1, children$$1) {
    return React.createElement("textarea", createObj(props$$1, 1), ...children$$1);
  }, children);
}
