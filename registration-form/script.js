const registrationForm = document.getElementById("registrationForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const result = document.getElementById("result");

// Handle form submission
registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Collect user information
    const userData = {
        username: username.value,
        email: email.value,
        password: password.value
    };

    // Display collected information
    result.textContent = `Welcome, ${userData.username}!`;

    console.log(userData);

    // Reset the form
    registrationForm.reset();

});