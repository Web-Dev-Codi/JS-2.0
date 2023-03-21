const div = document.createElement('div');

// adding attributes

div.className = 'I love the DOM';
div.id = 'Cool I set the id';


// Set other attributes

div.setAttribute('title', 'I Just Set The Title');


// Adding content
// innerText
// not optimal. 
// used to change text that is existing in an element already 
// div.innerText = 'I added content to the div';

// BETTER WHEN ADDING TEXT IS USING createTextNode then append to the element.

const text = document.createTextNode('Hello Brian. You are doing well. Dont Stop!');

// appendChild adds Text variable value to the node
div.appendChild(text)

// Add the textNode to the DOM and display it.

document.querySelector('ul').appendChild(div)

console.log(div);