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


// Test 1
console.log(movieTicketPrice(3));

// Test 2
console.log(movieTicketPrice(8));

// Test 3
console.log(movieTicketPrice(15));

// Test 4
console.log(movieTicketPrice(45));

// Test 5
console.log(movieTicketPrice(65));