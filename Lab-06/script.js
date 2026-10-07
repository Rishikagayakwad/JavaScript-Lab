
// CS302JSC — JavaScript Practical Lab Session 6
// Hoisting & Closures



console.log("CS302JSC — JavaScript Practical Lab Session 6");
console.log("Hoisting & Closures");



// PART 1 — HOISTING WITH VAR


console.log("\n========== PART 1 — HOISTING WITH VAR ==========");

// Task 1.1
console.log("\nTask 1.1");

console.log(city);
var city = "Haridwar";
console.log(city);

// Output:
// undefined
// Haridwar


// Task 1.2
console.log("\nTask 1.2");

function showMessage() {
    console.log(message);
    var message = "Hello";
    console.log(message);
}

showMessage();

// Output:
// undefined
// Hello


// Task 1.3 — Shadow Trap
console.log("\nTask 1.3 — Shadow Trap");

var name = "global";

function test() {
    console.log(name);
    var name = "local";
}

test();

// Output:
// undefined

// Explanation:
// The local var name is hoisted to the top of test(),
// so it hides the global name before getting its value.


// Task 1.4 — Magic Trick
console.log("\nTask 1.4 — Magic Trick");

console.log(food);
var food = "Pizza";
console.log(food);

// Output:
// undefined
// Pizza



// PART 2 — FUNCTION HOISTING


console.log("\n========== PART 2 — FUNCTION HOISTING ==========");


// Guided Example
console.log("\nGuided Example — Square");

console.log(square(4));

function square(n) {
    return n * n;
}

// Output:
// 16


// Task 2.1
console.log("\nTask 2.1");

// We cannot directly execute the original code here because
// it would stop the entire Node.js program with a TypeError.
// So we demonstrate the same error safely.

try {
    sayHi();

    var sayHi = function () {
        console.log("Hi!");
    };
} catch (error) {
    console.log(error.name + ": " + error.message);
}

// Expected:
// TypeError: sayHi is not a function


// Task 2.2 — const
console.log("\nTask 2.2 — const");

try {
    console.log(sayHello);
    const sayHello = function () {
        console.log("Hello!");
    };
} catch (error) {
    console.log(error.name + ": " + error.message);
}

// Expected:
// ReferenceError: Cannot access 'sayHello' before initialization


// Task 2.3 — Sorting Table
console.log("\nTask 2.3 — Sorting Table");

console.log("function a() {}       -> Works before its line -> Yes");
console.log("var b = function() {}  -> Works before its line -> No, TypeError");
console.log("const c = () => {}     -> Works before its line -> No, ReferenceError");
console.log("let d = function() {}  -> Works before its line -> No, ReferenceError");


// Task 2.4 — Two Functions, Same Name
console.log("\nTask 2.4 — Two Functions, Same Name");

console.log(fnA());

function fnA() {
    return "First";
}

function fnA() {
    return "Second";
}

// Output:
// Second


// Task 2.5 — Top-Down Story
console.log("\nTask 2.5 — Top-Down Story");

wakeUp();
eatBreakfast();
goToCollege();

function wakeUp() {
    console.log("I wake up.");
}

function eatBreakfast() {
    console.log("I eat breakfast.");
}

function goToCollege() {
    console.log("I go to college.");
}

// Explanation:
// This works because function declarations are completely hoisted,
// including their function bodies.



// PART 3 — LET, CONST AND TEMPORAL DEAD ZONE


console.log("\n========== PART 3 — LET, CONST AND TDZ ==========");


// Task 3.1
console.log("\nTask 3.1 — const and TDZ");

try {
    console.log(PI);
    const PI = 3.14;
} catch (error) {
    console.log(error.name + ": " + error.message);
}

// Expected:
// ReferenceError: Cannot access 'PI' before initialization


// Task 3.2 — typeof Surprise
console.log("\nTask 3.2 — typeof Surprise");

// var
console.log(typeof x);
var x = 5;

// let
try {
    console.log(typeof y);
    let y = 5;
} catch (error) {
    console.log(error.name + ": " + error.message);
}

// Output:
// undefined
// ReferenceError: Cannot access 'y' before initialization


// Task 3.3 — Error Detective
console.log("\nTask 3.3 — Three kinds of mistakes");

console.log("undefined -> when a var variable is used before its assignment.");
console.log("ReferenceError -> when let/const is used inside the TDZ.");
console.log("TypeError -> when an existing value has the wrong type for the operation.");


// Task 3.4
console.log("\nTask 3.4 — Error Detective Examples");

// (a) undefined
console.log(undefinedExample);
var undefinedExample = 10;

// (b) ReferenceError
try {
    console.log(referenceExample);
    let referenceExample = 10;
} catch (error) {
    console.log(error.name + ": " + error.message);
}

// (c) TypeError
try {
    typeExample();
    var typeExample = 10;
} catch (error) {
    console.log(error.name + ": " + error.message);
}

// (d) Works perfectly because of function hoisting
console.log(hoistedExample());

function hoistedExample() {
    return "Function hoisting works!";
}



// PART 4 — YOUR FIRST CLOSURE


console.log("\n========== PART 4 — CLOSURES ==========");


// Guided Example — Counter
console.log("\nGuided Example — Counter");

function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counterA = makeCounter();
const counterB = makeCounter();

console.log(counterA(), counterA(), counterA());
console.log(counterB());

// Output:
// 1 2 3
// 1


// Task 4.1
console.log("\nTask 4.1 — Counter");

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log("Counter 1:", counter1());
console.log("Counter 1:", counter1());
console.log("Counter 1:", counter1());
console.log("Counter 1:", counter1());
console.log("Counter 1:", counter1());

console.log("Counter 2:", counter2());
console.log("Counter 2:", counter2());

console.log(
    "Reason: counter2 has its own separate closure and its own copy of count."
);


// Task 4.2
console.log("\nTask 4.2 — Private count");

try {
    console.log(count);
} catch (error) {
    console.log(error.name + ": " + error.message);
}

// Explanation:
// count exists only inside makeCounter's scope.
// This proves closure variables are private from outside access.


// Task 4.3 — Multiplier Factory
console.log("\nTask 4.3 — Multiplier Factory");

function makeMultiplier(n) {
    return function (x) {
        return x * n;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5), triple(5));

// Output:
// 10 15


// Task 4.4 — Greeter
console.log("\nTask 4.4 — Greeter");

function makeGreeter(greeting) {
    return function (name) {
        return greeting + ", " + name + "!";
    };
}

const greetNamaste = makeGreeter("Namaste");

console.log(greetNamaste("Aditi"));

// Output:
// Namaste, Aditi!


// Task 4.5 — Chai Counter
console.log("\nTask 4.5 — Chai Counter");

function makeCupCounter() {
    let cups = 0;

    return function () {
        cups++;
        return "Cup number " + cups + " of chai";
    };
}

const chaiForAditi = makeCupCounter();
const chaiForRahul = makeCupCounter();

console.log(chaiForAditi());
console.log(chaiForAditi());
console.log(chaiForAditi());

console.log(chaiForRahul());
console.log(chaiForRahul());


// ============================================================
// PART 5 — PRIVATE DATA WITH CLOSURES
// ============================================================

console.log("\n========== PART 5 — PRIVATE DATA WITH CLOSURES ==========");


// Guided Example — Wallet
console.log("\nGuided Example — Wallet");

function createWallet(start) {
    let balance = start;

    return {
        add(n) {
            balance += n;
            return balance;
        },

        spend(n) {
            if (n > balance) {
                return "Insufficient balance";
            }

            balance -= n;
            return balance;
        },

        show() {
            return balance;
        }
    };
}

const wallet = createWallet(100);

console.log(wallet.add(50));
console.log(wallet.spend(30));
console.log(wallet.spend(500));
console.log(wallet.show());
console.log(wallet.balance);


// Task 5.1
console.log("\nTask 5.1 — Private Wallet Data");

wallet.balance = 99999;

console.log("wallet.balance =", wallet.balance);
console.log("wallet.show() =", wallet.show());

console.log(
    "Reason: balance inside the closure is private. " +
    "Changing wallet.balance creates a separate public property."
);


// Task 5.2 — Reset
console.log("\nTask 5.2 — Wallet Reset");

function createWalletWithReset(start) {
    let balance = start;

    return {
        add(n) {
            balance += n;
            return balance;
        },

        spend(n) {
            if (n > balance) {
                return "Insufficient balance";
            }

            balance -= n;
            return balance;
        },

        show() {
            return balance;
        },

        reset() {
            balance = start;
            return balance;
        }
    };
}

const resetWallet = createWalletWithReset(500);

console.log("After add:", resetWallet.add(200));
console.log("After spend:", resetWallet.spend(100));
console.log("After reset:", resetWallet.reset());


// Task 5.3 — Login Guard
console.log("\nTask 5.3 — Login Guard");

function limiter(max) {
    let used = 0;

    return function () {
        if (used < max) {
            used++;
            return "Attempt " + used + " of " + max;
        }

        return "Locked!";
    };
}

const tryLogin = limiter(3);

console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());


// Task 5.4 — Secret Diary
console.log("\nTask 5.4 — Secret Diary");

function createDiary() {
    const entries = [];

    return {
        write(text) {
            entries.push(text);
        },

        read() {
            return entries.slice();
        }
    };
}

const diary = createDiary();

diary.write("Today I learned JavaScript.");
diary.write("Closures are powerful.");
diary.write("I practiced hoisting.");

console.log("Diary:", diary.read());

console.log("Trying direct access:", diary.entries);

// diary.entries is undefined because entries is private.



// PART 6 — CLOSURES IN LOOPS


console.log("\n========== PART 6 — CLOSURES IN LOOPS ==========");


// Task 6.1
console.log("\nTask 6.1");

const withVar = [];

for (var i = 0; i < 3; i++) {
    withVar.push(() => i);
}

console.log("withVar:", withVar.map(f => f()));


const withLet = [];

for (let j = 0; j < 3; j++) {
    withLet.push(() => j);
}

console.log("withLet:", withLet.map(f => f()));

// Output:
// withVar: [3, 3, 3]
// withLet: [0, 1, 2]

// Explanation:
// var creates one shared variable i for the whole loop.
// After the loop, i is 3, so all functions return 3.
//
// let creates a new binding for each loop iteration.
// Therefore each function remembers its own value: 0, 1 and 2.


// Task 6.2 — Timer Version
console.log("\nTask 6.2 — Timer Version");

for (var k = 1; k <= 3; k++) {
    setTimeout(() => console.log("var:", k), 1000);
}

for (let m = 1; m <= 3; m++) {
    setTimeout(() => console.log("let:", m), 1000);
}

// Expected after about 1 second:
// var: 4
// var: 4
// var: 4
// let: 1
// let: 2
// let: 3


// Task 6.3 — Fix the Bug
console.log("\nTask 6.3 — Fix the Bug");

console.log("Change only ONE word: var -> let");



// PART 7 — MINI PROJECT: SMART WALLET WITH LOGIN GUARD

console.log("\n========== PART 7 — SMART WALLET ==========");


// Main code is intentionally placed before function declarations.
// Function declarations are hoisted.

const smartWallet = createSmartWallet(500);
const pinGuard = limiter(3);

console.log("\nStarting balance:", smartWallet.show());

console.log("Add 200:", smartWallet.add(200));

console.log("\nPIN check before spend:");
console.log(pinGuard());

console.log("Spend 150:", smartWallet.spend(150));

console.log("\nPIN check before spend:");
console.log(pinGuard());

console.log("Spend 1000:", smartWallet.spend(1000));

console.log("\nFinal balance:", smartWallet.show());

console.log("\nTransaction History:");

smartWallet.history().forEach(function (item) {
    console.log(item);
});

console.log("\nFinal Summary:");
console.log(
    "Started with 500, added 200, spent 150. " +
    "Final balance = " +
    smartWallet.show()
);


// Smart Wallet Function
function createSmartWallet(start) {
    let balance = start;
    const transactions = [];

    return {
        add(n) {
            balance += n;
            transactions.push("Added " + n);
            return balance;
        },

        spend(n) {
            if (n > balance) {
                return "Insufficient balance";
            }

            balance -= n;
            transactions.push("Spent " + n);
            return balance;
        },

        show() {
            return balance;
        },

        history() {
            return transactions.slice();
        }
    };
}


// Bonus — Discount Factory
console.log("\nBonus — Discount Factory");

function makeDiscount(percent) {
    return function (price) {
        return price - (price * percent / 100);
    };
}

const festive = makeDiscount(10);

console.log("Festive discount on 500:", festive(500));

// Output:
// 450



// PART 8 — DEBUGGING CHALLENGE


console.log("\n========== PART 8 — DEBUGGING CHALLENGE ==========");



// Snippet 1


console.log("\nSnippet 1 — Fixed");

var total = 5;
console.log(total);

// Problem:
// console.log(total) was before the assignment,
// so it printed undefined.
//
// Fix:
// Move the declaration/assignment before console.log().



// Snippet 2


console.log("\nSnippet 2 — Fixed");

var greet = function () {
    console.log("Hi");
};

greet();

// Problem:
// Calling greet() before assigning the function makes greet
// undefined, causing a TypeError.
//
// Fix:
// Assign the function first, then call it.



// Snippet 3


console.log("\nSnippet 3 — Fixed");

function makeCounterFixed() {
    let c = 0;

    return function () {
        c++;
        return c;
    };
}

const next = makeCounterFixed();

console.log(next(), next());

// Output:
// 1 2

// Problem:
// The original function returned c++, which is a number.
// It did not return a function.
// The fixed version returns an inner function that remembers c.



// Snippet 4


console.log("\nSnippet 4 — Fixed");

function makeCounter2Fixed() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const n = makeCounter2Fixed();

console.log(n(), n(), n());

// Output:
// 1 2 3

// Problem:
// In the original code, count was declared inside the returned
// function, so a new count = 0 was created every time.
// Moving count outside the inner function allows the closure
// to remember it.



// FINAL SUMMARY



console.log("LAB 6 COMPLETED");
console.log("Topics covered:");
console.log("1. var hoisting");
console.log("2. Function hoisting");
console.log("3. let, const and TDZ");
console.log("4. Closures");
console.log("5. Private data");
console.log("6. Closure counters");
console.log("7. Closures in loops");
console.log("8. Smart Wallet");
console.log("9. Debugging hoisting and closure bugs");
