// Mouse Events


// there is only one image on the page so this is ok
const logo = document.querySelector('img');

// Functions
// Using anonymous functions for cleaner syntax


// single click function
const onClick = () => console.log('CLICKED BRO')


// double click event function
const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== 'purple') {
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}

// Right Click event function
const onRightClick = () => console.log('right click event')

// Mouse down function
const onMouseDown = () => console.log('mouse down event')

const onMouseUp = () => console.log('mouse up event')

// Event Listeners
logo.addEventListener('click', onClick);

// Double click event listener 
logo.addEventListener('dblclick', onDoubleClick);

// right click event
logo.addEventListener('contextmenu', onRightClick);

// On mouse down
logo.addEventListener('mousedown', onMouseDown);

// ON mouse up
logo.addEventListener('mouseup', onMouseUp);





