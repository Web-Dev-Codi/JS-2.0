// filter method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Create a variable since its going to return something

//Short Syntax
const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers);


const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1934, end: 2014 },
    { name: 'Company Three', category: 'Auto', start: 1981, end: 1999 },
    { name: 'Company Four', category: 'Retail', start: 1981, end: 2002 },
    { name: 'Company Five', category: 'Technology', start: 1981, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1900, end: 1081 },
    { name: 'Company Seven', category: 'Auto', start: 1907, end: 2023},
    { name: 'Company Eight', category: 'Technology', start: 1983, end: 2042},
    { name: 'Company Nine', category: 'Retail', start: 1982, end: 2010 },
];

// Get Retail companies 
const onlyRetail = companies.filter(company => company.category === 'Retail');
// console.log(onlyRetail);


// Get company years started 1980 ended before 2004

const years = companies.filter(open => open.start > 1980 && open.end < 2004);

// console.log(years);

// open ten years or more
const tenYears = companies.filter(open => open.end - open.start >= 10
    );

console.log(tenYears);