// questions that will be asked in the game
const askingQuestions = [
  {
    question:
      "Which of the following programming languages is used to create the structure and content of a webpage?",
    A: "CSS",
    B: "HTML",
    C: "JAVASCRIPT",
    D: "C++",

    answer: "b",
  },
  {
    question:
      " Which language is primarily responsible for controlling the behavior and interactivity of a webpage?",
    A: "HTML",
    B: "JAVASCRIPT",
    C: "CSS",
    D: "PHP",

    answer: "b",
  },

  {
    question: "What is the primary purpose of CSS in web development?",
    A: "MAKE WEBSITES RESPONSIVE",
    B: "CREATE SERVERS",
    C: "MANIPULATE DATA",
    D: "STYLE WEBSITES",

    answer: "d",
  },

  {
    question:
      "Which of the following HTML tags is used to link an external JavaScript file to an HTML document?",
    choiceA: "<link>",
    choiceB: "<script>",
    choiceC: "<javascript>",
    choiceD: "<style>",

    answer: "b",
  },

  {
    question:
      "Which CSS property is used to change the background color of an element?",
    A: "color",
    B: "bgcolor",
    C: "bg-color",
    D:"background-color",

    answer: "d",
  },
  {
    question:
      "In JavaScript, which function is used to change the content of an HTML element?",
    A: "appendElement()",
    B: "innerHTML()",
    C: "$()",
    D: "changeAttribute()",

    answer: "b",
  },
  {
    question: "Which HTML tag is used to create a numbered list?",
    A: "<li>",
    B: "<ul>",
    C: "<ol>",
    D: "<p>",

    answer: "c",
  },
];
var questionElement = document.getElementById("q");
var optionsElement = document.getElementById("options");
var aOption = document.getElementById("a-option");
var bOption = document.getElementById("b-option");
var cOption = document.getElementById("c-option");
var dOption = document.getElementById("d-option");
//setting index set to -1 so no questions are displayed
var questionIndex = 0;
function askQuestion() {
  //    pushing up the index by one
  questionIndex++;
//   pulls up the most current question 
  var currentQuestion = askingQuestions[questionIndex];
//   displays current question
  questionElement.innerText = currentQuestion.question;
  aOption.innerText=currentQuestion.A;
  bOption.innerText=currentQuestion.B;
  cOption.innerText=currentQuestion.C;
  dOption.innerText=currentQuestion.D;

}
askQuestion();
