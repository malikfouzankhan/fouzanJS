// try...catch...finally
// It's a way to handle errors in JS so your program does not crash
/*
syntax : 
try
{
    #code that might cause an error;
}
catch(error)
{
    #code that runs *if* an error happens;
}
finally
{
    #code that always runs(error or not);
}
*/

try {
  let output = 10 / 0;
  console.log(output + a);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("Hello, I am finally");
}