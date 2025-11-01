// forEach vs map
console.time("forEach");
// let a = [1,2,3,4,5,6,7,8,9,10];
// a.forEach((x) => console.log(x));
// console.timeEnd("forEach");

// console.time("map");
// let b = [1,2,3,4,5,6,7,8,9,10];
// let c = b.map((x) => console.log(x));
// // console.log(c);
// console.timeEnd("map")

const nums = Array.from({length: 1000}, (_, i) => i + 1);
// console.log(nums);
// for loop
console.time("table")
// for(let i = 1;i <= 1000;i++)
// {
//     console.log(`5 x ${i} = ${5*i}`);
// }

// nums.forEach((x) => console.log(`5 x ${x} = ${5*x}`));

// let b = [1,2,3,4,5,6,7,8,9,10];
let test = nums.map((x) => {
    return `5 x ${x} = ${5*x}`});
console.log(test);

console.timeEnd("table")