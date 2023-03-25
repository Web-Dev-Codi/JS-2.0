const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//                          (accumulator, currentValue)   Initial Value.
const addArray = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(addArray);



// long version

const addArrayv2 = numbers.reduce(function (accumulate, current) {
    return accumulate + current;
    // 0 is the initial value
}, 0);


console.log(addArrayv2);


// using a for loop
const sum = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc = acc + cur;
    }
    return acc;
};

console.log(sum());

// Shopping Cart 

const cart = [
    { id: 1, name: 'Sony Playstation', price: 599 },
    { id: 2, name: 'Gucci Bag', price: 1200 },
    { id: 3, name: 'Prada Shirt', price: 599 },
];

// Adding the Total prices

const cartRecude = cart.reduce((acc, product) => acc + product.price , 0)

console.log(cartRecude)