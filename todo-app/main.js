let toDos = getSavedTodos();

const filters = {
  searchText: ''
}

renderTodos(toDos, filters)

document.querySelector('#search-todos').addEventListener('input', function (event) {
  event.preventDefault()
  filters.searchText = event.target.value
  renderTodos(toDos, filters)
})

document.querySelector('#todos-form').addEventListener('submit', function (event) {
  event.preventDefault()
  const newTodoObject = {
    text: event.target.elements.addTodo.value,
    id: uuidv4(),
    completed: false
  }
  toDos.push(newTodoObject)
  saveTodos(toDos)
  renderTodos(toDos, filters)
  event.target.elements.addTodo.value = ''
})