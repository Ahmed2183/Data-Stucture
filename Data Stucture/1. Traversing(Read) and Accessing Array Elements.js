
let readAccess = [1, 3, 6, 8, 9];

/* Traversing(Read) Elements */
for (i = 0; i < readAccess.length; i++) {
    document.write(`Index of Array is ${i} and value is ${readAccess[i]} <br>`)
}

/* Accessing Array Elements */
function getElement(value) {
    if (value < readAccess.length && typeof parseInt(value) === 'number' && value > 0) {
        console.log(readAccess[value]);
    }
    else {
        console.log("Invalid input");
    }
}

getElement(3);
getElement(-3);
getElement("ddd");