define(["exports", "./Async"], function (exports, _Async) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.startInstance = startInstance;
    exports.receive = receive;
    exports.post = post;
    exports.postAndAsyncReply = postAndAsyncReply;
    exports.start = start;

    class QueueCell {
        constructor(message) {
            this.value = message;
        }
    }
    class MailboxQueue {
        add(message) {
            const itCell = new QueueCell(message);
            if (this.firstAndLast) {
                this.firstAndLast[1].next = itCell;
                this.firstAndLast = [this.firstAndLast[0], itCell];
            } else {
                this.firstAndLast = [itCell, itCell];
            }
        }
        tryGet() {
            if (this.firstAndLast) {
                const value = this.firstAndLast[0].value;
                if (this.firstAndLast[0].next) {
                    this.firstAndLast = [this.firstAndLast[0].next, this.firstAndLast[1]];
                } else {
                    delete this.firstAndLast;
                }
                return value;
            }
            return void 0;
        }
    }
    class MailboxProcessor {
        constructor(body, cancellationToken) {
            this.body = body;
            this.cancellationToken = cancellationToken || _Async.defaultCancellationToken;
            this.messages = new MailboxQueue();
        }
    }
    exports.default = MailboxProcessor;
    function __processEvents($this) {
        if ($this.continuation) {
            const value = $this.messages.tryGet();
            if (value) {
                const cont = $this.continuation;
                delete $this.continuation;
                cont(value);
            }
        }
    }
    function startInstance($this) {
        (0, _Async.startImmediate)($this.body($this), $this.cancellationToken);
    }
    function receive($this) {
        return (0, _Async.fromContinuations)(conts => {
            if ($this.continuation) {
                throw new Error("Receive can only be called once!");
            }
            $this.continuation = conts[0];
            __processEvents($this);
        });
    }
    function post($this, message) {
        $this.messages.add(message);
        __processEvents($this);
    }
    function postAndAsyncReply($this, buildMessage) {
        let result;
        let continuation;
        function checkCompletion() {
            if (result && continuation) {
                continuation(result);
            }
        }
        const reply = {
            reply: res => {
                result = res;
                checkCompletion();
            }
        };
        $this.messages.add(buildMessage(reply));
        __processEvents($this);
        return (0, _Async.fromContinuations)(conts => {
            continuation = conts[0];
            checkCompletion();
        });
    }
    function start(body, cancellationToken) {
        const mbox = new MailboxProcessor(body, cancellationToken);
        startInstance(mbox);
        return mbox;
    }
});