'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('toDos')
  try {
    return notesJSON !== null ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
}
// Save todos to localStorage
const saveTodos = (toDos) => localStorage.setItem('toDos', JSON.stringify(toDos))

// Remove todo
const removeTodo = (id) => {
  const todoIndex = toDos.findIndex((todo) => todo.id === id)
  if (todoIndex > -1) {
    toDos.splice(todoIndex, 1)
  }
}

// toggle todo completed
const toggleTodo = (id) => {
  const todo = toDos.find((todo) => todo.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const filterTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))

  const incompleteTodos = filterTodos.filter((todo) => !todo.completed)

  document.querySelector('#todos-container').innerHTML = ''

  document.querySelector('#todos-container').appendChild(generateSummaryDOM(incompleteTodos))

  filterTodos.forEach((todo) => document.querySelector('#todos-container').appendChild(generateTodoDOM(todo)))
}
// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
  const todosContainer = document.createElement('div')
  const todoCheckbox = document.createElement('input')
  const todoButton = document.createElement('button')
  todoCheckbox.setAttribute('type', 'checkbox')
  todoCheckbox.checked = todo.completed
  todoCheckbox.setAttribute('id', todo.id)
  todoCheckbox.addEventListener('change', (event) => {
    toggleTodo(todo.id)
    saveTodos(toDos)
    renderTodos(toDos, filters)
  })
  const todoCheckboxLabel = document.createElement('label')
  todoCheckboxLabel.setAttribute('for', todo.id)
  todosContainer.appendChild(todoCheckbox)
  todosContainer.appendChild(todoCheckboxLabel)
  if (todo.text.length > 0) {
    todoCheckboxLabel.innerHTML = todo.text
  } else {
    todoCheckboxLabel.innerHTML = 'Unnamed todo'
  }
  todoButton.textContent = 'x'
  todoCheckboxLabel.appendChild(todoButton)
  todoButton.addEventListener('click', () => {
    removeTodo(todo.id)
    saveTodos(toDos)
    renderTodos(toDos, filters)
  })
  return todosContainer
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2')
  summary.textContent = `I have ${incompleteTodos.length} task left to do.`
  return summary
}