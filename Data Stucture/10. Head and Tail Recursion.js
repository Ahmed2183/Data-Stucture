/* Head Recursion and Tail Recursion */

/* -->Head Recursion means function kay apnay aap sa call krnay sa phelay koi operation perform krna,
   -->Tail Recursion means function kay apnay aap sa call krnay ka baad koi operation perform krna,
   --> In Head Recursion and Tail Recursion both outputs are different 
*/

function test(x) {
    console.log(x);  /* --> Operation perform before the recursion function calling */
    if (x > 0) {
        test(x - 1);  /* test is recursion fucntion that call itself */
    }
    console.log(x);  /* --> Operation perform after the recursion function calling */
}

test(5);