// PART 5 SIMPLE ATM MACHINE

let correctPIN = 1234;
let enteredPIN = 1234;

let balance = 5000;

let choice = 3;
let amount;


// Check PIN
if (enteredPIN !== correctPIN) {

    console.log("Wrong PIN. Access Denied.");

} else {

    // ATM Menu
    switch (choice) {

        // Check Balance
        case 1:

            console.log("Current balance: Rs. " + balance);

            break;


        // Withdraw
        case 2:

            amount = 7000;

            if (amount > balance) {

                console.log("Insufficient funds");

            } else {

                balance = balance - amount;

                console.log("New balance: Rs. " + balance);
            }

            break;


        // Deposit
        case 3:

            amount = 2000;

            balance = balance + amount;

            console.log("New balance: Rs. " + balance);

            break;


        // Invalid Choice
        default:

            console.log("Invalid choice");
    }
}