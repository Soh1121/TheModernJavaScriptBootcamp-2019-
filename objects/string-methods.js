let name = '   Andrew Mead '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge area

// isValidPassword
// length is more than 8 - and it doesn't contain the word password

let isValidPassword = function (password) {
    /*
    let length_password = password.length
    let contain_password = password.includes('password')
    if (length_password > 8 && !contain_password) {
        return true
    } else {
        return false
    }*/
    /*
    if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }*/
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoijpassword'))
