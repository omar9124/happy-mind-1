let users = JSON.parse(localStorage.getItem("users")) || [];
let user = JSON.parse(localStorage.getItem("user")) || { score: 0 };
let rankingTableBody = document.querySelector("tbody");
let increaseScoreBtns = document.getElementsByClassName("increase-score-btn");

users[0].score += user.score;
user.score = 0;
localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem("user", JSON.stringify(user));

users.forEach(user4 => {
    if (user4.score === undefined) {
        user4.score = 0;
    }
});
localStorage.setItem("users", JSON.stringify(users));

function updateTable() {
    users.sort((a, b) => b.score - a.score);
    if (rankingTableBody) {
        rankingTableBody.innerHTML = "";
        users.forEach((user, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.score}</td>
            `;
            rankingTableBody.append(row);
        });
    }
}
updateTable();

for (let btn of increaseScoreBtns) {
    btn.addEventListener("click", function () {
        user.score += 1;
        localStorage.setItem("user", JSON.stringify(user));

        users[0].score += 1;
        localStorage.setItem("users", JSON.stringify(users));

        updateTable();
    });
}
