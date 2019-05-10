import { declare, Union } from "../fable-library.2.3.7/Types.js";
import { list, type, string, union } from "../fable-library.2.3.7/Reflection.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Screen$$$ToString$$2D2414B4 as Screen$0024$0024$0024ToString$0024$00242D2414B4, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Screen$reflection as Screen$0024reflection, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName } from "../Fulma/Common.js";
import { createObj, structuralHash } from "../fable-library.2.3.7/Util.js";
import { contains } from "../fable-library.2.3.7/List.js";
import { toText, printf } from "../fable-library.2.3.7/String.js";
export const ISize = declare(function Fulma_Columns_ISize(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function ISize$reflection() {
  return union("Fulma.Columns.ISize", [], ISize, () => ["is-1", "is-2", "is-3", "is-4", "is-5", "is-6", "is-7", "is-8"]);
}
export function ISize$$$ToString$$2283FB3F(x) {
  return Reflection$0024$0024$0024getCaseName(x);
}
export const Option = declare(function Fulma_Columns_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Columns.Option", [], Option, () => ["is-centered", "is-vcentered", "is-multiline", "is-gapless", "is-grid", "is-mobile", "is-desktop", ["IsGap", [Screen$0024reflection(), ISize$reflection()]], ["IsGapOnly", [Screen$0024reflection(), ISize$reflection()]], ["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function columns(options, children) {
  const parseOptions = function parseOptions(result, option) {
    var x$$1, msg, clo1, x$$2, msg$$1, clo1$$1;

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
          const size = option.fields[1];
          const screen = option.fields[0];

          if (!contains("is-variable", result.Classes, {
            Equals($x$$1, $y$$2) {
              return $x$$1 === $y$$2;
            },

            GetHashCode: structuralHash
          })) {
            return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, "is-variable"), "is-" + ISize$$$ToString$$2283FB3F(size) + Screen$0024$0024$0024ToString$0024$00242D2414B4(screen));
          } else {
            return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, "is-" + ISize$$$ToString$$2283FB3F(size) + Screen$0024$0024$0024ToString$0024$00242D2414B4(screen));
          }
        }

      case 8:
        {
          const size$$3 = option.fields[1];
          const screen$$3 = option.fields[0];

          if (!contains("is-variable", result.Classes, {
            Equals($x$$3, $y$$4) {
              return $x$$3 === $y$$4;
            },

            GetHashCode: structuralHash
          })) {
            return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, "is-variable"), screen$$3.tag === 2 ? "is-" + ISize$$$ToString$$2283FB3F(size$$3) + Screen$0024$0024$0024ToString$0024$00242D2414B4(screen$$3) + "-only" : screen$$3.tag === 1 ? "is-" + ISize$$$ToString$$2283FB3F(size$$3) + Screen$0024$0024$0024ToString$0024$00242D2414B4(screen$$3) + "-only" : screen$$3.tag === 4 ? "is-" + ISize$$$ToString$$2283FB3F(size$$3) + Screen$0024$0024$0024ToString$0024$00242D2414B4(screen$$3) + "-only" : (x$$1 = screen$$3, (msg = (clo1 = toText(printf("Screen `%s` does not support `is-%s-%s-only`.")), function (arg10) {
              const clo2 = clo1(arg10);
              return function (arg20) {
                const clo3 = clo2(arg20);
                return function (arg30) {
                  return clo3(arg30);
                };
              };
            })(Screen$0024$0024$0024ToString$0024$00242D2414B4(x$$1))(ISize$$$ToString$$2283FB3F(size$$3))(Screen$0024$0024$0024ToString$0024$00242D2414B4(x$$1)), (console.warn(msg), ""))));
          } else {
            return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, screen$$3.tag === 2 ? "is-" + ISize$$$ToString$$2283FB3F(size$$3) + Screen$0024$0024$0024ToString$0024$00242D2414B4(screen$$3) + "-only" : screen$$3.tag === 1 ? "is-" + ISize$$$ToString$$2283FB3F(size$$3) + Screen$0024$0024$0024ToString$0024$00242D2414B4(screen$$3) + "-only" : screen$$3.tag === 4 ? "is-" + ISize$$$ToString$$2283FB3F(size$$3) + Screen$0024$0024$0024ToString$0024$00242D2414B4(screen$$3) + "-only" : (x$$2 = screen$$3, (msg$$1 = (clo1$$1 = toText(printf("Screen `%s` does not support `is-%s-%s-only`.")), function (arg10$$1) {
              const clo2$$1 = clo1$$1(arg10$$1);
              return function (arg20$$1) {
                const clo3$$1 = clo2$$1(arg20$$1);
                return function (arg30$$1) {
                  return clo3$$1(arg30$$1);
                };
              };
            })(Screen$0024$0024$0024ToString$0024$00242D2414B4(x$$2))(ISize$$$ToString$$2283FB3F(size$$3))(Screen$0024$0024$0024ToString$0024$00242D2414B4(x$$2)), (console.warn(msg$$1), ""))));
          }
        }

      case 10:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 9:
        {
          const customClass = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 11:
        {
          const modifiers = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, modifiers);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "columns"), function (props$$1, children$$1) {
    return React.createElement("div", createObj(props$$1, 1), ...children$$1);
  }, children);
}
