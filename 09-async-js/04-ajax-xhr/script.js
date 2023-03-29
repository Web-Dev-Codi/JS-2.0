// Initialize the http object with a variable
const xhr = new XMLHttpRequest();

// Takes 2 arguments ('request type', 'url or file')
// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/Web-Dev-Codi/repos');



// event handler onreadystatechange

xhr.onreadystatechange = function () {
//access the properties with the this keyword
    if (this.readyState === 4 && this.status === 200) {
        // Parsing the response since it stringified json
        // Storing the response data in a variable
        const data = JSON.parse(this.response)
        console.log(data)

        // foreach to display the data in the DOM
        data.forEach(repo => {
            // variable to store and display the response 
            const li = document.createElement('li')
            // element syntax that we wish to display
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`
            // appending the li to the element with id results
            document.querySelector('#results').appendChild(li)
        })
    }
};

// sending the request with send method

xhr.send();