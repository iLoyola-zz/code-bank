let notes = getSavedNotes()

const filters = {
  searchText: '',
  sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
  event.preventDefault()
  const id = uuidv4()
  const timeStamp = moment().valueOf()
  notes.push({
    title: '',
    id,
    body: '',
    createdAt: timeStamp,
    updatedAt: timeStamp
  })
  saveNotes(notes)
  location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (event) {
  filters.searchText = event.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-dropdown').addEventListener('change', function (event) {
  filters.sortBy = event.target.value
  renderNotes(notes, filters)
})

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
})

