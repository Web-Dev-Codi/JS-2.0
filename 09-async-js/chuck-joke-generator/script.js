const el = document.getElementById('joke');
const btn = document.getElementById('joke-btn');


const getJoke = () => {
    //created xhr object
    const xhr = new XMLHttpRequest();

    const url = 'https://api.chucknorris.io/jokes/random'

    // Get request the url
    xhr.open('GET', url);

    xhr.onreadystatechange = function () {
        // Checking if the response is valid
        if (this.readyState === 4) {
            // response equals 200 proceed
            if (this.status === 200) {
                // storing respone in a variable
                const data = JSON.parse(this.response);
                console.log(data);
               // taking the parsed data and dispaying it in the DOM
                el.innerHTML = `<div>
                <p>${data.value}</p>
                </div>`
            } else {
                // message output for possible network error
                el.innerHTML = `<p>Networ Error</p>`
                el.style.color = 'red'
              }
        }
    };




    xhr.send();
};


btn.addEventListener('click', getJoke);