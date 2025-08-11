
class Animal {
	constructor(color = "yellow", energy = 100) {
		this.color = color;
		this.energy = energy;
	}
	isActive() {
		if (this.energy > 0) {
			this.energy -= 20;
			console.log("Energy decreasing, currently at:", this.energy);
		} else if (this.energy === 0) {
			this.sleep();
		}
	}
	sleep() {
		this.energy += 20;
		console.log("Energy increasing, currently at:", this.energy);
	}
	getColor() {
		console.log(this.color);
	}
}

class Cat extends Animal {
	constructor(
		color,
		energy,
		sound = "purrr",
		canJumpHigh = true,
		canClimbTrees = true,
	) {
		super(color, energy);
		this.sound = sound;
		this.canClimbTrees = canClimbTrees;
		this.canJumpHigh = canJumpHigh;
	}
	makeSound() {
		console.log(this.sound);
	}
}

class Bird extends Animal {
	constructor(color, energy, sound = "chirp", canFly = true) {
		super(color, energy);
		this.sound = sound;
		this.canFly = canFly;
	}
	makeSound() {
		console.log(this.sound);
	}
}

class HouseCat extends Cat {
	constructor(
		color,
		energy,
		sound,
		canJumpHigh,
		canClimbTrees,
		houseCatSound = "meow",
	) {
		super(sound, canJumpHigh, canClimbTrees, color, energy);
		this.houseCatSound = houseCatSound;
	}
	makeSound(option) {
		if (option) {
			super.makeSound();
		}
		console.log(this.houseCatSound);
	}
}

class Tiger extends Cat {
	constructor(
		sound,
		canJumpHigh,
		canClimbTrees,
		color,
		energy,
		tigerSound = "ROARRR!",
	) {
		super(sound, canJumpHigh, canClimbTrees, color, energy);
		this.tigerSound = tigerSound;
	}
	makeSound(option) {
		if (option) {
			super.makeSound();
		}
		console.log(this.tigerSound);
	}
}

class Parrot extends Bird {
	constructor(sound, canFly, color, energy, canTalk = false) {
		super(sound, canFly, color, energy);
		this.canTalk = canTalk;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log("I'm a talking parrot!");
    }
  }
}

// Calling the classes and methods
const methodNames = Object.getOwnPropertyNames(Parrot.prototype);
console.log('Parrot methods:', methodNames); // ['constructor', 'makeSound', 'isActive', 'sleep', 'getColor']
const fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
const polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

console.log('Fiji says:');
fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

console.log('Polly says:');
polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!
polly.color; // yellow
polly.energy; // 100
polly.isActive(); // Energy is decreasing, currently at: 80

console.log('About the Penguin')
const penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
const penguinProperties = Object.getOwnPropertyNames(penguin);
console.log(penguinProperties); // ['color', 'energy', 'sound', 'can
// console.log(Object.keys(penguin)); // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }
penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

console.log('About Leo the House Cat');
const leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

console.log('About Cuddles the Tiger');
const cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!

console.log('About the Cat');
console.log(Cat);
