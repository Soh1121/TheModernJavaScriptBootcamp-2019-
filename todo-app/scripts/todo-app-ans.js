'use strict'

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// 1. Get a trimmed version of the input
// 2. Only add a new todo if it has content

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value
    const content = text.trim()
    if (content !== '') {
        todos.push({
            id: generateUuid(),
            text: content,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
    }
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
