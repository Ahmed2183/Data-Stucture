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

console.log("Merge Data Using For-Loop", dataMerge3);