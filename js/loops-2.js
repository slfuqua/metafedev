// for (i = 1; i < 6; i++) {
//   console.log(i);
//   if (i === 5) {
//     console.log('Counting completed!');
//   }
// }

// for (let i = 5; i !== 0; i--) {
//   console.log(i)
//   if (i === 1) {
//     console.log('Countdown finished!')
//     // break;
//   }
// }

let condition = true;
let counter = 5;

while (condition) {
  console.log(counter);
  counter -= 1;
  if (counter === 0) {
    condition = false;
  }
}