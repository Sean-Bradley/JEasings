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

### Example

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

      new JEASINGS.JEasing(position, false) // Create a new JEasing that modifies the 'position' object.
        .to({ x: 500, y: 250 }, 1500) // Move to (500, 250) in one and a half seconds.
        .easing(JEASINGS.Quadratic.InOut) // Optional. Use a curve function to change the speed over time.
        .onUpdate(() => {
          // Optional. Every time the JEasing is updated, do something such as re-position the box.
          box.style.setProperty('transform', 'translate(' + position.x + 'px, ' + position.y + 'px)')
        })
        .delay(500) // Optional. Delay half a second before starting the JEasing.
        .start() // Start the JEasing.

      function animate() {
        requestAnimationFrame(animate)

        JEASINGS.update() // Update JEASINGS in an animation loop.
      }
      animate()
    </script>
  </body>
</html>
```

Edit on [SBEDIT](https://sbedit.net/2d56b19d9ec89cfc6f4d3ed3910399ce7a2e2d41)

### JEasing Curve Functions

Default

```
.easing(JEASINGS.Linear.None)
```

Examples

```
.easing(JEASINGS.Quadratic.In)
```

```
.easing(JEASINGS.Cubic.Out)
```

```
.easing(JEASINGS.Bounce.InOut)
```

![JEasing Curve Functions](./docs/JEasing%20curve%20functions.jpg)

### More Examples

[House (CDN Example)](https://sbedit.net/2820edac35dd5035904ca2bf60518d1c3a79d359)

[JEasing Latitude Longitude](https://sbedit.net/50930f163a24650e0e84af66a8fbed8820a380b7)
