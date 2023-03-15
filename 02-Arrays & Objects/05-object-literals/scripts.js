let x;


const person = {
    name: 'Brian',
    age: 39,
    isAdmin: true,
    address: {
        street: '123 Main Street',
        city: 'Berlin',
        country: 'Germany'
    },
    hobbies: ['Web Development', 'Computers']
};

x = person.name;
x = person['age']
x = person.address.country;
x = person.hobbies;


person.name = 'Gülden';
person['isAdmin'] = false;


x = person;


console.log(x);