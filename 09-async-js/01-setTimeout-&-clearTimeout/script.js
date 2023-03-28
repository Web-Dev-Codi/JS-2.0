// // Global scope is run first the you see setTimeout 3 seconds later



// // Using the named function as the first argument
// setTimeout(changeText, 2000)


// Works with named functions aswell
function changeText() {
    document.querySelector('h1').textContent = 'Hello from Callback';
}

// Waits 3 seconds to change the text after initial page reload
const timerId = setTimeout(changeText, 3000);


// to clear timeout we will put it on an event on a button
document.querySelector('#cancel').addEventListener('click', () => {
    console.log(`👌 ~ timerId:`, timerId);
    clearTimeout(timerId);
    console.log('Timer Cancelled')
});
