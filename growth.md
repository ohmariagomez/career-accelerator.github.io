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
### Helloo

<body>
<div id="container">
        <div id="start" class="btn">Start Goals Quiz!</div>
        <div id="quiz" style="display: none">
            <div id="question"></div>
            <div id="choices">
                <div class="choice" id="A" onclick="checkAnswer('A')"></div>
                <div class="choice" id="B" onclick="checkAnswer('B')"></div>
            </div>
        </div>
        <div id="scoreContainer" style="display: none"></div>
    </div>
    <script src="goals_quiz.js"></script>
</body>
