const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // The url as a variable to pass to fetch

function toDos() { // fetching the todos with a limit of 10 per page
    fetch(apiUrl + '?_limit=10')
        .then(res => res.json()) // Gives a list of 10 todos
        .then(data => { // iterating through the json sent back nameing it data passing in the  addTodoTodoDOM function
            data.forEach((todo) => addTodoToDOM(todo));
        });
}

function addTodoToDOM(todo) {
    // The element we want to create
    const div = document.createElement('div');
    div.classList.add('todo');
    // append div with textNode and pass title to be displayed
    div.appendChild(document.createTextNode(todo.title));
    // giving div an attribiute of id 
    div.setAttribute('data-id', todo.id);

    // adding a class to the div
    if (todo.completed) {
        div.classList.add('done');
    }
    document.getElementById('todo-list').appendChild(div);
}

function createTodo(e) {
    e.preventDefault();
    // Creating variable to store the typed data from thr
    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false
    };

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo), // Have to stingifiy since we are passing to server
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => addTodoToDOM(data)); // Displays the data to the dom
}


function toggleCompleted(e) {
    if (e.target.classList.contains('todo')) {
        e.target.classList.toggle('done');

        updateTodo(e.target.dataset.id , e.target.classList.contains('done'));
    }
}

function updateTodo(id, completed) {
    console.log(id, completed);
}

const init = () => {
    document.addEventListener('DOMContentLoaded', toDos);
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
    // Listener for the toggle of completion
    document.querySelector('#todo-list').addEventListener('click', toggleCompleted);


};

init();