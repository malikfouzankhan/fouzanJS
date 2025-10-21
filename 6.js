// Functional Scope
/*
                        Var     Let     Const
--> Inside function     ✅      ✅      ✅
--> Outside function    ❌      ❌      ❌

*/
hello()

function hello()
{
    const me = 21
    console.log(me);
}
