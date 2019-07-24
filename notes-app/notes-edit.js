const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('./index.html')
}

document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body

document.querySelector('#note-title').addEventListener('input', function (e) {
    const noteTitle = e.target.value
    if (noteTitle.length > 0) {
        note.title = noteTitle
        saveNotes(notes)
    } else {
        note.title = ""
        saveNotes(notes)
    }
})

document.querySelector('#note-body').addEventListener('input', function (e) {
    const noteBody = e.target.value
    if (noteBody.length > 0) {
        note.body = noteBody
        saveNotes(notes)
    } else {
        note.body = ""
        saveNotes(notes)
    }
})

document.querySelector('#remove-note').addEventListener('submit', function (e) {
    removeNote(note.id)
    location.assign('./index.html')
})
