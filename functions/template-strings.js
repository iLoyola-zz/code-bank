let name = 'Jen';
let age = 12;

console.log(`My name is ${name}!, I am ${age} years old.`);

// Challenge
let getTip = function ( total, tipPercent = 0.2 ) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip of $${total} would be $${tip}`;
}

let tip = getTip( 40, 0.25 );

console.log( tip );