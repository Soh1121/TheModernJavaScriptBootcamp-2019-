const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()

console.log(`You have ${todos.length} todos!`)
todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})

// 1. The first item
// 2. The second item
// ...
/* for (let count = 1; count <= todos.length; count++) {
    console.log(`${count}. ${todos[count - 1]}`)
}
 */

 for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
 }
