// script.js

const quizData = [
  [
  // --- Level 1: Geography & Nature ---
  { level: 1, question: "What is the capital city of Mallorca?", answers: ["Palma", "Soller", "Valldemossa", "Inca"], correct: 0 },
  { level: 1, question: "Which sea surrounds Mallorca?", answers: ["Mediterranean", "Adriatic", "Ionian", "Aegean"], correct: 0 },
  { level: 1, question: "Which mountain range is a UNESCO World Heritage Site?", answers: ["Serra de Tramuntana", "Alps", "Pyrenees", "Montseny"], correct: 0 },
  { level: 1, question: "What is the highest mountain in Mallorca?", answers: ["Puig Major", "Puig de Massanella", "Puig Tomir", "Na Burguesa"], correct: 0 },
  { level: 1, question: "Where can you find a famous cliff viewpoint in the north of Mallorca?", answers: ["Cap de Formentor", "Sa Calobra", "Alcudia", "Cala d'Or"], correct: 0 },
  { level: 1, question: "Which beach is closest to S'Illot?", answers: ["S'Illot Beach", "Cala Millor", "Sa Coma", "Es Trenc"], correct: 0 },
  { level: 1, question: "Which natural park is near S'Illot?", answers: ["Punta de n'Amer", "S'Albufera", "Mondragó", "Llevant"], correct: 0 },
  { level: 1, question: "Which cove is famous for its beauty and is close to Deià?", answers: ["Sa Foradada", "Cala Ratjada", "Cala d'Or", "Cala Millor"], correct: 0 },
  { level: 1, question: "Which town is surrounded by orange groves and has a vintage train?", answers: ["Sóller", "Pollença", "Palma", "Manacor"], correct: 0 },
  { level: 1, question: "What is a famous lake inside the Cuevas del Drach?", answers: ["Lake Martel", "Lake Soller", "Lake Palma", "Lake Tramuntana"], correct: 0 },

  // --- Level 2: Culture ---
  { level: 2, question: "What is 'pa amb oli' made from?", answers: ["Bread, tomato, olive oil", "Rice and fish", "Potatoes and pork", "Egg and sausage"], correct: 0 },
  { level: 2, question: "What is the name of Mallorca's traditional sweet pastry?", answers: ["Ensaimada", "Croissant", "Churro", "Tarta de Santiago"], correct: 0 },
  { level: 2, question: "What is 'sobrassada'?", answers: ["Cured sausage", "Fish stew", "Goat cheese", "Almond cake"], correct: 0 },
  { level: 2, question: "What language do many locals speak in addition to Spanish?", answers: ["Catalan", "French", "Portuguese", "Italian"], correct: 0 },
  { level: 2, question: "Which monastery did Chopin stay in during winter?", answers: ["Valldemossa", "Lluch", "Deià", "Manacor"], correct: 0 },
  { level: 2, question: "What is the name of the traditional Mallorcan dance?", answers: ["Ball de bot", "Samba", "Flamenco", "Fandango"], correct: 0 },
  { level: 2, question: "What instrument is commonly used in Mallorcan folk music?", answers: ["Xeremies (bagpipes)", "Guitar", "Accordion", "Castanets"], correct: 0 },
  { level: 2, question: "Which local holiday celebrates the defeat of pirates in Palma?", answers: ["Moros y Cristianos", "Semana Santa", "Sant Antoni", "Sant Joan"], correct: 0 },
  { level: 2, question: "What is the famous handcraft from Inca?", answers: ["Leather", "Ceramics", "Glass", "Linen"], correct: 0 },
  { level: 2, question: "Which architectural style is La Seu cathedral known for?", answers: ["Gothic", "Romanesque", "Baroque", "Modernist"], correct: 0 },

  // --- Level 3: History ---
  { level: 3, question: "Who built the castle of Bellver in Palma?", answers: ["King James II", "Romans", "Moors", "Franco"], correct: 0 },
  { level: 3, question: "When did Mallorca become part of Spain?", answers: ["13th century", "15th century", "10th century", "19th century"], correct: 0 },
  { level: 3, question: "What ancient people built Talaiots on Mallorca?", answers: ["Talaiotic", "Roman", "Carthaginian", "Greek"], correct: 0 },
  { level: 3, question: "Which Carthusian monastery is located in Valldemossa?", answers: ["Real Cartuja", "Monestir de Lluc", "Santuari de Sant Salvador", "Santa Maria"], correct: 0 },
  { level: 3, question: "What was Palma called during the Moorish era?", answers: ["Medina Mayurqa", "Palomera", "Al Balansiya", "Maiorca"], correct: 0 },
  { level: 3, question: "What major event in 1229 changed Mallorca's rule?", answers: ["Conquest by James I", "Roman invasion", "Moors arrival", "French Revolution"], correct: 0 },
  { level: 3, question: "Which port town was historically known for piracy?", answers: ["Porto Cristo", "Alcudia", "Port d'Andratx", "Cala Rajada"], correct: 0 },
  { level: 3, question: "Which famous cave system is in Porto Cristo?", answers: ["Cuevas del Drach", "Cova Tancada", "Cueva de Genova", "Sa Campana"], correct: 0 },
  { level: 3, question: "What famous explorer was born in Palma?", answers: ["None - But Ramon Llull was from Mallorca", "Columbus", "Magellan", "Pizarro"], correct: 0 },
  { level: 3, question: "What kind of fortress is 'Sa Punta de n'Amer'?", answers: ["Watchtower", "Castle", "Cathedral", "Prison"], correct: 0 },

  // --- Level 4: Sports & Leisure ---
  { level: 4, question: "Which sport is Rafael Nadal known for?", answers: ["Tennis", "Football", "Cycling", "Golf"], correct: 0 },
  { level: 4, question: "Where is the Rafa Nadal Academy located?", answers: ["Manacor", "Palma", "Soller", "Valldemossa"], correct: 0 },
  { level: 4, question: "Which sport is popular on the beaches of Mallorca?", answers: ["Beach volleyball", "Skiing", "Ice skating", "Rock climbing"], correct: 0 },
  { level: 4, question: "Which cycling event attracts pros to Mallorca?", answers: ["Challenge Mallorca", "Tour de Tramuntana", "Vuelta de Espana", "Giro Balear"], correct: 0 },
  { level: 4, question: "What can you rent easily on the beach?", answers: ["Sun loungers", "Skis", "Snowboards", "Tents"], correct: 0 },
  { level: 4, question: "Which town is famous for water sports and a marina?", answers: ["Port d'Alcudia", "Valldemossa", "Bunyola", "Sineu"], correct: 0 },
  { level: 4, question: "What activity is common in the Serra de Tramuntana?", answers: ["Hiking", "Snowboarding", "Jet skiing", "Surfing"], correct: 0 },
  { level: 4, question: "Which town hosts an Ironman event?", answers: ["Alcudia", "Palma", "Campos", "Llucmajor"], correct: 0 },
  { level: 4, question: "What is a common sailing destination in Mallorca?", answers: ["Cabrera Island", "Port de Soller", "Deià", "Esporles"], correct: 0 },
  { level: 4, question: "Which traditional game is still played in villages?", answers: ["Boule", "Chess", "Cricket", "Dominoes"], correct: 0 },

  // --- Level 5: Travel & Attractions ---
  { level: 5, question: "Where are the Arcos Playa Apartments located?", answers: ["S'Illot", "Palma", "Valldemossa", "Inca"], correct: 0 },
  { level: 5, question: "What is special about Cala Morlanda?", answers: ["Beautiful hidden cove", "Big city", "Zoo", "Castle"], correct: 0 },
  { level: 5, question: "Which attraction has a concert inside a cave?", answers: ["Cuevas del Drach", "Bellver Castle", "Port de Soller", "Puig Major"], correct: 0 },
  { level: 5, question: "What do Arcos Playa Apartments offer?", answers: ["Pool, bar, entertainment", "Helicopter tours", "Golf", "Theatre shows"], correct: 0 },
  { level: 5, question: "Which attraction is best for sunset views?", answers: ["Sa Foradada", "Palma Aquarium", "Alcudia Market", "Manacor Museum"], correct: 0 },
  { level: 5, question: "Which town has Roman ruins?", answers: ["Alcudia", "Palma", "Felanitx", "Andratx"], correct: 0 },
  { level: 5, question: "Where is Bellver Castle located?", answers: ["Palma", "Soller", "Cala Ratjada", "Valldemossa"], correct: 0 },
  { level: 5, question: "Which site is a UNESCO heritage for cultural landscape?", answers: ["Serra de Tramuntana", "Cala Bona", "Playa de Palma", "Portals Nous"], correct: 0 },
  { level: 5, question: "What is a popular souvenir from Mallorca?", answers: ["Pearls", "Copper pots", "Sand sculptures", "Wool hats"], correct: 0 },
  { level: 5, question: "Which famous lookout is near Formentor?", answers: ["Mirador Es Colomer", "Torre de Canyamel", "Castell d'Alaró", "Son Marroig"], correct: 0 },
]
]; // Will load 100 questions here later
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

/* Optional: Background Music
const music = new Audio("audio/background.mp3");
document.getElementById("play-music").addEventListener("click", () => music.play());
document.getElementById("pause-music").addEventListener("click", () => music.pause());
*/

loadQuestions();
