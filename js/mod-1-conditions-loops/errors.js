// Reference error: unassigned variable
// console.log(username);
/*
/Users/sherriefuqua/Library/CloudStorage/Dropbox/Courses/Meta/Front-End Dev/metafedev/js/mod-1-conditions-loops/errors.js:1
console.log(username);
            ^

ReferenceError: username is not defined
    at Object.<anonymous> (/Users/sherriefuqua/Library/CloudStorage/Dropbox/Courses/Meta/Front-End Dev/metafedev/js/mod-1-conditions-loops/errors.js:1:13)
    at Module._compile (node:internal/modules/cjs/loader:1734:14)
    at Object..js (node:internal/modules/cjs/loader:1899:10)
    at Module.load (node:internal/modules/cjs/loader:1469:32)
    at Module._load (node:internal/modules/cjs/loader:1286:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:152:5)
    at node:internal/main/run_main_module:33:47
*/

// Syntax error: missing operator
// let a "there is no assignment operator here";
/*
/Users/sherriefuqua/Library/CloudStorage/Dropbox/Courses/Meta/Front-End Dev/metafedev/js/mod-1-conditions-loops/errors.js:20
let a "there is no assignment operator here";
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

SyntaxError: Unexpected string
    at wrapSafe (node:internal/modules/cjs/loader:1666:18)
    at Module._compile (node:internal/modules/cjs/loader:1708:20)
    at Object..js (node:internal/modules/cjs/loader:1899:10)
    at Module.load (node:internal/modules/cjs/loader:1469:32)
    at Module._load (node:internal/modules/cjs/loader:1286:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:152:5)
    at node:internal/main/run_main_module:33:47
*/

// TypeError: incorrect method
// "hello".pop();
/*
TypeError: "hello".pop is not a function
    at Object.<anonymous> (/Users/sherriefuqua/Library/CloudStorage/Dropbox/Courses/Meta/Front-End Dev/metafedev/js/mod-1-conditions-loops/errors.js:40:9)
    at Module._compile (node:internal/modules/cjs/loader:1734:14)
    at Object..js (node:internal/modules/cjs/loader:1899:10)
    at Module.load (node:internal/modules/cjs/loader:1469:32)
    at Module._load (node:internal/modules/cjs/loader:1286:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:152:5)
    at node:internal/main/run_main_module:33:47
*/

// // Logical errors
// function addNumbers(a, b) {
// 	return a - b; // Logical error
// }
// console.log(addNumbers(5, 3));
// // Output: 2 (Incorrect, expected: 8)

// try {
// 	const a = b;
//   throw new Error(error);
// } catch (error) {
// 	console.log(error.name); // ReferenceError
// 	console.log(error.message); // b is not defined
// 	// console.log(error.stack); // Stack trace
// }

// function addTwoNums(a, b) {
//   try {
//     if (typeof a !== "number") {
//       throw new Error('Error: The first argument is not a number.');
//     } 
//     if (typeof b !== 'number') {
//       throw new Error('Error: The second argument is not a number.');
//     }
//     console.log(a + b);
//   }
//   catch (error) {
//     console.log(error.message);
//   }
//   return a + b;
// }
// addTwoNums("5", 5);
// console.log("Still running...");

// function letterFinder(word, match) {
//   try {
//     if (word.length < 2) {
//       throw new Error('Error: The word must be longer than two characters.');
//     } 
//     if (match.length !== 1) {
//       throw new Error('Error: Match length must be one character.');
//     }
//     if (typeof word !== 'string') {
//       throw new Error('Error: The word must be of type string.');
//     } 
//     if (typeof match !== 'string') {
//       throw new Error('Error: The match character must be of type string.');
//     }
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] === match) {
//         console.log(`Found the ${match} at ${i}`);
//       } else {
//         console.log(`---No match found at ${i}`);
//       }
// 		}
//   }
//   catch (error) {
//     console.log(error.message);
//     // console.log(error.stack);
//   }
// }

// letterFinder('M', 'pppp');

  const str = "Hello";
  console.log(str.match("jello"));


  Number(5).toPrecision(300);

