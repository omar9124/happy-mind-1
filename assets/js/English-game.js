let riddles = [
  { question: "🗣️ I speak without a mouth and hear without ears. What am I?", answer: "echo" },
  { question: "🥚 What has to be broken before you can use it?", answer: "egg" },
  { question: "🕯️ I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "candle" },
  { question: "📅 What month of the year has 28 days?", answer: "all" },
  { question: "🧽 What is full of holes but still holds water?", answer: "sponge" },
  { question: "🧊 What can you catch but not throw?", answer: "cold" },
  { question: "🚪 The more you take, the more you leave behind. What are they?", answer: "footsteps" },
  { question: "🧠 What has a head, a tail, is brown, and has no legs?", answer: "coin" },
  { question: "🪞What gets wetter the more it dries?", answer: "towel" },
  { question: "🌃 I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", answer: "map" },
  { question: "🕳️ The more of me there is, the less you see. What am I?", answer: "darkness" },
  { question: "🔥 Feed me and I live, but give me a drink and I die. What am I?", answer: "fire" },
  { question: "🕰️ What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m" },
  { question: "🧱 What building has the most stories?", answer: "library" },
  { question: "🔒 I have keys but no locks. I have space but no room. You can enter but can’t go outside. What am I?", answer: "keyboard" },
  { question: "🚗 Forward I am heavy, but backward I am not. What am I?", answer: "ton" },
  { question: "🌕 The more you take away from me, the bigger I get. What am I?", answer: "hole" },
  { question: "🍌 What has one eye but can’t see?", answer: "needle" },
  { question: "👻 What kind of room has no doors or windows?", answer: "mushroom" },
  { question: "🐓 What has legs but doesn’t walk?", answer: "table" }
];

  let currentIndex = 0;
  let user = JSON.parse(localStorage.getItem("user")) || { score: 0 };
  let score = user.score || 0;

  function showRiddle() {
    document.getElementById('riddle').innerText = riddles[currentIndex].question;
    document.getElementById('result').innerText = '';
    document.getElementById('userGuess').value = '';
  }

  function updateScore() {
    document.getElementById('score').innerText = score;
    user.score = score;
  localStorage.setItem("user", JSON.stringify(user));
  }

  function checkAnswer() {
    let guess = document.getElementById('userGuess').value;
    let correct = riddles[currentIndex].answer;
    let isCorrect = guess === correct;

    if (isCorrect) {
      score++;
      updateScore();
    } else {
      document.getElementById('result').innerHTML = `<span class="text-danger">❌ Oops! Wrong! correct answer : ${correct}}</span>`;
    }

    setTimeout(() => {
      nextRiddle();
    }, 1000);
  }

  function nextRiddle() {
    currentIndex++;
    if (currentIndex >= riddles.length) {
      alert('🎉 You finished all the riddles! Great job!');
      window.location.href = 'index.html';
      return;
    }
    showRiddle();
  }

  window.onload = () => {
    showRiddle();
    updateScore();
  };