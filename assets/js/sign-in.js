function usersignin() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Clear old errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    // Validate name
    if (name === "") {
        nameError.textContent = "*Name is required.";
        valid = false;
    } else if (name.length < 2) {
        nameError.textContent = "*Name must have at least 2 letters.";
        valid = false;
    }

    // Validate email
    if (email === "") {
        emailError.textContent = "*Email is required.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "*Please enter a valid email address.";
        valid = false;
    }

    // Validate password
    if (password === "") {
        passwordError.textContent = "*Password is required.";
        valid = false;
    } else if (password.length < 8) {
        passwordError.textContent =
            "*Password must have at least 8 characters.";
        valid = false;
    }

    if (!valid) return false;

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check for matching user
    let user = users.find(
        (u) => u.email === email && u.name === name && u.password === password
    );

    if (user) {
        // Save logged-in user to localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Account not found. Please sign up first.");
    }
}
