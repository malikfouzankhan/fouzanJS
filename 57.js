// Math methods

/*
In JavaScript, the Math object provides a set of built-in mathematical methods and constants for performing common math operations - like rounding numbers, generating random values, trigonometry, logarithms, etc.
*/

// Math.abs(x)
console.log(Math.abs(-4.5));

// Math.round(x)
console.log(Math.round(4.49));

// Math.ceil(x)
console.log(Math.ceil(4.1));

// Math.floor(x)
console.log(Math.floor(3.9999));

// Math.trunc(x)
console.log(Math.trunc(4.99));

// Math.sign(x)
console.log(Math.sign(1));

// Math.random()
console.log(Math.random());
console.log(Math.random() * (10 - 5) + 5);
console.log(Math.floor(Math.random() * 10) + 1);

let min = 1;
let max = 100;
console.log(Math.floor(Math.random() * (max + 1 - min) + min));