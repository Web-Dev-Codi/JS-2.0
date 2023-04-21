// create variable for path
const path = require('path');

// Variable to hold a file path. This deals with the actual path
const myFilePath = 'subfolder/anotherfolder/index.js';

// basename() where we pass in our variable
const base1 = path.basename(myFilePath);
// if you desire no extention name add second argument with the extention name
const base2 = path.basename(myFilePath, '.js');

// console.log(base1)

// console.log(base2);


// extname
const ext = path.extname(myFilePath);
console.log(ext);