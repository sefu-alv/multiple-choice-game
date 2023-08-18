// -----------------variables----------------------
var startBtn = document.getElementById("start-btn");
var mainScreen = document.getElementById("main-screen");
var textEl = document.getElementById("intro-text");
var titleText = document.getElementById("title");
var index = 0;
var stilltyping = true;
var speed = 0;
var text =
  "Welcome to the Quiz Realm! Test your coding knowledge as you tackle a series of questions. Each question offers multiple choices: A, B, C, or D. Choose wisely, as wrong answers chip away at your timer. Can you beat the clock and stay in the game? Step up and prove your knowledge skills in the Quiz Realm!";
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
var timerEl= document.getElementById('timer');
var time;
var timeLeft=60;

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

// shows the questions
function askQuestion() {
  questionElement.textContent = "";
  aOption.textContent = "";
  bOption.textContent = "";
  cOption.textContent = "";
  dOption.textContent = "";
  optionsElement.style.display = "block";
  var currentQuestion = askingQuestions[questionIndex];
  typingText( currentQuestion.question,questionElement,0,function () {
      showingOptions();
    },
    5
  );
}

// shows the options 
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
// this function starts timer
function startTimer() {
  time = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer(); // Call the function to update the timer display
    } else {
      clearInterval(time);
      console.log("Time's up!");
    }
  }, 1000);
}

// Function to update the timer display
function updateTimer() {
  timerEl.textContent = timeLeft + "s";
}


// Call this function when an answer is submitted
function handleUserAnswer(answer) {
  var currentQuestion = askingQuestions[questionIndex];
  if (answer === currentQuestion.answer) {
    nextQuestion();
  } else {
    timeLeft -= 5; 
    if (timeLeft < 0) {
      timeLeft = 0;
    }
    updateTimer();
    nextQuestion();
  }
}
// ----------------event listeners-----------------------

// Add an event listener to the options container
optionsElement.addEventListener("click", function (event) {
  var selectedOption = event.target;
  if (selectedOption.classList.contains("answer")) {
    handleUserAnswer(selectedOption.id);
  }
})

// start game fuctions
startBtn.addEventListener("click", function () {
  if (!stilltyping) {
    mainScreen.style.display = "block";
    startBtn.style.display = "none";
    textEl.style.display = "none";
  }
  askQuestion();
  startTimer();
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
