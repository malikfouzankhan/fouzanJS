// Number Methods

// 1. parseFloat() method
    console.log(parseFloat("43.5")); // 43.5
    console.log(parseFloat("99ab65")); // 99
    console.log(parseFloat("ab123")); // NaN
    console.log(parseFloat("a1b2c3")); //NaN
    console.log(parseFloat("1a2b3c")); // 1
    // They are built-in JavaScript functions that convert strings into numbers(decimal).

// 2. parseInt() method
    console.log(parseInt("1111", 2));
    console.log(parseInt("1010", 2));
    console.log(parseInt("1000", 2));
    console.log(parseInt("1100100", 2));
    console.log(parseInt("1100011", 2));

    console.log(parseInt("1111", 16));

    console.log(parseInt("45.6789")); // does not round off but removes everything after '.' reagrdless
// They are built-in JavaScript functions that convert strings into numbers (can convert binaries, octals and hexadecimals to decimal values).
// We use parseInt for number systems

// 3. toFixed() method
    let num = 57.77583;
    console.log(num.toFixed());
    console.log(typeof num.toFixed());
    console.log(num.toFixed("hi")); // works similar to as if no argument was given
    console.log(num.toFixed(7));
    console.log(num.toFixed(3));
    // rounds off the number to the desired argument (by default rounds off without decimal point)
    // returns the value in string datatype

// 4. tolocaleString() method
    let _num_ = 123456.789;
    console.log(_num_.toLocaleString("en-US")); // 123,456.789
    console.log(_num_.toLocaleString("hi-IN")); // 1,23,456.789
    console.log(_num_.toLocaleString("de-DE")); // 123.456,789

    let price = 2500;
    console.log(price.toLocaleString("en-US",{style: "currency",currency: "USD"}));
    console.log(price.toLocaleString("hi-IN",{style: "currency",currency: "INR"}));
    console.log(price.toLocaleString("ja-JP",{style: "currency",currency: "JPY"}));
    console.log(price.toLocaleString("ar-SA",{style: "currency",currency: "SAR"}));
    console.log(price.toLocaleString("hi-IN",{style: "percent"}));

// it is a number method that formats a number according to a specific locale (country/language) or style - like adding commas, currency, or percentage
// syntax : number.toLocaleString([locales], [options])
// locales -> optional string like "en-US", "hi-IN", "de-DE", etc. (defines language and region format)
// options -> optional object to control formatting style (currency, decimals, etc.)