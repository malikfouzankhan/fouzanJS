// Objects in JS
// It is a non-primitive datatype
// Stores data in key-value pairs
// 

let person = {
    fName : "Fouzan",
    age : 21,
    isAlive : true,
    money : null,
    peace : undefined
};
// console.log(person.fName);
// console.log(person.age);
// console.log(person.isAlive);
// console.log(person.money);
// console.log(person.peace);

// console.log(person["fName"]);
// console.log(person["age"]);
// console.log(person["isAlive"]);
// console.log(person["money"]);
// console.log(person["peace"]);

// CRUD
// C -> Create
// R -> Read
// U -> Update
// D -> Delete

// Access - Read
console.log(person.fName);

// Create - Create
person.address = "Hyd";
console.log(person);

// Update - Update
person.address = "Tolichowki";
console.log(person);

// Delete - Delete
delete person.address
console.log(person);