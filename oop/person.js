const person = function (firstName) {
    this.firstName = firstName
}

const me = new person('Andrew')

console.log(me)
