let jstext = "I love JavaScript";
let htmltext = "I love HTML";

function display(promptText) {
    document.write (promptText);
}

function startQuestions() {
    let a = prompt("Enter your favourite language");
    if (a==="html"){
        display(htmltext);
    }else if (a==="js"){
        display(jstext);
    }
}

