var button = document.getElementById("enter");
var input = document.getElementById("userinput");
input.classList.add("list");
var ul = document.querySelector("ul");
button.addEventListener("click",function(){
    if (input.value.length >0){ 
        var li = document.createElement("li");
        var node = document.createTextNode(input.value);
        li.appendChild(node);
        ul.appendChild(li);
      }
      input.value = "";
  
   });