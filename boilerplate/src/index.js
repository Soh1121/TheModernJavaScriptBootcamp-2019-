import { add, name } from './utilities'
import { scream } from './scream'

console.log('index.js')
console.log(add(32, 1))
console.log(name)

// 1. Create new file called scream.js
// 2. Export a "scream" function that takes a string
//    a. Convert that string to upper case
//    b. Add "!" onto the end
// 3. Import scream into index.js add use it

console.log(scream('scream'))
