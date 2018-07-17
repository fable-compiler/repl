define(["exports", "./AsyncBuilder", "./Option", "./Seq"], function (exports, _AsyncBuilder, _Option, _Seq) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.defaultCancellationToken = undefined;
    exports.createCancellationToken = createCancellationToken;
    exports.cancel = cancel;
    exports.cancelAfter = cancelAfter;
    exports.isCancellationRequested = isCancellationRequested;
    exports.startChild = startChild;
    exports.awaitPromise = awaitPromise;
    exports.cancellationToken = cancellationToken;
    exports.catchAsync = catchAsync;
    exports.fromContinuations = fromContinuations;
    exports.ignore = ignore;
    exports.parallel = parallel;
    exports.sleep = sleep;
    exports.start = start;
    exports.startImmediate = startImmediate;
    exports.startWithContinuations = startWithContinuations;
    exports.startAsPromise = startAsPromise;

    // Implemented just for type references
    class Async {}
    exports.default = Async;
    function emptyContinuation(x) {
        // NOP
    }
    function createCancellationToken(arg) {
        const token = { isCancelled: false };
        if (typeof arg === "number") {
            setTimeout(() => {
                token.isCancelled = true;
            }, arg);
        } else if (typeof arg === "boolean") {
            token.isCancelled = arg;
        }
        return token;
    }
    function cancel(token) {
        token.isCancelled = true;
    }
    function cancelAfter(token, ms) {
        setTimeout(() => {
            token.isCancelled = true;
        }, ms);
    }
    function isCancellationRequested(token) {
        return token != null && token.isCancelled;
    }
    function startChild(computation) {
        const promise = startAsPromise(computation);
        // JS Promises are hot, computation has already started
        // but we delay returning the result
        return (0, _AsyncBuilder.protectedCont)(ctx => (0, _AsyncBuilder.protectedReturn)(awaitPromise(promise))(ctx));
    }
    function awaitPromise(p) {
        return fromContinuations(conts => p.then(conts[0]).catch(err => (err instanceof _AsyncBuilder.OperationCanceledError ? conts[2] : conts[1])(err)));
    }
    function cancellationToken() {
        return (0, _AsyncBuilder.protectedCont)(ctx => ctx.onSuccess(ctx.cancelToken));
    }
    const defaultCancellationToken = exports.defaultCancellationToken = { isCancelled: false };
    function catchAsync(work) {
        return (0, _AsyncBuilder.protectedCont)(ctx => {
            work({
                onSuccess: x => ctx.onSuccess((0, _Option.choice1)(x)),
                onError: ex => ctx.onSuccess((0, _Option.choice2)(ex)),
                onCancel: ctx.onCancel,
                cancelToken: ctx.cancelToken,
                trampoline: ctx.trampoline
            });
        });
    }
    function fromContinuations(f) {
        return (0, _AsyncBuilder.protectedCont)(ctx => f([ctx.onSuccess, ctx.onError, ctx.onCancel]));
    }
    function ignore(computation) {
        return (0, _AsyncBuilder.protectedBind)(computation, x => (0, _AsyncBuilder.protectedReturn)(void 0));
    }
    function parallel(computations) {
        return awaitPromise(Promise.all((0, _Seq.map)(w => startAsPromise(w), computations)));
    }
    function sleep(millisecondsDueTime) {
        return (0, _AsyncBuilder.protectedCont)(ctx => {
            setTimeout(() => ctx.cancelToken.isCancelled ? ctx.onCancel(new _AsyncBuilder.OperationCanceledError()) : ctx.onSuccess(void 0), millisecondsDueTime);
        });
    }
    function start(computation, cancellationToken) {
        return startWithContinuations(computation, cancellationToken);
    }
    function startImmediate(computation, cancellationToken) {
        return start(computation, cancellationToken);
    }
    function startWithContinuations(computation, continuation, exceptionContinuation, cancellationContinuation, cancelToken) {
        if (typeof continuation !== "function") {
            cancelToken = continuation;
            continuation = null;
        }
        const trampoline = new _AsyncBuilder.Trampoline();
        computation({
            onSuccess: continuation ? continuation : emptyContinuation,
            onError: exceptionContinuation ? exceptionContinuation : emptyContinuation,
            onCancel: cancellationContinuation ? cancellationContinuation : emptyContinuation,
            cancelToken: cancelToken ? cancelToken : defaultCancellationToken,
            trampoline
        });
    }
    function startAsPromise(computation, cancellationToken) {
        return new Promise((resolve, reject) => startWithContinuations(computation, resolve, reject, reject, cancellationToken ? cancellationToken : defaultCancellationToken));
    }
});