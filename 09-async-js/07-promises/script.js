// Creating a promise with the promise constuctor
// Setting the promise to this variable
const promise = new Promise((resolve, reject) => {
    // Doing some async task
    setTimeout(() => {
        console.log('Async task complete');
        // Call resolve
        resolve();
    }, 1000);
});

// Handling the promise

promise.then(() => [
    console.log('Promise  consumed')
]);

// Attaching .then right on the promise itself


// Handling Errors
const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        // mock true error
        let error = true;
        // if not error resolve
        if (!error) {
            resolve({ name: 'John', age: 30 });
        } else {
            // Message for the error
            reject('Bro you fucked up')
        }
    }, 1000);
});


getUser
    .then((user) => console.log(user))
    .catch((error) => console.log(error))
    .finally(() => console.log('The promise has been resolved  or rejected'))

console.log('Hello from global scope');