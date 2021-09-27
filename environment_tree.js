// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const scoreBlock = document.getElementById("scoreBlock");
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
let score = 0;

