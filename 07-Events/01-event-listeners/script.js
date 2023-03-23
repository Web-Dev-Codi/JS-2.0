// First Create variable storing the element meant manipulate
// Grabbing the ID of the element is best approch here

const clearBtn = document.querySelector('#clear')

// add eventListener
// TAKES IN 2 ARGUMENTS     (Type of EVENT, CALLBACK FUNCTION)

// Passing in a function as second argument
function onClear() {
    const clear = document.querySelector('#item-list');
    clear.remove();
}

clearBtn.addEventListener('click', onClear);
