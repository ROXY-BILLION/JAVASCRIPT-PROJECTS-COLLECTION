let addButton = document.getElementById("addButton");

let container = document.getElementById("container");

addButton.addEventListener("click", function() {

    let paragraph = document.createElement("p");

    paragraph.textContent = "A new message has been added!";

    container.appendChild(paragraph);

});