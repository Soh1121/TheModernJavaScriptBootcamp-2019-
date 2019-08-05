const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw 'Argument must be a number'
    }
}

const result = getTip(true)
console.log(result)
