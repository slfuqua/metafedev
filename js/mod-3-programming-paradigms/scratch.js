// const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

// for (let color of colors) {
//   console.log(color)
// }

// const car = {
//   speed: 200,
//   color: 'red'
// }
// console.log(Object.keys(car)); // [ 'speed', 'color' ]
// console.log(Object.values(car)); // [ 200, 'red' ]
// console.log(Object.entries(car)); // [ [ 'speed', 200 ], [ 'color', 'red' ] ]

// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for (const key of Object.keys(clothingItem)) {
//   console.log(`${key}: ${clothingItem[key]}`)
// }

// function testBracketsDynamicAccess() {
//   var dynamicKey;
//   if (Math.random() > 0.5) {
//     dynamicKey = "speed";
//   } else {
//     dynamicKey = "color";
//   }

//   var drone = {
//     speed: "15",
//     color: "orange"
//   }
//   // Log the value of the property specified by dynamicKey to demonstrate dynamic property access
//     console.log(drone[dynamicKey]);
// }

// testBracketsDynamicAccess();

function makeCounter() {
  let count = 0; // This variable is private to makeCounter

  return function() {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

