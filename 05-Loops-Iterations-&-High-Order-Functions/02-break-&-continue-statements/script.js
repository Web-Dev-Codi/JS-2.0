// Break Statements allow breaking out of the loop

// for (let i = 0; i <= 20; i++) {
//     if (i === 15) {
//         console.log('Broke The Statement');
//         break;
//     }
//     console.log(i);
// }


// Continue
// Skips the rest of the code in a current iteration and continue to the next iteration
// Still continues throught the iteration

for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('We Aint Jinxing our Array with this Number. Nope');
        continue;
    }
    console.log(i);
}