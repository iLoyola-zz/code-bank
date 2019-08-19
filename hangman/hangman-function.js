const puzzleElement = document.querySelector("#puzzle-word");
const statusElement = document.querySelector("#puzzle-status")

const game1 = new Hangman("cat", 2);

window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleElement.textContent = game1.getPuzzle();
  statusElement.textContent = game1.getStatusMessage();
});

puzzleElement.textContent = game1.getPuzzle();
statusElement.textContent = game1.getStatusMessage()
