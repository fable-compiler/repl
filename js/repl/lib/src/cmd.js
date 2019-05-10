import { concat, map, iterate } from "../fable-library.2.3.7/List.js";
import { List } from "../fable-library.2.3.7/Types.js";
import { startImmediate, catchAsync } from "../fable-library.2.3.7/Async.js";
import { singleton } from "../fable-library.2.3.7/AsyncBuilder.js";
import { ignore } from "../fable-library.2.3.7/Util.js";
export function Cmd$$$exec(dispatch, cmd) {
  iterate(function action(sub) {
    sub(dispatch);
  }, cmd);
}
export function Cmd$$$none() {
  return new List();
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
export function Cmd$$$ofSub(sub$$1) {
  return new List(sub$$1, new List());
}
export function Cmd$002EOfFunc$$$either(task, arg, ofSuccess, ofError) {
  const bind = function bind(dispatch$$2) {
    try {
      return dispatch$$2(ofSuccess(task(arg)));
    } catch (x) {
      return dispatch$$2(ofError(x));
    }
  };

  return new List(bind, new List());
}
export function Cmd$002EOfFunc$$$perform(task$$1, arg$$1, ofSuccess$$1) {
  const bind$$1 = function bind$$1(dispatch$$3) {
    try {
      dispatch$$3(ofSuccess$$1(task$$1(arg$$1)));
    } catch (x$$1) {}
  };

  return new List(bind$$1, new List());
}
export function Cmd$002EOfFunc$$$attempt(task$$2, arg$$2, ofError$$1) {
  const bind$$2 = function bind$$2(dispatch$$4) {
    try {
      task$$2(arg$$2);
    } catch (x$$2) {
      dispatch$$4(ofError$$1(x$$2));
    }
  };

  return new List(bind$$2, new List());
}
export function Cmd$002EOfFunc$$$result(msg) {
  return new List(function (dispatch$$5) {
    dispatch$$5(msg);
  }, new List());
}
export function Cmd$002EOfAsync$$$either(task$$3, arg$$3, ofSuccess$$2, ofError$$2) {
  const bind$$3 = function bind$$3(dispatch$$6) {
    return singleton.Delay(function () {
      return singleton.Bind(catchAsync(task$$3(arg$$3)), function (_arg1) {
        var x$$4, x$$3;
        const r = _arg1;
        dispatch$$6(r.tag === 1 ? (x$$4 = r.fields[0], ofError$$2(x$$4)) : (x$$3 = r.fields[0], ofSuccess$$2(x$$3)));
        return singleton.Zero();
      });
    });
  };

  return new List(function ($arg$$7) {
    startImmediate(bind$$3($arg$$7));
  }, new List());
}
export function Cmd$002EOfAsync$$$perform(task$$4, arg$$4, ofSuccess$$3) {
  const bind$$4 = function bind$$4(dispatch$$7) {
    return singleton.Delay(function () {
      return singleton.Bind(catchAsync(task$$4(arg$$4)), function (_arg1$$1) {
        const r$$1 = _arg1$$1;

        if (r$$1.tag === 0) {
          const x$$5 = r$$1.fields[0];
          dispatch$$7(ofSuccess$$3(x$$5));
          return singleton.Zero();
        } else {
          return singleton.Zero();
        }
      });
    });
  };

  return new List(function ($arg$$8) {
    startImmediate(bind$$4($arg$$8));
  }, new List());
}
export function Cmd$002EOfAsync$$$attempt(task$$5, arg$$5, ofError$$3) {
  const bind$$5 = function bind$$5(dispatch$$8) {
    return singleton.Delay(function () {
      return singleton.Bind(catchAsync(task$$5(arg$$5)), function (_arg1$$2) {
        const r$$2 = _arg1$$2;

        if (r$$2.tag === 1) {
          const x$$6 = r$$2.fields[0];
          dispatch$$8(ofError$$3(x$$6));
          return singleton.Zero();
        } else {
          return singleton.Zero();
        }
      });
    });
  };

  return new List(function ($arg$$9) {
    startImmediate(bind$$5($arg$$9));
  }, new List());
}
export function Cmd$002EOfAsync$$$result(task$$6) {
  const bind$$6 = function bind$$6(dispatch$$9) {
    return singleton.Delay(function () {
      return singleton.Bind(catchAsync(task$$6), function (_arg1$$3) {
        const r$$3 = _arg1$$3;

        if (r$$3.tag === 0) {
          const x$$7 = r$$3.fields[0];
          dispatch$$9(x$$7);
          return singleton.Zero();
        } else {
          return singleton.Zero();
        }
      });
    });
  };

  return new List(function ($arg$$10) {
    startImmediate(bind$$6($arg$$10));
  }, new List());
}
export function Cmd$002EOfPromise$$$either(task$$7, arg$$6, ofSuccess$$4, ofError$$4) {
  const bind$$7 = function bind$$7(dispatch$$10) {
    ignore(task$$7(arg$$6).then(function ($arg$$11) {
      return dispatch$$10(ofSuccess$$4($arg$$11));
    }).catch(function ($arg$$13) {
      return dispatch$$10(ofError$$4($arg$$13));
    }));
  };

  return new List(bind$$7, new List());
}
export function Cmd$002EOfPromise$$$perform(task$$8, arg$$7, ofSuccess$$5) {
  const bind$$8 = function bind$$8(dispatch$$11) {
    ignore(task$$8(arg$$7).then(function ($arg$$14) {
      return dispatch$$11(ofSuccess$$5($arg$$14));
    }));
  };

  return new List(bind$$8, new List());
}
export function Cmd$002EOfPromise$$$attempt(task$$9, arg$$8, ofError$$5) {
  const bind$$9 = function bind$$9(dispatch$$12) {
    ignore(task$$9(arg$$8).catch(function ($arg$$16) {
      dispatch$$12(ofError$$5($arg$$16));
    }));
  };

  return new List(bind$$9, new List());
}
export function Cmd$002EOfPromise$$$result(task$$10) {
  const bind$$10 = function bind$$10(dispatch$$13) {
    ignore(task$$10.then(dispatch$$13));
  };

  return new List(bind$$10, new List());
}
export function Cmd$$$ofPromise(task$$11, arg$$9, ofSuccess$$6, ofError$$6) {
  return Cmd$002EOfPromise$$$either(task$$11, arg$$9, ofSuccess$$6, ofError$$6);
}
export function Cmd$$$ofMsg(msg$$1) {
  return Cmd$002EOfFunc$$$result(msg$$1);
}
export function Cmd$$$ofAsync(task$$12, arg$$10, ofSuccess$$7, ofError$$7) {
  return Cmd$002EOfAsync$$$either(task$$12, arg$$10, ofSuccess$$7, ofError$$7);
}
export function Cmd$$$ofFunc(task$$13, arg$$11, ofSuccess$$8, ofError$$8) {
  return Cmd$002EOfFunc$$$either(task$$13, arg$$11, ofSuccess$$8, ofError$$8);
}
export function Cmd$$$performFunc(task$$14, arg$$12, ofSuccess$$9) {
  return Cmd$002EOfFunc$$$perform(task$$14, arg$$12, ofSuccess$$9);
}
export function Cmd$$$attemptFunc(task$$15, arg$$13, ofError$$9) {
  return Cmd$002EOfFunc$$$attempt(task$$15, arg$$13, ofError$$9);
}
