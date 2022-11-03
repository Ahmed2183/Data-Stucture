/* Ascending Order Sorting Array using Nested Loop */
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
console.log(" Ascending Order Sorting Array", sortData);