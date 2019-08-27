// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { getTodos, createTodo, removeTodo, toggleTodo } from './todos'
import { getFilters, setFilters } from './filters'
import { renderTodos } from './views'

// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

// Set up form submission handler
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    createTodo(text)
})

// Bonus: Add a watcher for local storage
