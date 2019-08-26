import { getFilters } from "./filters";

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    // 中身はまだいじっておらず
    const todoEl = document.querySelector('#todos')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (incompleteTodos.length > 0) {
        filteredTodos.forEach((todo) => todoEl.appendChild(generateTodoDOM(todo)))
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'There are no to-dos to show'
        todoEl.appendChild(messageEl)
    }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

// Make sure to set up the exports
