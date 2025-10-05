alert("You've to enter your mobile no.")
let mo = prompt("Enter you mobile no.")
confirm("Your mobile no. is " + mo)

document.mo.style.textDecoration = "underline" // Won't work
    
console.log("Hey this is tutorial 55");

var a = 5;
// a = a + 1
let b = 6;
let c = "Arvaz";
let _a = "Sachin";
// var 55a = "Pravej"; // Not Allowed

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    // let a = 66;
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant and its value can't be changed if once defined


let x = "Arvaz bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


let o = {
    name: "Arvaz",
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);
console.log(typeof o);