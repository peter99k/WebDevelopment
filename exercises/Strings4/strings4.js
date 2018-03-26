
function displayIt(str) {
    str = document.getElementById("input").value;
    if(str.length >= 3) {
        count = 0;
        for(var i = 0; i < str.length-2; i++) {
            if((str.charAt(i) === str.charAt(i + 1)) && (str.charAt(i) === str.charAt(i + 2))) {
                count++;
                document.getElementById("display").innerHTML = "The number of triples is: " + count;
            }
        }
        if(count === 0) {
            document.getElementById("display").innerHTML = "There are no triples in this string";
        }
    }
    else {
        document.getElementById("display").innerHTML = "This string is too short";
    }
}

// function displayIt(str) {
//     var str = document.getElementById("input").value;
//     if(str.length > 1) {
//         var triples = str.match(/[a-z]/i);
//         var count = 0;
//         for(var i = 0; i < str.length; i++) {
//             if((str.charAt(i) + str.charAt(i + 1) + str.charAt(i + 2)) === triples) {
//                 count++;
//                 document.getElementById("display").innerHTML = "The number of triples is: " + count;
//             }
//             else {
//                 document.getElementById("display").innerHTML = "There are no triples in this string";
//             }
//         }
//     }
//     else {
//         document.getElementById("display").innerHTML = "This string is too short";
//     }
// }

// function displayIt(str) {
//     var str = document.getElementById("input").value; 
//     var unique = '';
//     for (var i = 0; i < str.length; i++) {
//       if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
//         unique += str[i];
//       }
//     }
//     return unique;
    
//   }
  
// console.log(displayIt());
// //   console.log(displayIt('anaconda'));

// function displayIt(str){
//     var str = document.getElementById("input").value;
//     var result = [];
//     var strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    
//     if (strArr != null) {
//       strArr.forEach((elem) => {
//         result.push(elem[0]);
//       });
//     }
//     return result;
//   }
//   console.log(...howManyRepeated(str));

// function displayIt(str) {
//     var str = document.getElementById("input").value;
//     if(str.length > 1) {
//         var newStr = str.split("");
//         console.log(newStr);
//         console.log(newStr[0]);
//         var count = 0;
//         for(var i = 0; i < newStr.length; i++) {
//             console.log(newStr[i]);
//             console.log(newStr[i+1]);
//             console.log(newStr[i+2]);
//             if((newStr[i]) === (newStr[i + 1]) === (newStr[i + 2])) {
//                 count++;
//                 document.getElementById("display").innerHTML = "The number of triples is: " + count;
//                 console.log(count);
//             }
//             else {
//                 document.getElementById("display").innerHTML = "There are no triples in this string";
//             }
//         }
//     }
//     else {
//         document.getElementById("display").innerHTML = "This string is too short";
//     }
// }

// function displayIt(str) {
//     var str = document.getElementById("input").value;
//     if(str.length > 1) {
//         var count = 0;
//         for(var i = 0; i < str.length; i++) {
//             var theChar = str.charAt(i);
//             if(/[theChar, theChar+1]/.test(theChar+2)) {
//                 count++;
//                 document.getElementById("display").innerHTML = "The number of triples is: " + count;
//                 console.log(count);
//             }
//             else {
//                 document.getElementById("display").innerHTML = "There are no triples in this string";
//             }
//         }
//     }
//     else {
//         document.getElementById("display").innerHTML = "This string is too short";
//     }
// }

// function displayIt(str) {
//     var str = document.getElementById("input").value;
//     if(str.length > 1) {
//         var count = 0;
//         for(var i = 0; i < str.length; i++) {
//             var hasTriple = /(.)\1\1/.test(str);
//             if(hasTriple) {
//                 count++;
//                 document.getElementById("display").innerHTML = "The number of triples is: " + count;
//                 console.log(count);
//             }
//             else {
//                 document.getElementById("display").innerHTML = "There are no triples in this string";
//             }
//         }
//     }
//     else {
//         document.getElementById("display").innerHTML = "This string is too short";
//     }
// }