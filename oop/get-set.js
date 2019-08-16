const data = {
    get location() {
        return 'This is a test'
    },
    set location(value) {
        this._location = value.trim()
    }
}

// code that uses the data object
data.location = '  Philadelphia    '
console.log(data)
