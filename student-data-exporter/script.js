const studentForm = document.getElementById("studentForm");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");

const output = document.getElementById("output");

studentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Create a JavaScript object
    const student = {
        name: nameInput.value,
        age: Number(ageInput.value),
        course: courseInput.value
    };

    // Convert object into JSON
    const studentJSON = JSON.stringify(student, null, 2);

    // Display JSON
    output.textContent = studentJSON;

    studentForm.reset();
});