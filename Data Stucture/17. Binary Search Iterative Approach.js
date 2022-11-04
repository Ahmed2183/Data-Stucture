/* Binary Search: Iterative Approach */
//Iterative Approach used in loop

//Binray search only apply on sorting data, Binary search elements ko divide krdeta hai r mid point sa left right searching krta ha

let arr = [3, 6, 9, 12, 15, 22, 25, 30];
let findIndex = 15;
let startPoint = 0;
let endPoint = arr.length - 1;
let position = undefined;

while (startPoint <= endPoint) {
    let midPoint = Math.floor((startPoint + endPoint) / 2);
    // console.log(arr[midPoint]);
    if (arr[midPoint] === findIndex) {
        position = midPoint;
        break;
    }
    else if (arr[midPoint] < findIndex) {
        startPoint = midPoint + 1;
    }
    else {
        endPoint = midPoint - 1;
    }
}
console.log("Iterative Binary Search:",position);