// Practice of functions
function greet() {
  console.log("Hello everyone.");
}
greet();

function withName(fName) {
  console.log("I am", fName);
}
respond("Fouzan");

function respond(yourName) {
  return `Hello Fouzan, I am ${yourName}`;
}
console.log(respond("Suhail"));

let talk = function cont(desgination) {
  return `I am a ${desgination} at CFI.\n`;
};
talk("Teacher");
talk("Student");

let leave = (fName) => {
  console.log(fName, ": I am leaving");
};
leave("Fouzan");
