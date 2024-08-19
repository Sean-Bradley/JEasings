declare namespace JEASINGS {
    const Linear: {
        EaseNone: (v: number) => number;
    };
    const Quadratic: {
        EaseIn: (v: number) => number;
        EaseOut: (v: number) => number;
        EaseInOut: (v: number) => number;
    };
    const Cubic: {
        EaseIn: (v: number) => number;
        EaseOut: (v: number) => number;
        EaseInOut: (v: number) => number;
    };
    const Quartic: {
        EaseIn: (v: number) => number;
        EaseOut: (v: number) => number;
        EaseInOut: (v: number) => number;
    };
    const Quintic: {
        EaseIn: (v: number) => number;
        EaseOut: (v: number) => number;
        EaseInOut: (v: number) => number;
    };
    const Sinusoidal: {
        EaseIn: (v: number) => number;
        EaseOut: (v: number) => number;
        EaseInOut: (v: number) => number;
    };
    const Exponential: {
        EaseIn: (v: number) => number;
        EaseOut: (v: number) => number;
        EaseInOut: (v: number) => number;
    };
    const Circular: {
        EaseIn: (v: number) => number;
        EaseOut: (v: number) => number;
        EaseInOut: (v: number) => number;
    };
    const Elastic: {
        EaseIn: (v: number) => number;
        EaseOut: (v: number) => number;
        EaseInOut: (v: number) => number;
    };
    const Back: {
        EaseIn: (v: number) => number;
        EaseOut: (v: number) => number;
        EaseInOut: (v: number) => number;
    };
    const Bounce: {
        EaseIn: (v: number) => number;
        EaseOut: (v: number) => number;
        EaseInOut: (v: number) => number;
    };
    class JEasing {
        key: {
            [key: string]: any;
        };
        duration: number;
        startTime: number;
        delayTime: number;
        startingProperties: {
            [key: string]: any;
        };
        finalProperties: {
            [key: string]: any;
        };
        deltaProperties: {
            [key: string]: any;
        };
        easingFunction: (v: number) => number;
        constructor(key: object);
        to: (properties: any, duration: number) => this;
        start: () => this;
        update: (t: number) => true | undefined;
        easing: (f: (v: number) => number) => this;
        delay: (t: number) => this;
    }
    function update(): void;
}
export default JEASINGS;
