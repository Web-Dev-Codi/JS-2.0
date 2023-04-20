const sym = Symbol();
console.log(`👌 ~ sym:`, sym);
const sym1 = Symbol('foo');
console.log(`👌 ~ sym1:`, sym1);
const sym2 = Symbol('bar');
console.log(`👌 ~ sym2:`, sym2);


console.log(Symbol('sym') === Symbol('sym'));

// Demo unique ID identifier
const user = {
    // Id is now unique to this symbol, and can be used for a key 
    [Symbol('id')]: 1,
    name: 'Brian',
    email: 'brian@email.com'
};

//Not accessible when using Symbol
console.log(user[Symbol('id')]);


// Symbol is not enumerable
console.log(Object.keys(user));  // Keys
console.log(Object.values(user)); // Values

// getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user));