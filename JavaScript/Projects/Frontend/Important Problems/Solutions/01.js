let students = ["Arvaz", "Sahvaj", "Pravej", "Ashik", "Anish", "Ayan", "Raj", "Divyanshu", "Dharmendra", "Pushpa", "Lakshminarayan", "Mahadevananda", "Viswajeet"];

let house = [];

for (const student in students) {
    const element = students[student];
    if (element.length < 6) {
        house.push(`${element} - Gryffindor`);
    }

    else if (element.length < 8) {
        house.push(`${element} - Hufflepuff`);

    }

    else if (element.length < 12) {
        house.push(`${element} - Ravenclaw`);

    }
    else {
        house.push(`${element} - Slytherin`);

    }

}

console.log(house);