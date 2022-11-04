/* Maximum Occurring Character In String */
let str = "Hello Peter";
let strObj = {};
let maxKey = '';

for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    let key = str[i];

    if (!strObj[key]) {  //-->If character not in object
        strObj[key] = 0;
    }
    // console.log(strObj);   //--> All character have zero

    strObj[key]++;

/*In below conditon 1st time loop chali key ki value 'H' thi or maxKey ki value '' tu maxKey mai 'H' assign hojai gi dosri baari loop chli key ki value 'e' hojai gi or maxKey 'H' thi 
phr strObj[key] > strObj[maxKey] condition check hogi */

    if (maxKey == '' || strObj[key] > strObj[maxKey]) {
        maxKey = key;
    }
}

console.log(maxKey);
console.log(strObj);