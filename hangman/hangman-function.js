// HTTP
// Request - What do we want to do
// Response - What was actually done

const puzzleElement = document.querySelector("#puzzle-word")
const statusElement = document.querySelector("#puzzle-status")

let game1

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
 render()
})

const render = () => {
  puzzleElement.textContent = game1.puzzle
  statusElement.textContent = game1.statusMessage
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#puzzle-reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//   console.log(puzzle)
// }).catch((error) => {
//   console.log(`Error: ${error}`)
// })

// getCountryDetails('US').then((country) => {
//   console.log(country.name)
// }).catch((error) => {
//   console.log(`Error: ${error}`)
// })

// getLocation().then((location) => {
//   return getCountryDetails(location.country)
// }).then((country) => {
//   console.log(country.name)
// }).catch((error) => {
//   console.log(`Error: ${error}`)
// })

// getCurrentCountry().then((country) => {
//   console.log(country.name);
// }).catch((error) => {
//   console.log(error);
// })