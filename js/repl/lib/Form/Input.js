import { List, declare, Union } from "../../fable-library/Types.js";
import { list, lambda, unit, type, bool, string, union } from "../../fable-library/Reflection.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Color$$$ofColor as Color$0024$0024$0024ofColor, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$ToReactElement$$Z46A53D36 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { equals, createObj } from "../../fable-library/Util.js";
import { DOMAttr, Prop, HTMLAttr } from "../src/Fable.React.Props.js";
export const IInputType = declare(function Fulma_Input_IInputType(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function IInputType$reflection() {
  return union("Fulma.Input.IInputType", [], IInputType, () => ["Text", "Password", "DatetimeLocal", "Date", "Month", "Time", "Week", "Number", "Email", "Url", "Search", "Tel", "ColorType"]);
}
export const Option = declare(function Fulma_Input_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Input.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], ["Type", [IInputType$reflection()]], ["Color", [Color$0024002EIColor$0024reflection()]], ["Id", [string]], ["Disabled", [bool]], ["IsReadOnly", [bool]], ["is-static", [bool]], "is-rounded", ["Value", [string]], ["Key", [string]], ["DefaultValue", [string]], ["ValueOrDefault", [string]], ["Placeholder", [string]], ["OnChange", [lambda(type("Browser.Types.Event"), unit)]], ["Ref", [lambda(type("Browser.Types.Element"), unit)]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}

function ofType(typ) {
  switch (typ.tag) {
    case 1:
      {
        return "password";
      }

    case 2:
      {
        return "datetime-local";
      }

    case 3:
      {
        return "date";
      }

    case 4:
      {
        return "month";
      }

    case 5:
      {
        return "time";
      }

    case 6:
      {
        return "week";
      }

    case 7:
      {
        return "number";
      }

    case 8:
      {
        return "email";
      }

    case 9:
      {
        return "url";
      }

    case 10:
      {
        return "search";
      }

    case 11:
      {
        return "tel";
      }

    case 12:
      {
        return "color";
      }

    default:
      {
        return "text";
      }
  }
}

export function input(options) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z46A53D36(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    switch (option.tag) {
      case 7:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 0:
        {
          const arg00 = Reflection$0024$0024$0024getCaseName(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00);
        }

      case 2:
        {
          const arg00$$1 = Color$0024$0024$0024ofColor(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00$$1);
        }

      case 1:
        {
          const arg00$$2 = new HTMLAttr(119, "Type", ofType(option.fields[0]));
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$2);
        }

      case 3:
        {
          const arg00$$3 = new HTMLAttr(59, "Id", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$3);
        }

      case 4:
        {
          const arg00$$4 = new HTMLAttr(39, "Disabled", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$4);
        }

      case 5:
        {
          const arg00$$5 = new HTMLAttr(92, "ReadOnly", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$5);
        }

      case 8:
        {
          const arg00$$6 = new HTMLAttr(121, "Value", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$6);
        }

      case 10:
        {
          const arg00$$7 = new HTMLAttr(1, "DefaultValue", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$7);
        }

      case 11:
        {
          let arg00$$8;
          arg00$$8 = new Prop(1, "Ref", function (e) {
            var value$$2;

            if ((value$$2 = (e == null), (!value$$2)) ? !equals(e.value, option.fields[0]) : false) {
              e.value = option.fields[0];
            }
          });
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$8);
        }

      case 12:
        {
          const arg00$$9 = new HTMLAttr(88, "Placeholder", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$9);
        }

      case 13:
        {
          const arg00$$10 = new DOMAttr(9, "OnChange", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$10);
        }

      case 14:
        {
          const arg00$$11 = new Prop(1, "Ref", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$11);
        }

      case 15:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 16:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 17:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }

      case 9:
        {
          const arg00$$12 = new Prop(0, "Key", option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result, arg00$$12);
        }

      default:
        {
          if (option.fields[0]) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
          } else {
            return result;
          }
        }
    }
  }, "input"), function (props$$1) {
    const props$$2 = props$$1;
    return React.createElement("input", createObj(props$$2, 1), ...[]);
  });
}
export function text(options$$1) {
  return input(new List(new Option(1, "Type", new IInputType(0, "Text")), options$$1));
}
export function password(options$$2) {
  return input(new List(new Option(1, "Type", new IInputType(1, "Password")), options$$2));
}
export function datetimeLocal(options$$3) {
  return input(new List(new Option(1, "Type", new IInputType(2, "DatetimeLocal")), options$$3));
}
export function date(options$$4) {
  return input(new List(new Option(1, "Type", new IInputType(3, "Date")), options$$4));
}
export function month(options$$5) {
  return input(new List(new Option(1, "Type", new IInputType(4, "Month")), options$$5));
}
export function time(options$$6) {
  return input(new List(new Option(1, "Type", new IInputType(5, "Time")), options$$6));
}
export function week(options$$7) {
  return input(new List(new Option(1, "Type", new IInputType(6, "Week")), options$$7));
}
export function number(options$$8) {
  return input(new List(new Option(1, "Type", new IInputType(7, "Number")), options$$8));
}
export function email(options$$9) {
  return input(new List(new Option(1, "Type", new IInputType(8, "Email")), options$$9));
}
export function url(options$$10) {
  return input(new List(new Option(1, "Type", new IInputType(9, "Url")), options$$10));
}
export function search(options$$11) {
  return input(new List(new Option(1, "Type", new IInputType(10, "Search")), options$$11));
}
export function tel(options$$12) {
  return input(new List(new Option(1, "Type", new IInputType(11, "Tel")), options$$12));
}
export function color(options$$13) {
  return input(new List(new Option(1, "Type", new IInputType(12, "ColorType")), options$$13));
}
