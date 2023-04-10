// Bringing the mioage in to manipulate
const image = document.querySelector('img')
// Include an  undefined variable of start first
let start;
let done = false;



// Step function
function step(timestamp) {
    // Condiditonal checking to start or be done
    if (start === undefined) {
        start = timestamp;
    }
    // Calculating the time passed
    const elapsed = timestamp - start;
    // Elapsed is greater then 2 seconds stop
    if (elapsed > 8000) {
        done = true;
    }
    // If 2 sseconds has passed return stopped
    if (done) {
        return;
    }
    // Transforming the image  across the page depending on the time elapsed
    image.style.transform = `translateX(${elapsed / 20}px) rotate(${elapsed / 20}deg)`

    console.log(elapsed);

    requestAnimationFrame(step);

}

requestAnimationFrame(step);




