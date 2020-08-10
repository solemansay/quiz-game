# quiz-game

I created this quiz to challenge my JS writing skills along with furthering my knowledge of functions. It is a simple quiz on the popular novels and movies Harry Potter. In order to begin the quiz, you must press the start button, after which a timer will begin, you will be docked 10 points for every wrong answer that you input. at the end of the quiz, your remaining time will be your final score. Enter your initials to be added to the leaderboard and see who knows Harry Potter the best! 

# How it works 

<h2> Index.html</h2>

The HTML used for the main part of this page is relatively plain consisting of: 

 - basic HTML structure
 - a button that is connected to the high scores HTML page
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

 The JavaScript page has much more content on it as it contains most of the content that will be appearing on the browser while taking the quiz. 

I started this page by creating some global variables that I would need throughout multiple functions. 

<img src=assets/variables.jpg>

-

-


After establishing the global variables I began creating the question array that would be used to cycle through questions and answers.

-

-


<img src=assets/questionArray.jpg>

Once this was all set up I added an event listener for the start button which would trigger the function for the timer (also be used for the final score) and the function to render the quiz page. The method that I used for the timer was to create a variable make it equal to 0 (timeLeft) and add 8 seconds per question on the quiz. In this way, I could easily add more questions to my quiz which I have since done and have the js add the extra allotted time for me. I also added to the function that should the time run out, the text for the timer would read "Time's up!"


<h2>Next came the question counter (renderQuiz function):</h2>

-

-

<img src=assets/questionCount.jpg>

I created 2 more variables here one that would hold the question counter value (starting at 0) and the other to represent the previous question with the value of the answer's array length -1. The function following this is not the driest that could be possible however, it works! I gave each button a variable and then added the text content from the answer array onto each button reaching in and grabbing the index of the first answer array. 
this function cycles the questions in the same way therefore synchronizing the questions with the answers.

Next came the function to identify whether the answer that the user chose was correct or not. 
-

-
<img src=assets/buttons.jpg>

The way that I achieved this was an event listener on all of the buttons which would trigger a comparison between the text content on the chosen button and the answer. if the question was answered correctly the user is rewarded with a message in green saying "correct!" and the next question would cycle. If the question is answered incorrectly, the user is shown a message "wrong!" in red and 10 seconds is docked from the timer/their total score. This function will keep cycling until the participant either answers all of the questions correctly or runs out of time. 

Once the game is complete the user is taken to a page where they can submit their initials to enter their score on the score-board. 

-

-

<img src=assets/score.jpg>

Once the quiz takers' initials are entered into the text box and submitted they enter the user's local storage and will stay there until cleared. 
The scoreboard is a basic table with the styling taken from bootstrap. 

The Javascript used for the scoreboard is as bellow:

<img src=assets/scoreboard.jpg>

-

-

Thank you for viewing my Harry Potter trivia quiz I hope you enjoyed it and continue to follow my career as a full-stack web developer!