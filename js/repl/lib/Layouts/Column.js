import { declare, Union } from "../../fable-library/Types.js";
import { list_type, class_type, string_type, union_type } from "../../fable-library/Reflection.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Screen$reflection as Screen$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../../fable-library/Util.js";
export const ISize = declare(function Fulma_Column_ISize(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function ISize$reflection() {
  return union_type("Fulma.Column.ISize", [], ISize, () => ["is-one-quarter", "is-one-third", "is-half", "is-two-thirds", "is-three-quarters", "is-1", "is-2", "is-3", "is-4", "is-5", "is-6", "is-7", "is-8", "is-9", "is-10", "is-11", "is-12", "is-narrow", "is-full", "is-one-fifth", "is-two-fifths", "is-three-fifths", "is-four-fifths"]);
}
export const Option = declare(function Fulma_Column_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Option$reflection() {
  return union_type("Fulma.Column.Option", [], Option, () => [["Width", [["Item1", Screen$0024reflection()], ["Item2", ISize$reflection()]]], ["Offset", [["Item1", Screen$0024reflection()], ["Item2", ISize$reflection()]]], ["CustomClass", [["Item", string_type]]], ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}

function suffix(_arg1) {
  switch (_arg1.tag) {
    case 1:
      {
        return "-desktop";
      }

    case 2:
      {
        return "-tablet";
      }

    case 3:
      {
        return "-mobile";
      }

    case 4:
      {
        return "-widescreen";
      }

    case 6:
      {
        return "-fullhd";
      }

    case 5:
      {
        return "-touch";
      }

    default:
      {
        return "";
      }
  }
}

export function ofWidth(screen, size) {
  return Reflection$0024$0024$0024getCaseName(size) + suffix(screen);
}
export function ofOffset(screen$$1, offset) {
  const className = Reflection$0024$0024$0024getCaseName(offset);
  return "is-offset-" + className.slice(3, className.length) + suffix(screen$$1);
}
export function column(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          const arg00$$1 = ofOffset(option.fields[0], option.fields[1]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00$$1);
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 4:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }

      default:
        {
          const arg00 = ofWidth(option.fields[0], option.fields[1]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00);
        }
    }
  }, "column"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$2, 1), ...children$$2);
  }, children);
}
