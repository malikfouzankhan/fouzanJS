// Global scope

var i = 1;
let j = 2;
const k = 3;

{
  console.log(i);
  console.log(j);
  console.log(k);
}

print();

function print() {
  console.log(i);
  console.log(j);
  console.log(k);
}