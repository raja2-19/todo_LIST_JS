var button = document.getElementById("enter");
var input = document.getElementById("userinput");
input.classList.add("list");
var ul = document.querySelector("ul");

function checkLengthOfList(){
  return input.value.length;

}
function createListElement(){
  var li = document.createElement("li");
  var node = document.createTextNode(input.value);
  li.appendChild(node);
  ul.appendChild(li);
  input.value = "";
  var button = document.createElement("button");
  button.classList.add("margin");
  button.appendChild(document.createTextNode("Done"));
  li.appendChild(button);
  button.onclick = underLineParent;

  var button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete!"));
  li.appendChild(button);
  button.onclick = removeParent;


}
function underLineParent(event){
  event.target.parentNode.classList.toggle("done");

}
function removeParent(event){
  event.target.parentNode.remove();
}
function clilckAfterList(){
  if (checkLengthOfList()>0){ 
        createListElement();
      }
    }
function keypressAfterList(){
  if (checkLengthOfList()>0 && event.which === 13){ 
        createListElement();
      }
}
button.addEventListener("click",clilckAfterList);
input.addEventListener("keypress",keypressAfterList);