// Control Statements (Part 3/3)
// Break and Continue Statements

for(let i = 1;i <= 5;i++)
{
    console.log(i);
    if(i == 3)
    {
        break;
    }
}

for(let j = 1;j <= 5;j++)
{
    if(j == 3)
    {
        continue;
    }
    console.log(j);
}