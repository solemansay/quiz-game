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

var answerArrofObj = [
  {
    question: "What is the name of Harry Potters owl?",
    answerArr: ["Hedwig", "Trevour", "Crookshanks", "Dobby"],
    answer: "Hedwig"
  },
  {
    question: "What is the spell used to cover an opponent in boils?",
    answerArr: ["Waddiwasi", "Flagrate", "Locomotor Wibbly", "Furnunculus"],
    answer: "Furnunculus"
  },
  {
    question: "What is the Profession of Hermionie's parents?",
    answerArr: ["geologists", "Flourists", "Dentists", "Veterinarians" ],
    answer: "Dentists"
  },
  {
    question: "What is Ronald's last name?",
    answerArr: ["Swanson", "Weasley", "Granger", "Potter"],
    answer: "Weasley"
  },
  {
    question: "How many possible Quidditch fouls are there?",
    answerArr: ["501", "300", "55", "700" ],
    answer: "700"
  },
  {
    question: "Who is the main villain throughout the Harry Potter trilogy?",
    answerArr: ["Voldemort", "dumbledore ", "Trevour", "Professor Sprout"],
    answer: "Voldemort"
  },
  {
    question: "In which county surrounding London did Harry Potter grow up?",
    answerArr: ["Sussex", "Surrey", "Kent", "Hertfordshire"],
    answer: "Surrey"
  },
  {
    question: "How old was Dumbledore when he passed away?",
    answerArr: ["97", "152", "115", "176" ],
    answer: "115"
  },
  {
    question: "Who is Harry Potters legal godfather?",
    answerArr: ["Tom Riddle", "Severus Snape", "Vernon Dursley", "Sirius Black" ],
    answer: "Sirius Black"
  },
  {
    question: "How old was the co-creator of the philosopher's stone, Nicholas Flamel, when he decided to destroy it?",
    answerArr: ["450", "665", "397", "635" ],
    answer: "665"
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
  timeLeft = (answerArrofObj.length * 8);
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
      clearInterval(timeInterval);
      timerEl.textContent = "Time's up!";
      showResults();
    }

    // if there is 10 seconds left on the clock the timer will turn red and the font size increases.
    if (timeLeft <= 10) {
      timerEl.setAttribute("style", "color:red; font-size:30px;")
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
    questionText.textContent = currentQ;

    var btn1 = document.getElementById("btn0");
    var btn2 = document.getElementById("btn1");
    var btn3 = document.getElementById("btn2");
    var btn4 = document.getElementById("btn3");

    btn1.textContent = answerArrofObj[questionCounter].answerArr[0];
    btn2.textContent = answerArrofObj[questionCounter].answerArr[1];
    btn3.textContent = answerArrofObj[questionCounter].answerArr[2];
    btn4.textContent = answerArrofObj[questionCounter].answerArr[3];
  }

  //This is a function to keep the user on the page for a second, allowing them to see if they answered wrong or right.
  else {
    ended = true;
    setTimeout(() => {
      showResults();
    }, 1000);
      
  }
}

// When user clicks button, function checks if the answer is right or wrong. And then preceeds to next question
buttons.addEventListener("click", function (event) {
  if (event.target.textContent === answerArrofObj[questionCounter].answer) {
    message.setAttribute("style", "color: green; font-size:20px;")
    message.textContent = "Correct!";
  }
  else {
    // If the user answers wrong, this code checks to see if there is at least 10 seconds left.
    // If there is over 10 seconds left, 10 seconds are deducted from timer. If there is less, the quiz ends
    if (timeLeft > 11) {
      timeLeft = timeLeft - 10;
      message.setAttribute("style", "color: red; font-size:28px;")
      message.textContent = "Wrong!";
    }
    else {
      ended = true;
      message.textContent = "You got the answer wrong with less than 10 seconds remaining, sorry, time's up!"
      timeLeft=0
      showResults();
    }
  }

  questionCounter++;
  renderQuiz();
})

// function hides quiz questions and choices making the initials text field appear
function showResults() {
  quizScreen.setAttribute("style", "display: none !important");
  endScreen.setAttribute("style", "display: block !important");
  var viewScore = document.getElementById("viewScore")
  endTitle.textContent = "Fin!";
  viewScore.textContent = "Your score is: " + timeLeft +  ". Enter your initials below to save your score!";
}

submit.addEventListener("click", function (event) {

  var initials = document.getElementById("initials");
  var i = initials.value.trim();
  var highScores = JSON.parse(localStorage.getItem("highScores")) || []
  var newScore = {initials: i, score: timeLeft}
  highScores.push(newScore);
  localStorage.setItem("highScores", JSON.stringify(highScores))
  window.location.href = "high-scores.html";
})