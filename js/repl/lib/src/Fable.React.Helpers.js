import { createObj, equals, uncurry } from "../fable-library.2.3.7/Util.js";
import { ofList } from "../fable-library.2.3.7/Array.js";
import { HTMLAttr } from "./Fable.React.Props.js";
import { isNullOrEmpty } from "../fable-library.2.3.7/String.js";
import { fold, choose } from "../fable-library.2.3.7/Seq.js";
export function ReactElementTypeModule$$$ofComponent() {
  throw new Error("Cannot create React components from types in Fable REPL");
}
export function ReactElementTypeModule$$$ofFunction(f) {
  return f;
}
export function ReactElementTypeModule$$$ofHtmlElement(name) {
  return name;
}
export function ReactElementTypeModule$$$create(comp, props, children) {
  return React.createElement(comp, props, ...children);
}
export function ReactElementTypeModule$$$memo(render) {
  return React.memo(render, uncurry(2, null));
}
export function ReactElementTypeModule$$$memoWith(areEqual, render$$1) {
  return React.memo(render$$1, areEqual);
}
export function Helpers$$$createElement(comp$$1, props$$1, ...children$$1) {
  return React.createElement(comp$$1, props$$1, ...children$$1);
}
export function Helpers$$$ofType(props$$2, children$$2) {
  return React.createElement((() => {
    throw new Error("Cannot create React components from types in Fable REPL");
  })(), props$$2, ...children$$2);
}
export function Helpers$$$com(props$$4, children$$4) {
  return React.createElement((() => {
    throw new Error("Cannot create React components from types in Fable REPL");
  })(), props$$4, ...children$$4);
}
export function Helpers$$$ofFunction(f$$1, props$$7, children$$7) {
  return React.createElement(f$$1, props$$7, ...children$$7);
}
export function Helpers$$$ofImport(importMember, importPath, props$$9, children$$9) {
  throw new Error("Cannot import React components in Fable REPL");
}
export function Helpers$$$equalsButFunctions(x, y) {
  if (x === y) {
    return true;
  } else if (typeof x === "object" && !x[Symbol.iterator] ? !(y == null) : false) {
    const keys = Object.keys(x);
    const length = keys.length | 0;
    let i = 0;
    let result = true;

    while (i < length ? result : false) {
      const key = keys[i];
      i = i + 1;
      const xValue = x[key];
      result = typeof xValue === "function" ? true : equals(xValue, y[key]);
    }

    return result;
  } else {
    return equals(x, y);
  }
}
export function Helpers$$$memoEqualsButFunctions(x$$1, y$$1) {
  if (x$$1 === y$$1) {
    return true;
  } else if (typeof x$$1 === "object" && !x$$1[Symbol.iterator] ? !(y$$1 == null) : false) {
    const keys$$1 = Object.keys(x$$1);
    const length$$1 = keys$$1.length | 0;
    let i$$1 = 0;
    let result$$1 = true;

    while (i$$1 < length$$1 ? result$$1 : false) {
      const key$$1 = keys$$1[i$$1];
      i$$1 = i$$1 + 1;
      const xValue$$1 = x$$1[key$$1];
      result$$1 = typeof xValue$$1 === "function" ? true : xValue$$1 === y$$1[key$$1];
    }

    return result$$1;
  } else {
    return false;
  }
}
export function Helpers$$$memoBuilder(name$$1, render$$2) {
  render$$2.displayName = name$$1;
  const memoType = ReactElementTypeModule$$$memo(render$$2);
  return function (props$$10) {
    return React.createElement(memoType, props$$10, ...[]);
  };
}
export function Helpers$$$memoBuilderWith(name$$2, areEqual$$1, render$$3) {
  render$$3.displayName = name$$2;
  const memoType$$1 = ReactElementTypeModule$$$memoWith(areEqual$$1, render$$3);
  return function (props$$12) {
    return React.createElement(memoType$$1, props$$12, ...[]);
  };
}
export function Helpers$$$from(com, props$$14, children$$12) {
  return React.createElement(com, props$$14, ...children$$12);
}
export function Helpers$$$str(s) {
  return s;
}
export function Helpers$$$ofString(s$$1) {
  return s$$1;
}
export function Helpers$$$ofOption(o) {
  if (o == null) {
    return null;
  } else {
    const o$$1 = o;
    return o$$1;
  }
}
export function Helpers$$$opt(o$$2) {
  if (o$$2 == null) {
    return null;
  } else {
    const o$$4 = o$$2;
    return o$$4;
  }
}
export function Helpers$$$ofInt(i$$2) {
  return i$$2;
}
export function Helpers$$$ofFloat(f$$3) {
  return f$$3;
}
export function Helpers$$$ofList(els) {
  return ofList(els, Array);
}
export function Helpers$$$ofArray(els$$1) {
  return els$$1;
}
export const Helpers$$$nothing = null;
export function Helpers$$$domEl(tag, props$$16, children$$14) {
  return React.createElement(tag, createObj(props$$16, 1), ...children$$14);
}
export function Helpers$$$voidEl(tag$$1, props$$17) {
  return React.createElement(tag$$1, createObj(props$$17, 1), ...[]);
}
export function Helpers$$$svgEl(tag$$2, props$$18, children$$15) {
  return React.createElement(tag$$2, createObj(props$$18, 1), ...children$$15);
}
export function Helpers$$$fragment(props$$19, children$$16) {
  return React.createElement(React.Fragment, createObj(props$$19, 1), ...children$$16);
}
export function Helpers$$$contextProvider(ctx, value$$2, children$$17) {
  return React.createElement(ctx.Provider, {
    value: value$$2
  }, ...children$$17);
}
export function Helpers$$$createContext(defaultValue) {
  return React.createContext(defaultValue);
}
export function Helpers$$$createRef(initialValue) {
  return React.createRef(initialValue);
}
export function Helpers$$$classBaseList(baseClass, classes) {
  var source$$1;
  return new HTMLAttr(24, "ClassName", (source$$1 = choose(function chooser(tupledArg) {
    if (tupledArg[1] ? !isNullOrEmpty(tupledArg[0]) : false) {
      return tupledArg[0];
    } else {
      return null;
    }
  }, classes), fold(function folder(state, name$$4) {
    return state + " " + name$$4;
  }, baseClass, source$$1)));
}
export function Helpers$$$classList(classes$$1) {
  return Helpers$$$classBaseList("", classes$$1);
}
export function Helpers$$$mountById(domElId, reactEl) {
  ReactDOM.render(reactEl, document.getElementById(domElId));
}
export function Helpers$$$mountBySelector(domElSelector, reactEl$$1) {
  ReactDOM.render(reactEl$$1, document.querySelector(domElSelector));
}
