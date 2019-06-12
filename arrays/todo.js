const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()

/*
// Delete the 3rd item
todos.splice(2, 1)
// Add a new item onto the end
todos.push('New item')
// Remove the first item from the list
todos.shift()
 */

console.log(`You have ${todos.length} todos!`)
console.log(todos)
