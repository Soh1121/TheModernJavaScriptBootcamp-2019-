const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
console.log(game1.status)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzle("2", (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

// 1. Create a new function for getting country details
// 2. Call it with two arguments: country code, the callback function
// 3. Make the HTTP request and call the callback with country information
// 4. Use the callback to print the country name
getCountry("US", (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(country)
    }
})
