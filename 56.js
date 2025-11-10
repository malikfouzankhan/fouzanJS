// Dates in JavaScript

/*
JavaScript Date and Time
In JavaScript, date and time are represented by the date object. The Date object provides the date and time information and also provides various methods.

A JavaScript date defines the ECMAScript epoch that represents milliseconds since 1 January 1970 UTC/ This date and time is the same as the UNIX epoch (predominant base value for computer-recorded date and time values.)

Creating Date objects
There are four ways to create a date object.

new Date()
new Date(milliseconds)
new Date(Date string)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

JavaScript has a built-in Date object to handle dates and times.
*/

let currDate = new Date();
console.log(currDate);

const date1 = new Date("2025-11-10T19:21:13.200Z");
console.log(date1);

const date2 = new Date(2025, 11, 10, 19, 22, 33);
console.log(date2);

const date3 = new Date(1760000000000);
console.log(date3);

// Date methods
// 1. .getMilliSeconds
    const now = new Date();
    console.log(now);
    console.log(now.getMilliseconds());

// 2. getFullYear
    console.log(now.getFullYear());

// 3. getMonth()
    console.log(now.getMonth());

// 4. getDate()
    console.log(now.getDate()); 

// 5. getDay()
    console.log(now.getDay());

// 6. getHours()
    console.log(now.getHours());

// 7. getMinutes()
    console.log(now.getMinutes());

// 8. getSeconds()
    console.log(now.getSeconds());

// To get milliseconds from 1 january 1970
console.log(now.getTime());
console.log(Date.now());
console.log(+new Date());