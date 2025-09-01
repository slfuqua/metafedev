// The forEach method can be used to iterate over arrays
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
  console.log(`${index+1}. ${fruit}`);
};
fruits.forEach(appendIndex);

// ...or like this:
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {
  console.log(`${index+1}. ${veggie}`);
});

// Or with an arrow function:
const nums = [1, 2, 3];
nums.forEach((num, index) => {
  console.log(index, num);
});