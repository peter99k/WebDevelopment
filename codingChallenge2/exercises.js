
// create a square function - coding challenge 1
var x;

function square(input) {
    x = input*input;
    console.log(x);
}

// create a sum function - coding challenge 1
square(10);

function sum(a, b, c) {
    x = a+b+c;
    console.log(x);
}

sum(3,4,5);

//create a Person object, edit the details and output again - coding challenge 1
function maker(name, age, occupation) {
    var it = {};
    it.name = name;
    it.age = age;
    it.occupation = occupation;
    console.log(it.name, it.age, it.occupation);
}

var testObject = maker("Peter", 33, "Consultant");

var testObject = new Object();
testObject.name = "Amrit";
testObject.age = 24;
testObject.occupation = "Consultant";

console.log(testObject.name, testObject.age, testObject.occupation);

//create a button that calls a function when clicked - coding challenge 1
function sayHello() {
    alert("Hello World!!! Cheers for clicking the button... :-)");
}

//create a button that increases the age of the Person object - coding challenge 1
function increaseAge() {
    var x = testObject.age;
    var y = x + 1;
    alert("Your age is now: " + y);
}

