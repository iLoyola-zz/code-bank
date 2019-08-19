// Prototypal Inheritance

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach(likes => {
      bio += ` ${this.firstName} likes ${likes}.`
    })
    return bio
  }
  setName(fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }
}

const me = new Employee('Ivan', 'Loyola', 65, 'CEO', ['fighting' ,'stealing']);
me.setName('Mike Smith')

console.log(me.getBio())