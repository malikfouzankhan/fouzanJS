/*
JavaScript ES6(also known as ECMAScript 2015 or ECMAScript6) is the sixth edition of JavaScript introduced in June 2015.

ECMAScript(European Computer Manufacturers Association Script) is the standard specification of JavaScript to ensure compatibility in all browsers and environments.

This tutorial provides a summary of commonly used features and syntax improvements of E6.
*/

// 1. let and const
// 2. Arrow functions
// 3. Template literals
// 4. Default parameters
    function print(name="MFK", age=21)
    {
        console.log(`My name is ${name} and my age is ${age}.`);
    }
    print();

// 5. Destructuring assignment
    let person = {
        name : "Fouzan",
        age : 21,
        isAlive : true
    };
    let {name, age} = person;
    console.log(name, age);

    let arr = ["MFK",21,null,true];
    let [a, b, c, d] = arr;
    console.log(a, b, c, d);

// 6. 