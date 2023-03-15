let x;

const todo = new Object();

// Building an object using dot notation to assign key, value pairs

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

const person = {
    address: {
        coords: {
            lat: 42.983,
            long: -43.9264
        },
    },
};

// Accesses the lat object in the person array

x = person.address.coords.lat;

// Demo how to display 2 arrays in one object.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };


const obj3 = { ...obj1, ...obj2 }; // display both arrays in one object


const obj4 = Object.assign({}, obj1, obj2) // same as spread operator using older Object.assign method.


const todos = [
    {
        id: 1,
        name: 'Buy Milk'
    },
    {
        id: 2,
        name: 'Pick up kids from school'
    },
    {
        id: 3,
        name: 'Take out trash'
    },
]

x = todos[0].name;  // displays the name in the todos object

x = Object.keys(todo);  // display the keys in the todo object

x = Object.keys(todo).length;  // display the length of the array.

x = Object.values(todo) // Displays the array with just the values


x = Object.entries(todo); // Displays the array key value pairs

x = todo.hasOwnProperty('name') // Displays boolean if matches a value key/value

console.log(x);

