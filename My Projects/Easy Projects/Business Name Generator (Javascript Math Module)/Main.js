let random1 = Math.random()
let random2 = Math.random()
let random3 = Math.random()

let adjectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let shop_name = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

let another_word = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}


function chooser(t, r = random1) {

    let a = Object.keys(t)

    if (r < 0.34) {
        return t[a[0]]
    }
    else if (r >= 0.34 && r < 0.67) {
        return t[a[1]]
    }
    else {
        return t[a[2]]
    }
}

let result = chooser(adjectives, random1) + ' ' + chooser(shop_name, random2) + ' ' + chooser(another_word, random3)
console.log(result)

