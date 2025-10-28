// Arrays in JS

let person = ["MFK", 21, true, null, undefined];
// note : arrays uses indexing in JS
// Indexing starts from 0
// Using index, we can perform CRUD operations

// Access
console.log(person[0]);

// create
person[6] = "Malik";

// update
person[0] = "Fouzan";

// delete
delete person[6];
console.log(person);