let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = generateUuid()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`./edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// Unix Epoch - January 1st 1970 00:00:00

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

/* console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day of month: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minute: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`)
 */

 // 1. Create two dates in th past (use string for Date)
 // 2. Get timestamps for both
 // 3. Figure out which is first and print its time (use toString)
const datesOne = new Date('January 21, 2019 01:00:00')
const datesTwo = new Date('June 16, 2018 02:00:00')

const timestampOne = datesOne.getTime()
const timestampTwo = datesTwo.getTime()

const oneDate = new Date(timestampOne)
const twoDate = new Date(timestampTwo)
if (oneDate < twoDate) {
    console.log(oneDate.getTime())
} else {
    console.log(twoDate.getTime())
}
