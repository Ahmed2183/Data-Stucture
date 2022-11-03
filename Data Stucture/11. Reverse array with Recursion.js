let reverse = [1, 3, 6, 8, 9];

/*  Reverse array with Recursion */
let temp;

function recursionReverse(data, startIndex, endIndex) {
    // console.log("Reverse array with Recursion:",data);
    if (startIndex <= endIndex) {
        temp = data[startIndex];
        data[startIndex] = data[endIndex];
        data[endIndex] = temp;
        recursionReverse(data, startIndex + 1, endIndex - 1);
    }
}

recursionReverse(reverse, 0, reverse.length - 1);
console.log("Reverse array with Recursion:",reverse);
