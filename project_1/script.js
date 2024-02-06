const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'aqua','blue', 'green', 'orange', 'pink', 'brown']

body.style.backgroundColor = 'yellow'

button.addEventListener('click', bgcolor)

function bgcolor(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}

