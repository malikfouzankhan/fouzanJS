// Scoping in JS
// There are majorly 3 types of scoping

/*

1. Block scoping
2. Functional scoping
3. Global scoping

*/

// Block scope
/*
                       
                       Var     Let     Const
--> Inside block       ✅      ✅      ✅
--> Outside block      ✅      ❌      ❌

*/

{
    const me = 21
    // console.log(me);
}
console.log(me);