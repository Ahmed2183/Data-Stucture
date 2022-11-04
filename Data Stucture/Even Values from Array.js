/* Find Even Values from Array, Make Double of every even value, Find Array Length Manually */
let value = [2, 3, 7, 6, 8, 16];
let even = [];
let count = 0;

for (i = 0; i < value.length; i++) {
    if (value[i] % 2 === 0) {  /* --> For Find Even Value */
        even.push(value[i] * 2);  /* Put even values in even array and Make Double of every even value with multiply by 2 */
        count++;  /* Find Length of even array */
    }
}
console.log(even);
console.log(count);