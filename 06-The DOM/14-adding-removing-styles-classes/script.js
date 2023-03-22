// Adding Removing Styles & Classes

const text = document.querySelector('p')
const itemList = document.querySelector('.item-list')
const items = itemList.querySelectorAll('li');

function run() {

    console.log(itemList.classList)

    itemList.classList.forEach((c) => console.log(c))
    
    items.forEach((item, index) => {
        item.style.color = 'red'
    })

}

// Click event onclick
document.querySelector('button').onclick = run;