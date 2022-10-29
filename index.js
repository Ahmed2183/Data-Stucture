/* Block Scope and Functional Scope Example of Variables */
var com = "jkl";
function add() {
    if (com === "jkla") {
        var com1 = "abc";
    }
    else {
        // console.log(com1);
        // console.log(com);
    }

    //    for (let i = 0; i < 10; i++) {
    //     console.log(com);

    //    }

}

add();


/* Prime Number */
// var num = parseInt(prompt("Enter a positive number: "))
// let isPrime = true;

// if(num === 1) {
//     console.log("Not a prime");
// }

// else if(num > 1) {
//     for (let x = 2; x < num; x++) {
//         if(num % x == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime) {
//         console.log("Prime Number");
//     }
//     else {
//         console.log("Not Prime")
//     }
// }



let data = [1, 3, 6, 8, 9];
// console.log(data.length-1);


/* Traversing(Read) Elements */
for (i = 0; i < data.length; i++) {
    document.write(`Index of Array is ${i} and value is ${data[i]} <br>`)
}

/* Accessing Array Elements */
function getElement(value) {
    if (value < data.length && typeof parseInt(value) === 'number' && value > 0) {
        console.log(data[value]);
    }
    else {
        console.log("Invalid input");
    }
}

// getElement(3);
// getElement(-3);
// getElement("ddd");


/* Inserting Array Elements in Starting,Ending,Middle */
function insertElement(insertPosition, value) {
    /* In this For-Loop We Traversing(Read) Elements In Reverse */
    for (i = data.length; i >= 0; i--) {  /* Reverse islia q k end mai new index add krsktay hai par start mai nhi */
        if (i >= insertPosition) {
            data[i + 1] = data[i];
            if (i === insertPosition) {
                data[i] = value;
                data.length = data.length - 1;  /* --> For insert element in last of array */
            }
        }
    }
    console.log("After Inserting", data);
}

// insertElement(4, 4000);


/* Deleting Array Elements */

/* Array kai mid sa element remove nhi krstay*/

/* Delete By index */
function deleteElement(deletePosition) {
    for (i = deletePosition; i < data.length - 1; i++) {
        data[i] = data[i + 1];  /* --> data[3] = data[3 + 1] ---> data[3] = data[4] ---> means 3 index pr index 4 ki value replace krdo, replace k baad next index ki values agay movie hojai gi r last index ki value ki copy ban jai gi */
    }
    data.length = data.length - 1;
    console.log("After Deleting", data);
}

// deleteElement(3);


/* Delete By Value */
let indexNum = -1;

function deleteElement(value) {
    for (i = 0; i < data.length; i++) {
        if (data[i] === value) {
            indexNum = i;
            break;
        }
    }

    if (index != -1) {
        for (i = indexNum; i < data.length - 1; i++) {
            data[i] = data[i + 1];
        }
        for (i = 0; i < data.length - 1; i++) {
            console.log(data[i]);
        }
    }
}

// deleteElement(6);


/* Search Array Elements */
let data1 = [1, 3, 6, 8, 9, 3, 1, 1, 1];
let index = [];
let index1;
let index2 = 0;

function searchElement(searchValue) {
    for (i = 0; i <= data1.length - 1; i++) {
        if (data1[i] === searchValue) {

            /* This for Add in variable index1*/
            // index1 = i;  

            /* This for array index*/
            index[index2] = i;
            index2++;

            // break; /* --> Agar array mai duplicate data na hu tab break use kro element search krna k baad aga check nhi kra ga or console loop k bhr use hoga, duplicate data mai break use na krna par last element/index return hoga output mai*/
        }
    }
    console.log(index);
    console.log(index.length);
}

// searchElement(1);


/* Merge Two Array Manually: Answer Get In Without Sorting Using For-Loop */
let dataMerge1 = [3, 7, 12, 34, 56, 90];
let dataMerge2 = [4, 9, 25, 45];
let dataMerge3 = [];

for (i = 0; i < dataMerge1.length; i++) {
    dataMerge3[i] = dataMerge1[i];
}

for (i = 0; i < dataMerge2.length; i++) {
    dataMerge3[dataMerge1.length + i] = dataMerge2[i];
}

// console.log("Merge Data Using For-Loop", dataMerge3);


/* Merge Array Manually: Answer Get In With Soritng Using While Loop */
let dataM1 = [3, 7, 12, 34, 56, 90];
let dataM2 = [4, 9, 25, 45];
let dataM3 = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < dataM1.length && d2 < dataM2.length) {
    if (dataM1[d1] < dataM2[d2]) {  /* --> Compare values for sorting */
        dataM3[d3] = dataM1[d1];
        d1++;
    }
    else {
        dataM3[d3] = dataM2[d2];
        d2++;
    }
    d3++;
}

while (d1 < dataM1.length) {
    dataM3[d3] = dataM1[d1];
    d1++;
    d3++;
}

// console.log("Merge Data Using While-Loop", dataM3);


/* Sorting Array using Nested Loop */
let sortData = [6, 2, 9, 5, 1, 0, 13, 20];  /* Loop executes 8x8 = 64 here array length is 8 and 2 loops runing if 3 loops hoti then 8x8x8 */

for (i = 0; i < sortData.length; i++) {
    for (j = 0; j < sortData.length; j++) {
        if (sortData[j] > sortData[j + 1]) {
            let temp = sortData[j];
            sortData[j] = sortData[j + 1];
            sortData[j + 1] = temp;
        }
        // console.log(sortData);
    }
}
// console.log("Sorted Array", sortData);


/* While Loop For String */
let stringData = ["Batman", "Ironman", "Superman", "Spiderman"];

for (i = 0; i < stringData.length; i++) {
    // console.log(stringData[i]);
}


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
// console.log(factorial(6));

//Example 2
function apple(x) {
    console.log(x);
    if (x < 10) {
        apple(x + 1);
    }
}

// apple(0);


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

// buyApple(money);


/* Head Recursion and Tail Recursion */

/* -->Head Recursion means function kay apnay aap sa call krnay sa phelay koi operation perform krna,
   -->Tail Recursion means function kay apnay aap sa call krnay ka baad koi operation perform krna,
   --> In Head Recursion and Tail Recursion both outputs are different 
*/

function test(x) {
    console.log(x);  /* --> Operation perform before the recursion function calling */
    if (x > 0) {
        test(x - 1);  /* test is recursion fucntion that call itself */
    }
    // console.log(x);  /* --> Operation perform after the recursion function calling */
}

// test(5);


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

recursionReverse(data, 0, data.length - 1);


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

