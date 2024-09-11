// MIT License
//
// JEASINGS API based on Tween.js release 1 : https://github.com/sole/tween.js/blob/r1/src/Tween.js
// Tween.js r1 : MIT License : https://github.com/sole/tween.js/blob/r1/LICENSE
// All changes below that differ from Tween r1 are Copyright (c) 2024 Sean Bradley.
var JEASINGS;
(function (JEASINGS) {
    const je = {};
    let id = -1;
    let t = 0;
    //#region "easings"
    JEASINGS.Linear = {
        None: (v) => {
            return v;
        }
    };
    JEASINGS.Quadratic = {
        In: (v) => {
            return v * v;
        },
        Out: (v) => {
            return -v * (v - 2);
        },
        InOut: (v) => {
            if ((v *= 2) < 1)
                return 0.5 * v * v;
            return -0.5 * (--v * (v - 2) - 1);
        }
    };
    JEASINGS.Cubic = {
        In: (v) => {
            return v * v * v;
        },
        Out: (v) => {
            return --v * v * v + 1;
        },
        InOut: (v) => {
            if ((v *= 2) < 1)
                return 0.5 * v * v * v;
            return 0.5 * ((v -= 2) * v * v + 2);
        }
    };
    JEASINGS.Quartic = {
        In: (v) => {
            return v * v * v * v;
        },
        Out: (v) => {
            return -(--v * v * v * v - 1);
        },
        InOut: (v) => {
            if ((v *= 2) < 1)
                return 0.5 * v * v * v * v;
            return -0.5 * ((v -= 2) * v * v * v - 2);
        }
    };
    JEASINGS.Quintic = {
        In: (v) => {
            return v * v * v * v * v;
        },
        Out: (v) => {
            return (v = v - 1) * v * v * v * v + 1;
        },
        InOut: (v) => {
            if ((v *= 2) < 1)
                return 0.5 * v * v * v * v * v;
            return 0.5 * ((v -= 2) * v * v * v * v + 2);
        }
    };
    JEASINGS.Sinusoidal = {
        In: (v) => {
            return -Math.cos((v * Math.PI) / 2) + 1;
        },
        Out: (v) => {
            return Math.sin((v * Math.PI) / 2);
        },
        InOut: (v) => {
            return -0.5 * (Math.cos(Math.PI * v) - 1);
        }
    };
    JEASINGS.Exponential = {
        In: (v) => {
            return v == 0 ? 0 : Math.pow(2, 10 * (v - 1));
        },
        Out: (v) => {
            return v == 1 ? 1 : -Math.pow(2, -10 * v) + 1;
        },
        InOut: (v) => {
            if (v == 0)
                return 0;
            if (v == 1)
                return 1;
            if ((v *= 2) < 1)
                return 0.5 * Math.pow(2, 10 * (v - 1));
            return 0.5 * (-Math.pow(2, -10 * (v - 1)) + 2);
        }
    };
    JEASINGS.Circular = {
        In: (v) => {
            return -(Math.sqrt(1 - v * v) - 1);
        },
        Out: (v) => {
            return Math.sqrt(1 - --v * v);
        },
        InOut: (v) => {
            if ((v /= 0.5) < 1)
                return -0.5 * (Math.sqrt(1 - v * v) - 1);
            return 0.5 * (Math.sqrt(1 - (v -= 2) * v) + 1);
        }
    };
    JEASINGS.Elastic = {
        In: (v) => {
            let s, a = 0.1, p = 0.4;
            if (v == 0)
                return 0;
            if (v == 1)
                return 1;
            if (!p)
                p = 0.3;
            if (!a || a < 1) {
                a = 1;
                s = p / 4;
            }
            else
                s = (p / (2 * Math.PI)) * Math.asin(1 / a);
            return -(a * Math.pow(2, 10 * (v -= 1)) * Math.sin(((v - s) * (2 * Math.PI)) / p));
        },
        Out: (v) => {
            let s, a = 0.1, p = 0.4;
            if (v == 0)
                return 0;
            if (v == 1)
                return 1;
            if (!p)
                p = 0.3;
            if (!a || a < 1) {
                a = 1;
                s = p / 4;
            }
            else
                s = (p / (2 * Math.PI)) * Math.asin(1 / a);
            return a * Math.pow(2, -10 * v) * Math.sin(((v - s) * (2 * Math.PI)) / p) + 1;
        },
        InOut: (v) => {
            let s, a = 0.1, p = 0.4;
            if (v == 0)
                return 0;
            if (v == 1)
                return 1;
            if (!p)
                p = 0.3;
            if (!a || a < 1) {
                a = 1;
                s = p / 4;
            }
            else
                s = (p / (2 * Math.PI)) * Math.asin(1 / a);
            if ((v *= 2) < 1)
                return -0.5 * (a * Math.pow(2, 10 * (v -= 1)) * Math.sin(((v - s) * (2 * Math.PI)) / p));
            return a * Math.pow(2, -10 * (v -= 1)) * Math.sin(((v - s) * (2 * Math.PI)) / p) * 0.5 + 1;
        }
    };
    JEASINGS.Back = {
        In: (v) => {
            var s = 1.70158;
            return v * v * ((s + 1) * v - s);
        },
        Out: (v) => {
            var s = 1.70158;
            return (v = v - 1) * v * ((s + 1) * v + s) + 1;
        },
        InOut: (v) => {
            var s = 1.70158 * 1.525;
            if ((v *= 2) < 1)
                return 0.5 * (v * v * ((s + 1) * v - s));
            return 0.5 * ((v -= 2) * v * ((s + 1) * v + s) + 2);
        }
    };
    JEASINGS.Bounce = {
        In: (v) => {
            return 1 - JEASINGS.Bounce.Out(1 - v);
        },
        Out: (v) => {
            if ((v /= 1) < 1 / 2.75) {
                return 7.5625 * v * v;
            }
            else if (v < 2 / 2.75) {
                return 7.5625 * (v -= 1.5 / 2.75) * v + 0.75;
            }
            else if (v < 2.5 / 2.75) {
                return 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375;
            }
            else {
                return 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375;
            }
        },
        InOut: (v) => {
            if (v < 0.5)
                return JEASINGS.Bounce.In(v * 2) * 0.5;
            return JEASINGS.Bounce.Out(v * 2 - 1) * 0.5 + 0.5;
        }
    };
    //#endregion "easings"
    class JEasing {
        o = {}; // object
        id = -1;
        d = 1000; // duration
        st = 0; // start time
        ds = 0; // delay start
        sp = {}; // starting properties
        fp = {}; // final properties
        dp = {}; // delta properties
        ec = JEASINGS.Linear.None; // easing curve
        ucb = false; // update callback
        ccb = false; // completed callback
        cj = null; // chained JEasing
        constructor(o) {
            this.o = o;
        }
        to = (p, d) => {
            if (d !== null) {
                this.d = d;
            }
            for (let property in p) {
                this.fp[property] = p[property];
            }
            return this;
        };
        start = () => {
            this.st = new Date().getTime();
            if (this.ds) {
                this.st += this.ds;
                setTimeout(() => this.postStart(), this.ds);
            }
            else {
                this.postStart();
            }
            this.id = id++;
            je[this.id] = this;
            return this;
        };
        postStart = () => {
            for (let property in this.fp) {
                this.sp[property] = this.o[property];
                this.dp[property] = this.fp[property] - this.o[property];
            }
        };
        update = (t) => {
            let p, e, v; // property, elapsed, value
            if (t < this.st) {
                return;
            }
            e = (t - this.st) / this.d;
            e > 1 && (e = 1);
            v = this.ec(e);
            for (p in this.dp) {
                this.o[p] = this.sp[p] + this.dp[p] * v;
            }
            this.ucb && this.ucb(this.o, e);
            if (e === 1) {
                delete je[this.id];
                this.ccb && this.ccb(this.o);
                this.cj && this.cj.start();
            }
            return t;
        };
        easing = (f) => {
            this.ec = f;
            return this;
        };
        delay = (t) => {
            this.ds = t;
            return this;
        };
        onUpdate = (f) => {
            this.ucb = f;
            return this;
        };
        onComplete = (f) => {
            this.ccb = f;
            return this;
        };
        chain = (j) => {
            this.cj = j;
            return this;
        };
    }
    JEASINGS.JEasing = JEasing;
    JEASINGS.update = () => {
        t = new Date().getTime();
        Object.keys(je).forEach((j) => {
            je[j].update(t);
        });
    };
    JEASINGS.getLength = () => {
        return Object.keys(je).length;
    };
    JEASINGS.removeAll = () => {
        Object.keys(je).forEach((key) => delete je[key]);
    };
    JEASINGS.removeJEasing = (j) => {
        Object.keys(je).forEach((key) => {
            if (je[key] === j) {
                delete je[key];
            }
        });
    };
})(JEASINGS || (JEASINGS = {}));
export const { JEasing, Linear, Quadratic, Cubic, Quartic, Quintic, Sinusoidal, Exponential, Circular, Elastic, Back, Bounce } = JEASINGS;
export default JEASINGS;
