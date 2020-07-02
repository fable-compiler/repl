import { declare, Union } from "../../fable-library/Types.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Color$$$ofColor as Color$0024$0024$0024ofColor, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { union_type, string_type, list_type, class_type, bool_type } from "../../fable-library/Reflection.js";
import { createObj } from "../../fable-library/Util.js";
export const Option = declare(function Fulma_Select_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Option$reflection() {
  return union_type("Fulma.Select.Option", [], Option, () => [["Size", [["Item", Size$0024002EISize$0024reflection()]]], "is-fullwidth", "is-inline", ["is-loading", [["Item", bool_type]]], ["is-focused", [["Item", bool_type]]], ["is-active", [["Item", bool_type]]], ["Disabled", [["Item", bool_type]]], ["Color", [["Item", Color$0024002EIColor$0024reflection()]]], "is-rounded", ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["CustomClass", [["Item", string_type]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export function select(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    var $target$$5, state;

    switch (option.tag) {
      case 7:
        $target$$5 = 1;
        break;

      case 1:
      case 2:
      case 8:
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

      case 6:
        $target$$5 = 3;
        state = option.fields[0];
        break;

      case 9:
        $target$$5 = 4;
        break;

      case 10:
        $target$$5 = 5;
        break;

      case 11:
        $target$$5 = 6;
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
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }
    }
  }, "select"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$2, 1), ...children$$2);
  }, children);
}
