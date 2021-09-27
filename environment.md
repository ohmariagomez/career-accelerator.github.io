---
title: Environment
button-title: Environment
layout: default
description: Once you have established a growth mindset, the next focus area is finding the right environment that will support this mindset. You will have to learn how to identify and create spaces that will encourage you to take risks and build a support system that acts as a safety net.
filename: environment
order: 3

github:
  is_project_page: false
--- 

## How supportive is your environment?
> Answer these 5 questions about your work environment to get a rating on how supportive it is.

{::nomarkdown}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz</title>
    <link rel="stylesheet" href="environment_tree_style.css">
</head>
<body>
    <div id="container">
        <div id="start" onClick= "beginQuiz()">Find out how supportive your environment is!</div>
        <div id="quiz" style="display: none"></div>
          <div id="question"></div>
          <div id="choices">
            <button class="choice" id="A" onclick="checkAnswer('A')"></button>
            <button class="choice" id="B" onclick="checkAnswer('B')"></button>
          </div>
          <div id="choiceResponse" style="display: none"></div>
          <div class="footer">
            <div class="progress" style="height: 100%;">
              <div
              class="progress-bar"
              style="width: 0%; height: 100%;"
              ></div>
             </div>
          </div>
        </div>
           
    </div>
    <script src="environment_tree.js"></script>
</body>
</html>
{:/}
