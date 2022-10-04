/* Lots of Funtions assignment

*/

/* Lots of Funtions assignment
Xify function takes a string input, and returns the length of the string in  'x's.


with every program, what is that input and what is th output?
*/


function xify(param) { // defining the funciton
  let i = 0; // defining the counter to keep track of how an x/s we've added while looping
  let string = ""; // we defing ta string for x's
  while (i < param.length){ // we loop and add x's until we've reached the length of param
    string += "x"  //string = string + "x"
    i++; //increment the counter, "i"
  } // once we've added param.length x's, we break out of the loop
  return string; // we return the string to the function call
}

//here we are calling the function xify() and saving the rsult to a varable 'res
let res = xify("hello");
console.log(`This is the ${res}.`);
console.log(xify("hello")); // we print out res that holds the rsult of calling xify on "hello"

/*
input is a string of characters
output is a string of characters with an explanation point after each character.
*/
function yellingChars(param){
    let i = 0;
    let string = "";
    while (i < param.length){
        string += "";
        string += param[i];
        string += "!";
        i++;
    };
    return string;
}

console.log(yellingChars("goodness"));


function indexChars(param) {
    let i = 0;
    let string = "";
    while (i < param.length){
        string += "";
        //string += param;
        string += String(i);
        string += param[i];
        i++;
    }
    return string;
}
 console.log(indexChars("hello"));

 

 function exclaim(param){
    let i = 0;
    let string = "";
    while(i < param.length){

        if (param[i] === "?"){
            string += "!";
        } else {
            string += param[i];
        };
        i++;
    }
    return string;
 }


 console.log(exclaim("What are you doing? Are you a fool?"));



 function truncate(param){
    let i = 0;
    let string = "";
    while(i < param.length){

        if (i >= 15){  //if (i >= 15)
           string += "...";
           break;
        }  else {
            string += param[i];
        };
        i++;
    }
    return string;
    }
 console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."));


 function ciEmailify(param){
    let i = 0;
    let string = "";
    while(i < param.length){
       
        if (param[i] === " "){
            string += ".";
        } else {
            string += param[i].toLowerCase();
        };

        i++;

    }
    string += "@codeimmersives.com";
    return string;
 }
 console.log(ciEmailify("Nancy Kolde"));

 function reverse(param){
    let i = param.length - 1;
    string = "";
    while(i >= 0){
        string += param[i]
        i--;
    }
    return string;
 }
 console.log(reverse("Colin"));



 function onlyVowels(param){
    let i = 0;
    string = "";
   while(i < param.length){
       
    if (param[i] === "a"){
        string += "a";
    } else if (param[i] === "e"){
        string += "e";
    }else if (param[i] === "i"){
        string += "i";
    }else if (param[i] === "o"){
        string += "o";
    }else if (param[i] === "u"){
        string += "u";
    }
    i++;
}
return string;
}

console.log(onlyVowels("Nancy Kolde"));
