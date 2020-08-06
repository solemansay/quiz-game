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

var answerArrofObjIndex = 0;

var answerArrofObj = [
    {
        answerArr: ["Hedwig", "Trevour", "Crookshanks", "Dobby"],
        solution: 0
    },
    {
        answerArr: ["Swanson", "Weasley", "Granger", "Potter"],
        solution: 1
    },
    {
        answerArr: ["Dumbledoor", "Trevour", "Voldemort", "Seious Black"],
        solution: 2
    },
    {
        answerArr: ["Tom Riddle", "Severus Snape", "Lucious Malfoy", "Serious Black"],
        solution: 3
    }
]


var questionArr = [
    "What is the name of Harry Potters owl?",
    "What is Ron's last name?",
    "Who is the main villain in Harry Potter",
    "Who is Harry Potters godfather?",
];

//start button
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
            endScreen();
        }

    }, 100);

    displayQuestions();
}

answer1 || answer2 || answer3 || answer4.addEventListener("click", displayQuestions)


function displayQuestions() {

    // if (answerArrofObjIndex !== 0) {
    //     document.getElementById("questionText").children[1].remove();

    // }

    // var currentLayout = answerArrofObj[answerArrofObjIndex];

    // var question = document.createElement("h3");
    // //question.classList.add("quest");
    // question.setAttribute("src", currentLayout.questionArr[currentLayout.solution])

    // document.getElementById("questionText").appendChild(question);

    // for (var i = 0; i < currentLayout.questionArr.length; i++) {
    //     setQuestion(i)
    // }

}


setCounter();

//   function endPage()