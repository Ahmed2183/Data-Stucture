/* Set Data Structure */
//Set remove duplicate elements, Keys and Values are same in Set Data Structure

let data = new Set(["abc", "xyz", "abc"]);

/* Add new element, dulipcate element not added */
data.add("lmn");

/* Add new object element*/
data.add({ "email": "abc@test.com" });

/* Check element is available or not */
// console.log(data.has("abc"));

/* Delete element */
// data.delete("xyz");

for (x of data) {
    // console.log(x);
}

data.forEach(value => {
    // console.log(value);
});

console.log(data);

// console.log("Values:",data.values());
// console.log("Keys",data.keys());
// console.log("Keys and Values",data.entries());