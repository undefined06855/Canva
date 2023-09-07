# Canva
A javascript file to setup a simple canvas game. This is really only going to be used by me.

## Instructions
### (If you do end up using it)

Make sure to include one `load` function (which runs once on page load), and one `main` function (which runs every frame). If you don't include one or the other, you'll see a warning in console, but if you include neither, you'll see an error.
<br/>The warnings can be suppressed by including the following javascript code before the main canva.js code <small>(1.2+)</small>:
```js
canvaSuppressLoadFunctionError = true
canvaSuppressMainFunctionError = true
```

There are also some variables that are exposed. They are the following:

`$screen.width`: The width of the screen, in pixels. (number)\*<br/>
`$screen.height`: The height of the screen, in pixels. (number)\*<br/>
<small>*Note that in version 1.0, these were `screen.width` and `screen.height` respectively.</small>

`mouse.down`: The state of left click on the mouse. (boolean)<br/>
`mouse.x`: The x position of the mouse. (number)<br/>
`mouse.y`: The y position of the mouse. (number)

`canvas`: The canvas element (HTMLCanvasElement)<br/>
`ctx`: The canvas context (CanvasRenderingContext2D)

