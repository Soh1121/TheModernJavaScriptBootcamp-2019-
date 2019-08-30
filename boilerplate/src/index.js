const todo = {
    id: 'asdfpoijwermasdf',
    text: 'Pay the bills',
    completed: false
}

// const text = todo.text
// const completed = todo.completed

const { text:todoText, completed, details = 'No details provided', ...others } = todo

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)
