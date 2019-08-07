const squareLong = (num) => {
  return num * num
}

const square = (num) => num * num

console.log(square(5))

const people = [{
  name: 'Andrew',
  age: 25
}, {
  name: 'John',
  age: 32
}, {
  name: 'Jin',
  age: 23
}]

const underThrity = people.filter((person) => person.age < 30)
console.log(underThrity)

const is23 = people.find((person) => person.age === 23 )
console.log(is23.name)