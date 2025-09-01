/*
Learning Objectives
By the end of this reading, you will:

- Be able to explain that there are several programming paradigms

- Be able to explain the basic difference between the two predominant programming paradigms: functional programming and object-oriented programming

- Understand, at a very high level, how the functional programming paradigm works
*/

function getTotal(a, b) {
  return a + b;
}

const num1 = 2;
const num2 = 3;

let total = getTotal(num1, num2);
console.log(total); // Output: 5

// Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It emphasizes the use of pure functions, which are functions that always produce the same output for the same input and do not have side effects.

// In functional programming, functions are first-class citizens, meaning they can be passed as arguments, returned from other functions, and assigned to variables. This allows for higher-order functions, which can take other functions as input or return them as output.

// Functional programming promotes immutability, meaning that data cannot be changed after it is created. Instead of modifying existing data, new data structures are created based on the original data. This leads to more predictable and easier-to-debug code.

// Functional programming also encourages the use of recursion, where a function calls itself to solve a problem, rather than using loops. This can lead to cleaner and more concise code.

// When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.

// Example of a pure function
function getDistance(mph, h) {
    return mph * h
}

const mph = 60;
const h = 2;
const distance = getDistance(mph, h);
console.log(distance); // Output: 120

// Functional programming is often contrasted with object-oriented programming (OOP), which organizes code around objects that contain both data and methods. While OOP focuses on encapsulating state and behavior within objects, functional programming emphasizes the use of functions to transform data without changing its state.

// In summary, functional programming is a paradigm that emphasizes the use of pure functions, immutability, and higher-order functions to create clean, predictable, and maintainable code. It is a powerful approach that can lead to more efficient and effective software development.

// Example of OOP with a class
class Car {
    constructor(mph) {
        this.mph = mph;
  }


    getDistance(h) {
        return this.mph * h;
    }
}

const myCar = new Car(60);
const hours = 2;
const distanceOOP = myCar.getDistance(hours);
console.log(distanceOOP); // Output: 120

// Another example of OOP
const virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
    console.log("Zzz...");
  }
};
console.log(virtualPet.sleepy);
virtualPet.nap(); // Output: Zzz...