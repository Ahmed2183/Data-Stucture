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

console.log("Merge Data Using While-Loop", dataM3);