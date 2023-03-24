// for ([initialExpresstion]; [conditionExpresstion]; [incrementExpresstion]);
// statement;

// INITIAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until condition is false.
// INCREMENT EXPRESSION - Expression that will execute after each iteration of the loop. Usually increments the variable.
// STATEMENT - Code that will be executed each time the loops is run. To execute a 'block' of code, use the {} syntax.


//    (variable , condition, incrimination)A



// Using if statement
// for (let i = 0; i <= 10; i++) {
//     if (i === 7) {
//         // Display message in console
//         console.log('Good Lucky Number 7 Dude')
//     } else {
//         console.log('Number ' + i);
//     }
// }


// Nested loops
// Use j for most second increments
// for (let i = 1; i <= 10; i++) {
//     // first increment
//     console.log('Number ' + i);
//     // second increment
//     for (let j = 1; j <= 10; j++)
//         // joining first and second increments into one to display in the console.
//         console.log(`${i} * ${j} = ${i * j}`);
// }

// Loop through an array
const names = ['Brian', 'Gülden', 'Neby', 'Astra', 'My Family', 'Love', 'Happiness'];

//                 array length with .length
for (let i = 0; i < names.length; i++) {
    
    if (names[i] === 'Gülden') {
        console.log( names[i] + ' is the best')
    } else {
        console.log(names[i]);
    }
    
}