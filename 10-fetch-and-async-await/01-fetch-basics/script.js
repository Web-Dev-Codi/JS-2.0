

//standard promise syntax
fetch('./movies.json')  // the first then will be the resonse object
    .then(respone => {
        // returning using the json method
        return respone.json();
    }) // Using the return of the 1st .then and use it as an argument
    .then((data) => {
        // logging movies to the console
        console.log(data)
    })


    // shorter syntax
fetch('./movies.json')  
    .then(respone => respone.json())
    .then((data) => console.log(data));


// Fetching a text file
fetch('./test.txt')
    .then(respone => respone.text())
    .then((data) => console.log(data));


// Fetching from an api

fetch('https://api.github.com/users/web-dev-codi')  // the first then will be the resonse object
    .then(respone => {
        // returning using the json method
        return respone.json();
    }) // Using the return of the 1st .then and use it as an argument
    .then((data) => (document.querySelector('h1').textContent= data.login));