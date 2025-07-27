// // single loop
// for (let firstNum = 8; firstNum < 10; firstNum++) {
// 	for (let secondNum = 0; secondNum < 10; secondNum++) {
// 		console.log(
// 			`${firstNum} times ${secondNum} equals ${firstNum * secondNum}`,
// 		);
// 	}
// }

// for (let i = 100; i > 10; i -= 10) {
// 	for (let j = 10; j > 4; j -= 5) {
// 		console.log(`${i} divided by ${j} equals ${i / j}`);
// 	}
// }

// const cubes = "ABCDEFG";
// for (let i = 0; i < cubes.length; i++) {
// 	const styles =
// 		"font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
// 	console.log(`%c${cubes[i]}`, styles);
// }

// for (i = 1; i <= 10; i++) {
//   if (i === 1) {
//     console.log('Gold medal');
//   } else if (i === 2) {
//     console.log("Silver medal");
//   } else if (i === 3) {
//     console.log("Bronze medal");
//   } else {
//     console.log(i)
//   }
// }

// for (i = 1; i <= 10; i++) {
// 	switch (i) {
// 		case 1:
// 			console.log("Gold medal");
// 			continue;
// 		case 2:
// 			console.log("Silver medal");
// 			continue;
// 		case 3:
// 			console.log("Bronze medal");
// 			continue;
// 		default:
// 			console.log(i);
// 	}
// }

for (let i = 0; i < 5; i++) {
	if (i === 3) {
		break; // Exits the loop when i is 3
	}
	console.log("Break example:", i);
}

for (let i = 0; i < 5; i++) {
	if (i === 3) {
		continue
	}
	console.log("Continue example:", i);
}
