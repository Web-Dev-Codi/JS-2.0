// grabbing ALL the li
const listItems = document.querySelectorAll('li');
// WE WANT TO GRAB THE PARENT ELEMENT
const list = document.querySelector('ul');

// MORE EFFICIANT WAY
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});





// NOT EFFICIANT
// listItems.forEach(item => {
//     // Adding event for the click event anmd removing li when clicked
//     item.addEventListener('click', (e) => {
//         e.target.remove(item);
//     });
// });




