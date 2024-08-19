// MIT License
//
// JEASINGS API based on Tween.js release 1 : https://github.com/sole/tween.js/blob/r1/src/Tween.js
// Tween.js r1 : MIT License : https://github.com/sole/tween.js/blob/r1/LICENSE
// All changes below that differ from Tween r1 are Copyright (c) 2024 Sean Bradley.

namespace JEASINGS {
  const jeasings: { [key: string]: JEasing } = {}
  let id = -1

  //#region "easings"

  export const Linear = {
    None: (v: number) => {
      return v
    }
  }

  export const Quadratic = {
    In: (v: number) => {
      return v * v
    },
    Out: (v: number) => {
      return -v * (v - 2)
    },
    InOut: (v: number) => {
      if ((v *= 2) < 1) return 0.5 * v * v
      return -0.5 * (--v * (v - 2) - 1)
    }
  }

  export const Cubic = {
    In: (v: number) => {
      return v * v * v
    },
    Out: (v: number) => {
      return --v * v * v + 1
    },
    InOut: (v: number) => {
      if ((v *= 2) < 1) return 0.5 * v * v * v
      return 0.5 * ((v -= 2) * v * v + 2)
    }
  }

  export const Quartic = {
    In: (v: number) => {
      return v * v * v * v
    },
    Out: (v: number) => {
      return -(--v * v * v * v - 1)
    },
    InOut: (v: number) => {
      if ((v *= 2) < 1) return 0.5 * v * v * v * v
      return -0.5 * ((v -= 2) * v * v * v - 2)
    }
  }

  export const Quintic = {
    In: (v: number) => {
      return v * v * v * v * v
    },
    Out: (v: number) => {
      return (v = v - 1) * v * v * v * v + 1
    },
    InOut: (v: number) => {
      if ((v *= 2) < 1) return 0.5 * v * v * v * v * v
      return 0.5 * ((v -= 2) * v * v * v * v + 2)
    }
  }

  export const Sinusoidal = {
    In: (v: number) => {
      return -Math.cos((v * Math.PI) / 2) + 1
    },
    Out: (v: number) => {
      return Math.sin((v * Math.PI) / 2)
    },
    InOut: (v: number) => {
      return -0.5 * (Math.cos(Math.PI * v) - 1)
    }
  }

  export const Exponential = {
    In: (v: number) => {
      return v == 0 ? 0 : Math.pow(2, 10 * (v - 1))
    },
    Out: (v: number) => {
      return v == 1 ? 1 : -Math.pow(2, -10 * v) + 1
    },
    InOut: (v: number) => {
      if (v == 0) return 0
      if (v == 1) return 1
      if ((v *= 2) < 1) return 0.5 * Math.pow(2, 10 * (v - 1))
      return 0.5 * (-Math.pow(2, -10 * (v - 1)) + 2)
    }
  }

  export const Circular = {
    In: (v: number) => {
      return -(Math.sqrt(1 - v * v) - 1)
    },
    Out: (v: number) => {
      return Math.sqrt(1 - --v * v)
    },
    InOut: (v: number) => {
      if ((v /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - v * v) - 1)
      return 0.5 * (Math.sqrt(1 - (v -= 2) * v) + 1)
    }
  }

  export const Elastic = {
    In: (v: number) => {
      let s,
        a = 0.1,
        p = 0.4
      if (v == 0) return 0
      if (v == 1) return 1
      if (!p) p = 0.3
      if (!a || a < 1) {
        a = 1
        s = p / 4
      } else s = (p / (2 * Math.PI)) * Math.asin(1 / a)
      return -(a * Math.pow(2, 10 * (v -= 1)) * Math.sin(((v - s) * (2 * Math.PI)) / p))
    },
    Out: (v: number) => {
      let s,
        a = 0.1,
        p = 0.4
      if (v == 0) return 0
      if (v == 1) return 1
      if (!p) p = 0.3
      if (!a || a < 1) {
        a = 1
        s = p / 4
      } else s = (p / (2 * Math.PI)) * Math.asin(1 / a)
      return a * Math.pow(2, -10 * v) * Math.sin(((v - s) * (2 * Math.PI)) / p) + 1
    },
    InOut: (v: number) => {
      let s,
        a = 0.1,
        p = 0.4
      if (v == 0) return 0
      if (v == 1) return 1
      if (!p) p = 0.3
      if (!a || a < 1) {
        a = 1
        s = p / 4
      } else s = (p / (2 * Math.PI)) * Math.asin(1 / a)
      if ((v *= 2) < 1) return -0.5 * (a * Math.pow(2, 10 * (v -= 1)) * Math.sin(((v - s) * (2 * Math.PI)) / p))
      return a * Math.pow(2, -10 * (v -= 1)) * Math.sin(((v - s) * (2 * Math.PI)) / p) * 0.5 + 1
    }
  }

  export const Back = {
    In: (v: number) => {
      var s = 1.70158
      return v * v * ((s + 1) * v - s)
    },
    Out: (v: number) => {
      var s = 1.70158
      return (v = v - 1) * v * ((s + 1) * v + s) + 1
    },
    InOut: (v: number) => {
      var s = 1.70158 * 1.525
      if ((v *= 2) < 1) return 0.5 * (v * v * ((s + 1) * v - s))
      return 0.5 * ((v -= 2) * v * ((s + 1) * v + s) + 2)
    }
  }

  export const Bounce = {
    In: (v: number) => {
      return 1 - Bounce.Out(1 - v)
    },
    Out: (v: number) => {
      if ((v /= 1) < 1 / 2.75) {
        return 7.5625 * v * v
      } else if (v < 2 / 2.75) {
        return 7.5625 * (v -= 1.5 / 2.75) * v + 0.75
      } else if (v < 2.5 / 2.75) {
        return 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375
      } else {
        return 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375
      }
    },
    InOut: (v: number) => {
      if (v < 0.5) return Bounce.In(v * 2) * 0.5
      return Bounce.Out(v * 2 - 1) * 0.5 + 0.5
    }
  }

  //#endregion "easings"

  export class JEasing {
    object: { [key: string]: any } = {}
    id = -1
    duration = 1000
    startTime = 0
    delayStart = 0
    startingProperties: { [key: string]: number } = {}
    finalProperties: { [key: string]: number } = {}
    deltaProperties: { [key: string]: number } = {}
    easingFunction = Linear.None
    onUpdateCB: (() => void) | false = false
    onCompleteCB: (() => void) | false = false

    constructor(object: object) {
      this.object = object
    }

    to = (properties: any, duration: number) => {
      if (duration !== null) {
        this.duration = duration
      }

      for (let property in properties) {
        this.finalProperties[property] = properties[property]
      }
      return this
    }

    start = () => {
      this.startTime = new Date().getTime() + this.delayStart

      for (let property in this.finalProperties) {
        this.startingProperties[property] = this.object[property]
        this.deltaProperties[property] = this.finalProperties[property] - this.object[property]
      }

      this.id = id++
      jeasings[this.id] = this

      return this
    }

    update = (t: number) => {
      let property, elapsed, value

      if (t < this.startTime) {
        return true
      }

      elapsed = (t - this.startTime) / this.duration

      if (elapsed >= 1) {
        delete jeasings[this.id]
        this.onCompleteCB && this.onCompleteCB()
      } else {
        value = this.easingFunction(elapsed)

        for (property in this.deltaProperties) {
          this.object[property] = this.startingProperties[property] + this.deltaProperties[property] * value
        }

        this.onUpdateCB && this.onUpdateCB()
      }
    }

    easing = (f: (v: number) => number) => {
      this.easingFunction = f
      return this
    }

    delay = (t: number) => {
      this.delayStart = t
      return this
    }

    onUpdate = (f: () => {}) => {
      this.onUpdateCB = f
      return this
    }

    onComplete = (f: () => {}) => {
      this.onCompleteCB = f
      return this
    }
  }

  let t = 0
  export function update() {
    t = new Date().getTime()

    Object.keys(jeasings).forEach((j) => {
      jeasings[j].update(t)
    })

    console.log(Object.keys(jeasings).length)
  }
}

export default JEASINGS
