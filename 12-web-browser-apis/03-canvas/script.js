const canvas = document.getElementById('my-canvas');

// Creating context object
const ctx = canvas.getContext('2d');

// Simple rectangle
//    fillstyle is if you want to fill something in
ctx.fillStyle = 'green';
// takes in (x, y, width, height)
ctx.fillRect(10, 10, 150, 100);


// Draw A circle
ctx.fillStyle = 'red';
//       (x,     y,  radius, start, angle ,end angle)
ctx.arc(300, 300, 100, 0, Math.PI * 2);
// Display the shape to the DOM
ctx.fill();


// Drawing lines
ctx.beginPath();
// Use Stroke style to en able a line draw
ctx.strokeStyle = 'orange';
// line width
ctx.lineWidth = 5;
// Movine too but doesnt draw anything
ctx.moveTo(10, 10);
// Draws the line
//          x  ,  y 
ctx.lineTo(300, 300);
// Calling stroke to draw the line to the page
ctx.stroke();


// Draw text
// Define size and font family
ctx.font = '30px Arial';
// New Line width since we want it specific to this text/word
ctx.lineWidth = 2;
// color of the font
ctx.fillStyle = 'blue';
// Strokestyle conrols the color of the outline text
ctx.strokeStyle = 'blue';
// Location of the font
//         ('text we want', x,  y,  width)
ctx.fillText('I am text', 300, 100, 300);

// Outline Text
ctx.strokeText('I am text', 300, 500, 300);


// Pulling/Drawing images

// Select the element
const image = document.querySelector('img')
// Style
image.style.display = 'none';

// Waiting for load event
//                                               ( element  x    y  width height)
image.addEventListener('load', () => ctx.drawImage(image, 250, 250, 100, 100))