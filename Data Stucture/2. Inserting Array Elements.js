let insert = [1, 3, 6, 8, 9];
// console.log(insert.length-1);


/* Inserting Array Elements in Starting,Ending,Middle */
function insertElement(insertPosition, value) {
    /* In this For-Loop We Traversing(Read) Elements In Reverse */
    for (i = insert.length; i >= 0; i--) {  /* Reverse islia q k end mai new index add krsktay hai par start mai nhi */
        if (i >= insertPosition) {
            insert[i + 1] = insert[i];
            if (i === insertPosition) {
                insert[i] = value;
                insert.length = insert.length - 1;  /* --> For insert element in last of array */
            }
        }
    }
    console.log("After Inserting", insert);
}

insertElement(4, 4000);