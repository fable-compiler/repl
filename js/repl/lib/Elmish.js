import { declare, Record, L } from "../fable-core/Types.js";
import { append, iterate, concat, map } from "../fable-core/List.js";
import { singleton } from "../fable-core/AsyncBuilder.js";
import { startImmediate, catchAsync } from "../fable-core/Async.js";
import { start, post, receive } from "../fable-core/MailboxProcessor.js";
export function Log$$$onError(text, ex) {
  console.error(text, ex);
}
export function Log$$$toConsole(text$$1, o) {
  console.log(text$$1, o);
}
export function Cmd$$$none() {
  return L();
}
export function Cmd$$$ofMsg(msg) {
  return L(function (dispatch) {
    dispatch(msg);
  }, L());
}
export function Cmd$$$map(f, cmd) {
  return map(function mapping(g) {
    return function ($arg$$2) {
      g(function ($arg$$1) {
        $arg$$2(f($arg$$1));
      });
    };
  }, cmd);
}
export function Cmd$$$batch(cmds) {
  return concat(cmds);
}
export function Cmd$$$ofAsync(task, arg, ofSuccess, ofError) {
  const bind = function bind(dispatch$$2) {
    const builder$0040 = singleton;
    return builder$0040.Delay(function () {
      return builder$0040.Bind(catchAsync(task(arg)), function (_arg1) {
        var x$$1, x;
        const r = _arg1;
        dispatch$$2(r.tag === 1 ? (x$$1 = r.fields[0], ofError(x$$1)) : (x = r.fields[0], ofSuccess(x)));
        return builder$0040.Zero();
      });
    });
  };

  return L(function ($arg$$3) {
    startImmediate(bind($arg$$3));
  }, L());
}
export function Cmd$$$ofFunc(task$$1, arg$$1, ofSuccess$$1, ofError$$1) {
  const bind$$1 = function bind$$1(dispatch$$3) {
    try {
      return dispatch$$3(ofSuccess$$1(task$$1(arg$$1)));
    } catch (x$$2) {
      return dispatch$$3(ofError$$1(x$$2));
    }
  };

  return L(bind$$1, L());
}
export function Cmd$$$performFunc(task$$2, arg$$2, ofSuccess$$2) {
  const bind$$2 = function bind$$2(dispatch$$4) {
    try {
      dispatch$$4(ofSuccess$$2(task$$2(arg$$2)));
    } catch (x$$3) {}
  };

  return L(bind$$2, L());
}
export function Cmd$$$attemptFunc(task$$3, arg$$3, ofError$$2) {
  const bind$$3 = function bind$$3(dispatch$$5) {
    try {
      task$$3(arg$$3);
    } catch (x$$4) {
      dispatch$$5(ofError$$2(x$$4));
    }
  };

  return L(bind$$3, L());
}
export function Cmd$$$ofSub(sub) {
  return L(sub, L());
}
export const Program$00604 = declare(function Program$00604(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.init = arg1;
  this.update = arg2;
  this.subscribe = arg3;
  this.view = arg4;
  this.setState = arg5;
  this.onError = arg6;
}, Record);
export function Program$$$mkProgram(init, update, view) {
  return new Program$00604(init, update, function (_arg1$$1) {
    return Cmd$$$none();
  }, view, function setState(model, $arg$$8) {
    view(model, $arg$$8);
  }, function (tupledArg) {
    Log$$$onError(tupledArg[0], tupledArg[1]);
  });
}
export function Program$$$mkSimple(init$$1, update$$1, view$$1) {
  return new Program$00604(function init$$2($arg$$9) {
    return [init$$1($arg$$9), Cmd$$$none()];
  }, function update$$2(msg$$1, $arg$$10) {
    return [update$$1(msg$$1, $arg$$10), Cmd$$$none()];
  }, function (_arg1$$2) {
    return Cmd$$$none();
  }, view$$1, function setState$$1(model$$1, $arg$$11) {
    view$$1(model$$1, $arg$$11);
  }, function (tupledArg$$1) {
    Log$$$onError(tupledArg$$1[0], tupledArg$$1[1]);
  });
}
export function Program$$$withSubscription(subscribe, program) {
  const sub$$1 = function sub$$1(model$$2) {
    return Cmd$$$batch(L(program.subscribe(model$$2), L(subscribe(model$$2), L())));
  };

  return new Program$00604(program.init, program.update, sub$$1, program.view, program.setState, program.onError);
}
export function Program$$$withConsoleTrace(program$$1) {
  const traceInit = function traceInit(arg$$4) {
    const patternInput = program$$1.init(arg$$4);
    const initModel = patternInput[0];
    const cmd$$1 = patternInput[1];
    Log$$$toConsole("Initial state:", initModel);
    return [initModel, cmd$$1];
  };

  const traceUpdate = function traceUpdate(msg$$2, model$$3) {
    Log$$$toConsole("New message:", msg$$2);
    const patternInput$$1 = program$$1.update(msg$$2, model$$3);
    const newModel = patternInput$$1[0];
    const cmd$$2 = patternInput$$1[1];
    Log$$$toConsole("Updated state:", newModel);
    return [newModel, cmd$$2];
  };

  return new Program$00604(traceInit, traceUpdate, program$$1.subscribe, program$$1.view, program$$1.setState, program$$1.onError);
}
export function Program$$$withTrace(trace, program$$2) {
  return new Program$00604(program$$2.init, function update$$3(msg$$3, model$$4) {
    trace(msg$$3, model$$4);
    return program$$2.update(msg$$3, model$$4);
  }, program$$2.subscribe, program$$2.view, program$$2.setState, program$$2.onError);
}
export function Program$$$withErrorHandler(onError, program$$3) {
  return new Program$00604(program$$3.init, program$$3.update, program$$3.subscribe, program$$3.view, program$$3.setState, onError);
}
export function Program$$$runWith(arg$$5, program$$4) {
  const patternInput$$2 = program$$4.init(arg$$5);
  const model$$5 = patternInput$$2[0];
  const cmd$$3 = patternInput$$2[1];
  const inbox = start(function (mb) {
    const loop = function loop(state$$2) {
      const builder$0040$$1 = singleton;
      return builder$0040$$1.Delay(function () {
        return builder$0040$$1.Bind(receive(mb), function (_arg1$$3) {
          const msg$$4 = _arg1$$3;
          let newState;

          try {
            const patternInput$$3 = program$$4.update(msg$$4, state$$2);
            const model$0027 = patternInput$$3[0];
            const cmd$0027 = patternInput$$3[1];
            program$$4.setState(model$0027, function (arg00$$2) {
              post(mb, arg00$$2);
            });
            iterate(function action(sub$$2) {
              sub$$2(function (arg00$$3) {
                post(mb, arg00$$3);
              });
            }, cmd$0027);
            newState = model$0027;
          } catch (ex$$3) {
            program$$4.onError(["Unable to process a message:", ex$$3]);
            newState = state$$2;
          }

          return builder$0040$$1.ReturnFrom(loop(newState));
        });
      });
    };

    return loop(model$$5);
  });
  program$$4.setState(model$$5, function (arg00$$4) {
    post(inbox, arg00$$4);
  });
  let sub$$3;

  try {
    sub$$3 = program$$4.subscribe(model$$5);
  } catch (ex$$4) {
    program$$4.onError(["Unable to subscribe:", ex$$4]);
    sub$$3 = Cmd$$$none();
  }

  iterate(function action$$1(sub$$4) {
    sub$$4(function (arg00$$5) {
      post(inbox, arg00$$5);
    });
  }, append(sub$$3, cmd$$3));
}
export function Program$$$run(program$$5) {
  Program$$$runWith(null, program$$5);
}
export function React$002EProgram$$$withReact(placeholderId, program$$6) {
  const setState$$2 = function setState$$2(model$$6, dispatch$$6) {
    ReactDOM.render(program$$6.view(model$$6, dispatch$$6), document.getElementById(placeholderId));
  };

  return new Program$00604(program$$6.init, program$$6.update, program$$6.subscribe, program$$6.view, setState$$2, program$$6.onError);
}
