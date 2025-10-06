// Q.1 - What will the following print in javascript ?
console.log("arv\"".length)

// Ans. - 4



// Q.2 - Explore the includes, startsWith & endsWith functions of a string.
let name = 'Arvaz'
console.log(name.startsWith("A"))
console.log(name.endsWith("v"))



// Q.3 - Write a program to convert a given string in lowercase.
let str = "StrIng"
console.log(str.toLowerCase())



/* Q.4 - Extract the amount out of this string.
   "Please give Rs. 1000" */
let request = "Please give Rs. 1000"
console.log(request.slice(16))

// Q.5 - Try to change the 4th character of a given string. Were you able to do it?
let str2 = "change-me"
console.log(str2.replace(str2.charAt(3), "m"))

// Ans. - Yes!