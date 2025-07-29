let clothes = [];

clothes.push('shirt');
clothes.push('sweats');
clothes.push('jeans');
clothes.push('slippers');
clothes.push('jacket');

console.log(clothes);

clothes.pop();
console.log(clothes);

clothes.push('sandals');
console.log(clothes);

const favCar = {};
favCar.color = 'black';
favCar.convertible = true;
console.log(favCar);
favCar.turnKey = function () {
  console.log("Jeep is running.");
}
favCar.turnKey();

const myCat = {
  purr() {
    console.log('Purrrr...');
  }
}
myCat.purr();
