// const assistantManager = {
//   movement: 3,
//   socialSkills: 30,
//   streetSmarts: 30,
//   health: 40
// }

// const storeManager = {};
// storeManager.rangeTilesPerTurn = 4;
// storeManager.socialSkills = 50;
// storeManager.streetSmarts = 50;
// storeManager.health = 30;
// storeManager.specialAbility = 'finding business opportunities';
// storeManager.greeting = "Let's make some money";

// console.log(storeManager);
// console.log(assistantManager);

// for (const key in storeManager) {
//   if (Object.prototype.hasOwnProperty.call(storeManager, key)) {
//       console.log(`${key}: ${storeManager[key]}`);
//   }
// }
// console.log(storeManager.greeting)

// //Update a property
// storeManager.greeting = "Have a profitable day!"
// console.log(storeManager.greeting)

// //New property
// storeManager.excitementLevel = 5;
// console.log(storeManager.excitementLevel);

// const car = {};
// car.color = "red";
// console.log('car is:', car);
// car['color'] = 'green';
// car["speed"] = 200;
// car.speed = 100;
// car["car color"] = "red";
// console.log("car is:", car);

const drone = {
  speed: 100,
  altitude: 200,
  color: "red"
}
const keys = Object.keys(drone);
for (const key in keys) {
  console.log(`${keys[key]}: ${drone[keys[key]]}`);  // Accessing properties using bracket notation
}

// const keys = Object.keys(drone);
// const vals = Object.values(drone);
// for (let i = 0; i < keys.length; i++) {
//   console.log(`${keys[i]}: ${vals[i]}`);
// }
