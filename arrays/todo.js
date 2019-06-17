let todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    todos.splice(index, 1)
}

const todos_hash = []
todos.forEach(function (value) {
    todos_hash.push({
        text: value,
        completed: false
    })
})
todos = todos_hash

deleteTodo(todos, 'buy food')
console.log(todos)
