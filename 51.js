// Call back function
/*
A callback function is a function passed as an argument to another function, and is called ("called back") later inside that function.
*/
function greet(name, callback) {
  console.log("Hello" + name);
  callback();
}
function aftergreeting() {
  console.log("Welcome to code.live!");
}
greet("MFK", aftergreeting);
