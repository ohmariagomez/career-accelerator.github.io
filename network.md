---
title: Network
button-title: Network
description: Armed with the right mindset and environment, the last piece of this puzzle is to create and leverage a network that supports you, celebrates you, and most importantly creates new opportunities for you.
layout: default
filename: network
order: 4

github:
  is_project_page: false
--- 

## What is a network and why is it important?
There are certain people (such as a manager and team) that one has no say in being surrounded by. However, there is no need to limit exposure to this group. One's network and their role in the day-to-day is an intentional choice. This network will enable control of how one can thrive and grow in the environment created / provided and as a result, helping attendees beat the system.

## What types of people should one's network have?
1. Mentor
> This is usually someone you look up to. They could have your dream job, or be really good at a certain skill you want to learn. A mentor helps one grow and learn - they are your teachers after school.
2. Friend
> This is someone at work who you respect and can relate to. A friend is usually around the same level as you - but not necessarily on the same team. Friends will celebrate and encourage you, ensuring that you never feel alone.
3. Strategic partner
> These are people at work who are in a position that allows them to create opportunities for you, shield you from failure, and advocate for you. Strategic partners will play a key role in helping you achieve your goals and de-risking the environment you experiment in.

## Can you classify the following personas into one of the 3 network categories?

{::nomarkdown}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz</title>
    <link rel="stylesheet" href="network_style.css">
</head>
<body>
    <div id="container">
        <div id="start" onClick= "beginQuiz()">Meet our Personas!</div>
        <div id="quiz" style="display: none">
            <div id="question"></div>
            <div class = "img-div" id="quizImg"></div>
            <div id="choices">
                <button class="choice" id="A" onclick="checkAnswer('A')"></button>
                <button class="choice" id="B" onclick="checkAnswer('B')"></button>
                <button class="choice" id="C" onclick="checkAnswer('C')"></button>
                <button class="choice" id="D" onclick="checkAnswer('D')"></button>
            </div>
            <div id="progress"></div>
            <div id="choiceResponse" style="display: none"></div>
        </div>
        <div id="scoreContainer" style="display: none"></div>
        <div id="scoreMessage" style="display: none"></div>
        <div><button id="quizAgain" class="quizRestart" style="display: none" onClick="restartQuiz()">Try Again!</button></div>
    </div>
    <script src="network_quiz.js"></script>
</body>
</html>
{:/}
