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
### Hello

{::nomarkdown}
<svg width="300" height=300>
    <circle cx="150" cy="100" r="50" fill="linen"/>.draggable {
  cursor: move;
}
  xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 30 20"
     onload="makeDraggable(evt)"
  
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
