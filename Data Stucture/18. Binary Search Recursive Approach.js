/* Binary Search: Recursive Approach */
//Recursive Approach used in function, Recursive means function kaa apnay aap ko call krna

let item = [3, 6, 9, 12, 15, 22, 25, 30];
let indexFind = 22;
let start = 0;
let end = item.length - 1;
let positionFind = undefined;

function recursiveBinary(getArr, getStartPoint, getEndPoint) {
    let midPoint = Math.floor((getStartPoint + getEndPoint) / 2);
    // console.log(getArr[midPoint]);
    if (getArr[midPoint] === indexFind) {
        positionFind = midPoint;
        return true;
    }
    else if (getArr[midPoint] < indexFind) {
        recursiveBinary(getArr, midPoint + 1, getEndPoint);
    }
    else {
        recursiveBinary(getArr, getStartPoint, midPoint - 1);
    }
}

recursiveBinary(item, start, end);
console.log("Recursive Binary Search:",positionFind);