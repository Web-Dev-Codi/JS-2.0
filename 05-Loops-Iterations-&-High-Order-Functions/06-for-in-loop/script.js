// For in Loop


const colorObj = {
    color1: 'red',
    color2: 'black',
    color3: 'yellow',
    color4: 'pink',
};


for (const key in colorObj) {
    // Displays the key and values
    console.log(key, colorObj[key]);
}




// Looping through Arrays
const colorArr = ['Red', 'Green', 'Blue', 'Yellow'];

for (const key in colorArr) {
    console.log(colorArr[key])
}