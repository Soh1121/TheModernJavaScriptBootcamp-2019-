// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
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

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState=== 4) {
        console.log('And error has taken place')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()

// 1. Make a new request for all countries
// 2. Parse the responseText to get back the array of objects
// 3. Find your country object by it's country code (alpha2Code property)
// 4. Print the full country name (name property)

const countryCode = "US"
const countries = new XMLHttpRequest()

countries.open('GET', 'https://restcountries.eu/rest/v2/all')
countries.send()

countries.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const responseText = JSON.parse(e.target.responseText)
        const japanData = responseText.filter((item) => {
            if (item.alpha2Code === 'JP') {
                return true
            }
        })[0]
        console.log(japanData.name)
    } else if (e.target.readyState === 4) {
        console.log('And error has taken place')
    }
})
