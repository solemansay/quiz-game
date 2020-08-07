var startScreen = document.querySelector(".startScreen");
var startButton = document.querySelector("#startButton");
var quizScreen = document.querySelector(".quizScreen");
var questionText = document.querySelector("#questionText");
var container = document.querySelector(".container");
var hpTitle = document.querySelector("#hpTitle");
var buttons = document.querySelector(".buttons");
var timerEl = document.querySelector("#count");
var message = document.querySelector("#message");
var scoreBoard = document.querySelector("#table");
var endScreen = document.querySelector(".endScreen");
var submit = document.querySelector("#button-addon1");

var userArr = [];
var scoreArr = [];

var answerArrofObj = [
  {
    question: "What is the name of Harry Potters owl?",
    answerArr: ["Hedwig", "Trevour", "Crookshanks", "Dobby"],
    answer: "Hedwig"
  },
  {
    question: "What is Ron's last name?",
    answerArr: ["Swanson", "Weasley", "Granger", "Potter"],
    answer: "Weasley"
  },
  {
    question: "Who is the main villain in Harry Potter",
    answerArr: ["Dumbledoor", "Trevour", "Voldemort", "Seious Black"],
    answer: "Voldemort"
  },
  {
    question: "Who is Harry Potters godfather?",
    answerArr: ["Tom Riddle", "Severus Snape", "Lucious Malfoy", "Serious Black"],
    answer: "Serious Black"
  }
]


//start button

document.getElementById("startButton").onclick = function (quiz) {
  setCounter();
  renderQuiz();
}


//timer
var timeLeft = 0;
var ended = false;
function setCounter() {
  timeLeft = (answerArrofObj.length * 10);
  if (event.target.matches("button")) {
    startScreen.setAttribute("style", "display: none !important");
    quizScreen.setAttribute("style", "display: block !important");
  }

  var timeInterval = setInterval(function () {
    timerEl.textContent = "time left: " + timeLeft;
    timeLeft--;

    if (ended == true) {
      clearInterval(timeInterval);
    }

    if (timeLeft === 0) {
      timerEl.textContent = "Time's up!";
      clearInterval(timeInterval);
      endScreen();
    }

  }, 1000);
}

// These variables help code cycle through each question
var questionCounter = 0;
var lastQ = answerArrofObj.length - 1;

function renderQuiz() {

  if (questionCounter <= lastQ) {

    // Displays the current question and displays answers on the buttons
    var currentQ = answerArrofObj[questionCounter].question;
    questionText.innerHTML = currentQ;

    var btn1 = document.getElementById("btn0");
    var btn2 = document.getElementById("btn1");
    var btn3 = document.getElementById("btn2");
    var btn4 = document.getElementById("btn3");

    btn1.textContent = answerArrofObj[questionCounter].answerArr[0];
    btn2.textContent = answerArrofObj[questionCounter].answerArr[1];
    btn3.textContent = answerArrofObj[questionCounter].answerArr[2];
    btn4.textContent = answerArrofObj[questionCounter].answerArr[3];

    btn1.style.display = "inline";
    btn2.style.display = "inline";
    btn3.style.display = "inline";
    btn4.style.display = "inline";

    buttons.appendChild(btn1);
    buttons.appendChild(btn2);
    buttons.appendChild(btn3);
    buttons.appendChild(btn4);

  }

  //<---- this is a function to keep the user on the page for a second and a half, allowing them to see if they answered wrong or right.
  else {
    ended = true;
    setTimeout(() => {
      showResults();
    }, 1500);
      
  }
}

// When user clicks button, function checks if the answer is right or wrong. And then preceeds to next question
buttons.addEventListener("click", function (event) {
  if (event.target.textContent == answerArrofObj[questionCounter].answer) {
    message.textContent = "Correct!";
  }
  else {
    // If the user answers wrong, this code checks to see if there is at least 10 seconds left.
    // If there is over 10 seconds left, 10 seconds are deducted from timer. If there is less, the quiz ends
    if (timeLeft > 11) {
      timeLeft = timeLeft - 10;
      message.textContent = "Wrong!";
    }
    else {
      ended = true;
      message.textContent = "You got the answer wrong with less than 10 seconds remaining, sorry, times up!"
      showResults();
    }
  }

  questionCounter++;
  renderQuiz();
})

// function hides quiz questions and choices and makes a calculate score button appear
function showResults() {
  buttons.style.display = "none";
  questionText.style.display = "none";
  message.setAttribute("style", "display: none !important");
  endScreen.setAttribute("style", "display: block !important");
  var viewScore = document.getElementById("viewScore")
  viewScore.textContent = "Your score is " + timeLeft + " Enter your initials below to save your score!";
}

submit.addEventListener("click", function (event) {

  var initials = document.getElementById("initials");
  var i = initials.value.trim();
  var highScores = JSON.parse(localStorage.getItem("highScores")) || []
  var newScore = {initials: i, score: timeLeft}
  highScores.push(newScore);
  localStorage.setItem("highScores", JSON.stringify(highScores))
  window.location.href = "high-scores.html";
  // loadScores()
})

var userData = [];



