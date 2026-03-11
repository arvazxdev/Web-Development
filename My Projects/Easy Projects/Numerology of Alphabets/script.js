function reload() {
    location.reload();
}
let txtCont = document.querySelector(".txt-cont");
let numCont = document.querySelector(".num-cont");
txtCont.addEventListener("keydown", (e) => {
    let key = e.key;

    console.log(e);

    const keyMap = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
        j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
        s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
    };


    if (keyMap[key.toLowerCase()]) {

        numCont.textContent += keyMap[key.toLowerCase()];

    }


    else if (key == "Backspace") {
    txtCont.textContent = txtCont.textContent.slice(0, -1);
    numCont.textContent = numCont.textContent.slice(0, -1);
}

else if (key == "Enter" || key == "Tab" || key == "CapsLock" || key == "Shift" || key == "Control" || key == "Meta" || key == "Alt" || key == "AltGraph" || key == "ContextMenu" || key == " ") {
    
}

else {
    e.preventDefault();
    alert("Invalid input")
}
})
