// Parent Class
class Shape {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log('Shape Name: ' + this.name);
    }
}

// If we want to inherit a class we extend it
// Sub Class
class Rectangle extends Shape {
    constructor(name, width, height) {
        // Passing the arguments from Shape
        super(name)


        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        // Passing the arguments from Shape
        super(name)
        this.radius = radius
    }
    
    logName() {
        console.log('Circle Name: ' + this.name);
    }
}

const rect = new Rectangle('Rect 1', 20, 20)
const rect2 = new Circle('Rect 1', 20, 20)
console.log(rect);
rect.logName()
console.log(rect2);
const cir = new Circle('Cir 1', 30)
cir.logName()
