// Global scope - convertFahToCel, tempOne, tempTwo
  // Local scope - fahrenheit, celsius
    // Local scope - isFreezing

let convertFahToCel = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  if (celsius <= 0) {
    let isFreezing = true;
  };
  return celsius;
};

let tempOne = convertFahToCel(32);
let tempTwo = convertFahToCel(68);

console.log(tempOne);
console.log(tempTwo);