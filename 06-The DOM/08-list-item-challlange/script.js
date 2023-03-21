// Quick and dirty
function createListItem(item) {
    // using createElement node has to be ised here to append.
    const li = document.createElement('li');

    li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
    `;

    document.querySelector('.items').appendChild(li);
}

// Clean and Performant

function createNewItem(item) {
    const li = document.createElement('li');
    // 
    li.appendChild(document.createTextNode(item))

    const button = document.createElement('button')
    // add class to the element
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-xmark'
    // passing the icon element inside the button by appending
    button.appendChild(icon);
    li.appendChild(button)

    document.querySelector('.items').appendChild(li)

}


createListItem('Eggs');
createNewItem('Hard Work')