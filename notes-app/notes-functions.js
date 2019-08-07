// read existing notes for localstorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')
  return notesJSON ? JSON.parse(notesJSON) : []
}

// remove a note from the list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => {
    return note.id === id
  })
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// generate the dom structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('a')
  const noteButton = document.createElement('button')

  // set up remove note button
  noteButton.textContent = 'x'
  noteEl.appendChild(noteButton)
  noteButton.addEventListener('click', (event) => {
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
const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byAlpha') {
    return notes.sort((a, b) => {
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
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
  document.querySelector('#notes').innerHTML = ''
  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note)
    document.querySelector('#notes').appendChild(noteEl)
  })
}

// save the notes to local storage
const saveNotes = (notes) => localStorage.setItem('notes', JSON.stringify(notes))

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last Edited: ${moment(timestamp).fromNow()}`
