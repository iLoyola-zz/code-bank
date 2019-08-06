const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1);
const notes = getSavedNotes()
const note = notes.find(function (note) {
  return note.id === noteId
})

if (note === undefined) {
  location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

// Setup input event for note title
titleElement.addEventListener('input', function (e) {
  note.title = e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

// Setup input event for note body
bodyElement.addEventListener('input', function (e) {
  note.body = e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

// Remove note on button click
document.querySelector('#remove-note').addEventListener('click', function (e) {
  removeNote(note.id)
  saveNotes(notes)
  location.assign('/index.html')
})

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    note = notes.find(function (note) {
      return note.id === noteId
    })

    if (note === undefined) {
      location.assign('/index.html')
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
  }
})