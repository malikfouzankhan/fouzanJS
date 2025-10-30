// Array methods
// There are a total of 30 array methods

// 1. at() method
    let arr = ["hi","hello","bye"];
    console.log(arr.at(0));
    // similar to console.log(arr[0])
    
// 2. concat() method
    let str1 = ["I","am"];
    let str2 = ["Malik","Fouzan"];
    console.log(str1.concat(str2));
    // merges the two arrays in the order [str1, str2]
    // str1 + str2 gives I,amMalik,Fouzan which means it removes the array structure from the arrays

// 3. fill() method
    let fruits = ["Apple","Mango","Orange"];
    console.log(fruits.fill("PineApple"));
    // replaces all the elements with given argument

// 4. indexOf() method
    let nums = ["one","two","three","four"];
    console.log(nums.indexOf("three"));
    // returns the index of the given argument and returns -1 if the value does not exist

// 5. lastIndexOf() method
    let arr1 = [10,20,30,10];
    console.log(arr1.lastIndexOf(10));
    // returns index of the given argument from the back and returns -1 if the value does not exist

// 6. length() property
    let arr2 = [1,2,3,4,5,6];
    console.log(arr2.length);
    // returns the count of total number of elements

// 7. push() method
    let arr3 = [10,20,30];
    // console.log(arr3.push(50));
    arr3.push(50);
    console.log(arr3);
    // adds the argument to the last of the array

// 8. pop() method
    let arr4 = [1,2,3,4];
    console.log(arr4.pop());
    // removes and returns the last element of the array

// 9. unshift() method
    let arr5 = [1,2,3,4];
    arr5.unshift(0);
    console.log(arr5);
    // adds an element at the beginning of the array

// 10. shift() method
    let arr6 = [0,1,2,3,4];
    console.log(arr6.shift());
    // removes and returns an element from the beginning