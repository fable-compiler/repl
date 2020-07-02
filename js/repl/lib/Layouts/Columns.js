import { declare, Union } from "../../fable-library/Types.js";
import { list_type, class_type, string_type, union_type } from "../../fable-library/Reflection.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Screen$$$ToString$$2D2414B4 as Screen$0024$0024$0024ToString$0024$00242D2414B4, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Screen$reflection as Screen$0024reflection, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName } from "../Fulma/Common.js";
import { structuralHash, createObj } from "../../fable-library/Util.js";
import { contains } from "../../fable-library/List.js";
import { toText, printf } from "../../fable-library/String.js";
import { some } from "../../fable-library/Option.js";
export const ISize = declare(function Fulma_Columns_ISize(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function ISize$reflection() {
  return union_type("Fulma.Columns.ISize", [], ISize, () => ["is-1", "is-2", "is-3", "is-4", "is-5", "is-6", "is-7", "is-8"]);
}
export function ISize$$$ToString$$2283FB3F(x) {
  return Reflection$0024$0024$0024getCaseName(x);
}
export const Option = declare(function Fulma_Columns_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Option$reflection() {
  return union_type("Fulma.Columns.Option", [], Option, () => ["is-centered", "is-vcentered", "is-multiline", "is-gapless", "is-grid", "is-mobile", "is-desktop", ["IsGap", [["Item1", Screen$0024reflection()], ["Item2", ISize$reflection()]]], ["IsGapOnly", [["Item1", Screen$0024reflection()], ["Item2", ISize$reflection()]]], ["CustomClass", [["Item", string_type]]], ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export function columns(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    var msg, arg10, arg20, arg30, clo1, clo2, clo3, msg$$1, arg10$$1, arg20$$1, arg30$$1, clo1$$1, clo2$$1, clo3$$1;

    switch (option.tag) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 7:
        {
          if (!contains("is-variable", result.Classes, {
            Equals($x$$1, $y$$2) {
              return $x$$1 === $y$$2;
            },

            GetHashCode: structuralHash
          })) {
            return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, "is-variable"), "is-" + ISize$$$ToString$$2283FB3F(option.fields[1]) + Screen$0024$0024$0024ToString$0024$00242D2414B4(option.fields[0]));
          } else {
            return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, "is-" + ISize$$$ToString$$2283FB3F(option.fields[1]) + Screen$0024$0024$0024ToString$0024$00242D2414B4(option.fields[0]));
          }
        }

      case 8:
        {
          if (!contains("is-variable", result.Classes, {
            Equals($x$$3, $y$$4) {
              return $x$$3 === $y$$4;
            },

            GetHashCode: structuralHash
          })) {
            return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, "is-variable"), option.fields[0].tag === 2 ? "is-" + ISize$$$ToString$$2283FB3F(option.fields[1]) + Screen$0024$0024$0024ToString$0024$00242D2414B4(option.fields[0]) + "-only" : option.fields[0].tag === 1 ? "is-" + ISize$$$ToString$$2283FB3F(option.fields[1]) + Screen$0024$0024$0024ToString$0024$00242D2414B4(option.fields[0]) + "-only" : option.fields[0].tag === 4 ? "is-" + ISize$$$ToString$$2283FB3F(option.fields[1]) + Screen$0024$0024$0024ToString$0024$00242D2414B4(option.fields[0]) + "-only" : (msg = (arg10 = Screen$0024$0024$0024ToString$0024$00242D2414B4(option.fields[0]), arg20 = ISize$$$ToString$$2283FB3F(option.fields[1]), arg30 = Screen$0024$0024$0024ToString$0024$00242D2414B4(option.fields[0]), (clo1 = toText(printf("Screen `%s` does not support `is-%s-%s-only`.")), clo2 = clo1(arg10), clo3 = clo2(arg20), clo3(arg30))), (console.warn(some(msg)), "")));
          } else {
            return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0].tag === 2 ? "is-" + ISize$$$ToString$$2283FB3F(option.fields[1]) + Screen$0024$0024$0024ToString$0024$00242D2414B4(option.fields[0]) + "-only" : option.fields[0].tag === 1 ? "is-" + ISize$$$ToString$$2283FB3F(option.fields[1]) + Screen$0024$0024$0024ToString$0024$00242D2414B4(option.fields[0]) + "-only" : option.fields[0].tag === 4 ? "is-" + ISize$$$ToString$$2283FB3F(option.fields[1]) + Screen$0024$0024$0024ToString$0024$00242D2414B4(option.fields[0]) + "-only" : (msg$$1 = (arg10$$1 = Screen$0024$0024$0024ToString$0024$00242D2414B4(option.fields[0]), arg20$$1 = ISize$$$ToString$$2283FB3F(option.fields[1]), arg30$$1 = Screen$0024$0024$0024ToString$0024$00242D2414B4(option.fields[0]), (clo1$$1 = toText(printf("Screen `%s` does not support `is-%s-%s-only`.")), clo2$$1 = clo1$$1(arg10$$1), clo3$$1 = clo2$$1(arg20$$1), clo3$$1(arg30$$1))), (console.warn(some(msg$$1)), "")));
          }
        }

      case 10:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 9:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 11:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }
    }
  }, "columns"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$2, 1), ...children$$2);
  }, children);
}
