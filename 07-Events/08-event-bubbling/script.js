const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

// event bubbling

button.addEventListener('click', () => {
    alert('CLICKED ME BROSIPH');
});

// div is the parent of button. triggered by the click event
div.addEventListener('click', () => {
    alert('DIV WAS CLICKED');
});

// form is the parent container of all the inputs so all 3 fire off
form.addEventListener('click', () => {
    alert('FORM WAS CLICKED');
});


