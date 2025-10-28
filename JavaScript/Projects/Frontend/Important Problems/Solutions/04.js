let password = "P6dfshfdhgfh";
let capitalLetters = /[A-Z]/;
let smallLetters = /[a-z]/;
let numbers = /[0-9]/;

if (password.length < 8) {
    console.log("Password must be contain at least 8 letters");
}


else if (!capitalLetters.test(password)) {
    console.log("Password must be contain a capital letter");
}

else if (!smallLetters.test(password)) {
    console.log("Password must be contain a small letter");
}

else if (!numbers.test(password)) {
    console.log("Password must be contain a number");
}

else {
    console.log("Password Granted!")
}