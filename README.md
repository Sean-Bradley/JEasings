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

        // Update Box position after JEASINGS were re-evalueated.
        box.style.left = position.x + 'px'
        box.style.top = position.y + 'px'
      }
      animate()
    </script>
  </body>
</html>
```

Edit on [SBEDIT](https://sbedit.net/2d56b19d9ec89cfc6f4d3ed3910399ce7a2e2d41)

## Add a Starting Delay

```javascript
new JEASINGS.JEasing(position)
  .to({ x: 500, y: 250 }, 1500)
  .delay(500) // Optional. Delay half a second before starting the JEasing.
  .start()
```

Edit on [SBEDIT](https://sbedit.net/acba5631ee60e7276aca2db2b68c8170e5defd28)

## Use a Curve Function

The default JEasing will run and finish at a constant speed. We can modify the speed as it progresses through the duration by setting the `easing` option.

```javascript
new JEASINGS.JEasing(position)
  .to({ x: 500, y: 250 }, 1500)
  .delay(500)
  .easing(JEASINGS.Quadratic.InOut) // Optional. Use can use a curve function to change the speed over time.
  .start()
```

Edit on [SBEDIT](https://sbedit.net/dac36695782f4bf79358d0cd9db66dfc9141e622)

## JEasing `onUpdate` callback.

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

## JEasing Curve Functions

E.g., `.easing(JEASINGS.Quadratic.InOut)`

![JEasing Curve Functions](./docs/JEasing%20curve%20functions.jpg)

### More Examples

[House (CDN Example)](https://sbedit.net/2820edac35dd5035904ca2bf60518d1c3a79d359)

[JEasing Latitude Longitude](https://sbedit.net/50930f163a24650e0e84af66a8fbed8820a380b7)
