# quiz-game

I created this quiz to challenge my JS writing skills along with furthering my knowledge on functions. It is a simple quiz on the popular novals and movies Harry Potter. In order to begin the quiz you must press the start button, after which a timer will begin, you will be docked 10 points for every wrong answer that you input. at the end of the quiz your remaining time will be your final score. Enter your initials to be added to the leaderboard and see who knows Harry Potter the best! 

# How it works 

<h2> Index.html</h2>

The html used for the main part of this page is relativly plain consisting of: 

 - basic HTML structure
 - a button that is connected to the highscores HTML page
 - a div with the id of "count"
 - the title "Harry Potter Quiz"
 - a small paragraph on how the quiz works and the scoring system 
 - a start button 
 - a text area for the questions
 - 4 buttons for the answers empty of text
 - a div with the id of message to alert the user of getting the question right or wrong 
 - a finish screen with a title 
 - a text box and a button to submit initials and final score to the local storage scoreboard

<h2>script.js</h2>

 The JavaScript page has much more content on it as it contains most of the content that will be apearing on the browser while taking the quiz. 

I started this page by creating some global variables that I would need throughout multiple functions. 

<img src=assets/variables.jpg>

-
-


After establishing the global variables I began creating the question array that would be used to cycle through questions and answers.

-
-


<img src=assets/questionArray.jpg>


Once this was all set up I added an event listener for the start button which would triger the function for the timer (also be used for the final score) and the function to render the quiz page. The method that I used for the timer was to create a variable make it equal to 0 (timeLeft) and add 8 seconds per question on the quiz. In this way I could easily add more questions to my quiz which I have since done and have the js add the extra elotted time for me. I also added to the function that should the time run out, the text for the timer would read "Time's up!"


<h2>Next came the question counter (renderQuiz function):</h2>

-
-

<img src=assets/questionCount.jpg>


I created 2 more variables here one that would hold the question counter value (starting at 0) and the other to represent the previous question with the value of the answer array's length -1. The function following this is not the most dry that could be possible however, it works! I gave each button a variable and then added the text content from the answer array onto each button reaching in and grabbing the index of the first answer array. 