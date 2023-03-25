

function onSubmit(e) {
    // prevent page reload
    e.preventDefault();
    // .value at end to hold in memory
    const item = document.getElementById('item-input').value;
    // the priority input field
    const priority = document.getElementById('priority-input').value;

    // form validation
    if (item === '' || priority === '0') {
        alert('CANT ADD IF YOU DIDNT FILL ME OUT DUDE');
        // this stops the function from firing since there is nothing to submit
        return;
    }
    console.log(item, priority);
}


const form = document.getElementById('item-form');

function onSubmit2(e) {
    e.preventDefault();
    // grabbing the global variable form and passing it in the new FormData()
    const formData = new FormData(form);

    const entries = formData.entries();
    console.log(entries);

    // since entries is an iterable use for of LOOP
    for (let entry of entries) {
            console.log(entry)
        }
    
}

form.addEventListener('submit', onSubmit2);


