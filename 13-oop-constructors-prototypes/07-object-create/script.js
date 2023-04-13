const rectanglePrototypes = {
    area: function () {
        return this.width * this.height;
    },
    perimeter: function () {
        return 2 * (this.width + this.height);
    },
    isSqaure: function () {
        return this.height === this.width;
    }
};



function createRectangle(height, width) {
    return Object.create(rectanglePrototypes, {
        height: {
            value: height
        },
        width: {
            value: width
        },
    });
}

const rect = createRectangle(10,20)
console.log(`👌 ~ rect:`, rect);
console.log(`👌 ~ rect:`, rect.area());
console.log(`👌 ~ rect:`, rect.isSqaure());


const rect2 = createRectangle(10, 20)
console.log(`👌 ~ rect2:`, rect2);
console.log(`👌 ~ rect2:`, rect2.area());
console.log(`👌 ~ rect2:`, rect2.perimeter());



    