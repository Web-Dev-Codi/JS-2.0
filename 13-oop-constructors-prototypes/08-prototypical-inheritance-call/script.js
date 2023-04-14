function Shape(name) {
    this.name = name;
}


Shape.prototype.logName = function () {
    console.log(`Shape Name: ${this.name}`);
};


function Rectangle(name, height, width) {
    // Using the call method to allow the "this" meaning this object
    Shape.call(this, name);

    this.width = width;
    this.height = height;
}


// Inherits Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype);


function Circle(name, radius) {
    // Using the call method to allow the "this" meaning this object
    Shape.call(this, name);

    this.radius = radius;
}

//
Circle.prototype = Object.create(Shape.prototype);

// Set prototype constructors
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.constructor = Circle;

const rect = new Rectangle('Rectangle One', 100, 200);

const circ = new Circle('Circle One', 300);

// console.log(rect);
// console.log(circ);


rect.logName();
circ.logName();

