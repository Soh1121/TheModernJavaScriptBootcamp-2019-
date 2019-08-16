const data = {
    get location() {
        return 'This is a test'
    }
}

// code that uses the data object
data.location = '  Philadelphia    '
console.log(data.location)
