console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

let real_name = "John"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1))
console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)


// Escape Sequenece Characters
console.log("My name is \"Arvaz\"")
console.log('My name is \'Arvaz\'')
console.log('My name is \\ Arvaz')
console.log('My name is \t Arvaz')
console.log('My name is\b Arvaz')
console.log('My name is \n Arvaz')
console.log('My name is \r Arvaz')
console.log('My name is \f Arvaz')



// Template literals
let me = "Arvaz"
let bro = "Pravej"
console.log(`My name is ${me} and my brother name is ${bro}`)



// More
let name2 = "   Arvaz          ";
console.log(name2.trim())