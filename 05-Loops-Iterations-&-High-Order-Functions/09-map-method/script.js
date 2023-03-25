// Map Method


//
// const doubleNumbers = numbers.map(number => number * 2);

// console.log(doubleNumbers);



const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1934, end: 2014 },
    { name: 'Company Three', category: 'Auto', start: 1981, end: 1999 },
    { name: 'Company Four', category: 'Retail', start: 1981, end: 2002 },
    { name: 'Company Five', category: 'Technology', start: 1981, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1900, end: 2001 },
    { name: 'Company Seven', category: 'Auto', start: 1907, end: 2023 },
    { name: 'Company Eight', category: 'Technology', start: 1983, end: 2042 },
    { name: 'Company Nine', category: 'Retail', start: 1982, end: 2010 },
];

// Array of objects with the name and length of each company in years

const yearsLong = companies.map(items => {
    return {
        name: items.name,
        Operational: `${items.end - items.start} years`,
    };
});

// console.log(yearsLong)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chaning map methods together
const squareAndDouble = numbers
// Computes the ² the numbers array
.map(number => Math.sqrt(number))
// This second line take in the computated value that you can store for another operation
// here we are multipying it
.map(sgrt => sgrt * 2);

// console.log(squareAndDouble);


// Long way to chain maps

const squareAndDoubleTriple = numbers
.map(function (number) {
    return Math.sqrt(number);
})
.map(function (sgrt) {
    return sgrt * 2;
})
.map(function (sgrtDoubled) {
    return sgrtDoubled * 3;
});

// console.log(squareAndDoubleTriple);


// Chaining different methods

const evenDouble = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2);

console.log(evenDouble);