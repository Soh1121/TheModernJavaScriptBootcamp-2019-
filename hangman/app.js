// product --> Object.prototype --> null
const product = new Object()

product.name = 'Rest'

Object.prototype.someNewMethod = () => 'This is the new function'

// hasOwnProperty
console.log(product.someNewMethod())
console.log(product)
