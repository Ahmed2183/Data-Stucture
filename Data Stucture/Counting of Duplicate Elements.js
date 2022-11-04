/* Counting of duplicate elements */
let array = [1, 3, 5, 6, 3, 1, 1, 1, 5, 5];
var counts = {};

for (var i = 0; i < array.length; i++) {

   /* --> (counts[array[i]] || 0) means counts[array[i]] undefined ha tu zero hojai or zero ha tu tu plus 1 krday  */

    // counts[array[i]] = counts[array[i]];
    // console.log(counts[array[i]]);  /* output: undefined */

    // counts[array[i]] = counts[array[i]] || 0;
    // console.log(counts[array[i]]);  /* output: zero */

    counts[array[i]] = (counts[array[i]] || 0) + 1;  
    // console.log(counts[array[i]]);
}
console.log(counts);