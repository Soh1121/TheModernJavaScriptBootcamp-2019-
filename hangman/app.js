// product --> Object.prototype --> null
const product = {
    name: 'Influence'
}

Object.prototype.hasOwnProperty = () => 'This is the new function'

// hasOwnProperty
console.log(product.hasOwnProperty('hasOwnProperty'))
console.log(product)
