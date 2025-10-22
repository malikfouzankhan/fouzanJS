/*
Datatypes in JS
1. Primitive 
2. Non Primitive

=> Primitive : Linear values (single value)
Example :
    -> String : "Hi", 'hello', `hey`
    -> Number : 5, 2.5, -5
    -> Boolean : true, false
    -> BigInt : 123456789n
    -> Null : let a = null (Denotes an empty value)
    -> Undefined : let a (Denotes uninitialized value)


=> Non Primitive : Non Linear values (Multiple types/values)
Example :
    -> Object :
                let person = {
                    firstName : "suhail",
                    age : 10,
                    isAlive : true,
                    sleeping : null
                    }
    -> Arrays : [`hello`, 1234, null]
*/

let person = {
    firstName : "MFK",
    age : 10,
    balance : 12345678901234n,
    isAlive : true,
    sleeping : null
}
console.log(person);

let details = ["MFK", 10, true, 1122334455667788n, null]
console.log(details);


