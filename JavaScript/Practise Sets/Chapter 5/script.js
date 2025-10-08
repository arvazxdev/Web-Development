// // Comment out one by one to see the output of each code snippet

// // Q.1 - Create an array of numbers and take input from user to add numbers to this array.
// let a = prompt("Enter a number to add it to an array");
// let b = prompt("Enter the second number to add it to an array");

// let arr = [a, b];
// console.log(arr);



// // Q.2 - Keep adding the numbers to the array in 1 until 0 is added to the array.
// let arr2 = [];

// function pushZero() {
//     if (arr2.includes(0)) {
//         arr2.pop(0);
//     }
//     arr2.push(0);
//     console.log('0 exists in the array. Thus, push of 1 is not happening!');
//     console.log("Final Array - ", arr2);

// }

// function startComputing() {
//     arr2 = [];
//     setInterval(() => {
//         if (!arr2.includes(0)) {
//             arr2.push(1);
//             console.log("Current Array - ", arr2);
//         }
//     }, interval = 100);

// }


// // Q.3 - Filter for numbers divisble by 10 from a fiven array
// let array = [23, 60, 890, 865, 30];
// let divisibleByTen = (e) => {
//     if (e % 10 == 0) {
//         return e;
//     }
// }
// console.log(array.filter(divisibleByTen));



// // Q.4 - Create an array of square of given numbers
// let ar = [2, 4 ,8, 5];
// let sa = ar.map((e) => {
//     return e**2;
// });

// console.log(sa);



// // Q.5 - Use reduce to calculate factorial of a given number from an array of first n natural numbers. (n being the number whose facrorial needs to be calculated)
// let count = prompt("Enter a number:");
// const numbers = [];

// for (let i = 1; i <= count; i++) {
//     numbers.push(i);
// }

// let red = (a, b) => {
//     return a * b;
// }

// console.log(numbers.reduce(red));
