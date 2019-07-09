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

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

const filters = {
    searchText: '',
    hideCompleted: false
}

    const renderTodos = function (todos, filters) {
        const filteredTodos = todos.filter(function (todo) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        })

        document.querySelector('#todos').innerHTML = ''

        filteredTodos.forEach(function (todo) {
            const todoEl = document.createElement('p')
            todoEl.textContent = todo.text
            document.querySelector('#todos').appendChild(todoEl)
        })
    }

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    console.log(filters.searchText)
    renderTodos(todos, filters)
})

document.querySelector("#new-todo").addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

// 1. Create a checkbox and setup event listener -> "Hide completed"
// 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted an rerender list on checkbox change
// 4. Setup renderTodos to remove completed items

document.querySelector("#hide-completed").addEventListener('change', function (e) {
    if (e.target.checked) {
        const filteredTodos = todos.filter(function (todo) {
            return !todo.completed
        })

        document.querySelector('#todos').innerHTML = ''

        filteredTodos.forEach(function (todo) {
            const todoEl = document.createElement('p')
            todoEl.textContent = todo.text
            document.querySelector('#todos').appendChild(todoEl)
        })
    } else {
        renderTodos(todos, filters)
    }
})
