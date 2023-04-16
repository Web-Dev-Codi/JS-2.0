class Person {
    constructor(firstName, lastName) {
        // adding underscore to signify to not directly use. Can have getters with same name
        this._firstName = firstName;
        this._lastName = lastName;
    }


    // using get 
    get firstName() {
        // to uppercase the first letter of name
        return this.capitalizeFirst(this._firstName)
    }
    get lastName() {
        // to uppercase the first letter of name
        return this.capitalizeFirst(this._lastName)
    }

    // setters....always takes in a single attribute. here its value. Also performs its task automatically
    set firstName(value) {
        this._firstName = this.capitalizeFirst(value)
    }

    set lastName(value) {
        this._lastName = this.capitalizeFirst(value)
    }
    // use function to cut down on code repetition
    capitalizeFirst(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

}

const person2 = new Person('brian', 'cordisco');

console.log(person2.firstName ,person2.lastName);


