function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

// adding a method
Rectangle.prototype.area = function () {
  return this.width * this.height;
};


// Perimeter
Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

const rect = new Rectangle('Rect', 10, 10);

console.log(rect);

console.log(rect.perimeter())


