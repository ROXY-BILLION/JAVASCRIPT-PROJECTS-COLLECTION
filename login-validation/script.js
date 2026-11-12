const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    
    // Collect input values
    const userEmail = email.value.trim();
    const userPassword = password.value;


    // Clear previous messages
    errorMessage.textContent = "";
    successMessage.textContent = "";

    // Check empty fields
    if (
        userEmail === "" ||
        userPassword === "" 
    ) {
        errorMessage.textContent = "All fields are required";
        return;
    }
    successMessage.textContent = "User Logged in successfully"

    loginForm.reset();
})