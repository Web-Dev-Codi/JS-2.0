// variable for the generate button
const btn = document.getElementById('generate');


function randomUser() {
    showSpinner()
    fetch('https://randomuser.me/api/')
        // Response to json
        .then(response => response.json())
        // Taking the response and calling it data then logging it
        .then((data) => { // Opening code block to handle the repsonse
            hideSpinner()
            displayUser(data.results[0]);
            console.log(data.results[0])
        });
}



function displayUser(user) {
    const userDisplay = document.querySelector('#user')
    console.log(user.gender)
    // Changes the BG color depending on gender
    if (user.gender === 'female') {
        document.body.style.backgroundColor = 'purple';
    } else {
        document.body.style.backgroundColor = 'blue';
    }

    // Setting the user data to the DOM
    userDisplay.innerHTML = `  <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src=${user.picture.large} 
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last} 
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.state}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.registered.age}</p>
            </div>
          </div>
        </div>`
}

function showSpinner() {
    document.querySelector('.spinner').style.display = 'block'
}
function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none'
}

// the on click for random user function
btn.addEventListener('click', randomUser);