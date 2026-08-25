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