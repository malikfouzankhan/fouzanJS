// Synchronous vs Asynchronous

/*
In synchrnous code, each line runs one after another, waiting for the previous one to finish before moving on.

-> JS waits for each line to complete before running the next one.

-> These run immediately, line-by-line, and block the next task until they finish.
    console.log("Step 1");
    console.log("Step 2");
    console.log("Step 3");
*/
/*
Synchronous (Blocking)


    Type                                    Examples
---------------------------------------------------------------------------------------------
| Normal code execution       |    `console.log()`, variable declarations                   |
| Math operations             |    `let sum = a + b;`                                       |
| Loops                       |    `for`, `while`, `do...while`                             |
| Conditional statements      |    `if`, `else`, `switch`                                   |
| Function Calls (normal)     |    `function myFunc() {...}` -> `myFunc()`                  |
| JSON parsing                |    `JSON.parse()`, `JSON.stringify()`                       |
| DOM manipulation (usually)  |    `document.getElementById()`, `element.innerHTML = "..."` |
| Error Handling              |    `try{...} catch(err) {...}`                              |
| Blocking alerts             |    `alert()`, `prompt()`, `confirm()`                       |
---------------------------------------------------------------------------------------------
➡️ These execute in order and block the call stack until done.

*/

/*
Asynchronous (Non - Blocking)
➡️ These are delegated to the browser or Node.js APIs and run in the background, allowing JS to move on.

    Type                                    Examples
--------------------------------------------------------------------------------------------------
| Time                        |    `setTimeout()`, `setInterval()`                               |
| Promises                    |    `Promise.resolve()`, `Promise.reject()`, `.then()`, `.catch()`|
| Async Functions             |    `async function getData() {await fetch(...)}                  |
| Fetch API                   |    `fetch("https://api.example.com")`                            |
| Network Requests            |    `XMLHttpRequest`, `axios.get()`                               |
| File System (Node.js)       |    `fs.readFile()`, `fs.writeFile()` (async versions)            |
| Database Queries            |    `MongoDB`, `MySQL queries`, etc                               |
| Event Listeners             |    `button.addEventListener("click", ...)                        |
| Animation frames            |    `requestAnimationFrame`                                       |
| Web Workers                 |    `Background threads for heavy computation`                    |
--------------------------------------------------------------------------------------------------
➡️ These are handled by the Event Loop, Web APIs and Callback Queue - they don't block other code.

*/