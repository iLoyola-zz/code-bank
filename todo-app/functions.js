// Fetch existing todos from localStorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('toDos')
  if (todosJSON !== null) {
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}
// Save todos to localStorage
const saveTodos = function (toDos) {
  localStorage.setItem('toDos', JSON.stringify(toDos))
}

// Remove todo
const removeTodo = function (id) {
  const todoIndex = toDos.findIndex(function (todo) {
    return todo.id === id
  })
  if (todoIndex > -1) {
    toDos.splice(todoIndex, 1)
  }
}

// toggle todo completed
const toggleTodo = function (id) {
  const todo = toDos.find(function (todo) {
    return todo.id === id
  })
  if (todo !== undefined) {
    todo.completed = !todo.completed
  }
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
  const filterTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const incompleteTodos = filterTodos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector('#todos-container').innerHTML = ''

  document.querySelector('#todos-container').appendChild(generateSummaryDOM(incompleteTodos))

  filterTodos.forEach(function(todo) {
    document.querySelector('#todos-container').appendChild(generateTodoDOM(todo))
  })
}
// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
  const todosContainer = document.createElement('div')
  const todoCheckbox = document.createElement('input')
  const todoButton = document.createElement('button')
  todoCheckbox.setAttribute('type', 'checkbox')
  todoCheckbox.checked = todo.completed
  todoCheckbox.setAttribute('id', todo.id)
  todoCheckbox.addEventListener('change', function (event) {
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
  todoButton.addEventListener('click', function () {
    removeTodo(todo.id)
    saveTodos(toDos)
    renderTodos(toDos, filters)
  })
  return todosContainer
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement('h2')
  summary.textContent = `I have ${incompleteTodos.length} task left to do.`
  return summary
}