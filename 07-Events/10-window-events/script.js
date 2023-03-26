
// Works with  window.onload with querySelector in the function body
// window.onload = function () {
//     document.querySelector('h1').textContent = 'HELLO WORLD';
// }


//Another way with addEventListener
// window.addEventListener(
//     // load waits for the whole page to load
//     'load',
//     () => (document.querySelector('h1').textContent = 'HELLO WORLD')
// )


// window.addEventListener(
//     // Run as soon as the DOM is parsed
//     'DOMContentLoaded',
//     () => (document.querySelector('h1').textContent = 'HELLO WORLD')
// );

// Get the h1 to show innerHeight and width
window.addEventListener('resize', () => {
    document.querySelector('h1').textContent = `Resized to ${innerWidth} x ${innerHeight}`;
});



// Scroll Events

window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

    if (window.scrollY > 70) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});