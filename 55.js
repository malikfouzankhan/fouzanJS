// JSON methods in JavaScript

/*
JavaScript provides two main global methods under the JSON object:
    1. JSON.stringify()
        Converts a JavaScript object -> JSON string

    2. JSON.parse()
        Converts a JSON string -> JavaScript object
*/
let person = {
    name: "Fouzan",
    age: 21,
    isAlive: true,
    isSleeping: null
}
console.log(person);
console.log(typeof person);

let final = JSON.stringify(person);
console.log(final);
console.log(typeof final);

let jsonPerson = `{
    "name":"Fouzan",
    "age":21,
    "isAlive":true,
    "isSleeping":null
}`;
console.log(jsonPerson);
console.log(typeof jsonPerson);

let finalObject = JSON.parse(jsonPerson);
console.log(finalObject);
console.log(typeof finalObject);