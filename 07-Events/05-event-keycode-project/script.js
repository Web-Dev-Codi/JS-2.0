// Method 1
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = `
//     <div class="key">
//       ${e.key === ' ' ? 'Space' : e.key}
//       <small>e.key</small>
//     </div>

//     <div class="key">
//       ${e.keyCode}
//       <small>e.keyCode</small>
//     </div>

//     <div class="key">
//       ${e.code}
//       <small>e.code</small>
//     </div>
//   `;
// });

// Method 2
function showKeyCodes(e) {
    // Grabbing the ID
    const insert = document.getElementById('insert');
    // Set the innerHTML to empty string or object 
    insert.innerHTML = '';


    // Creating an Object for data to display in newly created elements
    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    };
  
    // for loop 
    for (let key in keyCodes) {
        // Element to be created
        const div = document.createElement('div');
        // Defining class
        div.className = 'key';
        // creating small element tag
        const small = document.createElement('small');
        // node to be created with key code values
        const keyText = document.createTextNode(key);
        // creating a node with values from keyText
        const valueText = document.createTextNode(keyCodes[key]);
        // must append to create the element we want to display
        small.appendChild(keyText);

        div.appendChild(valueText);
        div.appendChild(small);

        insert.appendChild(div);
    }
}


// window used since the keys will be pressed anywhere on the screen

window.addEventListener('keydown', showKeyCodes);