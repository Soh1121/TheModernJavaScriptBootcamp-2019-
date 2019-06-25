const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

// You have 2 todos left (p element)
// Add a p for each to above (use value)

const leftTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${leftTodos.length} todos left`
document.querySelector('body').appendChild(summary)

leftTodos.forEach(function (todo) {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = todo.text
    document.querySelector('body').appendChild(newParagraph)
})
