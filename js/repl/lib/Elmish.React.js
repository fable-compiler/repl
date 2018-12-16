import { Program$00604 as Program$002400604 } from "./src/program.js";
const render = ReactDOM.render;
export function withReactSynchronous(placeholderId, program) {
  const setState = function setState(model, dispatch) {
    render(program.view(model, dispatch), document.getElementById(placeholderId));
  };

  return new Program$002400604(program.init, program.update, program.subscribe, program.view, setState, program.onError, program.syncDispatch);
}
export function withReact(placeholderId$$1, program$$1) {
  return withReactSynchronous(placeholderId$$1, program$$1);
}
