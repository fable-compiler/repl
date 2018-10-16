import { L, declare, Record } from "../../fable-core/Types.js";
import { Cmd$$$exec as Cmd$0024$0024$0024exec, Cmd$$$batch as Cmd$0024$0024$0024batch, Cmd$$$none as Cmd$0024$0024$0024none } from "./cmd.js";
import { toConsole, onError as onError$$1 } from "./prelude.js";
import { singleton } from "../../fable-core/AsyncBuilder.js";
import { start, post, receive } from "../../fable-core/MailboxProcessor.js";
import { append } from "../../fable-core/List.js";
export const Program$00604 = declare(function Program$00604(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.init = arg1;
  this.update = arg2;
  this.subscribe = arg3;
  this.view = arg4;
  this.setState = arg5;
  this.onError = arg6;
}, Record);
export function ProgramModule$$$mkProgram(init, update, view) {
  return new Program$00604(init, update, function (_arg1) {
    return Cmd$0024$0024$0024none();
  }, view, function setState(model, $arg$$1) {
    view(model, $arg$$1);
  }, function (tupledArg) {
    onError$$1(tupledArg[0], tupledArg[1]);
  });
}
export function ProgramModule$$$mkSimple(init$$1, update$$1, view$$1) {
  return new Program$00604(function init$$2($arg$$2) {
    return [init$$1($arg$$2), Cmd$0024$0024$0024none()];
  }, function update$$2(msg, $arg$$3) {
    return [update$$1(msg, $arg$$3), Cmd$0024$0024$0024none()];
  }, function (_arg1$$1) {
    return Cmd$0024$0024$0024none();
  }, view$$1, function setState$$1(model$$1, $arg$$4) {
    view$$1(model$$1, $arg$$4);
  }, function (tupledArg$$1) {
    onError$$1(tupledArg$$1[0], tupledArg$$1[1]);
  });
}
export function ProgramModule$$$withSubscription(subscribe, program) {
  const sub = function sub(model$$2) {
    return Cmd$0024$0024$0024batch(L(program.subscribe(model$$2), L(subscribe(model$$2), L())));
  };

  return new Program$00604(program.init, program.update, sub, program.view, program.setState, program.onError);
}
export function ProgramModule$$$withConsoleTrace(program$$1) {
  const traceInit = function traceInit(arg) {
    const patternInput = program$$1.init(arg);
    toConsole("Initial state:", patternInput[0]);
    return [patternInput[0], patternInput[1]];
  };

  const traceUpdate = function traceUpdate(msg$$1, model$$3) {
    toConsole("New message:", msg$$1);
    const patternInput$$1 = program$$1.update(msg$$1, model$$3);
    toConsole("Updated state:", patternInput$$1[0]);
    return [patternInput$$1[0], patternInput$$1[1]];
  };

  return new Program$00604(traceInit, traceUpdate, program$$1.subscribe, program$$1.view, program$$1.setState, program$$1.onError);
}
export function ProgramModule$$$withTrace(trace, program$$2) {
  return new Program$00604(program$$2.init, function update$$3(msg$$2, model$$4) {
    trace(msg$$2, model$$4);
    return program$$2.update(msg$$2, model$$4);
  }, program$$2.subscribe, program$$2.view, program$$2.setState, program$$2.onError);
}
export function ProgramModule$$$withErrorHandler(onError, program$$3) {
  return new Program$00604(program$$3.init, program$$3.update, program$$3.subscribe, program$$3.view, program$$3.setState, onError);
}
export function ProgramModule$$$runWith(arg$$1, program$$4) {
  const patternInput$$2 = program$$4.init(arg$$1);
  const inbox = start(function (mb) {
    const loop = function loop(state$$2) {
      const builder$0040 = singleton;
      return builder$0040.Delay(function () {
        return builder$0040.Bind(receive(mb), function (_arg1$$2) {
          const msg$$3 = _arg1$$2;
          let newState;

          try {
            const patternInput$$3 = program$$4.update(msg$$3, state$$2);
            program$$4.setState(patternInput$$3[0], function (arg00) {
              post(mb, arg00);
            });
            Cmd$0024$0024$0024exec(function dispatch(arg00$$1) {
              post(mb, arg00$$1);
            }, patternInput$$3[1]);
            newState = patternInput$$3[0];
          } catch (ex$$2) {
            program$$4.onError(["Unable to process a message:", ex$$2]);
            newState = state$$2;
          }

          return builder$0040.ReturnFrom(loop(newState));
        });
      });
    };

    return loop(patternInput$$2[0]);
  });
  program$$4.setState(patternInput$$2[0], function (arg00$$2) {
    post(inbox, arg00$$2);
  });
  let sub$$1;

  try {
    sub$$1 = program$$4.subscribe(patternInput$$2[0]);
  } catch (ex$$3) {
    program$$4.onError(["Unable to subscribe:", ex$$3]);
    sub$$1 = Cmd$0024$0024$0024none();
  }

  Cmd$0024$0024$0024exec(function dispatch$$1(arg00$$3) {
    post(inbox, arg00$$3);
  }, append(sub$$1, patternInput$$2[1]));
}
export function ProgramModule$$$run(program$$5) {
  ProgramModule$$$runWith(null, program$$5);
}
