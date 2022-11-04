/* Counting of duplicate elements */
let array = [1, 3, 5, 6, 3, 1, 1, 1, 5, 5];
var counts = {};

for (var i = 0; i < array.length; i++) {
    counts[array[i]] = (counts[array[i]] || 0) + 1;  /* --> If (counts[array[i]] || 0) means counts[array[i]] defined ha ya zero ha tu plus 1 krday gi  */
}
console.log(counts);