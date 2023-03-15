
let x;

const arr = [35, 55, 95, 20, 20, 15];

arr.push(100);

// new array [35, 55, 66, 33, 765, 8878, 100]

//.pop deletes last index in the array.

arr.pop();

// new array [35, 55, 66, 33, 765, 8878]

// reverse the arry

// arr.reverse()

// arr.shift()

// arr.unshift()

//includes

x = arr.includes(33); //true since this number is in the array.

x = arr.includes(17);  // false since this number is not in the array.

// indexOf

x = arr.indexOf(55); // returns 55 which is in index 1.

//slice returns the index of the array. slice(1st argument, second argument)
// use 1st and second arguments to display the index of the array starting with the first argument and the second argument is the index of the ending of the displayed array values

x = arr.slice(1, 4); // returnes index 1 thru 4. Rememeber arrays start at index 0.

// x = arr.splice(1, 4);




console.log(x);