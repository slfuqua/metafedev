// Generate a decimal number greater than or equal to 0 (inclusive) and less than 1 (exclusive), i.e., .9999999...

// Generate a random integer between min and max, inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  console.log(`min is ${min}`)
  max = Math.floor(max);
  console.log(`max is ${max}`)
  randomNum = Math.random();
  console.log(`The random number is ${randomNum}`);
  result = Math.floor(randomNum * (max - min + 1) + min);
  console.log(`The result is: ${result}`)
  return result
}

getRandomInt(1, 10);

// Roll a die 10 times
// for (let i = 0; i <= 10; i++) {
//   console.log(getRandomInt(1, 6));
// }