// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
        // Andrew is a Teacher
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio () {
        return this.grade >= 70 ? `${this.firstName} is passing the class` : `${this.firstName} is failing the class`
    }
    updateGrade (amount) {
        this.grade += amount
    }
}

// 1. Create class for students
// 2. Track student grade. 0 - 100
// 3. Override bio to print a passing or failing message. 70 and above "Andrew is passing the class"
// 4. Create "updateGrade" that takes the amount to add or remove from the grade

// Create student
student = new Student('Andrew', 'Mead', 27, 69)
// Print status (failing or passing)
console.log(student.getBio())
// Change grade to change status
student.updateGrade(1)
// Print status again
console.log(student.getBio())
