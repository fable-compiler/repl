import { concat, map, iterate } from "../fable-library.2.2.0-beta-010/List.js";
import { List } from "../fable-library.2.2.0-beta-010/Types.js";
import { singleton } from "../fable-library.2.2.0-beta-010/AsyncBuilder.js";
import { startImmediate, catchAsync } from "../fable-library.2.2.0-beta-010/Async.js";
export function Cmd$$$exec(dispatch, cmd) {
  iterate(function action(sub) {
    sub(dispatch);
  }, cmd);
}
export function Cmd$$$none() {
  return new List();
}
export function Cmd$$$ofMsg(msg) {
  return new List(function (dispatch$$1) {
    dispatch$$1(msg);
  }, new List());
}
export function Cmd$$$map(f, cmd$$1) {
  return map(function mapping(g) {
    return function ($arg$$2) {
      g(function ($arg$$1) {
        $arg$$2(f($arg$$1));
      });
    };
  }, cmd$$1);
}
export function Cmd$$$batch(cmds) {
  return concat(cmds);
}
export function Cmd$$$ofAsync(task, arg, ofSuccess, ofError) {
  const bind = function bind(dispatch$$3) {
    const builder$0040 = singleton;
    return builder$0040.Delay(function () {
      return builder$0040.Bind(catchAsync(task(arg)), function (_arg1) {
        var x$$1, x;
        const r = _arg1;
        dispatch$$3(r.tag === 1 ? (x$$1 = r.fields[0], ofError(x$$1)) : (x = r.fields[0], ofSuccess(x)));
        return builder$0040.Zero();
      });
    });
  };

  return new List(function ($arg$$3) {
    startImmediate(bind($arg$$3));
  }, new List());
}
export function Cmd$$$ofFunc(task$$1, arg$$1, ofSuccess$$1, ofError$$1) {
  const bind$$1 = function bind$$1(dispatch$$4) {
    try {
      return dispatch$$4(ofSuccess$$1(task$$1(arg$$1)));
    } catch (x$$2) {
      return dispatch$$4(ofError$$1(x$$2));
    }
  };

  return new List(bind$$1, new List());
}
export function Cmd$$$performFunc(task$$2, arg$$2, ofSuccess$$2) {
  const bind$$2 = function bind$$2(dispatch$$5) {
    try {
      dispatch$$5(ofSuccess$$2(task$$2(arg$$2)));
    } catch (x$$3) {}
  };

  return new List(bind$$2, new List());
}
export function Cmd$$$attemptFunc(task$$3, arg$$3, ofError$$2) {
  const bind$$3 = function bind$$3(dispatch$$6) {
    try {
      task$$3(arg$$3);
    } catch (x$$4) {
      dispatch$$6(ofError$$2(x$$4));
    }
  };

  return new List(bind$$3, new List());
}
export function Cmd$$$ofSub(sub$$1) {
  return new List(sub$$1, new List());
}
export function Cmd$$$ofPromise(task$$4, arg$$4, ofSuccess$$3, ofError$$3) {
  const bind$$4 = function bind$$4(dispatch$$7) {
    task$$4(arg$$4).then(function a($arg$$8) {
      return dispatch$$7(ofSuccess$$3($arg$$8));
    }).then(void 0, function fail($arg$$9) {
      return dispatch$$7(ofError$$3($arg$$9));
    });
  };

  return new List(bind$$4, new List());
}
