/* Linear Search Array Elements */
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
    // console.log(index.length);
}

searchElement(1);