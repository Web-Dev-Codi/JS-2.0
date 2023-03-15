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

x = person.name;  // Access the name key/property
x = person['age'] // Age proprty/key
x = person.address.country; 
x = person.hobbies;


person.name = 'Gülden';  // Changes the name in the heap. 
person['isAdmin'] = false;

delete person.age;  // Deletes age from the heap.

person.hasChildren = true;  // Adds hasChildren to the person object.


person.greet = function () {
    console.log(`Hello, my name is ${this.name}`)
}

person.greet(); // calling the function to initialize it

x = person;


console.log(x);