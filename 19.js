// Control Statements (Part 2/2)


/*
    -> Looping Statements
      - Loops are used to execute a piece a code repeatedly

      - There are 2 types 
        1. Basic loops
        2. Advanced loops

      1. Basic loops
        - for loop :
            - Runs a block of code specicfic number of times.
            - Syntax : for(initialize; condition; updation)
                      {
                        code;
                      }
            - Control flow : initialize -> condition check -> code execution -> updation
*/
let a = 0;
for (a; a < 3; a++) {
  console.log(a,"for",a);
}

/*
        - while loop :
            - Runs a block of code when number of repetitions are undefined.
            - Syntax : initialization
                       while(condition)
                       {
                       code;
                       increment;
                       }
            - Control flow : initialization -> condition check -> code execution -> updation
*/
let b = 0;
while (b < 3) {
  console.log(b,"while",b);
  b++;
}

/*
        - do while loop :
            - Similar to while loop but the code block runs atleast once even if condition fails.
            - Syntax : initialization
                       do
                       {
                       code;
                       increment;
                       }while(condition);
            - Control flow : initialization -> code execution -> udpation -> condition check
*/
let c = 0;
do {
  console.log(c,"do while",c);
  c++;
} while (c < 3);