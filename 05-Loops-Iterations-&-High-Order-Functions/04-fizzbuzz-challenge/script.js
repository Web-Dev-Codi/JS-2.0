
// let i = 1;



// while (i <= 100) {
//     console.log(i);
//     if (i % 3 === 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
//     if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
//     let j = 1;
//     while (j <= 100) {
//         if (j % 8 === 0) {
//             console.log('FizzBuzz');
//         } else {
//             console.log(j);
//         }
//         j++;
//     }
//     i++;
// }

// modular 3 and 5 and multiples of both three and five in a for statement

for (let i = 1; i <= 100; i++) {
    // Displays Fizz on multiples of 3
    if (i % 3 === 0) {
        console.log('Fizz');
        // Displays Buzz on multiples of 5
    } else if (i % 5 === 0) {
        console.log('Buzz');
        // multiples of both three and five 
    } else if (i % 8 === 0) {
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }
}


