// -----------------variables----------------------
var startBtn = document.getElementById("start-btn");
var mainScreen = document.getElementById("main-screen");
// intro to the quiz
var textEl = document.getElementById("intro-text");
var text =
  "Welcome to the Quiz Realm! Test your coding knowledge as you tackle a series of questions. Each question offers multiple choices: A, B, C, or D. Choose wisely, as wrong answers chip away at your timer. Can you beat the clock and stay in the game? Step up and prove your knowledge skills in the Quiz Realm!";
var titleText = document.getElementById("title");
var index = 0;
// checks if words are still being typed
var stilltyping = true;
// this function types out the text at a certain rate
var speed = 0;
// questions that will be asked in the game
var askingQuestions = [
  {
    question:
      "Which of the following programming languages is used to create the structure and content of a webpage?",
    A: "CSS",
    B: "HTML",
    C: "JAVASCRIPT",
    D: "C++",
    answer: "B",
  },
  {
    question:
      "Which language is primarily responsible for controlling the behavior and interactivity of a webpage?",
    A: "HTML",
    B: "JAVASCRIPT",
    C: "CSS",
    D: "PHP",
    answer: "B",
  },
  {
    question: "What is the primary purpose of CSS in web development?",
    A: "MAKE WEBSITES RESPONSIVE",
    B: "CREATE SERVERS",
    C: "MANIPULATE DATA",
    D: "STYLE WEBSITES",
    answer: "D",
  },
  {
    question:
      "Which of the following HTML tags is used to link an external JavaScript file to an HTML document?",
    A: "<link>",
    B: "<script>",
    C: "<javascript>",
    D: "<style>",
    answer: "B",
  },
  {
    question:
      "Which CSS property is used to change the background color of an element?",
    A: "color",
    B: "bgcolor",
    C: "bg-color",
    D: "background-color",
    answer: "D",
  },
  {
    question:
      "In JavaScript, which function is used to change the content of an HTML element?",
    A: "appendElement()",
    B: "innerHTML()",
    C: "$()",
    D: "changeAttribute()",
    answer: "B",
  },
  {
    question: "Which HTML tag is used to create a numbered list?",
    A: "<li>",
    B: "<ul>",
    C: "<ol>",
    D: "<p>",
    answer: "C",
  },
];

var questionElement = document.getElementById("q");
var optionsElement = document.getElementById("options");
var aOption = document.getElementById("a-option");
var bOption = document.getElementById("b-option");
var cOption = document.getElementById("c-option");
var dOption = document.getElementById("d-option");
var questionIndex = 0;
var optionIndex = 0;
// -----------------functions----------------------
//setting index set to -1 so no questions are displayed
function typingText(text, element, index, callback, speed) {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(function () {
      typingText(text, element, index, callback, speed);
    }, speed);
  } else {
    stilltyping = false;
    if (typeof callback === "function") {
      callback();
    }
  }
}

// start game fuctions
startBtn.addEventListener("click", function () {
  if (!stilltyping) {
    mainScreen.style.display = "block";
    startBtn.style.display = "none";
    textEl.style.display = "none";
  }
  askQuestion();
});

function askQuestion() {
  // Reset question element
  questionElement.textContent = "";

  // Reset options and show the options container
  aOption.textContent = "";
  bOption.textContent = "";
  cOption.textContent = "";
  dOption.textContent = "";
  optionsElement.style.display = "block";

  // Pull up the most current question
  var currentQuestion = askingQuestions[questionIndex];
  typingText(
    currentQuestion.question,
    questionElement,
    0,
    function () {
      // After typing the question, display the options
      showingOptions();
    },
    50
  );
}

function showingOptions() {
  var currentQuestion = askingQuestions[questionIndex];

  // Display the options for the current question without typing effect
  aOption.textContent = "A. " + currentQuestion.A;
  bOption.textContent = "B. " + currentQuestion.B;
  cOption.textContent = "C. " + currentQuestion.C;
  dOption.textContent = "D. " + currentQuestion.D;
  optionsElement.style.display = "block";
}

// Function to proceed to the next question
function nextQuestion() {
  questionIndex++;
  // Check if there are more questions
  if (questionIndex < askingQuestions.length - 1) {
    askQuestion(); 
  } 
}
// ...

// Add an event listener to the options container
optionsElement.addEventListener("click", function (event) {
  var selectedOption = event.target;
  if (selectedOption.classList.contains("answer")) {
    nextQuestion();
  }
});


// -----------------calling functions----------------------

// Typing out the introduction text
typingText(text,textEl,0, function () {
    // After typing the introduction text, show the "Start" button
    startBtn.style.display = "block";
  },
  0
);


showingOptions();