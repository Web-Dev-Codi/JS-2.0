const itemInput = document.getElementById('item-input');


const onKeyPress = e => {
    console.log('keypress');
};


const onKeyUp = e => {
    console.log('keyup');
};

const onKeyDown = e => {
    console.log('keydown');
};


// itemInput.addEventListener('keypress', onKeyPress)
// itemInput.addEventListener('keyup', onKeyUp);d
itemInput.addEventListener('keydown', onKeyDown);



