if (true) {
    console.log('This is true')
}

if (false) {
    console.log('This is NOT true')
}

const x = 10;
const y = 5;

if (x === y) {
    console.log(`${x} is equal to ${y}`)
} else {
    console.log(`${x} is NOT equal to ${y}`);
}

// Showing scope of variable z scope is contained and returns not defined outside of the if statements scope
if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`)
}

console.log(z)



// Using the var keyword allows the scope of variable z to be global
if (x !== y) {
    var z = 20;
    console.log(`${z} is 20`)
}



// Short hand if statement

if (x >= y) console.log(`${x} is greater the or equal to ${y}`),
            console.log('This is true');
 else console.log('This is false')