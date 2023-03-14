let x;

x = 5 + '5'; // this would display string and not number as it should

x = 5 + Number('5');// must wrap stringed numbers to get correct output

x = 5 * '5';// equals 25

x = 5 + null; // 5

x = Number(null); // 0

x = Number(true); // true equals 1 

x = Number(false); // false equals 0

x = 5 + true; // equals 6

x = 5 + false; // equals 5

console.log(x, typeof x);
