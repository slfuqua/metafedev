// Task 1: Code a Person class
// WRITE YOUR CODE HERE - Define the Person class
class Person {
  constructor(name = 'Tom', age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep () {
    this.energy += 10;
    console.log(`${this.name} is sleeping. Energy is now ${this.energy}.`);
  }
  doSomethingFun () {
    this.energy -= 10;
    console.log(`${this.name} is doing something fun. Energy is now ${this.energy}.`);
  }
}

// Task 2: Code a Worker class
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  
  goToWork() {
    this.xp += 10;
    console.log(`${this.name} is going to work. XP is now ${this.xp}.`);
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  const intern = new Worker('Bob', 21, 110, 0, 10);
  intern.goToWork();
  console.log(`${intern.name} is an intern with ${intern.xp} XP and earns $${intern.hourlyWage} per hour.`);
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
  const manager = new Worker('Alice', 30, 120, 100, 30);
  // WRITE YOUR CODE HERE - Call the doSomethingFun() method
  manager.doSomethingFun();
  console.log(`${manager.name} is a manager with ${manager.xp} XP and earns $${manager.hourlyWage} per hour.`);
  return manager;
    // WRITE YOUR CODE HERE - Return the manager object
}

const newIntern = intern();
const newManager = manager();

// Output the intern and manager objects
// console.log(`The new intern is ${newIntern}`); 
// console.log(`The new manager is ${newManager});`);
