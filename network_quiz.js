// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const scoreMessage = document.getElementById("scoreMessage");
const quizAgain = document.getElementById("quizAgain");
const quizImg = document.getElementById("quizImg");

// create our questions
let questions = [
    {
        question : "",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "A combination of two",
        correct : "B",
        response: "This person is a friend.",
        imgSrc: "friend_michael_brook.png"
    },
    {
        question : "",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "A combination of two",
        correct : "D",
        response: "This person is a combination of two network types: a mentor and a strategic partner.",
        imgSrc: "combo_amy_porter.png"
    },
    {
        question : "",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "A combination of two",
        correct : "C",
        response: "This person is a strategic partner.",
        imgSrc: "partner_lily_petrovich.png"
    },
    {
        question : "",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "A combination of two",
        correct : "A",
        response: "This person is a mentor.",
        imgSrc: "mentor_farah_abdullah.png"
    }
];

// create some variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    choiceResponse.style.display = "none";
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            scoreRender();
        }
    }
}

// checkAnswer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // display correct
        choices.style.display = "none";
        choiceResponse.innerHTML= "<p>Correct!</p>"+"<p></p>"+"<p>"+questions[runningQuestion].response+"</p>";
        choiceResponse.style.display = "block";
        // change progress color to green
        answerIsCorrect();
        setTimeout(renderQuestion(),2000);
    }else{
        // answer is wrong
        // display wrong!
        choices.style.display = "none";
        choiceResponse.innerHTML= "<p>Incorrect!</p>"+"<p></p>"+"<p>"+questions[runningQuestion].response+"</p>";
        choiceResponse.style.display = "block";
        // change progress color to red
        answerIsWrong();
        setTimeout(renderQuestion(),2000);
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        setTimeout(renderQuestion(),2000);
    }else{
        // end the quiz and show the score
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

// score render
function scoreRender(){
    quiz.style.display = "none";
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = "<p> You scored " + score + " out of 4!</p>";
    
    // calculate the amount of question percent answered by the user 
    if (score == 4) {
        scoreMessage.innerHTML = "<p>Awesome job on identifying your network types!</p>";
    }
    else if (score >= 1 && score <= 3) {
        scoreMessage.innerHTML = "<p>Not bad!</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Try reading through our network type descriptions and try again!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
   
}

function restartQuiz() {
    start.style.display = "block";
    scoreDiv.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    runningQuestion = 0;
}
