const getTip = (amount) => {
  if (typeof amount === 'number') {
    return amount * 0.25
  } else {
    throw Error('Argument must be a number')
  }
}

const result = getTip(true)
console.log(result)

// throw Error('Argument must be a number')
// ^

// Error: Argument must be a number
// at getTip(/Users/iLoyola / Projects / js - bootcamp / es - code /try-catch.js: 5: 11)
// at Object.<anonymous>(/Users/iLoyola / Projects / js - bootcamp / es - code /try-catch.js: 9: 16)
// at Module._compile(internal / modules / cjs / loader.js: 776: 30)
// at Object.Module._extensions..js(internal / modules / cjs / loader.js: 787: 10)
// at Module.load(internal / modules / cjs / loader.js: 643: 32)
// at Function.Module._load(internal / modules / cjs / loader.js: 556: 12)
// at Function.Module.runMain(internal / modules / cjs / loader.js: 839: 10)
// at internal / main / run_main_module.js: 17: 11

try {
  const result = getTip(true)
  console.log(result)
} catch (error) {
  console.log('catch block is running')
}