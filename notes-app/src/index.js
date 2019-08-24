import { getNotes, createNote, removeNote, updateNote } from './notes'

// console.log(getNotes())
// createNote()
//removeNote('887191c3-f157-44f8-a283-2c86026c4ad5')

updateNote('4631ab1f-4f9c-41d3-8487-bde704a2747c', {
    title: 'My note title',
    body: 'This is the body for my note.'
})
console.log(getNotes())
