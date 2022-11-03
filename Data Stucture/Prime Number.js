/* Prime Number */

var num = parseInt(prompt("Enter a positive number: "))
let isPrime = true;

if (num === 1) {
    console.log("Not a prime");
}

else if (num > 1) {
    for (let x = 2; x < num; x++) {
        if (num % x == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("Prime Number");
    }
    else {
        console.log("Not Prime")
    }
}