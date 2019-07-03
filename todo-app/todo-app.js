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

let newTodo = ""

document.querySelector('button').addEventListener('click', function () {
    const newParagraph = document.createElement('p')
    /* newParagraph.textContent = todos.shift().text */
    newParagraph.textContent = newTodo
    document.querySelector('body').appendChild(newParagraph)

})

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add a new todo.')
})

document.querySelector('#new-todo').addEventListener('input', function (e) {
    newTodo = e.target.value
})
