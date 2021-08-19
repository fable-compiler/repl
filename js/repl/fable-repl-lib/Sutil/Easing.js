
export function Sutil_Easing_linear() {
    return (x) => x;
}

export function Sutil_Easing_backInOut(t) {
    const s = 1.70158 * 1.525;
    if (t < 0.5) {
        const tin = t * 2;
        return 0.5 * ((tin * tin) * (((s + 1) * tin) - s));
    }
    else {
        const tout = t - 1;
        return 0.5 * (((tout * tout) * (((s + 1) * tout) + s)) + 2);
    }
}

export function Sutil_Easing_backIn(t) {
    const s = 1.70158;
    return (t * t) * (((s + 1) * t) - s);
}

export function Sutil_Easing_backOut(t) {
    const s = 1.70158;
    const t$0027 = t - 1;
    return ((t$0027 * t$0027) * (((s + 1) * t$0027) + s)) + 1;
}

export function Sutil_Easing_cubicIn(t) {
    return (t * t) * t;
}

export function Sutil_Easing_cubicOut(t) {
    const f = t - 1;
    return ((f * f) * f) + 1;
}

export function Sutil_Easing_cubicInOut(t) {
    if (t < 0.5) {
        return ((4 * t) * t) * t;
    }
    else {
        return (0.5 * Math.pow((2 * t) - 2, 3)) + 1;
    }
}

export function Sutil_Easing_quadInOut(t) {
    const tin = t / 0.5;
    if (tin < 1) {
        return (0.5 * tin) * tin;
    }
    else {
        const tout = tin - 1;
        return -0.5 * ((tout * (tout - 2)) - 1);
    }
}

export function Sutil_Easing_quadIn(t) {
    return t * t;
}

export function Sutil_Easing_quadOut(t) {
    return (-t) * (t - 2);
}

export function Sutil_Easing_quartIn(t) {
    return Math.pow(t, 4);
}

export function Sutil_Easing_quartOut(t) {
    return (Math.pow(t - 1, 3) * (1 - t)) + 1;
}

export function Sutil_Easing_quartInOut(t) {
    if (t < 0.5) {
        return (((8 * t) * t) * t) * t;
    }
    else {
        return (-8 * Math.pow(t - 1, 4)) + 1;
    }
}

export function Sutil_Easing_elasticIn(t) {
    return Math.sin(((13 * t) * 3.141592653589793) / 2) * Math.pow(2, 10 * (t - 1));
}

export function Sutil_Easing_elasticOut(t) {
    return (Math.sin(((-13 * (t + 1)) * 3.141592653589793) / 2) * Math.pow(2, -10 * t)) + 1;
}

export function Sutil_Easing_quintIn(t) {
    return (((t * t) * t) * t) * t;
}

export function Sutil_Easing_quintOut(t) {
    const t$0027 = t - 1;
    return ((((t$0027 * t$0027) * t$0027) * t$0027) * t$0027) + 1;
}

export function Sutil_Easing_expoInOut(t) {
    if ((t === 0) ? true : (t === 1)) {
        return t;
    }
    else if (t < 0.5) {
        return 0.5 * Math.pow(2, (20 * t) - 10);
    }
    else {
        return (-0.5 * Math.pow(2, 10 - (t * 20))) + 1;
    }
}

export function Sutil_Easing_expoIn(t) {
    if (t === 0) {
        return t;
    }
    else {
        return Math.pow(2, 10 * (t - 1));
    }
}

export function Sutil_Easing_expoOut(t) {
    if (t === 1) {
        return t;
    }
    else {
        return 1 - Math.pow(2, -10 * t);
    }
}

