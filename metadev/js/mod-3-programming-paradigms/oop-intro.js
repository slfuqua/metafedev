// class cat {
// 	constructor(breed, age) {
// 		this.breed = breed;
// 		this.age = age;
// 	}
// 	meow() {
// 		console.log("Meow!");
// 	}
// }

// class sabrina extends cat {
// 	constructor(breed, age, color) {
// 		super(breed, age);
// 		this.color = color;
// 	}
// 	purr() {
// 		console.log("Purr!");
// 	}
// 	meow() {
// 		super.meow();
//     console.log("Sabrina says meow!");
// 	}
// }
// const myCat = new sabrina("Siamese", 3, "white");
// myCat.meow(); // Output: Meow!
// // myCat.purr(); // Output: Purr!

// class Bird {
// 	useWings() {
// 		console.log("Flying!");
// 	}
// }
// class Eagle extends Bird {
// 	useWings() {
// 		super.useWings();
// 		console.log("Barely flapping!");
// 	}
// }
// class Penguin extends Bird {
// 	useWings() {
// 		console.log("Diving!");
// 	}
// }
// const baldEagle = new Eagle();
// const kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"

// const bird = {
//   sings: true,
//   flies: true,
// };

class Bird {
	constructor(sings = true) {
		this.sings = sings;
	}

	fly() {
		console.log("flying");
	}
}

const anotherBird = new Bird(false);

console.log(anotherBird.sings); // false (initialized by constructor)
anotherBird.fly(); // flying (inherited from prototype)
anotherBird.sings = true; // uncommenting this line will change the sings property to true
console.log(anotherBird.sings); // true (changed by the previous line)

console.log('---anotherBird---');
const secondBird = new Bird();

console.log(secondBird.sings); // true (initialized by constructor)
secondBird.fly(); // flying (inherited from prototype)
