// CS302JSC - JavaScript Practical Lab Session 6
// Topic: Hoisting & Closures


// Part 1 - Hoisting with var

// Task 1.1
console.log(city);

var city = "Haridwar";

console.log(city);


// Task 1.2
function showMessage() {
    console.log(message);

    var message = "Hello";

    console.log(message);
}

showMessage();


// Task 1.3 - Shadow Trap
var name = "global";

function test() {
    console.log(name);

    var name = "local";
}

test();


// Task 1.4 - Magic Trick
console.log(food);

var food = "Pizza";

console.log(food);


// Part 2 - Function Hoisting

// Task 2.1
// This gives TypeError because sayHi is undefined

/*
sayHi();

var sayHi = function () {
    console.log("Hi!");
};
*/


// Task 2.2
// This gives ReferenceError because of the Temporal Dead Zone

/*
sayHi();

const sayHi = function () {
    console.log("Hi!");
};
*/


// Task 2.3 - Function declaration

console.log(fnA());

function fnA() {
    return "Function declaration works";
}


// var function expression
var fnB = function () {
    return "var function expression";
};


// const function expression
const fnC = function () {
    return "const function expression";
};


// let function expression
let fnD = function () {
    return "let function expression";
};


// Task 2.4 - Two Functions, Same Name

function sameName() {
    return "First";
}

function sameName() {
    return "Second";
}

console.log(sameName());


// Task 2.5 - Top-Down Story

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


// Part 3 - let, const and Temporal Dead Zone

// Task 3.1

const PI = 3.14;

console.log(PI);


// Task 3.2

var x = 5;

console.log(typeof x);


let y = 5;

console.log(typeof y);


// Task 3.3

console.log("var before assignment gives undefined");
console.log("let and const before initialization give ReferenceError");
console.log("Calling a non-function value gives TypeError");


// Task 3.4 - Error Detective

var a = 10;

console.log(a);


let b = 10;

console.log(b);


var c = function () {
    console.log("c is a function");
};

c();


console.log(d());

function d() {
    return "Works";
}


// Part 4 - Your First Closure

// Task 4.1 - Counter

function makeCounter() {
    let count = 0;

    return function () {
        count++;

        return count;
    };
}


const counterA = makeCounter();

const counterB = makeCounter();


console.log(counterA());

console.log(counterA());

console.log(counterA());

console.log(counterA());

console.log(counterA());


console.log(counterB());

console.log(counterB());


// Task 4.2

function privateCounter() {
    let count = 0;

    return function () {
        count++;

        return count;
    };
}

const pc = privateCounter();

console.log(pc());


// Task 4.3 - Multiplier Factory

function makeMultiplier(n) {
    return function (x) {
        return x * n;
    };
}


const double = makeMultiplier(2);

const triple = makeMultiplier(3);


console.log(double(5));

console.log(triple(5));


// Task 4.4 - Greeter

function makeGreeter(greeting) {
    return function (name) {
        return greeting + ", " + name + "!";
    };
}


console.log(makeGreeter("Namaste")("Aditi"));


// Task 4.5 - Chai Counter

function makeCupCounter() {
    let cups = 0;

    return function () {
        cups++;

        return "Cup number " + cups + " of chai";
    };
}


const friend1 = makeCupCounter();

const friend2 = makeCupCounter();


console.log(friend1());

console.log(friend1());

console.log(friend1());


console.log(friend2());

console.log(friend2());


// Part 5 - Private Data with Closures

// Task 5.1 - Wallet

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


// Task 5.1 - Cheat Test

wallet.balance = 99999;

console.log(wallet.show());


// Task 5.2 - Reset

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


console.log(resetWallet.add(100));

console.log(resetWallet.spend(50));

console.log(resetWallet.reset());


// Task 5.3 - Login Guard

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


// Task 5.4 - Secret Diary

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


diary.write("Learned closures.");

diary.write("Practiced JavaScript.");


console.log(diary.read());

console.log(diary.entries);


// Part 6 - Closures in Loops

// Task 6.1 - var

const withVar = [];


for (var i = 0; i < 3; i++) {
    withVar.push(() => i);
}


console.log(withVar.map(f => f()));


// Task 6.1 - let

const withLet = [];


for (let j = 0; j < 3; j++) {
    withLet.push(() => j);
}


console.log(withLet.map(f => f()));


// Task 6.2 - Timer Version

for (var k = 1; k <= 3; k++) {
    setTimeout(() => console.log("var:", k), 1000);
}


for (let m = 1; m <= 3; m++) {
    setTimeout(() => console.log("let:", m), 1000);
}


// Task 6.3 - Fix the Bug

for (let n = 1; n <= 3; n++) {
    setTimeout(() => console.log("fixed:", n), 1000);
}


// Part 7 - Mini Project: Smart Wallet with Login Guard

function createSmartWallet(start) {
    let balance = start;

    const records = [];

    return {
        add(n) {
            balance += n;

            records.push("Added " + n);

            return balance;
        },

        spend(n) {
            if (n > balance) {
                return "Insufficient balance";
            }

            balance -= n;

            records.push("Spent " + n);

            return balance;
        },

        show() {
            return balance;
        },

        history() {
            return records.slice();
        }
    };
}


function loginLimiter(max) {
    let used = 0;

    return function () {
        if (used < max) {
            used++;

            return "Attempt " + used + " of " + max;
        }

        return "Locked!";
    };
}


const smartWallet = createSmartWallet(500);

const pinGuard = loginLimiter(3);


console.log("Starting balance:", smartWallet.show());

console.log("Add 200:", smartWallet.add(200));

console.log("PIN:", pinGuard());

console.log("Spend 150:", smartWallet.spend(150));

console.log("PIN:", pinGuard());

console.log("Spend 1000:", smartWallet.spend(1000));

console.log("Final balance:", smartWallet.show());

console.log("History:", smartWallet.history());

console.log(
    "Final Summary: Started with 500, added 200, spent 150. Final balance =",
    smartWallet.show()
);


// Bonus - Discount Factory

function makeDiscount(percent) {
    return function (price) {
        return price - (price * percent / 100);
    };
}


const festive = makeDiscount(10);

console.log(festive(500));


// Part 8 - Debugging Challenge

// Snippet 1 - Fix

var total = 5;

console.log(total);


// Snippet 2 - Fix

var greet = function () {
    console.log("Hi");
};

greet();


// Snippet 3 - Fix

function makeCounter2() {
    let c = 0;

    return function () {
        c++;

        return c;
    };
}


const next = makeCounter2();

console.log(next(), next());


// Snippet 4 - Fix

function makeCounter3() {
    let count = 0;

    return function () {
        count++;

        return count;
    };
}


const n = makeCounter3();

console.log(n(), n(), n());