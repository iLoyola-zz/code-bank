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
  set fullName(fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }
  getBio() {
    return `${this.fullName} is a ${this.position}.`
  }
  getYearsLeft() {
    const timeToRetire =  65 - this.age
    if (timeToRetire <= 0) {
      return `${this.firstName} ${this.lastName} has retired`;
    }
    return `${this.firstName} ${this.lastName} has ${timeToRetire} year(s) until retirement.`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }
  updateGrade(change) {
    this.grade += change
  }
  getBio() {
    const status = this.grade >= 70 ? 'passing' : 'failing'
    return `${this.firstName} is ${status} this class.`
  }
}

const me = new Student('Ivan', 'Loyola', 65, 88, []);
me.updateGrade(-20)

console.log(me)
