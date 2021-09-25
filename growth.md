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

{::nomarkdown}

<body>
<div id="container">
        <div id="start" class="btn">Start Goals Quiz!</div>
        <div id="quiz" style="display: none">
            <div id="question"></div>
            <div id="choices">
                <div class="choice" id="A" onclick="checkAnswer('A')"></div>
                <div class="choice" id="B" onclick="checkAnswer('B')"></div>
                <div class="choice" id="C" onclick="checkAnswer('C')"></div>
            </div>
        </div>
        <div id="scoreContainer" style="display: none"></div>
    </div>
    <script src="goals_quiz.js"></script>
</body>

<svg xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 30 20"
onload="makeDraggable(evt)">
  <rect x="0" y="0" width="30" height="20" fill="#fafafa"/>
  <rect x="4" y="5" width="8" height="10" fill="#007bff"/>
  <rect x="18" y="5" width="8" height="10"   fill="#888"/>
  <svg width="300" height=300>
    <circle cx="150" cy="100" r="50" fill="linen"/>.draggable {
  cursor: move;
}
  
  function makeDraggable(evt) {
  var svg = evt.target;
  svg.addEventListener('mousedown', startDrag);
  svg.addEventListener('mousemove', drag);
  svg.addEventListener('mouseup', endDrag);
  svg.addEventListener('mouseleave', endDrag);
  
  var selectedElement = false;
  
  function startDrag(evt) {
  if (evt.target.classList.contains('draggable')) {
    selectedElement = evt.target;
      }
        }
  
  function drag(evt) {
  if (selectedElement) {
    evt.preventDefault();
    var x = parseFloat(selectedElement.getAttributeNS(null, "x"));
    selectedElement.setAttributeNS(null, "x", x + 0.1);
                         }
                          }
  
  function endDrag(evt) {
  selectedElement = null;
                          }
  }
 
</svg>
{:/}
