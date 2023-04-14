// Parent Class
class Shape {
    constructor(name) {
        this.name = name;
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

const rect = new Rectangle('Rect 1', 20, 20)
console.log(`👌 ~ rect:`, rect);
