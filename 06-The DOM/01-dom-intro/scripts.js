// console.log(window)



// Shows the body tag
console.log(document.body)

// Show inner text

console.log(document.body.innerText);


// Get Links

console.log(document.links[0]);

// Methods on the DOM

document.write(`<h1>the write method</h1>`);


// Grabbing element by ID

console.log(document.getElementById('main'));

// PLacing in a variable

const main = document.getElementById('main');

// main.innerHTML = 'Grabbing main thats contained in a variable and displaying it'

// Using querySelector

document.querySelector('#main h1').innerText = 'Keep Working Hard You Got This'  // This grabs the main ID and the H1 inside