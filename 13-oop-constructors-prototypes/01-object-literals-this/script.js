const rectangle = {
    // key value pairs
    name: 'Rectangle 1',
    width: 10,
    height: 10,
    // Adding a function
    area: function () {
        return this.width * this.height;
    } 
};




const rectangle2 = {
    // key value pairs
    name: 'Rectangle 2',
    width: 333,
    height: 1330,
    // Adding a function
    area: function () {
        return this.width * this.height;
    } 
};


console.log(rectangle2.area());