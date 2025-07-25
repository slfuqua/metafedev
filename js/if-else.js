var age = 24;
if (typeof age === 'number') {
  if (age >= 65) {
    console.log("You get your income from a pension.");
  } else if (age <= 65 && age >= 18) {
    console.log("You get your income from a job.");
  } else if (age < 18) {
    console.log("You get your income from an allowance.");
  }
  else {
    console.log("You are not old enough to have an income.");
  }
} else {
    console.log("The value of the age variable is not numerical.");
}