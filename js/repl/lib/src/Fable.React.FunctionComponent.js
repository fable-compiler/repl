import { declare } from "../fable-library.2.3.7/Types.js";
import { type } from "../fable-library.2.3.7/Reflection.js";
import { curry } from "../fable-library.2.3.7/Util.js";
import { ReactElementTypeModule$$$memoWith as ReactElementTypeModule$0024$0024$0024memoWith } from "./Fable.React.Helpers.js";
export const FunctionComponent = declare(function Fable_React_FunctionComponent() {});
export function FunctionComponent$reflection() {
  return type("Fable.React.FunctionComponent");
}
export function FunctionComponent$$$Of$$2F363EB5(render, displayName, memoizeWith) {
  if (displayName == null) {} else {
    const name = displayName;
    render.displayName = name;
  }

  let elemType;

  if (curry(2, memoizeWith) == null) {
    elemType = render;
  } else {
    const areEqual = memoizeWith;
    const memoElement = ReactElementTypeModule$0024$0024$0024memoWith(areEqual, render);

    if (displayName == null) {} else {
      const name$$1 = displayName;
      memoElement.displayName = "Memo(" + name$$1 + ")";
    }

    elemType = memoElement;
  }

  return function (props) {
    return React.createElement(elemType, props, ...[]);
  };
}
