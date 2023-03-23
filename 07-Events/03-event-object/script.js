// Event Objects
const logo = document.querySelector('img');

// client X and Y

function onClick(e) {
    console.log(e.screenX);
    console.log(e.screenY);
 }

logo.addEventListener('click', onClick)







