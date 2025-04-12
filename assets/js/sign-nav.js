window.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const signBtns = document.querySelector(".sign-btns");

    if (user) {
        signBtns.innerHTML = `

            <button class="btn btn-outline-danger" onclick="logout()">Sign Out</button>
        `;
    } else {
        signBtns.innerHTML = `
            <a href="./sign-in.html" class="btn btn-danger">Sign In</a>
            <a href="./sign-up.html" class="btn btn-outline-danger">Sign Up</a>
        `;
    }
});

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
}
