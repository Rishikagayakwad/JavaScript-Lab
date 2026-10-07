// ==========================================
// PART 0 — FROM TERNARY TO IF-ELSE
// ==========================================

// Ternary
let marks = 68;
let result = marks >= 40 ? "Pass" : "Fail";
console.log(result);

// If-else
let marks2 = 68;

if (marks2 >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// ==========================================
// PART 1 — THE IF STATEMENT
// ==========================================

// Task 1.1
let marks1 = 55;

if (marks1 >= 40) {
    console.log("You passed!");
}

// Test 2
marks1 = 32;

if (marks1 >= 40) {
    console.log("You passed!");
}


// Task 1.2 — Can You Watch This Movie?

let age = 8;

if (age >= 18) {
    console.log("You can watch this movie");
}

age = 15;

if (age >= 18) {
    console.log("You can watch this movie");
}

age = 21;

if (age >= 18) {
    console.log("You can watch this movie");
}


// ==========================================
// PART 2 — IF-ELSE: TWO PATHS
// ==========================================

// Task 2.1 — Even or Odd

let number = 8;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

number = 15;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// Task 2.2 — ATM PIN Checker

let correctPIN = 1234;
let guess = 1234;

if (guess === correctPIN) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// Wrong PIN test
guess = 9999;

if (guess === correctPIN) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


// Task 2.3 — Pass/Fail using if-else

let marks3 = 68;

if (marks3 >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// ==========================================
// PART 3 — IF-ELSE-IF
// ==========================================

// Task 3.1 — Movie Ticket Price

function movieTicketPrice(age) {
    if (age < 5) {
        return "Free";
    } else if (age < 12) {
        return "Rs. 100";
    } else if (age < 60) {
        return "Rs. 250";
    } else {
        return "Rs. 150";
    }
}

console.log(movieTicketPrice(3));
console.log(movieTicketPrice(8));
console.log(movieTicketPrice(15));
console.log(movieTicketPrice(45));
console.log(movieTicketPrice(65));


// Task 3.2 — Weather Advice Bot

function weatherAdvice(temp) {
    if (temp > 35) {
        return "It's hot! Drink water.";
    } else if (temp > 20) {
        return "Nice weather!";
    } else if (temp > 10) {
        return "A bit cold. Wear a jacket.";
    } else {
        return "Very cold! Stay warm.";
    }
}

console.log(weatherAdvice(40));
console.log(weatherAdvice(25));
console.log(weatherAdvice(15));
console.log(weatherAdvice(5));


// ==========================================
// PART 4 — SWITCH-CASE
// ==========================================

// Task 4.1 — Seven Days

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// Task 4.2 — Mood Emoji Switch

let mood = "happy";

switch (mood) {
    case "happy":
        console.log("Keep smiling!");
        break;

    case "sad":
        console.log("It's okay to feel sad.");
        break;

    case "angry":
        console.log("Take a deep breath.");
        break;

    case "tired":
        console.log("Get some rest.");
        break;

    default:
        console.log("Have a good day!");
}


// Task 4.3 — Fall-through Example

// If break is removed, JavaScript continues
// into the next case until it finds a break
// or reaches the end of the switch.

// Example:

let example = 1;

switch (example) {
    case 1:
        console.log("Case 1");

    case 2:
        console.log("Case 2");
        break;

    default:
        console.log("Default case");
}


// ==========================================
// PART 5 — MINI PROJECT: SIMPLE ATM MACHINE
// ==========================================

// Simple ATM Machine

let atmCorrectPIN = 1234;
let enteredPIN = 1234;
let balance = 5000;
let choice = 3;

let amount;

if (enteredPIN !== atmCorrectPIN) {
    console.log("Wrong PIN. Access Denied.");
} else {

    switch (choice) {

        // Check Balance
        case 1:
            console.log("Current balance: Rs. " + balance);
            break;

        // Withdraw Money
        case 2:
            amount = 7000;

            if (amount > balance) {
                console.log("Insufficient funds");
            } else {
                balance -= amount;
                console.log("New balance: Rs. " + balance);
            }

            break;

        // Deposit Money
        case 3:
            amount = 2000;
            balance += amount;

            console.log("New balance: Rs. " + balance);
            break;

        // Invalid Choice
        default:
            console.log("Invalid choice");
    }
}


// ==========================================
// PART 5 — REQUIRED ATM TESTS
// ==========================================

// (a) Wrong PIN

console.log("\n--- ATM TEST A: WRONG PIN ---");

enteredPIN = 9999;
balance = 5000;
choice = 1;

if (enteredPIN !== atmCorrectPIN) {
    console.log("Wrong PIN. Access Denied.");
}


// (b) Correct PIN + withdrawal greater than balance

console.log("\n--- ATM TEST B: INSUFFICIENT FUNDS ---");

enteredPIN = 1234;
balance = 5000;
choice = 2;
amount = 7000;

if (enteredPIN !== atmCorrectPIN) {
    console.log("Wrong PIN. Access Denied.");
} else {

    switch (choice) {

        case 1:
            console.log("Current balance: Rs. " + balance);
            break;

        case 2:

            if (amount > balance) {
                console.log("Insufficient funds");
            } else {
                balance -= amount;
                console.log("New balance: Rs. " + balance);
            }

            break;

        case 3:
            balance += amount;
            console.log("New balance: Rs. " + balance);
            break;

        default:
            console.log("Invalid choice");
    }
}


// (c) Correct PIN + successful deposit

console.log("\n--- ATM TEST C: SUCCESSFUL DEPOSIT ---");

enteredPIN = 1234;
balance = 5000;
choice = 3;
amount = 2000;

if (enteredPIN !== atmCorrectPIN) {
    console.log("Wrong PIN. Access Denied.");
} else {

    switch (choice) {

        case 1:
            console.log("Current balance: Rs. " + balance);
            break;

        case 2:

            if (amount > balance) {
                console.log("Insufficient funds");
            } else {
                balance -= amount;
                console.log("New balance: Rs. " + balance);
            }

            break;

        case 3:
            balance += amount;
            console.log("New balance: Rs. " + balance);
            break;

        default:
            console.log("Invalid choice");
    }
}


// ==========================================
// PART 6 — DEBUGGING CHALLENGE
// ==========================================

// Snippet 1 — Fixed

let debugAge = 15;

if (debugAge === 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// Snippet 2 — Fixed

let fruit = "apple";

switch (fruit) {

    case "apple":
        console.log("Red fruit");
        break;

    case "banana":
        console.log("Yellow fruit");
        break;

    default:
        console.log("Unknown fruit");
}


// Snippet 3 — Fixed

let debugChoice = "2";

switch (debugChoice) {

    case "1":
        console.log("One");
        break;

    case "2":
        console.log("Two");
        break;

    default:
        console.log("Invalid");
}