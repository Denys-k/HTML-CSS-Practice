function logIn(){
    let newUsers = [];
    let user = {};

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
        user.email = email;
        user.fullname = fullname;
        user.password = pass;
        newUsers.push(user);

    let retrievedUsers = localStorage.getItem("users");
        if (JSON.stringify(newUsers) === retrievedUsers){
            location.href = "content.html";
        }else {
            document.getElementById("wrongInfo").innerHTML = "Input is incorrect!"
        }
    setTimeout(function () {
        document.getElementById("wrongInfo").innerText="";
    }, 4000);
}


//location href --- to redirect pages
