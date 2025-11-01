for(let i = 1;i <= 5;i++)
{
    let row = " ";
    console.log("row before inner loop\n",row);
    for(let j = 1;j <= i;j++)
    {
        row += "* ";
    }
    console.log("row after inner loop\n",row);
}