// replacing the first li in the ul

function replaceFirsElement() {
    //Grab the element with querySlector
    const firstItem = document.querySelector('li:first-child')
    // create the element you want to introduce to the DOM
    const li = document.createElement('li')
    // Giving the element content
    li.textContent = 'replace First MFer'

    // replacing the element with one created
    firstItem.replaceWith(li)

}


function replaceSecondItem() {
    //Grab the element with querySlector
    const secondItem = document.querySelector('li:nth-child(2)');
    // create the element to be added
    const li = document.createElement('li');
    // adding the content to the element created
    li.innerText = 'Second Item MFer'
 // replacing the element with created one
    // secondItem.replaceWith(li)


    secondItem.outerHTML= '<li>Another Way</li>'


}

// change all of the li's in the ul.

function changeAllLi() {

    // Select the element with querySelector
    const lis = document.querySelectorAll('li');

    // using forEach to iterate over the ul's eas li's since li's are technically an element within an array
    // lis.forEach((item, index) => {
        
    //    item.outerHTML = '<li>WOW</li>'
    // })

    lis.forEach((item) => (item.outerHTML = '<li>WOW SHORT</li>'))
   
}

// Replacing the header

function replaceChildHeading() {
    // grabbing the parent container 
    const header = document.querySelector('header');
    // grabbing the h1 inside parent container
    const h1 = document.querySelector('h1');
    // creating the element we are using to replace 
    const h2 = document.createElement('h2');
    // assigning an id to our created element
    h2.id = 'app-title';
    // adding content
    h2.textContent = 'Shopping List V2';
    // using replaceChild to overwrite the current h1 element
    header.replaceChild(h2,h1)


}


// Don'T forget to invoke to wake the function up.
// replaceFirsElement();

// replaceSecondItem();

// changeAllLi();

replaceChildHeading();