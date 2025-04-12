let currentQuestionIndex = 0;
let score = 0;
let user = JSON.parse(localStorage.getItem("user")) || { score: 0 };
score = user.score || 0;

let questions = [
  {
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "What is the chemical symbol for water?",
    choices: ["O2", "H2O", "CO2", "HO"],
    answer: "H2O"
  },
  {
    question: "How many legs does an insect have?",
    choices: ["4", "6", "8", "10"],
    answer: "6"
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "What part of the plant conducts photosynthesis?",
    choices: ["Roots", "Stem", "Flowers", "Leaves"],
    answer: "Leaves"
  },
  {
    question: "Which sense organ do we use to hear?",
    choices: ["Eyes", "Ears", "Nose", "Hands"],
    answer: "Ears"
  },
  {
    question: "What do bees collect from flowers?",
    choices: ["Dew", "Pollen", "Water", "Honey"],
    answer: "Pollen"
  },
  {
    question: "Which planet is the closest to the Sun?",
    choices: ["Earth", "Mars", "Mercury", "Venus"],
    answer: "Mercury"
  },
  {
    question: "Which organ pumps blood through the body?",
    choices: ["Lungs", "Liver", "Heart", "Kidney"],
    answer: "Heart"
  },
  {
    question: "Which state of matter is air?",
    choices: ["Solid", "Liquid", "Gas", "Plasma"],
    answer: "Gas"
  }
];


questions.forEach(q => {
  q.choices = [...q.choices].sort(() => Math.random() - 0.5);
});

function showQuestion() {
  let q = questions[currentQuestionIndex];
  let questionEl = document.getElementById("question");
  let choicesEl = document.getElementById("choices");
  let resultEl = document.getElementById("result");
  questionEl.textContent = `Q${currentQuestionIndex + 1}: ${q.question}`;
  resultEl.textContent = "";
  choicesEl.innerHTML = "";

  q.choices.forEach(choice => {
    let btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "btn btn-outline-danger mb-2 text-start";
    btn.onclick = () => checkAnswer(choice);
    choicesEl.append(btn);
  });
}

function checkAnswer(choice) {
  let correct = questions[currentQuestionIndex].answer;
  let resultEl = document.getElementById("result");
  let scoreDisplay = document.getElementById("scoreDisplay");
  let scoreBar = document.getElementById("scoreBar");

  if (choice === correct) {
    resultEl.textContent = "✅ Correct!";
    score++;
  } else {
    resultEl.textContent = `❌ Correct: ${correct}`;
  }

  user.score = score;
  localStorage.setItem("user", JSON.stringify(user));
  scoreDisplay.textContent = `🌟 Score: ${score}`;

  let progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  scoreBar.style.width = `${progress}%`;

  setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert(`Game Over! 🎉 Final Score: ${score}/${questions.length}`);
  }
}
document.addEventListener("DOMContentLoaded", showQuestion);

