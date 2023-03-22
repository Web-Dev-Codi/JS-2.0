function insertAfter(newEl, existingEl) {
    
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);


}


const li = document.createElement('li');
li.textContent = 'Insert Me After!';



// Existing element to insert after
const firstItem = document.querySelector('li:first-child');


insertAfter(li, firstItem)