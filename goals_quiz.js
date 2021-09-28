// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceResponse = document.getElementById("choiceResponse");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const scoreMessage = document.getElementById("scoreMessage");
const quizAgain = document.getElementById("quizAgain");

// create our questions
let questions = [
    {
        question : "Have better time management",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "A",
        response: "There are many facets of work where you will be required to manage your time, and you will need to find what strategies work best for you. Through the journey on this goal, you will explore those and see how to make those strategies truly yours."
    },
    {
        question : "Get promoted to senior technical analyst",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "B",
        response: "There are many ways to achieve this goal, regardless of the path you choose, there is no evolution other than pining for the next level."
    },
    {
        question : "Get an A on my class",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "B",
        response: "Within a few months, this is a goal you either did or did not achieve. There are not real learnings to help you with any other goals you set."
    },
    {
        question : "Enhance my coding skills in SQL and learning Python",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "A",
        response: "Coding for data analytics is a constant learning process, you can be an expert at SQL and start learning python, but then your goal will continue to evolve based on how you enjoy this process and what you want to grow into. For example you may want to become a python expert, or you may choose to work on data visualization instead."
    },
    {
        question : "Be more proactive in accepting new responsibilities",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "A",
        response: "As you advance in your career, you will be given responsibilities less frequently and be expected to pick them up yourself. Through the growth journey on this goal, you may learn that there are types of responsibilities you shy from, and evolve the goal into focusing on them."
    },
    {
        question : "Have more self-discipline on my homework",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "A",
        response: "You may have realized that you always get to your homework last minute and want to work on the self control to do this before time. While learning to meet this goal, you may also learn that time management isn’t your issue, it is motivation for some of the homework. As you learn more, your goal will evolve."
    },
    {
        question : "Launch my own fashion startup",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "B",
        response: "This is more of a motivation than a goal, you would have to set multiple goals to be able to get here and “launching” is not the same as being successful. To turn this into a growth goal say - “be successful with my fashion startup”"
    },
    {
        question : "Have a healthier lifestyle",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "A",
        response: "Similar to the other goals, this too could have different segments and on your journey to fulfilling it, you will find that there are segments you struggle with and segments you don’t. You will not just be successful, you will evolve your goal as you learn."
    },
    {
        question : "Learn how to do user discovery",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "A",
        response: "There are many different things to learn about user discovery, initially through your work to meet this goal, you will learn the basics. Then you will want to learn how to make it muscle memory and apply the right frameworks in the right place."
    },
    {
        question : "Lose 5 pounds",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "B",
        response: "This is a personal goal, and it is upto you to decide if you want your health journey to stop at 5 pounds or you want it to be more sustainable. While this could be a way to measure your progress, we would not suggest making it your goal."
    },
    {
        question : "Manage a team",
        choiceA : "Growth",
        choiceB : "Checklist",
        correct : "B",
        response: "While this may help you grow at work, it doesn’t indicate any new skills. You can start managing a team - but what you really need to learn is the skills to manage them well."
    }
];

// create some variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// render a question
function renderQuestion(){
    choiceResponse.style.display = "none";
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choices.style.display = "block";
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// checkAnswer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // display correct response
        choices.style.display = "none";
        choiceResponse.innerHTML= "<p><b>Correct!</b></p>" +"<p>"+ questions[runningQuestion].response+"</p>";
        choiceResponse.style.display = "block";
        // change progress color to green
        answerIsCorrect();
        setTimeout(renderQuestion,3000);
        
    }else{
        // answer is wrong
        // display wrong response
        choices.style.display = "none";
        choiceResponse.innerHTML= "<p><b>Incorrect!</b></p>"+"<p>"+questions[runningQuestion].response+"</p>";
        choiceResponse.style.display = "block";
        // change progress color to red
        answerIsWrong();
        setTimeout(renderQuestion,3000);
        
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        setTimeout(renderQuestion,3000);
    }else{
        // end the quiz and show the score
        setTimeout(scoreRender,3000);
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
    scoreDiv.innerHTML = "<p> You scored " + score + " out of " + questions.length + "!</p>";
    
    // classify scores into categories  
    if (score < 4) {
        scoreMessage.innerHTML = "<p>Try reading through our growth poster section and try again!</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Pretty good! Do you think you can read more about a growth mindset to improve your score?</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Great work! Time to start setting growth goals!</p>"
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
