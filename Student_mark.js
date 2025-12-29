// Student Result Management System

let names = ["surbhi", "siya", "jensi", "jiya"]
let marks = [89, 90, 67, 88]

let highestmark = marks[0]
let topper = names[0]

console.log("---------Student Results----------");

for (let i = 0; i < names.length; i++) {
    console.log("Name : " + names[i]);
    console.log("Mark : " + marks[i]);

    if (marks[i] >= 40) {
        console.log("Result : Pass")
    } else {
        console.log("Result : Fail")
    }

    console.log("---------------------")

    if (marks[i] > highestmark) {
        highestmark = marks[i];
        topper = names[i];
    }
}

console.log("Topper: " + topper + " (" + highestmark + " marks)");
