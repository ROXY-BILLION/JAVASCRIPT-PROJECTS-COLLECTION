const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const result = document.getElementById("result");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newUser = {
        userEmail: email.value.trim(),
        userPassword: password.value.trim()
    }
    console.log(newUser);
    result.textContent = "User Created successfully"

    loginForm.reset();
})