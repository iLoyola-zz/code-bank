// Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

let num = 34.34;

// to fixed method
console.log(num.toFixed(1)); //34.3

// Math method
console.log(Math.round(num)); // 34
console.log(Math.floor(num)); // 34
console.log(Math.ceil(num)); // 35

// Math random
let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // random number between 10 - 20

// Challenge
let makeGuess = function(guess) {
  let minGuess = 1;
  let maxGuess = 5;
  let randomGuess = Math.floor(Math.random() * (maxGuess - minGuess + 1)) + minGuess;
  console.log(randomGuess); // random number between 1 - 5
  return randomGuess === guess;
};
console.log(makeGuess(1)); // true or false if it matches with randomGuess