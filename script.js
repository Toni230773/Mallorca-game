const questions = [
  {
    question: "What is the capital city of Mallorca?",
    answers: ["Palma", "Inca", "Manacor", "Sóller"],
    correct: "Palma"
  },
  {
    question: "Which sea surrounds Mallorca?",
    answers: ["Mediterranean", "Atlantic", "Adriatic", "Aegean"],
    correct: "Mediterranean"
  },
  {
    question: "What is the highest mountain in Mallorca?",
    answers: ["Puig Major", "Puig de Massanella", "Puig Tomir", "Na Burguesa"],
    correct: "Puig Major"
  },
  {
    question: "Which mountain range in Mallorca is a UNESCO World Heritage Site?",
    answers: ["Serra de Tramuntana", "Serra de Llevant", "Montseny", "Pyrenees"],
    correct: "Serra de Tramuntana"
  },
  {
    question: "What is the name of the famous cathedral in Palma?",
    answers: ["La Seu", "La Sagrada Familia", "La Catedral", "Santa Maria"],
    correct: "La Seu"
  },
  {
    question: "Which town is known for its pearl industry?",
    answers: ["Manacor", "Inca", "Sóller", "Alcúdia"],
    correct: "Manacor"
  },
  {
    question: "Which beach is located near the town of Alcúdia?",
    answers: ["Playa de Muro", "Es Trenc", "Cala Millor", "Cala d'Or"],
    correct: "Playa de Muro"
  },
  {
    question: "What is the name of the famous cave system in Mallorca?",
    answers: ["Cuevas del Drach", "Cuevas de Artà", "Cuevas de Campanet", "Cuevas de Génova"],
    correct: "Cuevas del Drach"
  },
  {
    question: "Which village is known for its association with Chopin?",
    answers: ["Valldemossa", "Deià", "Sóller", "Pollença"],
    correct: "Valldemossa"
  },
  {
    question: "What is the name of the circular castle in Palma?",
    answers: ["Castell de Bellver", "Castell d'Alaró", "Castell de Capdepera", "Castell de Santueri"],
    correct: "Castell de Bellver"
  },
  {
    question: "Which town hosts a famous weekly market known for leather goods?",
    answers: ["Inca", "Sineu", "Felanitx", "Llucmajor"],
    correct: "Inca"
  },
  {
    question: "What is the name of the liqueur made from herbs in Mallorca?",
    answers: ["Hierbas", "Orujo", "Pacharán", "Anís"],
    correct: "Hierbas"
  },
  {
    question: "Which island near Mallorca is a National Park?",
    answers: ["Cabrera", "Dragonera", "Menorca", "Ibiza"],
    correct: "Cabrera"
  },
  {
    question: "Which town is famous for its annual wine festival, Festa des Vermar?",
    answers: ["Binissalem", "Petra", "Santa Maria", "Porreres"],
    correct: "Binissalem"
  },
  {
    question: "Which town is known for its historic train ride to Palma?",
    answers: ["Sóller", "Inca", "Manacor", "Pollença"],
    correct: "Sóller"
  },
  {
    question: "What is the name of the traditional Mallorcan dish made with vegetables and bread?",
    answers: ["Tumbet", "Pa amb oli", "Frito Mallorquín", "Ensaimada"],
    correct: "Tumbet"
  },
  {
    question: "Which town is known for its Roman ruins and amphitheater?",
    answers: ["Alcúdia", "Pollença", "Artà", "Lluc"],
    correct: "Alcúdia"
  },
  {
    question: "What is the name of the famous viewpoint at the northern tip of Mallorca?",
    answers: ["Cap de Formentor", "Cap Blanc", "Cap des Pinar", "Cap de Ses Salines"],
    correct: "Cap de Formentor"
  },
  {
    question: "Which town is known for its glassblowing tradition?",
    answers: ["Campanet", "Felanitx", "Artà", "Algaida"],
    correct: "Algaida"
  },
  {
    question: "Which village is associated with the English poet Robert Graves?",
    answers: ["Deià", "Valldemossa", "Sóller", "Pollença"],
    correct: "Deià"
  },
  {
    question: "What is the name of the traditional Mallorcan pastry?",
    answers: ["Ensaimada", "Coca de patata", "Tarta de Santiago", "Turrón"],
    correct: "Ensaimada"
  },
  {
    question: "Which town is known for its shoe industry?",
    answers: ["Inca", "Manacor", "Llucmajor", "Felanitx"],
    correct: "Inca"
  },
  {
    question: "Which beach is famous for its long stretch of white sand?",
    answers: ["Es Trenc", "Cala Agulla", "Cala Mesquida", "Cala Millor"],
    correct: "Es Trenc"
  },
  {
    question: "Which festival involves building human towers?",
    answers: ["Castells", "Festa de Sant Joan", "Festa de Sant Antoni", "Festa de la Mare de Déu"],
    correct: "Castells"
  },
  {
    question: "What is the name of the monastery located in the Tramuntana mountains?",
    answers: ["Lluc Monastery", "Randa Monastery", "Miramar Monastery", "Santa Maria Monastery"],
    correct: "Lluc Monastery"
  },
  {
    question: "Which town is known for its annual almond blossom festival?",
    answers: ["Son Servera", "Santa Margalida", "Santanyí", "Campos"],
    correct: "Son Servera"
  },
  {
    question: "What is the name of the traditional Mallorcan dance?",
    answers: ["Ball de bot", "Sardana", "Jota", "Fandango"],
    correct: "Ball de bot"
  },
  {
    question: "Which town is famous for its annual jazz festival?",
    answers: ["Pollença", "Sóller", "Manacor", "Inca"],
    correct: "Pollença"
  },
  {
    question: "Which town is known for its prehistoric talayots?",
    answers: ["Capocorb Vell", "Alcúdia", "Artà", "Llucmajor"],
    correct: "Capocorb Vell"
  },
]

function shuffleArray(array) {
  const newArray = [...array]; // Create a copy to avoid mutating the original array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}


function shuffleAnswers(questions) {
  return questions.map(({ question, answers, correct }) => {
    const shuffledAnswers = [...answers];
    shuffleArray(shuffledAnswers);
    const correctIndex = shuffledAnswers.indexOf(correct);
    return {
      question,
      answers: shuffledAnswers,
      correctIndex
    };
  });
}

let shuffledQuizData = shuffleAnswers(questions);
let gameData = shuffleArray(shuffledQuizData); // Shuffles the array in place


let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const playAgainBtn = document.getElementById("playAgainBtn");


function showQuestion() {
  resetState();
  let currentQuestion = gameData[currentIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.addEventListener("click", () => selectAnswer(index));
    answersEl.appendChild(btn);
  });
}


function resetState() {
  answersEl.innerHTML = "";
  scoreEl.innerText = "";
}

function selectAnswer(selectedIndex) {
  const correctIndex = gameData[currentIndex].correctIndex;
  if (selectedIndex === correctIndex) {
    score++;
  }
  currentIndex++;
  if (currentIndex < gameData.length) {
    showQuestion();
  } else {
    showScore();
  }
}

playAgainBtn.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  playAgainBtn.style.display = "none"; // Hide the button
  const reshuffledQuestions = shuffleAnswers(questions);
  gameData = shuffleArray(reshuffledQuestions);
  showQuestion();
});



function showScore() {
  resetState();
  questionEl.innerText = `Quiz Complete!`;
  scoreEl.innerText = `Your score: ${score} / ${questions.length}`;
  playAgainBtn.style.display = "inline-block"; // Show the button
}

showQuestion();

let firstCorrectCount = 0;
let totalRuns = 1000;

for (let i = 0; i < totalRuns; i++) {
  const shuffled = shuffleAnswers(questions);
  shuffled.forEach(q => {
    if (q.correctIndex === 0) firstCorrectCount++;
  });
}

console.log(`Correct answer was first ${firstCorrectCount} out of ${totalRuns * questions.length} times.`);
