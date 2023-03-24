// While Do While


//Must initialize the variable outside of the while loop



// while (i <= 20) {
//     console.log('Number ' + i);
//     // Remember to increment or resulting in infinite loop.
//     i++;
// }


// Loop over Arrays


// const arr = [10, 20, 30, 40, 50];

// while (i < arr.length) {
//     console.log(arr[i]);
//     // DONT FORGET THE INCREMENT.
//     i++;
// }

// Nesting While Loops
// let i = 1;


// while (i <= 5) {
//     console.log('Number ' + i);

//     // Variable for nested loop
//     let j = 1;
//     // Nested while loop
//     while (j <= 5) {
//         console.log(`${i} * ${j} = ${i * j}`);
//         // REMEMBER THE INCREMENT
//         j++;
//     }
//     // i++ in the main code block for the first While loop iteration
//     i++;
// }


// Do while loop

let i = 21;

do {
    console.log('Number ' + i)
    // REMEMBER TO ADD INCREMENT i++
    i++
} while (i <= 20);