const itemInput = document.getElementById('item-input');

// registers just the key press once
const onKeyPress = e => {
    console.log('keypress');
};

// registers when key press is released
const onKeyUp = e => {
    console.log('keyup');
};

// registers the key press even if held down
const onKeyDown = e => {
    // Key
    console.log(e.key);
    // KeyCode
    console.log(e.keyCode);

    // code
    console.log(e.code);
};


// itemInput.addEventListener('keypress', onKeyPress)
// itemInput.addEventListener('keyup', onKeyUp);d
itemInput.addEventListener('keydown', onKeyDown);



