import { declare, Record } from "../fable-library.2.3.7/Types.js";
import { record, string } from "../fable-library.2.3.7/Reflection.js";
const Fragment$$1 = React.Fragment,
      PureComponent = React.PureComponent,
      Component = React.Component;
export const Component$00602 = Component;
export const PureComponent$00602 = PureComponent;
export const PureStatelessComponent$00601 = PureComponent;
export const FragmentProps = declare(function Fable_React_FragmentProps(arg1) {
  this.key = arg1;
}, Record);
export function FragmentProps$reflection() {
  return record("Fable.React.FragmentProps", [], FragmentProps, () => [["key", string]]);
}
export const Fragment = Fragment$$1;
