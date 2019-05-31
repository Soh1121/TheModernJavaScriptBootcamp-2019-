// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-90, C 70-79, D 60-69, F 0-59

const gradeCalc = function (score, totalScore) {
    const percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'E'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}

const result = gradeCalc(9, 20)
console.log(result)

/* let calcPercent = function (score, totalScore) {
    let percent = score * 100 / totalScore
    return percent
}

let gradeCalc = function (percent) {
    if (percent >= 90 && percent <= 100) {
        return 'A'
    } else if (percent >= 80 && percent <= 89) {
        return 'B'
    } else if (percent >= 70 && percent <= 79) {
        return 'C'
    } else if (percent >= 60 && percent <= 69) {
        return 'D'
    } else {
        return 'E'
    }
}

let percent = calcPercent(90, 100)
let grade = gradeCalc(percent)
console.log(`You got a ${grade} (${percent}%)!`)
 */
