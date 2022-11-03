/* Block Scope and Functional Scope Example of Variables */

var com = "Ahmed";
function add() {
    if (com === "Raza") {
        var com1 = "Rana";
    }
    else {
        console.log(com1);
        console.log(com);
    }
       for (let i = 0; i < 10; i++) {
        console.log(com);
       }
}

add();