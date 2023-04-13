
// 
const strLit = 'A String Using literal';
// Using string constructor function
const strObj = new String('Using Constructor Object');


// Boxing is when a literal converts to an object
console.log(strLit.toUpperCase());


// Is when and object is transformed into a literal
console.log(strObj.valueOf(), typeof strObj.valueOf());



const funcLit = function (x) {
    return x * x;
};

console.log(funcLit, typeof funcLit);