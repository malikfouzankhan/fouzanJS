// JS object methods
let person = {
  fName: "MFK",
  age: 21,
  isAlive: true,
};
person.phone = 1234567890;
console.log(person);

person.age = 25;
console.log(person);

delete person.fName;
console.log(person);