// Q.1 - Create a variable of type string and try to add a number to it.

let str = "65";
let no = 12;
console.log (str + no);



// Q.2 - Use typeof operator to find the datatype of the string in last question.

console.log (typeof str);



// Q.3 - Create a const object in Javascript. Can you change it to hold a number later?

const obj = {
    name: 'Javascript',
    "Mostly Used In": "Web Development"
}
console.log (obj)
obj.name = "Java Script";
console.log (obj)

// Ans. - Yes I can change it to hold a number later.



// Q.4 - Try to add a new key to the const object in Problem 3. Are you able to do it?

obj.rank = "#1";
console.log(obj);

// Ans. - Yes I am able to do it.


// Q.5 - Write a Javascript program to create a word-meaning dictionary of 5 words.

let dict = {
    "1st_word": "Apple",
    "2nd_word": "Ball",
    "3rd_word": "Cat",
    "4th_word": "Dog",
    "5th_word": "Elephant"
}
console.log (dict);
