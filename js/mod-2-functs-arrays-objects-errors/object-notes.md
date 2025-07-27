# Object Notes

## Explain three common ways to build objects

### Object Literal Syntax

Object literals are declared using curly braces `{}`.

```js
const user = {}; //Creates an empty object, "user"
```

Now, the variable `user` holds the object, and you can add properties and manipulate it in various ways.

Objects can also be fully defined using `{}` object literal syntax:

```js
const assistantManager = {
  movement: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40
}
```

### Dot Notation

We can also declare an empty object with object literal syntax, and then supply the properties using dot notation:

```js
const storeManager = {}; //Create an empty object
//Then add the properties
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = 'finding business opportunities';
storeManager.greeting = "Let's make some money";
```

### Brackets Notation

Finally, brackets notation can be used to build object. This approach explicitely adds properties as strings and allows spaces in them. Note that properties with spaces in their names cannot be accessed with dot notation.

```js
const car = {};
car.color = "red";
console.log('car is:', car);
car['color'] = 'green';
car["speed"] = 200;
car.speed = 100;
car["car color"] = "red";
console.log("car is:", car);
```

However, more useful is using bracket notation to evaluate expressions inside an object:

```js
const drone = {
  speed: 100,
  altitude: 200,
  color: "red"
}
const keys = Object.keys(drone);
for (const key in keys) {
  console.log(`${keys[key]}: ${drone[keys[key]]}`);  // Accessing properties using bracket notation
}
```

Alternatively:

```js
const drone = {
  speed: 100,
  altitude: 200,
  color: "red"
}
//Use both of the keys and values methods on the object to create two arrays
const keys = Object.keys(drone);
const vals = Object.values(drone);
for (let i = 0; i < keys.length; i++) {
  console.log(`${keys[i]}: ${vals[i]}`);
}
```

## Outline the common way to add new properties to objects (or update existing properties) using the dot notation

Properties can be accessed, added to, or updated, using dot notation:

```js
//Access the object or its properties
console.log(storeManager);
//Output
{
  rangeTilesPerTurn: 4,
  socialSkills: 50,
  streetSmarts: 50,
  health: 30,
  specialAbility: 'finding business opportunities',
  greeting: "Let's make some money."
}
//Or
console.log(storeManager.greeting)
//Output
Let's make some money.
//Update an existing propery:
storeManager.greeting = "Have a profitable day!"
console.log(storeManager.greeting)
//Output
Have a profitable day!
//New property
storeManager.excitementLevel = 5;
console.log(storeManager.excitementLevel);
//Output
5
```
