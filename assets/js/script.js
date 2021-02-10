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
var highScoreDiv = document.querySelector('.highScoreDiv');
//variable for start button
var startBtn = document.getElementById('start');
var userInitials = document.getElementById('userInitials');
var scoreButton = document.getElementById('scoreButton');
var currentQuestion = -1;
console.log(startBtn);
var rightAnswer = 0;
var wrongAnswer = 0;
var scoreDiv = document.getElementById('totalScore');
scoreDiv.style.display = "none";
// pElement.style.display = "none";
// highScoreTitle.style.display = "none";

highScoreDiv.style.display = "none";

questionArr.forEach(function (element) {
    element.style.display = "none";
})

startBtn.addEventListener("click", function () {
    startBtn.style.display = "none";
    displayQuestions();
});
wrongEl.forEach(function (element) {
    element.addEventListener("click", incorrectAns)
})

correctAnswer.forEach(function (element) {
    element.addEventListener("click", correctAns)
})
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

function incorrectAns() {
    wrongAnswer++;
    displayQuestions();
}

function correctAns() {
    rightAnswer++;
    displayQuestions();
}

function displayScore() {
    scoreDiv.style.display = "block";
    document.getElementById("userScore").innerText = "score: " + rightAnswer;
}

function savedScore() {

}

scoreButton.addEventListener('click', function () {
    var user = userInitials.value;
    var highScores = JSON.parse(localStorage.getItem('previousScores')) || []
    highScores.push({
        user: user,
        score: rightAnswer
    });
    console.log(highScores);
})





