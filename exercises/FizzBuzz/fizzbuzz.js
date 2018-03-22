//Both functions work - the only difference is that the function below displays iterations at a set timeout of 0.5sec

// function displayIterations(x, y, z) {
//     var x = document.getElementById("inputOne").value;
//     var y = document.getElementById("inputTwo").value;
//     var z = document.getElementById("inputThree").value;
//     var i = 1;

//     for (i = 1; i <= x; i++) {
//         if((i % 3 == 0) && (i % 5 == 0)) {
//             document.getElementById("display").innerHTML += y + z + "<br />";
//         }
//         else if(i % 3 == 0) {
//             document.getElementById("display").innerHTML += y + "<br />";
//         }
//         else if(i % 5 == 0) {
//             document.getElementById("display").innerHTML += z + "<br />";
//         }
//         else {
//             document.getElementById("display").innerHTML += i + "<br />";
//         }
//     }
    
// }
var i = 1;
function displayIterations(x, y, z) {
    var x = document.getElementById("inputOne").value;
    var y = document.getElementById("inputTwo").value;
    var z = document.getElementById("inputThree").value;
    
    setTimeout(function() {
        if((i % 3 == 0) && (i % 5 == 0)) {
            document.getElementById("display").innerHTML += y + z + "<br />"
        }
        else if(i % 3 == 0) {
            document.getElementById("display").innerHTML += y + "<br />";
        }
        else if(i % 5 == 0) {
            document.getElementById("display").innerHTML += z + "<br />";
        }
        else {
            document.getElementById("display").innerHTML += i + "<br />";
        }
        i++;
        if(i <= x) {
            displayIterations();
        }
    }, 500)
}