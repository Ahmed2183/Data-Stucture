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
console.log(name);
var name = 'ahmed';

myFun();
function myFun() {
    console.log(1 + 2);
}


//getElementById
var element = document.getElementById('myName');  //-->myName is id name of <p> tag in html file
console.log(element);


//querySelector
var element1 = document.querySelector('h1');  //-->get from html file, if we have multiple h1 tag then its return first h1 tag
console.log(element1);

//querySelectorAll
var element2 = document.querySelectorAll('h1');  //-->get from html file, to display all h1 tags
console.log(element2);

//querySelectorAll to get tag text
var element2 = document.querySelectorAll('h1')[2].innerText;  //-->get from html file, to display tag text
console.log(element2);

//querySelectorAll to get specific tag
var element3 = document.querySelectorAll('.head');  //-->get from html file, head is class name, For multiple tags with class name of head
console.log(element3);

//querySelector to get specific tag
var element3 = document.querySelector('.dom');  //-->get from html file, dom is class name, For single tag with class name of dom
console.log(element3);


//addEventListener: If you write script tag before body tag in html then use this
function init() {
    var ele = document.querySelector('.dom');  //-->get from html file, dom is class name, For single tag with class name of dom
    console.log(ele);
}
document.addEventListener('DOMContentLoaded',init);

//textContent To change any text of tag
element3.textContent = "New World";

//Add class on runtime and Remove class
var element4 = document.querySelector('.dom');  //-->get from html file
element4.classList.add('dynamic');  //--> Add class name
// element4.classList.remove('dynamic');  //--> Remove class name
console.dir(element4);


//Events: addEventListener:  To make clickable any element
var element5 = document.querySelector('.intro');  //--> 1. Get Something
function hitMe() { //--> 3. Do Something
    console.log("I am Button");
}
element5.addEventListener('click',hitMe);  //--> 2. Listen something


