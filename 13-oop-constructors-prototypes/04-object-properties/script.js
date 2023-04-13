function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle One', 20, 30);
const rect2 = new Rectangle('Rectangle Two', 20, 30);

// Dot notation
console.log(rect1.name, rect2.width);
// Bracet notation
console.log(rect1['width']);


// Add property
rect1.color = 'red';


//adding funtions 
rect2.perimeter = () => 2 * (rect2.width + rect2.height);

// delete property
delete rect2.perimeter;

// Get Keys
console.log(Object.keys(rect1))

// Get entries
console.log(Object.entries(rect1))



console.log(rect2);