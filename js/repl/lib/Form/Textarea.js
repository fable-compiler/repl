import { declare, Union } from "../fable-library.2.4.2/Types.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Color$$$ofColor as Color$0024$0024$0024ofColor, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { union, lambda, unit, list, type, string, bool } from "../fable-library.2.4.2/Reflection.js";
import { equals, createObj } from "../fable-library.2.4.2/Util.js";
import { DOMAttr, Prop, HTMLAttr } from "../src/Fable.React.Props.js";
export const Option = declare(function Fulma_Textarea_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Textarea.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], "is-fullwidth", "is-inline", ["is-loading", [bool]], ["is-focused", [bool]], ["is-active", [bool]], ["IsReadOnly", [bool]], ["Color", [Color$0024002EIColor$0024reflection()]], ["Id", [string]], ["Disabled", [bool]], ["Value", [string]], ["DefaultValue", [string]], ["ValueOrDefault", [string]], ["Placeholder", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["OnChange", [lambda(type("Browser.Types.Event"), unit)]], ["Ref", [lambda(type("Browser.Types.Element"), unit)]], ["CustomClass", [string]], "has-fixed-size", ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function textarea(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    var $target$$5, state;

    switch (option.tag) {
      case 7:
        $target$$5 = 1;
        break;

      case 1:
      case 18:
      case 2:
        $target$$5 = 2;
        break;

      case 3:
        $target$$5 = 3;
        state = option.fields[0];
        break;

      case 4:
        $target$$5 = 3;
        state = option.fields[0];
        break;

      case 5:
        $target$$5 = 3;
        state = option.fields[0];
        break;

      case 8:
        $target$$5 = 4;
        break;

      case 9:
        $target$$5 = 5;
        break;

      case 6:
        $target$$5 = 6;
        break;

      case 10:
        $target$$5 = 7;
        break;

      case 11:
        $target$$5 = 8;
        break;

      case 12:
        $target$$5 = 9;
        break;

      case 13:
        $target$$5 = 10;
        break;

      case 15:
        $target$$5 = 11;
        break;

      case 16:
        $target$$5 = 12;
        break;

      case 14:
        $target$$5 = 13;
        break;

      case 17:
        $target$$5 = 14;
        break;

      case 19:
        $target$$5 = 15;
        break;

      default:
        $target$$5 = 0;
    }

    switch ($target$$5) {
      case 0:
        {
          const arg00 = Reflection$0024$0024$0024getCaseName(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00);
        }

      case 1:
        {
          const arg00$$1 = Color$0024$0024$0024ofColor(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00$$1);
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
          const arg00$$2 = new HTMLAttr(59, "Id", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$2);
        }

      case 5:
        {
          const arg00$$3 = new HTMLAttr(39, "Disabled", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$3);
        }

      case 6:
        {
          const arg00$$4 = new HTMLAttr(92, "ReadOnly", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$4);
        }

      case 7:
        {
          const arg00$$5 = new HTMLAttr(121, "Value", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$5);
        }

      case 8:
        {
          const arg00$$6 = new HTMLAttr(1, "DefaultValue", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$6);
        }

      case 9:
        {
          let arg00$$7;
          arg00$$7 = new Prop(1, "Ref", function (e) {
            var value$$2;

            if ((value$$2 = (e == null), (!value$$2)) ? !equals(e.value, option.fields[0]) : false) {
              e.value = option.fields[0];
            }
          });
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$7);
        }

      case 10:
        {
          const arg00$$8 = new HTMLAttr(88, "Placeholder", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$8);
        }

      case 11:
        {
          const arg00$$9 = new DOMAttr(9, "OnChange", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$9);
        }

      case 12:
        {
          const arg00$$10 = new Prop(1, "Ref", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$10);
        }

      case 13:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 14:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 15:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }
    }
  }, "textarea"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("textarea", createObj(props$$2, 1), ...children$$2);
  }, children);
}
