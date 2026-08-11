console.log("My name is Rishika");
console.log(5 + 5);
// This is a comment — it prints nothing
console.log("Comments don't run this part"); // but this note does nothing either

//console.log("Hello);
console.log("Hello");

//Part 2
let studentName = "Rishika";
let rollNumber = 2224063;
let course = "BSC IT";

console.log(studentName, rollNumber, course);

//const collegeName = "Dev Sanskriti Vishwavidyalaya";
//collegeName = "ABC College";

if (true) {
    var a1 = "I am var";
    let b = "I am let";
}

console.log(a1);
//console.log(b);

//Part 3

let myString = "Hello";              // String
let myNumber = 100;                  // Number
let myBoolean = true;                // Boolean
let myUndefined;                     // Undefined
let myNull = null;                   // Null
let myBigInt = 12345678901234567890n; // BigInt
let mySymbol = Symbol("id");         // Symbol

console.log(myString, typeof myString);
console.log(myNumber, typeof myNumber);
console.log(myBoolean, typeof myBoolean);
console.log(myUndefined, typeof myUndefined);
console.log(myNull, typeof myNull);
console.log(myBigInt, typeof myBigInt);
console.log(mySymbol, typeof mySymbol);

//Task 3.2

const student = {
    name: "Rishika",
    rollNo: 2424063,
    course: "BSC IT",
    isPassing: true
};

console.log(student.name);
console.log(student.isPassing);

const subjects = ["JavaScript", "DBMS", "Networking", "Web Development"];

console.log(subjects[0], subjects[2], subjects[3]);

console.log(typeof null);


//Part 4

let a = 20;
let b = 6;

console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);
console.log("Remainder:", a % b);



//console.log(5 == "5")     // true
//console.log(5 === "5")    // false

//Task-4.3

let age = 16;
let hasID = true;

console.log(age >= 18 && hasID);
console.log(age >= 18 || hasID);
console.log(!hasID);


let marks = 65;
let result = marks >= 40 ? "Pass" : "Fail";
console.log(result);

marks = 35;

result = marks >= 40 ? "Pass" : "Fail";

console.log(result);

//Part 5---Mini Project Grade Calculator

let subject1 = 85;
let subject2 = 78;
let subject3 = 82;

let total = subject1 + subject2 + subject3;
let average = total / 3;

let grade = average >= 90
    ? "A"
    : average >= 75
    ? "B"
    : average >= 40
    ? "C"
    : "F";

console.log("Average data type:", typeof average);

console.log(
    "Total: " + total +
    ", Average: " + average.toFixed(2) +
    ", Grade: " + grade
);

let attendance = 80;

let isEligibleForScholarship =
    average >= 85 && attendance >= 75;

console.log("Scholarship Eligible:", isEligibleForScholarship);