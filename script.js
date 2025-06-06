// script.js

 const quizData = [
  // --- Level 1: Geography & Nature ---
  {
    question: "What is the capital city of Mallorca?",
    answers: [
      { text: "Palma", correct: true },
      { text: "Soller", correct: false },
      { text: "Valldemossa", correct: false },
      { text: "Inca", correct: false }
    ]
  },
  {
    question: "Which sea surrounds Mallorca?",
    answers: [
      { text: "Mediterranean", correct: true },
      { text: "Adriatic", correct: false },
      { text: "Ionian", correct: false },
      { text: "Aegean", correct: false }
    ]
  },
  {
    question: "Which mountain range is a UNESCO World Heritage Site?",
    answers: [
      { text: "Serra de Tramuntana", correct: true },
      { text: "Alps", correct: false },
      { text: "Pyrenees", correct: false },
      { text: "Montseny", correct: false }
    ]
  },
  {
    question: "What is the highest mountain in Mallorca?",
    answers: [
      { text: "Puig Major", correct: true },
      { text: "Puig de Massanella", correct: false },
      { text: "Puig Tomir", correct: false },
      { text: "Na Burguesa", correct: false }
    ]
  },
  {
    question: "Where can you find a famous cliff viewpoint in the north of Mallorca?",
    answers: [
      { text: "Cap de Formentor", correct: true },
      { text: "Sa Calobra", correct: false },
      { text: "Alcudia", correct: false },
      { text: "Cala d'Or", correct: false }
    ]
  },
  {
    question: "What is the approximate land area of Mallorca?",
    answers: [
      { text: "1,420 square miles", correct: true },
      { text: "1,000 square miles", correct: false },
      { text: "2,500 square miles", correct: false },
      { text: "3,000 square miles", correct: false }
    ]
  },
  {
    question: "Which town is known for its pearl industry?",
    answers: [
      { text: "Manacor", correct: true },
      { text: "Inca", correct: false },
      { text: "Sineu", correct: false },
      { text: "Pollensa", correct: false }
    ]
  },
  {
    question: "What is the name of the island located south of Mallorca, known for its national park?",
    answers: [
      { text: "Cabrera", correct: true },
      { text: "Menorca", correct: false },
      { text: "Ibiza", correct: false },
      { text: "Formentera", correct: false }
    ]
  },
  {
    question: "Which town is famous for its orange groves and scenic train ride?",
    answers: [
      { text: "Sóller", correct: true },
      { text: "Valldemossa", correct: false },
      { text: "Deià", correct: false },
      { text: "Andratx", correct: false }
    ]
  },
  {
    question: "What is the name of the fertile central plain of Mallorca?",
    answers: [
      { text: "Es Pla", correct: true },
      { text: "Serra de Llevant", correct: false },
      { text: "Serra de Tramuntana", correct: false },
      { text: "Es Raiguer", correct: false }
    ]
  },
  {
    question: "Which bay is located on the northeast coast of Mallorca?",
    answers: [
      { text: "Badia d'Alcúdia", correct: true },
      { text: "Badia de Palma", correct: false },
      { text: "Badia de Pollença", correct: false },
      { text: "Badia de Sóller", correct: false }
    ]
  },
  {
    question: "What is the second highest peak in Mallorca?",
    answers: [
      { text: "Puig de Massanella", correct: true },
      { text: "Puig Tomir", correct: false },
      { text: "Puig de l'Ofre", correct: false },
      { text: "Puig del Teix", correct: false }
    ]
  },
  {
    question: "Which natural formation is located near Porto Cristo and is famous for its underground lake?",
    answers: [
      { text: "Coves del Drach", correct: true },
      { text: "Coves dels Hams", correct: false },
      { text: "Cova de sa Campana", correct: false },
      { text: "Cova de Genova", correct: false }
    ]
  },
  {
    question: "Which area in Mallorca is known for its wetlands and birdwatching opportunities?",
    answers: [
      { text: "S'Albufera", correct: true },
      { text: "Es Trenc", correct: false },
      { text: "Cala Mondragó", correct: false },
      { text: "Sa Dragonera", correct: false }
    ]
  },
  {
    question: "What is the name of the small island off the southwest coast of Mallorca, designated as a nature reserve?",
    answers: [
      { text: "Sa Dragonera", correct: true },
      { text: "Illa de Cabrera", correct: false },
      { text: "Illa de Formentor", correct: false },
      { text: "Illa de l'Aire", correct: false }
    ]
  },
  {
    question: "Which region in Mallorca is characterized by rolling hills and is located in the eastern part of the island?",
    answers: [
      { text: "Serra de Llevant", correct: true },
      { text: "Es Pla", correct: false },
      { text: "Raiguer", correct: false },
      { text: "Migjorn", correct: false }
    ]
  },
  {
    question: "What is the name of the cave system known for its unique formations and located near Porto Cristo?",
    answers: [
      { text: "Coves dels Hams", correct: true },
      { text: "Coves del Drach", correct: false },
      { text: "Cova de sa Campana", correct: false },
      { text: "Cova de Genova", correct: false }
    ]
  },
  {
    question: "Which mountain in Mallorca is known for its monastery and panoramic views?",
    answers: [
      { text: "Puig de Randa", correct: true },
      { text: "Puig Major", correct: false },
      { text: "Puig de Massanella", correct: false },
      { text: "Puig Tomir", correct: false }
    ]
  },
  {
    question: "What is the name of the beach located near the town of Campos, known for its white sand and clear waters?",
    answers: [
      { text: "Es Trenc", correct: true },
      { text: "Cala Millor", correct: false },
      { text: "Cala d'Or", correct: false },
      { text: "Cala Agulla", correct: false }
    ]
  },
  {
    question: "Which town is located at the foot of the Serra de Tramuntana and is known for its traditional architecture?",
    answers: [
      { text: "Bunyola", correct: true },
      { text: "Inca", correct: false },
      { text: "Felanitx", correct: false },
      { text: "Porreres", correct: false }
    ]
  },

  // --- Level 2: History & Culture ---
  {
    question: "Which famous composer spent the winter of 1838–39 in Valldemossa?",
    answers: [
      { text: "Frédéric Chopin", correct: true },
      { text: "Ludwig van Beethoven", correct: false },
      { text: "Johann Sebastian Bach", correct: false },
      { text: "Wolfgang Amadeus Mozart", correct: false }
    ]
  },
  {
    question: "What is the name of the Gothic-style cathedral in Palma?",
    answers: [
      { text: "La Seu", correct: true },
      { text: "La Sagrada Familia", correct: false },
      { text: "La Almudena", correct: false },
      { text: "La Catedral de Santa María", correct: false }
    ]
  },
  {
    question: "Which ancient civilization founded Palma as a Roman camp?",
    answers: [
      { text: "Romans", correct: true },
      { text: "Phoenicians", correct: false },
      { text: "Greeks", correct: false },
      { text: "Carthaginians", correct: false }
    ]
  },
  {
    question: "What is the name of the circular castle located near Palma?",
    answers: [
      { text: "Bellver Castle", correct: true },
      { text: "Alcázar", correct: false },
      { text: "Castillo de San Carlos", correct: false },
      { text: "Castillo de Capdepera", correct: false }
    ]
  },
  {
    question: "Which religious figure is considered the patron saint of Mallorca?",
    answers: [
      { text: "Santa Catalina Thomàs", correct: true },
      { text: "Saint James", correct: false },
      { text: "Saint George", correct: false },
      { text: "Saint Teresa", correct: false }
    ]
  },
  {
    question: "What is the name of the traditional Mallorcan dance performed during festivals?",
    answers: [
      { text: "Ball de bot", correct: true },
      { text: "Flamenco", correct: false },
      { text: "Sardana", correct: false },
      { text: "Jota", correct: false }
    ]
  },
]; 
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
 resetState();
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

/* Optional: Background Music
const music = new Audio("audio/background.mp3");
document.getElementById("play-music").addEventListener("click", () => music.play());
document.getElementById("pause-music").addEventListener("click", () => music.pause());
*/

loadQuestions();
