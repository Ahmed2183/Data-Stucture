/* OOP Concepts */

/* Create student class */
class student {
    constructor(name, age) {  /* --> Constructor Method: Yai auto call hoga jab class ka object banay ga */
        this.name = name;  /* --> Take variables with this keyword in constructor */
        this.age = age;
        console.log("Constructor Method Called");
    }

    hello() {  /* --> Prototype Method */
        let secondName = 'Raza';
        console.log(`My first name is ${this.name} and second name is ${secondName} and age is ${this.age}`);
    }

    static abc() {  /* --> Static Method */
        console.log("Static Method Called");
    }
}

let classObj = new student("Ahmed", 25);  /* --> Create class Object, We also create multiple objects of same class */
classObj.hello();  /* --> Prototype Method Call */

let secondObj = new student("Raza", 25);  /* --> 2nd object of class student */
secondObj.hello();  /* --> Prototype Method Call */


student.abc();  /* --> Static Method Call. Call with class name not with class object otherwise error */


/* Inheritance Examples */

class one {
    constructor(name) {
        this.name = name;
        console.log("Constructor one Called");
    }

    info() {
        console.log(`In class one my name is ${this.name}`);
    }
}

class two extends one {  /* --> class two inherit with one class, extends keyword is use for to inheritance class */
    constructor(name) {
        super();  /* --> super() is used to call class one constructor */
        console.log("Constructor two Called", name);
    }

    info() {
        console.log(`In class two my name is ${this.name}`);
        super.info();  /* Call class one info() method */
    }
}

let a = new two("Ahmed");
a.info();
