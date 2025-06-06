const questions = [
  {
    question: "What is the capital city of Mallorca?",
    answers: ["Palma", "Inca", "Manacor", "Sóller"],
    correct: "Palma"
  },
  {
    question: "Which mountain range runs across Mallorca?",
    answers: ["Pyrenees", "Serra de Tramuntana", "Alps", "Sierra Nevada"],
    correct: "Serra de Tramuntana"
  },
  {
    question: "Mallorca is part of which island group?",
    answers: ["Canary Islands", "Cyclades", "Balearic Islands", "Seychelles"],
    correct: "Balearic Islands"
  },
  {
    question: "Which beach is known for its clear turquoise water in Mallorca?",
    answers: ["Es Trenc", "Bondi", "Copacabana", "Navagio"],
    correct: "Es Trenc"
  },
  {
    question: "What language is officially spoken in Mallorca?",
    answers: ["Spanish and Catalan", "French", "German", "Italian"],
    correct: "Spanish and Catalan"
  },
  // Add more questions in the same format
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.addEventListener("click", () => selectAnswer(answer));
    answersEl.appendChild(btn);
  });
}

function resetState() {
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.innerText = "";
}

function selectAnswer(selected) {
  const correct = questions[currentIndex].correct;
  if (selected === correct) {
    score++;
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionEl.innerText = `Quiz Complete!`;
  scoreEl.innerText = `Your score: ${score} / ${questions.length}`;
}

showQuestion();

