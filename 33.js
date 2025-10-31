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

