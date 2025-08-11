

## Destructuring Arrays and Objects

Destructuring in JavaScript allows you to extract values from objects and arrays. Destructuring in JS is like unpacking lists or dictionaries in Python.

- Destructuring is similar to copying text formatting; it allows you to copy properties from one object or array to create new variables.
- An object or array can be thought of as a project folder containing various files, and destructuring is like copying a file to a new location.

Example of Destructuring
- For example extracting the value of `Math.PI` using destructuring syntax, ensure the correct property name is used (case-sensitive).
- After creating a new variable for `Math.PI`, the new variable is independent of the original property.

Independence of Variables
- Changing the value of the new variable does not affect the original property, illustrating that they are not connected.
- This independence is crucial for understanding how destructured variables operate in JavaScript.

```js
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

const { name, age } = person; // Destructuring
console.log(name); // Output: Alice
console.log(age);  // Output: 30
```

## Iterating Objects

We use `for...of` statements to iterate iterable objects such as arrays or strings. Example:

```js
const colors = ['red','orange','yellow']
for (let color of colors) {
    console.log(color);
}
// Output
red
orange
yellow
```

We can use this property of arrays to iterate the properties of an object:

```js
const car = {
  speed: 200,
  color: 'red'
}
console.log(Object.keys(car)); // [ 'speed', 'color' ]
console.log(Object.values(car)); // [ 200, 'red' ]
console.log(Object.entries(car)); // [ [ 'speed', 200 ], [ 'color', 'red' ] ]
```

As shown above, we can use object methods to provide arrays that can be iterated:

```js
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (const key of Object.keys(clothingItem)) {
  console.log(`${key}: ${clothingItem[key]}`)
}
```
