let name = 'Mike'

if ( true ) {
  let name = 'John'
  if ( true ) {
    city = 'Montreal'; // 'Montreal
    // Leaked Global - assigning a value to a variable which was not explictly defined.
    console.log( name ); // 'John'
    // Variable Shadowing - a variable in a local scope uses it's value instead of it's value in a parent scope
  }
}

if ( true ) {
  console.log( name ); // 'Mike'
}