---
title: Growth Mindset
button-title: Growth
description: It is important to set goals with a growth mindset as opposed to just checking the boxes and climbing the ladder
layout: default
filename: growth
order: 2

github:
  is_project_page: false
--- 
### Can you classify which goals are **growth mindset** vs. **checklist** oriented?

{::nomarkdown}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz</title>
    <link rel="stylesheet" href="goals_quiz_style.css">
</head>
<body>
    <div id="container">
        <div id="start"><button class="start-btn" onClick= "beginQuiz()">Start Goals Quiz!!</button></div>
        <div id="quiz" style="display: none">
            <div id="question"></div>
            <div id="qImg"></div>
            <div id="choices">
                <button class="choice" id="A" onclick="checkAnswer('A')"></button>
                <button class="choice" id="B" onclick="checkAnswer('B')"></button>
            </div>
            <div id="timer">
                <div id="counter"></div>
                <div id="btimeGauge"></div>
                <div id="timeGauge"></div>
            </div>
            <div id="progress"></div>
            <div id="choiceResponse" style="display: none"></div>
        </div>
        <div id="scoreContainer" style="display: none"></div>
    </div>
    <script src="goals_quiz.js"></script>
</body>
</html>
{:/}
