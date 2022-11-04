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
console.log("Descending Order Sorting Array", sort);