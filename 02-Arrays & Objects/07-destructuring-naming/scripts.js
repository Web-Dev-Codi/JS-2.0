const firstName = 'Brian';
const lastName = 'Cordisco';
const age = 39;

// if the key and value are the same you dont need to specify it like below
// const person = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
// };

// Do like this

const person = {
    firstName,
    lastName,
    age,
};

// console.log(person.age)


// Destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'Brian',

    }
};

const { id: todoId, title, user: { name } } = todo;


console.log(todoId);

// Objects use curly {}
// Arrays use brackets []

// Destructur Arrays

const numbers = [23, 45, 74, 564, 66, 55, 34];

const [first, second, ...rest] = numbers;

console.log(first, second, rest); // gives the first to indexs/elements/values of the numbers array.