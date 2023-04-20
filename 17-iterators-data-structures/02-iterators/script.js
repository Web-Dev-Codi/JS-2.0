// const app = {
//     // Must have an index variable 
//     nextIndex: 0,
//     // Our array to iterate over 
//     teams: ['Red Sox', 'Phillies', 'Mets', 'Yankees', 'Astros'],
//     next() {
//         if (this.nextIndex >= this.teams.length) {
//             // return needs to be an object
//             return { done: true };
//         }

//         const returnValue = { value: this.teams[this.nextIndex], done: false };
//         this.nextIndex++;
//         return returnValue;
//     },
// };

// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

const app = {
    teams: ['Red Sox', 'Phillies', 'Mets', 'Yankees', 'Astros'],
    // Creating the iterator using a function  that returns next() with iteration using ternary as the return 
    [Symbol.iterator]: function () {
        let nextIndex = 0;
        return {
            next: () => {
                return nextIndex < this.teams.length ? { value: this.teams[nextIndex++], done: false } : { done: true };
            }
        };
    }
};


const iterator = app[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// for (const team of app) {
//     console.log(team)
// }

