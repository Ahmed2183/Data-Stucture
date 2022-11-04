
/* Stack(LIFO) Example */
let stack = [];
let stackLength = stack.length;
let maxValue = 5;

function push(value) {  /* Add element in array */
    if (stackLength >= maxValue) {
        console.log("Stack is full you not enter:", value)
    }
    else {
        stack[stackLength] = value;
        stackLength++;
    }
}

push(5); push(10); push(15); push(20); push(25);

function pop() {  /* Remove element from array */
    if (stackLength > 0) {
        lastRemovedItem = stack[stackLength - 1];  /* --> Store removing element in variable, this line is for Reverse String code */
        stackLength--;
        stack.length = stackLength;
        return lastRemovedItem;
    }
    else {
        console.log("Stack is already empty");
    }
}

// pop(); pop(); pop(); pop(); pop();

console.log(stack);


/* Reverse String with Stack */
function reverseString(item) {
    for (i = 0; i < item.length; i++) {
        push(item[i]);  /* --> push is function on above */
    }
    for (i = 0; i < item.length; i++) {
        item[i] = pop();  /* --> pop is function on above, Get string in reverse */
        // pop(); /* --> Get string in straight */
    }
}

let str = 'Ahmed';
str = str.split("");  /* --> Convert string into array */
console.log("String Before Reverse in Array",str);

reverseString(str);
console.log("String After Reverse",str.join(""));  /* --> Convert array into string */
console.log("String After Reverse in Array",str);