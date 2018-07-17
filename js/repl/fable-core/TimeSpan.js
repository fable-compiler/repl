define(["exports", "./Long", "./Util"], function (exports, _Long, _Util) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.compareTo = exports.compare = undefined;
    exports.create = create;
    exports.fromTicks = fromTicks;
    exports.fromDays = fromDays;
    exports.fromHours = fromHours;
    exports.fromMinutes = fromMinutes;
    exports.fromSeconds = fromSeconds;
    exports.days = days;
    exports.hours = hours;
    exports.minutes = minutes;
    exports.seconds = seconds;
    exports.milliseconds = milliseconds;
    exports.ticks = ticks;
    exports.totalDays = totalDays;
    exports.totalHours = totalHours;
    exports.totalMinutes = totalMinutes;
    exports.totalSeconds = totalSeconds;
    exports.negate = negate;
    exports.add = add;
    exports.subtract = subtract;
    exports.duration = duration;

    // TimeSpan in runtime just becomes a number representing milliseconds
    function create(d = 0, h = 0, m = 0, s = 0, ms = 0) {
        switch (arguments.length) {
            case 1:
                // ticks
                return fromTicks(arguments[0]);
            case 3:
                // h,m,s
                d = 0, h = arguments[0], m = arguments[1], s = arguments[2], ms = 0;
                break;
            default:
                // d,h,m,s,ms
                break;
        }
        return d * 86400000 + h * 3600000 + m * 60000 + s * 1000 + ms;
    }
    function fromTicks(ticks /* Long */) {
        return (0, _Long.toNumber)((0, _Long.op_Division)(ticks, 10000));
    }
    function fromDays(d) {
        return create(d, 0, 0, 0);
    }
    function fromHours(h) {
        return create(h, 0, 0);
    }
    function fromMinutes(m) {
        return create(0, m, 0);
    }
    function fromSeconds(s) {
        return create(0, 0, s);
    }
    function days(ts) {
        return Math.floor(ts / 86400000);
    }
    function hours(ts) {
        return Math.floor(ts % 86400000 / 3600000);
    }
    function minutes(ts) {
        return Math.floor(ts % 3600000 / 60000);
    }
    function seconds(ts) {
        return Math.floor(ts % 60000 / 1000);
    }
    function milliseconds(ts) {
        return Math.floor(ts % 1000);
    }
    function ticks(ts /* Long */) {
        return (0, _Long.op_Multiply)((0, _Long.fromNumber)(ts), 10000);
    }
    function totalDays(ts) {
        return ts / 86400000;
    }
    function totalHours(ts) {
        return ts / 3600000;
    }
    function totalMinutes(ts) {
        return ts / 60000;
    }
    function totalSeconds(ts) {
        return ts / 1000;
    }
    function negate(ts) {
        return ts * -1;
    }
    function add(ts1, ts2) {
        return ts1 + ts2;
    }
    function subtract(ts1, ts2) {
        return ts1 - ts2;
    }
    const compare = exports.compare = _Util.comparePrimitives;
    const compareTo = exports.compareTo = _Util.comparePrimitives;
    function duration(x) {
        return Math.abs(x);
    }
});