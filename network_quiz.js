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
const scoreMessage = document.getElementById("scoreMessage");
const quizAgain = document.getElementById("quizAgain");

// create our questions
let questions = [
    {
        question : "persona 1",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "Mentor & friend",
        choiceE: "Mentor & strategic partner",
        choiceF: "Friend & strategic partner",
        correct : "A"
    },
    {
        question : "persona 2",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "Mentor & friend",
        choiceE: "Mentor & strategic partner",
        choiceF: "Friend & strategic partner",
        correct : "A"
    },
    {
        question : "persona 3",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "Mentor & friend",
        choiceE: "Mentor & strategic partner",
        choiceF: "Friend & strategic partner",
        correct : "A"
    },
    {
        question : "persona 4",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "Mentor & friend",
        choiceE: "Mentor & strategic partner",
        choiceF: "Friend & strategic partner",
        correct : "A"
    },
    {
        question : "persona 5",
        choiceA : "Mentor",
        choiceB : "Friend",
        choiceC: "Strategic partner",
        choiceD: "Mentor & friend",
        choiceE: "Mentor & strategic partner",
        choiceF: "Friend & strategic partner",
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
