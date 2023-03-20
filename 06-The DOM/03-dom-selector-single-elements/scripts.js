// document.getElementById()

console.log(document.getElementById('app-title'));


// get element by ID

console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes

// document.getElementById('app-title').id = 'new-id-keep-going';

// Set attribute method

document.getElementById('app-title').title = 'Shopping List Bro'

document.getElementById('app-title').setAttribute('class', 'title');

// Using a variable to shorten document.getElementById() syntax

const title = document.getElementById('app-title');

console.log(title);


// Get/change content

console.log(title.textContent);
title.textContent = 'Hello, Dont Quit';
title.innerHTML = '<strong>Hello, Dont Quit</strong>';

// Change Styles

title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';


// document.querySelector()
// OLNY SELECTS SINGLE ELEMENTS


// By element Tag
console.log(document.querySelector('h1'));

// By Id
console.log(document.querySelector('#app-title'));

// By Class
console.log(document.querySelector('.container'));

// sudo selectors
console.log(document.querySelector('li:nth-child(2)').innerText);


const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerText = 'DONT GIVE UP';
secondItem.style.color = 'red';