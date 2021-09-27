// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const scoreMessage = document.getElementById("scoreMessage");

// create our questions
let questions = [
    {
        question : "When you’re onboarded, are you explained the solution/goal with flexibility on how to get there? (rather than walking through steps to get the solution)",
        choiceA : "Yes",
        choiceB : "No",
        correct : "A"
    },
    {
        question : "When you first start your job, do others value/seek out your input/opinion? (e.g., in meetings your team asks for your thoughts)",
        choiceA : "Yes",
        choiceB : "No",
        correct : "A"
    },
    {
        question : "Are you allowed to take risks at work? (For example, if you fail at a risk, you’re still applauded for taking it) ",
        choiceA : "Yes",
        choiceB : "No",
        correct : "A"
    },
    {
        question : "Do you often interact with people outside of your immediate department?",
        choiceA : "Yes",
        choiceB : "No",
        correct : "A"
    },
    {
        question : "Is senior leadership accessible? (e.g., they offer coffee chats or they sit near entry-level employees)",
        choiceA : "Yes",
        choiceB : "No",
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
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    progressBar.style.display = "block";
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
    quiz.style.display = "none";
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = "<p> You scored " + score + " out of 5!</p>";
    
    if (score == 5) {
        scoreMessage.innerHTML = "<p>Awesome! You have an extremely supportive environment.</p>";
    }
    else if (score >= 3 && score <= 4) {
        scoreMessage.innerHTML = "<p>Not bad. Your environment is slightly supportive.</p>"
    }
    else if (score >= 1 && score <= 2) {
        scoreMessage.innerHTML = "<p>Not great. Your environment is supportive in some ways, but needs your work to create micro-environments.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Oh, no! Seems like your environment is not supportive. Read more about ways to get around this.</p>"
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
