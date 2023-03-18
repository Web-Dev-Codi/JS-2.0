// IIFE (Immediately Invoked Function Expression)
// Containing the const user in the function code block makes it a block scope function and does NOT have global scope properties.

(function () {
    const user = 'Brian';
    console.log(user);  
    const hello = () => console.log('Hello from the IIFE')
    hello();
})();

// Adding parameters
// passing the name argument in the () at the end of the expression 
(function (name) {
    console.log('Hello ' + name)
})('Gülden');  


// Named IIFE

(function hello() {
    console.log(hello);
})();

