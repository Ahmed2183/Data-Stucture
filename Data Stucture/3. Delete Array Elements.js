let deleteElement = [1, 3, 6, 8, 9];
// console.log(deleteElement.length-1);

/* Deleting Array Elements */

/* Array kai mid sa element remove nhi krstay*/

/* Delete By index */
function deleteIndex(deletePosition) {
    for (i = deletePosition; i < deleteElement.length - 1; i++) {
        deleteElement[i] = deleteElement[i + 1];  /* --> deleteElement[3] = deleteElement[3 + 1] ---> deleteElement[3] = deleteElement[4] ---> means 3 index pr index 4 ki value replace krdo, replace k baad next index ki values agay movie hojai gi r last index ki value ki copy ban jai gi */
    }
    deleteElement.length = deleteElement.length - 1;
    console.log("After Deleting", deleteElement);
}

// deleteIndex(3);


/* Delete By Value */
let indexNum = -1;

function deleteValue(value) {
    for (i = 0; i < deleteElement.length; i++) {
        if (deleteElement[i] === value) {
            indexNum = i;
            break;
        }
    }

    if (indexNum != -1) {
        for (i = indexNum; i < deleteElement.length - 1; i++) {
            deleteElement[i] = deleteElement[i + 1];
        }
        for (i = 0; i < deleteElement.length - 1; i++) {
            console.log(deleteElement[i]);
        }
    }
}

// deleteValue(6);