// String methods
// 1. charAt() method
    let str1 = "Hello";
    console.log(str1.charAt(0));
    // displays the character at that index

// 2. concat() method
    let str2 = "Hello";
    let str3 = "there!";
    console.log(str2.concat(str3));
    // merges two strings together

// 3. includes() method
    let str4 = "Hello there!";
    console.log(str4.includes("her"));
    // returns a boolean value if those character exist in the string in the same sequence

// 4. length 
    let str5 = "I am Malik Fouzan Khan";
    console.log(str5.length);
    // returns the length of the string including white spaces

// 5. indexOf() method
    let str6 = "Hello";
    console.log(str6.indexOf("l"));
    // returns the index of the first occurence of the first letter in the argument

// 6. lastIndexOf() method
    let str7 = "Hello";
    console.log(str7.lastIndexOf("l"));
    // returns the index of the first occurence from back of the first letter in the argument

// 7. repeat() method
    let str8 = "Hello there!";
    console.log(str8.repeat(5));
    // prints the string as many number of times as given in the argument

// 8. replace() method
    let str9 = "How are you my dear friend?";
    console.log(str9.replace("friend","enemy"));
    // changes the string in place by replacing the first argument with second argument

// 9. split() method
    let str10 = "Bye, I, am, Fouzan";
    console.log(str10.split("a"));
    // converts the string into an array separating elements with the given argument

// 10. toUpperCase() method
    let str11 = "my name is khan";
    console.log(str11.toUpperCase());
    // converts all characters to capital

// 11. toLowerCase() method
    let str12 = "MY NAME IS KHAN";
    console.log(str12.toLowerCase());
    // converts all characters to lower case

// 12. trim() method
    let str13 = "   Hello I am CFI   ";
    console.log(str13.trim());
    // trims whitespaces before and after content

// 13. slice() method
    let str14 = "Bring it on!";
    console.log(str14.slice(4,10));
    // prints characters from first argument to last argument index but last argument index is exclusive

// 14. padStart() method
    let str15 = "Hey";
    console.log(str15.padStart(10,"*"));
    // adds the given character the number of times after subtracting the length of string from end
    
// 15. padEnd() method
    let str16 = "Hey";
    console.log(str16.padEnd(10,"*"));
    //adds the given character the number of times after subtracting the length of string from back