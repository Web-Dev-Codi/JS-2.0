// Removing elements

function removeClearButton() {
    // streight forward removal
    // document.querySelector('#clear').remove();

    // could also create variable 
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();

}

// Removing the first child li in the ul

function removeFirstItem() {
    // grab the parent element first
    const ul = document.querySelector('ul')
    // the element in the parent to be removed
    const li = document.querySelector('li:first-child');
    
    // removing the element
    ul.removeChild(li)

}

// Removing item using it index

function removeFirstItem(itemNumber) {
        // grabbing the parent first
    const ul = document.querySelector('ul');
        // grabbing the li in the parent of ul
        // Use Backticks to inject JS as a param
    const li = document.querySelector(`li:nth-Child(${itemNumber})`)

    // invoking the removal of the element li in the ul parent element
    ul.removeChild(li)
}


// Removing item using it index

function removeFirstItem2(itemNumber) {
    // grabbing the parent first
    const ul = document.querySelector('ul');
    // grabbing the li in the parent of ul
    // Use Backticks to inject JS as a param. Here we are using querySelector all to gain
    // access the the li since node can be considered arrays if containing multiple children
    const li = document.querySelectorAll('li')[itemNumber];

    // invoking the removal of the element li in the ul parent element
    ul.removeChild(li);
}


// Using remove() instead of removeChild() this way we dont need to select the parent element first

function removeItem3(itemNumber) {

    // Grabbing the element to we want to modifiy 
    const li = document.querySelectorAll('li');

    // - 1 since the all the li's are selected and is considered an array
    // and we know array start with index 0
    
    li[itemNumber - 1].remove();


}

// Short version for more conciseness 

const removeItem4 = (itemNumber) =>
    document.querySelectorAll('li')[itemNumber - 1].remove()


removeItem4(2);


// removeItem3(1);
// removeFirstItem(1)
// removeFirstItem2(1)
// removeClearButton()
// removeFirstItem();

