function qs(e) {
    return document.querySelector(e)
}

qs("body").style.fontFamily = "sans-serif"
qs(".container").style.backgroundColor = "yellow"
qs(".container2").style = "background-color: greenyellow"

console.log(qs(".container"));
console.log(qs(".box"));
console.log(qs(".container").innerHTML)
console.log(qs(".box").outerHTML)
console.log(qs(".container").innerText)
console.log(qs(".box").innerText)
console.log(qs(".container").outerHTML)
console.log(qs(".box").outerHTML)
console.log(qs(".container").outerText)
console.log(qs(".box").outerText)
console.log(qs(".container").tagName)
console.log(qs(".box").tagName)
console.log(qs(".container").nodeName)
console.log(qs(".box").nodeName)
console.log(qs(".container").textContent)
console.log(qs(".box").textContent)
console.log(qs(".box").hidden)
// console.log(qs(".container").hidden = true) // It will hide the element which has class = "container"
console.log(qs(".box").innerHTML)
console.log(qs(".box").innerHTML = "Hey! It is changed by JS") // It will change the text under the element which has class = "box"
console.log(qs(".container").hasAttribute("style"))
console.log(qs(".box").hasAttribute("style"))
console.log(qs(".container").getAttribute("style"))
console.log(qs(".box").getAttribute("style"))
console.log(qs(".box").setAttribute("style", "color: blue")) // It will change all the properties under style attribute of element which has class = "box"
console.log(qs(".box").attributes)
console.log(qs(".box").removeAttribute("style"))
console.log(qs(".box").dataset)


let div_s = document.createElement("div")
div_s.innerHTML = "I have created through <b>Javascript(prepend)</b> at the start of the element which has class = \"container\""
div_s.setAttribute("style", "color: green; border: 2px solid blue; width:fit-content; padding: 5px")
div_s.setAttribute("class", "created")
qs(".container").prepend(div_s)
// These 5 lines of code will add a <div>I have created through <b>Javascript</b></div> at the start of the element which has class = ".container"

let div_e = document.createElement("div")
div_e.innerHTML = "I have created through <b>Javascript(append)</b> at the end of the element which has class = \"container\""
div_e.setAttribute("style", "color: green; border: 2px solid blue; width:fit-content; padding: 5px")
div_e.setAttribute("class", "created")
qs(".container").append(div_e)
// These 5 lines of code will add a <div>I have created through <b>Javascript</b></div> at the end of the element which has class = ".container"

let div_b = document.createElement("div")
div_b.innerHTML = "I have created through <b>Javascript(before)</b> before the element which has class = \"container\""
div_b.setAttribute("style", "color: green; border: 2px solid cyan; width:fit-content; padding: 5px")
div_b.setAttribute("class", "created")
qs(".container").before(div_b)
// These 5 lines of code will add a <div>I have created through <b>Javascript</b></div> before the element which has class = ".container"

let div_a = document.createElement("div")
div_a.innerHTML = "I have created through <b>Javascript(after)</b> after the element which has class = \"container\""
div_a.setAttribute("style", "color: green; border: 2px solid cyan; width:fit-content; padding: 5px")
div_a.setAttribute("class", "created")
qs(".container").after(div_a)
// These 5 lines of code will add a <div>I have created through <b>Javascript</b></div> after the element which has class = ".container"

let div_r = document.createElement("div")
div_r.innerHTML = "I have created through <b>Javascript(replaceWith)</b> and replaced with the element which has class = \"box\""
div_r.setAttribute("style", "color: red")
qs(".box").replaceWith(div_r)
// These 5 lines of code will add a <div>I have created through <b>Javascript</b></div> after the element which has class = ".container"

let newElement = document.createElement("div")
newElement.textContent = "Javascript (afterend)"
qs(".container2").insertAdjacentHTML("beforebegin", "<p><b> Javascript (beforeobegin) </b></p>")
qs(".container2").insertAdjacentText("afterbegin", "<p><b> Javascript (afterbegin) </b></p>")
qs(".container2").insertAdjacentHTML("beforeend", "<p><b> Javascript (beforeend) </b></p>")
qs(".container2").insertAdjacentElement("afterend", newElement)
// qs(".container").remove() // It will remove the element which has class = "container"
console.log(qs(".container").classList)
console.log(qs(".container").className)
qs(".container").classList.add("Arvaz") // It will add a class = "Arvaz" in the element which has class = "container"
qs(".container").classList.remove("bg-green") // It will remove the class = "bg-green" in the element which has class = "container"
qs(".container").classList.replace("Arvaz", "Pravej") // It will replce the class = "Arvaz" with class = "Pravej" of the element which has class = "container"
qs(".container").classList.add("red") // It will not add class = "red" to the element which has class = "container" because class = "red" is already available in the element which has class = "container"
qs(".container").classList.toggle("bg-green") // It will remove the class = "bg-green" if it is available or add if not available in the element which has class = "container"
console.log(qs(".container").classList.contains("bg-green"))