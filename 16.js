// Type conversion
/*
Changing datatype from to another

There are two types of type conversions in JS
1. Implicit conversions
2. Explicit conversions

=> Implicit conversion
    - Any datatype with string
        let a = 2 + "1"
        console.log(a);

        let b = "1" + "hello"
        console.log(b);

        let c = false + ":("
        console.log(c);

        let d = null + ":)"
        console.log(d);

        let e = undefined + "^^"
        console.log(e);


    - Any datatype with number (use -, /, *, %)
        let a = "5" - 3;
        console.log(a);

        let b = 5 - "3"
        console.log(b);

        let c = true - "5"
        console.log(c);

        let d = "hello" - "hi"
        console.log(d); // ==> NaN - Not a Number

        let e = "4" / null;
        console.log(e);

        let f = '3' / undefined
        console.log(f);

    - Any datatype with null
        let a = "hi" + null
        cconsole.log(a)

        let b = 1 + null;
        console.log(b)

        let a = undefined + null
        console.log(a);
        

=> Explicit conversion

    - Using Number() method
        let a = Number("23");
        console.log(a);

        let b = Number(true)
        console.log(b);

        let c = Number(null)
        console.log(c);

        let d = Number(" ")
        console.log(d);

    
    - Using String() method
        let a = String(123)
        console.log(a);

        let b = String(false)
        console.log(b);

        let c = String(null)
        console.log(c);

        let d = String(undefined)
        console.log(d);

        let e = String()
        console.log(e);


    - using Boolean() method
*/
        let a = Boolean(1)
        console.log(a);

        let b = Boolean(0)
        console.log(b);

        let c = Boolean("0")
        console.log(c);

        let d = Boolean('48')
        console.log(d);

        let e = Boolean(null)
        console.log(e);

        let f = Boolean(undefined)
        console.log(f);

        let g = Boolean(NaN)
        console.log(g);

        let h = Boolean("")
        console.log(h);