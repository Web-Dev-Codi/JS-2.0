// Block level scope

const x = 100;
const foo = 1;
var bar = 2;

if (true) {
    const y = 200;
    console.log(x + y)
}

// This concole log will not work sionce it is out of const x scope

// console.log(x+y)  // returnes y is not defined

for (let index = 0; index < 10; index++) {
    console.log("👌 ~ index:", index);
}

// console.log(index)

// Var keyword scope

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

// console.log("👌 ~ a:", a);  // will not work due to scope and const keyword

// console.log("👌 ~ b:", b);  // will not work due to scope and let keyword

console.log("👌 ~ c:", c); // will work due to var keyword

// Var is function scoped

function run() {
    var d = 100;
    console.log(d)
}

run();

// console.log(d)

