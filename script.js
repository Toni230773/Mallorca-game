// script.js

const quizData = []; // Will load 100 questions here later
let currentLevel = 1;
let currentQuestionIndex = 0;
let score = 0;
let questionsPerLevel = 20;

// Load state from localStorage if available
const savedState = JSON.parse(localStorage.getItem('mallorcaQuizState'));
if (savedState) {
  currentLevel = savedState.level;
  currentQuestionIndex = savedState.questionIndex;
  score = savedState.score;
}

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressBar = document.querySelector(".progress-bar");
const feedback = document.querySelector(".feedback");

function showQuestion() {
  resetState();
  const currentQuestion = quizData[(currentLevel - 1) * questionsPerLevel + currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    if (answer.correct) button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  feedback.innerText = "";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";
  if (correct) {
    selectedBtn.classList.add("correct");
    score++;
    feedback.innerText = "Correct!";
  } else {
    selectedBtn.classList.add("incorrect");
    feedback.innerText = "Oops! That's not it.";
  }

  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") button.classList.add("correct");
  });

  nextButton.style.display = "block";
  updateProgressBar();
  saveState();
}

function updateProgressBar() {
  const progress = ((currentLevel - 1) * questionsPerLevel + currentQuestionIndex + 1) / quizData.length * 100;
  progressBar.style.width = `${progress}%`;
}

function saveState() {
  const state = {
    level: currentLevel,
    questionIndex: currentQuestionIndex,
    score: score
  };
  localStorage.setItem('mallorcaQuizState', JSON.stringify(state));
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionsPerLevel) {
    showQuestion();
  } else {
    if (currentLevel < 5) {
      currentLevel++;
      currentQuestionIndex = 0;
      alert(`Great job! Welcome to level ${currentLevel}`);
      showQuestion();
    } else {
      questionElement.innerText = "🎉 Congratulations! You've completed the quiz!";
      feedback.innerText = `Final Score: ${score}/100`;
      nextButton.style.display = "none";
      answerButtons.innerHTML = "";
    }
  }
});

// Sample loader function (to replace with actual 100 questions later)
function loadQuestions() {
  // Placeholder - needs full set of 100 questions added
  for (let i = 1; i <= 100; i++) {
    quizData.push({
      question: `Sample Question ${i}?`,
      answers: [
        { text: "Answer A", correct: false },
        { text: "Answer B", correct: true },
        { text: "Answer C", correct: false },
        { text: "Answer D", correct: false }
      ]
    });
  }
  showQuestion();
}

// Optional: Background Music
const music = new Audio("audio/background.mp3");
document.getElementById("play-music").addEventListener("click", () => music.play());
document.getElementById("pause-music").addEventListener("click", () => music.pause());

loadQuestions();
