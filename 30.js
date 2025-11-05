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

// 17. every() method
    let arr6 = [2,4,6,8];
    console.log(arr6.every((x) => x > 2));

    // (x) => x > 2 === (x) => {return x > 2} === function test(x) {return x > 2} === text(x) => x > 2

    // checks if every element in the array passes a test (returns true/false)
    // Returns true if all elements pass the condition, otherwise false

// 18. find() method
    let arr7 = [2,3,5,6,7,8,9];
    console.log(arr7.find((x) => x % 4 == 0));
    // returns the first element that satisfies a condition.
    // returns the element itself or undefined if not found

// 19. findIndex() method
    let arr8 = [2,4,6,8,10];
    console.log(arr8.findIndex((x) => x % 2 == 0));
    // returns the index of the first element that satisfies a condition
    // returns index number or -1 if not found

// 20. forEach()
    let arr9 = ["kaif","saboor","rayyan","kamran"];
    arr9.forEach((x) => {
        console.log(x);
    })
    // executes a function for each element
    // return value : undefined 
    // chainable : No
    // changes original array : No
    // common use : logging, saving data
    // forEach Just loops - does not return anything