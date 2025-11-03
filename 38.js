// factorial
function fact(n)
{
    let ans = 1;
    for(let i = 1;i <= n;i++)
    {
        ans *= i;
    }
    return ans;
}
console.log(fact(6));

// using recursion
function numFact(num)
{
    if(num == 1 || num == 0)
    {
        return 1;
    }
    return num * numFact(num - 1);
}
console.log(numFact(5));