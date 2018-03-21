var input;
var strInput;
var numInput;
var sInp;
var nInp;

function convertString(input) {
    input = document.getElementById("input").value;
    var str = input;
    var newStr = str.toUpperCase();
    document.getElementById("display").innerHTML = newStr;
}

function concatenate(strInput, numInput) {
    strInput = document.getElementById("strInput").value;
    numInput = document.getElementById("numInput").value;
    var newNumInput = numInput.toString();
    document.getElementById("displaySecond").innerHTML = strInput + newNumInput;
}

function concatenate2(sInp, nInp) {
    sInp = document.getElementById("sInp").value;
    nInp = document.getElementById("nInp").value;
    var newSinp = Number(sInp) + Number(nInp);
    document.getElementById("displayThird").innerHTML = newSinp;
}