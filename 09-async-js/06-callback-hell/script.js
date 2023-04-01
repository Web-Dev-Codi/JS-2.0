function getData(endpoint, cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
        // checking if status is 200
        if (this.readyState === 4 && this.status === 200) {
            cb(JSON.parse(this.responseText));
            
        }
    };
    
    // Generates random timeouts
    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
}

getData('./movies.json', (data) => {
    console.log(data)
    getData('./actors.json', (data) => {
        console.log(data);
        getData('./directors.json', (data) => {
            console.log(data);
        }
        );
    }
    );
});



// getData('./actors.json');
// getData('./directors.json');