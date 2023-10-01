// Canva 1.2.1
// See https://github.com/undefined06855/Canva for licencing


// global vars
let canvas = document.createElement("canvas")
  , ctx = canvas.getContext("2d")

  , $screen = {
    width: 0, height: 0
  }

  , mouse = {
    down: false,
    x: 0,
    y: 0
  }

window.addEventListener("resize", _ => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    $screen.width = canvas.width
    $screen.height = canvas.height
})

canvas.width = window.innerWidth
canvas.height = window.innerHeight

$screen.width = canvas.width
$screen.height = canvas.height

canvas.addEventListener("mousedown", event => {
    mouse.down = true
    mouse.x = event.pageX
    mouse.y = event.pageY
})

canvas.addEventListener("mouseup", event => {
    mouse.down = false
    mouse.x = event.pageX
    mouse.y = event.pageY
})

canvas.addEventListener("contextmenu", event => {
    event.preventDefault()
    return false
})

canvas.addEventListener("mousemove", event => {
    mouse.x = event.pageX
    mouse.y = event.pageY
})

canvas.setAttribute("data-canva-version", "canva-1.2.1")

document.body.appendChild(canvas)

// run in iife to prevent user accesing styles variable
!(() => {
    let styles = document.createElement("style")
    styles.innerText = "html,body,canvas{margin:0;padding:0;width:100%;height:100%;background:linear-gradient(0.5turn,#2f2f2f,#000000);overflow:hidden;}"
    document.head.appendChild(styles)
})()


// try running functions
window.addEventListener("load", _ => {
    let hasLoadFunction = true
    let hasMainFunction = true
    try
    {
        load() // run the load function if it exists
    } catch (_)
    {
        if (typeof canvaSuppressLoadFunctionError === "undefined") hasLoadFunction = false
    }

    try
    {
        main // dont run the function... yet
    } catch (_)
    {
        if (typeof canvaSuppressMainFunctionError === "undefined") hasMainFunction = false
    }

    if (!hasMainFunction && !hasLoadFunction) console.error("Canva: No load or main function found!")
    else if (!hasLoadFunction) console.warn("Canva: No load function found. Skipping!")
    else if (!hasMainFunction) console.warn("Canva: No main function found. Skipping!")

    if (hasMainFunction)
    {
        function loop()
        {
            main()
            requestAnimationFrame(loop)
        }

        loop()
    }
})
