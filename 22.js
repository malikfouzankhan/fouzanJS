// Control Statements (Part 4/4)

// Switch case
/*
A switch statement is used to compare one value against multiple possible cases. It's often cleaner than writing multiple if...else if conditions. 

Basic syntax
switch(expression)
{
case value1 : 
    // code
    break;
case value2 :
    // code
    break;
case value3 :
    //code
    break;
default :
    // code
}
*/

let day = "Thursday";
switch (day) {
  case "Sunday":
    console.log("It's holiday");
    break;
  case "Monday":
    console.log("It's Monday");
    break;
  case "Tuesday":
    console.log("It's Tuesday");
    break;
  case "Wednesday":
    console.log("It's Wednesday");
    break;
  case "Thursday":
    console.log("It's Thursday");
    break;
  case "Friday":
    console.log("It's Friday");
    break;
  case "Saturday":
    console.log("It's Saturday");
    break;
  default:
    console.log("Invalid day");
}

// if...else if for same problem
// if (day == "Sunday") {
//   console.log("It's holiday");
// } else if (day == "Monday") {
//   console.log("It's Monday");
// } else if (day == "Tuesday") {
//   console.log("It's Tuesday");
// } else if (day == "Wednesday") {
//   console.log("It's Wednesday");
// } else if (day == "Thursday") {
//   console.log("It's Thursday");
// } else if (day == "Friday") {
//   console.log("It's Friday");
// } else if (day == "Saturday") {
//   console.log("It's Saturday");
// } else {
//   console.log("Invalid input");
// }