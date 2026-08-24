//Practical Lab 3


console.log(10 + "5")   // "105"
console.log(typeof (10 + "5")  ) // "string"

console.log(5 === "5");

let x = 10;
x += 5;
console.log(x);

console.log(true && false || true);


console.log(10 % 3);

//Part 1 — Operator Precedence

let val = 4 + 3 * 2 ** 2 - 6 / 3;
console.log(val);

console.log(1 < 2 < 3);

console.log(3 > 2 > 1);

console.log((5 * 3 > 10) && (12 % 5 === 2));

//PART-2----

function getTicketPrice(age) {
    return age < 5
        ? "Free"
        : age < 12
        ? "₹100"
        : age < 60
        ? "₹250"
        : "₹150";
}
console.log(getTicketPrice(23));
console.log(getTicketPrice(4));
console.log(getTicketPrice(75));


//task 2.2 ---shipping

function getShipping(cartTotal) {
    return cartTotal >= 2000
        ? "Free Shipping"
        : cartTotal >= 1000
        ? "₹50"
        : "₹100";
}

console.log(getShipping(500));
console.log(getShipping(2500));

//Task 2.3

let isMember = true;
let totalSpent = 6000;

let discountType =
    isMember && totalSpent >= 5000
        ? "VIP Discount"
        : totalSpent >= 5000
        ? "Regular Discount"
        : "No Discount";

console.log(discountType);

isMember = false;
totalSpent = 6000;

discountType =
    isMember && totalSpent >= 5000
        ? "VIP Discount"
        : totalSpent >= 5000
        ? "Regular Discount"
        : "No Discount";

console.log(discountType);



//PART 3-----

//Tast 3.1 Arrays

const scores = [55, 72, 38, 64, 81];

const total =
    scores[0] +
    scores[1] +
    scores[2] +
    scores[3] +
    scores[4];

const average = total / scores.length;

const result = average >= 40 ? "Pass" : "Fail";

console.log("Total:", total);
console.log("Average:", average);
console.log("Result:", result);

//Task 3.2 Objects

const item11 = { name: "Notebook", price: 60, qty: 3 };
const item12 = { name: "Pen", price: 10, qty: 5 };
const item13 = { name: "Bag", price: 800, qty: 1 };
const item14 = { name: "Pencil", price: 5, qty: 10 };

const subtotal1 = item11.price * item11.qty;
const subtotal2 = item12.price * item12.qty;
const subtotal3 = item13.price * item13.qty;
const subtotal4 = item14.price * item14.qty;

const grandTotal =
    subtotal1 +
    subtotal2 +
    subtotal3 +
    subtotal4;

console.log("Notebook:", subtotal1);
console.log("Pen:", subtotal2);
console.log("Bag:", subtotal3);
console.log("Pencil:", subtotal4);
console.log("Grand Total:", grandTotal);


//PART - 4 Type Coercion

console.log("5" + 3);

console.log("5" - 3);

console.log("abc" * 2);

console.log(NaN === NaN);

console.log([] == false);

console.log("10" == 10);

console.log(null + 1);

console.log(typeof NaN);


// Part - 5:  BILLING SYSTEM

const item1 = {
    name: "Notebook",
    price: 60,
    qty: 3
};

const item2 = {
    name: "Pen",
    price: 10,
    qty: 5
};

const item3 = {
    name: "Bag",
    price: 800,
    qty: 1
};

// Check prices are numbers
const pricesAreNumbers =
    typeof item1.price === "number" &&
    typeof item2.price === "number" &&
    typeof item3.price === "number";

if (pricesAreNumbers) {

    // Subtotals
    const subtotal1 = item1.price * item1.qty;
    const subtotal2 = item2.price * item2.qty;
    const subtotal3 = item3.price * item3.qty;

    // Grand total
    const grandTotal =
        subtotal1 +
        subtotal2 +
        subtotal3;

    // Discount percentage
    const discountPercentage =
        grandTotal >= 5000
            ? 20
            : grandTotal >= 2000
            ? 10
            : grandTotal >= 1000
            ? 5
            : 0;

    // Discount amount
    const discountAmount =
        grandTotal * discountPercentage / 100;

    // After discount
    const amountAfterDiscount =
        grandTotal - discountAmount;

    // GST
    const gstAmount =
        amountAfterDiscount * 18 / 100;

    // Final payable
    const finalPayable =
        amountAfterDiscount + gstAmount;

    // Shipping
    const distinctItems = 3;

    const freeShipping =
        amountAfterDiscount >= 1500 ||
        distinctItems >= 3;

    // Receipt
    console.log("========== RECEIPT ==========");

    console.log(
        item1.name + " - ₹" +
        item1.price + " x " +
        item1.qty + " = ₹" +
        subtotal1.toFixed(2)
    );

    console.log(
        item2.name + " - ₹" +
        item2.price + " x " +
        item2.qty + " = ₹" +
        subtotal2.toFixed(2)
    );

    console.log(
        item3.name + " - ₹" +
        item3.price + " x " +
        item3.qty + " = ₹" +
        subtotal3.toFixed(2)
    );

    console.log("-----------------------------");

    console.log(
        "Grand Total: ₹" +
        grandTotal.toFixed(2)
    );

    console.log(
        "Discount: " +
        discountPercentage +
        "% = ₹" +
        discountAmount.toFixed(2)
    );

    console.log(
        "After Discount: ₹" +
        amountAfterDiscount.toFixed(2)
    );

    console.log(
        "GST (18%): ₹" +
        gstAmount.toFixed(2)
    );

    console.log(
        "Final Payable: ₹" +
        finalPayable.toFixed(2)
    );

    console.log(
        "Shipping: " +
        (freeShipping ? "FREE" : "₹100 shipping charge")
    );

    console.log("=============================");

} else {
    console.log("Error: Prices must be Numbers.");
}

//PART 6----

//Snippet-1
let price = 500;
let discount = price * 0.1;
discount = discount + 5;
let final = price - discount;
console.log("Final:", final);

//Snippet-2
let marks = "85";

let result1 =
    Number(marks) === 85
        ? "Pass"
        : "Fail";

console.log(result1);

//Snippet-3
let cartTotal = 1200;

cartTotal = cartTotal - 100;

let shipping =
    cartTotal >= 1500
        ? "Free"
        : "Paid";

console.log(shipping);

