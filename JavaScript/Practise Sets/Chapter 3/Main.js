// Q.1 - Write a program to print the marks of a student in an object using for loop.

const studentMarks = {
  Math: 95,
  English: 88,
  Science: 92,
  History: 85
};

// Get all subjects (keys) as an array
const subjects = Object.keys(studentMarks);

// Classic for loop
for (let i = 0; i < subjects.length; i++) {
  const subject = subjects[i];
  const mark = studentMarks[subject];
  console.log(subject + ": " + mark);
}


// Q.2 - Write the program in Q.1 using for-in loop.

let marks = {
    physics: "94",
    chemistry: "83",
    math: "98"
}

for (const key in marks) {
    const mark = marks[key]
    console.log (key, "-", mark)
    
}



// Q.3 - Write a program to print "try again" until the user enters the correct number.

let no = 9999999999;

console.log ("Your number is", no )

while (no < 1000000000) {
    console.log ("Try Again!!!")
    no = no + 1000000000;
}



// Q.4 - Write a function to find mean of 5 numbers.

function mean(a, b, c, d, e) {
    console.log('Mean is', (a+b+c+d+e)/5)
}

mean(3, 4, 2, 5, 6)