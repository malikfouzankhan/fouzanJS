// Functional Scope
/*
                        Var     Let     Const
--> Inside function     ✅      ✅      ✅
--> Outside function    ❌      ❌      ❌

*/

function hello()
{
    const me = 21
    console.log(me);
}
console.log(me);
