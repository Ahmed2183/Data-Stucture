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

// add();


//Function Hoisting
// console.log(name);
var name = 'ahmed';

myFun();
function myFun() {
    // console.log(1 + 2);
}


//getElementById
var element = document.getElementById('myName');  //-->myName is id name of <p> tag in html file
console.log("Element:", element);


//querySelector
var element1 = document.querySelector('h1');  //-->get from html file, if we have multiple h1 tag then its return first h1 tag
console.log("Element 1:", element1);

//querySelectorAll
var element2 = document.querySelectorAll('h1');  //-->get from html file, to display all h1 tags
console.log("Element 2 to display all h1 tags:", element2);

//querySelectorAll to get tag text
var element2 = document.querySelectorAll('h1')[2].innerText;  //-->get from html file, to display tag text
console.log("Element 2 to display tag text:", element2);

//querySelectorAll to get specific tag
var element3 = document.querySelectorAll('.head');  //-->get from html file, head is class name, For multiple tags with class name of head
console.log("Element 3 For multiple tags:", element3);

//querySelector to get specific tag
var element3 = document.querySelector('.dom');  //-->get from html file, dom is class name, For single tag with class name of dom
console.log("Element 3 For single tag:", element3);


//addEventListener: If you write script tag before body tag in html then use this
function init() {
    var ele = document.querySelector('.dom');  //-->get from html file, dom is class name, For single tag with class name of dom
    console.log("For script tag and get single tag:", ele);
}
document.addEventListener('DOMContentLoaded', init);

//textContent To change any text of tag
element3.textContent = "New World";

//Add class on runtime and Remove class
var element4 = document.querySelector('.dom');  //-->get from html file
element4.classList.add('dynamic');  //--> Add class name
// element4.classList.remove('dynamic');  //--> Remove class name
console.dir(element4);


//Events: addEventListener:  To make clickable any element
//For Single Button

// var element5 = document.querySelector('.intro');  //--> 1. Get Something
// function hitMe() { //--> 3. Do Something
//     console.log("I am Button");
// }
// element5.addEventListener('click',hitMe);  //--> 2. Listen something

//Events: addEventListener:  To make clickable multiple elements
//For Multiple Buttons
var element5 = document.querySelectorAll('.intro');  //--> 1. Get Something
console.dir(element5);

function hitMe() { //--> 3. Do Something
    console.log("I am Button");
}

element5.forEach((result) => {
    result.addEventListener('click', hitMe);  //--> 2. Listen something
});


//Object Examples

var p1 = {
    age: 20
}

var p2 = {
    age: 25
}

p1 = p2;  // --> Refrence of p2 copy/pass in p1

p1.age = 100; // --> Updated value also effect on p2 object

console.log("Without using spread operator P1:", p1);
console.log("Without using spread operator P2:", p2);

if (p1 == p2) {
    console.log("Welcome Object")
}
else {
    console.log("Not Welcome Object")
}

//With const keyword
const p3 = {
    age: 30
}
p3.age = 35;  // --> Update const keyword object key
console.log("Update const keyword object key P3:", p3);  //output: 35

//If we update const keyword object
// p3 = {
//     age:25  
// }

// console.log("Updated const keyword object",p3); //output: Error: Assignment to constant variable


//String Compare
var name1 = "Ahmed";
var name2 = "Raza";

name1 = name2;
console.log("String 1:", name1);
console.log("String 2:", name2);

//To break Refrence
var p4 = {
    age: 40
}

var p5 = {
    age: 50
}
p4 = { ...p5 };  // 1st Method To break refrence using spread operator, Without this changing value also effect on p5
// p4 = Object.assign({},p5); //2nd Method To break refrence, its old method

p4.age = 30; // --> Updated value not effect on p5 object

console.log("With using spread operator P4:", p4);
console.log("With using spread operator P5:", p5);

// Calling multiple objects in spread operator
//Note jo keys sab objects mai same hogi wo eik hi bari show hongi or spread operator mai jo object last mai spread hnga usi ki key r value show hngi jo keys same hai sirf wohi
var p6 = {
    age: 40,
    name: 'ahmed'
}

var p7 = {
    age: 70,
    name: 'raza'
}
var p8 = {
    age: 90,
    emp: 'abc'
}
var p9 = { ...p8, ...p6, ...p7 }; // ---> 
console.log("With using spread operator P9:", p9);


//Check Object keys, values and length
var objLength = {
    age: 23,
    name: "ahmed",
    emp: 20
}

console.log("Object Keys:", Object.keys(objLength));
console.log("Object Keys Length:", Object.keys(objLength).length);
console.log("Object Values:", Object.values(objLength));



//Freeze Object means if you want not change value
var p10 = {
    age: 100,
    name: 'raza'
}

// p10.age = 10;  // --> Before freeze value will change

var p11 = Object.freeze(p10);

p10.age = 200; // --> After freeze value not change
console.log("Freeze Object P10:", p10);


//Create Object Keys

var getValue = prompt('Enter object key name');  // --> prompt take string
var getData = prompt('Enter Address');  // --> prompt take string

var obj1 = {
    age: 45,
    name: "Uzair"
}

obj1['First-Name'] = "Ahmed"; //Create Object Key
obj1.LastName = "Raza"; //Create Object Key


console.log("Object Key Value:", obj1[getValue]); // --> Get key and display key value

obj1.address = getData;
console.log("Object 1 Data:", obj1);

//Variable Example
var name1 = 'abc';
function abc(name) {
    var name1 = 'xyz';
    console.log(name1);  //xyz
}
abc(name1);
console.log(name1);  //abc

//Object Examples
var obj = { name: 'Loop' };
function objCall(name) {
    var obj = 'While';
    console.log(obj); //output: While
}
objCall(obj);
console.log(obj); //output: Loop


//Closure Example: We access inner function outside the function
function myScore() { // ---> Outer Function
    var score = 1;
    return function abc() { // ---> Inner Function
        console.log("Score:", score++);
    }
}
var hockey = myScore(); // -->Create instance and store inner function in variable
// console.log(hockey);
hockey();



// ECMAScript 5 Method(Constructor Function)

//Constructor Function
//In Constructor Function name of 1st letter is capital

function Student(studentName, studentAge, studentAddress) {
    //this keyword work like variable but this keyword is public means we access outside the function only used in constructor function
    this.name = studentName
    this.age = studentAge
    this.address = studentAddress
    this.func = function () {
        console.log("My name is", this.name);
    }

}

//Create instance
var student1 = new Student("Ahmed", 26, "Abc");
console.log("Student1", student1);

var student2 = new Student("Raza", 26, "Asd");
console.log("Student2", student2);

var student3 = new Student("Uzair", 27, "Xyz");
console.log("Student3", student3);

var student4 = new Student("Sattar", 27, "qwe");
console.log(student4.func());


// ECMAScript 6 Method(Class)
class Employee {  //class name of 1st letter is capital, class directly call constructor function
    constructor(empName, empAge, empAddress) {
        this.name = empName
        this.age = empAge
        this.address = empAddress
    }
    func() {
        console.log("Employee name is", this.name);
    }

    static word = "ABC"  // static only call with class name
    static getAge = this.age;  // its undefined not access
}

//Create instance without instance we not access
var employee1 = new Employee("Ahmed raza", 26, "Xyz");
console.log("Employee1", employee1);

var employee2 = new Employee("Uzair Sattar", 27, "Abc");
console.log(employee2.func());

console.log("Staic Keyword", Employee.word);  //--> Call static
console.log("Staic Keyword", Employee.getAge);  //--> Call static


//Inheritance
class Parent {
    constructor(age) {
        this.age = age
        this.name = "ABC"
        this.address = "Gulshan"
    }
}

class Child extends Parent {    // extends keyword means to connect with Parent class
    constructor(age) {
        super(age)    // ---> super ka through ham parent class sa chezay mangwa sktay hai, jesa parent class sa age mangwai
    }
}

var _child = new Child(25);
console.log("Inheritance", _child);


//this keyword
var one = document.querySelector('.one');
var two = document.querySelector('.two');

one.addEventListener('click', callThis);
two.addEventListener('click', callThis);

function callThis() {  //-->Parent function
    console.log("Inside", this);  //--> this is equal to variable one and variable two

    //Simple function mai ham parent function ki chza access nhi krskty, islia variable mai store krky use krskty h
    // var _this = this;
    // setTimeout(function() { 
    //     _this.innerText = "Ahmed";  //-->To Change button text
    // },2000);

    setTimeout(() => {  //--> Arrow function apny parent function ka scope lekr chlta ha, that's why we access this keyword in arrow function
        this.innerText = "Raza";  //-->To Change button text
    }, 2000);

}

console.log("Outside", this);


//Prototypes
//Create Own Prototype method
function User() {  //-->Constructor Function, start with Capital letter
    this.age = 25;
    this.city = 'Karachi';
}

//Add property in Prototype 
User.prototype.name = 'Ahmed';

//Add funtion in Prototype
User.prototype.add = function (a, b) {  //--> add is new Prototype function name
    return a + b;
}

//Create instance
var user1 = new User();
var user2 = new User();

//Add new data in Constructor Function
user1.address = 'ABC';

console.log("User1", user1);
console.log("User2", user2);

//Get property and function resukt
console.log("User1 Name:", user1.name);
console.log("Function Prototype Result:", user1.add(2, 3));


//Example 2
function Calculator() { //-->Constructor Function, start with Capital letter

}

//Add funtions in Prototype
Calculator.prototype.addition = function (a, b) {
    return a + b;
}
Calculator.prototype.subtraction = function (a, b) {
    return a - b;
}

//Create instance
var calc = new Calculator();

console.log("Addition of number is:", calc.addition(5, 5));
console.log("Subtraction of number is:", calc.subtraction(5, 5));



//Access Parent Function properties in Child Function

//Parent Function
function Company() {  //-->Constructor Function
    this.companyName = "PanaCloud";
}

//Add property in Prototype 
Company.prototype.country = "Pakistan";

//Child Function
function Customer() {  //-->Constructor Function
    //Access Parent Function property:
    //--> call method is used to access Parent Function properties, this keyword mai pura ka pura refrence parent function ka mil jai ga
    Company.call(this);
    this.userName = "Raza";
}

//Access Parent Function Prototype
Customer.prototype = Object.create(Company.prototype);
Customer.constructor = Customer; //--> Set Again Child(Customer Function) constructor
//After access Parent Function Prototype now Customer function has two prototype one is Company Prototype and Second his own

//Create instance
var company = new Company();
var customer = new Customer();

console.log(company);
console.log(customer);

