let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

// name, age, location
let me = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}

// Andrew is 27 and lives in Philadelphia.
console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)
// Increase age by 1 and print message again
me.age += 1
console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)
