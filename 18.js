// Control Statements (Part 1/2)

/*
    -> Conditional Statements
      --if else statements
          - if...else is used to run the code conditionally - only when a specific expression evaluates to "TRUE".

          - There are 3 types of if...else statements
              1. if statement
              2. if...else statement
              3. if...else if...else statement
*/
let age = 19;
if (age > 18) {
  console.log("Daaru pi miyan!!");
} else if (age == 18) {
  console.log("Ekich peg le miyan, Marjainga!!");
} else {
  console.log("Daaru se dur reh miyan!!");
}

let marks = 97;
if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B+");
} else if (marks >= 60) {
  console.log("B");
} else if (marks >= 50) {
  console.log("C");
} else {
  console.log("Nalayaq!! FAIL hogaya");
}

let temp = 18;
if (temp > 35) {
  console.log("It's hot");
} else if (temp > 25) {
  console.log("It's nice and normal");
} else {
  console.log("It's cold");
}