let bookObject = {
  name: '1984',
  author: 'George Orwell',
  pageCount: 326
};

console.log(bookObject.author); // George Orwell

bookObject.title = 'Animal Farm';

console.log(bookObject.title); // Animal Farm

// Challenge
let person = {
  name: 'Ivan Loyola',
  age: 34,
  location: 'Montreal'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`); // Ivan Loyols is 34 and lives in Montreal

person.age = 54;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`); // Ivan Loyols is 54 and lives in Montreal