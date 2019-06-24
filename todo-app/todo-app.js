const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    if (p.textContent.indexOf('the') != -1) {
        p.remove()
    }
})
