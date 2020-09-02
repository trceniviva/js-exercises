/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

const faveList = document.getElementById("fav-list")
const submitValue = document.getElementById("new-thing")
const submitButton = document.getElementById("new-thing-button")
submitButton.addEventListener("click", function() {addToList(faveList, submitValue)})

function addToList(list, newThing) {
  var newThing = newThing.value;
  if (newThing != "") {
  var node = document.createElement("li");
  node.classList.add("fav-thing")
  var textnode = document.createTextNode(newThing);
  node.appendChild(textnode);
  list.appendChild(node);
  submitValue.value=""}
  else {window.alert("You must type something!")}
}

