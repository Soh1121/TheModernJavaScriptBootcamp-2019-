const account = {
    name: 'Andrew Mead',
    expenses: [],
    incomes: [],
    /* addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        return `${this.name} has $${totalExpenses} in expenses.`
    } */
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
     addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
     },
     getAccountSummary: function () {
        let totalExpenses = 0
        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })
        let totalIncomes = 0
        this.incomes.forEach(function (income) {
            totalIncomes += income.amount
        })
        return `${this.name} has a blance of $${totalIncomes - totalExpenses}. $${totalIncomes} in income. $${totalExpenses} in expenses.`
     }
}

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

// Andrew Mead has a blance of $10. $100 in income. $90 in expenses.


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
