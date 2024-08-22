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
        private object;
        private id;
        private duration;
        private startTime;
        private delayStart;
        private startingProperties;
        private finalProperties;
        private deltaProperties;
        private easingFunction;
        private onUpdateCB;
        private onCompleteCB;
        private chainedJEasing;
        constructor(object: object);
        to: (properties: any, duration: number) => this;
        start: () => this;
        private postStart;
        update: (t: number) => void;
        easing: (f: (v: number) => number) => this;
        delay: (t: number) => this;
        onUpdate: (f: () => void) => this;
        onComplete: (f: () => void) => this;
        chain: (JEasing: JEasing) => this;
    }
    const update: () => void;
    const getLength: () => number;
    const removeAll: () => void;
    const removeJEasing: (j: JEasing) => void;
}
export default JEASINGS;
