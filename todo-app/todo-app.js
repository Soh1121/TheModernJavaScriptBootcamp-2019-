const todos = [{
    text: 'Order cat food',
    completed: true
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

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    if (p.textContent.indexOf('the') != -1) {
        p.remove()
    }
})
