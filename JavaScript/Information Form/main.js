let allUsers = [];
function saveUser() {
    let user ={};
    let fullName = document.getElementById("fullName").value;
    user.name = fullName;
    let age = document.getElementById("age").value;
    user.age = age;
    let phone = document.getElementById("phoneNumber").value;
    user.phoneNumber = phone;
    let email = document.getElementById("email").value;
    user.email = email;
    let city = document.getElementById("city").value;
    user.city = city;
    let postCode = document.getElementById("postCode").value;
    user.post = postCode;

    allUsers.push(user);
    emptyAllFields()
}
 function emptyAllFields() {
     document.getElementById("fullName").value ="";
     document.getElementById("age").value ="";
     document.getElementById("phoneNumber").value ="";
     document.getElementById("email").value ="";
     document.getElementById("city").value ="";
     document.getElementById("postCode").value ="";
 }

//Lesson 18/1/2020

// How to find a letter in a string
//  var str = "Hello World";
// for (var i = 0; i<str.length; i++){
//     var strValue = str.charAt(i); //str[0]
//     if (strValue==="d") {
//         alert("We found a letter \"d\" ");
//     }
// }

//One space equals two spaces?
// var firstSpace = " ";
// var secondSpace =  "  ";
// if (firstSpace===secondSpace){
//     alert("One space equals two spaces");
// }

// str = "Please visit Microsoft and Microsoft!";
// var n = str.replace(/Microsoft/g, "W3Schools");

// Sources:
// https://www.w3schools.com/js/js_string_methods.asp
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// https://www.w3schools.com/js/js_object_methods.asp
// https://www.w3schools.com/js/js_numbers.asp
// Check Slack