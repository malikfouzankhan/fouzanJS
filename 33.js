// Array methods
// 21. map() method
    let arr1 = [1,2,3,4,5,6,7,8,9,0];
    let new_arr = arr1.map((x) => x * 2).find((x) => x % 8 == 0);
    console.log(new_arr);
    // transforms each element and returns a new array
    // return value : new array
    // chainable : yes
    // changes original array : yes
    // common use case : creating new arrays
    // creates a new array with modified values and returns in a new array by default

// 22. filter() method
    let arr2 = [10,20,30,40,50];
    console.log(arr2.filter((x) => x > 30));
    let students = [
        {
            fullName : "Fouzan",
            age : 21,
            college : "MECS"
        },
        {
            fullName : "Rupjith",
            age : 20,
            college : "Drop"
        },
        {
            fullName : "Abdullah",
            age : 22,
            college : "Drop"
        }
    ]
    console.log(students.filter((x) => x.age > 21));
    // creates a new array filled with elements that pass a test(a condition you define in a function)
    // It does not change the original array

// 23. slice() method
    let arr3 = [1,2,3,4,5,6,7,8,9,10];
    console.log(arr3.slice(5,9));
    // used to copy or extract a portion of an array(or string) wihtout changing the original array

// 24. some() method
    let arr4 = [1,2,3,4,5,6,7,8,9];
    console.log(arr4.every((x) => x > 7));
    console.log(arr4.some((x) => x > 7));
    // checks if at least one of the elements in the array passes a test
    // returns true if any one element passes the test and returns false if all fails to pass the test

