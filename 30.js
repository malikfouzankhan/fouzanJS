// Array Methods

// 11. includes() method
    let arr1 = ["saboor","rayyan","kaif"];
    console.log(arr1.includes("rayyan"));
    // returns a boolean if the argument exists in the array

// 12. join() method
    let arr2 = ["saboor","rayyan","kaif"];
    console.log(arr2.join());
    // returns a string concatenated by the given argumnent. If no argument passed then uses comma

// 13. reverse() method
    let arr3 = [56,43,78,88,3,24,895,21,634];
    console.log(arr3.reverse());
    // returns a reversed array

// 14. sort() method
    let arr4 = [10,9,8,7,6,5,4,3,2,1];
    console.log(arr4.sort((a,b) => a - b));
    // sorts the array in place when a - b for ascending order and b - a for descending order

// 15. flat() method
    let arr5 = ["hello","hi",["bye","test"],"ok"];
    console.log(arr5.flat());
    // converts multi dimensional array into single dimensional array

// 16. Array.of() method
    let output = Array.of("hi",["hello",21],12,54,false);
    console.log(output);
    // creates an array with the given arguments

// every()
// find()
// findIndex()
// forEach()
// map()
// reduce()
// reduceRight()