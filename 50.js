// Asynchronous Timer functions

/*
Timer functions let you schedule code execution - either after a delay or repeatedly at intervals.
They are part of the Web APIs (in browsers) or Node.js global timers (in backend JS).
*/

// 1. setTimeout()
console.log("step 1");

setTimeout(() => {
  console.log("step 2");
}, 0);

setTimeout(() => console.log("step 3"), 0);

console.log("step 4");

// 2. setInterval()
/*
The setInterval() method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
It continues running until you stop it using clearInterval(). 
clearInterval() stops the function to enter into registration segment again but the existing in the call stack will be executed fully.
*/
let count = 1;

const timer = setInterval(() => {
  console.log("Hello CFI");
  count++;
  if (count == 5) {
    clearInterval(timer);
    console.log("stopped");
    let a = 10;
    console.log("This is after clearInterval", a);
  }
}, 0o500);

