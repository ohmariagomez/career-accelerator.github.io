// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const scoreBlock = document.getElementById("scoreBlock");
const scoreMessage = document.getElementById("scoreMessage");

// create our questions
let questions = [
    {
        question : "Have better time management",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "A"
    },
    {
        question : "Get promoted to senior technical analyst",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "B"
    },
    {
        question : "Get an A on my class",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "B"
    },
    {
        question : "Enhance my coding skills in SQL and learning Python",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "A"
    },
    {
        question : "Be more proactive in accepting new responsibilities",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "A"
    },
    {
        question : "Have more self-discipline on my homework",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "A"
    },
    {
        question : "Launch my own fashion startup",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "B"
    },
    {
        question : "Have a healthier lifestyle",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "A"
    },
    {
        question : "Learn how to do user discovery",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "A"
    },
    {
        question : "Lose 5 pounds",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "B"
    },
    {
        question : "Manage a team",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "B"
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
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
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

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
