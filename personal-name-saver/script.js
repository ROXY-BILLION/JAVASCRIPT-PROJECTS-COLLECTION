const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

// Save name when button is clicked
saveBtn.addEventListener("click", function () {
    const username = nameInput.value.trim();

    if (username === "") {
        welcomeMessage.textContent = "Please enter your name.";
        return;
    }

    localStorage.setItem("username", username);

    welcomeMessage.textContent = `Welcome, ${username}!`;
});

// Retrieve saved name when page loads
const savedName = localStorage.getItem("username");

if (savedName) {
    welcomeMessage.textContent = `Welcome back, ${savedName}!`;
    nameInput.value = savedName;
}
