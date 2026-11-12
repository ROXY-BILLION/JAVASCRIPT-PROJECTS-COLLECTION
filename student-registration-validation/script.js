const studentForm = document.getElementById("studentForm");
const fullName = document.getElementById("fullName"); 
const email = document.getElementById("email");
const matricNumber = document.getElementById("matricNumber");
const department = document.getElementById("department");
const level = document.getElementById("level");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("errorMessage");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();


    if (email.value.trim() === "" ||
        fullName.value.trim() === "" ||
        matricNumber.value.trim() === "" ||
        department.value.trim() === "" ||
        level.value.trim() === "" ||
        password.value.trim() === "" ||
        confirmPassword.value.trim() === ""
     ) {
         errorMessage.textContent = "Fill all fields"
    }
    
    if (fullName.value.trim().length < 3) {
        errorMessage.textContent = "Name must contain at least 3 characters"
    }
    if (password.value.trim().length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters"
    }
})