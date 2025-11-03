// Recursion
/*
When a function calls itself repeatedly to solve multiples smaller problems, until it reaches a base case, is called as recursion
*/
function hello()
{
    console.log("Hello CFI");
    // hello(); ==> Infinite recursion
}
// hello();

function call(num)
{
    if(num == 0)
    {
        return console.log("Stopped the function");
    }
    console.log(`Task ${num}`);
    console.log(`completed`);
    return call(num - 1);
}
call(10)