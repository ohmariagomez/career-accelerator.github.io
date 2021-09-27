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

// create our questions
let questions = [
    {
        question : "persona 1",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "A combination of two",
        correct : "B"
    },
    {
        question : "persona 2",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "A combination of two",
        correct : "D"
    },
    {
        question : "persona 3",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "A combination of two",
        correct : "C"
    },
    {
        question : "persona 4",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "A combination of two",
        correct : "A"
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
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
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
        choiceResponse.innerHTML= "<p>Correct!</p>"
        choiceResponse.style.display = "block";
        // change progress color to green
        answerIsCorrect();
        setTimeout(renderQuestion,2000);
    }else{
        // answer is wrong
        // display wrong!
        choices.style.display = "none";
        choiceResponse.innerHTML= "<p>Incorrect!</p>"
        choiceResponse.style.display = "block";
        // change progress color to red
        answerIsWrong();
        setTimeout(renderQuestion,2000);
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
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
