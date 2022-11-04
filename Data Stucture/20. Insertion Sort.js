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
console.log("Insertion Sort",insertSort);