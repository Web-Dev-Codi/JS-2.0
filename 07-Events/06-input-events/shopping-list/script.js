// Grabbing the inputs by id
// Good Practice to use ID'S when working with forms


const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkBoxInput = document.getElementById('checkbox');
const filterInput = document.getElementById('filter');
const heading = document.querySelector('h1');


function onInput(e) {
    // Using taget.value to update the input 
    heading.textContent = e.target.value;
}

function onPriority(e) {
    console.log(e.target.value);
}

function onCheck(e) {
    // created variable to store the event
    const isChecked = e.target.checked;
    // passing event value to the heading via ternery operator for T or F
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFilter(e) {
    console.log(e.target.value);
}


// Creating the style for when the input is selected
function onFocus() {
    console.log('Input Focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';
}

// Display in console and no style since the input is out of focus
function onBlur(e) {

    console.log('Input is NOT Focused');
    itemInput.style.outlineStyle = 'none';
}



itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onPriority);
checkBoxInput.addEventListener('input', onCheck);
filterInput.addEventListener('input', onFilter);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
