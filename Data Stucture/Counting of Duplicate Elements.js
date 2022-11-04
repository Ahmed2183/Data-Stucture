/* Counting of duplicate elements */
let array = [1, 3, 5, 6, 3, 1, 1, 1, 5, 5];
var counts = {};

for (var i = 0; i < array.length; i++) {
    counts[array[i]] = (counts[array[i]] + 1) || 1;  /* --> If element not exist then add 1 else + 1 */
}
console.log(counts);