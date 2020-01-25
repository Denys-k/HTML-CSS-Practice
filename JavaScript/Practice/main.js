let allArticles = [];
function saveArticle() {
    let articleObj = {};
    let title = document.getElementById("title").value;
    let imgUrl = document.getElementById("imgsrc").value;
    let article = document.getElementById("text").value;
    if(title==="" || imgUrl ==="" || article===""){
        alert("Input should not be empty")
    }else {
        articleObj.title = title;
        articleObj.image = imgUrl;
        articleObj.article = article;
        articleObj.sentences = article.split(".");
        articleObj.sentencesNum = articleObj.sentences.length;
        allArticles.push(articleObj);
        let info = document.getElementById("info");
        info.innerText = "The article has been saved";

        emptyFields(title, imgUrl, article, info.innerText);
        console.dir(allArticles);
    }

    // this logic can be changed later
}
function emptyFields(title, url, text, info) {
    document.getElementById("title").value="";
    document.getElementById("imgsrc").value="";
    document.getElementById("text").value="";
    setTimeout(function () {
        document.getElementById("info").innerText="";
    }, 4000);
}
function showArticles() {
    for(var i=0;i<allArticles.length; i++){
        let objContainer = document.createElement("articles");
        let obj = allArticles[i];
        let text = document.createTextNode(obj.title);
        objContainer.appendChild(text);
        document.getElementById("articleContainer").appendChild(objContainer);
    }
}
