// read existing notes for localstorage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem('notes')
  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// remove a note from the list
const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id
  })
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// generate the dom structure for a note
const generateNoteDOM = function (note) {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('a')
  const noteButton = document.createElement('button')

  // set up remove note button
  noteButton.textContent = 'x'
  noteEl.appendChild(noteButton)
  noteButton.addEventListener('click', function (event) {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

  // set up note text
  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note'
  }
  textEl.setAttribute('href', `/edit.html#${note.id}`)
  noteEl.appendChild(textEl)
  return noteEl
}

// sort your notes 1 of 3 ways
const sortNotes = function (notes, sortBy) {
  if (sortBy === 'byEdited') {
    return notes.sort(function (a, b) {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byAlpha') {
    return notes.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return 0
  }
}

// render application notes
const renderNotes = function (notes, filters) {
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  document.querySelector('#notes').innerHTML = ''
  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note)
    document.querySelector('#notes').appendChild(noteEl)
  })
}

// save the notes to local storage
const saveNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the last edited message
const generateLastEdited = function (timestamp) {
  return `Last Edited: ${moment(timestamp).fromNow()}`
}
