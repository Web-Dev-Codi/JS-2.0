// for of loop


// Looping arrays
const items = ['Chair', 'Book', 'Dog', 'Cat', 'Computer'];
const users = [
    {
        name: 'Brian'
    },
    {
        name: 'Gülden'
    },
    {
        name: 'Neby'
    },
    {
        name: 'Astra'
    },
];

for (const user of users) {
    console.log(user.name);
}


// Loop over strings
const str = 'If I do not quit I will succeed';

for (const letter of str) {
    console.log(letter);
}


// Loop over Maps
const map = new Map();
map.set('name', 'Gülden');
map.set('age', '34');


// Using [key, value] of map

for (const [key, value] of map) {
    console.log(key, value)
}