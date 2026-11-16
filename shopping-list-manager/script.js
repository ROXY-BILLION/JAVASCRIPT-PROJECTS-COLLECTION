const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemButton");
const shoppingList = document.getElementById("shoppingList");

addItemButton.addEventListener("click", function () {

    const itemText = itemInput.value.trim();

    if (itemText === "") {
        alert("Please enter an item");
        return;
    }

    const li = document.createElement("li");

    li.textContent = itemText;

    const removeButton = document.createElement("button");

    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(removeButton);

    shoppingList.appendChild(li);

    itemInput.value = "";

});
