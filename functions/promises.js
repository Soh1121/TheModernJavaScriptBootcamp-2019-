const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is the data')
    }, 2000)
}

getDataCallback((err, data) => {
    if (err) {
        
    } else {
        console.log(data)
    }
})
