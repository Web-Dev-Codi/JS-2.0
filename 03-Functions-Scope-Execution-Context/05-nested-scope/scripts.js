// Function declaration
console.log(addDollarSign(100));
function addDollarSign(value) {
    return '$' + value;
}


// Function expression
console.log(addPlusSign(100));
const addPlusSign = function (value) {
    return '+' + value;
};

// Hoisting works only with function declarations