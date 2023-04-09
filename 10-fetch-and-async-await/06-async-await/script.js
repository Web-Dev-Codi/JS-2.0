const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Brian',
            age: 39
        });
    }, 1000);
});

async function getPromise() {
    // awaits when fetch is complete and successful
    const response = await promise;
    console.log(response)
}


// getPromise()

// Awaiting on fetch
// async function getUsers() {
//     // awaiting the promise return the pass to another variable called data
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // naming the response if the fetch is successful
//     const data = await response.json();
//     console.log(data)

// }

// getUsers()

// With Arrow functions
const getPosts = async () => {
    // awaiting the promise return the pass to another variable called data
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // naming the response if the fetch is successful
    const data = await response.json();
    console.log(data);

};

getPosts()