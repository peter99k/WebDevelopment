var strArr = [];
var inputOne;
var inputTwo;
var inputThree;
var inputFour;

function displayArray(input1, input2, input3) {
    inputOne = document.getElementById("inputOne").value;
    inputTwo = document.getElementById("inputTwo").value;
    inputThree = document.getElementById("inputThree").value;
    strArr = [inputOne, inputTwo, inputThree];
    document.getElementById("display").innerHTML = strArr;
}

function addAnother(input4) {
    inputFour = document.getElementById("inputFour").value;
    strArr.push(inputFour);
    document.getElementById("displayTwo").innerHTML = strArr;
}

function removeLastElement() {
    strArr.splice(-1, 1);
    document.getElementById("displayThree").innerHTML = strArr;
}