// Undefined for variables
let name

name = 'Jen' // if this was missing then name is undefined

if (name === undefined) {
  console.log("Please provide a name");
} else {
  console.log(name); // 'Jen'
}

// Undefined for function arguments
let square = function ( num ) {
  console.log( num );
}

square(); // undefined

// Undefined as function return default value
let fullName = function ( name ) {
  console.log( name );
}

let result = fullName();
console.log( result ); // undefined undefined

// null as asigned value
let age = 34;

age = null;

console.log( age );