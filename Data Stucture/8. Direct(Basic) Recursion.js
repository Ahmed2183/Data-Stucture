/* Direct(Basic) Recursion: Means Function apnay aap ko call krn*/

//Factorial of Number 
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(6));

//Example 2
function apple(x) {
    console.log(x);
    if (x < 10) {
        apple(x + 1);
    }
}

apple(0);