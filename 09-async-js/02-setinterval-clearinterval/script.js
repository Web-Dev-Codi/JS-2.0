// // Takes in a function or named function

// //                                         /Time between the callback runs/
// const intervalID = setInterval(myCallback, 4000, 'Third Argument');

//                 // Third argument passed
// function myCallback(a) {
//     console.log(a, Date.now());
// }

// variable for the id
let intervalID;

//
function startChange() {
    if (!intervalID) {
        // Change color of background
        intervalID = setInterval(changeRandomColor, 1000);
    }
}

// function changeColor() {
//     if (document.body.style.backgroundColor !== 'black') {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// }

// Function  for random color change 
function changeRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    document.body.style.backgroundColor = `#${randomColor}`
}



// When button stop is click fires this event
function stopChange() {
    // Passing in variable 
    clearInterval(intervalID);
    // Seting interval to null to activate the start button to work again since it would return undefined without the reset.
    intervalID = undefined;
};


document.getElementById('start').addEventListener('click', startChange);


document.getElementById('stop').addEventListener('click', stopChange);