//body element variable
var bodyEl = document.querySelector('body');
console.log(bodyEl);
//array to store questions
var questionArr = document.querySelectorAll('.question');
console.log(questionArr);
//variable for start button
var startButton = document.getElementById("start");
//variable for incorrect button
var wrongEl = document.querySelectorAll('.wrong');
console.log(wrongAnswer);
//variable for correct answer
var correctAnswer = document.querySelectorAll('.right');
console.log(correctAnswer);
//high score list
var highScoreDiv = document.querySelector('#highScoreDiv');
//element to add highScores to
var highScoreListEl = document.querySelector('#hsList');
//variable for start button
var startBtn = document.getElementById('start');
//variable to compare questionArr to
var currentQuestion = -1;
console.log(startBtn);
//correct answer variable
var rightAnswer = 0;
//wronganswer variable
var wrongAnswer = 0;
//div that contains the button to submit score
var scoreDiv = document.getElementById('totalScore');
//input field for user initials
var userInitials = document.getElementById('userInitials');
//button to submit initials
var scoreButton = document.getElementById('scoreButton');
//hiding the div that contains 3 elements above
scoreDiv.style.display = "none";
//trying to hide - when hiding this div EVERYTHING shows up on page
highScoreDiv.style.display = "none";
//variable for timer element
var timerElement = document.querySelector('.timer-count');
//variable for the timer count
var timerCount = 60;
//variable for the timer itself
var time;
//---------------------------------------------------------------------------------------------//

//functions that go through variables and to next question and log incorrect/correct answers
questionArr.forEach(function (element) {
    element.style.display = "none";
})

startBtn.addEventListener("click", function () {
    startBtn.style.display = "none";
    startTimer();
    displayQuestions();
});
wrongEl.forEach(function (element) {
    element.addEventListener("click", incorrectAns)
})

correctAnswer.forEach(function (element) {
    element.addEventListener("click", correctAns)
})
// end of above comment


//---------------------------------------------------------------------------------------------//

            
//function hides and shows then rehides questions
function displayQuestions() {
    if (currentQuestion >= 0) {
        questionArr[currentQuestion].style.display = "none";
    }
    if (currentQuestion < questionArr.length - 1) {
        currentQuestion++;
        questionArr[currentQuestion].style.display = "block";

    }

    else {
        console.log('rightAnswer, wrongAnswer', rightAnswer, wrongAnswer);
        displayScore();
    }
}
//end of line 54 comment

//function for timer

function startTimer() {
    timer = setInterval(() => {
        timerCount--;
        timerElement.textContent = timerCount;
        console.log(timerElement.textContent);
        if (timerCount <= 0) {
            clearInterval(timer);
            alert('Time has expired!');
        } else if (questionArr[currentQuestion] = questionArr.length - 1) {
            clearInterval(timer);
        }
    }, 1000);
}

//---------------------------------------------------------------------------------------------//


//function that logs incorrect answer
function incorrectAns() {
    wrongAnswer++;
    timerCount = timerCount - 10;
    displayQuestions();
}
//function that logs correct answer
function correctAns() {
    rightAnswer++;
     
    displayQuestions();
}
//end of scoring functions


//---------------------------------------------------------------------------------------------//


//function that shows score, user iitial input and button to submit initials to tolocaalstorage
function displayScore() {
    scoreDiv.style.display = "block";
    document.getElementById("userScore").innerText = "score: " + rightAnswer;
}

function savedScore(highScores) {
    highScoreDiv.style.display = "block";

    localStorage.setItem('previousScores', JSON.stringify(highScores));
}

scoreButton.addEventListener('click', function () {
    highScoreListEl.innerHTML = '';
    var counter = 0; 
    var user = userInitials.value;
    var highScores = JSON.parse(localStorage.getItem('previousScores')) || []
    highScores.push({
        userInit: user,
        score: rightAnswer
    });
    savedScore(highScores);
    scoreDiv.style.display = "none";
    highScoreDiv.style.display = "block";
    console.log(highScores);
    for (let i = highScores.length - 1; i >=0; i--) {
        if (counter === 10) {
            return;
        }
        highScoreListEl.innerHTML += "Player: " + highScores[i].userInit + " Score: " + highScores[i].score + '<br>';
        counter++;
    } 
})






