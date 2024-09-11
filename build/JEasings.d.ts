declare namespace JEASINGS {
    const Linear: {
        None: (v: number) => number;
    };
    const Quadratic: {
        In: (v: number) => number;
        Out: (v: number) => number;
        InOut: (v: number) => number;
    };
    const Cubic: {
        In: (v: number) => number;
        Out: (v: number) => number;
        InOut: (v: number) => number;
    };
    const Quartic: {
        In: (v: number) => number;
        Out: (v: number) => number;
        InOut: (v: number) => number;
    };
    const Quintic: {
        In: (v: number) => number;
        Out: (v: number) => number;
        InOut: (v: number) => number;
    };
    const Sinusoidal: {
        In: (v: number) => number;
        Out: (v: number) => number;
        InOut: (v: number) => number;
    };
    const Exponential: {
        In: (v: number) => number;
        Out: (v: number) => number;
        InOut: (v: number) => number;
    };
    const Circular: {
        In: (v: number) => number;
        Out: (v: number) => number;
        InOut: (v: number) => number;
    };
    const Elastic: {
        In: (v: number) => number;
        Out: (v: number) => number;
        InOut: (v: number) => number;
    };
    const Back: {
        In: (v: number) => number;
        Out: (v: number) => number;
        InOut: (v: number) => number;
    };
    const Bounce: {
        In: (v: number) => number;
        Out: (v: number) => number;
        InOut: (v: number) => number;
    };
    class JEasing {
        private o;
        private id;
        private d;
        private st;
        private ds;
        private sp;
        private fp;
        private dp;
        private ec;
        private ucb;
        private ccb;
        private cj;
        constructor(o: object);
        to: (p: {
            [key: string]: number;
        }, d: number) => this;
        start: () => this;
        private postStart;
        update: (t: number) => number | undefined;
        easing: (f: (v: number) => number) => this;
        delay: (t: number) => this;
        onUpdate: (f: () => void) => this;
        onComplete: (f: () => void) => this;
        chain: (j: JEasing) => this;
    }
    const update: () => void;
    const getLength: () => number;
    const removeAll: () => void;
    const removeJEasing: (j: JEasing) => void;
}
export declare const JEasing: typeof JEASINGS.JEasing, Linear: {
    None: (v: number) => number;
}, Quadratic: {
    In: (v: number) => number;
    Out: (v: number) => number;
    InOut: (v: number) => number;
}, Cubic: {
    In: (v: number) => number;
    Out: (v: number) => number;
    InOut: (v: number) => number;
}, Quartic: {
    In: (v: number) => number;
    Out: (v: number) => number;
    InOut: (v: number) => number;
}, Quintic: {
    In: (v: number) => number;
    Out: (v: number) => number;
    InOut: (v: number) => number;
}, Sinusoidal: {
    In: (v: number) => number;
    Out: (v: number) => number;
    InOut: (v: number) => number;
}, Exponential: {
    In: (v: number) => number;
    Out: (v: number) => number;
    InOut: (v: number) => number;
}, Circular: {
    In: (v: number) => number;
    Out: (v: number) => number;
    InOut: (v: number) => number;
}, Elastic: {
    In: (v: number) => number;
    Out: (v: number) => number;
    InOut: (v: number) => number;
}, Back: {
    In: (v: number) => number;
    Out: (v: number) => number;
    InOut: (v: number) => number;
}, Bounce: {
    In: (v: number) => number;
    Out: (v: number) => number;
    InOut: (v: number) => number;
};
export default JEASINGS;
