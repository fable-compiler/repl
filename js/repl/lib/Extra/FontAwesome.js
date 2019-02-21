import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { record, bool, option as option$$3, string, type, union } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { ofArray, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
import { icon } from "../Elements/Icon.js";
const createElement = React.createElement;
export function Fa$002EI$$$Tags() {
  return "fa-tags";
}
export function Fa$002EI$$$$003500px() {
  return "fa-500px";
}
export function Fa$002EI$$$Custom(iconClass) {
  return iconClass;
}
export const Fa$002ETypes$002EIIconSize = declare(function Fulma_FontAwesome_Fa_Types_IIconSize(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Fa$002ETypes$002EIIconSize$reflection() {
  return union("Fulma.FontAwesome.Fa.Types.IIconSize", [], Fa$002ETypes$002EIIconSize, () => ["FaLarge", "Fa2x", "Fa3x", "Fa4x", "Fa5x", "Fw"]);
}
export const Fa$002ETypes$002EIBorder = declare(function Fulma_FontAwesome_Fa_Types_IBorder(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Fa$002ETypes$002EIBorder$reflection() {
  return union("Fulma.FontAwesome.Fa.Types.IBorder", [], Fa$002ETypes$002EIBorder, () => ["FaBorder"]);
}
export const Fa$002ETypes$002EIPull = declare(function Fulma_FontAwesome_Fa_Types_IPull(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Fa$002ETypes$002EIPull$reflection() {
  return union("Fulma.FontAwesome.Fa.Types.IPull", [], Fa$002ETypes$002EIPull, () => ["PullLeft", "PullRight"]);
}
export const Fa$002ETypes$002EIAnimation = declare(function Fulma_FontAwesome_Fa_Types_IAnimation(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Fa$002ETypes$002EIAnimation$reflection() {
  return union("Fulma.FontAwesome.Fa.Types.IAnimation", [], Fa$002ETypes$002EIAnimation, () => ["Spin", "Pulse"]);
}
export const Fa$002ETypes$002EIRotation = declare(function Fulma_FontAwesome_Fa_Types_IRotation(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Fa$002ETypes$002EIRotation$reflection() {
  return union("Fulma.FontAwesome.Fa.Types.IRotation", [], Fa$002ETypes$002EIRotation, () => ["Rotate90", "Rotate180", "Rotate270"]);
}
export const Fa$002ETypes$002EIFLip = declare(function Fulma_FontAwesome_Fa_Types_IFLip(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Fa$002ETypes$002EIFLip$reflection() {
  return union("Fulma.FontAwesome.Fa.Types.IFLip", [], Fa$002ETypes$002EIFLip, () => ["Horizontal", "Vertical"]);
}
export const Fa$002ETypes$002EIColor = declare(function Fulma_FontAwesome_Fa_Types_IColor(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Fa$002ETypes$002EIColor$reflection() {
  return union("Fulma.FontAwesome.Fa.Types.IColor", [], Fa$002ETypes$002EIColor, () => ["Inverse"]);
}
export const Fa$002ETypes$002EIStackChildSize = declare(function Fulma_FontAwesome_Fa_Types_IStackChildSize(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Fa$002ETypes$002EIStackChildSize$reflection() {
  return union("Fulma.FontAwesome.Fa.Types.IStackChildSize", [], Fa$002ETypes$002EIStackChildSize, () => ["FaStack1x", "FaStack2x"]);
}
export const Fa$002ETypes$002EIconOption = declare(function Fulma_FontAwesome_Fa_Types_IconOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Fa$002ETypes$002EIconOption$reflection() {
  return union("Fulma.FontAwesome.Fa.Types.IconOption", [], Fa$002ETypes$002EIconOption, () => [["Size", [Fa$002ETypes$002EIIconSize$reflection()]], ["Border", [Fa$002ETypes$002EIBorder$reflection()]], ["Pull", [Fa$002ETypes$002EIPull$reflection()]], ["Rotation", [Fa$002ETypes$002EIRotation$reflection()]], ["Flip", [Fa$002ETypes$002EIFLip$reflection()]], ["Color", [Fa$002ETypes$002EIColor$reflection()]], ["Icon", [type("Fulma.FontAwesome.Fa.I.IFontAwesomeIcon")]], ["Animation", [Fa$002ETypes$002EIAnimation$reflection()]], "IsLi"]);
}
export const Fa$002ETypes$002EStackParentOption = declare(function Fulma_FontAwesome_Fa_Types_StackParentOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Fa$002ETypes$002EStackParentOption$reflection() {
  return union("Fulma.FontAwesome.Fa.Types.StackParentOption", [], Fa$002ETypes$002EStackParentOption, () => [["ParentSize", [Fa$002ETypes$002EIIconSize$reflection()]]]);
}
export const Fa$002ETypes$002EStackChildOption = declare(function Fulma_FontAwesome_Fa_Types_StackChildOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Fa$002ETypes$002EStackChildOption$reflection() {
  return union("Fulma.FontAwesome.Fa.Types.StackChildOption", [], Fa$002ETypes$002EStackChildOption, () => [["ChildSize", [Fa$002ETypes$002EIStackChildSize$reflection()]], ["ChildColor", [Fa$002ETypes$002EIColor$reflection()]], ["ChildIcon", [type("Fulma.FontAwesome.Fa.I.IFontAwesomeIcon")]]]);
}
export function Fa$002ETypes$$$ofSize(_arg1) {
  switch (_arg1.tag) {
    case 1:
      {
        return "fa-2x";
      }

    case 2:
      {
        return "fa-3x";
      }

    case 3:
      {
        return "fa-4x";
      }

    case 4:
      {
        return "fa-5x";
      }

    case 5:
      {
        return "fa-fw";
      }

    default:
      {
        return "fa-lg";
      }
  }
}
export function Fa$002ETypes$$$ofChildSize(_arg1$$1) {
  if (_arg1$$1.tag === 1) {
    return "fa-stack-2x";
  } else {
    return "fa-stack-1x";
  }
}
export function Fa$002ETypes$$$ofBorder(_arg1$$2) {
  return "fa-border";
}
export function Fa$002ETypes$$$ofPull(_arg1$$3) {
  if (_arg1$$3.tag === 1) {
    return "fa-pull-right";
  } else {
    return "fa-pull-left";
  }
}
export function Fa$002ETypes$$$ofAnimation(_arg1$$4) {
  if (_arg1$$4.tag === 1) {
    return "fa-pulse";
  } else {
    return "fa-spin";
  }
}
export function Fa$002ETypes$$$ofRotation(_arg1$$5) {
  switch (_arg1$$5.tag) {
    case 1:
      {
        return "fa-rotate-180";
      }

    case 2:
      {
        return "fa-rotate-270";
      }

    default:
      {
        return "fa-rotate-90";
      }
  }
}
export function Fa$002ETypes$$$ofFlip(_arg1$$6) {
  if (_arg1$$6.tag === 1) {
    return "fa-flip-vertical";
  } else {
    return "fa-flip-horizontal";
  }
}
export function Fa$002ETypes$$$ofColor(_arg1$$7) {
  return "fa-inverse";
}
export const Fa$002ETypes$002EIconOptions = declare(function Fulma_FontAwesome_Fa_Types_IconOptions(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.Icon = arg1;
  this.Size = arg2;
  this.Border = arg3;
  this.Pull = arg4;
  this.Animation = arg5;
  this.Rotation = arg6;
  this.Flip = arg7;
  this.Color = arg8;
  this.IsLi = arg9;
}, Record);
export function Fa$002ETypes$002EIconOptions$reflection() {
  return record("Fulma.FontAwesome.Fa.Types.IconOptions", [], Fa$002ETypes$002EIconOptions, () => [["Icon", option$$3(string)], ["Size", option$$3(string)], ["Border", option$$3(string)], ["Pull", option$$3(string)], ["Animation", option$$3(string)], ["Rotation", option$$3(string)], ["Flip", option$$3(string)], ["Color", option$$3(string)], ["IsLi", bool]]);
}
export function Fa$002ETypes$002EIconOptions$$$get_Empty() {
  return new Fa$002ETypes$002EIconOptions(null, null, null, null, null, null, null, null, false);
}
export const Fa$002ETypes$002EStackParentOptions = declare(function Fulma_FontAwesome_Fa_Types_StackParentOptions(arg1) {
  this.Size = arg1;
}, Record);
export function Fa$002ETypes$002EStackParentOptions$reflection() {
  return record("Fulma.FontAwesome.Fa.Types.StackParentOptions", [], Fa$002ETypes$002EStackParentOptions, () => [["Size", option$$3(string)]]);
}
export function Fa$002ETypes$002EStackParentOptions$$$get_Empty() {
  return new Fa$002ETypes$002EStackParentOptions(null);
}
export const Fa$002ETypes$002EStackChildOptions = declare(function Fulma_FontAwesome_Fa_Types_StackChildOptions(arg1, arg2, arg3) {
  this.Size = arg1;
  this.Color = arg2;
  this.Icon = arg3;
}, Record);
export function Fa$002ETypes$002EStackChildOptions$reflection() {
  return record("Fulma.FontAwesome.Fa.Types.StackChildOptions", [], Fa$002ETypes$002EStackChildOptions, () => [["Size", option$$3(string)], ["Color", option$$3(string)], ["Icon", option$$3(string)]]);
}
export function Fa$002ETypes$002EStackChildOptions$$$get_Empty() {
  return new Fa$002ETypes$002EStackChildOptions(null, null, null);
}
export function Fa$$$icon(i) {
  return new Fa$002ETypes$002EIconOption(6, "Icon", i);
}
export const Fa$$$faLg = new Fa$002ETypes$002EIconOption(0, "Size", new Fa$002ETypes$002EIIconSize(0, "FaLarge"));
export const Fa$$$fa2x = new Fa$002ETypes$002EIconOption(0, "Size", new Fa$002ETypes$002EIIconSize(1, "Fa2x"));
export const Fa$$$fa3x = new Fa$002ETypes$002EIconOption(0, "Size", new Fa$002ETypes$002EIIconSize(2, "Fa3x"));
export const Fa$$$fa4x = new Fa$002ETypes$002EIconOption(0, "Size", new Fa$002ETypes$002EIIconSize(3, "Fa4x"));
export const Fa$$$fa5x = new Fa$002ETypes$002EIconOption(0, "Size", new Fa$002ETypes$002EIIconSize(4, "Fa5x"));
export const Fa$$$fw = new Fa$002ETypes$002EIconOption(0, "Size", new Fa$002ETypes$002EIIconSize(5, "Fw"));
export const Fa$$$border = new Fa$002ETypes$002EIconOption(1, "Border", new Fa$002ETypes$002EIBorder(0, "FaBorder"));
export const Fa$$$pullLeft = new Fa$002ETypes$002EIconOption(2, "Pull", new Fa$002ETypes$002EIPull(0, "PullLeft"));
export const Fa$$$pullRight = new Fa$002ETypes$002EIconOption(2, "Pull", new Fa$002ETypes$002EIPull(1, "PullRight"));
export const Fa$$$rotate90 = new Fa$002ETypes$002EIconOption(3, "Rotation", new Fa$002ETypes$002EIRotation(0, "Rotate90"));
export const Fa$$$rotate180 = new Fa$002ETypes$002EIconOption(3, "Rotation", new Fa$002ETypes$002EIRotation(1, "Rotate180"));
export const Fa$$$rotate270 = new Fa$002ETypes$002EIconOption(3, "Rotation", new Fa$002ETypes$002EIRotation(2, "Rotate270"));
export const Fa$$$spin = new Fa$002ETypes$002EIconOption(7, "Animation", new Fa$002ETypes$002EIAnimation(0, "Spin"));
export const Fa$$$pulse = new Fa$002ETypes$002EIconOption(7, "Animation", new Fa$002ETypes$002EIAnimation(1, "Pulse"));
export const Fa$$$flipHorizontal = new Fa$002ETypes$002EIconOption(4, "Flip", new Fa$002ETypes$002EIFLip(0, "Horizontal"));
export const Fa$$$flipVertical = new Fa$002ETypes$002EIconOption(4, "Flip", new Fa$002ETypes$002EIFLip(1, "Vertical"));
export const Fa$$$colorInverse = new Fa$002ETypes$002EIconOption(5, "Color", new Fa$002ETypes$002EIColor(0, "Inverse"));
export const Fa$$$isLi = new Fa$002ETypes$002EIconOption(8, "IsLi");
export const Fa$002EChild$$$faStack2x = new Fa$002ETypes$002EStackChildOption(0, "ChildSize", new Fa$002ETypes$002EIStackChildSize(1, "FaStack2x"));
export const Fa$002EChild$$$faStack1x = new Fa$002ETypes$002EStackChildOption(0, "ChildSize", new Fa$002ETypes$002EIStackChildSize(0, "FaStack1x"));
export const Fa$002EChild$$$colorInverse = new Fa$002ETypes$002EStackChildOption(1, "ChildColor", new Fa$002ETypes$002EIColor(0, "Inverse"));
export function Fa$002EChild$$$icon(i$$1) {
  return new Fa$002ETypes$002EStackChildOption(2, "ChildIcon", i$$1);
}
export const Fa$002EParent$$$faLg = new Fa$002ETypes$002EStackParentOption(0, "ParentSize", new Fa$002ETypes$002EIIconSize(0, "FaLarge"));
export function Icon$$$stackChild(faOptions) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          const c = option.fields[0];
          return new Fa$002ETypes$002EStackChildOptions(result.Size, Fa$002ETypes$$$ofColor(c), result.Icon);
        }

      case 2:
        {
          const faIcon = option.fields[0];
          return new Fa$002ETypes$002EStackChildOptions(result.Size, result.Color, faIcon);
        }

      default:
        {
          const s = option.fields[0];
          return new Fa$002ETypes$002EStackChildOptions(Fa$002ETypes$$$ofChildSize(s), result.Color, result.Icon);
        }
    }
  };

  const opts = fold(parseOptions, Fa$002ETypes$002EStackChildOptions$$$get_Empty(), faOptions);
  return createElement("i", createObj([Common$0024002EHelpers$0024$0024$0024classes("fa", ofArray([opts.Icon, opts.Size, opts.Color]), new List())], 1), ...[]);
}
export function Icon$$$stackParent(faOptions$$1, children$$2) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, option$$1) {
    const s$$1 = option$$1.fields[0];
    return new Fa$002ETypes$002EStackParentOptions(Fa$002ETypes$$$ofSize(s$$1));
  };

  const opts$$1 = fold(parseOptions$$1, Fa$002ETypes$002EStackParentOptions$$$get_Empty(), faOptions$$1);
  return createElement("span", createObj([Common$0024002EHelpers$0024$0024$0024classes("fa-stack", new List(opts$$1.Size, new List()), new List())], 1), ...children$$2);
}
export function Icon$$$toIconOptions(faOptions$$2) {
  const parseOptions$$2 = function parseOptions$$2(result$$2, option$$2) {
    switch (option$$2.tag) {
      case 1:
        {
          const b = option$$2.fields[0];
          return new Fa$002ETypes$002EIconOptions(result$$2.Icon, result$$2.Size, Fa$002ETypes$$$ofBorder(b), result$$2.Pull, result$$2.Animation, result$$2.Rotation, result$$2.Flip, result$$2.Color, result$$2.IsLi);
        }

      case 2:
        {
          const p = option$$2.fields[0];
          return new Fa$002ETypes$002EIconOptions(result$$2.Icon, result$$2.Size, result$$2.Border, Fa$002ETypes$$$ofPull(p), result$$2.Animation, result$$2.Rotation, result$$2.Flip, result$$2.Color, result$$2.IsLi);
        }

      case 6:
        {
          const faIcon$$1 = option$$2.fields[0];
          return new Fa$002ETypes$002EIconOptions(faIcon$$1, result$$2.Size, result$$2.Border, result$$2.Pull, result$$2.Animation, result$$2.Rotation, result$$2.Flip, result$$2.Color, result$$2.IsLi);
        }

      case 3:
        {
          const r = option$$2.fields[0];
          return new Fa$002ETypes$002EIconOptions(result$$2.Icon, result$$2.Size, result$$2.Border, result$$2.Pull, result$$2.Animation, Fa$002ETypes$$$ofRotation(r), result$$2.Flip, result$$2.Color, result$$2.IsLi);
        }

      case 4:
        {
          const f = option$$2.fields[0];
          return new Fa$002ETypes$002EIconOptions(result$$2.Icon, result$$2.Size, result$$2.Border, result$$2.Pull, result$$2.Animation, Fa$002ETypes$$$ofFlip(f), result$$2.Flip, result$$2.Color, result$$2.IsLi);
        }

      case 5:
        {
          const i$$2 = option$$2.fields[0];
          return new Fa$002ETypes$002EIconOptions(result$$2.Icon, result$$2.Size, result$$2.Border, result$$2.Pull, result$$2.Animation, result$$2.Rotation, result$$2.Flip, Fa$002ETypes$$$ofColor(i$$2), result$$2.IsLi);
        }

      case 7:
        {
          const a = option$$2.fields[0];
          return new Fa$002ETypes$002EIconOptions(result$$2.Icon, result$$2.Size, result$$2.Border, result$$2.Pull, Fa$002ETypes$$$ofAnimation(a), result$$2.Rotation, result$$2.Flip, result$$2.Color, result$$2.IsLi);
        }

      case 8:
        {
          return new Fa$002ETypes$002EIconOptions(result$$2.Icon, result$$2.Size, result$$2.Border, result$$2.Pull, result$$2.Animation, result$$2.Rotation, result$$2.Flip, result$$2.Color, false);
        }

      default:
        {
          const s$$2 = option$$2.fields[0];
          return new Fa$002ETypes$002EIconOptions(result$$2.Icon, Fa$002ETypes$$$ofSize(s$$2), result$$2.Border, result$$2.Pull, result$$2.Animation, result$$2.Rotation, result$$2.Flip, result$$2.Color, result$$2.IsLi);
        }
    }
  };

  return fold(parseOptions$$2, Fa$002ETypes$002EIconOptions$$$get_Empty(), faOptions$$2);
}
export function Icon$$$displayIcon(baseClass, opts$$2) {
  return createElement("i", createObj([Common$0024002EHelpers$0024$0024$0024classes(baseClass, ofArray([opts$$2.Icon, opts$$2.Size, opts$$2.Border, opts$$2.Pull, opts$$2.Animation, opts$$2.Rotation, opts$$2.Flip, opts$$2.Color]), new List())], 1), ...[]);
}
export function Icon$$$faIcon(options, faOptions$$3) {
  const opts$$3 = Icon$$$toIconOptions(faOptions$$3);
  return icon(options, [Icon$$$displayIcon("fa ", opts$$3)]);
}
export function Icon$$$fa_ul(options$$1, children$$7) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$1);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("fa-ul", new List(opts$$4.CustomClass, new List()), new List());
  return createElement("ul", createObj(new List(classes, opts$$4.Props), 1), ...children$$7);
}
