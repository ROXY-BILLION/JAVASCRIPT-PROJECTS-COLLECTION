const usernameInput = document.getElementById("usernameInput");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");
const welcomeMessage = document.getElementById("welcomeMessage");

// Display dashboard
function showDashboard(username) {
    loginSection.hidden = true;
    dashboardSection.hidden = false;

    welcomeMessage.textContent = `Welcome, ${username}!`;
}

// Display login form
function showLogin() {
    loginSection.hidden = false;
    dashboardSection.hidden = true;
}

// Login
loginBtn.addEventListener("click", function () {
    const username = usernameInput.value.trim();

    if (username === "") {
        alert("Please enter your username.");
        return;
    }

    sessionStorage.setItem("username", username);

    showDashboard(username);
});

// Restore session when page loads
const savedUsername = sessionStorage.getItem("username");

if (savedUsername) {
    showDashboard(savedUsername);
}

// Logout
logoutBtn.addEventListener("click", function () {
    sessionStorage.removeItem("username");

    usernameInput.value = "";

    showLogin();
});
