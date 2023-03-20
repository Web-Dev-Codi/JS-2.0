let output;
 

// Get child elements

const parent = document.querySelector('.parent');

output = parent.children;

// Access it the parent element like an array with bracket notation
output = parent.children[1].innerText;

// Changing the inner text of the node and style to red
parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';


output = parent.children[1];
output = parent.children[1];

// Grabbing the first child in the parent element

parent.firstElementChild.innerText = 'Child One'
parent.lastElementChild.innerText = 'Child Three'

// Get parent elements from the child

const child = document.querySelector('.child')

output = child.parentElement;
child.parentElement.style.border = '1px solid red'
child.parentElement.style.padding = '10px'


// sibling elements

const secondItem = document.querySelector('.child:nth-child(2)')

output = secondItem;

// selecting the next element/sibling
output = secondItem.nextElementSibling;


output = secondItem.nextElementSibling.style.color = 'lime';


output = secondItem.previousElementSibling.style.color = 'orange';

console.log(output)