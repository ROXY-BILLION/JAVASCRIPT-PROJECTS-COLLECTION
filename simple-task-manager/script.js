const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskText;

    const completeButton = document.createElement("button");

    completeButton.textContent = "Complete";

    completeButton.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";

});
