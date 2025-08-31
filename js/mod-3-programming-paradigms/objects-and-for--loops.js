// /* for arrays, sets, maps, strings, etc., we use for...of to iterate through them
// */

// const toys = ["car", "doll", "ball"];

// for (const toy of toys) {
//   console.log(toy)
// }

// /* For objects, JavaScript gives us helpers:
// - Object.keys(obj) → array of keys
// - Object.values(obj) → array of values
// - Object.entries(obj) → array of [key, value] pairs
// */

// const car = {
//   speed: 200,
//   color: 'red'
// }

// for (const key of Object.keys(car)) {
//   console.log(key)
// }

// // And...
// for (const [key, value] of Object.entries(car)) {
//   console.log(`${key}: ${value}`);
// }

// //  But we can also use for...in which retrieves keys of an object:
// for (const key in car) {
//   console.log(`${key}: ${car[key]}`);
// }

// const car = {
//   speed: 200,
//   color: 'red',
//   // This works
//   // drive: function drive() {
//   //   console.log('Vroom!');
//   // }
//   // This is simpler:
//   drive() {
//     // console.log('Vroom!');
//     return 'Vroom!';
//   }
// }
// console.log(Object.entries(car));
// // console.log(car.drive());
// car.drive(); // Only works in a browser console or Node.js REPL

var clothingItem = {
  price: 50,
  color: 'beige',
  material: 'cotton',
  season: 'autumn',
  displayDetails() {
    for (const key of Object.keys(this)) {
      if (typeOf [key] !== 'function') {
        console.log(`$[key]: $this[key]`);
      }
    }
  }
};    
