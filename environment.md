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

{::nomarkdown}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz</title>
    <link rel="stylesheet" href="environment_tree_style.css">
</head>
<body>
    <div class="container">
        <div id="start"><button class="start-btn" onClick= "beginQuiz()">Find out how supportive your environment is!</button></div>
        <div id="quiz" style="display: none"></div>
          <div id="choices">
            <button id="choiceA" onclick="check('A')"></button>
            <button id="choiceB" onclick="check('B')"></button>
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
