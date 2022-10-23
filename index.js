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

/* Inserting Array Elements */
function insertElement(insertPosition, value) {
    /* In this For-Loop We Traversing(Read) Elements In Reverse */
    for (i = data.length - 1; i >= 0; i--) {
        if (i >= insertPosition) {
            data[i + 1] = data[i];
            if (i === insertPosition) {
                data[i] = value;
            }
        }
    }
    console.log("After Inserting", data);
}

// insertElement(4, 4000);

/* Deleting Array Elements */

/* Array kai mid sa element remove nhi krstay*/
function deleteElement(deletePosition) {
    for (i = deletePosition; i < data.length - 1; i++) {
        data[i] = data[i + 1];  /* --> data[3] = data[3 + 1] ---> data[3] = data[4] ---> means 3 index pr index 4 ki value replace krdo, replace k baad next index ki values agay movie hojai gi r last index ki value ki copy ban jai gi */
    }
    data.length = data.length - 1;
    console.log("After Deleting", data);
}

// deleteElement(3);

/* Search Array Elements */
let data1 = [1, 3, 6, 8, 9, 3, 1, 1, 1];
let index = [];

function searchElement(searchValue) {
    for (i = 0; i <= data1.length - 1; i++) {
        if (data1[i] === searchValue) {
            // index = i;
            index.push(i);
            // break; /* --> Agar array mai duplicate data na hu tab break use kro element search krna k baad aga check nhi kra ga or console loop k bhr use hoga */
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

/* Direct(Basic)  Recursion:  Factorial of Number */

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
// console.log(factorial(6));