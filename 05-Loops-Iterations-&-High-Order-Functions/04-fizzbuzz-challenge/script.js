
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
    // divisible by both 3 and 5
    if (i % 15 === 0) {
        console.log('FizzBuzz');
        // divisible by 3
    } else if (i % 3 === 0) {
        console.log('Fizz');
        // divisible by 5
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


