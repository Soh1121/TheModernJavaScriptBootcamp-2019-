const calculateAverage = (...numbers) => {
    // return (numOne + numTwo) / 2
    let sum = 0
    numbers.forEach((num) => sum += num)
    return sum / numbers.length
}

console.log(calculateAverage(0, 100, 88, 64))
