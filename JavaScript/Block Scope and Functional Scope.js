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

p1 = p2;  // --> Refrence of p1 copy in p2

p1.age = 100; // --> Updated value also effect on p2 object

console.log("Without using spread operator P1:",p1);
console.log("Without using spread operator P2:",p2);

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
console.log("Update const keyword object key P3:",p3);  //output: 35

//If we update const keyword object
// p3 = {
//     age:25  
// }

// console.log("Updated const keyword object",p3); //output: Error: Assignment to constant variable


//String Compare
var name1 = "Ahmed";
var name2 = "Raza";

name1 = name2;
console.log("String 1:",name1);
console.log("String 2:",name2);

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

console.log("With using spread operator P4:",p4);
console.log("With using spread operator P5:",p5);


//Check Object keys, values and length
var objLength = {
    age: 23,
    name: "ahmed",
    emp: 20
}

console.log("Object Keys:",Object.keys(objLength));  
console.log("Object Keys Length:",Object.keys(objLength).length);  
console.log("Object Values:",Object.values(objLength));  


