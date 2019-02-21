import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, option, list as list$$1, type, string, union } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Screen, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Screen$reflection as Screen$0024reflection } from "../Fulma/Common.js";
import { createObj, equals } from "../fable-library.2.2.0-beta-010/Util.js";
import { fold } from "../fable-library.2.2.0-beta-010/List.js";
const createElement = React.createElement;
export const ISize = declare(function Fulma_Column_ISize(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function ISize$reflection() {
  return union("Fulma.Column.ISize", [], ISize, () => ["IsOneQuarter", "IsOneThird", "IsHalf", "IsTwoThirds", "IsThreeQuarters", "Is1", "Is2", "Is3", "Is4", "Is5", "Is6", "Is7", "Is8", "Is9", "Is10", "Is11", "IsNarrow", "IsFull", "IsOneFifth", "IsTwoFifths", "IsThreeFifths", "IsFourFifths"]);
}
export const Option = declare(function Fulma_Column_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Column.Option", [], Option, () => [["Width", [Screen$0024reflection(), ISize$reflection()]], ["Offset", [Screen$0024reflection(), ISize$reflection()]], ["CustomClass", [string]], ["Props", [list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function ofWidth(_arg1_0, _arg1_1) {
  const _arg1 = [_arg1_0, _arg1_1];

  if (_arg1[0].tag === 1) {
    if (_arg1[1].tag === 1) {
      return "is-one-third-desktop";
    } else if (_arg1[1].tag === 2) {
      return "is-half-desktop";
    } else if (_arg1[1].tag === 3) {
      return "is-two-third-desktop";
    } else if (_arg1[1].tag === 4) {
      return "is-three-quarters-desktop";
    } else if (_arg1[1].tag === 5) {
      return "is-1-desktop";
    } else if (_arg1[1].tag === 6) {
      return "is-2-desktop";
    } else if (_arg1[1].tag === 7) {
      return "is-3-desktop";
    } else if (_arg1[1].tag === 8) {
      return "is-4-desktop";
    } else if (_arg1[1].tag === 9) {
      return "is-5-desktop";
    } else if (_arg1[1].tag === 10) {
      return "is-6-desktop";
    } else if (_arg1[1].tag === 11) {
      return "is-7-desktop";
    } else if (_arg1[1].tag === 12) {
      return "is-8-desktop";
    } else if (_arg1[1].tag === 13) {
      return "is-9-desktop";
    } else if (_arg1[1].tag === 14) {
      return "is-10-desktop";
    } else if (_arg1[1].tag === 15) {
      return "is-11-desktop";
    } else if (_arg1[1].tag === 16) {
      return "is-narrow-desktop";
    } else if (_arg1[1].tag === 17) {
      return "is-full-desktop";
    } else if (_arg1[1].tag === 18) {
      return "is-one-fifth-desktop";
    } else if (_arg1[1].tag === 19) {
      return "is-two-fifths-desktop";
    } else if (_arg1[1].tag === 20) {
      return "is-three-fifths-desktop";
    } else if (_arg1[1].tag === 21) {
      return "is-four-fifths-desktop";
    } else {
      return "is-one-quarter-desktop";
    }
  } else if (_arg1[0].tag === 2) {
    if (_arg1[1].tag === 1) {
      return "is-one-third-tablet";
    } else if (_arg1[1].tag === 2) {
      return "is-half-tablet";
    } else if (_arg1[1].tag === 3) {
      return "is-two-third-tablet";
    } else if (_arg1[1].tag === 4) {
      return "is-three-quarters-tablet";
    } else if (_arg1[1].tag === 5) {
      return "is-1-tablet";
    } else if (_arg1[1].tag === 6) {
      return "is-2-tablet";
    } else if (_arg1[1].tag === 7) {
      return "is-3-tablet";
    } else if (_arg1[1].tag === 8) {
      return "is-4-tablet";
    } else if (_arg1[1].tag === 9) {
      return "is-5-tablet";
    } else if (_arg1[1].tag === 10) {
      return "is-6-tablet";
    } else if (_arg1[1].tag === 11) {
      return "is-7-tablet";
    } else if (_arg1[1].tag === 12) {
      return "is-8-tablet";
    } else if (_arg1[1].tag === 13) {
      return "is-9-tablet";
    } else if (_arg1[1].tag === 14) {
      return "is-10-tablet";
    } else if (_arg1[1].tag === 15) {
      return "is-11-tablet";
    } else if (_arg1[1].tag === 16) {
      return "is-narrow-tablet";
    } else if (_arg1[1].tag === 17) {
      return "is-full-tablet";
    } else if (_arg1[1].tag === 18) {
      return "is-one-fifth-tablet";
    } else if (_arg1[1].tag === 19) {
      return "is-two-fifths-tablet";
    } else if (_arg1[1].tag === 20) {
      return "is-three-fifths-tablet";
    } else if (_arg1[1].tag === 21) {
      return "is-four-fifths-tablet";
    } else {
      return "is-one-quarter-tablet";
    }
  } else if (_arg1[0].tag === 3) {
    if (_arg1[1].tag === 1) {
      return "is-one-third-mobile";
    } else if (_arg1[1].tag === 2) {
      return "is-half-mobile";
    } else if (_arg1[1].tag === 3) {
      return "is-two-third-mobile";
    } else if (_arg1[1].tag === 4) {
      return "is-three-quarters-mobile";
    } else if (_arg1[1].tag === 5) {
      return "is-1-mobile";
    } else if (_arg1[1].tag === 6) {
      return "is-2-mobile";
    } else if (_arg1[1].tag === 7) {
      return "is-3-mobile";
    } else if (_arg1[1].tag === 8) {
      return "is-4-mobile";
    } else if (_arg1[1].tag === 9) {
      return "is-5-mobile";
    } else if (_arg1[1].tag === 10) {
      return "is-6-mobile";
    } else if (_arg1[1].tag === 11) {
      return "is-7-mobile";
    } else if (_arg1[1].tag === 12) {
      return "is-8-mobile";
    } else if (_arg1[1].tag === 13) {
      return "is-9-mobile";
    } else if (_arg1[1].tag === 14) {
      return "is-10-mobile";
    } else if (_arg1[1].tag === 15) {
      return "is-11-mobile";
    } else if (_arg1[1].tag === 16) {
      return "is-narrow-mobile";
    } else if (_arg1[1].tag === 17) {
      return "is-full-mobile";
    } else if (_arg1[1].tag === 18) {
      return "is-one-fifth-mobile";
    } else if (_arg1[1].tag === 19) {
      return "is-two-fifths-mobile";
    } else if (_arg1[1].tag === 20) {
      return "is-three-fifths-mobile";
    } else if (_arg1[1].tag === 21) {
      return "is-four-fifths-mobile";
    } else {
      return "is-one-quarter-mobile";
    }
  } else if (_arg1[0].tag === 4) {
    if (_arg1[1].tag === 1) {
      return "is-one-third-widescreen";
    } else if (_arg1[1].tag === 2) {
      return "is-half-widescreen";
    } else if (_arg1[1].tag === 3) {
      return "is-two-third-widescreen";
    } else if (_arg1[1].tag === 4) {
      return "is-three-quarters-widescreen";
    } else if (_arg1[1].tag === 5) {
      return "is-1-widescreen";
    } else if (_arg1[1].tag === 6) {
      return "is-2-widescreen";
    } else if (_arg1[1].tag === 7) {
      return "is-3-widescreen";
    } else if (_arg1[1].tag === 8) {
      return "is-4-widescreen";
    } else if (_arg1[1].tag === 9) {
      return "is-5-widescreen";
    } else if (_arg1[1].tag === 10) {
      return "is-6-widescreen";
    } else if (_arg1[1].tag === 11) {
      return "is-7-widescreen";
    } else if (_arg1[1].tag === 12) {
      return "is-8-widescreen";
    } else if (_arg1[1].tag === 13) {
      return "is-9-widescreen";
    } else if (_arg1[1].tag === 14) {
      return "is-10-widescreen";
    } else if (_arg1[1].tag === 15) {
      return "is-11-widescreen";
    } else if (_arg1[1].tag === 16) {
      return "is-narrow-widescreen";
    } else if (_arg1[1].tag === 17) {
      return "is-full-widescreen";
    } else if (_arg1[1].tag === 18) {
      return "is-one-fifth-widescreen";
    } else if (_arg1[1].tag === 19) {
      return "is-two-fifths-widescreen";
    } else if (_arg1[1].tag === 20) {
      return "is-three-fifths-widescreen";
    } else if (_arg1[1].tag === 21) {
      return "is-four-fifths-widescreen";
    } else {
      return "is-one-quarter-widescreen";
    }
  } else if (_arg1[0].tag === 6) {
    if (_arg1[1].tag === 1) {
      return "is-one-third-fullhd";
    } else if (_arg1[1].tag === 2) {
      return "is-half-fullhd";
    } else if (_arg1[1].tag === 3) {
      return "is-two-third-fullhd";
    } else if (_arg1[1].tag === 4) {
      return "is-three-quarters-fullhd";
    } else if (_arg1[1].tag === 5) {
      return "is-1-fullhd";
    } else if (_arg1[1].tag === 6) {
      return "is-2-fullhd";
    } else if (_arg1[1].tag === 7) {
      return "is-3-fullhd";
    } else if (_arg1[1].tag === 8) {
      return "is-4-fullhd";
    } else if (_arg1[1].tag === 9) {
      return "is-5-fullhd";
    } else if (_arg1[1].tag === 10) {
      return "is-6-fullhd";
    } else if (_arg1[1].tag === 11) {
      return "is-7-fullhd";
    } else if (_arg1[1].tag === 12) {
      return "is-8-fullhd";
    } else if (_arg1[1].tag === 13) {
      return "is-9-fullhd";
    } else if (_arg1[1].tag === 14) {
      return "is-10-fullhd";
    } else if (_arg1[1].tag === 15) {
      return "is-11-fullhd";
    } else if (_arg1[1].tag === 16) {
      return "is-narrow-fullhd";
    } else if (_arg1[1].tag === 17) {
      return "is-full-fullhd";
    } else if (_arg1[1].tag === 18) {
      return "is-one-fifth-fullhd";
    } else if (_arg1[1].tag === 19) {
      return "is-two-fifths-fullhd";
    } else if (_arg1[1].tag === 20) {
      return "is-three-fifths-fullhd";
    } else if (_arg1[1].tag === 21) {
      return "is-four-fifths-fullhd";
    } else {
      return "is-one-quarter-fullhd";
    }
  } else if (_arg1[0].tag === 5) {
    if (_arg1[1].tag === 1) {
      return "is-one-third-touch";
    } else if (_arg1[1].tag === 2) {
      return "is-half-touch";
    } else if (_arg1[1].tag === 3) {
      return "is-two-third-touch";
    } else if (_arg1[1].tag === 4) {
      return "is-three-quarters-touch";
    } else if (_arg1[1].tag === 5) {
      return "is-1-touch";
    } else if (_arg1[1].tag === 6) {
      return "is-2-touch";
    } else if (_arg1[1].tag === 7) {
      return "is-3-touch";
    } else if (_arg1[1].tag === 8) {
      return "is-4-touch";
    } else if (_arg1[1].tag === 9) {
      return "is-5-touch";
    } else if (_arg1[1].tag === 10) {
      return "is-6-touch";
    } else if (_arg1[1].tag === 11) {
      return "is-7-touch";
    } else if (_arg1[1].tag === 12) {
      return "is-8-touch";
    } else if (_arg1[1].tag === 13) {
      return "is-9-touch";
    } else if (_arg1[1].tag === 14) {
      return "is-10-touch";
    } else if (_arg1[1].tag === 15) {
      return "is-11-touch";
    } else if (_arg1[1].tag === 16) {
      return "is-narrow-touch";
    } else if (_arg1[1].tag === 17) {
      return "is-full-touch";
    } else if (_arg1[1].tag === 18) {
      return "is-one-fifth-touch";
    } else if (_arg1[1].tag === 19) {
      return "is-two-fifths-touch";
    } else if (_arg1[1].tag === 20) {
      return "is-three-fifths-touch";
    } else if (_arg1[1].tag === 21) {
      return "is-four-fifths-touch";
    } else {
      return "is-one-quarter-touch";
    }
  } else {
    if (_arg1[1].tag === 1) {
      return "is-one-third";
    } else if (_arg1[1].tag === 2) {
      return "is-half";
    } else if (_arg1[1].tag === 3) {
      return "is-two-third";
    } else if (_arg1[1].tag === 4) {
      return "is-three-quarters";
    } else if (_arg1[1].tag === 5) {
      return "is-1";
    } else if (_arg1[1].tag === 6) {
      return "is-2";
    } else if (_arg1[1].tag === 7) {
      return "is-3";
    } else if (_arg1[1].tag === 8) {
      return "is-4";
    } else if (_arg1[1].tag === 9) {
      return "is-5";
    } else if (_arg1[1].tag === 10) {
      return "is-6";
    } else if (_arg1[1].tag === 11) {
      return "is-7";
    } else if (_arg1[1].tag === 12) {
      return "is-8";
    } else if (_arg1[1].tag === 13) {
      return "is-9";
    } else if (_arg1[1].tag === 14) {
      return "is-10";
    } else if (_arg1[1].tag === 15) {
      return "is-11";
    } else if (_arg1[1].tag === 16) {
      return "is-narrow";
    } else if (_arg1[1].tag === 17) {
      return "is-full";
    } else if (_arg1[1].tag === 18) {
      return "is-one-fifth";
    } else if (_arg1[1].tag === 19) {
      return "is-two-fifths";
    } else if (_arg1[1].tag === 20) {
      return "is-three-fifths";
    } else if (_arg1[1].tag === 21) {
      return "is-four-fifths";
    } else {
      return "is-one-quarter";
    }
  }
}
export function ofOffset(_arg1_0$$1, _arg1_1$$1) {
  const _arg1$$1 = [_arg1_0$$1, _arg1_1$$1];

  if (_arg1$$1[0].tag === 1) {
    if (_arg1$$1[1].tag === 1) {
      return "is-offset-one-third-desktop";
    } else if (_arg1$$1[1].tag === 2) {
      return "is-offset-half-desktop";
    } else if (_arg1$$1[1].tag === 3) {
      return "is-offset-two-third-desktop";
    } else if (_arg1$$1[1].tag === 4) {
      return "is-offset-three-quarters-desktop";
    } else if (_arg1$$1[1].tag === 5) {
      return "is-offset-1-desktop";
    } else if (_arg1$$1[1].tag === 6) {
      return "is-offset-2-desktop";
    } else if (_arg1$$1[1].tag === 7) {
      return "is-offset-3-desktop";
    } else if (_arg1$$1[1].tag === 8) {
      return "is-offset-4-desktop";
    } else if (_arg1$$1[1].tag === 9) {
      return "is-offset-5-desktop";
    } else if (_arg1$$1[1].tag === 10) {
      return "is-offset-6-desktop";
    } else if (_arg1$$1[1].tag === 11) {
      return "is-offset-7-desktop";
    } else if (_arg1$$1[1].tag === 12) {
      return "is-offset-8-desktop";
    } else if (_arg1$$1[1].tag === 13) {
      return "is-offset-9-desktop";
    } else if (_arg1$$1[1].tag === 14) {
      return "is-offset-10-desktop";
    } else if (_arg1$$1[1].tag === 15) {
      return "is-offset-11-desktop";
    } else if (_arg1$$1[1].tag === 16) {
      return "is-offset-narrow-desktop";
    } else if (_arg1$$1[1].tag === 17) {
      return "is-offset-full-desktop";
    } else if (_arg1$$1[1].tag === 18) {
      return "is-offset-one-fifth-desktop";
    } else if (_arg1$$1[1].tag === 19) {
      return "is-offset-two-fifths-desktop";
    } else if (_arg1$$1[1].tag === 20) {
      return "is-offset-three-fifths-desktop";
    } else if (_arg1$$1[1].tag === 21) {
      return "is-offset-four-fifths-desktop";
    } else {
      return "is-offset-one-quarter-desktop";
    }
  } else if (_arg1$$1[0].tag === 2) {
    if (_arg1$$1[1].tag === 1) {
      return "is-offset-one-third-tablet";
    } else if (_arg1$$1[1].tag === 2) {
      return "is-offset-half-tablet";
    } else if (_arg1$$1[1].tag === 3) {
      return "is-offset-two-third-tablet";
    } else if (_arg1$$1[1].tag === 4) {
      return "is-offset-three-quarters-tablet";
    } else if (_arg1$$1[1].tag === 5) {
      return "is-offset-1-tablet";
    } else if (_arg1$$1[1].tag === 6) {
      return "is-offset-2-tablet";
    } else if (_arg1$$1[1].tag === 7) {
      return "is-offset-3-tablet";
    } else if (_arg1$$1[1].tag === 8) {
      return "is-offset-4-tablet";
    } else if (_arg1$$1[1].tag === 9) {
      return "is-offset-5-tablet";
    } else if (_arg1$$1[1].tag === 10) {
      return "is-offset-6-tablet";
    } else if (_arg1$$1[1].tag === 11) {
      return "is-offset-7-tablet";
    } else if (_arg1$$1[1].tag === 12) {
      return "is-offset-8-tablet";
    } else if (_arg1$$1[1].tag === 13) {
      return "is-offset-9-tablet";
    } else if (_arg1$$1[1].tag === 14) {
      return "is-offset-10-tablet";
    } else if (_arg1$$1[1].tag === 15) {
      return "is-offset-11-tablet";
    } else if (_arg1$$1[1].tag === 16) {
      return "is-offset-narrow-tablet";
    } else if (_arg1$$1[1].tag === 17) {
      return "is-offset-full-tablet";
    } else if (_arg1$$1[1].tag === 18) {
      return "is-offset-one-fifth-tablet";
    } else if (_arg1$$1[1].tag === 19) {
      return "is-offset-two-fifths-tablet";
    } else if (_arg1$$1[1].tag === 20) {
      return "is-offset-three-fifths-tablet";
    } else if (_arg1$$1[1].tag === 21) {
      return "is-offset-four-fifths-tablet";
    } else {
      return "is-offset-one-quarter-tablet";
    }
  } else if (_arg1$$1[0].tag === 3) {
    if (_arg1$$1[1].tag === 1) {
      return "is-offset-one-third-mobile";
    } else if (_arg1$$1[1].tag === 2) {
      return "is-offset-half-mobile";
    } else if (_arg1$$1[1].tag === 3) {
      return "is-offset-two-third-mobile";
    } else if (_arg1$$1[1].tag === 4) {
      return "is-offset-three-quarters-mobile";
    } else if (_arg1$$1[1].tag === 5) {
      return "is-offset-1-mobile";
    } else if (_arg1$$1[1].tag === 6) {
      return "is-offset-2-mobile";
    } else if (_arg1$$1[1].tag === 7) {
      return "is-offset-3-mobile";
    } else if (_arg1$$1[1].tag === 8) {
      return "is-offset-4-mobile";
    } else if (_arg1$$1[1].tag === 9) {
      return "is-offset-5-mobile";
    } else if (_arg1$$1[1].tag === 10) {
      return "is-offset-6-mobile";
    } else if (_arg1$$1[1].tag === 11) {
      return "is-offset-7-mobile";
    } else if (_arg1$$1[1].tag === 12) {
      return "is-offset-8-mobile";
    } else if (_arg1$$1[1].tag === 13) {
      return "is-offset-9-mobile";
    } else if (_arg1$$1[1].tag === 14) {
      return "is-offset-10-mobile";
    } else if (_arg1$$1[1].tag === 15) {
      return "is-offset-11-mobile";
    } else if (_arg1$$1[1].tag === 16) {
      return "is-offset-narrow-mobile";
    } else if (_arg1$$1[1].tag === 17) {
      return "is-offset-full-mobile";
    } else if (_arg1$$1[1].tag === 18) {
      return "is-offset-one-fifth-mobile";
    } else if (_arg1$$1[1].tag === 19) {
      return "is-offset-two-fifths-mobile";
    } else if (_arg1$$1[1].tag === 20) {
      return "is-offset-three-fifths-mobile";
    } else if (_arg1$$1[1].tag === 21) {
      return "is-offset-four-fifths-mobile";
    } else {
      return "is-offset-one-quarter-mobile";
    }
  } else if (_arg1$$1[0].tag === 4) {
    if (_arg1$$1[1].tag === 1) {
      return "is-offset-one-third-widescreen";
    } else if (_arg1$$1[1].tag === 2) {
      return "is-offset-half-widescreen";
    } else if (_arg1$$1[1].tag === 3) {
      return "is-offset-two-third-widescreen";
    } else if (_arg1$$1[1].tag === 4) {
      return "is-offset-three-quarters-widescreen";
    } else if (_arg1$$1[1].tag === 5) {
      return "is-offset-1-widescreen";
    } else if (_arg1$$1[1].tag === 6) {
      return "is-offset-2-widescreen";
    } else if (_arg1$$1[1].tag === 7) {
      return "is-offset-3-widescreen";
    } else if (_arg1$$1[1].tag === 8) {
      return "is-offset-4-widescreen";
    } else if (_arg1$$1[1].tag === 9) {
      return "is-offset-5-widescreen";
    } else if (_arg1$$1[1].tag === 10) {
      return "is-offset-6-widescreen";
    } else if (_arg1$$1[1].tag === 11) {
      return "is-offset-7-widescreen";
    } else if (_arg1$$1[1].tag === 12) {
      return "is-offset-8-widescreen";
    } else if (_arg1$$1[1].tag === 13) {
      return "is-offset-9-widescreen";
    } else if (_arg1$$1[1].tag === 14) {
      return "is-offset-10-widescreen";
    } else if (_arg1$$1[1].tag === 15) {
      return "is-offset-11-widescreen";
    } else if (_arg1$$1[1].tag === 16) {
      return "is-offset-narrow-widescreen";
    } else if (_arg1$$1[1].tag === 17) {
      return "is-offset-full-widescreen";
    } else if (_arg1$$1[1].tag === 18) {
      return "is-offset-one-fifth-widescreen";
    } else if (_arg1$$1[1].tag === 19) {
      return "is-offset-two-fifths-widescreen";
    } else if (_arg1$$1[1].tag === 20) {
      return "is-offset-three-fifths-widescreen";
    } else if (_arg1$$1[1].tag === 21) {
      return "is-offset-four-fifths-widescreen";
    } else {
      return "is-offset-one-quarter-widescreen";
    }
  } else if (_arg1$$1[0].tag === 6) {
    if (_arg1$$1[1].tag === 1) {
      return "is-offset-one-third-fullhd";
    } else if (_arg1$$1[1].tag === 2) {
      return "is-offset-half-fullhd";
    } else if (_arg1$$1[1].tag === 3) {
      return "is-offset-two-third-fullhd";
    } else if (_arg1$$1[1].tag === 4) {
      return "is-offset-three-quarters-fullhd";
    } else if (_arg1$$1[1].tag === 5) {
      return "is-offset-1-fullhd";
    } else if (_arg1$$1[1].tag === 6) {
      return "is-offset-2-fullhd";
    } else if (_arg1$$1[1].tag === 7) {
      return "is-offset-3-fullhd";
    } else if (_arg1$$1[1].tag === 8) {
      return "is-offset-4-fullhd";
    } else if (_arg1$$1[1].tag === 9) {
      return "is-offset-5-fullhd";
    } else if (_arg1$$1[1].tag === 10) {
      return "is-offset-6-fullhd";
    } else if (_arg1$$1[1].tag === 11) {
      return "is-offset-7-fullhd";
    } else if (_arg1$$1[1].tag === 12) {
      return "is-offset-8-fullhd";
    } else if (_arg1$$1[1].tag === 13) {
      return "is-offset-9-fullhd";
    } else if (_arg1$$1[1].tag === 14) {
      return "is-offset-10-fullhd";
    } else if (_arg1$$1[1].tag === 15) {
      return "is-offset-11-fullhd";
    } else if (_arg1$$1[1].tag === 16) {
      return "is-offset-narrow-fullhd";
    } else if (_arg1$$1[1].tag === 17) {
      return "is-offset-full-fullhd";
    } else if (_arg1$$1[1].tag === 18) {
      return "is-offset-one-fifth-fullhd";
    } else if (_arg1$$1[1].tag === 19) {
      return "is-offset-two-fifths-fullhd";
    } else if (_arg1$$1[1].tag === 20) {
      return "is-offset-three-fifths-fullhd";
    } else if (_arg1$$1[1].tag === 21) {
      return "is-offset-four-fifths-fullhd";
    } else {
      return "is-offset-one-quarter-fullhd";
    }
  } else if (_arg1$$1[0].tag === 5) {
    if (_arg1$$1[1].tag === 1) {
      return "is-offset-one-third-touch";
    } else if (_arg1$$1[1].tag === 2) {
      return "is-offset-half-touch";
    } else if (_arg1$$1[1].tag === 3) {
      return "is-offset-two-third-touch";
    } else if (_arg1$$1[1].tag === 4) {
      return "is-offset-three-quarters-touch";
    } else if (_arg1$$1[1].tag === 5) {
      return "is-offset-1-touch";
    } else if (_arg1$$1[1].tag === 6) {
      return "is-offset-2-touch";
    } else if (_arg1$$1[1].tag === 7) {
      return "is-offset-3-touch";
    } else if (_arg1$$1[1].tag === 8) {
      return "is-offset-4-touch";
    } else if (_arg1$$1[1].tag === 9) {
      return "is-offset-5-touch";
    } else if (_arg1$$1[1].tag === 10) {
      return "is-offset-6-touch";
    } else if (_arg1$$1[1].tag === 11) {
      return "is-offset-7-touch";
    } else if (_arg1$$1[1].tag === 12) {
      return "is-offset-8-touch";
    } else if (_arg1$$1[1].tag === 13) {
      return "is-offset-9-touch";
    } else if (_arg1$$1[1].tag === 14) {
      return "is-offset-10-touch";
    } else if (_arg1$$1[1].tag === 15) {
      return "is-offset-11-touch";
    } else if (_arg1$$1[1].tag === 16) {
      return "is-offset-narrow-touch";
    } else if (_arg1$$1[1].tag === 17) {
      return "is-offset-full-touch";
    } else if (_arg1$$1[1].tag === 18) {
      return "is-offset-one-fifth-touch";
    } else if (_arg1$$1[1].tag === 19) {
      return "is-offset-two-fifths-touch";
    } else if (_arg1$$1[1].tag === 20) {
      return "is-offset-three-fifths-touch";
    } else if (_arg1$$1[1].tag === 21) {
      return "is-offset-four-fifths-touch";
    } else {
      return "is-offset-one-quarter-touch";
    }
  } else {
    if (_arg1$$1[1].tag === 1) {
      return "is-offset-one-third";
    } else if (_arg1$$1[1].tag === 2) {
      return "is-offset-half";
    } else if (_arg1$$1[1].tag === 3) {
      return "is-offset-two-third";
    } else if (_arg1$$1[1].tag === 4) {
      return "is-offset-three-quarters";
    } else if (_arg1$$1[1].tag === 5) {
      return "is-offset-1";
    } else if (_arg1$$1[1].tag === 6) {
      return "is-offset-2";
    } else if (_arg1$$1[1].tag === 7) {
      return "is-offset-3";
    } else if (_arg1$$1[1].tag === 8) {
      return "is-offset-4";
    } else if (_arg1$$1[1].tag === 9) {
      return "is-offset-5";
    } else if (_arg1$$1[1].tag === 10) {
      return "is-offset-6";
    } else if (_arg1$$1[1].tag === 11) {
      return "is-offset-7";
    } else if (_arg1$$1[1].tag === 12) {
      return "is-offset-8";
    } else if (_arg1$$1[1].tag === 13) {
      return "is-offset-9";
    } else if (_arg1$$1[1].tag === 14) {
      return "is-offset-10";
    } else if (_arg1$$1[1].tag === 15) {
      return "is-offset-11";
    } else if (_arg1$$1[1].tag === 16) {
      return "is-offset-narrow";
    } else if (_arg1$$1[1].tag === 17) {
      return "is-offset-full";
    } else if (_arg1$$1[1].tag === 18) {
      return "is-offset-one-fifth";
    } else if (_arg1$$1[1].tag === 19) {
      return "is-offset-two-fifths";
    } else if (_arg1$$1[1].tag === 20) {
      return "is-offset-three-fifths";
    } else if (_arg1$$1[1].tag === 21) {
      return "is-offset-four-fifths";
    } else {
      return "is-offset-one-quarter";
    }
  }
}
export const Options = declare(function Fulma_Column_Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17) {
  this.Width = arg1;
  this.Offset = arg2;
  this.DesktopWidth = arg3;
  this.DesktopOffset = arg4;
  this.TabletpWidth = arg5;
  this.TabletpOffset = arg6;
  this.MobileWidth = arg7;
  this.MobileOffset = arg8;
  this.WideScreenWidth = arg9;
  this.WideScreenOffset = arg10;
  this.FullHDWidth = arg11;
  this.FullHDOffset = arg12;
  this.TouchWidth = arg13;
  this.TouchOffset = arg14;
  this.CustomClass = arg15;
  this.Props = arg16;
  this.Modifiers = arg17;
}, Record);
export function Options$reflection() {
  return record("Fulma.Column.Options", [], Options, () => [["Width", option(string)], ["Offset", option(string)], ["DesktopWidth", option(string)], ["DesktopOffset", option(string)], ["TabletpWidth", option(string)], ["TabletpOffset", option(string)], ["MobileWidth", option(string)], ["MobileOffset", option(string)], ["WideScreenWidth", option(string)], ["WideScreenOffset", option(string)], ["FullHDWidth", option(string)], ["FullHDOffset", option(string)], ["TouchWidth", option(string)], ["TouchOffset", option(string)], ["CustomClass", option(string)], ["Props", list$$1(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$1(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, new List(), new List());
}
export function column(options, children) {
  const parseOptions = function parseOptions(result, _arg1$$2) {
    var screen$$26, offset$$19, width$$12, screen$$24, screen$$22, offset$$17, width$$10, screen$$20, screen$$18, offset$$15, width$$8, screen$$16, screen$$14, offset$$13, width$$6, screen$$12, screen$$10, offset$$11, width$$4, screen$$8, screen$$6, offset$$9, width$$2, screen$$4, screen$$2, offset$$7, width, screen;
    var $target$$1, screen$$1, width$$1;

    if (_arg1$$2.tag === 0) {
      if (width = _arg1$$2.fields[1], (screen = _arg1$$2.fields[0], equals(screen, new Screen(0, "All")))) {
        $target$$1 = 0;
        screen$$1 = _arg1$$2.fields[0];
        width$$1 = _arg1$$2.fields[1];
      } else {
        $target$$1 = 1;
      }
    } else {
      $target$$1 = 1;
    }

    switch ($target$$1) {
      case 0:
        {
          return new Options(ofWidth(screen$$1, width$$1), result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
        }

      case 1:
        {
          var $target$$2, offset$$8, screen$$3;

          if (_arg1$$2.tag === 1) {
            if (screen$$2 = _arg1$$2.fields[0], (offset$$7 = _arg1$$2.fields[1], equals(screen$$2, new Screen(0, "All")))) {
              $target$$2 = 0;
              offset$$8 = _arg1$$2.fields[1];
              screen$$3 = _arg1$$2.fields[0];
            } else {
              $target$$2 = 1;
            }
          } else {
            $target$$2 = 1;
          }

          switch ($target$$2) {
            case 0:
              {
                return new Options(result.Width, ofOffset(screen$$3, offset$$8), result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
              }

            case 1:
              {
                var $target$$3, screen$$5, width$$3;

                if (_arg1$$2.tag === 0) {
                  if (width$$2 = _arg1$$2.fields[1], (screen$$4 = _arg1$$2.fields[0], equals(screen$$4, new Screen(1, "Desktop")))) {
                    $target$$3 = 0;
                    screen$$5 = _arg1$$2.fields[0];
                    width$$3 = _arg1$$2.fields[1];
                  } else {
                    $target$$3 = 1;
                  }
                } else {
                  $target$$3 = 1;
                }

                switch ($target$$3) {
                  case 0:
                    {
                      return new Options(result.Width, result.Offset, ofWidth(screen$$5, width$$3), result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
                    }

                  case 1:
                    {
                      var $target$$4, offset$$10, screen$$7;

                      if (_arg1$$2.tag === 1) {
                        if (screen$$6 = _arg1$$2.fields[0], (offset$$9 = _arg1$$2.fields[1], equals(screen$$6, new Screen(1, "Desktop")))) {
                          $target$$4 = 0;
                          offset$$10 = _arg1$$2.fields[1];
                          screen$$7 = _arg1$$2.fields[0];
                        } else {
                          $target$$4 = 1;
                        }
                      } else {
                        $target$$4 = 1;
                      }

                      switch ($target$$4) {
                        case 0:
                          {
                            return new Options(result.Width, result.Offset, result.DesktopWidth, ofOffset(screen$$7, offset$$10), result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
                          }

                        case 1:
                          {
                            var $target$$5, screen$$9, width$$5;

                            if (_arg1$$2.tag === 0) {
                              if (width$$4 = _arg1$$2.fields[1], (screen$$8 = _arg1$$2.fields[0], equals(screen$$8, new Screen(2, "Tablet")))) {
                                $target$$5 = 0;
                                screen$$9 = _arg1$$2.fields[0];
                                width$$5 = _arg1$$2.fields[1];
                              } else {
                                $target$$5 = 1;
                              }
                            } else {
                              $target$$5 = 1;
                            }

                            switch ($target$$5) {
                              case 0:
                                {
                                  return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, ofWidth(screen$$9, width$$5), result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
                                }

                              case 1:
                                {
                                  var $target$$6, offset$$12, screen$$11;

                                  if (_arg1$$2.tag === 1) {
                                    if (screen$$10 = _arg1$$2.fields[0], (offset$$11 = _arg1$$2.fields[1], equals(screen$$10, new Screen(2, "Tablet")))) {
                                      $target$$6 = 0;
                                      offset$$12 = _arg1$$2.fields[1];
                                      screen$$11 = _arg1$$2.fields[0];
                                    } else {
                                      $target$$6 = 1;
                                    }
                                  } else {
                                    $target$$6 = 1;
                                  }

                                  switch ($target$$6) {
                                    case 0:
                                      {
                                        return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, ofOffset(screen$$11, offset$$12), result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
                                      }

                                    case 1:
                                      {
                                        var $target$$7, screen$$13, width$$7;

                                        if (_arg1$$2.tag === 0) {
                                          if (width$$6 = _arg1$$2.fields[1], (screen$$12 = _arg1$$2.fields[0], equals(screen$$12, new Screen(3, "Mobile")))) {
                                            $target$$7 = 0;
                                            screen$$13 = _arg1$$2.fields[0];
                                            width$$7 = _arg1$$2.fields[1];
                                          } else {
                                            $target$$7 = 1;
                                          }
                                        } else {
                                          $target$$7 = 1;
                                        }

                                        switch ($target$$7) {
                                          case 0:
                                            {
                                              return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, ofWidth(screen$$13, width$$7), result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
                                            }

                                          case 1:
                                            {
                                              var $target$$8, offset$$14, screen$$15;

                                              if (_arg1$$2.tag === 1) {
                                                if (screen$$14 = _arg1$$2.fields[0], (offset$$13 = _arg1$$2.fields[1], equals(screen$$14, new Screen(3, "Mobile")))) {
                                                  $target$$8 = 0;
                                                  offset$$14 = _arg1$$2.fields[1];
                                                  screen$$15 = _arg1$$2.fields[0];
                                                } else {
                                                  $target$$8 = 1;
                                                }
                                              } else {
                                                $target$$8 = 1;
                                              }

                                              switch ($target$$8) {
                                                case 0:
                                                  {
                                                    return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, ofOffset(screen$$15, offset$$14), result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
                                                  }

                                                case 1:
                                                  {
                                                    var $target$$9, screen$$17, width$$9;

                                                    if (_arg1$$2.tag === 0) {
                                                      if (width$$8 = _arg1$$2.fields[1], (screen$$16 = _arg1$$2.fields[0], equals(screen$$16, new Screen(4, "WideScreen")))) {
                                                        $target$$9 = 0;
                                                        screen$$17 = _arg1$$2.fields[0];
                                                        width$$9 = _arg1$$2.fields[1];
                                                      } else {
                                                        $target$$9 = 1;
                                                      }
                                                    } else {
                                                      $target$$9 = 1;
                                                    }

                                                    switch ($target$$9) {
                                                      case 0:
                                                        {
                                                          return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, ofWidth(screen$$17, width$$9), result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
                                                        }

                                                      case 1:
                                                        {
                                                          var $target$$10, offset$$16, screen$$19;

                                                          if (_arg1$$2.tag === 1) {
                                                            if (screen$$18 = _arg1$$2.fields[0], (offset$$15 = _arg1$$2.fields[1], equals(screen$$18, new Screen(4, "WideScreen")))) {
                                                              $target$$10 = 0;
                                                              offset$$16 = _arg1$$2.fields[1];
                                                              screen$$19 = _arg1$$2.fields[0];
                                                            } else {
                                                              $target$$10 = 1;
                                                            }
                                                          } else {
                                                            $target$$10 = 1;
                                                          }

                                                          switch ($target$$10) {
                                                            case 0:
                                                              {
                                                                return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, ofOffset(screen$$19, offset$$16), result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
                                                              }

                                                            case 1:
                                                              {
                                                                var $target$$11, screen$$21, width$$11;

                                                                if (_arg1$$2.tag === 0) {
                                                                  if (width$$10 = _arg1$$2.fields[1], (screen$$20 = _arg1$$2.fields[0], equals(screen$$20, new Screen(6, "FullHD")))) {
                                                                    $target$$11 = 0;
                                                                    screen$$21 = _arg1$$2.fields[0];
                                                                    width$$11 = _arg1$$2.fields[1];
                                                                  } else {
                                                                    $target$$11 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$11 = 1;
                                                                }

                                                                switch ($target$$11) {
                                                                  case 0:
                                                                    {
                                                                      return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, ofWidth(screen$$21, width$$11), result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
                                                                    }

                                                                  case 1:
                                                                    {
                                                                      var $target$$12, offset$$18, screen$$23;

                                                                      if (_arg1$$2.tag === 1) {
                                                                        if (screen$$22 = _arg1$$2.fields[0], (offset$$17 = _arg1$$2.fields[1], equals(screen$$22, new Screen(6, "FullHD")))) {
                                                                          $target$$12 = 0;
                                                                          offset$$18 = _arg1$$2.fields[1];
                                                                          screen$$23 = _arg1$$2.fields[0];
                                                                        } else {
                                                                          $target$$12 = 1;
                                                                        }
                                                                      } else {
                                                                        $target$$12 = 1;
                                                                      }

                                                                      switch ($target$$12) {
                                                                        case 0:
                                                                          {
                                                                            return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, ofOffset(screen$$23, offset$$18), result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
                                                                          }

                                                                        case 1:
                                                                          {
                                                                            var $target$$13, screen$$25, width$$13;

                                                                            if (_arg1$$2.tag === 0) {
                                                                              if (width$$12 = _arg1$$2.fields[1], (screen$$24 = _arg1$$2.fields[0], equals(screen$$24, new Screen(5, "Touch")))) {
                                                                                $target$$13 = 0;
                                                                                screen$$25 = _arg1$$2.fields[0];
                                                                                width$$13 = _arg1$$2.fields[1];
                                                                              } else {
                                                                                $target$$13 = 1;
                                                                              }
                                                                            } else {
                                                                              $target$$13 = 1;
                                                                            }

                                                                            switch ($target$$13) {
                                                                              case 0:
                                                                                {
                                                                                  return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, ofWidth(screen$$25, width$$13), result.TouchOffset, result.CustomClass, result.Props, result.Modifiers);
                                                                                }

                                                                              case 1:
                                                                                {
                                                                                  var $target$$14, offset$$20, screen$$27;

                                                                                  if (_arg1$$2.tag === 1) {
                                                                                    if (screen$$26 = _arg1$$2.fields[0], (offset$$19 = _arg1$$2.fields[1], equals(screen$$26, new Screen(5, "Touch")))) {
                                                                                      $target$$14 = 0;
                                                                                      offset$$20 = _arg1$$2.fields[1];
                                                                                      screen$$27 = _arg1$$2.fields[0];
                                                                                    } else {
                                                                                      $target$$14 = 1;
                                                                                    }
                                                                                  } else {
                                                                                    $target$$14 = 1;
                                                                                  }

                                                                                  switch ($target$$14) {
                                                                                    case 0:
                                                                                      {
                                                                                        return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, ofOffset(screen$$27, offset$$20), result.CustomClass, result.Props, result.Modifiers);
                                                                                      }

                                                                                    case 1:
                                                                                      {
                                                                                        switch (_arg1$$2.tag) {
                                                                                          case 2:
                                                                                            {
                                                                                              const customClass = _arg1$$2.fields[0];
                                                                                              return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, customClass, result.Props, result.Modifiers);
                                                                                            }

                                                                                          case 3:
                                                                                            {
                                                                                              const props = _arg1$$2.fields[0];
                                                                                              return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, props, result.Modifiers);
                                                                                            }

                                                                                          case 4:
                                                                                            {
                                                                                              const modifiers = _arg1$$2.fields[0];
                                                                                              return new Options(result.Width, result.Offset, result.DesktopWidth, result.DesktopOffset, result.TabletpWidth, result.TabletpOffset, result.MobileWidth, result.MobileOffset, result.WideScreenWidth, result.WideScreenOffset, result.FullHDWidth, result.FullHDOffset, result.TouchWidth, result.TouchOffset, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
                                                                                            }

                                                                                          default:
                                                                                            {
                                                                                              const x = _arg1$$2;
                                                                                              console.warn("Error when parsing column option " + String(x));
                                                                                              return result;
                                                                                            }
                                                                                        }
                                                                                      }
                                                                                  }
                                                                                }
                                                                            }
                                                                          }
                                                                      }
                                                                    }
                                                                }
                                                              }
                                                          }
                                                        }
                                                    }
                                                  }
                                              }
                                            }
                                        }
                                      }
                                  }
                                }
                            }
                          }
                      }
                    }
                }
              }
          }
        }
    }
  };

  const opts = fold(parseOptions, Options$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("column", new List(opts.Width, new List(opts.Offset, new List(opts.DesktopWidth, new List(opts.DesktopOffset, new List(opts.MobileWidth, new List(opts.MobileOffset, new List(opts.TabletpWidth, new List(opts.TabletpOffset, new List(opts.WideScreenWidth, new List(opts.WideScreenOffset, new List(opts.FullHDWidth, new List(opts.FullHDOffset, new List(opts.TouchWidth, new List(opts.TouchOffset, new List(opts.CustomClass, opts.Modifiers))))))))))))))), new List());
  return createElement("div", createObj(new List(classes, opts.Props), 1), ...children);
}
