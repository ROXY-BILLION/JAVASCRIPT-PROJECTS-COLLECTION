const contactForm = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const result = document.getElementById("result");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newUser = {
        userName: name.value.trim(),
        userEmail: email.value.trim(),
        userSubject: subject.value.trim(),
        userMessage: message.value.trim()
    }
    console.log(newUser);
    result.textContent = "User Created successfully"

    contactForm.reset();
})