let age = "old";
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary")
} else if (age < 18) {
  console.log("You get an allowance")
} else {
  console.log("The value of the age variable is not numerical")
}

let light = "green";

switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;
   case 'red':
       console.log("Don't drive");
       break;
   default:
       //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
}

let day = "Sunday";

switch (day) {
  case 'Sunday':
    console.log("It's Sunday");
    break;
  case 'Monday':
    console.log("It's Monday");
    break;
  case 'Tuesday':
    console.log("It's Tuesday");
    break;
  case 'Wednesday':
    console.log("It's Wednesday");
    break;
  case 'Thursday':
    console.log("It's Thursday");
    break;
  case 'Friday':
    console.log("TGIF!");
    break;
  case 'Saturday':
    console.log("It's Saturday!");
    break;
  default:
    console.log("Not a valid day of the week");
    break;
}
