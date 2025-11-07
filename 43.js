// Ternary operator
/*
It's a shortcut for writing if...else statements - all in one line.

Syntax : 
    condition ? ifTrue : ifFalse
*/

// 15 > 10 ? console.log("nice") : console.log("not nice");
let myAge = 21;
if(myAge > 18)
{
    console.log("I can vote");
}
else
{
    console.log("I can't vote");
}

let output = myAge > 18 ? "I can vote" : "I can't vote";
console.log(output);