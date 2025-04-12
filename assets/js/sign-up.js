function UserData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let grade = document.querySelector('input[name="grade"]:checked')?.value;
    let contactnumber = document.getElementById("contactnumber").value;
    let password = document.getElementById("password").value;
    let x = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("gradeError").textContent = "";
    document.getElementById("contactError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (name == "") {
        document.getElementById("nameError").textContent = "*Name is required.";
        x = false;
    } else if (name.length < 2) {
        document.getElementById("nameError").textContent =
            "*Name must have at least 2 letters.";
        x = false;
    }

    if (password == "") {
        document.getElementById("passwordError").textContent =
            "*Password is required.";
        x = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "*Password must have at least 8 letters.";
        x = false;
    }

    if (email == "") {
        document.getElementById("emailError").textContent =
            "*Email is required.";
        x = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent =
            "*Please enter a valid email address.";
        x = false;
    }

    if (grade == undefined) {
        document.getElementById("gradeError").textContent =
            "*Please select a grade.";
        x = false;
    }

    if (contactnumber == "") {
        document.getElementById("contactError").textContent =
            "*Contact number is required.";
        x = false;
    } else if (!/^(01)[0-9]{9}$/.test(contactnumber)) {
        document.getElementById("contactError").textContent =
            "*Please enter a valid Egyptian phone number.";
        x = false;
    }

    if (!x) {
        return false;
    }

    let user = {
        name: name,
        email: email,
        grade: grade,
        contactnumber: contactnumber,
        password: password,
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userExists = users.some((u) => u.email === email);
    if (userExists) {
        alert("User already exists with this email.");
        return false;
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully!");
    window.location.href = "./sign-in.html";
    return true;
}
