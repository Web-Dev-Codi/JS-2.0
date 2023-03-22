// insertAdjacentElement Example
function insertElement() {
    // setting the element before filter so we need to bring in the element
    const filter = document.querySelector('.filter');
    // create the element
    const h1 = document.createElement('h1');
    // add content to created element
    h1.textContent = 'insertAdjacentElement';

    // to insert it. take in 2 arguments (position, the element to insurt)
    filter.insertAdjacentElement('beforebegin', h1);

}

// insertAdjacentText Example
function insertText() {
    const item = document.querySelector('li:first-child');

    // const li = document.createElement('li');
    // li.textContent = 'Love';

    item.insertAdjacentText('afterend', 'insertAdjacentText');

}

// insertAdjacentHTML Example
function insertHTML() {
    const item = document.querySelector('ul');

    const li = document.createElement('li');
    // li.textContent = 'working'

    item.insertAdjacentHTML('afterend', 'Working');
}

// insertBefore Example

function insertBeforeItem() { 
    const ul = document.querySelector('ul')

    const li = document.createElement('li');
    li.textContent = 'Insert Me Here'


    // selecting an item in the parent we want to insert before

    const thirdItem = document.querySelector('li:nth-child(3)')
    // call it on the parent
                    //Parent, selected element
    ul.insertBefore(li ,thirdItem);
}

// invoked functions
insertElement();

insertText();

insertHTML()

insertBeforeItem() 

/* 

<!-- beforebegin -->
// inserted above p or selected element

<p>
<!-- afterbegin -->
// directily inside of p or selected element

foo

<!-- beforeend -->
// after the content but still within p or slected element

</p>
<!-- afterend -->
// after the entire element

*/