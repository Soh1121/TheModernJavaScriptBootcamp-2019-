// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instance property to store guessed letters
// 3. Create a method that gives you the word puzzle back

// No guesses? -> ***
// Guessed "c", "b", and "t"? -> c*t

const Hangman = function (word, remainingGuesses, guessedLetters = []) {
    this.word = word
    this.lowerCaseLetters = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = guessedLetters
}

Hangman.prototype.getPuzzle = function () {
    let result =''
    this.lowerCaseLetters.forEach((letter) => {
        const letterIndex = this.guessedLetters.findIndex((guessedLetter) => guessedLetter === letter)

        if (letterIndex > -1) {
            result += letter
        } else {
            result += '*'
        }
    })
    return result
}

const game1 = new Hangman('Cat', 2, ['c', 'b', 't'])
console.log(game1.getPuzzle())

const game2 = new Hangman('New Jersey', 4, ['c', 'b', 't'])
console.log(game2.getPuzzle())
