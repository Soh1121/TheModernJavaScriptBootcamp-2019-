const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1
/* 
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
*/

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = `<span>${game1.puzzle}</span>`
    guessesEl.textContent = game1.statusMessage

    // game1.puzzle -> "*** co**"
    // 1. For each character in the string, addd a span into #puzzle
    // 2. The spans thext should just be the letter itself
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector("#reset").addEventListener('click', startGame)

startGame()

/*
getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})
*/

/*
getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})
*/
