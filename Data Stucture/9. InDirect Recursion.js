/* Indirect Recursion: Means Doo functions ko apas mai call krna */
let money = 100;
let totalApple = 0;

function buyApple(x) {
    if (x > 0) {
        console.log(`I have ${x} money and ${totalApple} apple`);
        buyMore(x - 5);
    }
    else {
        console.log(`I don't have more money but i have ${totalApple} apple`);
    }
}

function buyMore(x) {
    totalApple++;
    buyApple(x - 5);
}

buyApple(money);