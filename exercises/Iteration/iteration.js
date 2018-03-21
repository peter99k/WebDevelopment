var x = 1;
var y = 10;
var text = "";
var i = 1;
/*
function runIteration() {
    for(var i = 1; i <= 10; i++) {
        document.getElementById("displayTwo").innerHTML += "The current count is: " + i + "<br />";
        
    }
}
*/
function runIteration2() {
    setTimeout(function () {    
        document.getElementById("display").innerHTML += "The current count is: " + i + "<br />";
        i++;                     
        if (i <= 10) {            
            runIteration2();              
        }                        
    }, 750)
}

// function runIteration() {
//     for (i = 1; i <= 10; i++) {
//         if(i % 2 == 0) {
//             document.getElementById("displayTwo").innerHTML += "Count is now: " + i + "<br />";
//         }
//     }
// }

function runIteration() {
    setTimeout(function() {
        if(i % 2 == 0) {
            document.getElementById("displayTwo").innerHTML += "The current count is: " + i + "<br />";
        }
        i++;
        if(i <= 10) {
            runIteration();
        }
    }, 500)
}