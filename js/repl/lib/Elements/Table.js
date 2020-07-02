import { declare, Union } from "../../fable-library/Types.js";
import { union_type, list_type, class_type, string_type } from "../../fable-library/Reflection.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../../fable-library/Util.js";
export const TableOption = declare(function Fulma_Table_TableOption(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function TableOption$reflection() {
  return union_type("Fulma.Table.TableOption", [], TableOption, () => ["is-bordered", "is-striped", "is-fullwidth", "is-narrow", "is-hoverable", ["CustomClass", [["Item", string_type]]], ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export function table(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
      case 2:
      case 3:
      case 4:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 7:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }
    }
  }, "table"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("table", createObj(props$$2, 1), ...children$$2);
  }, children);
}
