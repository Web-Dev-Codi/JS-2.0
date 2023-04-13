


// The core of the rectangle constructor function for reusability
function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.height * this.width;
    };
}

//                          (name, width, height)
const rect1 = new Rectangle('Rectangle 1', 10, 10);

console.log(rect1.name);
console.log(rect1.area());

const rect2 = new Rectangle('Rectangle 2', 100, 34);
const rect3 = new Rectangle('Rectangle 3', 300, 55);

console.log(rect2.area());
console.log(rect3.area());




