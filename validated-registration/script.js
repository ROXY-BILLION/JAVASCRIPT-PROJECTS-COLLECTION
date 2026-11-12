const registrationForm = document.getElementById("registrationForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Collect input values
    const user = username.value.trim();
    const userEmail = email.value.trim();
    const userPassword = password.value;
    const confirmUserPassword = confirmPassword.value;

    // Clear previous messages
    errorMessage.textContent = "";
    successMessage.textContent = "";

    // Check empty fields
    if (
        user === "" ||
        userEmail === "" ||
        userPassword === "" ||
        confirmUserPassword === ""
    ) {
        errorMessage.textContent = "All fields are required";
        return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(userEmail)) {
        errorMessage.textContent = "Enter a valid email address";
        return;
    }

    // Check password length
    if (userPassword.length < 8) {
        errorMessage.textContent = "Password must contain at least 8 characters";
        return;
    }

    // Check password confirmation
    if (userPassword !== confirmUserPassword) {
        errorMessage.textContent = "Passwords do not match";
        return;
    }

    // Registration successful
    const userData = {
        username: user,
        email: userEmail
    };

    console.log(userData);

    successMessage.textContent = "Registration successful!";

    registrationForm.reset();

});