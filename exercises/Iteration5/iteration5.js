//Both functions work - the only difference is that the function below displays iterations at a set timeout of 0.5sec

// function displayIterations(elem, y, z) {
//     var elem = document.getElementById("inputOne").value;
//     var y = document.getElementById("inputTwo").value;
//     var z = document.getElementById("inputThree").value;
//     var i = 1;

//     for (i = 1; i <= elem; i++) {
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

// var elem = document.getElementById("input").value;
// var i = 1;
// console.log(elem);
// function displayIt() {
//         if(elem % 3 == 0) {
//             elem = elem / 3;
//             document.getElementById("display").innerHTML += elem + "<br />"
//             console.log(1);
//         }
//         else if(i % 3 == 1) {
//             elem = elem - 1;
//             elem = elem / 3;
//             document.getElementById("display").innerHTML += elem + "<br />";
//             console.log(2);
//         }
//         else if(i % 3 == 2) {
//             elem = elem + 1;
//             elem = elem / 3;
//             document.getElementById("display").innerHTML += elem + "<br />";
//             console.log(3);
//         }
//         else {
//             document.getElementById("display").innerHTML += elem + "<br />";
//             console.log(4);
//         }
//         console.log(5);
//         i++;
//         if(i <= elem) {
//             displayIt();
//         }
// }

var i = 1;
function displayIt(elem) {
    var elem = document.getElementById("input").value;
    
    // while (elem >= 1) {
        for(i; i < elem; i++) {
            if(elem % 3 == 0) {
                elem = elem / 3;
                document.getElementById("display").innerHTML += elem + "<br />"
            }
            else if(elem % 3 == 1) {
                elem = --elem;
                document.getElementById("display").innerHTML += elem + "<br />";
                elem = elem / 3;
                document.getElementById("display").innerHTML += elem + "<br />";
            }
            else if(elem % 3 == 2) {
                elem = ++elem;
                document.getElementById("display").innerHTML += elem + "<br />";
                elem = elem / 3;
                document.getElementById("display").innerHTML += elem + "<br />";
            }
            else {
                document.getElementById("display").innerHTML += elem + "<br />";
            }
        }
        document.getElementById("displayTwo").innerHTML += "Number of iterations: " + i;
//    }
}