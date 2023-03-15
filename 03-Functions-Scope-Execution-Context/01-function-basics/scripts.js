function sayHello() {
    console.log('Hello World!')
}

sayHello(); // Invoke the function or activates the function to run.

// function Parameters

        // num1 and num2 are parameters
function add(num1, num2) {
    console.log(num1 + num2);
}

// The values use for the parameters in the add function are called arguments 5 and 10 are the arguments used here.

add(5, 10);


function subtract(num1, num2) {
    return num1 - num2;


    // Console.logs do not show after a return statment
    console.log(subtract)
}

// To see a return value console log like so
console.log(subtract(10, 7));

// or create a variable and then log

const result = subtract(10, 7);

console.log(result)
