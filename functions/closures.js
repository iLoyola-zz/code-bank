const createCounter = () => {
  let count = 0
  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    }
  }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()

console.log(counter.get()) // -1

// Adder
const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

// Challenge
const createTipper = (percentage) => {
  base = percentage / 100
  return (amount) => {
    return `Tip amount: $${amount * base}`
  }
}

const percentage15 = createTipper(15)
console.log(percentage15(200))
