let data = [1, 3, 6, 8, 9];
// console.log(data.length-1);


/* OOP Concepts */

/* Create student class */
class student {
    constructor(name, age) {  /* --> Constructor Method: Yai auto call hoga jab class ka object banay ga */
        this.name = name;  /* --> Take variables with this keyword in constructor */
        this.age = age;
        // console.log("Constructor Method Called");
    }

    hello() {  /* --> Prototype Method */
        let secondName = 'Raza';
        // console.log(`My first name is ${this.name} and second name is ${secondName} and age is ${this.age}`);
    }

    static abc() {  /* --> Static Method */
        // console.log("Static Method Called")
    }
}

let classObj = new student("Ahmed", 25);  /* --> Create class Object, We also create multiple objects of same class */
classObj.hello();  /* --> Prototype Method Call */

let secondObj = new student("Raza", 25);  /* --> 2nd object of class student */
secondObj.hello();  /* --> Prototype Method Call */


student.abc();  /* --> Static Method Call. Call with class name not with class object otherwise error */


/* Inheritance Examples */

class one {
    constructor(name) {
        this.name = name;
        // console.log("Constructor one Called");
    }

    info() {
        // console.log(`In class one my name is ${this.name}`);
    }
}

class two extends one {  /* --> class two inherit with one class, extends keyword is use for to inheritance class */
    // constructor(name) {
    //     super();  /* --> super() is used to call class one constructor */
    //     console.log("Constructor two Called", name);
    // }

    info() {
        // console.log(`In class two my name is ${this.name}`);
        super.info();  /* Call class one info() method */
    }
}

let a = new two("Ahmed");
a.info();


/* Find Even Values from Array, Make Double of every even value, Find Array Length Manually */
let value = [2, 3, 7, 6, 8, 16];
let even = [];
let count = 0;

for (i = 0; i < value.length; i++) {
    if (value[i] % 2 === 0) {  /* --> For Find Even Value */
        even.push(value[i] * 2);  /* Put even values in even array and Make Double of every even value with multiply by 2 */
        count++;  /* Find Length of even array */
    }
}
// console.log(even);
// console.log(count);


/* Counting of duplicate elements */
let array = [1, 3, 5, 6, 3, 1, 1, 1, 5, 5];
var counts = {};

for (var i = 0; i < array.length; i++) {
    counts[array[i]] = (counts[array[i]] + 1) || 1;  /* --> If element not exist then add 1 else + 1 */
}
// console.log(counts);


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

// push(5); push(10); push(15); push(20); push(25);

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

// console.log(stack);



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
// console.log("String Before Reverse in Array",str);

reverseString(str);
// console.log("String After Reverse",str.join(""));  /* --> Convert array into string */
// console.log("String After Reverse in Array",str);


/* Class Example: Reverse String with Stack */
class Stack {
    item = [];
    currentSize;
    maxSize;
    constructor(size) {
        this.maxSize = size;
        this.currentSize = this.item.length;
    }
    push(value) {
        if (this.currentSize >= this.maxSize) {
            console.log("Stack is full you not enter:", value)
        }
        else {
            this.item[this.currentSize] = value;
            this.currentSize++;
        }
    }

    pop() {
        if (this.currentSize > 0) {
            let lastRemovedItem = this.item[this.currentSize - 1];
            this.currentSize--;
            this.item.length = this.currentSize;
            return lastRemovedItem;
        }
        else {
            console.log("Stack is already empty");
        }
    }

    reverseString(element) {
        for (i = 0; i < element.length; i++) {
            this.push(element[i]);
        }

        for (i = 0; i < element.length; i++) {
            element[i] = this.pop();
        }
    }

    display() {
        // console.log(this.item);
    }
}

let obj = new Stack(5);

let str1 = 'Ahmed';
str1 = str1.split("");


obj.reverseString(str1);
// console.log("String After Reverse", str1.join(""));  /* --> Convert array into string */
// console.log("String After Reverse in Array", str1);

// obj.push(10); obj.push(20); obj.push(30); obj.push(40); obj.push(50);
// obj.pop();

obj.display();


/* Queue(FIFO) Example */
//enqueue(push) and dequeue(pop) are operation of Queue
let queue = [];
let queueLength = queue.length;
let maxVal = 5;

function pushQ(value) {  /* Add element in array */
    if (queueLength >= maxValue) {
        console.log("Queue is full you not enter:", value)
    }
    else {
        queue[queueLength] = value;
        queueLength++;
    }
}

// pushQ(50); pushQ(40); pushQ(30); pushQ(20); pushQ(10);

function popQ() {  /* Remove element from array */
    if (queueLength > 0) {
        for (i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
        }
        queueLength--;
        queue.length = queueLength;
    }
    else {
        console.log("Queue is already empty");
    }
}

// popQ(); popQ(); popQ(); popQ(); popQ();

// console.log(queue);



/* Front and Rear operations Queue */
// Front means first element of Queue and Rear means last element of Queue

function front() {
    if (queueLength > 0) {
        console.log("Front Output", queue[0]);
    }
    else {
        console.log("Queue is empty");
    }
}

function rear() {
    if (queueLength > 0) {
        console.log("Rear Output:", queue[queueLength - 1]);
    }
    else {
        console.log("Queue is empty");
    }
}

// front();
// rear();
// console.log(queue);


/* Circular Queue */
class Queue {
    constructor(size) {
        this.max = size;
        this.item = new Array(size);  /* -->Fixed Array Size */
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }
    enqueue(val) {
        if (this.currentSize != this.max) {
            if (this.rear == this.max - 1) {
                this.rear = 0;
            } else {
                this.rear++;  // --> Increment in -1 is 0
            }
            this.item[this.rear] = val;
            this.currentSize++;
            if ((this.front == -1)) {
                this.front = this.rear;
            }
        }
    }
    dequeue() {
        if (this.currentSize != 0) {
            this.item[this.front] = null;
            if (this.front == this.max - 1) {
                this.front = 0;
            } else {
                this.front++;
            }
            this.currentSize--;
        } else {
            this.front = -1;
            this.rear = -1;
            console.log("Queue is empty");
        }
    }
}

let circular = new Queue(5);

// circular.enqueue(5); circular.enqueue(10); circular.enqueue(15); circular.enqueue(20); circular.enqueue(25);
// circular.dequeue();
// console.log(circular);



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
// console.log("Iterative Binary Search:",position);


/* Binary Search: Recursive Approach */
//Recursive Approach used in function, Recursive means function kaa apnay aap ko call krna

function recursiveBinary(getArr, getStartPoint, getEndPoint) {
    let midPoint = Math.floor((getStartPoint + getEndPoint) / 2);
    // console.log(getArr[midPoint]);
    if (getArr[midPoint] === findIndex) {
        position = midPoint;
        return true;
    }
    else if (getArr[midPoint] < findIndex) {
        recursiveBinary(getArr, midPoint + 1, getEndPoint);
    }
    else {
        recursiveBinary(getArr, getStartPoint, midPoint - 1);
    }
}

recursiveBinary(arr, startPoint, endPoint);
// console.log("Recursive Binary Search:",position);



/* Descending Order Sorting */

let sort = [6, 2, 9, 5, 1, 0, 13, 20];  /* Loop executes 8x8 = 64 here array length is 8 and 2 loops runing if 3 loops hoti then 8x8x8 */

for (i = 0; i < sort.length; i++) {
    for (j = 0; j < sort.length; j++) {
        if (sort[j] < sort[j + 1]) {   // --> less than (<) sign is for Descending Order and greater then (>) sign is for Ascending Order
            let temp = sort[j];
            sort[j] = sort[j + 1];
            sort[j + 1] = temp;
        }
        // console.log(sort);
    }
}
// console.log("Descending Order Sorting Array", sort);


/* Insertion Sort */

let insertSort = [12, 11, 13, 5, 6];
function insertionSort(data) {
    let i, current, j;
    for (i = 1; i < data.length; i++) {  //--> i start from 1 bcz we not compare 0 index value
        current = data[i];
        j = i - 1;
        while (j >= 0 && data[j] > current) {
            data[j + 1] = data[j];
            j--;   //--> In insertion sort we compare values in reverse order
            // console.log(data);
        }
        data[j + 1] = current;
    }
}

insertionSort(insertSort);
// console.log("Insertion Sort",insertSort);


/* Sorting all array elements except one */

let a1 = [10, 4, 11, 7, 6, 20];
let k = 2;
let n = a1.length;

function sortExceptK(arr, k, n) {

    // Move k-th element to end
    let temp = arr[k];
    arr[k] = arr[n - 1];
    arr[n - 1] = temp;

    // Sort all elements except last
    arr.sort(function (a, b) {
        return a - b
    });

    // Store last element (originally k-th)
    let last = arr[n - 1];

    // Move all elements from k-th to one
    // position ahead.
    for (let i = n - 1; i > k; i--)
        arr[i] = arr[i - 1];

    // Restore k-th element
    arr[k] = last;

    // Move k-th element to end
    temp = arr[k];
    arr[k] = arr[n - 1];
    arr[n - 1] = temp;

    return 0;
}


sortExceptK(a1, k, n);
// console.log("Sorting all array elements except one", a1)


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
// console.log(bubble);