// Use charAt()
function getCharAt(word, num) {
  if (num < 1 || num > word.length) {
    console.log('Number out of bounds');
  } else {
    char = word.charAt(num - 1);
    console.log(`The character at place ${num} in '${word}' is: '${char}'.`);
  }
  return char;
}

getCharAt('Republican', 4);

function getConcat(first, second) {
  if (first === undefined || second === undefined) {
    console.log('Both strings must be provided.');
    return '';
  } else {
    newWord = first.concat(second);
    console.log(`The concatenated word or statement is ${newWord}`);
  }
}

getConcat('my ', 'pizza');

function getIndex(word, char) {
  if (word === undefined || char === undefined) {
    console.log('Both word and character must be provided.');
    return -1;
  } else {
    theIndex = word.indexOf(char);
    // console.log(theIndex);
    console.log(`The index of '${char}' in the word '${word}' is ${theIndex}`);
    return theIndex;
  }
}

getIndex('pickle', 'k');

function getSplit(sequence, delimeter) {
  if (sequence === undefined || delimeter === undefined || !sequence.includes(delimeter)) {
    console.log("The input was invalid.");
    return -1;
  } else {
    theSplit = sequence.split(delimeter);
    console.log(theSplit);
    return theSplit;
  }
}

getSplit();

function getAllUpper(word) {
  if (word === undefined) {
    console.log('Entry is invalid.');
  } else {
    toUpper = word.toUpperCase();
    console.log(`The converted entry is ${toUpper}`)
    return toUpper;
  }
}

getAllUpper('hello world!');

function getAllLower(word) {
  if (word === undefined) {
    console.log('Entry is invalid.');
  } else {
    toLower = word.toLowerCase();
    console.log(`The converted entry is ${toLower}`)
    return toLower;
  }
}

getAllLower('HELLO WORLD');
