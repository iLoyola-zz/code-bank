let bookObject = {
  name: "1984",
  author: "George Orwell",
  pageCount: 326
};

let bookObject2 = {
  name: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723
};

let getSummary = function (book) {
  return {
    summary: `${book.name} by ${book.author}`,
    pageCountSummary: `${book.name} is ${book.pageCount} pages long`
  };
  // console.log(`${book.name} by ${book.author}`);
};

let bookSummary = getSummary(bookObject);
let otherBookSummary = getSummary(bookObject2);

console.log(bookSummary.pageCountSummary);

// Challenge
let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius: (fahrenheit -  32) * (5 / 9)
  }
};

let temps = convertFahrenheit(74);

console.log(temps);