/* Map Data Stucture */

let data = new Map([
    ['name','Abc'],
    [true,'Boolean Key'],
    [100,'Number Key'],
]);

/* Add new field */
data.set('color','Green');

/* Check Key Available in Map data or not */
// console.log(data.has(100));

/* Get Key Value */
// console.log(data.get(100));

/* To Clear All Data */
// data.clear();


for(x of data){
    // console.log("Key:",x[0]);
    // console.log("Value:",x[1]);
    // console.log("Key And Value:",x);
}

data.forEach((value,key) => {
    // console.log("Key:",key);
    // console.log("Value:",value);
})

console.log(data);