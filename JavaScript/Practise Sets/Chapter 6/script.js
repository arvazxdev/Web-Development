// // Comment out one by one to see the output of each question.

// // Q.1 - Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!
// let age = prompt("Enter Your age")
// parseInt(age);

// if (confirm("Enter the age again?")) {
//     window.location.reload();
// }
// else {
//     if (age < 18 && age > 0) {
//         alert("You can't drive")
//     }
//     else if (age < 0) {
//         console.error("Age can't be negative")
//         alert("Check the console")
//     }
//     else {
//         alert("You can drive")
//     }
// }




// // Q.2 - In Q1 use confirm to ask the user if he wants to see the prompt again.
// // Ans. - Solution is in the line 5-7



// // Q.3 - In the previous question, use console.error to log the error if the age entered is negative.
// // Ans. - Solution is in the line 12-15



// // Q.4 - Write a program to change the URL to google.com (Redirection) if user enters a numbers greater than 4.
// let num = prompt("To redirect on Google, enter a number greater than 4 or smaller or nothing if want to redirect on Microsoft")
// if (num > 4) {
//     window.location.href = "https://www.google.com";
// }
// else if (num < 4) {
//     window.location.href = "https://www.microsoft.com";
// }
// else {}



// // Q.5 - Change the background of the page to yellow, red or any other color based on user input through prompt.
// let bg = prompt("Which color do you want to show in background")
// document.body.style.backgroundColor = bg;
