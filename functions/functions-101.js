// Function - input (argument), code, output (return value)

let greetUser = function () {
  console.log( 'Greeting user function!' );
}

greetUser();

let square = function( number ) {
  let result = number * number;
  return result
}

let num = 3;
let value = square( num )
let otherValue = square( 10 )

console.log( value ); // 9
console.log( otherValue ); // 100

// Challenge

let convertFahToCel = function( fahrenheit ) {
  let celsius = ( fahrenheit - 32 ) * 5 / 9;
  return celsius;
};

console.log( convertFahToCel( 100 ) ); // 37.7777777777