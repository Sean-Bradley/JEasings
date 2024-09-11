// MIT License
//
// JEASINGS API based on Tween.js release 1 : https://github.com/sole/tween.js/blob/r1/src/Tween.js
// Tween.js r1 : MIT License : https://github.com/sole/tween.js/blob/r1/LICENSE
// All changes below that differ from Tween r1 are Copyright (c) 2024 Sean Bradley.

namespace JEASINGS {
  const je: { [key: string]: JEasing } = {}
  let id = -1
  let t = 0

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
    private o: { [key: string]: any } = {} // object
    private id = -1
    private d = 1000 // duration
    private st = 0 // start time
    private ds = 0 // delay start
    private sp: { [key: string]: number } = {} // starting properties
    private fp: { [key: string]: number } = {} // final properties
    private dp: { [key: string]: number } = {} // delta properties
    private ec = Linear.None // easing curve
    private ucb: ((o: object, e: number) => void) | false = false // update callback
    private ccb: ((o: object) => void) | false = false // completed callback
    private cj: JEasing | null = null // chained JEasing

    constructor(o: object) {
      this.o = o
    }

    to = (p: { [key: string]: number }, d: number) => {
      if (d !== null) {
        this.d = d
      }

      for (let property in p) {
        this.fp[property] = p[property]
      }
      return this
    }

    start = () => {
      this.st = new Date().getTime()

      if (this.ds) {
        this.st += this.ds
        setTimeout(() => this.postStart(), this.ds)
      } else {
        this.postStart()
      }

      this.id = id++
      je[this.id] = this

      return this
    }

    private postStart = () => {
      for (let property in this.fp) {
        this.sp[property] = this.o[property]
        this.dp[property] = this.fp[property] - this.o[property]
      }
    }

    update = (t: number) => {
      let p, e, v // property, elapsed, value

      if (t < this.st) {
        return
      }

      e = (t - this.st) / this.d
      e > 1 && (e = 1)

      v = this.ec(e)

      for (p in this.dp) {
        this.o[p] = this.sp[p] + this.dp[p] * v
      }

      this.ucb && this.ucb(this.o, e)
      if (e === 1) {
        delete je[this.id]
        this.ccb && this.ccb(this.o)

        this.cj && this.cj.start()
      }

      return t
    }

    easing = (f: (v: number) => number) => {
      this.ec = f
      return this
    }

    delay = (t: number) => {
      this.ds = t
      return this
    }

    onUpdate = (f: () => void) => {
      this.ucb = f
      return this
    }

    onComplete = (f: () => void) => {
      this.ccb = f
      return this
    }

    chain = (j: JEasing) => {
      this.cj = j
      return this
    }
  }

  export const update = () => {
    t = new Date().getTime()

    Object.keys(je).forEach((j) => {
      je[j].update(t)
    })
  }

  export const getLength = () => {
    return Object.keys(je).length
  }

  export const removeAll = () => {
    Object.keys(je).forEach((key) => delete je[key])
  }

  export const removeJEasing = (j: JEasing) => {
    Object.keys(je).forEach((key) => {
      if (je[key] === j) {
        delete je[key]
      }
    })
  }
}

export const {
  JEasing,
  Linear,
  Quadratic,
  Cubic,
  Quartic,
  Quintic,
  Sinusoidal,
  Exponential,
  Circular,
  Elastic,
  Back,
  Bounce
} = JEASINGS

export default JEASINGS
