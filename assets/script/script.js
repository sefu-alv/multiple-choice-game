// questions that will be asked in the game
let askingQuestions = [
  {
    question:
      "Which of the following programming languages is used to create the structure and content of a webpage?",
    choiceA: "CSS",
    choiceB: "HTML",
    choiceC: "JAVASCRIPT",
    choiceD: "C++",
    
    answer:"b"
  },
  {
    question:
      " Which language is primarily responsible for controlling the behavior and interactivity of a webpage?",
    choiceA: "HTML",
    choiceB: "JAVASCRIPT",
    choiceC: "CSS",
    choiceD: "PHP",

    answer:"b"
  },

  {
    question: "What is the primary purpose of CSS in web development?",
    choiceA: "MAKE WEBSITES RESPONSIVE",
    choiceB: "CREATE SERVERS",
    choiceC: "MANIPULATE DATA",
    choiceD: "STYLE WEBSITES",

    answer:"d"
  },

  {
    question:
      "Which of the following HTML tags is used to link an external JavaScript file to an HTML document?",
    choiceA: "<link>",
    choiceB: "<script>",
    choiceC: "<javascript>",
    choiceD: "<style>",

    answer:"b"
  },

  {
    question:
      "Which CSS property is used to change the background color of an element?",
    choiceA: "color",
    choiceB: "bgcolor",
    choiceC: "bg-color",
    choiceD: "background-color",

    answer:"d"
  },
  {
    question:
      "In JavaScript, which function is used to change the content of an HTML element?",
    choiceA: "appendElement()",
    choiceB: "innerHTML()",
    choiceC: "$()",
    choiceD: "changeAttribute()",

    answer:"b"
  },
  {
    question: "Which HTML tag is used to create a numbered list?",
    choiceA: "<li>",
    choiceB: "<ul>",
    choiceC: "<ol>",
    choiceD: "<p>",

    answer:"c"
  },
];

function askQuestion(questions){
   var questionElement = document.getElementById("q");
   var optionsElement = document.getElementById('options');

   for(var i = 0; i <questions.length; i++){
   var currentQuestion = questions[i];
    console.log(currentQuestion.question);
    console.log(currentQuestion.choiceA);
    console.log(currentQuestion.choiceB);
    console.log(currentQuestion.choiceC);
    console.log(currentQuestion.choiceD);
   }


}
askQuestion(askingQuestions);
