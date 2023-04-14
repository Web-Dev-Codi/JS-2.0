class Rectangle {
  // Take in perameters just like constructor functions
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  // adding methods and we have acces to the this keyword
  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.width + this.height)
  }

  isSquare() {
    return this.width === this.height
  }

//  Using this keyword to access other methods
  logArea() {
    console.log('Rectangle Area ' + this.area())
  }
  

}

const square = new Rectangle('Square', 20, 20);
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());

const notSqaure = new Rectangle('Not Square', 21, 20);
console.log(`👌 ~ notSqaure:`, notSqaure.isSquare());





