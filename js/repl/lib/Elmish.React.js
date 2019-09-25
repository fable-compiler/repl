import { Program$00604 as Program$002400604 } from "./src/program.js";
export function withReactSynchronous(placeholderId, program) {
  return new Program$002400604(program.init, program.update, program.subscribe, program.view, function setState(model, dispatch) {
    ReactDOM.render(program.view(model, dispatch), document.getElementById(placeholderId));
  }, program.onError, program.syncDispatch);
}
export function withReact(placeholderId$$1, program$$1) {
  return withReactSynchronous(placeholderId$$1, program$$1);
}
