// alert("some code");
// "use strict" below is ignored--it must be at the top
"use strict";

// let message;
// message = "Hello!";

// alert(message); // shows the variable content

let hello = "Hello world!";

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!


let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1

// var x = 1;

// if (x === 1) {
//   var x = 2;

//   console.log(x);
//   // Expected output: 2
// }

// console.log(x);
// // Expected output: 2
