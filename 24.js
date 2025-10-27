// Hoisting
// The declarations of variables and functions are pushed to the top of file.

let a = 10;
console.log(a); // initialization error 

hey(); // works without any issues
function hey(){
    console.log("Hello");
}

let hello = ()=>{
    console.log("Hey");
}
hello(); // initialization error

console.log(b); // not defined error