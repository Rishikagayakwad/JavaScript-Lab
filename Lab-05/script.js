//Part 1 — Function Declaration Basics
//Task 1.12
function isAdult(age) {
return age >= 18;
}
console.log(isAdult(15)); // false
console.log(isAdult(18)); // true
console.log(isAdult(25)); // true

//Task 1.2 — Member Discount
function calculateDiscount(price, isMember) {
if (isMember) {
return price * 0.9;
}
return price;
}
console.log(calculateDiscount(1000, true)); // 900
console.log(calculateDiscount(1000, false)); // 1000



//Part 2 — Function Expressions &amp; Arrow Functions

//Task 2.1
const isAdultExpression = function(age) {
return age >= 18;
};
console.log(isAdultExpression(20)); // true
console.log(isAdultExpression(16)); // false

//Task 2.2 — Quick Square
const square = n => n * n;
console.log(square(2)); // 4
console.log(square(5)); // 25
console.log(square(10)); // 100

//Task 2.3
const fullName = (first, last) => first + " "+ last;
console.log(fullName("Rahul", "Sharma")); // Rahul Sharma


//Task 3.1
function calculatePrice(price, tax = 0.18) {
return price + (price * tax);
}
console.log(calculatePrice(1000, 0.10)); // 1100
console.log(calculatePrice(1000)); // 1180


//Task 3.2
function calculateArea(length, width) {
return length * width;
}
console.log(calculateArea(5)); // NaN

//Part 4 — Global vs Local Scope
//Task 4.1
let taxRate = 0.18;
function finalPrice(amount) {
    return amount + (amount * taxRate);} 
console.log(finalPrice(1000)); // 1180
//Task 4.2  
let taxRatee = 0.18;
function showTaxRate() {
    let taxRate = 0.05;
    console.log(taxRate); // 0.05
}
showTaxRate();console.log(taxRate); // 0.18




//Part 5 — Block Scope: let vs var

//Task 5.1
if (true) {
let discountApplied = true;
console.log(discountApplied); // true
}
console.log(typeof discountApplied); // undefined

//Task 5.2
if (true) {
var discountApplied = true;
console.log(discountApplied); // true
}
console.log(discountApplied); // true



//Part 6 — Scope Chain & Shadowing

//Task 6.1
function outerFunction() {
let message = "Hello from outer function";
function innerFunction() {
console.log(message);
}
innerFunction();
}
outerFunction(); // Hello from outer function


//Task 6.2 — Secret Admin Mode
let role = "guest";
function loginAsAdmin() {
let role = "admin";
console.log(role); // admin
}
loginAsAdmin();
console.log(role); // guest




//Part 7 — Mini Project: Student Grade & Fee Manager

let totalFeeCollected = 0;
function calculateGrade(marks) {
if (marks >= 90) {
    return "A" ;
} else if (marks >= 75) {
    return "B";
} else if (marks >= 60) {
    return "C";
} else {
    return "F";
}
}
const calculateLateFee = function(daysLate = 0) {
    return daysLate * 10;
};
const processStudent = (name, marks, daysLate = 0) => {
    const grade = calculateGrade(marks);
    const fee = calculateLateFee(daysLate);
    totalFeeCollected += fee;
    console.log(`${name}: Grade ${grade}, Late Fee Rs.${fee}`);
};

processStudent("Aditi", 92, 0);
processStudent("Rohit", 68, 3);
processStudent("Meera", 55, 5);
processStudent("Karan", 82); // default daysLate = 0
console.log(`Final totalFeeCollected: Rs.${totalFeeCollected}`);



//Part 8 — Debugging Challenge

//Task 8.1 — Snippet 1


// Fixed
function addNumbers(a, b) {
return a + b;
}
console.log(addNumbers(5, 3)); // 8


//Task 8.1 — Snippet 2


// Fixed
function setDiscount() {
let discount = 20;
console.log(discount);
}
setDiscount(); // 20

//Task 8.1 — Snippet 3

// Fixed
let balance1 = 1000;
function withdraw(amount) {
balance1 = balance1 - amount;
return balance1;
}
withdraw(200);
console.log(balance1); // 800

//Task 8.1 — Snippet 4

// Fixed
const sayHello = function() {
    console.log("Hi!");
};
sayHello(); // Hi!