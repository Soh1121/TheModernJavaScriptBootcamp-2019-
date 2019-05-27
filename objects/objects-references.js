let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}
let otherAccount = myAccount
otherAccount.income = 1000
otherAccount = {}

let addExpenses = function (account, amount) {
    account.expenses = account.expenses + amount
}

addExpenses(myAccount, 2.50)
console.log(myAccount)
