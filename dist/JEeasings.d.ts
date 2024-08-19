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
        object: {
            [key: string]: any;
        };
        id: number;
        duration: number;
        startTime: number;
        delayStart: number;
        startingProperties: {
            [key: string]: number;
        };
        finalProperties: {
            [key: string]: number;
        };
        deltaProperties: {
            [key: string]: number;
        };
        easingFunction: (v: number) => number;
        onUpdateCB: (() => void) | false;
        onCompleteCB: (() => void) | false;
        constructor(object: object);
        to: (properties: any, duration: number) => this;
        start: () => this;
        update: (t: number) => true | undefined;
        easing: (f: (v: number) => number) => this;
        delay: (t: number) => this;
        onUpdate: (f: () => {}) => this;
        onComplete: (f: () => {}) => this;
    }
    function update(): void;
}
export default JEASINGS;
