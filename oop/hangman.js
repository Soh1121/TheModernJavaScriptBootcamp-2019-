// 1. Create a constructor function for the hangman game.
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed.
// 3. Create two instances of it and print both to the console.
const Hangman = function (word, guessesNumber) {
    this.word = word
    this.guessesNumber = guessesNumber
}

oneInstance = new Hangman('test', 5)
twoInstance = new Hangman('sample', 6)
console.log(oneInstance)
console.log(twoInstance)
