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


// Test 1
console.log(weatherAdvice(40));

// Test 2
console.log(weatherAdvice(25));

// Test 3
console.log(weatherAdvice(15));

// Test 4
console.log(weatherAdvice(5));