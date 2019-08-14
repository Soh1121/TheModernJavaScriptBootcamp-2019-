// Create a method for making a guess
// 1. Should accept a character for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't match

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle =''
    
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.getGuessingCharacter = function (guessingCharacters) {
    this.guessedLetters = guessingCharacters.split('')
}

Hangman.prototype.remainingGuesse = function (result) {
    const resultWord = result.split('')
    this.remainingGuesses = resultWord.filter((item) => item === '*').length
    return this.remainingGuesses
}

const game1 = new Hangman('Cat', 2)
// Guess c, t, z
game1.getGuessingCharacter('ctz')
const puzzle1 = game1.getPuzzle()  // c*t
// Print remaining guesses (shoud be 1)
console.log(puzzle1)
console.log(`should be ${game1.remainingGuesse(puzzle1)}`)

const game2 = new Hangman('New Jersey', 4)
// Guess w
game2.getGuessingCharacter('w')
const puzzle2 = game2.getPuzzle() // **w ******
console.log(puzzle2)
console.log(`should be ${game2.remainingGuesse(puzzle2)}`)
