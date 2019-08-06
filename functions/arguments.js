// Multiple arguments
let add = function ( a, b, c ) {
  return a + b + c;
};

let result = add( 10, 20, 4 );
console.log( result ); // 34

// Default arguments
let getScoreText = function ( name = 'Anonymous', score = 0 ) {
  return 'Sport: ' + name + ' with a score of ' + score;
};

console.log( getScoreText() ); // Sport: Anonymous with a score of 0
console.log( getScoreText( 'Football', 3 ) ); // Sport: Football with a score of 3
console.log( getScoreText( undefined, 12 ) ); // Sport: Anonymous with a score of 12

// Challenge
let getTip = function ( total, tipPercent = 0.2 ) {
  return total * tipPercent + '%';
}

let tip = getTip( 100 );

console.log( tip );