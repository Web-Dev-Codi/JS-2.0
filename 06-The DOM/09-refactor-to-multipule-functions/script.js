// Taking the single function from last module and cutting it down into smaller more usable functions
function createNewItem(item) {
    const li = document.createElement('li');
    // 
    li.appendChild(document.createTextNode(item));

    // storing the returned of button and passing in the classes
    const button = createButton('remove-item btn-link text-red');


    
    li.appendChild(button);

    //appends the list item to the ul
    document.querySelector('.items').appendChild(li);

}



function createButton(classes) {
    const button = document.createElement('button');
    // add class to the element

    // classes passed in as argument
    button.className = classes;

    // storing the return of icon and adding the classes
    const icon = createIcon('fa-solid fa-xmark');

    // passing the icon element inside the button by appending
    button.appendChild(icon);

    // return the button
    return button;
}


function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;

    // returning icon and creating a variable with the return uptop
    return icon;
}


// invoking the function to add the content to the ul element in THE DOM
createNewItem('Good Work')

createNewItem('Second Add')