
    let num1, num2, op, correct, dropping = false;

   

    let user = JSON.parse(localStorage.getItem("user")) || { score: 0 };
    let score = user.score || 0;

    let el = {
      q: document.querySelector("#answer-panel h3"),
      a: document.getElementById("answer"),
      r: document.getElementById("result"),
      l: document.getElementById("luggage"),
      s: document.getElementById("scoreValue"),
      g: document.getElementById("ground")
    };


    function updateScore() {
      el.s.textContent = score;
      user.score = score;
      localStorage.setItem("user", JSON.stringify(user));
    }

    function newQuestion() {
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      op = ["+", "-", "×"][Math.floor(Math.random() * 3)];
  
      if (op === "-" && num1 < num2) [num1, num2] = [num2, num1];
  
      correct = op === "+" ? num1 + num2 : op === "-" ? num1 - num2 : num1 * num2;
  
      el.q.textContent = `${num1} ${op} ${num2} = ?`;
      el.a.value = "";
      el.r.textContent = "";
      el.l.textContent = `${num1} ${op} ${num2}`;
      el.l.style.display = "block";
      el.l.className = "drop";
      dropping = true;
  }

  function checkAnswer() {
    if (!dropping) return;

    let answer = parseInt(el.a.value);
    if (answer === correct) {
        el.r.textContent = "Correct!";
        el.r.className = "text-success";
        score++;
        updateScore();
        explode();
    } else {
        el.r.textContent = "Incorrect!";
        el.r.className = "text-danger";
    }
    el.a.value = "";
}


    function explode() {
      dropping = false;
      el.l.className = "explode";
      setTimeout(newQuestion, 700);
    }

function checkGround() {
    if (dropping && el.l.getBoundingClientRect().bottom >= el.g.getBoundingClientRect().top) {
        dropping = false;
        el.r.textContent = "Missed!";
        el.r.className = "text-warning";
        explode();
    }
}
    function gameLoop() {
      checkGround();
      requestAnimationFrame(gameLoop);
    }


    window.onload = () => {
      updateScore();
      newQuestion();
      gameLoop();
    };

