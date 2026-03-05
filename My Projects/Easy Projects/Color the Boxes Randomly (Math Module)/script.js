function short(n, color) {
    document.querySelector(".container").children[n].style.backgroundColor = color
}



function math() {
    let r1 = Math.floor(Math.random() * 255)
    let r2 = Math.floor(Math.random() * 255)
    let r3 = Math.floor(Math.random() * 255)
    return `rgb(${r1}, ${r2}, ${r3})`
}

let color1 = math()
let color2 = math()
let color3 = math()
let color4 = math()
let color5 = math()

short(0, color1)
short(1, color2)
short(2, color3)
short(3, color4)
short(4, color5)

function reload() {
    location.reload()
}