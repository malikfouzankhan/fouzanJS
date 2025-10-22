// Bitwise Operators

// Bitwise AND
let a1 = 10
let b1 = 2
console.log("The answer of Bitwise AND is", a1 & b1);

// Bitwise OR
let a2 = 10
let b2 = 2
console.log("The answer of Bitwise OR is", a2 | b2);

// Bitwise XOR
let a3 = 10
let b3 = 2
console.log("The answer of Bitwise XOR is", a3 ^ b3);

// Bitwise NOT
let a4 = 10
console.log("The answer of Bitwise NOT is", ~a4);
/*

10 => 00001010
~10 => 11110101 (This is a negative number(Two's complement). To convert it back to decimal, we invert it again and add 1.)
invert => 00001010
add 1 => 00001011

(All this is equal to ==> ~a = -(a + 1))

answer = -11
*/


