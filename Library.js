
var names=document.getElementById("inputName");
const title=document.getElementById("inputTitle");
const author=document.getElementById("InputAuthor");
const btn=document.getElementById("submit");
const books=document.getElementById("book-list");

btn.addEventListener('click',function(event){
    event.preventDefault();
    if(names.value=='' && title.value=='' && author.value==''){
        alert("No data has been entried");
    }
    else{
        const newRow=document.createElement("tr");

        const newName=document.createElement("th")
        newName.innerHTML=names.value;
        newRow.appendChild(newName);


        const newTitle=document.createElement("th")
        newTitle.innerHTML=title.value;
        newRow.appendChild(newTitle);

        const newAuthor=document.createElement("th")
        newAuthor.innerHTML=author.value;
        newRow.appendChild(newAuthor);

        books.appendChild(newRow);
    }

})