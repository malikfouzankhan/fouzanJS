// try...catch in JS
/*
The try...catch statement in JS is used to handle runtime errors - it lets your code keep running even if something goes wrong.
*/

/*
- Syntax

    try
    {
    
    }
    catch(error)
    {
        console.log(error);
    }
*/
let a = 10;
// console.log(b);
try
{
    let a = 10;
    console.log(b);
}catch(error)
{
    console.log("Gichi hogayi mama!!!\n\n");
    console.log(error.name, error.message);
}