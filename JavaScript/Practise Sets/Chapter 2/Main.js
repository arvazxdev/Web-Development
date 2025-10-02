// Q.1 - Use logical operators to find whether the age of a person lies between 10 and 20?

let age = 45;

if (age >= 10 && age <= 20) {
    console.log ("Your age is between 10 and 20")
}

else {
    console.log ("Your age isn't between 10 and 20")    
}



// Q.2 - Demonstrate the use of switch case statement in Javascript.

switch (age) {
    case 10 :
        console.log ("Your age is just 10");

    case 20 :
        console.log ("Your age is just 20");
    break;

    default :
        console.log ("Your age is neither 10 nor 20");

}



// Q.3 - Write a Javascript program to find whether a number is divisible by 2 and 3.

let no = 18;

if (no%2==0 && no%3 == 0) {
    console.log ("This number can be divide perfectly by 2 and 3")
} 
else {
    console.log ("This number is not divisible of 2 and 3 both")
}



// Q.4 - Write a Javascript program to find whether a number is divisible by either 2 or 3.


if (no%2==0 || no%3 == 0) {
    console.log ("This number can be divide perfectly by 2 and 3")
} 
else {
    console.log ("This number is neither divisible by 2 nor 3")
}


// Q.5 - Print "You can drive" or "You cannot drive" based on age being greater than 18 using ternary operator.

(age > 18) ? console.log ("You can drive"):console.log ("You cannot drive")