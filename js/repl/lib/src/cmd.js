import { concat, map, iterate } from "../../fable-library/List.js";
import { List } from "../../fable-library/Types.js";
import { startImmediate, catchAsync } from "../../fable-library/Async.js";
import { singleton } from "../../fable-library/AsyncBuilder.js";
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
  return new List(function bind(dispatch$$2) {
    try {
      const $arg$$3 = task(arg);
      return dispatch$$2(ofSuccess($arg$$3));
    } catch (x) {
      return dispatch$$2(ofError(x));
    }
  }, new List());
}
export function Cmd$002EOfFunc$$$perform(task$$1, arg$$1, ofSuccess$$1) {
  return new List(function bind$$1(dispatch$$3) {
    try {
      const $arg$$5 = task$$1(arg$$1);
      dispatch$$3(ofSuccess$$1($arg$$5));
    } catch (x$$1) {}
  }, new List());
}
export function Cmd$002EOfFunc$$$attempt(task$$2, arg$$2, ofError$$1) {
  return new List(function bind$$2(dispatch$$4) {
    try {
      task$$2(arg$$2);
    } catch (x$$2) {
      dispatch$$4(ofError$$1(x$$2));
    }
  }, new List());
}
export function Cmd$002EOfFunc$$$result(msg) {
  return new List(function (dispatch$$5) {
    dispatch$$5(msg);
  }, new List());
}
export function Cmd$002EOfAsync$$$either(task$$3, arg$$3, ofSuccess$$2, ofError$$2) {
  return new List(function ($arg$$7) {
    let arg00$$1;
    arg00$$1 = singleton.Delay(function () {
      var arg00;
      return singleton.Bind((arg00 = task$$3(arg$$3), (catchAsync(arg00))), function (_arg1) {
        $arg$$7(_arg1.tag === 1 ? ofError$$2(_arg1.fields[0]) : ofSuccess$$2(_arg1.fields[0]));
        return singleton.Zero();
      });
    });
    startImmediate(arg00$$1);
  }, new List());
}
export function Cmd$002EOfAsync$$$perform(task$$4, arg$$4, ofSuccess$$3) {
  return new List(function ($arg$$8) {
    let arg00$$3;
    arg00$$3 = singleton.Delay(function () {
      var arg00$$2;
      return singleton.Bind((arg00$$2 = task$$4(arg$$4), (catchAsync(arg00$$2))), function (_arg1$$1) {
        if (_arg1$$1.tag === 0) {
          $arg$$8(ofSuccess$$3(_arg1$$1.fields[0]));
          return singleton.Zero();
        } else {
          return singleton.Zero();
        }
      });
    });
    startImmediate(arg00$$3);
  }, new List());
}
export function Cmd$002EOfAsync$$$attempt(task$$5, arg$$5, ofError$$3) {
  return new List(function ($arg$$9) {
    let arg00$$5;
    arg00$$5 = singleton.Delay(function () {
      var arg00$$4;
      return singleton.Bind((arg00$$4 = task$$5(arg$$5), (catchAsync(arg00$$4))), function (_arg1$$2) {
        if (_arg1$$2.tag === 1) {
          $arg$$9(ofError$$3(_arg1$$2.fields[0]));
          return singleton.Zero();
        } else {
          return singleton.Zero();
        }
      });
    });
    startImmediate(arg00$$5);
  }, new List());
}
export function Cmd$002EOfAsync$$$result(task$$6) {
  return new List(function ($arg$$10) {
    let arg00$$7;
    arg00$$7 = singleton.Delay(function () {
      return singleton.Bind((catchAsync(task$$6)), function (_arg1$$3) {
        if (_arg1$$3.tag === 0) {
          $arg$$10(_arg1$$3.fields[0]);
          return singleton.Zero();
        } else {
          return singleton.Zero();
        }
      });
    });
    startImmediate(arg00$$7);
  }, new List());
}
export function Cmd$002EOfPromise$$$either(task$$7, arg$$6, ofSuccess$$4, ofError$$4) {
  return new List(function bind$$7(dispatch$$10) {
    const value$$1 = task$$7(arg$$6).then(function ($arg$$11) {
      return dispatch$$10(ofSuccess$$4($arg$$11));
    }).catch(function ($arg$$13) {
      return dispatch$$10((ofError$$4(($arg$$13))));
    });
    void value$$1;
  }, new List());
}
export function Cmd$002EOfPromise$$$perform(task$$8, arg$$7, ofSuccess$$5) {
  return new List(function bind$$8(dispatch$$11) {
    const value$$2 = task$$8(arg$$7).then(function ($arg$$14) {
      return dispatch$$11(ofSuccess$$5($arg$$14));
    });
    void value$$2;
  }, new List());
}
export function Cmd$002EOfPromise$$$attempt(task$$9, arg$$8, ofError$$5) {
  return new List(function bind$$9(dispatch$$12) {
    const value$$4 = task$$9(arg$$8).catch(function ($arg$$16) {
      dispatch$$12((ofError$$5(($arg$$16))));
    });
    void value$$4;
  }, new List());
}
export function Cmd$002EOfPromise$$$result(task$$10) {
  return new List(function bind$$10(dispatch$$13) {
    const value$$5 = task$$10.then(dispatch$$13);
    void value$$5;
  }, new List());
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
