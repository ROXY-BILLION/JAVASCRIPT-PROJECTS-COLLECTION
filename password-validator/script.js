const passwordForm = document.getElementById("passwordForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userPassword = password.value;
    const userConfirmPassword = confirmPassword.value;

    if (userPassword !== userConfirmPassword) {
        errorMessage.textContent = "Password doesn't match"
    } else {
        errorMessage.textContent = "";
        successMessage.textContent = "Password changed successfully"
    }

    if (userPassword.length < 8) {
        errorMessage.textContent = "Password must contain at least 8 characters"
    }

    
})