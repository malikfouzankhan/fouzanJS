// Functions
/*
A function in JS is a block of code designed to perform a specific task.

You can reuse it anywhere in your code.

Implementation :
-> Declare the function.
-> Call the function.

How to do it:
-> Write function keyword
-> Function name and add ()
-> Add code
-> Call the function
*/


    // Simple Function
    
    function helloThere()
    {
        console.log("Hello there, I am using WhatsApp");
    }
    // helloThere()

    function makingBiryani()
    {
        console.log("Step 1: Get all the ingredients from the store.");
        console.log("Step 2: Prepare the meat in pressure cooker.");
        console.log("Step 3: Put rice in the utensil and mix with meat.");
        console.log("Step 4: Let it cook for 30 minutes.");
        console.log("Step 5: Serve it in plates and enjoy!!");
    }
    // makingBiryani();



    // Parameterized function
    //-> parameters : passed as variables
    //-> Arguments : passed as values
    function numCal(num1, num2, num3)
    {
        console.log(num1 + num2 + num3);
    }
    // numCal(10, 15, 25);
    function sayMyName(myName)
    {
        console.log("Assalam u alaikum, I am", myName,"from CFI.");
    }
    // sayMyName("Malik Fouzan");

    function myDetails(myName, myCollege, myContact, myCourse, myInstitute)
    {
        console.log(`Assalam u alaikum,\nI am ${myName} from ${myCollege}.\nI am studtying ${myCourse} at ${myInstitute}.\nThis is my contact: ${myContact}.`);
    }

    // myDetails("Malik Fouzan Khan", "Matrusri Engineering College", "+91 123456789", "Full Stack Web Development", "CFI");



    // Functions with return statement

    function cal(num1, num2)
    {
        return num1 + num2;
    }
    // console.log(cal(10, 15));
    function prod(num1, num2, num3)
    {
        return num1 * num2 / num3;
    }
    // console.log(prod(10, 15, 10));

    //-> Use return statement to get value back
    //->Do not write anything after return statement



    // Function Expressions

    // A function can also be stored in a variable

    function prod(a, b)
    {
        return a * b;
    }
    // console.log(prod(5, 6));
    let mul = function(x, y)
    {
        return x * y;
    }
    // console.log(mul(4, 5));



    // Arrow Functions

    // This came in the ES6 update
    let add = (n1, n2)=>{
        return n1 + n2;
    }
    console.log(add(10, 20));