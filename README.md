# JEASINGS

A JavaScript module for extrapolating numerical values over time.

> [!NOTE]
> JEASINGS API based on Tween.js release 1 : https://github.com/sole/tween.js/blob/r1/src/Tween.js
>
> See Tween.js r1 License at https://github.com/sole/tween.js/blob/r1/LICENSE

## Usage

### CDN

```javascript
import JEASINGS from 'https://esm.sh/jeasings'
```

### NPM

```bash
npm install jeasings
```

```javascript
import JEASINGS from 'jeasings'
```

### Host Locally

```javascript
import JEASINGS from '/path/to/JEasings.js'
```

## Basic Example

Using the JEASINGS module to animate a HTML `div` position.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>JEASINGS Module</title>
    <meta name="description" content="Using the JEASINGS module to animate a Div position." />
    <style>
      body {
        overflow: hidden;
        margin: 0px;
        background-color: #0f0f0f;
      }

      #box {
        background-color: hotpink;
        position: absolute;
        width: 100px;
        height: 100px;
      }
    </style>
  </head>
  <body>
    <div id="box"></div>
    <script type="module">
      import JEASINGS from 'https://esm.sh/jeasings'

      const position = { x: 0, y: 0 } // Starting position.

      new JEASINGS.JEasing(position) // Create a new JEasing that modifies the 'position' object.
        .to({ x: 500, y: 250 }, 1500) // Move to (500, 250) in one and a half seconds.
        .start() // Start the JEasing.

      function animate() {
        requestAnimationFrame(animate)

        JEASINGS.update() // Update JEASINGS in an animation loop.

        // Update Box position after JEASINGS were re-evaluated.
        box.style.left = position.x + 'px'
        box.style.top = position.y + 'px'
      }
      animate()
    </script>
  </body>
</html>
```

Edit on [SBEDIT](https://sbedit.net/2d56b19d9ec89cfc6f4d3ed3910399ce7a2e2d41)

### Add a Starting Delay

```javascript
new JEASINGS.JEasing(position)
  .to({ x: 500, y: 250 }, 1500)
  .delay(500) // Optional. Delay half a second before starting the JEasing.
  .start()
```

Edit on [SBEDIT](https://sbedit.net/acba5631ee60e7276aca2db2b68c8170e5defd28)

### Use a Curve Function

The default JEasing will run and finish at a constant speed. We can modify the speed as it progresses through the duration by setting the `easing` option.

```javascript
new JEASINGS.JEasing(position)
  .to({ x: 500, y: 250 }, 1500)
  .delay(500)
  .easing(JEASINGS.Quadratic.InOut) // Optional. Use can use a curve function to change the speed over time.
  .start()
```

Edit on [SBEDIT](https://sbedit.net/dac36695782f4bf79358d0cd9db66dfc9141e622)

See more [JEasing Curve Functions](#jeasing-curve-functions)

### JEasing `onUpdate` callback.

We can run some code everytime a JEasing is re-evaluated. Example, we could update the Boxes position in the `onUpdate` callback instead of in the animation loop.

```javascript
new JEASINGS.JEasing(position)
  .to({ x: 500, y: 250 }, 1500)
  .delay(500)
  .easing(JEASINGS.Quadratic.InOut)
  .onUpdate(() => {
    // Optional. Every time the JEasing is updated, do something such as re-position the box.
    box.style.left = position.x + 'px'
    box.style.top = position.y + 'px'
  })
  .start()

function animate() {
  requestAnimationFrame(animate)

  JEASINGS.update()

  // box.style.left = position.x + 'px'
  // box.style.top = position.y + 'px'
}
animate()
```

Edit on [SBEDIT](https://sbedit.net/d6977245e64318a30356329d44bd900e4fd6ce38)

### JEasing `onComplete` callback.

When a JEasing completes, we can run another script. E.g, start a new JEasing.

```javascript
new JEASINGS.JEasing(position)
  .to({ x: 500, y: 250 }, 1500)
  .delay(500)
  .easing(JEASINGS.Quadratic.InOut)
  .onUpdate(() => {
    box.style.left = position.x + 'px'
    box.style.top = position.y + 'px'
  })
  .onComplete(() => {
    // In the onComplete callback we can run any script.
    new JEASINGS.JEasing(position)
      .to({ x: 0, y: 0 }, 1500)
      .easing(JEASINGS.Bounce.Out)
      .onUpdate(() => {
        box.style.left = position.x + 'px'
        box.style.top = position.y + 'px'
      })
      .start()
  })
  .start()
```

Edit on [SBEDIT](https://sbedit.net/c85742403bc15fb65d4a9a1a542517d761ae9e27)

### JEasings as Variables

You can create JEasings as variables first, and then start them later as needed.

```javascript
const part1 = new JEASINGS.JEasing(position)
  .to({ x: 500, y: 250 }, 1500)
  .delay(500)
  .easing(JEASINGS.Quadratic.InOut)
  .onComplete(() => {
    part2.start() // When completed, start the part2 JEasing
  })
//.start()

const part2 = new JEASINGS.JEasing(position)
  .to({ x: 0, y: 0 }, 1500)
  .easing(JEASINGS.Bounce.Out)
  .onComplete(() => {
    part1.start() // Go back to the part1 JEasing
  })
//.start()

part1.start() // Start the JEasing chain execution.

function animate() {
  requestAnimationFrame(animate)

  JEASINGS.update()

  box.style.left = position.x + 'px'
  box.style.top = position.y + 'px'
}
animate()
```

Edit on [SBEDIT](https://sbedit.net/41847bbdc3c05c3513956fdd4f5bc4c9309a2698)

### Chained JEasings

Another way of chaining JEasings is to use the `chain()` method. Create several JEasings as varibles, and then use the `chain` keyword to sequence them. Then start one of them to begin the chain sequence.

```javascript
const slideRight = new JEASINGS.JEasing(position).to({ x: 500, y: 0 }, 1000)

const slideDown = new JEASINGS.JEasing(position).to({ x: 500, y: 200 }, 1000)

const slideLeft = new JEASINGS.JEasing(position).to({ x: 0, y: 200 }, 1000)

const slideUp = new JEASINGS.JEasing(position).to({ x: 0, y: 0 }, 1000)

slideRight.chain(slideDown)
slideDown.chain(slideLeft)
slideLeft.chain(slideUp)
slideUp.chain(slideRight)

slideRight.start() // Start the JEasing chain.
```

Edit on [SBEDIT](https://sbedit.net/1bca383c8461dbb375c9151c332e13dea2457678)

### JEasing Destructuring

Instead of creating new JEasings using the syntax `new JEASINGS.Jeasing(...)`, you can destructure parts of the library into single variables.

E.g.,

```javascript
import JEASINGS from '/jeasings/JEasings.js'

const { JEasing, Bounce } = JEASINGS // Destructure only what you need.

const position = { x: 0, y: 0 }

const slideRight = new JEasing(position).to({ x: 500, y: 0 }, 1000).easing(Bounce.Out)
```

Edit on [SBEDIT](https://sbedit.net/ee489f7ae0be2cf4569c0e7ab44117dba6591a2e)

### Named Imports

Instead of destructuring the JEASINGS imports, you can also used named imports for only what you need.

E.g.,

```javascript
import JEASINGS, { JEasing, Bounce } from '/jeasings/JEasings.js'

const position = { x: 0, y: 0 }

const slideRight = new JEasing(position).to({ x: 500, y: 0 }, 1000).easing(Bounce.Out)
```

Edit on [SBEDIT](https://sbedit.net/430de176ee0e815ea81caa22ae49b27969ed9659)


## JEasing Curve Functions

E.g., `.easing(JEASINGS.Quadratic.InOut)`

![JEasing Curve Functions](./docs/JEasing%20curve%20functions.jpg)

## More Examples

[Jeasings Easings](https://sbedit.net/c7103e5d9c810a964ddcdf33854eb0013246eb81)

[JEasing Chain](https://sbcode.net/threejs/jeasing-chain/)

[JEasing OrbitControls](https://sbcode.net/threejs/jeasing-orbit-controls/)

[Kick Boxing](https://sbcode.net/threejs/kick-boxing/)

[House (CDN Example)](https://sbedit.net/2820edac35dd5035904ca2bf60518d1c3a79d359)

[JEasing Latitude Longitude](https://sbedit.net/50930f163a24650e0e84af66a8fbed8820a380b7)

[JEasing OrbitControls Target in R3F](https://sbedit.net/5949b9663fb9aa758884e4590518e063cae4fbdd)

[MapControls with Select Object to Zoom in](https://sbedit.net/275bc6b9c2206d0bf997e292d0d621e62d163bee)

[Rubiks Cube](https://sbedit.net/73a3f0f2cf85343e1f76281b132453e956da98d4)

[Raycast to a Displacement Map](https://sbedit.net/651babdf65781950fb4f4e52589f416ad1378013)

[Three.js css3d - periodic table using JEASINGS](https://sbedit.net/90c9f6ba4d1b2eaf7c89674db1c66decba935acd)

[Three.js css3d - sprites using JEasings](https://sbedit.net/6de56d259819c032e3da4531ec74423e75b3f197)

[Three.js webgl - collada - kinematics using JEasings](https://sbedit.net/a9f83a731ebc9ae5a31c8b2729341200f8a86aad)
