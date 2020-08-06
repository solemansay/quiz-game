var startScreen = document.querySelector(".startScreen");
var startButton = document.querySelector("#startButton");
var quizScreen = document.querySelector(".quizScreen");
var question = document.querySelector("#questionText");
var container = document.querySelector(".container");
var hpTitle = document.querySelector("#hpTitle");
var buttons = document.querySelector("#buttons");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var timerEl = document.querySelector("#count");


var questionArr = [
    "What is the name of Harry Potters owl?",
    "What is Ron's last name?",
    "What is Harry Potter famous for?",
    "Who is the main villain in Harry Potter",
    "Who is Harry Potters godfather?",
    "What is Hermiones Pet?",
    "What is the potion used to prevent a werewolf's full transformation?"
];


startButton.addEventListener("click", setCounter)

function setCounter() {
    if (event.target.matches("button")) {
        startScreen.setAttribute("style", "display: none !important");
        quizScreen.setAttribute("style", "display: block !important");
    }
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        timerEl.textContent = "time left: " + timeLeft;
        timeLeft--;

        if (timeLeft === 0) {
            timerEl.textContent = "time left: 0";
            clearInterval(timeInterval);
            endPage();
        }

    }, 1000);
}

setCounter();

//   function endPage()