// Redeclare vs Reassign

/*
Redeclare means using declaration again to update value.
Works only for 'var'.
*/

/*
Reassign means using only variable name to update value.
Works for 'var' and 'let'.
*/

var haha = "haha"
var haha = "hehe"
haha = "hihi"
console.log(haha);

let hehe = "hihi"
hehe = "haha"
console.log(hehe);

const hihi = "haha"
console.log(hihi);