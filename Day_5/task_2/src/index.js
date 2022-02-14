var newElement = document.createElement("h1");
newElement.textContent = "NEW PARENT";
var parentElement = document.getElementById("app");
parentElement.appendChild(newElement);
console.log(newElement);
