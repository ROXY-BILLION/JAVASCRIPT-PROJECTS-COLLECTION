const jsonInput = document.getElementById("jsonInput");

const convertButton = document.getElementById("convertButton");

const profileOutput = document.getElementById("profileOutput");

convertButton.addEventListener("click", function () {

    try {

        // Get JSON text
        const jsonData = jsonInput.value;

        // Convert JSON into JavaScript object
        const user = JSON.parse(jsonData);

        // Display converted information
        profileOutput.innerHTML = "";

        const profile = document.createElement("div");

        profile.classList.add("profile");

        const username = document.createElement("h2");
        username.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = user.email;

        const occupation = document.createElement("p");
        occupation.textContent = user.occupation;

        profile.appendChild(username);
        profile.appendChild(email);
        profile.appendChild(occupation);

        profileOutput.appendChild(profile);

    } catch (error) {

        profileOutput.textContent = "Invalid JSON. Please check your data.";

        profileOutput.classList.add("error");

    }
    jsonInput.value = "";
});