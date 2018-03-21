// //Create a series of textboxes and buttons that let you create a Person object with
// data from the textboxes, output your Person object, as well as edit your Person
// object.

var personObject = {};

//use the maker to create a Person object
function maker(name, age, occupation) {
    var it = {};
    it.name = name;
    it.age = age;
    it.occupation = occupation;
    return it;
}

function createPerson() {
    validateName();
    validateAge();
    validateOccupation();
    personObject = maker(
        document.getElementById("name").value,
        document.getElementById("age").value,
        document.getElementById("occupation").value
        );
    alert("This person has been created");
}

function displayPerson() {
    //document.write(personObject.name, personObject.age, personObject.occupation);
    document.getElementById("display").innerHTML = "Name: " + 
    personObject.name + ", " + "Age: " + personObject.age + ", " + "Occupation: " + personObject.occupation;
}

function validateName() {
    var x = document.forms["frm1"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function validateAge() {
    var x = document.forms["frm1"]["fage"].value;
    if (x == "") {
        alert("Age must be inserted");
        return false;
    }
}

function validateOccupation() {
    var x = document.forms["frm1"]["foccupation"].value;
    if (x == "") {
        alert("Occupations cannot be blank");
        return false;
    }
}

//checks whether the person is between 20 and 40 years old
function checkAge(age) {
    var result;
    if((document.getElementById("age").value > 20) && (document.getElementById("age").value < 40)) {
        result = true;
        document.getElementById("displayTwo").innerHTML = result;
    }
    else {
        result = false;
        document.getElementById("displayTwo").innerHTML = result;
    }
} 