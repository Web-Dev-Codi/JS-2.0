// Non arrow function syntax

// function add(a, b) {
//     return a + b;
// }

// Arrow syntax

const add = (a, b) => {
    return a + b;
};

// Shorter arrow syntax
// Implicit return meaning we are not specifying the return keyword
const subtract = (a, b) => a - b;

// Shorter syntax when having only one param
const double = (a) => a * 100;

// With One param we dont need the parenthesis
const doublev2 = a => a * 100;

// returning an Object surround the curly braces {} with parenthesis ({})
const createObject = () => ({
    name: 'Brian'
})

console.log(add(3, 6));
console.log(subtract(6, 3));
console.log(double(6));
console.log(doublev2(6));
console.log(createObject())

