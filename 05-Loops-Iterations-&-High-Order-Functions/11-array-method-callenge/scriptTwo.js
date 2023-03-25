const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
    // Filter the array to remove negative numbers
    .filter(postitive => postitive > 0)
    // taking the result from filter and using reduce add the positive numbers
    .reduce((acc, curr) => acc + curr, 0);

    console.log(positiveSum) // 79
