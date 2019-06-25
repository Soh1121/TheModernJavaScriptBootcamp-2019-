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

document.querySelector('button').addEventListener('click', function () {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = todos.shift().text
    document.querySelector('body').appendChild(newParagraph)
})
