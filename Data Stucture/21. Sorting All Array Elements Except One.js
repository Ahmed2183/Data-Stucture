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
console.log("Sorting all array elements except one", a1);