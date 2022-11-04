/* Bubble sort with recursion */
let bubble = [64, 34, 25, 12];

function recursiveBubble(getArr, count) {
    if (count == 1) {
        return;
    }
    let currentElement = 0;

    for(i = 0; i < count - 1; i++) {
        if(getArr[i] > getArr[i + 1]) {
            let temp = getArr[i];
            getArr[i] = getArr[i + 1];
            getArr[i + 1] = temp;
            currentElement++;
        }
        // console.log(getArr);
    }
    recursiveBubble(getArr,count - 1);
}

recursiveBubble(bubble, bubble.length);
console.log(bubble);