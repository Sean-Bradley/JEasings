// MIT License
//
// JEASINGS API based on Tween.js release 1 : https://github.com/sole/tween.js/blob/r1/src/Tween.js
// Tween.js r1 : MIT License : https://github.com/sole/tween.js/blob/r1/LICENSE
// All changes below that differ from Tween r1 are Copyright (c) 2024 Sean Bradley.
var JEASINGS;
(function (JEASINGS) {
    const jeasings = {};
    let id = -1;
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
        constructor(object) {
            this.object = {};
            this.id = -1;
            this.duration = 1000;
            this.startTime = 0;
            this.delayStart = 0;
            this.startingProperties = {};
            this.finalProperties = {};
            this.deltaProperties = {};
            this.easingFunction = JEASINGS.Linear.None;
            this.onUpdateCB = false;
            this.onCompleteCB = false;
            this.to = (properties, duration) => {
                if (duration !== null) {
                    this.duration = duration;
                }
                for (let property in properties) {
                    this.finalProperties[property] = properties[property];
                }
                return this;
            };
            this.start = () => {
                this.startTime = new Date().getTime() + this.delayStart;
                for (let property in this.finalProperties) {
                    this.startingProperties[property] = this.object[property];
                    this.deltaProperties[property] = this.finalProperties[property] - this.object[property];
                }
                this.id = id++;
                jeasings[this.id] = this;
                return this;
            };
            this.update = (t) => {
                let property, elapsed, value;
                if (t < this.startTime) {
                    return true;
                }
                elapsed = (t - this.startTime) / this.duration;
                if (elapsed >= 1) {
                    delete jeasings[this.id];
                    this.onCompleteCB && this.onCompleteCB();
                }
                else {
                    value = this.easingFunction(elapsed);
                    for (property in this.deltaProperties) {
                        this.object[property] = this.startingProperties[property] + this.deltaProperties[property] * value;
                    }
                    this.onUpdateCB && this.onUpdateCB();
                }
            };
            this.easing = (f) => {
                this.easingFunction = f;
                return this;
            };
            this.delay = (t) => {
                this.delayStart = t;
                return this;
            };
            this.onUpdate = (f) => {
                this.onUpdateCB = f;
                return this;
            };
            this.onComplete = (f) => {
                this.onCompleteCB = f;
                return this;
            };
            this.object = object;
        }
    }
    JEASINGS.JEasing = JEasing;
    let t = 0;
    function update() {
        t = new Date().getTime();
        Object.keys(jeasings).forEach((j) => {
            jeasings[j].update(t);
        });
        console.log(Object.keys(jeasings).length);
    }
    JEASINGS.update = update;
})(JEASINGS || (JEASINGS = {}));
export default JEASINGS;
