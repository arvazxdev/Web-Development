alert("This is a faulty calculator, so, there is 10% chances to perform incorrect calculation (Be responsible for it).")

let random = (Math.random())

let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter operation")


if (random > 0.1) {
    // Perform correct calculation
    if (c = "+") {
        alert(parseInt(a) + parseInt(b))
    }
    else if (c = "-") {
        alert(parseInt(a) - parseInt(b))
    }
    else if (c = "*") {
        alert(parseInt(a) * parseInt(b))
    }
    else if (c = "/") {
        alert(parseInt(a) / parseInt(b))
    }
    else {
        alert("You've entered an invalid expression")
    }
}

else {
    // Perform incorrect calculation
    if (c = "+") {
        alert(parseInt(a) * parseInt(b))
    }
    else if (c = "-") {
        alert(parseInt(a) / parseInt(b))
    }
    else if (c = "*") {
        alert(parseInt(a) + parseInt(b))
    }
    else if (c = "/") {
        alert(parseInt(a) - parseInt(b))
    }
    else {
        alert("You've entered an invalid expression")
    }

}