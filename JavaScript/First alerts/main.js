"use strict";
// var age =+prompt("Enter your age");
// var gender = prompt("Enter your gender");
//
// if (age>34 && ((gender==="female")||(gender==="woman"))){
//     alert("You are woman older than 34 years");
// }else if(age<34 && ((gender==="female")||(gender==="woman"))){
//     alert("You are woman younger than 34 years");
// }else if(age>34 && ((gender==="male")||(gender==="man"))){
//     alert("You are man older than 34 years");
// }else if(age<34 && ((gender==="male")||(gender==="man"))){
//     alert("You are man younger than 34 years");
// }
var mathQuiz = prompt("Are you ready for math quiz?")
if (mathQuiz==="yes"){
    alert("Good Luck!");
}else if (mathQuiz==="no"){
    alert("Goodbye");
}
var firstQuestion = +prompt("1. What is 34 + 26?");
if (firstQuestion===60) {
    alert("Correct!");
}else if(((firstQuestion>60)||(firstQuestion<60))){
    alert("Wrong!");
}
var secondQuestion = +prompt("2. What is 3 * 24?");
if (secondQuestion===72){
    alert("Correct!");
}else if (((secondQuestion>72)||(secondQuestion<72))){
    alert("Wrong!");
}
var thirdQuestion = +prompt("3. What is square root of 121?");
if (thirdQuestion===11){
    alert("Correct!");
}
else if (((thirdQuestion>11)||(thirdQuestion<11))){
    alert("Wrong!");
}
var fourthQuestion = +prompt("4. What is 225 divided by 15?");
if (fourthQuestion===15){
    alert("Correct!");
}
else if (((fourthQuestion>15)||(fourthQuestion<15))) {
    alert("Wrong!");
}
var fifthQuestion = +prompt("5. What is 19 to the power of 2?");
if (fifthQuestion===361){
    alert("Correct! Great job completing the quiz!")
}
else if (((fifthQuestion>361)||(fifthQuestion<361))){
    alert("Wrong! Thank you for completing the quiz!")
}



// var myValue, yourValue, ourValue;
// myValue= 23;
// yourValue= 45;
// ourValue= 254;
//
// alert(myValue);
// alert(yourValue);
// alert(ourValue);
