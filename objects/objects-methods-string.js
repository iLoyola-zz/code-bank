// Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let name = 'Ivan Loyola';

// Length property
console.log(name.length); // 11

// Convert to upper case
console.log(name.toUpperCase()); // IVAN LOYOLA

// Include method
let password = '123passwordabc';
console.log(password.includes('password')); // true

// Challenge
let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password');
};

console.log(isValidPassword('sefaf'));
console.log(isValidPassword("45e^*6sefu6faf"));
console.log(isValidPassword("sefpassword4$af"));