import { declare } from "../../fable-library/Types.js";
import { class_type } from "../../fable-library/Reflection.js";
import { curry } from "../../fable-library/Util.js";
import { ReactElementTypeModule$$$memoWith as ReactElementTypeModule$0024$0024$0024memoWith } from "./Fable.React.Helpers.js";
export const FunctionComponent = declare(function Fable_React_FunctionComponent() {});
export function FunctionComponent$reflection() {
  return class_type("Fable.React.FunctionComponent", undefined, FunctionComponent);
}
export function FunctionComponent$$$Of$$2F363EB5(render, displayName, memoizeWith) {
  if (displayName == null) {
    void null;
  } else {
    const name = displayName;
    render.displayName = name;
  }

  let elemType;

  if (curry(2, memoizeWith) == null) {
    elemType = render;
  } else {
    const areEqual = memoizeWith;
    const memoElement = ReactElementTypeModule$0024$0024$0024memoWith(areEqual, render);

    if (displayName == null) {
      void null;
    } else {
      const name$$1 = displayName;
      memoElement.displayName = "Memo(" + name$$1 + ")";
    }

    elemType = memoElement;
  }

  return function (props) {
    const children = [];
    return React.createElement(elemType, props, ...children);
  };
}
