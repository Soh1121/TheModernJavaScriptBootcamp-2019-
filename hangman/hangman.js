// 1. Display the puzzle to the browser instead of the console
// 2. Display the guesses left to the browser insted of console
// 3. Separate the Hangman definition from the rest of the app code (use app.js)a

const game1 = new Hangman('Cat', 2)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
    game1.renderPuzzle()
})
