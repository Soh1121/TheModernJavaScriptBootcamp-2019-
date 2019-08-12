// Prototypal Inheritance

const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

Person.prototype.getBio = function () {
    return `${this.firstName} is ${this.age}.`
}

Person.prototype.location = `Thailand`

const me = new Person('Andrew', 'Mead', 27)
console.log(me.location)

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio())
