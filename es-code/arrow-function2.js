const add = function (a, b) {
  return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

const car = {
  color: 'red',
  getSummary: function () {
    return `This car is ${this.color}`
  }
}