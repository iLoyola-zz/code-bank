 // Challenge
 const toDos = [
   {
     text: "sleep",
     completed: true
   },
   {
     text: "eat",
     completed: false
   },
   {
     text: "poop",
     completed: false
   },
   {
     text: "read",
     completed: true
   },
   {
     text: "nothing",
     completed: true
   }
 ];

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed) {
      return -1
    } else if (!b.completed) {
      return 1
    } else {
      return 0
    }
  })
}

sortTodos(toDos)
console.log(toDos)